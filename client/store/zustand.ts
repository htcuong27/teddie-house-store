import { create } from 'zustand'

type CartStore = {
    cart: number,
    add: (value: number) => void,
    remove: () => void,
    removeAll: () => void
}

export const useCartStore = create<CartStore>((set) => ({
    cart: 0,
    add: (value) => set((state) => ({ cart: state.cart + value})),
    remove: () => set((state) => ({ cart: state.cart - 1 })),
    removeAll: () => set({ cart: 0 }),
}));