/* eslint-disable camelcase */

export interface Policy {
  policyNumber: string;
  productSlug: string;
  masterPolicyNumber: string;
  startDate: string;
  endDate: string;
  monthlyPremium: number;
  nextBillingDate: string;
  status: string;
  isWithinFreelookPeriod: boolean;
  frequencyText: string;
  secondayUserName?: string;
  secondayUserImageUrl?: string;
  isPaymentFailed?: boolean;
  remainingDaysToPay?: number;
  certificateOfInsurance?: string;
}
