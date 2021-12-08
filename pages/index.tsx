import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()

  /**
   * buttonクリック遷移例.
   */
  const handleClick = () => {
    router.push('/photos');
  }
  return (
    <div className="items-center text-center justify-center">
      <h1 className="m-5">Home</h1>
      <div className="grid place-items-start">
        <p className="px-4 m-5">これはNext.jsを学ぶためのサンプルアプリです。</p>
      </div>
      <div className="m-1 grid grid-cols-2 gap-1 text-2xl">
        <div className="h-28 m-2 p-4 border border-r-3 border-gray-100 rounded-lg drop-shadow-md">
          <Link href='/about'>
            <a>About</a>
          </Link>
        </div>
        <div className="h-28 m-2 p-4 border border-r-3 border-gray-100 rounded-lg drop-shadow-md">
          <Link href='/docs/param'>
            <a>Documents</a>
          </Link>
        </div>
        <div className="h-28 m-2 p-4 border border-r-3 border-gray-100 rounded-lg drop-shadow-md">
          <Link href="/todo">
            <a>TODO</a>
          </Link>
        </div>
        <div className="h-28 m-2 p-4 border border-r-3 border-gray-100 rounded-lg drop-shadow-md">
          <Link href='/users'>
            <a>Users</a>
          </Link>
        </div>
        <div className="h-28 m-2 p-4 border border-r-3 border-gray-100 rounded-lg drop-shadow-md">
          <button onClick={handleClick}>
            See Photos
          </button>
        </div>
        {/* <div className="h-28 m-2 p-4 border border-r-3 border-gray-100 rounded-lg drop-shadow-md">
          <Link href='/product'>
            <a>Product</a>
          </Link>
        </div> */}
      </div>
    </div>
  )
}

export default Home
