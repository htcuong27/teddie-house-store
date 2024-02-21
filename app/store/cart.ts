import { Product } from '@/app/models/Product';
import { create } from 'zustand';

interface CartItem extends Product {
  quantity: number;
}

type CartStore = {
  cart: CartItem[];
  update: (product: Product, quantity: number) => void;
  add: (product: Product, quantity: number) => void;
  remove: (idProduct: number) => void;
  removeAll: () => void;
  countCart: () => number;
  getTotalPrice: () => number;
};

function updateCart(
  product: Product,
  cart: CartItem[],
  quantity: number,
): CartItem[] {
  const productOnCart = cart.map((item) => item.id).includes(product.id);
  
  if (!productOnCart) {
    const cartItem = { ...product, quantity: quantity } as CartItem;
    cart.push(cartItem);
  }
  else {
    return cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: (item.quantity + quantity) } as CartItem;
      }
      return item;
    });
  }

  return cart;
}

function removeCart(idProduct: number, cart: CartItem[]): CartItem[] {
  return cart.filter((item) => item.id !== idProduct)
}

function getTotalPrice(cart: CartItem[]): number {
  return cart.reduce((acc, curr) => {
    return acc + (curr.quantity * curr.price);
  }, 0);
}

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  add: (product: Product, quantity: number) => {
    const { cart } = get();
    const updatedCart = updateCart(product, cart, quantity);
    set({ cart: updatedCart });
  },
  update: (product: Product, quantity: number) => {
    const { cart } = get();
    set({ cart: cart.map(item => {
      if (product.id === item.id) {
        return {...item, quantity: quantity} as CartItem;
      }
      return item;
    })})
  },
  remove: (idProduct: number) => {
    const { cart } = get();
    const updatedCart = removeCart(idProduct, cart);
    set({ cart: updatedCart });
  },
  removeAll: () => set({ cart: [] }),
  countCart: () => {
    const { cart } = get();
    return cart.reduce((acc, curr) => {
      return acc + curr.quantity
    }, 0)
  },
  getTotalPrice: () => {
    const { cart } = get();
    const totalPrice = getTotalPrice(cart);
    return totalPrice;
  },
}));

type BottomSheetStore = {
  isOpened: boolean;
  openCart: () => void;
  closeCart: () => void;
};

export const useBottomSheetStore = create<BottomSheetStore>((set) => ({
  isOpened: false,
  openCart: () => set({ isOpened: true }),
  closeCart: () => set({ isOpened: false }),
}));
