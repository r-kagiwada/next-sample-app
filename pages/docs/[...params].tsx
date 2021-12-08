import Link from 'next/link'
function Docs () {
  return <>
    <h1 className="m-5">Document page</h1>
    <p className="m-5">何かパラメータを追加したら遷移できるページです。</p>
    <p className="m-5">例: /docs/hogehoge</p>
    <Link href='/docs/routingSummary'>
      <a className="m-5">Routing Summary</a>
    </Link>

  </>
}

export default Docs