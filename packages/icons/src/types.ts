/**
 * Shared types for @thesvg/icons.
 *
 * Every generated icon module conforms to IconModule.
 */

/** Map of variant name to raw SVG string. Keys are whatever variants exist
 * for that icon (e.g. "default", "mono", "light", "dark", "wordmark", …). */
export type IconVariants = Record<string, string>;

/** Shape of every generated icon module. */
export interface IconModule {
  /** URL-safe slug used as the module name, e.g. "github". */
  slug: string;
  /** Human-readable brand title, e.g. "GitHub". */
  title: string;
  /** Brand hex color without leading "#", e.g. "181717". May be empty string. */
  hex: string;
  /** Category tags, e.g. ["DevTool", "VCS"]. */
  categories: string[];
  /** Aliases / alternative spellings. */
  aliases: string[];
  /** Raw SVG string for the default variant. Empty string if unavailable. */
  svg: string;
  /** All available variant SVG strings keyed by variant name. */
  variants: IconVariants;
  /** SPDX license identifier, e.g. "CC0-1.0". */
  license: string;
  /** Canonical URL for the brand asset source. */
  url: string;
}
