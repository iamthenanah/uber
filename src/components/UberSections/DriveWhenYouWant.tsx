import Image from "next/image";
import Link from "next/link";

const DriveWhenYouWant = () => (
  <div className="flex flex-col  text-center justify-self-center items-center py-10 gap-6 lg:flex-row">
    <div className="md:flex-1 w-full">
      <Image
        src={"/images/earner-illustra.png"}
        alt="Drive with Uber"
        width={900}
        height={700}
        className="rounded-lg mb-4 mx-auto"
      />
    </div>
    <div className="text-start md:flex-1 flex flex-col gap-6 w-full lg:justify-start">
      <h2 className="text-2xl font-semibold">
        Drive when you want, make what you need
      </h2>
      <p className="text-gray-600">
        Make money on your schedule with deliveries or rides—or both. You can
        use your own car or choose a rental through Uber.
      </p>
      <Link
        href="/driver-signup"
        className="text-uber bg-black text-white px-6 py-2 rounded-md w-fit"
      >
        Get started
      </Link>
      <p className="text-gray-600">
        Already have an account?
        <Link href="/login" className="underline text-black">
          Sign in
        </Link>
      </p>
    </div>
  </div>
);

export default DriveWhenYouWant;
