import { NextPage } from 'next';
import type { AppProps } from 'next/app'
import { url } from 'inspector'
import '@/styles/globals.css'


type NextPagWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPagWithLayout,
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  console.log(Component);
  console.log(pageProps);

  const getLayout = Component?.getLayout || ((page) => page);

  // return <div style={{ backgroundColor: 'whitesmoke' }}>
  //   <h6>Punto de entrada de mi aplicación, todo se comparte desde este punto(_app)</h6>
  //   <Component {...pageProps} />
  // </div>

  return getLayout(
    <div style={{ backgroundColor: 'whitesmoke' }}>
      <h6>Punto de entrada de mi aplicación, todo se comparte desde este punto(_app)</h6>
      <Component {...pageProps} />
    </div>
  )
}
