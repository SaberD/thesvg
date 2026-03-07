# Data Source Reference (Internal)

## simple-icons (3,411 icons)

**Data file:** `simple-icons/data/simple-icons.json`
**SVGs:** `simple-icons/icons/{slug}.svg`
**Format:** JSON array

```json
{
  "title": ".NET",
  "hex": "512BD4",
  "source": "https://github.com/dotnet/brand/...",
  "guidelines": "...",
  "license": { "type": "CC0-1.0" },
  "aliases": { "aka": ["dotnet"], "old": [...] }
}
```

- Slug derived from title (lowercase, special char removal)
- viewBox: 0 0 24 24, monochrome only
- No categories

## svgl (595 entries, 967 SVG files)

**Data file:** `svgl/src/data/svgs.ts`
**SVGs:** `svgl/static/library/{name}.svg`
**Format:** TypeScript array

```typescript
{
  title: "NVIDIA",
  category: ["AI", "Hardware", "Platform"],
  route: { light: "/library/nvidia-icon-light.svg", dark: "/library/nvidia-icon-dark.svg" },
  wordmark: { light: "/library/nvidia-wordmark-light.svg", dark: "/library/nvidia-wordmark-dark.svg" },
  url: "https://www.nvidia.com",
  brandUrl: "https://www.nvidia.com/...",
}
```

- route can be string (single variant) or { light, dark }
- wordmark optional, same structure
- 41 categories defined

## lobe-icons (286 icon sets)

**TOC:** `lobe-icons/src/toc.ts`
**Components:** `lobe-icons/src/{IconName}/components/`
**Format:** TSX React components

```typescript
// toc.ts entry
{
  id: "Claude", title: "claude", fullTitle: "Claude",
  color: "#D97757", colorGradient: "...",
  group: "model",
  param: { hasAvatar: true, hasColor: true, hasCombine: true, ... }
}
```

- SVGs embedded as JSX <path d="..."> in component files
- Variants: Mono.tsx, Color.tsx, Avatar.tsx, Combine.tsx, Text.tsx
- Need to extract path data and reconstruct SVG files
- viewBox: 0 0 24 24

## Deduplication Strategy

1. Use slug as primary key (kebab-case from title)
2. When same brand appears in multiple repos:
   - simple-icons provides: mono variant, hex color, aliases
   - svgl provides: color/light/dark variants, wordmarks, categories
   - lobe-icons provides: color variants (extracted from JSX)
3. Merge all variants into single entry
4. Prefer svgl categories, fall back to lobe-icons group mapping
