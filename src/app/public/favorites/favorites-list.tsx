'use client'
import { CldImage } from "next-cloudinary";

import cloudinary from "cloudinary";

import { SearchResult } from "../gallery/page";
import { ForceRefresh } from "@/components/force-refresh";
import { useEffect, useState } from "react";
import { ImageGrid } from "@/components/image-grid";
import { CloudinaryImage } from "@/components/cloudinary-img";



export default function FavoritesList({
    initResources,
}: {
    initResources: SearchResult[]
}) {
    const [resources, setResources] = useState(initResources);
    
    useEffect(() => {
        setResources(initResources);
    }, [initResources])
    return (
        <ImageGrid images={resources} 
        getImage={(imageData: SearchResult) => {
            return (
                <CloudinaryImage
                    key={imageData.public_id}
                    imagedata={imageData}
                    alt="image"
                    width="400"
                    height="300"
                    onUnheart={(unheartedResource) => {
                        setResources((currentResources) =>
                            currentResources.filter(
                                (resource) =>
                                    resource.public_id !== unheartedResource.public_id
                            )
                        );
                    }}
                />
            )
        }}
        />
    );
}