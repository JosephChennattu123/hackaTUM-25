import { useRoutes } from 'react-router-dom';
import { Landing } from '@/features/landing';

export const AppRoutes = () => {
    // const commonRoutes = [{ path: '/', element: <Landing /> }];
    // const element = useRoutes([...commonRoutes]);

    const element = useRoutes([
        {
            path: '/',
            element: <Landing />,
        },
        {
            path: '*',
            element: <div>404 Not Found</div>,
        }
    ]);

    return <>{element}</>;
};
