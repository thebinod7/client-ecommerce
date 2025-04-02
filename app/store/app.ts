import { create } from "zustand";

interface AppStore {
  cartItems: any[];
  setCartItems: (item: any) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  cartItems: [],
  setCartItems: (items) => set((state) => ({ cartItems: items })),
}));
