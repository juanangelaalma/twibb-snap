"use client";
import React, { ChangeEvent, Suspense, useState } from "react";
import * as htmlToImage from 'html-to-image';
import { default as NextImage } from "next/image";
import CameraButton from "@/components/CameraButton";
import DownloadButton from "@/components/DownloadButton"
import DraggableImage from "@/components/DraggableImage";
import RepositioningButton from "@/components/RepositioningButton";
import { useSearchParams } from "next/navigation";

export default function PostImage() {
  const [overlayImage, setOverlayImage] = useState<string>("")
  const [isRepositioning, setRepositioning] = useState<Boolean>(false)
  const searchParams = useSearchParams()

  const twibbonFileName = searchParams?.get('twibbon')

  const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imageUrl = URL.createObjectURL(e.target.files[0])
      setOverlayImage(imageUrl)
    }
  }

  const handleDownload = () => {
    const node = document.getElementById('resultComponent')
    if (node) {
      htmlToImage.toPng(node).then(function (dataUrl) {
        download(dataUrl)
      })
    }
  }

  const download = (dataUrl: string) => {
    const link = document.createElement('a');
    link.download = 'my-image-name.jpeg';
    link.href = dataUrl;
    link.click();
  }

  const handleRepositioning = () => {
    setRepositioning(!isRepositioning)
  }

  return (
    <Suspense>
      <main className="bg-[#F3F4F6] min-h-screen px-3">
        <div className="px-6 py-12 h-screen flex flex-col justify-start items-center mx-auto">
          <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200">
            <div
              aria-hidden="true"
              className={`inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-purple-500 to-white blur-2xl opacity-25`}
            />
            <div className="mb-6 w-[350px] h-[350px] md:w-[400px] md:h-[400px] relative rounded-lg overflow-hidden" id="resultComponent">
              <NextImage style={{ opacity: isRepositioning ? 0.5 : 1 }} className="top-0 left-0 z-10 w-full md:max-w-[500px] max-auto absolute" src={`/assets/${twibbonFileName}`} width={500} height={500} alt="Twibbon" />
              <DraggableImage style={{ opacity: isRepositioning ? 0.5 : 1, zIndex: isRepositioning ? 20 : 0 }} className="md:max-w-[500px] mx-auto" src={overlayImage} />
            </div>
            {overlayImage ? (
              <div className="w-full flex flex-row space-x-4 md:max-w-[500px]">
                <RepositioningButton isRepositioning={isRepositioning} handleRepositioning={handleRepositioning} />
                <CameraButton handleUploadImage={handleUploadImage} />
                <DownloadButton handleDownload={handleDownload} />
              </div>
            ) : (
              <CameraButton handleUploadImage={handleUploadImage} className="w-full md:max-w-[500px]" label="Pilih Foto" />
            )}
          </div>
        </div>
      </main>
    </Suspense>
  );
}