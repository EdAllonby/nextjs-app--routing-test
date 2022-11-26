import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <Link href="/blog/123?id=abc">Go to a blog</Link>
    </>
  );
}
