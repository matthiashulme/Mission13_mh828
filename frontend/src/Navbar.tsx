import { Link, useMatch, useResolvedPath } from 'react-router-dom';

// Navbar Function
function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <ul>
        <CustomLink to="/Podcasts">Podcasts</CustomLink>
        <CustomLink to="/Movies">Movies</CustomLink>
      </ul>
    </nav>
  );
}

// Function for CustomLinks to be included in the navbar
function CustomLink({ to, children, ...props }: any) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
