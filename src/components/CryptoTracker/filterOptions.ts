export const FILTER_OPTIONS = ['all', 'topGainers', 'topLosers', 'marketCap'] as const;

export type FilterType = typeof FILTER_OPTIONS[number];
