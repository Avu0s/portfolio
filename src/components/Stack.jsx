import data from "./data";
function Stack() {
  const items = data.tools.map((item) => <img src={item} />);
  return <>{items}</>;
  console.log(items);
}

export default Stack;
