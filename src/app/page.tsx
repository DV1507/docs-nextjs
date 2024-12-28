import Link from "next/link";
const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      Click{" "}
      <Link href={"/document/123"}>
        <span className="text-blue-500 underline">&nbsp; here &nbsp;</span>
      </Link>{" "}
      to got to document
    </div>
  );
};

export default Home;
