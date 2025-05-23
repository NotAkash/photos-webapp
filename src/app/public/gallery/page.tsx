import { CldImage } from "next-cloudinary";
import cloudinary from "cloudinary";
import { ImageGrid } from "@/components/image-grid";
import GalleryGrid from "./gallery-grid";

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

    return (
        <section>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">View Gallery</h1>
                </div>
                <GalleryGrid images={results.resources} />
            </div>
        </section>

    );
}