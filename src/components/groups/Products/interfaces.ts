export type ProductsProps = {
  id: number;
  location: string;
  img: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  price: number;
  installments: number;
};

export interface IProducts {
  products?: ProductsProps[];
  options?: {
    columns: number;
    heading?: {
      text: string;
      link?: {
        text: string;
        path: string;
      };
    };
  };
}
