"use client";
import { ChangeEvent, useEffect, useRef, useState } from "react";

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
          <canvas height={1000} width={1000} className="w-full rounded relative" ref={canvasRef}></canvas>
        </div>
        {overlayFilled ? (
          <div className="w-full flex flex-row space-x-4">
            <div className="w-[100px]">
              <input id="image" type="file" className="w-0 h-0" onChange={handleUploadImage} />
              <label htmlFor="image" className="btn btn-primary w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M2 19V9a2 2 0 0 1 2-2h.5a2 2 0 0 0 1.6-.8l2.22-2.96A.6.6 0 0 1 8.8 3h6.4a.6.6 0 0 1 .48.24L17.9 6.2a2 2 0 0 0 1.6.8h.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2" />
                    <path d="M12 17a4 4 0 1 0 0-8a4 4 0 0 0 0 8" />
                  </g>
                </svg>
              </label>
            </div>
            <div className="w-full">
              <button className="btn btn-primary btn-outline w-full" onClick={handleDownload}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l4-5h-3V4h-2v7H8z" /><path fill="currentColor" d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2z" /></svg>
                Download
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full">
            <input id="image" type="file" className="w-0 h-0" onChange={handleUploadImage} />
            <label htmlFor="image" className="btn btn-primary w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M2 19V9a2 2 0 0 1 2-2h.5a2 2 0 0 0 1.6-.8l2.22-2.96A.6.6 0 0 1 8.8 3h6.4a.6.6 0 0 1 .48.24L17.9 6.2a2 2 0 0 0 1.6.8h.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2" />
                  <path d="M12 17a4 4 0 1 0 0-8a4 4 0 0 0 0 8" />
                </g>
              </svg>
              Pilih Foto
            </label>
          </div>
        )}
      </div>
    </main>
  );
}