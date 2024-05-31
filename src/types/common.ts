export type TMeta = {
  page: number;
  limit: number;
  total: number;
};

export type TResponseSuccess = {
  success: boolean;
  statusCode: number;
  message: string;
  data: any;
  meta: TMeta;
};

export type TGenericErrorResponse = {
  success: boolean;
  message: string;
  errorDetails: TGenericErrorMessage[];
};

export type TGenericErrorMessage = {
  statusCode?: number;
  issues?: Array<{
    field: string;
    message: string;
  }>;
};

export const Gender = ["MALE", "FEMALE"];
