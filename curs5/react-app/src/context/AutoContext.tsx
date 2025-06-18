import { createContext, useContext, useState, type ReactNode } from 'react';

// Tipul datelor din context
type AutorContextType = {
  nume: string;
  setNume: (nume: string) => void;
};

// Creează contextul
const AutorContext = createContext<AutorContextType | undefined>(undefined);

// Provider-ul contextului
export function AutorProvider({ children }: { children: ReactNode }) {
  const [nume, setNume] = useState('Link Academy');

  return (
    <AutorContext.Provider value={{ nume, setNume }}>
      {children}
    </AutorContext.Provider>
  );
}

// Custom hook
export function useAutor() {
  const context = useContext(AutorContext);
  if (!context) {
    throw new Error('useAutor trebuie folosit în interiorul unui AutorProvider');
  }
  return context;
}