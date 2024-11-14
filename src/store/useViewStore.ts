import { create } from 'zustand';

interface ViewStore {
  view: string;
  setView: (newView: string) => void;
}

const useViewStore = create<ViewStore>((set) => ({
  view: 'plan',
  setView: (newView) => set({ view: newView }),
}));

export default useViewStore;