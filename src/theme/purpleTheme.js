import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const purpleTheme = createTheme({
    palette:{
        primary:{
            main: '#262254'
        },
        secondary:{
            main: '#543884'
        },
        error:{
            main:red.A700
        }
    }
})

export {
    purpleTheme
}