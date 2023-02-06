import { ThemeProvider, createTheme } from "@mui/material";

type ThemeProp = {
  children: JSX.Element;
};

export enum themeVars {
  BG_BLUE = "#1762a7",
  BG_DARKBLUE = "#211f27",
  FONT_GLOBAL = "'Poppins', sans-serif",
}

const theme = createTheme({
  palette: {
    primary: {
      main: themeVars.BG_BLUE,
    },
    secondary: {
      main: themeVars.BG_DARKBLUE,
    },
  },
  typography: {
    fontFamily: themeVars.FONT_GLOBAL,
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          borderRadius: "0.5em",
          marginTop: "20px",
        },
      },
    },
    MuiInput: {
      defaultProps: {
        style: {
          marginTop: "20px",
        },
      },
    },
  },
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
