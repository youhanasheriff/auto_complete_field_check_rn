import { Asset, Entry, EntryFields } from 'contentful';
import { Story } from '../types/story';
import {
  CoveredHighlights,
  Plan,
  ProductPlanEntry,
} from '../types/productPlan';

export interface ProductDetails {
  id: string;
  slug: string;
  title: string;
  description: EntryFields.RichText;
  imageUrl: string;
  underwriter: string;
  active: boolean;
  hasProductSpecificQuestions: boolean;
  promotionTitle: string;
  storyListTitle: string;
  stories: Story[];
  snippetTitle: string;
  snippetSlides: SnippetSlide[];
  faqLink?: string;
  pricingTableUrl?: string;
  icon: string;
  productSummaryLink?: string;
  plans: Plan[];
  features: CoveredHighlights[];
  freeLookPeriod: CommonContentfulType | null;
  comparePlan: CommonContentfulType | null;
  proPromotionCaption: string;
}

export interface SnippetSlide {
  id: string;
  description: string;
  title: string;
  imageUrl: string;
}

export interface ProductDetailsEntry {
  title: string;
  description: EntryFields.RichText;
  slug: string;
  position: number;
  image: Asset;
  underwriter: Asset;
  active: boolean;
  hasProductSpecificQuestions: boolean;
  promotionTitle: string;
  storyListTitle: string;
  stories: Entry<ProductStoryEntry>[];
  snippetTitle: string;
  snippetSlides: Entry<SnippetSlideEntry>[];
  faqLink?: string;
  pricingTableUrl?: string;
  icon: Asset;
  productSummaryLink?: string;
  productFeature: Entry<ProductFeatureEntry>[];
  productPlans: Entry<ProductPlanEntry>[];
  freeLookPeriod: Entry<CommonContentfulEntry>;
  comparePlan: Entry<CommonContentfulEntry>;
  premiumPromotionCaption: string;
}

export interface ProductStoryEntry {
  title: string;
  image: Asset;
  storyDetails: Entry<StoryDetailEntry>[];
}

interface StoryDetailEntry {
  description: string;
  image: Asset;
}

interface SnippetSlideEntry {
  description: string;
  title: string;
  image: Asset;
}

export interface CommonContentfulEntry {
  title: string;
  description: string;
  linkText: string;
  icon: Asset;
}

export interface CommonContentfulType {
  title: string;
  description: string;
  linkText: string;
  imageUrl: string;
}

export interface ProductFeatureEntry {
  title: string;
  description: string;
  icon: Asset;
  active: boolean;
}
