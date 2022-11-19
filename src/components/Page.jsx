import Body from "./Body";
import Profile from "./Profile";
import Footer from "./Footer";

function Page() {
  return (
    <div id="dark">
      <div className="container">
        <Profile />
        <Body />
        <Footer />
      </div>
    </div>
  );
}
export default Page;
