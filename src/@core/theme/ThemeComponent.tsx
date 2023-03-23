import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

interface Props {
    children: ReactNode
}
const ThemeComponent = (props:Props) => {
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            { props.children }
        </ThemeProvider>
    )
}

export default ThemeComponent;