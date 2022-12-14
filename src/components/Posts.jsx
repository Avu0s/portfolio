import data from "./data";
import Post from "./Post";

function Posts() {
  const items = data.map((item) => <Post key={item.id} {...item} />);
  return <>{items}</>;
}

export default Posts;
