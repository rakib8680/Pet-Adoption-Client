import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

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



export interface DrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: DrawerItem[];
}

export const Gender = ["MALE", "FEMALE"];
export const Role = ["ADMIN", "USER"];
export const Status = ["ACTIVE", "BLOCKED"];
