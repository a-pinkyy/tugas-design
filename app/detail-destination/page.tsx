import "./detailDestination.css";
import CardScheduleDestination from "./components/CardScheduleDestination";
export default function DetailDestination() {
  return (
    <div className="bg-[#f3f6fb] min-h-screen text-gray-900">
      <div className="bg-white px-10 py-5">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <div></div>
          <div className="flex gap-8">
            <p>🎟️ Promo</p>
            <p>Jadi Partner tiket.com</p>
            <p>Blibli Tiket Rewards</p>
            <p>Your Orders</p>
            <p>ID | IDR⌄</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center gap-8">
            <h1 className="text-4xl font-bold text-blue-600">
              tiket<span className="text-yellow-400">●</span>com
            </h1>
            <div className="bg-gray-100 rounded-full px-6 py-4 w-[430px] text-gray-400">
              🔍 Semarang di Dekatmu
            </div>
          </div>
          <div className="flex gap-3">
            <button className="bg-blue-100 text-blue-600 font-bold px-10 py-4 rounded-xl">
              Masuk
            </button>
            <button className="bg-blue-600 text-white font-bold px-10 py-4 rounded-xl">
              Daftar
            </button>
          </div>
        </div>
        <div className="flex gap-7 mt-8 font-bold text-xl">
          <p className="bg-gray-100 px-4 py-2 rounded-lg">Pesawat</p>
          <p>Hotel</p>
          <p>Vila & Apt.</p>
          <p>To Do</p>
          <p>Kereta</p>
          <p>Lainnya⌄</p>
        </div>
      </div>
      <div className="max-w-[1500px] mx-auto pt-8">
        <div className="bg-white rounded-2xl shadow-md px-8 py-5 flex justify-between items-center">
          <div className="flex gap-5 items-center text-xl font-bold">
            <p className="text-4xl">⌕</p>
            <p>Balikpapan, BPNC</p>
            <button className="shadow-md px-4 py-3 rounded-xl">⇄</button>
            <p>Medan, MESC</p>
            <p className="border-l pl-6">Sel, 15 Mei 26 (Sekali Jalan)</p>
            <p className="border-l pl-6">1 penumpang, Ekonomi</p>
          </div>

          <button className="bg-blue-100 text-blue-600 font-bold px-16 py-4 rounded-lg">
            Cari
          </button>
        </div>

        <div className="flex mt-8 overflow-hidden">
          <div className="bg-blue-50 border border-gray-300 px-5 py-3 w-48 border-b-4 border-b-blue-500">
            <p className="text-gray-500">Sel, 16 Mei 2026</p>
            <h1 className="font-bold text-xl">IDR 3.409.674</h1>
          </div>

          <div className="bg-white border border-gray-300 px-5 py-3 w-48">
            <p className="text-gray-500">Rab, 17 Mei 2026</p>
            <h1 className="font-bold text-xl">IDR 3.366.720</h1>
          </div>

          <div className="bg-white border border-gray-300 px-5 py-3 w-48">
            <p className="text-gray-500">Kam, 18 Mei 2026</p>
            <h1 className="font-bold text-xl">IDR 3.450.678</h1>
          </div>

          <div className="bg-white border border-gray-300 px-5 py-3 w-48">
            <p className="text-gray-500">Jum, 19 Mei 2026</p>
            <h1 className="font-bold text-xl">IDR 3.510.124</h1>
          </div>

          <div className="bg-white border border-gray-300 px-5 py-3 w-48">
            <p className="text-gray-500">Sab, 20 Mei 2026</p>
            <h1 className="font-bold text-xl">IDR 3.740.533</h1>
          </div>

          <div className="bg-white border border-gray-300 px-5 py-3 w-48">
            <p className="text-gray-500">Min, 21 Mei 2026</p>
            <h1 className="font-bold text-xl">IDR 3.510.124</h1>
          </div>
        </div>

        <div className="flex gap-5 mt-8 text-xl">
          <button className="bg-white px-6 py-3 rounded-full border">⌄ Filter</button>
          <button className="bg-white px-6 py-3 rounded-full border">☰ Urutkan⌄</button>
          <button className="bg-white px-6 py-3 rounded-full border">✈ Transit⌄</button>
          <button className="bg-white px-6 py-3 rounded-full border">✈ Maskapai⌄</button>
          <button className="bg-white px-6 py-3 rounded-full border">◴ Waktu⌄</button>
        </div>

        <CardScheduleDestination />

      </div>
    </div>
  );
}