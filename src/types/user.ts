import {
  LocalisedDataObjectType,
  LocalisedDataType,
} from './localisedDataType';

/* eslint-disable camelcase */
export interface User {
  id: string;
  attributes: {
    email: string;
    nickname?: string;
    first_name?: string;
    last_name?: string;
    mobile?: string;
    addresses?: Address[];
    birthdate?: string;
    gender?: string;
    occupation?: string;
    marital_status?: MaritalStatus;
    housemate_count?: number;
    hobbies?: string[];
    car_ownership?: CarOwnership;
    other_insurance_ownership?: OtherInsuranceOwnership;
    first_time_buyer?: boolean;
    onboarding_completed_at?: Date;
    profile_picture_url?: string;
    stripe_customer_id: string;
    consent_setting?: {
      email: boolean;
      sms: boolean;
      show_notifications: boolean;
      user_id: string;
    };
    alpha?: boolean;
    localised_data?: {
      [key in LocalisedDataType]?: LocalisedDataObjectType;
    };
  };
}

export interface Address {
  id: number | string;
  iterationId?: string;
  attributes: AddressAttributes;
}

export interface AddressAttributes {
  user_id?: string;
  label: string;
  country: string;
  postal_code: string;
  street: string;
  city: string;
  unit_number?: string;
}

export enum MaritalStatus {
  Single = 'single',
  Married = 'married',
  Separated = 'separated',
  Divorced = 'divorced',
}

export enum CarOwnership {
  HasCar = 'has_car',
  HasNoCar = 'has_no_car',
  ThinkingOfGettingCar = 'thinking_of_getting_car',
}

export enum OtherInsuranceOwnership {
  HasOtherInsurance = 'has_other_insurance',
  HasNoOtherInsurance = 'has_no_other_insurance',
  UnsureIfHasOtherInsurance = 'unsure_if_has_other_insurance',
}
