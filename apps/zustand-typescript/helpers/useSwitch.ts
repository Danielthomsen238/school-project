import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface Switch {
  toggleClass: boolean;
  switchToggle: () => void;
}

export const useSwitch = create<Switch>()(
  devtools(
    persist((set) => ({
      toggleClass: false,
      switchToggle: () => {
        set((state) => {
          return { toggleClass: !state.toggleClass };
        });
      },
    }))
  )
);
