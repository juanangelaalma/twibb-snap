"use client";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Canvas from '../components/Canvas'
import CameraButton from "@/components/CameraButton";
import DownloadButton from "@/components/DownloadButton"

export default function Home() {
  const [overlayFilled, setOverlayFilled] = useState<Boolean>(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

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
      const ctx = canvasRef.current?.getContext('2d')
      const imageUrl = URL.createObjectURL(e.target.files[0])
      const overlayImage = new Image()
      overlayImage.src = imageUrl
      overlayImage.onload = function () {
        ctx?.drawImage(overlayImage, 0, 0, 1000, 1000)
        drawBackgroundImage()
        setOverlayFilled(true)
      }
    }
  }

  const handleDownload = () => {
    if (canvasRef.current) {
      const link = document.createElement('a')
      link.download = 'twibbon.png';
      link.href = canvasRef.current.toDataURL()
      link.click()
    }
  }

  return (
    <main>
      <div className="px-6 py-12 h-screen flex flex-col justify-start items-center md:w-[500px] mx-auto">
        <div className="avatar w-full mb-6">
          <Canvas canvasRef={canvasRef} height={1000} width={1000} />
        </div>
        {overlayFilled ? (
          <div className="w-full flex flex-row space-x-4">
            <CameraButton handleUploadImage={handleUploadImage} className="w-[100px]" />
            <DownloadButton handleDownload={handleDownload} />
          </div>
        ) : (
          <CameraButton handleUploadImage={handleUploadImage} className="w-full" label="Pilih Foto" />
        )}
      </div>
    </main>
  );
}