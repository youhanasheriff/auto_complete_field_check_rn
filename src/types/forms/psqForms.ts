import { FormConfig } from '../formConfig';
import {
  LocalisedDataObjectType,
  LocalisedDataType,
} from '../localisedDataType';
import { User } from '../user';

/* eslint-disable camelcase */
export type FormikValues = Record<string, string | number | boolean>;

export interface PsqQuestionResponse {
  id: string;
  type: string;
  attributes: {
    product_id: string;
    product_slug: string;
    slug: string;
    user_id?: string;
    value: string | Array<string> | number | boolean | IPackageAndAddons;
  };
}

export interface IPsqFormResponse {
  data: Array<PsqQuestionResponse>;
}

export interface IPostPsqValuesResponse {
  data: PsqQuestionResponse;
}

export interface IBatchPostPsqValuesResponse {
  data: Array<PsqQuestionResponse>;
}

export interface IPsqForm {
  id: number;
  user_id: string;
  product_slug: string;
  payload: Record<string, unknown>;
  localised_data?: {
    [key in LocalisedDataType]?: LocalisedDataObjectType;
  };
}

export interface IPsqFormValuePayload {
  product_slug: string;
  slug: string;
  value: string | number | boolean;
}
export interface IUpdateFormValuesOptions {
  payload: IPsqFormValuePayload;
}

export interface IBatchUpdateFormValuesOptions {
  payload: {
    product_slug: string;
    questions: Array<IPsqFormValuePayload>;
  };
}

export interface IFetchFormValues {
  user: User | null | undefined;
}

export interface IUpdateUserProfileFormValues {
  pageId: number;
  payload: any;
  user: User | null | undefined;
}

export interface IPsqFormState {
  formConfig: FormConfig | null;
  formFieldToPageMap: IFormFieldToPageMap;
  currentProductSlug: string;
  fetchingFormValues: boolean;
  updatingFormValues: boolean;
  formValues: IFormValues;
  selectedLocalisedDataType: string;
}

export interface IFormValues {
  [key: number]: FormikValues;
}

export interface IFormFieldToPageMap {
  [slug: string]: number;
}

export interface IFormValuesWithoutPageId {
  [key: string]: string;
}

export interface IFormattedPsqQuestionResponse {
  [key: string]: string;
}

// TODO: Update to match actual package-addon object structure
export interface IPackageAndAddons {
  package: string;
  addons: Array<string>;
}
