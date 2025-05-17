import { CldImage } from "next-cloudinary";
import cloudinary from "cloudinary";
import { ForceRefresh } from "@/components/force-refresh";
import { ImageGrid } from "@/components/image-grid";
import { SearchResult } from "@/app/gallery/page";

import AlbumGrid from "./album-grid";




export default async function GalleryPage({
    params: { albumName }
}: {
    params: {
        albumName: string,
    };
}
) {

    const results = await cloudinary.v2.search
        .expression(`resource_type:image AND folder=${albumName}`)
        .sort_by('created_at', 'desc')
        .max_results(16)
        .fields('tags')
        .execute() as { resources: SearchResult[] };

    return (
        <section>
            <ForceRefresh />
            <div className="flex flex-col gap-8">

                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Album: {albumName}</h1>
                </div>
                <AlbumGrid images={results.resources} />
            </div>
        </section>

    );
}