import { ChangeEvent } from "react"

type CameraButtonPropsType = {
  handleUploadImage: (e: ChangeEvent<HTMLInputElement>) => void,
  className?: string,
  label?: string
}

const CameraButton = (props: CameraButtonPropsType) => {
  const { handleUploadImage, className, label } = props

  return (
    <div className={className}>
      <input id="image" type="file" accept="image/*" className="w-0 h-0" onChange={handleUploadImage} />
      <label htmlFor="image" className="btn btn-primary bg-cyan-500 w-full text-white hover:bg-cyan-600">
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
        { label }
      </label>
    </div>
  )
}

export default CameraButton