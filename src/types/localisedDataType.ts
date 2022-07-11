/* eslint-disable camelcase */
export enum LocalisedDataType {
  Myinfo = 'myinfo',
}

export interface LocalisedDataObjectType {
  birthdate?: string;
  gender?: string;
  mobile?: string;
  name?: string;
  nationality?: string;
  nric?: string;
  occupation?: string;
  vehicles: Array<LocalisedDataVehicles>;
}

export interface LocalisedDataVehicles {
  yom: string;
  registration_number: string;
  chassis_number: string;
  engine_number: string;
}
