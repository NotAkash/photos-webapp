"use server"
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";


export async function setFavoriteAction(
    publicId: string, 
    isFav: boolean,
){
    if (isFav){
        console.log("should fav");
        await cloudinary.v2.uploader.add_tag('favorite', [publicId])
    }else{
        console.log("should unfav");
        await cloudinary.v2.uploader.remove_tag('favorite', [publicId])
    }
    
}