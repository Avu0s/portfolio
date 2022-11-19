import github from "/img/github.svg";

function Footer() {
  return (
    <footer>
      <div className="slack-git">
        <a href="https://github.com/Avu0s">
          <img src={github} alt=" github logo" height="25px" />
        </a>
      </div>
      <hr />
      <div className="company">
        <p>More Content to be added soon..</p>
        <small>Powered by React, Sass & Vite | 2022</small>
      </div>
    </footer>
  );
}
export default Footer;
