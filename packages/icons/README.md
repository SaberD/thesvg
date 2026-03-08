# @thesvg/icons

Tree-shakeable SVG icon data for 3,800+ brand logos from [thesvg.org](https://thesvg.org).

Each icon is a standalone module that exports the raw SVG string and metadata.
Only the icons you import are included in your bundle.

## Installation

```bash
npm install @thesvg/icons
pnpm add @thesvg/icons
bun add @thesvg/icons
```

## Usage

### Import a single icon (tree-shakeable)

```ts
import github from "@thesvg/icons/github";

console.log(github.svg);        // raw SVG string
console.log(github.title);      // "GitHub"
console.log(github.hex);        // "181717"
console.log(github.categories); // ["DevTool", "VCS"]
console.log(github.variants);   // { default: "<svg…>", mono: "<svg…>" }
```

### Named exports from the icon module

```ts
import { svg, title, hex, categories, variants } from "@thesvg/icons/github";
```

### Import many icons from the barrel

> Note: importing from the root barrel includes all icons and prevents tree-shaking.
> Prefer individual imports when bundle size matters.

```ts
import { github, vercel, tailwindcss } from "@thesvg/icons";
```

### Render in a React component

```tsx
function BrandLogo({ slug }: { slug: string }) {
  // Dynamic import at runtime
  return (
    <div
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

// Or statically with a specific icon
import { svg } from "@thesvg/icons/github";

export function GithubLogo() {
  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
}
```

### Check available variants

```ts
import github from "@thesvg/icons/github";

// github.variants is a Record<string, string> of all SVG strings
// Keys depend on which variants the icon has, e.g.:
// "default", "mono", "light", "dark", "wordmark", "wordmarkLight", "wordmarkDark"

const monoSvg = github.variants["mono"];
```

## Icon module shape

Every icon module exports the following:

```ts
interface IconModule {
  slug: string;      // URL-safe slug, e.g. "github"
  title: string;     // Brand name, e.g. "GitHub"
  hex: string;       // Brand color without "#", e.g. "181717"
  categories: string[];
  aliases: string[];
  svg: string;       // Raw SVG string for the default variant
  variants: Record<string, string>; // All variant SVG strings
  license: string;   // SPDX identifier, e.g. "CC0-1.0"
  url: string;       // Source URL for the brand asset
}
```

## Tree-shaking

`@thesvg/icons` is marked `"sideEffects": false`. When bundled with webpack,
Rollup, Vite, or esbuild, only the icons you import will be included.

```ts
// Only github ends up in your bundle
import github from "@thesvg/icons/github";
```

## CDN

For quick prototyping without a bundler, use the thesvg API directly:

```
https://thesvg.org/icons/{slug}/default.svg
```

Example:

```html
<img src="https://thesvg.org/icons/github/default.svg" alt="GitHub" width="24" height="24" />
```

## License

Icons are distributed under their respective upstream licenses (CC0-1.0, MIT, etc.).
See each icon's `license` field. The package itself is MIT.

Built with data from [thesvg.org](https://thesvg.org).
