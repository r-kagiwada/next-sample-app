import { Photo } from "../types";
import Image from 'next/image'

interface Props {
  photo: Photo
}

/**
 * PhotoCard コンポーネント.
 * @param photos
 * @returns 
 */
const PhotoCard: React.FC<Props> = ({ photo }) => {

  return (
    <div className="m-5 items-center text-center rounded-lg border-2 p-2 w-full">
      <label className="block text-left text-sm text-gray-500">title</label>
      <h3 className="text-gray-800 text-left mb-3">{photo.title}</h3>
      <Image alt={photo.title} src={photo.thumbnailUrl} width="150px" height="150px" />
    </div>
  );
};
export default PhotoCard;