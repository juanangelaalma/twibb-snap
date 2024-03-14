import { RefObject } from "react"

type CanvasPropsType = {
  canvasRef: RefObject<HTMLCanvasElement>,
  height: number,
  width: number
}

const Canvas = (props: CanvasPropsType) => {
  const { height, width, canvasRef } = props
  return <canvas height={height} width={width} className="w-full rounded relative" ref={canvasRef}></canvas>
}

export default Canvas