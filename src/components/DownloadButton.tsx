type DownloadButtonPropsType = {
  handleDownload: () => void
  isLoading?: boolean
}

const DownloadButton = (props: DownloadButtonPropsType) => {
  const { handleDownload, isLoading } = props

  return (
    <div className="w-full">
      <button className="btn btn-primary btn-outline w-full" onClick={handleDownload}>
        {isLoading ? (
          <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l4-5h-3V4h-2v7H8z" /><path fill="currentColor" d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2z" /></svg>
            Download
          </>
        )}
      </button>
    </div>
  )
}

export default DownloadButton