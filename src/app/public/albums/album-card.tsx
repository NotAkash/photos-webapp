import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Folder } from "./page"
import Link from "next/link"


export function AlbumCard({ folder }: { folder: Folder }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{folder.name}</CardTitle>
                <CardDescription>All images in {folder.name} Album</CardDescription>
            </CardHeader>
            <CardContent>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button asChild>
                    <Link href={`/public/albums/${folder.name}`}>View Album</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
