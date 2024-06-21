import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>Chelsea Chen</span>
        <div className="social">
          <a href="#">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="#">
            <img src="/github-mark-white.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
