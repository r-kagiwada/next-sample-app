import Link from 'next/link'
function Docs() {
  return <>
  <h1>Docs Home Page</h1>
  <Link href='routingSummary'>
    <a>Routing Summary</a>
  </Link>
  </>
}

export default Docs