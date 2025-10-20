type SliderStoreType = {
  activeIndex: number;
  setActiveIndex: (activeIndex: number) => void;

  images: File[];
  setImages: (images: File[]) => void;

  isOpened: boolean;
  setIsOpened: (isOpened: boolean) => void;
};

export default SliderStoreType;
