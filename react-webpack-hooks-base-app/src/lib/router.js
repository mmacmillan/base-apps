import { useAppState } from './context.js';
import { useHistory } from 'react-router-dom';

const defaultRoutes = {
    'home': () => { return '/'; },
    'dashboard': () => { return '/'; }
}

const useAppRouter = (routes) => {
    routes = routes || defaultRoutes;

    let [state, dispatch] = useAppState();
    let history = useHistory();

    return (route, data) => {
        //** get the route data and routes
        if(!routes)
            throw new Error('no routes defined');0

        if(routes[route]) {
            //** invoke the route if found, getting the uri
            let uri = routes[route](data);
            if(uri && uri.length > 0)
                history.push(uri);

            dispatch('route.current', { route, routes, data });
        } else
            throw new Error(`unknown route "${ route }"`); 
    }
}

export default useAppRouter;

