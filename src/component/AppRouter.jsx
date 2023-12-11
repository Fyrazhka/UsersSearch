import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {AuthContext} from "../context";
import {publicRoutes,privateRoutes} from "../router";

const AppRouter = () => {
    const {isAuth,isLoading} =useContext(AuthContext)
    if(isLoading) {
        return <div>Загрузка</div>
    }
    return (
        isAuth
            ?  <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={<route.element />}
                        path={route.path}
                        key={route.path}
                    />
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={<route.element />}   //key={route}
                        path={route.path}
                        key={route.path}
                    />
                )}
            </Routes>
    );
};

export default AppRouter;