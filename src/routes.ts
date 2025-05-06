import { IRoute } from "./types/route.ts";

import { AUTH_ROUTE, DICTIONARY_ROUTE, HOME_ROUTE } from "./consts";
import HomePage from "./pages/HomePage/HomePage";
import DictionaryPage from "./pages/DictionaryPage/DictionaryPage";
import AuthPage from "./pages/AuthPage/AuthPage";


export const router: IRoute[] = [
    {
        path: HOME_ROUTE,
        Component: HomePage
    },
    {
        path: AUTH_ROUTE,
        Component: AuthPage
    },
    {
      path: DICTIONARY_ROUTE,
      Component: DictionaryPage
    }
];