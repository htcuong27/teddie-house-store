import { Product } from '@/app/model/Charm';
import { create } from 'zustand';

interface CartItem extends Product {
    count: number;
}


type CartStore = {
    cart: CartItem[],
    currentProduct?: Product,
    select: (item: Product) => void,
    add: (product: Product, quantity: number) => void,
    remove: (idProduct: number) => void,
    removeAll: () => void;
    countCart: () => number;
    getTotalPrice: () => number;
};

function updateCart(product: Product, cart: CartItem[], quantity: number = 1): CartItem[] {
    const cartItem = { ...product, count: quantity } as CartItem;

    const productOnCart = cart.map(item => item.id).includes(product.id);

    if (!productOnCart) cart.push(cartItem);
    else {
        return cart.map(item => {
            if (item.id === product.id)
                return { ...item, count: item.count + 1 } as CartItem;
            return item;
        });
    }

    return cart;
}

function removeCart(idProduct: number, cart: CartItem[]): CartItem[] {
    return cart.map(item => {
        if (item.id === idProduct)
            return { ...item, count: item.count - 1 }
        return item;
    }).filter(item => {
        return item.count;
    });
}

function getTotalPrice(cart: CartItem[]): number {
    cart.reduce((prev, curr) => {
        return prev + (curr.count * curr.price)
    }, 0)
    return 0;
}

export const useCartStore = create<CartStore>((set, get) => ({
    cart: [],
    currentProduct: undefined,
    select: (item: Product) => set({ currentProduct: item }),
    add: (product: Product, quantity: number) => {
        const { cart } = get();
        const updatedCart = updateCart(product, cart, quantity);
        set({ cart: updatedCart });
    },
    remove: (idProduct: number) => {
        const { cart } = get();
        const updatedCart = removeCart(idProduct, cart);
        set({ cart: updatedCart });
    },
    removeAll: () => set({ cart: [] }),
    countCart: () => {
        const { cart } = get();
        return cart.length;
    }, 
    getTotalPrice: () => {
        const { cart } = get();
        const totalPrice = getTotalPrice(cart);
        return totalPrice
    }
}));

type BottomSheetStore = {
    isOpened: boolean,
    openCart: () => void,
    closeCart: () => void;
};

export const useBottomSheetStore = create<BottomSheetStore>((set) => ({
    isOpened: false,
    openCart: () => set({ isOpened: true }),
    closeCart: () => set({ isOpened: false })
}));