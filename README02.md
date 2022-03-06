# Next.js 入門

プログラムのコピーもできる記事はこちら。<br>
https://tomosta.jp/article/nextjs-basic/ <br>

ソースファイルはこちら<br>
https://github.com/tomostajp/next-site<br>

# Next.js プロジェクトの作成

- `$ npx create-next-app next-mysite`を実行<br>

## 01 ローカルサーバー起動

- `$ npm run build`を実行<br>

* `$ npm run start`を実行<br>

- http://localhost:3000 にアクセスしてみる<br>

* `Control + C`でサーバー終了<br>

- `$ npm run dev`を実行(build という作業が不要になる)<br>

* http://localhost:3000 にアクセスしてみる<br>

## 一番最初のプログラム

`例`<br>

- `/pages/api/index.js`<br>

```js:index.js
import Head from 'next/head'

export default function Home() {
  let title = 'ともすた'
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <p>学ぶ。をちゃんと</p>
    </h1>
  )
}
```

### ハンズオン

- `pages/index.js`を編集<br>

```js:index.js
export default function Home() {
  ;<>
    return <h1>ともすた</h1>
    <p>学ぶ。をちゃんと</p>
  </>
}
```

## 02 JSX を使う

- `pages/index.js`を編集<br>

```js:index.js
export default function Home() {
  let title = 'ともすた'
  return (
    <>
      <h1>{title}</h1>
      <p>学ぶ。をちゃんと</p>
    </>
  )
}
```

### head 要素を出力する

- `pages/index.js`を編集<br>

```js:index.js
import Head from 'next/head' // 追記

export default function Home() {
  let title = 'ともすた'

  return (
    <>
      // 追記
      <Head>
        <title>{title}</title>
      </Head>
      //
      <h1>{title}</h1>
      <p>学ぶ。をちゃんと</p>
    </>
  )
}
```

### HTML タグに class をつける

- `pages/index.js`を編集<br>

```js:index.js
import Head from 'next/head'

export default function Home() {
  let title = 'ともすた'

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className="site-title">{title}</h1>
      <p>学ぶ。をちゃんと</p>
    </>
  )
}
```

### HTML タグに style 属性を書く

- `pages/index.js`を編集<br>

```js:index.js
import Head from 'next/head'

export default function Home() {
  let title = 'ともすた'

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className="site-title" style={{ color: 'red' }}>
        {title}
      </h1>
      <p>学ぶ。をちゃんと</p>
    </>
  )
}
```

- 03 JSX での CSS の書き方

* `pages/index.js`を編集<br>

```js:index.js
import Head from 'next/head'

export default function Home() {
  let title = 'ともすた'

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className="site-title" style={{ backgroundColor: '#9f9' }}>
        {title}
      </h1>
      <p>学ぶ。をちゃんと</p>
    </>
  )
}
```

### JSX で<style></style>を利用

- `pages/index.js`を編集<br>

```js:index.js
import Head from 'next/head'

export default function Home() {
  let title = 'ともすた'

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className="site-title" style={{ backgroundColor: '#9f9' }}>
        {title}
      </h1>
      <p>学ぶ。をちゃんと</p>
      <style jsx>{`
        h1 {
          color: white;
          background-color: red !important;
        }
      `}</style>
    </>
  )
}
```

### 外部参照 CSS

- `styles/Home.module.css`を編集<br>

(.module が付いてないと global CSS が使えない)<br>

```css:Home.module.css
.mytitle {
  font-size: 1.2em;
}
```

- `pages/index.js`を編集<br>

```js:index.js
import Head from 'next/head'
import Styles from '../styles/Home.module.css'

export default function Home() {
  let title = 'ともすた'

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className={Styles.mytitle} style={{ backgroundColor: '#9f9' }}>
        {title}
      </h1>
      <p>学ぶ。をちゃんと</p>
      <style jsx>{`
        h1 {
          color: white;
        }
      `}</style>
    </>
  )
}
```

### グローバルで CSS を書く

- `styles/mysite.css`ファイルを作成(\_app.js ファイルからは読み込める)<br>

```css:mysite.css
body {
  color: red;
}
```

```js:_app.js
// import '../styles/globals.css' // リセットをかけたくない場合はコメントアウトする
import '../styles/mysite.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```

- `styles/globals.css`を削除しておく<br>

# 新規ページの作成から

meta タグ設定参考: https://qiita.com/TK-C/items/cd34d0f6d4b001053443 <br>

- `pages/about`ディレクトリを作成<br>

* `pages/about/index.js`ファイルを作成<br>

```js:index.js
export default function About() {
  return (
    <>
      <h1>About</h1>
    </>
  )
}
```

- http://localhost:3000/about にアクセス

* `pages/about/company.js`ファイルを作成<br>

```js:company.js
export default function Company() {
  return (
    <>
      <h1>Company</h1>
    </>
  )
}
```

