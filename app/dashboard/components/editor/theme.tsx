import { darkDefaultTheme, lightDefaultTheme, Theme } from "@blocknote/mantine";

// Base theme
export const lightTheme = {
    colors: {
      editor: {
        text: "#222222",
        background: "#fafafa",
      },
      menu: {
        text: "#ffffff",
        background: "#9b0000",
      },
      tooltip: {
        text: "#ffffff",
        background: "#b00000",
      },
      hovered: {
        text: "#ffffff",
        background: "#b00000",
      },
      selected: {
        text: "#ffffff",
        background: "#c50000",
      },
      disabled: {
        text: "#9b0000",
        background: "#7d0000",
      },
      shadow: "#640000",
      border: "#870000",
      sideMenu: "#bababa",
      highlights: lightDefaultTheme.colors!.highlights,
    },
    borderRadius: 4,
    fontFamily: "'Arial', 'Helvetica Neue', sans-serif",
  } satisfies Theme;
   
  // The theme for dark mode,
  // users the light theme defined above with a few changes
export const darkTheme = {
    ...lightTheme,
    colors: {
      ...lightTheme.colors,
      editor: {
        text: "#ffffff",
        background: "#9b0000",
      },
      sideMenu: "#ffffff",
      highlights: darkDefaultTheme.colors!.highlights,
    },
  } satisfies Theme;