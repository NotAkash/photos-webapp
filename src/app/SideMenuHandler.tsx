'use client';

import { PublicSideMenu } from '@/publicSideMenu';
import { SideMenu } from '@/sideMenu';
import { Button } from '@/components/ui/button';
import { Link, Heart } from 'lucide-react';
import { usePathname } from 'next/navigation';




export default function SideMenuHandler() {
    const pathname = usePathname();
    const isPublic = pathname.includes('/public/');
    console.log('client pathname:', pathname);
    console.log('client isPublic:', isPublic);

    return isPublic ? <PublicSideMenu /> : <SideMenu />;
}