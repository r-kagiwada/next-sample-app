import User from '../components/User'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

function UserList({ users }) {
  return <>
  <h1>List of Users</h1>
  {
    users.map((user) => {
      return (
        <div key={user.id}>
          <User user={user}/>
        </div>
      )
    })
  }
  </>
}

export default UserList


export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data)
  return {
    props: {
      users: data
    }
  }
}