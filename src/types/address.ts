import { Region } from 'react-native-maps';

export interface RowProps {
  description?: string;
  formatted_address?: string; // eslint-disable-line
}

export interface AddressDetails {
  street: string | undefined;
  block: string | undefined;
  postalCode: string | undefined;
  country: string | undefined;
  coordinates: Region | undefined;
}

export enum ActionType {
  Add = 'add',
  Edit = 'edit',
}
