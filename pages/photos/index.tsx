// import UserCard from '../../components/userCard'
import { Photo } from '../../types'
import Image from 'next/image'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

interface Props {
  photos: Photo[]
}

type Photos = {
  photos: Photo[];
};
const Photos: React.VFC<Props> = ({ photos }) => {
  return (
    <div>
      <h1 className="m-5">List of Photos</h1>
      <div className="overflow-scroll h-screen w-full grid grid-cols-3 gap-2">
        {photos.map((photo: Photo) => {
          return (
            <div className="w-fit m-3 items-center text-center" key={photo.id}>
              <h3 className="text-gray-800 text-left">{photo.title}</h3>
              <Image alt={photo.title} src={photo.thumbnailUrl} width="150px" height="150px" />
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default Photos;

// この関数はサーバー側でのビルド時に呼び出されます。
// クライアント側では呼び出されないため、データベースクエリを直接実行することも可能です。
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = await response.json();

  // 取得件数多いので20件のみ表示
  const photoMap = Object.keys(data).map((i, key) => {
    if (key < 20) {
      return data[i]
    }
  });
  const photos = photoMap.filter(i => i != null);

  return {
    props: {
      photos: photos ?? []
    }
  }
}