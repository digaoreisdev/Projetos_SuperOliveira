import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styled/themes/default";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Checklist Super Oliveira</h1>
    </ThemeProvider>
  )
}