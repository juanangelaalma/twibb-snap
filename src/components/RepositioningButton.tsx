import React from "react"

type RepositioningButtonPropsType = {
  isRepositioning: Boolean,
  handleRepositioning: () => void
}

const RepositioningButton: React.FC<RepositioningButtonPropsType> = ({ isRepositioning, handleRepositioning }) => {
  return (
    <button className={`btn ${isRepositioning ? 'btn-primary' : ''}`} onClick={handleRepositioning}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M304 96h112v112m-10.23-101.8L111.98 400.02M208 416H96V304" /></svg>
    </button>
  )
}

export default RepositioningButton