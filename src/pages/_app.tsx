// ** Next Imports
import Head from 'next/head'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'
import type { EmotionCache } from '@emotion/cache'

// ** Config Imports
import themeConfig from '@/configs/themeConfig'

// ** Utils Imports
import { createEmotionCache } from '@/@core/utils/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()
import '@/styles/globals.scss'

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage
  emotionCache: EmotionCache
}

export default function App(props: ExtendedAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{`${themeConfig.projectName} - NIC ASIA`}</title>
        <meta
          name='description'
          content={`${themeConfig.projectName} A Complete Digital platform for banking services.`}
        />
        <meta name='keywords' content='Mobile Banking, Credit Card, Online Banking, Account Opening' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
    </CacheProvider>
  )
}
