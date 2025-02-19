interface NavBarProps {
  brandName: string;
  imageSrc: string;
}

function NavBar({ brandName, imageSrc }: NavBarProps) {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img
          src={imageSrc}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        {brandName}
      </a>
    </nav>
  );
}

export default NavBar;
