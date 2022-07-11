export interface IUseAml {
  requestForCheck: () => Promise<RequestForCheck>;
  getCheckOutcome: () => Promise<CheckOutcome>;
}

export interface IRequestForCheck {
  id: string;
  entityName: string;
  type: string;
  clientId: string;
  enableMonitoring: boolean;
  status: string;
  updatedAt: string;
  createdAt: string;
}

export type RequestForCheck = IRequestForCheck | null;

export enum CheckOutcome {
  CLEAR = 'clear',
  ATTENTION = 'attention',
  UNDEFINED = 'undefined', // This is to indicate that there is no outcome yet
}
