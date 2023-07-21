import { useState, useEffect, useMemo } from "react";

import { transformLabel } from "../utils/transformLabel";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

const sections = [
  "home",
  "visitUs",
  "education",
  "animals",
  "attractions",
  "aboutUs",
  "contact",
];

type Props = {
  children?: React.ReactNode;
};

const Navbar = (props: Props) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [IsMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // const [canLeave, setCanLeave] = useState(false);
  // const location = useLocation();

  const menuClickHandler = () => {
    setMenuOpen(!menuOpen);
  };

  const labels = useMemo(
    () => sections.map((user) => transformLabel(user)),
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 930);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [prevScrollPos, visible]);

  return !IsMobile ? (
    <>
      {/* {location.pathname === "/ticket" && (
        <>
          <div className="leaveConfirmation__container">
            <div className="leaveConfirmation">
              <h4>
                All ticket purchase progress will be lost. Are you sure you want
                to continue?
              </h4>
              <div className="leaveConfimartion__row">
                <Button>Confirm</Button>
                <Button>Back</Button>
              </div>
            </div>
            <div className="screenBlur"></div>
          </div>
        </>
      )} */}
      <header className={visible ? "navbar" : "navbar hide"}>
        <img src="/assets/logo.svg"></img>
        <nav className="sections">
          {sections.map((section, key) =>
            key < 2 ? (
              <NavLink to={`/${section}`} key={key}>
                {" "}
                {transformLabel(labels[key])}
              </NavLink>
            ) : (
              <a className="disabled" key={key}>
                {transformLabel(labels[key])}
              </a>
            )
          )}
        </nav>

        <nav className="options">
          <a className="disabled" href="#">
            PL ENG
          </a>
        </nav>
      </header>
    </>
  ) : (
    <>
      <header className={"navbar_mobile"}>
        <img src="/assets/logo.svg"></img>
        {props.children}
        <button
          className={
            menuOpen ? "navbar__menuButton active" : "navbar__menuButton"
          }
          onClick={menuClickHandler}
        ></button>
        {menuOpen && (
          <nav className="navbar__dropDown">
            {sections.map((section, key) =>
              key < 2 ? (
                <NavLink to={`/${section}`} key={key}>
                  {" "}
                  {transformLabel(labels[key])}
                </NavLink>
              ) : (
                <a className="disabled" key={key}>
                  {transformLabel(labels[key])}
                </a>
              )
            )}
            <hr />

            <a className="disabled" href="#">
              <b>PL/EN</b>
            </a>
          </nav>
        )}
      </header>
    </>
  );
};

export default Navbar;
