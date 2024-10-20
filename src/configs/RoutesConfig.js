import React from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig'

export const publicRoutes = [
    {
        key: 'login',
        path: `${AUTH_PREFIX_PATH}/login`,
        component: React.lazy(() => import('views/auth-views/authentication/login')),
    },
    {
        key: 'register',
        path: `${AUTH_PREFIX_PATH}/register`,
        component: React.lazy(() => import('views/auth-views/authentication/register')),
    },
    {
        key: 'forgot-password',
        path: `${AUTH_PREFIX_PATH}/forgot-password`,
        component: React.lazy(() => import('views/auth-views/authentication/forgot-password')),
    }
]

export const protectedRoutes = [
    // {
    //     key: 'dashboard.default',
    //     path: `${APP_PREFIX_PATH}/dashboards/default`,
    //     component: React.lazy(() => import('views/app-views/dashboards/default')),
    // },
    {
        key: 'dashboard.clash.main',
        path: `${APP_PREFIX_PATH}/dash-clash/default`,  
        component: React.lazy(() => import('views/app-views/dash-clash/default')),
    },
    {
        key: 'dashboard.clash.detail',
        path: `${APP_PREFIX_PATH}/dash-clash/sales`,  
        component: React.lazy(() => import('views/app-views/dash-clash/sales')),
    },

    //add project
    {
        key: 'dashboard.project',
        path: `${APP_PREFIX_PATH}/project/project-list`,  
        component: React.lazy(() => import('views/app-views/project/project-list')),
    },
    {
        key: 'dashboard.project.add',
        path: `${APP_PREFIX_PATH}/project/add-project`,  
        component: React.lazy(() => import('views/app-views/project/add-project')),
    },

    // option input
    {
        key: 'dashboard.option.jenis-clash',
        path: `${APP_PREFIX_PATH}/input-option/jenis-clash/jenis-clash-list`,  
        component: React.lazy(() => import('views/app-views/input-option/jenis-clash/jenis-clash-list')),
    },
    {
        key: 'dashboard.option.jenis-clash.add',
        path: `${APP_PREFIX_PATH}/input-option/jenis-clash/jenis-clash-add`,  
        component: React.lazy(() => import('views/app-views/input-option/jenis-clash/jenis-clash-add')),
    },
    {
        key: 'dashboard.option.jenis-clash.edit',
        path: `${APP_PREFIX_PATH}/input-option/jenis-clash/jenis-clash-edit/:id`,  
        component: React.lazy(() => import('views/app-views/input-option/jenis-clash/jenis-clash-edit')),
    },

    
]