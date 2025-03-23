'use client';


import { ImageGrid } from "@/components/image-grid";
import { SearchResult } from "./page";
import { CloudinaryImage } from "@/components/cloudinary-img";

export default function GalleryGrid({images}: {images: SearchResult[]}) {

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