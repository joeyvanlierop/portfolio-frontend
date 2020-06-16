export default {
  initialColorModeName: "light",
  useColorSchemeMediaQuery: true,
  breakpoints: ["40em", "52em", "64em"],
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
  forms: {
    input: {
      fontSize: "1.25rem",
      fontFamily: "form",
      width: "100%",
      padding: "1rem",
      paddingLeft: "0",
      border: "none",
      resize: "none",
      color: "text",
      backgroundColor: "transparent",
      borderBottomColor: "text",
      borderBottomStyle: "dotted",
      borderBottomWidth: "2px",
      transition: "opacity 0.3s ease",

      ":focus": {
        outline: "none",
      },
    },
    faded: {
      opacity: "0.5",
    },
  },
  buttons: {
    primary: {
      fontFamily: "button",
      fontSize: "1rem",
      fontWeight: "500",
      borderStyle: "solid",
      borderRadius: "0.25rem",
      borderWidth: "1px",
      borderColor: "text",
      color: "text",
      backgroundColor: "background",
      padding: "0.375rem 0.75rem",
      transition: "all 0.15s ease-in-out",
      cursor: "pointer",

      ":hover": {
        color: "background",
        backgroundColor: "text",
      },

      ":focus": {
        outline: "none",
      },
    },
    inverted: {
      fontFamily: "button",
      fontSize: "1rem",
      fontWeight: "500",
      borderStyle: "solid",
      borderRadius: "0.25rem",
      borderWidth: "1px",
      borderColor: "text",
      color: "background",
      backgroundColor: "text",
      padding: "0.375rem 0.75rem",
      transition: "all 0.15s ease-in-out",
      cursor: "pointer",

      ":hover": {
        color: "background",
        backgroundColor: "text",
      },

      ":focus": {
        outline: "none",
      },
    },
  },
  styles: {
    root: {
      backgroundColor: "background",
      transition: "background-color  0.3s",
    },
  },
};
