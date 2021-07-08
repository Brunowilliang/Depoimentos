import React, { createContext, useState, useContext } from 'react';

interface DepoimentsProps {
  id: string;
  name: string;
  description: string;
  views: number;
  likes: number;
  avatar: string;
  created_at: number;
}

interface Props {
  depoiments: DepoimentsProps[];
  setDepoiments: React.Dispatch<React.SetStateAction<DepoimentsProps[]>>;
}

export const DepoimentsContext = createContext<Props>({} as Props)

export const Depoiments: React.FC = ({ children }) => {
  const [depoiments, setDepoiments] = useState<DepoimentsProps[]>([]);

  return (
    <DepoimentsContext.Provider
      value={{
        depoiments, setDepoiments }}
    >
      {children}
    </DepoimentsContext.Provider>
  )
}

export function useDepoiments(){
  const context = useContext(DepoimentsContext);
  const { depoiments, setDepoiments } = context;
  return { depoiments, setDepoiments };
}