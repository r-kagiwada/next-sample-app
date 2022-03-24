import { Component } from "react";
import Image from "next/dist/client/image";
import { Photo } from "../types";

interface Props {
  photo: Photo
}
/**
 * PhotoCardクラスコンポーネントバージョン
 */
class PhotoCardClass extends Component<Props, {}> {

  render () {
    const { photo } = this.props;
    return (
      <div className="m-5 items-center text-center rounded-lg border-2 p-2 w-full">
        <label className="block text-left text-sm text-gray-500">title</label>
        <h3 className="text-gray-800 text-left mb-3">{photo.title}</h3>
        <Image alt={photo.title} src={photo.thumbnailUrl} width="150px" height="150px" />
      </div>
    );
  }
}

export default PhotoCardClass;