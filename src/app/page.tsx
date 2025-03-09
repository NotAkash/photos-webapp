"use client";

import { CldUploadButton, CldImage } from 'next-cloudinary';
import { useState } from 'react';

export default function Home() {
    const [imageId, setImageId] = useState("");
    return (

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div className="center">
                <CldUploadButton
                    onSuccess={(info: any) => {
                        setImageId(info.info.public_id);
                    }}
                    uploadPreset="default"
                /></div>
            {imageId && (
                <CldImage
                    width="960"
                    height="600"
                    src={imageId}
                    sizes="100vw"
                    alt="Description of my image" />
            )}
        </main>
    );
}
