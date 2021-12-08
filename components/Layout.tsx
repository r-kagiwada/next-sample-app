import Head from 'next/head';
import SideBar from './SideBar';

interface Props {
  children: any
}

const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Sample Next App</title>
        <meta name="description" content="this is sample next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="" >
        <div className="w-90 flex">
          <SideBar />
          <div className="flex3 justify-center w-full">
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
export default Layout;