## リンクを張る

- `pages/index.js`を編集<br>

```js:index.js
import Head from 'next/head'
// 追記
import Link from 'next/link'
import Styles from '../styles/Home.module.css'

export default function Home() {
  let title = 'ともすた'

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className={Styles.mytitle} style={{ backgroundColor: '#9f9' }}>
        {title}
      </h1>
      <p>学ぶ。をちゃんと</p>
      <div>
        // 追記
        <Link href="/about">
          <a>About</a>
          // <button>About</button> でも書ける
        </Link>
        //
      </div>
      <style jsx>{`
        h1 {
          color: white;
        }
      `}</style>
    </>
  )
}
```

## コンポーネントとレイアウト

### オリジナルコンポーネント

`例`<br>

`/pages/components/header.js`<br>

```js:header.js
export default function Header(props) {
  return <h1>{props.title}</h1>
}
```

`pages/index.js`<br>

```js:index.js
import Header from './components/header' // パラメーターが渡せる
...
<Header title={'ともすた'}></Header>
```

### ハンズオン

- `pages/components`ディレクトリを作成<br>

* `pages/components/header.js`ファイルを作成<br>

```js:header.js
const Header = () => {
  return <h1>共通タイトル</h1>
}

export default Header
```

- `pages/index.js`を編集<br>

```js:index.js
import Head from 'next/head'
import Link from 'next/link'
// 追記
import Header from './components/header'

export default function Home() {
  let title = 'ともすた'

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      // 編集
      <Header />
      <p>学ぶ。をちゃんと</p>
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <style jsx>{`
        h1 {
          color: white;
        }
      `}</style>
    </>
  )
}
```

- `pages/about/index.js`を編集<br>

```js:index.js
import Header from '../components/header'

export default function About() {
  return (
    <>
      <Header />
    </>
  )
}
```

- `pages/components/header.js`を編集<br>

```js:header.js
const Header = (props) => {
  const { title } = props

  return <h1>{title}</h1>
}

export default Header
```

- `pages/index.js`を編集<br>

```js:index.js
import Head from 'next/head'
import Link from 'next/link'
import Header from './components/header'

export default function Home() {
  let title = 'ともすた'

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header title={title} />
      <p>学ぶ。をちゃんと</p>
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <style jsx>{`
        h1 {
          color: white;
        }
      `}</style>
    </>
  )
}
```

- `pages/about/index.js`を編集<br>

```js:index.js
import Header from '../components/header'

export default function About() {
  return (
    <>
      <Header title={'About'} />
    </>
  )
}
```

### レイアウト

`例`<br>

``/pages/components/content.js`<br>

```js:content.js
export default function Content({ children }) {
  return (
    <div>{children}</div> // {childrenで内容を差し込める}
  )
}
```

`pages/index.js`<br>

```js:index.js
import Content from './components/content'
...
return (
  <Content> // <Content>タグが使えるように
    <Head>
      ...
)
```

### ハンズオン

- `pages/components/content.js`ファイルを作成<br>

```js:content.js
const Content = ({ children }) => {
  return (
    <>
      <div className="container">{children}</div>
      <hr />
      <footer>©︎ 2021 ともすた</footer>
    </>
  )
}

export default Content
```

または<br>

- `pages/components/content.js`<br>

```js:content.js
const Content = (props) => {
  const { children } = props
  return (
    <>
      <div className="container">{children}</div>
      <hr />
      <footer>©︎ 2021 ともすた</footer>
    </>
  )
}

export default Content
```

- `pages/index.js`を編集<br>

```js:index.js
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
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <style jsx>{`
        h1 {
          color: white;
        }
      `}</style>
    </Content>
  )
}
```

- `pages/about/index.js`を編集<br>

```js:index.js
import Content from '../components/content'
import Header from '../components/header'

export default function About() {
  return (
    <Content>
      <Header title={'About'} />
    </Content>
  )
}
```

## SWR で JSON データを取得する

- `pages/api/hello.js`を`pages/api/message.js`にリネームして編集<br>

```js:message.js
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ message: '学ぶ。をちゃんと' })
}
```

- `$ npm install swr@0.5.6 --save-dev`を実行<br>

* `pages/index.js`を編集<br>

```js:index.js
import Head from 'next/head'
import Link from 'next/link'
import useSWR from 'swr'
import Content from './components/content'
import Header from './components/header'

export default function Home() {
  let title = 'ともすた'
  const { data, error } = useSWR('/api/message')
  if (error) return <div>faild to load</div>
  if (!data) return <div>loading...</div>

  return (
    <Content>
      <Head>
        <title>{title}</title>
      </Head>
      <Header title={title} />
      <p>{data.message}</p>
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <style jsx>{`
        h1 {
          color: white;
        }
      `}</style>
    </Content>
  )
}
```
