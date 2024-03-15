import Link from "next/link";

const Contact = () => {
  return (
    <>
      <Link href="/users/content">
        <h1>This is my About Component</h1>
        <button className=" p-1 border border-blue-600 bg-white text-black ">
          Click Me to Proceed
        </button>
      </Link>
    </>
  );
};

export default Contact;
