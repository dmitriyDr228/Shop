import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import mui from '@mui/material'
const AppRouter = () => {

    const {user} = useContext(Context)
    console.log(user)

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element} />
             )}
            {publicRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element} />
            )}
            <Route path="*" element={<Navigate to="/" />}/>
        </Routes>

    );
};

export default AppRouter;