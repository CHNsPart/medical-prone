import '@/styles/globals.css'
import dynamic from 'next/dynamic'
import { AnimatePresence } from 'framer-motion'

function App({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait" initial={true}>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});