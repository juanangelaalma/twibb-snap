"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import * as htmlToImage from 'html-to-image';
import { default as NextImage } from "next/image";
import { useDrag } from "react-dnd";
import { DndProvider } from 'react-dnd';
import { TouchBackend } from "react-dnd-touch-backend";
import Canvas from '../components/Canvas'
import CameraButton from "@/components/CameraButton";
import DownloadButton from "@/components/DownloadButton"
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableImage from "@/components/DraggableImage";
import { isMobile } from "react-device-detect";
import RepositioningButton from "@/components/RepositioningButton";

export default function Home() {
  const [overlayImage, setOverlayImage] = useState<string>("")
  const [isRepositioning, setRepositioning] = useState<Boolean>(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleDrop = (x: number, y: number) => {
    setPosition({ x, y })
  }

  useEffect(() => {
    console.log(position)
  }, [position])

  useEffect(() => {
    if (canvasRef.current) {
      drawBackgroundImage()
    }
  })

  const drawBackgroundImage = () => {
    const backgroundImage = new Image()
    backgroundImage.src = '/assets/twibbon.png'
    const ctx = canvasRef.current?.getContext('2d')
    backgroundImage.onload = function () {
      ctx?.drawImage(backgroundImage, 0, 0, 1000, 1000)
    }
  }

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

  const BackendDnd = isMobile ? TouchBackend : HTML5Backend;

  return (
    <main>
      <div className="px-6 py-12 h-screen flex flex-col justify-start items-center mx-auto">
        <div className="mb-6 w-[400px] h-[400px] relative rounded-lg overflow-hidden" id="resultComponent">
          <DndProvider backend={BackendDnd}>
            <NextImage className="top-0 left-0 z-10 w-full md:max-w-[500px] max-auto absolute" src='/assets/twibbon.png' width={500} height={500} alt="Twibbon" />
            <DraggableImage style={{ zIndex: isRepositioning ? 20 : 0, opacity: isRepositioning ? 0.5 : 1 }} className="md:max-w-[500px] mx-auto" position={position} handleDrop={handleDrop} src={overlayImage} />
          </DndProvider>
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
    </main>
  );
}