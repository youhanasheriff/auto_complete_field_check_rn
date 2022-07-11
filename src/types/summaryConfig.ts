import { FormikProps } from 'formik';
import { ViewStyle } from 'react-native';
import { summaryDependentRow } from './formConfig';

export interface InfoSectionType {
  fieldName: string;
  title: string | undefined;
  value: string | number | boolean;
  style?: ViewStyle | undefined;
  valueStyle?: ViewStyle | undefined;
  subText?: string;
  showIcon?: boolean;
  dataSourceName?: string;
}

export interface AddressInfoType {
  label: string | undefined;
  name: string;
  dependents: string[];
}

export interface RowInfoType {
  label: string | undefined;
  name: string;
  summaryDependentRow: summaryDependentRow;
  dataSourceName?: string;
}

export interface SummaryCustomProps {
  isSummaryPage?: boolean;
  summaryOnSubmit?: () => void;
  exitingFormikRef?: React.RefObject<FormikProps<any>>;
  setSubmittingForm?: (value: boolean) => void;
}
