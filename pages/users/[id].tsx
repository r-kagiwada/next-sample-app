import { GetServerSideProps, GetStaticProps } from 'next';
import { User } from '../../types';

interface Props {
  user: User
}
const UserDetail: React.VFC<Props> = ({ user }) => {
  return <>
    <div>
      <h1 className="m-5">User Details</h1>
      <div className="flex items-center justify-center">
        <h1 className="m-5 block">{user?.username}</h1>
        <div>
          <p><span className=" text-gray-500">name : </span>{user.name}</p>
          <p><span className=" text-gray-500">email : </span>{user.email}</p>
          <p><span className=" text-gray-500">address : </span>{user.address?.street + user.address?.suite + user.address?.city}</p>
          <p><span className=" text-gray-500">phone : </span>{user?.phone}</p>
          <p><span className=" text-gray-500">website : </span>{user?.website}</p>
          <p><span className=" text-gray-500">company : </span>{user?.company?.name}</p>
          <p><span className=" text-gray-500">company catch phrase: </span>{user?.company?.catchPhrase}</p>
        </div>
      </div>
    </div>
  </>
}

export default UserDetail;

// サーバーサイドレンダリング）: リクエストごとにデータを取得する
export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context)
  const id = context.query.id;
  const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  const data = await response.json()
  return {
    props: {
      user: data
    }
  }
}
