import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Muscle Gold</h1>
        </Link>
        {/*<div className="pages">
          <Link to="/adding-new">
            <span>Add New</span>
          </Link>
          <Link to="/">
            <span>List Workouts</span>
          </Link>
  </div>*/}
      </div>
    </header>
  );
};

export default Navbar;
