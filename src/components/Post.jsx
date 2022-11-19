function Post(props) {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <div className="post">
        <img src={props.img} alt={props.alt} />
        <h2>{props.title}</h2>
        <p>{props.brief}</p>
        <div className="tools">
          {props.tools.map((tool) => (
            <small>{tool}</small>
          ))}
        </div>
      </div>
    </a>
  );
}
export default Post;
