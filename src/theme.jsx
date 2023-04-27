// import { createTheme } from "@mui/material/styles";
import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: "SF Pro Display, 'sans-serif'",
    },
    palette: {
        primary: {
            light: "#A6F566",
            dark: "#000000",
            main: "#000000",
            contrastText: "#00000",
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    fontFamily: "SF Pro Display, 'sans-serif'";
                    src: url("/fonts/SF-Pro-Display-Regular.otf") format("opentype");
                    font-weight: 500;
                    font-display: swap;
                    font-style: normal;
                }
                @font-face {
                    fontFamily: "SF Pro Display, 'sans-serif'";
                    src: url("/fonts/SF-Pro-Display-Bold.otf") format("opentype");
                    font-weight: 400;
                    font-display: swap;
                    font-style: normal;
                }
            `,
        },
    },
});

export default theme;
