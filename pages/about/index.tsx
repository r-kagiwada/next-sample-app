import type { NextPage } from 'next'
import Link from 'next/link'

const About: NextPage = () => {
  return (
    <div className="">
      <h1 className="m-5">
        ABOUT page!
      </h1>
      <div className="">
        <h2 className="p-4">このアプリについて</h2>
        <p className="p-4">
          これはNext.jsを学ぶためのサンプルアプリです。<br />
        </p>
        <hr className="border-t-[0.1px] border-gray-200" />
        <h2 className="p-4">CSS・スタイルについて</h2>
        <p className="p-4">
          今回はCSSのフレームワークとしてtailwind.cssを使用しています。<br />
          cssを使用したことある人なら、classNameにcssプロパティに関連するクラス名を適用すればいいだけなので直感的で使いやすいかと思います。<br />
          tailwindのクラスを直接カスタマイズしたい場合は、styles/globals.cssで定義します。<br />
          themeを変えたい場合は、tailwind.config.jsで設定します。<br />
          <Link href="https://tailwindcss.jp" >
            <a className="underline text-blue-500" target="_blank">tailwindのサイト</a>
          </Link>
        </p>
        <hr className="border-t-[0.1px] border-gray-200" />
        <h2 className="p-4">使用ライブラリについて</h2>
        <ul className="mx-10 my-5 list-outside list-disc">
          <li>アイコンライブラリ：<Link href="https://heroicons.com/">
            <a className="underline text-blue-500" target="_blank">heroicon</a></Link>
          </li>
          <li>状態管理：<Link href="https://swr.vercel.app/ja/docs">
            <a className="underline text-blue-500" target="_blank">SWR</a></Link>
          </li>
        </ul>
        <hr className="border-t-[0.1px] border-gray-200" />
        <h2 className="p-4">参考サイトについて</h2>
        <ul className="mx-10 my-5 list-outside list-disc">
          <li><Link href="https://heroicons.com/">
            <a className="underline text-blue-500" target="_blank">TODO....</a></Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About
