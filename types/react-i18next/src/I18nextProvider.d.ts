import * as React from "react";
import { i18n } from "i18next";

// tslint:disable-next-line:interface-name
export interface I18nextProviderProps {
    i18n: i18n;
    initialI18nStore?: any;
    initialLanguage?: string;
    children: React.ReactNode;
    defaultNS?: string; // TODO https://github.com/i18next/react-i18next/pull/478/files
    reportNS?: () => void; // TODO https://github.com/i18next/react-i18next/pull/500/files
}

export default class I18nextProvider extends React.Component<I18nextProviderProps> { }
