import { User } from "../types"
import Link from 'next/link';

interface Props {
  users: User[]
}
const UserTable: React.VFC<Props> = ({ users }) => {
  return (
    <table className="table-fixed m-6 py-2 border-2 border-gray-200 rounded-md">
      <thead className="m-3 bg-gray-400 text-white ">
        <tr className="">
          <th className="py-2 border-2 border-gray-200">Id</th>
          <th className="py-2 border-2 border-gray-200">Name</th>
          <th className="py-2 border-2 border-gray-200">Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: User) => {
          return (
            <tr key={user.id}>
              <td className="p-3 border-2 border-gray-200"><Link href={`/users/${user.id?.toString()}`}><a>{user.id}</a></Link></td>
              <td className="p-3 border-2 border-gray-200">{user.name}</td>
              <td className="p-3 border-2 border-gray-200">{user.email}</td>
            </tr>
          )
        })
        }
      </tbody>
    </table>
  )
}

export default UserTable