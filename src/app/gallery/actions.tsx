"use server"
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";


export async function setFavoriteAction(
    publicId: string, 
    isFav: boolean,
    path: string
){
    if (isFav){
        console.log("should fav");
        await cloudinary.v2.uploader.add_tag('favorite', [publicId])
    }else{
        console.log("should unfav");
        await cloudinary.v2.uploader.remove_tag('favorite', [publicId])
    }
    await new Promise((resolve) => setTimeout(resolve, 1500));
    revalidatePath(path);
}