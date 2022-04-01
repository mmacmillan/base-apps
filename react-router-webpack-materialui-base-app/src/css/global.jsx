import { makeStyles } from '@material-ui/styles';

/*
 * Usage
 * ----
 * import GlobalCss from './global.jsx';
 * let styles = GlobalCss.styles();
*/
const getStyles = makeStyles(theme => ({
    grow: { flexGrow: 1 },
    hide: { opacity: 0 },
}));

export default {
    styles: () => {
        return getStyles();
    }
}
