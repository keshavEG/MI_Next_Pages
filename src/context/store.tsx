'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DataState {
  country: any; 
}

interface DataContextType extends DataState {
  setCountry: (data: any) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [country, setCountry] = useState<any>(null);

  const value = {
    country,
    setCountry,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (p0: string) => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
