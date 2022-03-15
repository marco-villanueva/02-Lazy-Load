import { lazy, LazyExoticComponent } from "react";

interface Route {
    to: string,
    path: string,
    name: string,
    Component: LazyExoticComponent<JSXElement> | JSXElement
}

type JSXElement = () => JSX.Element;

const lazy1 = lazy(/* webpackChunkName: "LazyLoad1" */ () => import('../pages/LazyPage1'))
const lazy2 = lazy(/* webpackChunkName: "LazyLoad2" */ () => import('../pages/LazyPage2'))
const lazy3 = lazy(/* webpackChunkName: "LazyLoad3" */ () => import('../pages/LazyPage3'))

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: lazy1,
        name: 'Lazy Page 1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: lazy2,
        name: 'Lazy Page 2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: lazy3,
        name: 'Lazy Page 3'
    },
]
