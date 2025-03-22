'use client';
import { Heart } from "@/components/icons/heart";
import { CldImage, CldImageProps } from "next-cloudinary";
import { setFavoriteAction } from "./actions";
import { useState, useTransition } from "react";
import { SearchResult } from "./page";
import { FullHeart } from "@/components/icons/full-heart";


export function CloudinaryImage(props: {
    imagedata: SearchResult; 
    onUnheart?: (unheartedResource: SearchResult) => void;
    [key: string]: any;
} & Omit<CldImageProps, 'src'>) {
    const [transition, startTransition] = useTransition()
    const { imagedata, onUnheart } = props;
    const [isFav, setIsFav] = useState(
        imagedata.tags.includes('favorite'))


    return (
        <div className="relative">
            <CldImage  {...props} src={imagedata.public_id} />
            {isFav ?

                <FullHeart
                    onClick={() => {
                        onUnheart?.(imagedata);
                        setIsFav(false);
                        startTransition(() => {
                            setFavoriteAction(imagedata.public_id, false)
                        });
                    }}
                    className=" absolute top-2 right-2 hover:text-white text-red-600 cursor-pointer"
                />
                :
                <Heart
                    onClick={() => {
                        setIsFav(true);
                        startTransition(() => {
                            setFavoriteAction(imagedata.public_id, true)
                        });
                    }}
                    className=" absolute top-2 right-2 hover:text-red-600 text-white cursor-pointer"

                />
            }
        </div>
    )



}