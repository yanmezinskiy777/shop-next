
import "@assets/main.css"
import 'keen-slider/keen-slider.min.css'
import type { AppProps } from "next/app"
import type { FC } from "react"
import { Provider } from "@components/context/Provider"

const Noop: FC = ({ children }) => <>{children}</>

const MyApp = ({ Component, pageProps } : AppProps & { Component: {Layout : FC }}) => {
    const Layout = Component.Layout ?? Noop
   return(
     <Provider>
       <Layout>
         <Component {...pageProps} />
       </Layout>
     </Provider>
   )
}

export default MyApp