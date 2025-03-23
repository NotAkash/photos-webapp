import cloudinary from "cloudinary";
import { SearchResult } from "../gallery/page";
import { ForceRefresh } from "@/components/force-refresh";
import FavoritesList from "./favorites-list";



export default async function FavoritesPage() {

    const results = await cloudinary.v2.search
        .expression('resource_type:image AND tags=favorite')
        .sort_by('created_at', 'desc')
        .max_results(16)
        .fields('tags')
        .execute() as { resources: SearchResult[] };


    // console.log("results", results)
    return (
        <section>
            <ForceRefresh />
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Favorited Images</h1>
                </div>

                <FavoritesList initResources={results.resources}/>
            </div>
        </section>

    );
}