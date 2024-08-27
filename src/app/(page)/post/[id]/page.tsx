import { getPostById } from "@/app/api/post.api";
import CommentIcon from "@/app/components/icon/Comment";
import LikeIcon from "@/app/components/icon/Like";
import ShareIcon from "@/app/components/icon/Share";
import Author from "@/app/components/posts/Author";
import { Post } from "@/app/type";

interface Props {
  params: {
    id: string;
  };
}

const DetailPost = async ({ params }: Props) => {
  const { id } = params;
  const response = await getPostById(id);
  const post: Post = response.data.data;

  return (
    <>
      <div className="bg-white rounded-[15px] p-[25px]">
        <h1 className="text-[30px] font-semibold py-[15px] mb-[5px]">
          {post?.title}
        </h1>
        <p className="underline">
          Tác giả: Nguyễn Thị Bích Thủy - Ngày 14 Tháng 8 Năm2024
        </p>
        <div className="py-[15px]">
          <p className="pb-[10px]">
            Tác phẩm viết về gia đình tội phạm Mafia của Mario Puzo nó đặc biệt
            ở chỗ, viết về Bố già nhưng lại đậm đặc chất đàn ông mà mọi cánh mày
            râu đều ao ước, và sau tất cả là tình cảm gia đình, thứ thiêng liêng
            cao đẹp luôn được đặt ở trên hết, ngay cả trong một gia đình tội
            phạm.
          </p>

          <p className="pb-[10px]">
            Bố già (tên tiếng anh The Godfather) là một câu chuyện dài, một câu
            chuyện truyền cảm hứng xoay quanh gia đình mafia gốc Ý. Nhân vật
            chính là ông trùm Vito Corleone trong những năm tháng cuối đời và
            những biến cố bất ngờ liên tục xảy đến cho gia đình tưởng như yên ấm
            của ông.
          </p>

          <p className="pb-[10px]">
            Từ một gia tộc quyền lực, chỉ vì từ chối hợp tác bán ma túy cùng thế
            lực xã hội đen mới nổi, The Godfather đã bị ám sát, tuy không chết
            bởi hàng chục viên đạn, nhưng sau vụ đó cả gia tộc của ông đã suy
            yếu đi đáng kể, bởi thiếu đi một người lãnh đạo đúng nghĩa. Ông có
            một người con gái, một con nuôi làm ca sĩ, một con rể vũ phu, và 3
            người con trai làm nên điểm nhấn cho toàn bộ mạch truyện.
          </p>

          <p className="pb-[10px]">
            Tác giả Mario Puzo khiến Bố già trở thành kinh điển, khi viết về
            mafia nhưng không nói nhiều về ma túy, máu và cờ bạc mà lại tập
            trung miêu tả những âm mưu, những biến cố của gia đình, cách mà từng
            thành viên của gia tộc ứng biến với khó khăn. Khí chất của những
            “tiểu ông trùm” qua đó cũng được khắc họa rõ nét. Giữa giông bão có
            kẻ hèn nhát bỏ trốn, có kẻ quay lưng phản bội, có kẻ vũ phu dùng bạo
            lực trấn áp để rồi chết trong tức tưởi. Sau tất cả, những người
            tưởng như yếu đuối ban đầu sau cùng lại làm nên nghiệp lớn, và kẻ
            thông minh nhất lên kế hoạch cho mọi thứ, không ai khác lại chính là
            Bố già!
          </p>
        </div>
        <p className="text-center">--- Hết ---</p>

        <div className="flex gap-[10px] mt-[10px]">
          <LikeIcon />
          <CommentIcon />
          <ShareIcon />
        </div>
      </div>

      <Author />
    </>
  );
};

export default DetailPost;
