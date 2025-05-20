import Image from "next/image";
import Link from "next/link";

const UberOneMembership = () => (
  <div className="flex flex-col text-center justify-self-center items-center py-10 gap-6 lg:flex-row">
    <div className="text-start md:flex-1 flex flex-col gap-6 w-full lg:justify-start">
      <h2 className="text-2xl font-semibold mb-2">
        Save on Uber and Uber Eats with Uber One membership
      </h2>
      <p className="text-gray-600 mb-2">
        Become an Uber One member for savings and exclusive perks on Uber and
        Uber Eats.
      </p>
      <p className="text-gray-600 mb-4">Sign up for just $9.99/month.</p>
      <Link
        href="/uber-one"
        className="text-uber bg-black text-white px-6 py-2 rounded-md w-fit"
      >
        Sign up to save
      </Link>
    </div>
    <div className="flex-1">
      <Image
        src={"/images/uber-one.jpg"}
        alt="Drive with Uber"
        width={900}
        height={700}
        className="rounded-lg mb-4 mx-auto"
      />
    </div>
  </div>
);

export default UberOneMembership;
