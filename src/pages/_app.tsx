import type { AppProps } from "next/app";
import "../styles/global.css";
import { axeAccessibilityReporter } from "../utils/axe-accessibility";

axeAccessibilityReporter()
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}