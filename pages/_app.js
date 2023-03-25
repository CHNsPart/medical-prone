import '@/styles/globals.css'
import dynamic from 'next/dynamic'
import { AnimatePresence } from 'framer-motion'
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

function App({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait" initial={true}>
      <AnimatedCursor 
        innerSize={8}
        outerSize={20}
        color='0,245,110'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        trailingSpeed={8}
        outerStyle={{
          border: '0px solid rgba(0,245,110, .2)',
          borderRadius: '50%',
        }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'img',
          'button',
          '.link'
        ]}
      />
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});