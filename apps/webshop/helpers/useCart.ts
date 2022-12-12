import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface State {
  Cartitems: { title: string; price: number; antal: number }[];
}
interface Cart {
  Cartitems: { title: string; price: number; antal: number }[];
  addItem: (title: string, price: number, antal: number) => void;
  removeItem: (idx: number) => void;
  reset: () => void;
}

const initialState: State = {
  Cartitems: [],
};
export const useCart = create<Cart>()(
  devtools(
    persist((set) => ({
      ...initialState,
      addItem: (title, price, antal) =>
        set((state) => ({
          Cartitems: [...state.Cartitems, { title, price, antal }],
        })),
      // Define a method to remove an item from the array
      removeItem: (idx) =>
        set((state) => ({
          Cartitems: state.Cartitems.map((item, i) =>
            i === idx && item.antal > 0
              ? { ...item, antal: item.antal - 1 }
              : item
          ),
        })),
      // Define a method to reset the state
      reset: () => set(initialState),
    }))
  )
);
