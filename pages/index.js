import Head from 'next/head'

export default function Home() {
  let title = 'ともすた'

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className='site-title' style={{ color: 'red' }}>{title}</h1>
      <p>学ぶ。をちゃんと</p>
    </>
  )
}
