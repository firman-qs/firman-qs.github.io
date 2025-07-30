#!/bin/bash

set -e  # Stop on error

# Build site and add .nojekyll
zola build
touch public/.nojekyll

# Deploy to gh-pages
cd public
git init
git checkout -b gh-pages
git remote add origin git@github.com:firman-qs/firman-qs.github.io.git
git add .
git commit -m "Update site on $(date)"
git push -f origin gh-pages

# Cleanup
cd ..
rm -rf public/.git

echo "✅ Deployed to gh-pages"
