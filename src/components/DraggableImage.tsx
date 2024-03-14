import { Rnd } from "react-rnd";

type DraggableImagePropsType = {
  src: string,
  style?: object,
  className?: string
}

const DraggableImage: React.FC<DraggableImagePropsType> = ({ src, style, className }) => {
  const options = { x: 50, y: 50, width: '80%', height: '100%' }

  return (
    <Rnd default={options} lockAspectRatio={true} style={style} className={`cursor-move z-0 ${className}`}>
      <img src={src} alt="draggable" className="w-full" draggable={false} />
    </Rnd >
  )
}

export default DraggableImage