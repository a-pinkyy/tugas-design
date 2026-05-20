export default function CardScheduleDestination() {
  return (
    <div className="bg-white rounded-xl shadow-md mt-10 p-6 flex justify-between hover:shadow-xl hover:-translate-y-1 duration-300">
      <div className="w-[38%]">
        <div className="flex gap-3 items-center">
          <div className="flex">
            <div className="w-7 h-7 bg-red-100 rounded-full text-[10px] flex items-center justify-center">
              Batik
            </div>
            <div className="w-7 h-7 bg-red-100 rounded-full text-[10px] flex items-center justify-center -ml-2">
              Lion
            </div>
          </div>
          <h1 className="font-bold text-lg">
            Batik Air Indonesia + Lion Air
          </h1>
          <p className="text-lg">🧳 🍴</p>
        </div>
        <p className="bg-gray-100 inline-block mt-16 px-2 py-1 rounded text-sm">
          Tidak bisa reschedule & refund
        </p>
      </div>
      <div className="flex gap-7 w-[28%]">
        <div>
          <h1 className="text-3xl font-bold">14:55</h1>
          <p className="text-base text-gray-500 mt-1">BPN</p>
        </div>
        <div className="text-center text-gray-500 mt-1">
          <p className="text-base">6j 25m</p>
          <div className="border-t w-24 my-2"></div>
          <p className="text-base">1 transit</p>
        </div>
       <div>
          <h1 className="text-3xl font-bold">20:20</h1>
          <p className="text-base text-gray-500 mt-1">KNO</p>
        </div>
      </div>

      <div className="text-right w-[30%]">
        <p className="text-base text-gray-500 line-through">
          IDR 3.411.300
        </p>

        <p className="text-base text-gray-500 mt-2">
          Setelah cashback
        </p>

        <h1 className="text-3xl font-bold text-red-400 mt-2">
          IDR 3.409.674<span className="text-base text-gray-500">/pax</span>
        </h1>

        <button className="bg-blue-500 text-white px-8 py-3 rounded-lg mt-4 font-bold hover:bg-blue-600 active:scale-95 duration-200">
          Pilih
        </button>
      </div>

    </div>
  );
}