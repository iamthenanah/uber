import Image from "next/image";
import Link from "next/link";

const GoGet2025 = () => (
  <div className="flex flex-col  text-center justify-self-center items-center py-10 gap-6 lg:flex-row">
    <div className="md:flex-1 w-full">
      <Image
        src={"/images/GG25.jpeg"}
        alt="Drive with Uber"
        width={900}
        height={700}
        className="rounded-lg mb-4 mx-auto"
      />
    </div>
    <div className="text-start md:flex-1 flex flex-col gap-6 w-full lg:justify-start">
      <h2 className="text-2xl font-semibold mb-2">
        Our annual product showcase is here
      </h2>
      <p className="text-gray-600 mb-4">
        Go—Get 2025 is live. Explore all the latest products announced to help
        make your everyday more flexible, more affordable, and a little easier.
      </p>
      <Link
        href="/go-get-2025"
        className="text-uber bg-black text-white px-6 py-2 rounded-md w-fit"
      >
        Discover what’s new
      </Link>
    </div>
  </div>
);

export default GoGet2025;
