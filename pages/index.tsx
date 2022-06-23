import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  /**
   * buttonクリック遷移例.
   */
  const handleClick = () => {
    router.push("/photos");
  };
  return (
    <div className="items-center text-center justify-center">
      <h1 className="m-5">Home</h1>
      <div className="grid place-items-start">
        <p className="px-4 m-5">
          これはNext.jsを学ぶためのサンプルアプリです。
        </p>
      </div>
      <div className="m-1 p-4 grid grid-cols-3 gap-1 text-2xl">
        <div
          className="h-28 m-2 p-4 border border-r-3 border-gray-100 rounded-lg drop-shadow-md bg-primary text-white cursor-pointer"
          onClick={() => router.push("/about")}
        >
          <h3>About</h3>
        </div>
        <div
          className="h-28 m-2 p-4 border border-r-3 border-gray-100 rounded-lg drop-shadow-md bg-secandary cursor-pointer"
          onClick={() => router.push("/todo")}
        >
          <h3>TODO</h3>
        </div>
        <div
          className="h-28 m-2 p-4 border border-r-3 border-gray-100 rounded-lg drop-shadow-md bg-purple cursor-pointer"
          onClick={() => router.push("users")}
        >
          <h3>Users</h3>
        </div>
      </div>
      <div className="m-1 p-4 grid grid-cols-1 gap-1 text-2xl">
        <div
          className="h-28 m-2 p-4 border border-r-3 border-gray-100 rounded-lg drop-shadow-md bg-white cursor-pointer"
          onClick={handleClick}
        >
          See Photos
        </div>
      </div>
      <div className="m-1 p-4 grid grid-cols-3 gap-1 text-2xl">
        <div
          className="h-28 m-2 p-4 border border-r-3 border-gray-100 rounded-lg drop-shadow-md bg-white cursor-pointer"
          onClick={() => router.push("/docs/param")}
        >
          <h3>Documents</h3>
          <p className="m-2 text-sm">Reactの機能についてのDocs</p>
        </div>
      </div>
      {/* <div className="h-28 m-2 p-4 border border-r-3 border-gray-100 rounded-lg drop-shadow-md">
          <Link href='/product'>
            <a>Product</a>
          </Link>
        </div> */}
    </div>
  );
};

export default Home;
