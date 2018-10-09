// Type definitions for react-i18next 8.0
// Project: https://github.com/i18next/react-i18next
// Definitions by: Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>
//                 Simon Baumann <https://github.com/chnoch>
//                 Benedict Etzel <https://github.com/beheh>
//                 Wu Haotian <https://github.com/whtsky>
//                 Victor Oliva <https://github.com/voliva>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8


// TODO https://github.com/i18next/react-i18next/blob/master/CHANGELOG.md#800
// I18n render prop was renamed to "NamespacesConsumer" as it controls which namespaces should be "consumed"


import { TranslationFunction } from "i18next";

import {
    setDefaults,
    getDefaults,
    setI18n,
    getI18n,
    ReactI18NextOptions,
    reactI18nextModule
} from "./src/context";
import I18n from "./src/I18n";
import I18nextProvider from "./src/I18nextProvider";
import Interpolate from "./src/interpolate";
import loadNamespaces from "./src/loadNamespaces";
import Trans from "./src/trans";
import withNamespaces from "./src/withNamespaces";
import withI18n from "./src/withI18n";

export {
    setDefaults,
    getDefaults,
    setI18n,
    getI18n,
    ReactI18NextOptions,
    reactI18nextModule,
    I18n,
    I18nextProvider,
    Interpolate,
    loadNamespaces,
    Trans,
    withNamespaces,
    withI18n,
    TranslationFunction
};

export { InjectedI18nProps, InjectedTranslateProps } from "./src/props";

export as namespace reactI18Next;
