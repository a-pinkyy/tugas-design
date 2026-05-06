export default function CardsPage() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-6">
        <div className="flex gap-4">
          <div className="bg-blue-300 h-72 w-96 p-8 flex flex-col justify-between rounded-3xl">
            <div className="flex gap-4 items-center">
              <h2 className="text-white font-bold">web design</h2>
            </div>
            <p className="text-white">Explore</p>
          </div>
          <div className="bg-orange-300 h-72 w-96 p-8 flex flex-col justify-between rounded-3xl">
            <h2 className="text-white font-bold">graphic design</h2>
            <p className="text-white">Explore</p>
          </div>
          <div className="bg-purple-300 h-72 w-96 p-8 flex flex-col justify-between rounded-3xl">
            <h2 className="text-white font-bold">developers</h2>
            <p className="text-white">Explore</p>
          </div>
          <div className="bg-green-300 h-72 w-96 p-8 flex flex-col justify-between rounded-3xl">
            <h2 className="text-white font-bold">copywritting</h2>
            <p className="text-white">Explore</p>
          </div>
        </div>
      </div>
    </div>
  );
}