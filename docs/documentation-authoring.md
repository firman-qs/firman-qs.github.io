# Writing project documentation

Documentation lives in `content/projects/<project>/<version>/`. Hugo automatically
uses the documentation layout for this section; no `layout` or `type` setting is
needed. The site's existing project and publication links remain at `/projects/`.
Documentation is kept out of the homepage's post list.

## Preview the complete example

Run `hugo server -D` and visit:

- `http://localhost:1313/projects/`
- `http://localhost:1313/projects/example-lab/v1/getting-started/`

The example has two versions, nested guides and references, code blocks, tables,
and equations. Its project `_index.md` sets `draft: true` and cascades that setting
to every descendant. Normal `hugo` builds and `hugo server` omit the example and
its links. `-D` enables drafts regardless of the environment name; never use it
for production deployment.

## Create a project

Use this structure (Hugo's directory is singular `content`, not `contents`):

```text
content/projects/my-project/
├── _index.md
└── v1/
    ├── _index.md
    ├── getting-started.md
    ├── guides/
    │   ├── _index.md
    │   └── first-run.md
    └── reference/
        ├── _index.md
        └── configuration.md
```

Add project front matter to `my-project/_index.md`:

```yaml
---
title: "My Project"
description: "What the project does."
draft: true
cascade:
  draft: true
---

An introduction to the project.
```

Add version front matter to `v1/_index.md`:

```yaml
---
title: "v1.0"
description: "Documentation for version 1.0."
weight: 10
---

An overview and links to useful starting points.
```

`_index.md` gives a folder its title, description, introductory content, and
position in navigation. Hugo also creates implicit sections for directories
without `_index.md`, so adding a regular Markdown file below a project/version
still uses the documentation layout. Each immediate folder below a project is
treated as a version. Use a folder named `latest` for an unversioned manual.

Create a regular page with:

```sh
hugo new content --kind docs projects/my-project/v1/getting-started.md
```

Pages created by this archetype start as drafts. Use `weight` in their front
matter to order sibling pages and sections (lower values first). Previous/next
links follow that same order through nested sections, within the current version.
Version links open each version's overview; lower version weights appear first.

## Publish

Set the project's own `draft` and `cascade.draft` to `false` (or remove them).
Remove any explicit `draft: true` from pages you want to publish: explicit page
front matter overrides inherited cascade values. To hide just one version, put
`draft: true` and `cascade: { draft: true }` in that version's `_index.md`.

Build with `hugo` without `-D`. Check the generated site before deployment.
The provided Example Lab remains a draft unless you change its front matter.

## Content and navigation

- Markdown headings populate the page-contents navigation. Set `toc: false` on
  a page if it does not need one.
- Code fences reuse the site's syntax highlighting; equations reuse its math
  rendering. Set `math: false` for pages that do not need equations.
- Use relative links carefully: pages have trailing-slash URLs. Hugo's `relref`
  shortcode can resolve links for you, for example
  `[Installation]({{< relref "/projects/my-project/v1/getting-started" >}})`.
- The sidebar and page contents collapse on small screens. Native disclosure
  controls and version links also work without JavaScript.
- Keep illustrations beside the page in a leaf bundle (`topic/index.md`) and
  reference them as `![Description](diagram.svg)`.

## Verify layout behaviour

Run `python3 -m unittest discover -s tests -v` to build temporary production and
draft sites and check routing, nested navigation, reading order, and draft isolation.
