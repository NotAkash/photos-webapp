import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AddToFolder from "./ui/folder-add"
import { useState } from "react"
import { SearchResult } from "@/app/gallery/page"
import React from "react"
import { addToAlbum } from "./actions"

export function AddToAlbumDialog({ image }: { image: SearchResult }) {

    const [albumName, setAlbumName] = useState("")
    const [open, setOpen] = React.useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost">
                    Add to Album<AddToFolder />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add to Album</DialogTitle>
                    <DialogDescription>
                        Type an Album name to move image into
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Album
                        </Label>
                        <Input
                            onChange={(e) => setAlbumName(e.currentTarget.value)}
                            id="album-name"
                            value={albumName}
                            className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        onClick={async() => {
                            console.log(image);
                            await addToAlbum(albumName,image)
                            setOpen(false);
                        }} type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
