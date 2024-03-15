import Link from "next/link";

const About = () => {
  return (
    <>
      <Link href="/users/content">
        <h1>This is my About Component</h1>
        <li className=" p-1 border border-blue-600 bg-white text-black ">
          Click Me to Proceed
        </li>
      </Link>
    </>
  );
};

export default About;
