import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "./icons/menu"
import AddToFolder from "./ui/folder-add"
import DeleteImg from "./ui/delete-img"
import { AddToAlbumDialog } from "./add-to-album-dialog"
import { SearchResult } from "@/app/gallery/page"

export function ImageMenu({image}: {image: SearchResult }) {
    return (
        <div className="absolute top-2 right-2">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" className="w-8 h-8">
                        <Menu />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-36">
                    <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
                            <AddToAlbumDialog image={image}/>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Delete <DeleteImg /> </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
