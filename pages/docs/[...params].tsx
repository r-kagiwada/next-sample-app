import Link from 'next/link'
function Docs () {
  return <>
    <h1 className="m-5">Document page</h1>
    <p className="m-5">何かパラメータを追加したら遷移できるページです。</p>
    <p className="m-5">例: /docs/hogehoge</p>
    <ul className='list-decimal my-5 mx-10'>
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
      <li>
        <Link href='/docs/useEffectSample' >
          <a className="m-1">useEffectについて</a>
        </Link>
      </li>
      <li>
        <Link href='/docs/useMemoSample' >
          <a className="m-1">useMemoについて</a>
        </Link>
      </li>
      <li>
        <Link href='/docs/useCallbackSample' >
          <a className="m-1">useCallbackについて</a>
        </Link>
      </li>
    </ul>
  </>
}

export default Docs