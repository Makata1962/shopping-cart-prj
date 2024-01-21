import { createContext, useState } from 'react';

export const CategoriesContext = createContext([]);

export function CategoriesProvider({ children }) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  return (
    <CategoriesContext.Provider
      value={{ selectedCategories, setSelectedCategories }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}
