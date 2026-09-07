import "./globals.css";
import {ThemeProvider} from "next-themes";
import LazyMotionProvider from "@/providers/LazyMotionProvider";

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body>
      {/*<LazyMotionProvider>*/}
        {/*<ThemeProvider*/}
        {/*  attribute={"class"}*/}
        {/*  defaultTheme={"system"}*/}
        {/*  enableSystem*/}
        {/*  disableTransitionOnChange*/}
        {/*  enableColorScheme={false}*/}
        {/*>*/}
          {children}
        {/*</ThemeProvider>*/}
      {/*</LazyMotionProvider>*/}
    </body>
    </html>
  );
}