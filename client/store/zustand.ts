import { Charm } from '@/app/interface/Charm';
import { create } from 'zustand'

type CartStore = {
    cart: Charm[],
    add: (value: Charm) => void,
    remove: (value: Charm) => void,
    removeAll: () => void
}

export const useCartStore = create<CartStore>((set) => ({
    cart: [],
    add: (value) => set((state) => ({ cart: [...state.cart, value]})),
    remove: (value) => set((state) => ({ cart: [...state.cart].filter(item => item.id !== value.id) })),
    removeAll: () => set({ cart: [] }),
    
}));