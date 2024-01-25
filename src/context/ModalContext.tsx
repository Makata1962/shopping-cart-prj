import { useState, createContext, ReactNode } from 'react';

interface ModalContextType {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextType>({
  isModalOpen: false,
  setIsModalOpen: () => {}, 
});

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{isModalOpen, setIsModalOpen}}>
      {children}
    </ModalContext.Provider>
  );
}
