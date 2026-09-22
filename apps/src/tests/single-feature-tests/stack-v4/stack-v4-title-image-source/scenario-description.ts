import type { ScenarioDescription } from '@apps/tests/shared/helpers';

export const scenarioDescription: ScenarioDescription = {
  name: 'Title & Subtitle Image Source',
  key: 'stack-v4-title-image-source',
  details:
    'Tests titleImageSource on the legacy header config: a bundled image renders as a leading glyph before the title, scaling with titleFontSize and tinted with titleColor, including a custom titleFontFamily. Also tests subtitleImageSource rendering a glyph before the subtitle, independently from the title glyph. Remote URIs render text-only until the image resolves, resolved images are cached by URI, an unresolvable source falls back to text-only, and a title changed while a load is in flight settles on the newest title. The large-title screen checks expanded and collapsed rendering; a custom title view checks title replacement while the native subtitle remains visible. The kitchen sink screen combines a left drawer button, a title and subtitle each with their own icon, two right bar button items (one plain action, one opening a native menu), and a search bar. The opaque, translucent and transparent background screens check that an explicit header background color still renders correctly whether opaque, translucent or fully transparent, while a screen with no background color uses the system default appearance.',
  platforms: ['ios'],
  e2eCoverage: 'tbd',
  smokeTest: false,
};
