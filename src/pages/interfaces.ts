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

export interface IBanners {
  title: string;
  subtitle: string;
  paragraph: string;
}

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

export interface ICmsData {
  cms?: {
    header?: IHeaderData[];
    banners?: {
      intro?: IBanners;
    };
    footer?: IFooterData;
  };
}

export interface IResponseCms {
  header?: IHeaderData[];
  banners?: {
    intro?: IBanners;
  };
  footer?: IFooterData;
}
