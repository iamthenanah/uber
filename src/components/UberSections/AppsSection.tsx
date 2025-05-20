import { ArrowRight } from "lucide-react";
import Image from "next/image";

const AppsSection = () => {
  return (
    <section className="bg-[#F6F6F6] py-14 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        It’s easier in the apps
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow flex items-center gap-6">
          <div className="w-32 h-32 relative">
            <Image
              src="/images/Final-Download-Uber-App.png"
              alt="Uber QR"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">
              Download the Uber app
            </h3>
            <p className="text-gray-600 mb-2">Scan to download</p>
            <span className="text-xl">
              <ArrowRight />
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow flex items-center gap-6">
          <div className="w-32 h-32 relative">
            <Image
              src="/images/QR_https___t.uber.com_download-driver-app.png"
              alt="Driver QR"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">
              Download the Driver app
            </h3>
            <p className="text-gray-600 mb-2">Scan to download</p>
            <span className="text-xl">
              <ArrowRight />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppsSection;
