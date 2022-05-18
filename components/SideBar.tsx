import {
  HomeIcon,
  UserIcon,
  PhotographIcon,
  DocumentIcon,
  ClipboardCheckIcon,
  InformationCircleIcon,
  MailIcon
} from '@heroicons/react/outline'
import Link from 'next/link'

// TODO サイドバーOpen/close

const SideBar = () => {
  return (
    <nav className="text-gray-500 p-5 text-sm border-r flex1 h-screen overflow-y-auto bg-white w-48">
      <Link href="/">
        <a className="m-2 py-2 h-7 block"><HomeIcon className="h-5 w-5 mr-2 inline-block" />Home</a>
      </Link>
      <hr className="border-t-[0.1px] border-gray-200" />
      <Link href="/about">
        <a className="m-2 py-2 h-7 block"><InformationCircleIcon className="h-5 w-5 mr-2 inline-block" />About</a>
      </Link>
      <hr className="border-t-[0.1px] border-gray-200" />
      <Link href="/docs/1">
        <a className="m-2 py-2 h-7 block"><DocumentIcon className="h-5 w-5 mr-2 inline-block" />Documents</a>
      </Link>
      <hr className="border-t-[0.1px] border-gray-200" />
      <Link href="/todo">
        <a className="m-2 py-2 h-7 block"><ClipboardCheckIcon className="h-5 w-5 mr-2 inline-block" />Todo</a>
      </Link>
      <hr className="border-t-[0.1px] border-gray-200" />
      <Link href="/users">
        <a className="m-2 py-2 h-7 block"><UserIcon className="h-5 w-5 mr-2 inline-block" />Users</a>
      </Link>
      <hr className="border-t-[0.1px] border-gray-200" />
      <Link href="/photos">
        <a className="m-2 py-2 h-7 block"><PhotographIcon className="h-5 w-5 mr-2 inline-block" />Photos</a>
      </Link>
      <hr className="border-t-[0.1px] border-gray-200" />
      <Link href="/api_amplify">
        <a className="m-2 py-2 h-7 block"><MailIcon className="h-5 w-5 mr-2 inline-block" />Posts</a>
      </Link>
      <hr className="border-t-[0.1px] border-gray-200" />
    </nav>
  )
}

export default SideBar;