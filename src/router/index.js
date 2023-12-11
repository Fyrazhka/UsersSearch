import allUsers from "../pages/allUsers";
import User from "../pages/User";
import Login from "../pages/login";

export const publicRoutes=[
    {path: '/allUsers', element:allUsers},
    {path: '/Login', element:Login},
    {path: '*', element:allUsers}
]

export const privateRoutes=[
    {path: '/allUsers', element:allUsers},
    {path: '/User', element:User},
    {path: '*', element:allUsers}
]