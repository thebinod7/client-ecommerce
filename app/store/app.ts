import { create } from "zustand";

interface AppStore {
  cartItems: any[];
  setCartItems: (item: any) => void;

  loggedInUser: Record<string, any> | null;
  setLoggedinUser: (user: Record<string, any>) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  cartItems: [],
  setCartItems: (items) => set((state) => ({ cartItems: items })),

  loggedInUser: null,
  setLoggedinUser: (user) => set(() => ({ loggedInUser: user })),
}));
