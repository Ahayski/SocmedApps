// import { data } from "../../../mocks/thread";
import { useThreads } from "../hooks/useThreads";
import CardContent from "./CardContent";

function CardMap() {
  const { thread } = useThreads();
  return (
    <>
      {thread?.map((item) => {
        return (
          <CardContent
            key={item.id}
            id={item.id}
            user={item.user}
            content={item.content}
            created_at={item.created_at}
            image_thread={item.image_thread}
            count_like={item.count_like}
            count_replies={item.count_replies}
            is_liked={item.is_liked}
          />
        );
      })}
    </>
  );
}

export default CardMap;
