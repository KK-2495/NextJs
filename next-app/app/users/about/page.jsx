import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between text-center p-24">
        <Link href="/users/content">
          <h1>This is my About Component</h1>
          <button className=" p-1 border border-blue-600 bg-white text-black ">
            Click Me to Proceed
          </button>
        </Link>
      </div>
    </>
  );
};

export default About;
