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
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-2 gap-3">
              <TwibbonCard shadowColor="green" twibbonFileName="musrem8.png" />
            </div>
          </div>
        </div>
      </section>
    </>


  )
}