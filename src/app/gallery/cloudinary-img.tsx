'use client';
import { Heart } from "@/components/icons/heart";
import { CldImage } from "next-cloudinary";
import { setFavoriteAction } from "./actions";
import { useTransition } from "react";
import { SearchResult } from "./page";
import { FullHeart } from "@/components/icons/full-heart";


export function CloudinaryImage(
    props: any & {imagedata: SearchResult, path:string}) {
    const [transition, startTransition] = useTransition()
    const {imagedata} = props;
    const isFav = imagedata.tags.includes('favorite');


    
    return (
        <div className="relative">
            <CldImage  {...props}  src={imagedata.public_id} />
            {isFav? 
            
            <FullHeart
            onClick={() => {
                startTransition(() => {
                    setFavoriteAction(imagedata.public_id, false, props.path)
                });
            }}
                className=" absolute top-2 right-2 hover:text-white text-red-600 cursor-pointer"
            />
        :
            <Heart
                onClick={() => {
                    startTransition(() => {
                        setFavoriteAction(imagedata.public_id, true, props.path)
                    });
                }}
                className=" absolute top-2 right-2 hover:text-red-600 text-white cursor-pointer"
                
            />
            }
        </div>
    )



}