import Link from "next/link";

const NextApp = () => {
  return (
    <>
      <div>
        This is my First Next App <br />
        <Link href="/">
          <button className="p-3 text-center bg-slate-500 rounded-xl">
            Click me to go Back
          </button>
        </Link>
      </div>
    </>
  );
};

export default NextApp;
