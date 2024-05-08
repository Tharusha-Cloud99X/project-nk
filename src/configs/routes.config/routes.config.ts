import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes = [
    {
        key: 'userMenu.item1',
        path: '/new-user',
        component: lazy(
            () => import('@/views/screens/user-management/NewUser'),
        ),
        authority: [],
    },
    {
        key: 'userMenu.item2',
        path: '/approved-users',
        component: lazy(
            () => import('@/views/screens/user-management/ApprovedUsers'),
        ),
        authority: [],
    },
    {
        key: 'productConsultationMenu.item1',
        path: '/consultation/vehicle',
        component: lazy(() => import('@/views/screens/consultation/Vehicle')),
        authority: [],
    },
    {
        key: 'productConsultationMenu.item2',
        path: '/consultation/equipment',
        component: lazy(() => import('@/views/screens/consultation/Equipment')),
        authority: [],
    },
    {
        key: 'productConsultationMenu.item3',
        path: '/consultation/used-autoparts',
        component: lazy(
            () => import('@/views/screens/consultation/UsedAutoparts'),
        ),
        authority: [],
    },
    {
        key: 'productManagementMenu.item1',
        path: '/new-products',
        component: lazy(
            () => import('@/views/screens/product-management/NewProducts'),
        ),
        authority: [],
    },
    {
        key: 'productManagementMenu.item2',
        path: '/approved-products',
        component: lazy(
            () => import('@/views/screens/product-management/ApprovedProducts'),
        ),
        authority: [],
    },
    {
        key: 'internalAuction.item1',
        path: '/auction-vehicle',
        component: lazy(
            () => import('@/views/screens/internal-auction/Vehicle'),
        ),
        authority: [],
    },
    {
        key: 'internalAuction.item2',
        path: '/auction-equipment',
        component: lazy(
            () => import('@/views/screens/internal-auction/Equipment'),
        ),
        authority: [],
    },
    {
        key: 'exportList.item1',
        path: '/export-vehicle',
        component: lazy(() => import('@/views/screens/export-list/Vehicle')),
        authority: [],
    },
    {
        key: 'exportList.item2',
        path: '/export-equipment',
        component: lazy(() => import('@/views/screens/export-list/Equipment')),
        authority: [],
    },
    {
        key: 'exportList.item3',
        path: '/export-used-autoparts',
        component: lazy(
            () => import('@/views/screens/export-list/UsedAutoparts'),
        ),
        authority: [],
    },
    {
        key: 'wantedItems.item1',
        path: '/used-autoparts-request',
        component: lazy(
            () => import('@/views/screens/wanted-items/UsedAutoparts'),
        ),
        authority: [],
    },
    {
        key: 'newAutoparts.item1',
        path: '/new-autoparts-request',
        component: lazy(
            () => import('@/views/screens/new-autoparts/NewAutoparts'),
        ),
        authority: [],
    },
    {
        key: 'expiredProducts.item1',
        path: '/expired-products/vehicle',
        component: lazy(
            () => import('@/views/screens/expired-products/Vehicle'),
        ),
        authority: [],
    },
    {
        key: 'expiredProducts.item2',
        path: '/expired-products/equipment',
        component: lazy(
            () => import('@/views/screens/expired-products/Equipment'),
        ),
        authority: [],
    },
    {
        key: 'expiredProducts.item3',
        path: '/expired-products/used-autoparts',
        component: lazy(
            () => import('@/views/screens/expired-products/UsedAutoparts'),
        ),
        authority: [],
    },
    {
        key: 'soldout.item1',
        path: '/soldout/vehicle',
        component: lazy(() => import('@/views/screens/soldout/Vehicle')),
        authority: [],
    },
    {
        key: 'soldout.item2',
        path: '/soldout/equipment',
        component: lazy(() => import('@/views/screens/soldout/Equipment')),
        authority: [],
    },
    {
        key: 'soldout.item3',
        path: '/soldout/used-autoparts',
        component: lazy(() => import('@/views/screens/soldout/UsedAutoparts')),
        authority: [],
    },
]
