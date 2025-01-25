import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { branches } from "../data/data";

export interface BranchProps {
  id: number;
  name: string;
  region:
    | {
        label: string;
        value: string;
      }
    | undefined;
  login?: string;
  password?: string;
  phone?: string;
  leader:
    | {
        label: string;
        value: string;
      }
    | undefined;
}

interface DataContextType {
  data: BranchProps[] | [];
  setData: (data: BranchProps[] | []) => void;
  originalData: BranchProps[];
  setOriginalData: (data: BranchProps[]) => void;
}

export const DataContext = createContext<DataContextType | null>(null);

interface DataProviderProps {
  children: ReactNode;
}

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<BranchProps[] | []>([]);
  const [originalData, setOriginalData] = useState<BranchProps[]>([]);

  useEffect(() => {
    setData([...branches]);
    setOriginalData([...branches]);
  }, []);

  if (!data) {
    return null;
  }

  return (
    <DataContext.Provider
      value={{ data, setData, originalData, setOriginalData }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

export default DataProvider;
