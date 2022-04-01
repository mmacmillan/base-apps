/* Common Imports */
import config from '../config.js';
import GlobalCss from '../css/global.jsx';
import useAppRouter from '../lib/router.js';
import api from '../lib/api.js';

import { useAppState } from '../context.js';
import { useTheme, makeStyles } from '@material-ui/styles';
import { Redirect, useHistory, useParams, Link as RouterLink } from 'react-router-dom';



/* Util Functions */
function forceRender() {
    const [, setTick] = useState(0);
    return useCallback(() => {
        setTick(tick => tick + 1);
    }, []);
}

function sortArray(arr, field, dir) {
    dir = dir || 'asc';

    arr.sort((a, b) => {
        if(typeof(a[field]) == 'undefined' || a[field] == null)
            return 1;

        if(typeof(b[field]) == 'undefined' || b[field] == null)
            return -1;

        if(a[field] < b[field])
            return dir == 'asc' ? -1 : 1;

        if(a[field] > b[field])
            return dir == 'asc' ? 1 : -1;

        return 0;
    });

    return arr;
}



export {
    api,
    money,
    sortArray,
    forceRender,
    config,
    useTheme,
    useParams,
    useAppState,
    useAppRouter,
    useHistory,
    RouterLink,
    Redirect,
    makeStyles,
    GlobalCss
}
