import { data } from "../../../../mocks/thread";
import { CardContent } from "./CardContent";

function CardMap() {
  return (
    <div>
      {data.map((content, index) => (
        <CardContent
          key={index}
          id={content.id}
          avatar={content.avatar}
          profileName={content.profileName}
          userName={content.userName}
          content={content.content}
          image_content={content.image_content}
          datePost={content.datePost}
          likes={content.likes}
          replies={content.replies}
        />
      ))}
    </div>
  );
}

export default CardMap;
