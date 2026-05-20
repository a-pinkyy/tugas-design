export default function Sidebar() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-6">
        <div className="flex gap-4">
          <div className="bg-black h-72 w-96 p-8 flex flex-col justify-between rounded-3xl">
            <div className="flex gap-4 items-center">
              <h2 className="text-white font-bold">Acme Inc</h2>
            </div>

               <p className="text-gray-500">playground</p>
                   <p className="text-gray-500">moduls</p>
                   <p className="text-gray-500">documentation</p>
                   <p className="text-gray-500">settings</p>
          </div>
          </div>
      </div>
    </div>
  );
}