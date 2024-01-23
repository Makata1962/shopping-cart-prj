import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

interface CategoriesContextValue {
  selectedCategories: string[];
  setSelectedCategories: Dispatch<SetStateAction<string[]>>;
}

export const CategoriesContext = createContext<CategoriesContextValue>({
  selectedCategories: [],
  setSelectedCategories: () => {},
});

export function CategoriesProvider({ children }: { children: ReactNode }) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  return (
    <CategoriesContext.Provider
      value={{ selectedCategories, setSelectedCategories }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}
