import { Asset, Entry } from 'contentful';

export interface Plan {
  id: string;
  title: string;
  highlightList: HighlightList;
  slug: string;
  description: string;
  discountPercentage?: number;
  offer?: string;
}

export interface ProductPlanEntry {
  title: string;
  covered: Entry<CoveredHighlightListEntry>;
  nonCovered: Entry<NonCoveredHighlightListEntry>;
  slug: string;
  promotionalPlan: boolean;
  description: string;
  discountPercentage?: number;
  offer?: string;
}

interface CoveredHighlightListEntry {
  title: string;
  subtitle: string;
  highlights: Entry<CoveredHighlightsEntry>[];
}

export interface CoveredHighlightsEntry {
  title: string;
  subtitle: string;
  description: string;
  icon: Asset;
  active: boolean;
  label: string;
}

interface NonCoveredHighlightListEntry {
  title: string;
  subtitle: string;
  highlights: Entry<NonCoveredHighlightsEntry>[];
}

export interface NonCoveredHighlightsEntry {
  title: string;
  description: string;
  icon: Asset;
  active?: boolean;
}

export interface HighlightsParams {
  id: string;
  title: string | null;
  subtitle?: string;
  highlights: CoveredHighlights[];
}

export interface HighlightList {
  covered: HighlightsParams;
  nonCovered: HighlightsParams;
}

export interface CoveredHighlights {
  id: string;
  title: string;
  description: string;
  icon: string;
  subtitle?: string;
  active?: boolean;
  label?: string;
}

interface NonCoveredHighlights {
  id: string;
  title: string;
  description: string;
  icon: string;
}
