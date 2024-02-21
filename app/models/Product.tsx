export type Product = {
  id: number;
  name: string;
  category: ProductCategory;
  price: number;
  imageUrl: string;
  isDiscountable: boolean;
  capacity: number;
  items: ProductItem[];
};

export type ProductCategory =
  | ProductCategoryType.ALL
  | ProductCategoryType.CHARM
  | ProductCategoryType.KEYCHAIN;

export enum ProductCategoryType {
  ALL = 'Tất cả',
  CHARM = 'Charm',
  KEYCHAIN = 'Keychain',
}

export type ProductItem = {
  name: string;
  price: number;
  capacity: number;
  imageUrl: string;
};
