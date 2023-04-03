import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
        <div className='navigation'>
            <Link to="/">
                <h1 className='header'>RecipeDash🍱</h1>
            </Link>
            <Link to="/">
                <h2 className='nav_element'>🏠 Dashboard</h2>
            </Link>
            <h2 className='nav_element'>🔍 Search</h2>
            <h2 className='nav_element'>❗ About</h2>
        </div>
      <Outlet />
    </div>
  );
};

export default NavBar;