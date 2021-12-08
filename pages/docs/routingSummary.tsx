function RoutingSummary () {
  return (
    <>
      <h1>Routing Summary</h1>
      <p>ファイル名を指定してもRoutingできる例。</p>
      <h2 className="p-4">ルーティングについて</h2>
      <p className="p-4">
        page配下でフォルダを作成し、/about/index.tsx とすると<br />
        URL:/about　で動的にルーティングされます。
      </p>
    </>
  )
}

export default RoutingSummary