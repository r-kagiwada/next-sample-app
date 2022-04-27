import { User } from '../../types';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import UserTable from '../../components/UserTable';

interface Props {
  users: User[]
}
const UserList: React.VFC<Props> = ({ users }) => {
  return <>
    <div>
      <h1 className="m-5">List of Users</h1>
      <div className="flex items-center justify-center">
        <UserTable users={users} />
      </div>
    </div>
  </>
}

export default UserList;

// この関数はサーバー側でのビルド時に呼び出されます。
// クライアント側では呼び出されないため、データベースクエリを直接実行することも可能です。
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data)
  // { props: data } を返すことで、UserList コンポーネントは
  // ビルド時に`data`を prop として受け取ります。
  return {
    props: {
      users: data
    }
  }
}