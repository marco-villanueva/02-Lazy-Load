import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../pages";

interface Route {
    to: string,
    path: string,
    name: string,
    Component: LazyExoticComponent<JSXElement> | JSXElement
}

type JSXElement = () => JSX.Element;

const lazyLayout = lazy(/* webpackChunkName: "LazyLayout" */ () => import('../layout/LazyLayout'))

export const routes: Route[] = [
    {
        to: '/lazy-layout/',
        path: '/lazy-layout/*',
        Component: lazyLayout,
        name: 'Lazy Layout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
]
