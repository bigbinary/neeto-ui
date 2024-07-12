import { ReactNode } from "react";

export interface TranslationProviderProps {
  children: ReactNode;
  language?: string;
  translationResources?: {
    [languageCode: string]: {
      translation: {
        [key: string]: string;
      };
    };
  };
}

const TranslationProvider: React.FC<TranslationProviderProps>;

export default TranslationProvider;
