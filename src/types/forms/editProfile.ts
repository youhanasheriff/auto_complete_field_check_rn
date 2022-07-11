import { MaritalStatus, Address } from '../../types/user';

export interface FormValuesTypes {
  firstName: string;
  lastName: string;
  nickname: string | undefined;
  gender: string | undefined;
  birthday: string | undefined;
  maritalStatus: MaritalStatus | undefined | '';
  email: string;
  mobileNumber: string;
  addresses: Address[];
}

export interface RemoveAddressType {
  id: string | number;
  _destroy: string;
}
