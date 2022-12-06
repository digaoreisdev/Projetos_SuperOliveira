import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Lines } from "./components/Lines";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      
      <Header />
      <Lines />
    </ThemeProvider>
  )
}