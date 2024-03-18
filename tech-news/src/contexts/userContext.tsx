import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import axios from '../lib/axios';

export interface News {
  id: number;
  titulo: string;
  autor: string;
  url: string;
}

interface NewsContextData {
  noticias: News[];
  fetchNoticias: () => void;
}

const NewsContext = createContext<NewsContextData | undefined>(undefined);

export const NewsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [noticias, setNoticias] = useState<News[]>([]);

  const fetchNoticias = async () => {
    try {
      const response = await axios.get('/noticias');
      setNoticias(response.data);
    } catch (error) {
      console.error('Erro ao buscar notícias:', error);
    }
  };

  useEffect(() => {
    fetchNoticias();
  }, []);

  return (
    <NewsContext.Provider value={{ noticias, fetchNoticias }}>
      {children}
    </NewsContext.Provider>
  );
};

export function useNews(): NewsContextData {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
}
