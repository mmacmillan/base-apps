import { createMuiTheme } from '@material-ui/core/styles';

//** this method allows createMuiTheme to generate the shades based on the primary/secondary seed colors
export const Default = createMuiTheme({
    palette: {
        background: { default: '#eee' },
        primary: { main: 'rgb(38, 93, 111)' },
        secondary: { main: 'rgb(65, 141, 120)' },
        text: {
            primary: '#111',
            secondary: '#999'
        }
    }
})

export default {
    Default
}