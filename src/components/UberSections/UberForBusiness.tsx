import Image from "next/image";
import Link from "next/link";

const UberForBusiness = () => (
  <div className="flex flex-col text-center justify-self-center items-center py-10 gap-6 lg:flex-row">
    <div className="text-start md:flex-1 flex flex-col gap-6 w-full lg:justify-start">
      <h2 className="text-2xl font-semibold mb-2">
        The Uber you know, reimagined for business
      </h2>
      <p className="text-gray-600 mb-4">
        Uber for Business is a platform for managing global rides and meals, and
        local deliveries, for companies of any size.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/business"
          className="text-uber bg-black text-white px-6 py-2 rounded-md text-nowrap"
        >
          Get started
        </Link>
        <Link
          href="/solutions"
          className="text-black underline px-6 py-2 w-full text-wrap"
        >
          Check out our solutions
        </Link>
      </div>
    </div>

    <div className="flex-1">
      <Image
        src={"/images/square.png"}
        alt="Drive with Uber"
        width={900}
        height={700}
        className="rounded-lg mb-4 mx-auto"
      />
    </div>
  </div>
);

export default UberForBusiness;
