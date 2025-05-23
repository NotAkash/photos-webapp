/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { CldUploadButton, CldImage } from 'next-cloudinary';
import { useState } from 'react';
import React, { Component }  from 'react';
import { redirect } from 'next/navigation';

export default function Home() {
    const [imageId, setImageId] = useState("");
    return (
            redirect('/public/gallery')
    );
}
