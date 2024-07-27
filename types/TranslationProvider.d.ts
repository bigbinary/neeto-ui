import { ReactNode } from "react";

export interface TranslationProviderProps {
  children: ReactNode;
  language?: string;
}

const TranslationProvider: React.FC<TranslationProviderProps>;

export default TranslationProvider;
