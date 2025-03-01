import { createBrowserRoute } from 'react-router-dom';
import Login from './views/Login.jsx';

const router = createBrowserRoute([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
]);


export default router;
