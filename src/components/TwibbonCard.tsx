import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type TwibbonCardType = {
  shadowColor: string,
  twibbonFileName: string
}

const TwibbonCard: React.FC<TwibbonCardType> = ({ shadowColor, twibbonFileName }) => {
  return (
    <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200">
      <div
        aria-hidden="true"
        className={`inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-${shadowColor}-500 to-white blur-2xl opacity-25`}
      />
      <div className="relative">
        <div className="border border-blue-500/10 flex relative w-[90%] mx-auto p-2 *:relative *:m-auto rounded-lg before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 before:shadow">
          <Image src={`/assets/${twibbonFileName}`} width={500} height={500} alt="Image" />
        </div>
        <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
          <p className="text-gray-700">
            Amet praesentium deserunt ex commodi tempore fuga voluptatem.
            Sit, sapiente.
          </p>
        </div>
        <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200">
          <Link href={`/post-image?twibbon=${twibbonFileName}`} className="btn btn-primary bg-cyan-500 w-full text-white hover:bg-cyan-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19.221 10.803L12 10V4a2 2 0 0 0-4 0v12l-3.031-1.212a2 2 0 0 0-2.64 1.225l-.113.34a.998.998 0 0 0 .309 1.084l5.197 4.332c.179.149.406.231.64.231H19a2 2 0 0 0 2-2v-7.21a2 2 0 0 0-1.779-1.987"
              />
            </svg>
            Pilih Twibbon
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TwibbonCard