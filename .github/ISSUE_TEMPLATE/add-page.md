name: Add new content page
description: Create a page by filling metadata and markdown body in this issue.
title: "New page request: {page-title}"
labels: [new-page]

## 1) Page location
Please set a unique target path inside `content/`:

`page-path: content/learning/my-new-article.mdx`

## 2) Page title
`page-title: My Article Title`

## 3) Content section
Wrap the markdown content between markers.

```
<!-- content -->
Your Markdown or MDX content here.
<!-- /content -->
```

> Example:
>
> page-path: content/learning/rust-cheat.mdx
> page-title: Rust Cheat Sheet
>
> <!-- content -->
> # Rust Cheat Sheet
> ...
> <!-- /content -->
