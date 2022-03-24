import { GetServerSideProps, GetStaticProps } from 'next';
import { ChangeEvent, useState } from 'react';
import { User } from '../../types';

interface Props {
  user: User
}

/**
 * 
 * @param param0 
 * @returns 
 */
const UserDetail: React.VFC<Props> = ({ user: propUser }) => {

  // propsの値をそのまま使わず、stateとして変数に入れ直す。
  const [user, setUser] = useState(propUser);
  // 編集中のユーザー情報
  const [editUser, setEditUser] = useState(user);
  // 編集ステートフラグ
  const [isEdit, setIsEdit] = useState(false);

  /**
   * 入力値をハンドリングします。
   * @param e 
   */
  const handleChangeUser = (e: ChangeEvent<HTMLInputElement>) => {

    // inputのname属性から値を取得
    const name = e.currentTarget.name;
    // inputのvalue属性から値を取得
    const value = e.currentTarget.value;

    // nestが深いObjectの編集
    // TODO イケてないのでベターなやり方にリファクタしたい。（ブラケット記法だとtsで怒られた...）
    const names = name.split('.');
    if (names.length >= 2)  {
      if (names[0] === 'address') {
        setEditUser({
          ...editUser,
          address: {
            ...editUser.address,
            [names[1]]: value
          }
        });
      }
      if (names[0] === 'company') {
        setEditUser({
          ...editUser,
          company: {
            ...editUser.company,
            [names[1]]: value
          }
        });
      }
      
      return;
    }
    
    // スプレッド構文を使って、入力値を反映させます。
    setEditUser({
      ...editUser,
      [name]: value
    });
  }

  /**
   * 編集ボタンクリック
   */
  const handleIsEdit = () => {
    setIsEdit(true);
  }
  // 戻るボタンクリック
  const back = () => {
    // 編集前の値をセットする
    setEditUser({ ...user });
    setIsEdit(false);
  }
  // 更新ボタンクリック
  const updateUser = () => {
    setUser({ ...editUser });// userのstateを更新。
    setIsEdit(false);
  }
  return <>
    <div>
      <h1 className="m-5">User Details</h1>
      <div className="flex items-center justify-center">
        {!isEdit ?
          <div>
            <p><span className=" text-gray-500">name : </span>{user.name}</p>
            <p><span className=" text-gray-500">username : </span>{user.username}</p>
            <p><span className=" text-gray-500">email : </span>{user.email}</p>
            <p><span className=" text-gray-500">address : </span>{user.address?.city + user.address?.suite + user.address?.street}</p>
            <p><span className=" text-gray-500">phone : </span>{user?.phone}</p>
            <p><span className=" text-gray-500">website : </span>{user?.website}</p>
            <p><span className=" text-gray-500">company : </span>{user?.company?.name}</p>
            <p><span className=" text-gray-500">company catch phrase: </span>{user?.company?.catchPhrase}</p>
            <div>
              <button className='my-5 border-solid rounded-lg  border-2 border-blue-500 px-3 py-2' onClick={handleIsEdit}>編集する</button>
            </div>
          </div> :
          <div className='w-full mx-5'>
            <div>
              <label className='mx-5 my-2 text-xs'>氏名</label>
              <input name="name" className='mx-5 p-2 border-2 block rounded-md w-3/12' value={editUser.name} onChange={handleChangeUser} />
            </div>
            <div>
              <label className='mx-5 my-2 text-xs'>ユーザー名</label>
              <input name="username" className='mx-5 p-2 border-2 block rounded-md w-3/12' value={editUser.username || ''} onChange={handleChangeUser} />
            </div>
            <div>
              <label className='mx-5 my-2 text-xs'>email</label>
              <input name="email" className='mx-5 p-2 border-2 block rounded-md w-3/12' value={editUser.email} onChange={handleChangeUser} />
            </div>
            <div>
              <label className='mx-5 my-2 text-xs'>City</label>
              <input name="address.city" className='mx-5 p-2 border-2 block rounded-md w-3/12' value={editUser.address.city} onChange={handleChangeUser} />
            </div>
            <div>
              <label className='mx-5 my-2 text-xs'>Street</label>
              <input name="address.street" className='mx-5 p-2 border-2 block rounded-md w-3/12' value={editUser.address.street} onChange={handleChangeUser} />
            </div>
            <div>
              <label className='mx-5 my-2 text-xs'>建物</label>
              <input name="address.suite" className='mx-5 p-2 border-2 block rounded-md w-3/12' value={editUser.address.suite} onChange={handleChangeUser} />
            </div>
            <div>
              <label className='mx-5 my-2 text-xs'>電話番号</label>
              <input name="phone" className='mx-5 p-2 border-2 block rounded-md w-3/12' value={editUser.phone || ''} onChange={handleChangeUser} />
            </div>
            <div>
              <label className='mx-5 my-2 text-xs'>Webサイト</label>
              <input name="website" className='mx-5 p-2 border-2 block rounded-md w-3/12' value={editUser.website || ''} onChange={handleChangeUser} />
            </div>
            <div>
              <label className='mx-5 my-2 text-xs'>会社名</label>
              <input name="company.name" className='mx-5 p-2 border-2 block rounded-md w-3/12' value={editUser.company?.name || ''} onChange={handleChangeUser} />
            </div>
            <div>
              <label className='mx-5 my-2 text-xs'>キャッチフレーズ</label>
              <input name="company.catchPhrase" className='mx-5 p-2 border-2 block rounded-md w-3/12' value={editUser.company?.catchPhrase || ''} onChange={handleChangeUser} />
            </div>
            <div>
              <button className='my-5 mx-5 w-28 border-solid rounded-lg border-2 border-sky-500 px-3 py-2' onClick={back}>戻る</button>
              <button className='my-5 w-28 border-solid rounded-lg border-2 border-blue-500 px-3 py-2' onClick={updateUser}>更新する</button>
            </div>
          </div>
        }
      </div>
    </div>
  </>
}

export default UserDetail;

// サーバーサイドレンダリング）: リクエストごとにデータを取得する
export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id;
  const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  const data = await response.json()
  return {
    props: {
      user: data
    }
  }
}
