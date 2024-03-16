import Link from "next/link";

const UserHome = () => {
  return (
    <>
      {/* <style jsx>
        {`
          .home {
            background-color: #0b0b0b;
            border: 1px solid white;
          }
        `}
      </style> */}
      <div className="flex min-h-screen flex-col items-center justify-between text-center p-24">
        <Link href="/users/content">
          <h1>This is my Home Component</h1>
          <button className=" p-1 border border-blue-600 bg-white text-black ">
            Click Me to Proceed
          </button>
        </Link>
        <span className="dummy rounded-lg border border-transparent px-5 py-4  transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:text-sky-400">
          Hi I'm Global Styled Jsx.
        </span>
      </div>
    </>
  );
};

export default UserHome;
