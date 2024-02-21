import { ProductCategory, ProductCategoryType } from '@/models/Product';
import { create } from 'zustand';

type NavStore = {
  selectedCategory: ProductCategory;
  setSelectedCategory: (category: ProductCategory) => void;
};

export const useNavStore = create<NavStore>((set, get) => ({
  selectedCategory: ProductCategoryType.ALL,
  setSelectedCategory: (category: ProductCategory) => set({ selectedCategory: category }),
}));
