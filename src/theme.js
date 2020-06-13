export default {
  initialColorModeName: "light",
  useColorSchemeMediaQuery: true,
  colors: {
    text: "#322",
    background: "#fff9f9",
    shadow: "rgba(0, 0, 0, 0.5)",
    primary: "#c30",
    secondary: "#400",
    gray: "#6c757d",
    badge: "#e8e6e3",
    valid: "#28a745",
    invalid: "#dc3545",
    modes: {
      dark: {
        text: "#e8e6e3",
        background: "rgb(18, 18, 18)",
        shadow: "rgba(0, 0, 0, 1)",
        primary: "#080808",
        secondary: "#f0e",
        gray: "#6c757d",
      },
    },
  },
  fonts: {
    header: "Karla, sans-serif",
    button: "Karla, sans-serif",
    card: "Karla, sans-serif",
    form: "Karla, sans-serif",
    badge: "Karla, sans-serif",
    body: "Montserrat, sans-serif",
    navbar: "Josefin Sans, sans-serif",
  },
  text: {
    default: {
      fontFamily: "body",
      fontSize: 3,
      color: "text",
    },
    about: {
      fontFamily: "body",
      fontWeight: 400,
      fontSize: "1.5rem",
    },
    uppercase: {
      textTransform: "uppercase",
      fontWeight: 600,
      fontSize: "1.5rem",
    },
  },
  styles: {
    root: {
      backgroundColor: "background",
      transition: "all 0.3s",
    },
  },
};
