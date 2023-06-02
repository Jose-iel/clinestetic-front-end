export interface IFooterProps {
  name: string;
  value?: string;
  url?: string;
}

export interface IFooterData {
  info: IFooterProps[];
  social: string[];
  links: IFooterProps[];
  contact: string[];
  bottomLinks: IFooterProps[];
}

export interface IHeaderSubmenuProps {
  id: number;
  name: string;
  icon: number;
}

export interface IHeaderData {
  id: number;
  name: string;
  path: string;
  icon?: number;
  submenu?: IHeaderSubmenuProps[];
}

export interface ICmsData {
  cms?: {
    header?: IHeaderData[];
    footer?: IFooterData;
  };
}

export interface IResponseCms {
  header?: IHeaderData[];
  footer?: IFooterData;
}
