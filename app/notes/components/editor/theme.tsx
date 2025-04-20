import { darkDefaultTheme, lightDefaultTheme, Theme } from "@blocknote/mantine";

// Base theme
export const lightTheme = {
  colors: {
    editor: {
      text: "hsl(var(--foreground))",
      background: "hsl(var(--background))",
    },
    menu: {
      text: "hsl(var(--foreground))",
      background: "hsl(var(--background))",
    },
    tooltip: {
      text: "hsl(var(--foreground))",
      background: "hsl(var(--background))",
    },
    hovered: {
      text: "hsl(var(--foreground))",
      background: "hsl(var(--muted-foreground))",
    },
    selected: {
      text: "hsl(var(--foreground))",
      background: "hsl(var(--background))",
    },
    disabled: {
      text: "hsl(var(--foreground))",
      background: "hsl(var(--muted-foreground))",
    },
    border: "hsl(var(--muted-foreground))",
    sideMenu: "hsl(var(--background))",
    shadow: "none",
    highlights: lightDefaultTheme.colors!.highlights,
  },
  borderRadius: 0,
  fontFamily: "'Arial', 'Helvetica Neue', sans-serif",
} satisfies Theme;

// The theme for dark mode,
// users the light theme defined above with a few changes
export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    editor: {
      text: "hsl(var(--foreground))",
      background: "hsl(var(--foreground))",
    },
    sideMenu: "hsl(var(--foreground))",
    shadow: "none",
    highlights: darkDefaultTheme.colors!.highlights,
  },
  borderRadius: 0,
} satisfies Theme;