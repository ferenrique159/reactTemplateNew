import { createBrowserRouter, Navigate, Route } from 'react-router-dom';
import { AuthRoutes, LoginPage, RegisterPage } from '../auth';
import { JournalPage } from '../journal/pages/JournalPage';
import ErrorPage from './ErrorPage';
import { SourcePage } from './SourcePage';



export const getRoutes = () => createBrowserRouter([
    {
        path: "/",
        element: <SourcePage/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <JournalPage/>,
            },
            {
                path: "",
                element: <JournalPage/>,
            },
        ]
    },
    {
        path: "/auth/",
        element: <AuthRoutes />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "login",
                element: <LoginPage/>,
            },
            {
                path: "register",
                element: <RegisterPage/>,
            },
            {
                path: "",
                element: <Navigate to="/auth/login" />
            }
        ]
    },    
]);