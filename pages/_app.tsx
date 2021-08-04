
import "@assets/main.css"
import type { AppProps } from "next/app"
import type { FC } from "react"

const Noop: FC = ({ children }) => <>{children}</>

const MyApp = ({ Component, pageProps } : AppProps & { Component: {Layout : FC }}) => {
    const Layout = Component.Layout ?? Noop
   return(
       <Layout>
         <Component {...pageProps} />
       </Layout>
   )
}

export default MyApp