// Reference: https://reactnavigation.org/docs/typescript
// Specifying undefined means that the route doesn't have params.
// A union type with undefined (e.g. SomeType | undefined) means that params are optional.

import {
  ESummaryPageType,
  SummaryPageProps,
} from '../features/SummaryScreen/types';
import { CreditCard } from '../types/creditCard';
import { Policy } from '../types/policy';
import { IneligibilityMessageType } from './eligibility';

interface errorResponseData {
  code: string;
  detail: string;
}
export type RootStackParamList = {
  Intro: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
  VerifyEmailScreen: {
    email: string;
  };
  LockScreen: undefined;
  HomeScreen: undefined;
  ChatScreen: {
    trigger: string;
    productSlug: string | undefined;
    hasPromo: boolean | undefined;
  };
  EditProfileScreen: undefined;
  PrePDP: {
    productSlug: string;
    ignoreDeclaration?: boolean;
  };
  ProductDetailScreen: {
    productSlug: string;
    hasPromo: boolean | undefined;
    refreshPolicy?: boolean;
    isProductSpecificQuetionsFlow?: boolean;
    showGetQuote?: boolean;
  };
  PolicyDetailsScreen: {
    productSlug: string;
    plan: string;
  };
  ManageClaimsScreen: {
    productSlug: string;
  };
  ViewPolicyScreen: {
    productSlug: string;
  };
  ProfileScreen: undefined;
  ViewProfileScreen: undefined;
  PurchaseHistoryScreen: undefined;
  PaymentScreen: {
    rerender?: boolean;
    removeEvent?: boolean;
    cardId?: number;
    isFromSummary?: boolean;
  };
  SettingsScreen: undefined;
  SettingsNotificationScreen: undefined;
  AboutScreen: undefined;
  TermsAndConditionsScreen: {
    webViewUrl?: string;
  };
  ContactUsScreen: {
    webViewUrl: string;
  };
  SignupCompleteScreen: undefined;
  ApplicationScreen: {
    productSlug: string;
    plan: string;
    pageId: number;
    planPremium: number;
    type?: string;
  };
  ApplicationErrorScreen: {
    errorResponseData: errorResponseData;
    productSlug?: string;
  };
  ApplicationSuccessScreen: {
    policyNumber: string;
    policyName: string;
    productSlug: string;
  };
  PsqScreen: {
    productSlug: string;
    plan: string;
    pageId: number;
    planPremium: number;
    type?: string;
  };
  CreditCardDetailScreen: {
    card: CreditCard;
  };
  CreditCardPrimaryScreen: {
    cards: Array<CreditCard>;
  };
  SummaryScreen: {
    productSlug: string;
    planType: string;
    plan: string;
    planPremium: number;
  };
  ApplicationAndPsqSummaryScreen: {
    summaryPageType: ESummaryPageType;
    summaryPageProps: SummaryPageProps;
  };
  SummaryPaymentScreen: {
    productSlug: string;
    plan: string;
    rerender?: boolean;
    planPremium: number;
  };
  WaitListScreen: undefined;
  AMLFailedScreen: undefined;
  ProductIneligibleScreen: {
    ineligiblityMessageType?: IneligibilityMessageType;
  };
  ProductDetailErrorScreen: undefined;
  ClaimScreen: {
    webViewUrl: string;
  };
  DebugScreen: undefined;
};
