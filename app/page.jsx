import { getData } from "@/utils/fetchData";
import Link from "next/link";

const Home = async () => {

  const posts = await getData();
  // console.log(posts);

  return (
    <main className="flex justify-center items-center min-h-screen bg-black px-12 pt-10">
      <div className="grid grid-cols-3 gap-10">
        {posts.map((post) => (
          <div key={post.id} className="flex flex-col justify-between border border-white rounded-lg p-8 w-[500px] h-[700px]">
            <h1 className="text-white text-4xl">{post.title}</h1>
            <p className="text-white mt-20 mb-10">{post.body}</p>
            <Link href={`${post.id}`} className="text-blue-300">Read More...</Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home

