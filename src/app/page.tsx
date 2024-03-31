import TwibbonCard from "@/components/TwibbonCard";

export default function Home() {
  return (
    <>
      {/* component */}
      <section className="bg-[#F3F4F6]">
        <div className="py-16">
          <div className="mx-auto px-6 max-w-6xl text-gray-500">
            <div className="text-center">
              <h2 className="text-3xl text-gray-950 font-semibold">
                Twibbon Kegiatan Masjid Agung Al Munawwar
              </h2>
              <p className="mt-6 text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates recusandae error veniam? Quibusdam assumenda animi, voluptates similique aliquam magni reiciendis?
              </p>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-2 gap-3">
              <TwibbonCard shadowColor="green" twibbonFileName="twibbon.png" />
              <TwibbonCard shadowColor="red" twibbonFileName="twibbon.png" />
              <TwibbonCard shadowColor="blue" twibbonFileName="twibbon.png" />
              <TwibbonCard shadowColor="yellow" twibbonFileName="twibbon.png" />
            </div>
          </div>
        </div>
      </section>
    </>


  )
}