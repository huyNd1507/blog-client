import { getPosts } from "@/app/api/post.api";
import Image from "next/image";
import Link from "next/link";
import { Blog2 } from "../../../../../public";
import { Post } from "@/app/type";

const ListPost = async () => {
  const response = await getPosts();
  const posts = response.data;

  return (
    <div>
      {posts?.data?.map((post: Post) => (
        <Link href={`/post/${post?._id}`} key={post?._id}>
          <div className="rounded-[20px] h-[200px] gap-[20px] bg-header2 flex overflow-hidden mb-[30px]">
            <div className="w-[60%]  p-[15px]">
              <h1 className="text-white text-[28px] leading-[40px] mb-[12px] font-medium cursor-pointer">
                {post?.title}
              </h1>
              <p>
                “Khi mở cuốn sách ra, các nhân vật trong đó hẳn sẽ hân hoan chào
                đón… mừng rỡ trong cuộc tương ngộ sau một hành trình dài, rất
                dài của vận mệnh.”
              </p>
            </div>

            <div className="flex-1 w-[40%] rounded-[20px] overflow-hidden">
              <Image
                src={Blog2}
                width={200}
                height={400}
                alt="Picture of the author"
                className="cursor-pointer w-[100%] h-[100%] object-cover"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ListPost;
