import Image from "next/image";
import Link from "next/link";

const RecentActivity = () => (
  <div className="flex flex-col  text-center justify-self-center items-center py-10 gap-6 lg:flex-row">
    <div className="text-start md:flex-1 flex flex-col gap-6 w-full lg:justify-start">
      <h2 className="text-2xl font-semibold">
        Log in to see your recent activity
      </h2>

      <p className="text-gray-600">
        View past trips, tailored suggestions, support resources, and more.
      </p>

      <Link
        href="/login"
        className="text-uber bg-black text-white px-6 py-2 rounded-md w-fit"
      >
        Log in to your account
      </Link>

      <p className="text-gray-600">
        Don’t have an Uber account?
        <Link href="/signup" className="underline text-black">
          Sign up
        </Link>
      </p>
    </div>

    <div className="flex-1">
      <Image
        src={"/images/Airport-Fall.jpeg"}
        alt="Drive with Uber"
        width={900}
        height={700}
        className="rounded-lg mb-4 mx-auto"
      />
    </div>
  </div>
);

export default RecentActivity;
