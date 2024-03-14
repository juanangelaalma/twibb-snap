import { useState } from "react";
import { useDrag } from "react-dnd";

type DraggableImagePropsType = {
  position: {
    x: number,
    y: number
  },
  handleDrop: (x: number, y: number) => void,
  src: string,
  style?: object,
  className?: string
}

const DraggableImage: React.FC<DraggableImagePropsType> = ({ position, handleDrop, src, style, className }) => {
  const [imageWidth, setImageWidth] = useState<number>(500)
  const [{ isDragging }, drag] = useDrag({
    type: 'image',
    end: (item, monitor) => {
      const droppedPosition = monitor.getSourceClientOffset()
      if (droppedPosition) {
        handleDrop(droppedPosition?.x, droppedPosition?.y)
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`absolute cursor-move z-0 ${className}`}
      style={{
        opacity: isDragging ? 0.5 : 1,
        left: position.x,
        top: position.y,
        width: imageWidth,
        ...style
      }}
    >
      <img
        src={src}
        alt="draggable"
        className="w-full"
      />
    </div >
  )
}

export default DraggableImage