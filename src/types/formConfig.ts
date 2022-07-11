import * as Yup from 'yup';
import { RootStackParamList } from './navigation';
import { User } from './user';

export enum FormConfigType {
  APPLICATION = 'APPLICATION',
  PSQ = 'PSQ',
}
export interface FormConfig {
  productSlug: string;
  localisedDataAttributes: {
    myinfo: string;
  };
  pages: FormPage[];
  acknowledgements: string[];
}

export interface FormPage {
  id: number;
  pageSlug: string;
  title: string;
  description: string | Array<string>;
  custom?: {
    formType: CustomFormType;
    maxFormSection?: number;
    customSummaryComponent?: CustomComponentType;
    fieldValues?: ICustomFieldValues;
  };
  fields?: FormField[];
  submitActions: SubmitAction[];
}
export interface AutoCompleteProps {
  city: string;
  country: string;
  postalCode: string;
}

export interface FormField {
  id: number;
  name: string;
  label?: string;
  subLabel?: string;
  max?: number;
  userProfileAttribute?: keyof User['attributes'];
  myInfoAttribute?: keyof User['attributes'];
  placeholder?: string;
  tooltip?: string;
  values?: DropdownValue[];
  dataSource?: string;
  componentType: ComponentType;
  validation?: Validation;
  disabled?: boolean;
  autocomplete?: AutoCompleteProps;
  inline?: boolean;
  summary?: Summary;
  value?: string | number | boolean;
  isPrice?: boolean;
  isSioQuestion?: boolean;
  onChangeTooltipText?: DropdownOnChangeTooltipText;
}
interface Summary {
  dependentRow?: summaryDependentRow;
  dependentAddress?: string[];
  hidden?: boolean;
  showValueIcon?: boolean;
}
export interface summaryDependentRow {
  label: string;
  name: string;
}
export interface DropdownValue {
  label: string;
  value: string | number | boolean;
}

export interface DropdownOnChangeTooltipText {
  title: string;
  text: Array<string>;
  cta: string;
}

export enum CustomComponentType {
  SummaryAdult = 'summary_adult',
  SummaryChild = 'summary_child',
  SummaryIdentity = 'summary_identity',
  SummaryAddress = 'summary_address',
}

export enum ComponentType {
  TextInput = 'text_input',
  Email = 'email',
  PhoneNumber = 'phone_number',
  Dropdown = 'dropdown',
  Radio = 'radio',
  RadioListSelect = 'radio_select',
  Checkbox = 'checkbox',
  Button = 'button',
  DateInput = 'date_input',
  InputStepper = 'input_stepper',
  AutoCompleteAddress = 'auto_complete_address',
}

export enum CustomFormType {
  AdultForm = 'adult_form',
  ChildForm = 'child_form',
  IdentityForm = 'identity_form',
  AddressForm = 'address_form',
  DriverDetailsForm = 'driver_details_form',
  PackagesAndAddonsForm = 'packages_and_addons_form',
  VehicleInfoForm = 'vehicle_info_form',
}

export enum CustomPpdpComponent {
  CarInsurancePpdp = 'car_insurance_ppdp',
}

export interface Validation {
  type: ValidationType;
  rules: ValidationRule[];
}

/**
 * Yup's validation types
 * https://github.com/jquense/yup#api
 */
export enum ValidationType {
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  Date = 'date',
  Array = 'array',
}

/**
 * Contains validation method and its parameters.
 * Example; `method`: max, `params`: [10, 'Max length is 10']
 */
export interface ValidationRule {
  method: keyof ValidationMethod | string;
  params?: Array<string | number>;
}

export type ValidationMethod = Yup.BooleanSchema &
  Yup.DateSchema &
  Yup.NumberSchema &
  Yup.ArraySchema<any, any, any, any> &
  Yup.ObjectSchema<any, any, any, any> &
  Yup.StringSchema;

export interface SubmitAction {
  actionType: SubmitActionType;
  payload?: SubmitActionPayload;
}

export enum SubmitActionType {
  Navigate = 'navigate',
  AmlCheck = 'amlCheck',
  EligibilityCheck = 'eligibilityCheck',
}

export interface NavigateActionPayload {
  route: keyof RootStackParamList;
  params: Record<string, unknown>;
}

export type SubmitActionPayload = NavigateActionPayload;

export interface subLabel {
  label: string;
  url?: string;
  text?: string;
}

export enum ICustomFieldValueType {
  STRING = 'string',
  DATESTRING = 'dateString',
  CUSTOM = 'custom',
}

export interface ICustomFieldValue {
  id: number;
  type: ICustomFieldValueType;
  userProfileAttribute?: string;
  myInfoAttribute?: string;
  default?: string | number | boolean;
}

export interface ICustomFieldValues {
  [key: string]: ICustomFieldValue;
}
