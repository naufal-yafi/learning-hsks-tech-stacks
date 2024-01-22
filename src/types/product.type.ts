type ProductType = {
  id: number | string;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: CategoryType;
};

export default ProductType;
