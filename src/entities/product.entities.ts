export class Product {
  id: string;
  title: string;
  price: number;
  description: string;
  images: {};
  creationAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
}
