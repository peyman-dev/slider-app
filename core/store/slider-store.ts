import { create } from "zustand";
import SliderStoreType from "../types/slider.store.type";

const sliderStore = create<SliderStoreType>((set) => ({
  images: [],
  activeIndex: 0,
  isOpened: false,

  setIsOpened: (isOpened: boolean) => set({ isOpened }),
  setActiveIndex: (activeIndex: number) => set({ activeIndex }),
  setImages: (images: any[]) => set({ images }),
}));

export default sliderStore;
