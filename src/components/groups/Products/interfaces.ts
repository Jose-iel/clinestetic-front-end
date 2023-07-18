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
  columns: number;
  heading?: {
    content: string;
    link?: {
      content: string;
      path: string;
    };
  };
}
