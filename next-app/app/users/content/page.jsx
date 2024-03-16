import Link from "next/link";

const NextApp = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between text-center p-24">
        This is my First Next App <br />
        <Link href="/">
          <button className="p-3 text-center bg-slate-500 rounded-xl">
            Click me to go Back
          </button>
        </Link>
        <span className="globalStyle rounded-lg border border-transparent px-5 py-4  transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:text-sky-400">
          Hi I'm Global Styled Jsx.
        </span>
      </div>
    </>
  );
};

export default NextApp;
