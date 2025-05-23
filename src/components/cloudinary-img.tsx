/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
'use client';
import { Heart } from "@/components/icons/heart";
import { CldImage, CldImageProps } from "next-cloudinary";
import { setFavoriteAction } from "../app/gallery/actions";
import { useState, useTransition } from "react";
import { SearchResult } from "../app/gallery/page";
import { FullHeart } from "@/components/icons/full-heart";
import { ImageMenu } from "./image-menu";
import { usePathname } from "next/navigation";


export function CloudinaryImage(props: {
    imagedata: SearchResult;
    onUnheart?: (unheartedResource: SearchResult) => void;
    [key: string]: any;
} & Omit<CldImageProps, 'src'>) {
    const [transition, startTransition] = useTransition()
    const { imagedata, onUnheart } = props;
    const [isFav, setIsFav] = useState(
        imagedata.tags.includes('favorite'))


    // Ensure this runs only on the client side
    const pathname = usePathname();
    if (pathname.startsWith("/public/")) {
        return (
            <div className="relative">
                <CldImage  {...props} src={imagedata.public_id} />
                <ImageMenu
                    image={imagedata}
                />
            </div>
        )
    }
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
                    className=" absolute top-2 left-2 hover:text-white text-red-600 cursor-pointer"
                />
                :
                <Heart
                    onClick={() => {
                        setIsFav(true);
                        startTransition(() => {
                            setFavoriteAction(imagedata.public_id, true)
                        });
                    }}
                    className=" absolute top-2 left-2 hover:text-red-600 text-white cursor-pointer"
                />
            }
            <ImageMenu
                image={imagedata}
            />
        </div>
    )
}