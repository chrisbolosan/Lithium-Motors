import create from "zustand";

const useStore = create((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (itemId) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== itemId) })),
}));

export default useStore;
