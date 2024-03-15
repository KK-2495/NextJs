import Link from "next/link";

const UserHome = () => {
  return (
    <>
      <Link href="/users/content">
        <h1>This is my Home Component</h1>
        <button className=" p-1 border border-blue-600 bg-white text-black ">
          Click Me to Proceed
        </button>
      </Link>
    </>
  );
};

export default UserHome;
