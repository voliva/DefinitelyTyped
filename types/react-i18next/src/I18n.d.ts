import * as React from "react";
import { i18n, TranslationFunction } from "i18next";

export interface Options {
    i18n: i18n;
    t: TranslationFunction;
    react_i18n: {
        language: any // TODO https://github.com/i18next/react-i18next/pull/511/files
    },
    ready: any // TODO https://github.com/i18next/react-i18next/pull/511/files
}

export interface i18nProps {
    wait?: boolean;
    ns?: string | string[];
    nsMode?: string;
    bindI18n?: string;
    bindStore?: string;
    i18n?: i18n;
    initialI18nStore?: any;
    initialLanguage?: string;
    children: (t: TranslationFunction, options: Options) => React.ReactNode;
}

export default class I18n extends React.Component<i18nProps> { }
