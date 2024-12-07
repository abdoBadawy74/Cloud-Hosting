import { TiTick } from "react-icons/ti";

const WebHostingPlan = () => {
  return (
    <div className="flex flex-col items-center justify-center w-3/4 rounded p-4  bg-gray-200 md:w-2/4 lg:w-1/4">
      <h3 className="text-3xl font-bold text-purple-900">Premium</h3>
      <strong className="text-3xl font-bold text-gray-900 my-5">$99/mo</strong>
      <span className="bg-red-200 text-red-900 rounded-full px-2 py-1 font-semibold">
        10% OFF
      </span>
      <div className="mt-6">
        <h5 className="text-2xl mb-1 font-semibold text-purple-700">
          Top Featured
        </h5>
        <div className="flex items-center text-green-700 mb-1 ps-3">
          <TiTick />
          100 Websites
        </div>
        <div className="flex items-center text-green-700 mb-1 ps-3">
          <TiTick />
          100 GB SSD Storage
        </div>
        <div className="flex items-center text-green-700 mb-1 ps-3">
          <TiTick />
          Weekly Backup
        </div>
        <div className="flex items-center text-green-700 mb-1 ps-3">
          <TiTick />
          100 Websites
        </div>
        <div className="flex items-center text-green-700 mb-1 ps-3">
          <TiTick />
          Unlimited Bandwidth
        </div>
        <div className="flex items-center text-green-700 mb-1 ps-3">
          <TiTick />
          Free SLL
        </div>
        <div className="flex items-center text-green-700 mb-1 ps-3">
          <TiTick />
          Free Emial
        </div>
      </div>
      <button className="bg-purple-900 text-white px-4 py-2 mt-5 rounded">
        Buy Now
        </button>
    </div>
  );
};

export default WebHostingPlan;