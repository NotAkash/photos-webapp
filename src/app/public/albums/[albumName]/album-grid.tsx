/* eslint-disable react/react-in-jsx-scope */
'use client';


import { ImageGrid } from "@/components/image-grid";
import { CloudinaryImage } from "@/components/cloudinary-img";
import { SearchResult } from "@/app/gallery/page";

export default function AlbumGrid({images}: {images: SearchResult[]}) {

    return (
        <ImageGrid
            images={images}
            getImage={(imageData: SearchResult) => {
                return (
                    <CloudinaryImage
                        key={imageData.public_id}
                        imagedata={imageData}
                        alt="image"
                        width="400"
                        height="300"
                    />
                )
            }}
        />
    );
}