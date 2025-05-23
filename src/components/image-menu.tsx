/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "./icons/menu";
import { AddToAlbumDialog } from "./add-to-album-dialog";
import { SearchResult } from "@/app/gallery/page";
import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";

export function ImageMenu({ image }: { image: SearchResult }) {
    const [open, setOpen] = useState(false);

    // Ensure this runs only on the client side
    const pathname = usePathname();
    if (pathname.startsWith("/public/")) {
        return null;
    }

    return (
        <div className="absolute top-2 right-2">
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" className="w-8 h-8 p-0">
                        <Menu />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                    <DropdownMenuItem asChild>
                        <AddToAlbumDialog image={image} onClose={() => setOpen(false)} />
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Button
                            className="cursor-pointer flex justify-start pl-4"
                            asChild
                            variant="ghost"
                        >
                        </Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
