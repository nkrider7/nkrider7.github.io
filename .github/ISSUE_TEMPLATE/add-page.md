name: Add new content page
description: Create a page by giving a title and content; workflow creates the file path automatically.
title: "New page request: {page-title}"
labels: [new-page]

## 1) Page title
Write the title in the issue title or in the body. For example:

`New page request: Demo Page`

## 2) Content section
Wrap the markdown content between markers.

```
<!-- content -->
# Demo Page

Write your page content here.
<!-- /content -->
```

> Workflow creates: `content/learning/demo-page.mdx` (slug from the title).  If you want, you can include `'page-path: content/learning/custom-name.mdx'` manually, but it is not required.

