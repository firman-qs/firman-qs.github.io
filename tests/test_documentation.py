"""Build-level checks for documentation routing and draft isolation.

Run with: python3 -m unittest discover -s tests -v
"""
from pathlib import Path
import shutil
import subprocess
import tempfile
import unittest


ROOT = Path(__file__).resolve().parents[1]


class DocumentationTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.temp = tempfile.TemporaryDirectory()
        cls.site = Path(cls.temp.name) / "site"
        cls.site.mkdir()
        for name in ("content", "layouts", "static", "themes"):
            shutil.copytree(ROOT / name, cls.site / name, ignore=shutil.ignore_patterns(".git"))
        shutil.copy2(ROOT / "hugo.toml", cls.site)
        fixtures = {
            "projects/test-kit/_index.md": '---\ntitle: Test Kit\n---\n',
            "projects/test-kit/v1/_index.md": '---\ntitle: v1\nweight: 10\n---\nVersion one.\n',
            "projects/test-kit/v1/install.md": '---\ntitle: Install\nweight: 10\n---\n## Requirements\nInstall here.\n',
            "projects/test-kit/v1/guides/_index.md": '---\ntitle: Guides\nweight: 20\n---\n',
            "projects/test-kit/v1/guides/usage.md": '---\ntitle: Usage\nweight: 10\n---\n## Run\nUse it.\n',
            "projects/test-kit/v2/_index.md": '---\ntitle: v2\nweight: 20\n---\n',
            "projects/test-kit/v2/install.md": '---\ntitle: Install v2\n---\n',
            "projects/test-kit/v2/secret.md": '---\ntitle: Secret\ndraft: true\n---\n',
        }
        for name, body in fixtures.items():
            target = cls.site / "content" / name
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text(body)
        for mode, flags in (("production", []), ("preview", ["--buildDrafts"])):
            result = subprocess.run(
                ["hugo", "--panicOnWarning", "--source", str(cls.site), "--destination", str(cls.site / mode), *flags],
                capture_output=True, text=True,
            )
            if result.returncode:
                raise RuntimeError(result.stdout + result.stderr)

    @classmethod
    def tearDownClass(cls):
        cls.temp.cleanup()

    def html(self, path, mode="production"):
        return (self.site / mode / path / "index.html").read_text()

    def test_nested_markdown_automatically_uses_docs_navigation(self):
        html = self.html("projects/test-kit/v1/guides/usage")
        self.assertIn('aria-label="Documentation navigation"', html)
        self.assertIn('href="/projects/test-kit/v1/install/"', html)
        self.assertIn('href="/projects/test-kit/v1/guides/usage/" aria-current="page"', html)
        self.assertIn('aria-label="Breadcrumbs"', html)
        self.assertIn('href="#run"', html)
        self.assertNotIn('href="/projects/test-kit/v2/install/"', html)

    def test_version_links_and_reading_order(self):
        html = self.html("projects/test-kit/v1/install")
        self.assertIn('href="/projects/test-kit/v2/"', html)
        self.assertIn('rel="next" href="/projects/test-kit/v1/guides/usage/"', html)
        html = self.html("projects/test-kit/v1/guides/usage")
        self.assertIn('rel="prev" href="/projects/test-kit/v1/install/"', html)

    def test_drafts_are_not_linked_in_production(self):
        self.assertNotIn('/projects/test-kit/v2/secret/', self.html("projects/test-kit/v2"))
        self.assertIn('/projects/test-kit/v2/secret/', self.html("projects/test-kit/v2", "preview"))
        self.assertFalse((self.site / "production/projects/example-lab").exists())
        self.assertTrue((self.site / "preview/projects/example-lab/v1/getting-started/index.html").exists())
        for name in ("index.html", "index.xml", "sitemap.xml", "projects/index.html"):
            self.assertNotIn('example-lab', (self.site / "production" / name).read_text())

    def test_projects_listing_preserves_content_and_docs_stay_out_of_posts(self):
        html = self.html("projects")
        self.assertIn('https://elm.sim/', html)
        self.assertIn('href="/projects/test-kit/"', html)
        self.assertEqual(html.count('>Projects &amp; Publications</a>'), 1)
        home = self.html("")
        self.assertNotIn('/projects/test-kit/v1/install/', home)
        self.assertIn('/posts/', home)


if __name__ == "__main__":
    unittest.main()
