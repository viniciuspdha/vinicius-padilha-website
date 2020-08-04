import Link from 'next/link'
import Head from 'next/head'

export default function Layout({
  children,
  title = 'This is the default title',
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700&display=swap" rel="stylesheet"></link>
      </Head>

      {children}

    </div>
  )
}
