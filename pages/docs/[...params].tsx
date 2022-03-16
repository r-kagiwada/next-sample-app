import Link from 'next/link'
function Docs () {
  return <>
    <h1 className="m-5">Document page</h1>
    <p className="m-5">何かパラメータを追加したら遷移できるページです。</p>
    <p className="m-5">例: /docs/hogehoge</p>
    <ul className='list-disc m-5'>
      <li >
        <Link href='/docs/routingSummary'>
          <a className="m-1">Routing Summary</a>
        </Link>
      </li>
      <li>
        <Link href='/docs/stateSample' >
          <a className="m-1">Stateについて</a>
        </Link>
      </li>
    </ul>
  </>
}

export default Docs