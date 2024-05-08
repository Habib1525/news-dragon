import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div>
      <button className="btn btn-secondary">Breaking news</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components.....
        </Link>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components.....
        </Link>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components.....
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
