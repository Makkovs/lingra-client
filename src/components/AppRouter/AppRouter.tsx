import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { HOME_ROUTE } from "../../consts";
import { router } from "../../routes";

const AppRouter: FC = () => {
    return (
        <Routes>
            {router.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} />
            )}
            <Route path='*' element={<Navigate to={HOME_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;