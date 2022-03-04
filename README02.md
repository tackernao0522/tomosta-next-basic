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
