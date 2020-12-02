export enum TypesMessageAlert {
  SUCCESS = 'success',
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
}

export type TypeAlert = {
  id?: string | undefined;
  message: string | null;
  typeAlert: TypesMessageAlert | null;
};

export type AlertState = {
  listAlert: TypeAlert[];
};
