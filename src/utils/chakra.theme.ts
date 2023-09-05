import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    textHeading: "#7889b3",
    textBody: "#546b83",
    accentGreen: "#49a124",
    accentLightGreen: "#e2ffd8",
    bodyBackground: "#f0f0f3", //white smoke
    plum: "#e5d4e5",
  },
  fonts: {
    heading: "nulshock",
  },

  components: {
    Heading: {
      baseStyle: {
        color: "textHeading",
      },
    },
    Text: {
      baseStyle: {
        color: "textBody",
        fontSize: ["1rem", "1.25rem"],
      },
      variant: {
        links: {
          color: "red",
        },
      },
    },
    FormLabel: {
      baseStyle: {
        color: "textBody",
        fontSize: ["1rem", "1.5rem"],
      },
    },
  },
  layerStyles: {
    base: {
      boxShadow:
        "1rem 1rem 2rem rgba(174, 174, 192, 0.4),  -1rem -1rem 2rem  rgba(255, 255, 255, 100)",
      borderRadius: "1rem",
    },
    hyperlink: {
      color: "red",
    },
  },

  styles: {
    global: {
      body: {
        display: "flex",
        flexDirection: "column",
        bg: "bodyBackground",
        mx: "auto",
        width: {
          base: "95%",
          md: "80%",
        },
        maxWidth: {
          base: "95%",
          md: "80%",
        },
      },
      a: {
        color: "blue",
      },
    },
  },
});

export default theme;
