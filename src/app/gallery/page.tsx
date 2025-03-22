import { CldImage } from "next-cloudinary";
import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import { CloudinaryImage } from "./cloudinary-img";
import { ForceRefresh } from "@/components/force-refresh";

export type SearchResult = {
    public_id: string;
    tags: string[]
}

export default async function GalleryPage() {

    const results = await cloudinary.v2.search
        .expression('resource_type:image')
        .sort_by('created_at', 'desc')
        .max_results(16)
        .fields('tags')
        .execute() as { resources: SearchResult[] };


    // console.log("results", results)
    return (
        <section>
            <ForceRefresh/>
            <div className="flex flex-col gap-8">
                
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Gallery</h1>
                    <UploadButton />
                </div>

                <div className="grid grid-cols-4 gap-4">
                    {results.resources.map((result: any) => (
                        <CloudinaryImage
                            imagedata={result}
                            alt="image"
                            width="400"
                            height="300" 
                            />
                    ))}
                </div>
            </div>
        </section>

    );
}