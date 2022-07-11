import {
  LocalisedDataObjectType,
  LocalisedDataType,
} from '../localisedDataType';

/* eslint-disable camelcase */
export type FormikValues = Record<string, string | number | boolean>;

export interface ApplicationFormResponse {
  data: {
    id: number;
    type: 'application_form';
    attributes: ApplicationForm;
  };
}

export interface ApplicationForm {
  id: number;
  user_id: string;
  product_slug: string;
  payload: Record<string, unknown>;
  localised_data?: {
    [key in LocalisedDataType]?: LocalisedDataObjectType;
  };
}

export interface IFormValues {
  [key: number]: FormikValues;
}
