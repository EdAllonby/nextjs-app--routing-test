import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Link className="hover:underline" href="/blog/123?id=abc">
        Go to a blog
      </Link>
      <Image src="/placeholder.jpg" alt="forest" width={400} height={400} />
    </>
  );
}
