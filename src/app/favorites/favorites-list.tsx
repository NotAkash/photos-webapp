'use client'
import { CldImage } from "next-cloudinary";

import cloudinary from "cloudinary";
import { CloudinaryImage } from "../gallery/cloudinary-img";
import { SearchResult } from "../gallery/page";
import { ForceRefresh } from "@/components/force-refresh";
import { useEffect, useState } from "react";



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
        <div className="grid grid-cols-4 gap-4">
            {resources.map((result) => (
                <CloudinaryImage
                    imagedata={result}
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
            ))}
        </div>
    );
}