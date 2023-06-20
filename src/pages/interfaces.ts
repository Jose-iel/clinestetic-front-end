import { IHeading } from 'components/common/Heading/interfaces';
import { IFooter } from 'components/groups/Footer/interfaces';
import { IHeader } from 'components/groups/Header/interfaces';
import { ProductsProps } from 'components/groups/Products/interfaces';

export interface BannerProps extends IHeading {
  image: string;
}

export interface IResponseCms {
  header?: IHeader[];
  footer?: {
    info: IFooter[];
    social: string[];
    contact: string[];
    links: {
      main: IFooter[];
      bottom: IFooter[];
    };
  };
  products?: {
    topSelling: ProductsProps[];
    treatment: ProductsProps[];
  };
  home?: {
    banners?: {
      intro: BannerProps;
      evaluation: BannerProps;
    };
    faq?: IHeading;
    offer?: IHeading;
    accordion?: {
      id: number;
      title: string;
      description: string;
    }[];
  };
}

export interface ICmsData {
  cms: IResponseCms;
}
