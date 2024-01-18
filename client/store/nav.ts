import { ProductCategory, ProductCategoryType } from "@/app/model/Charm";
import { create } from "zustand";

type NavStore = {
    selectedNav: ProductCategory;
    setSelectedTab: (tab: ProductCategory) => void;
}

export const useNavStore = create<NavStore>((set, get) => ({
    selectedNav: ProductCategoryType.ALL,
    setSelectedTab: (tab: ProductCategory) => set({ selectedNav: tab })
}))