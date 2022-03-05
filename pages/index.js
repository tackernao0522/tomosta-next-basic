import Head from 'next/head'
import Link from 'next/link'
import Content from './components/content'
import Header from './components/header'

export default function Home() {
  let title = 'ともすた'

  return (
    <Content>
      <Head>
        <title>{title}</title>
      </Head>
      <Header title={title} />
      <p>学ぶ。をちゃんと</p>
      <div>
        <Link href="/about"><a>About</a></Link>
      </div>
      <style jsx>{`
        h1 {
          color: white;
        }
      `}</style>
    </Content>
  )
}
