import { useState } from "react";
import styles from "./Navigation.module.css";
import Logo from "../../assets/img/logo.png";
import {
  List,
  Search,
  Bell,
  BrightnessHigh,
  Moon,
} from "react-bootstrap-icons";

import Image from "next/image";
import Link from "next/link";
import { NavLink } from "../navlink/Navlink";

const Navigation = () => {
  const [toggleButton, setToggleButton] = useState("");
  const [themeIcon, setThemeIcon] = useState("dark");

  const changeTheme = () => {
    document.body.classList.toggle("lightTheme");
    setThemeIcon(themeIcon === "dark" ? "" : "dark");
  };

  return (
    <div className={styles.navWrapper}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-2">
            <div className={styles.menubar}>
              <button
                className={styles.hideMenu}
                onClick={() => setToggleButton("showNav")}
              >
                <List />
              </button>

              <div className={styles.logoSection}>
                <Link href="/">
                  <div className={styles.logo}>
                    <Image src={Logo} alt="" />
                    <h3>LOGO</h3>
                  </div>
                </Link>
                {/* <Button text={<List />} onClick={() => showNav()} /> */}
              </div>
              {/* 
               <a href="/" className={styles.Logo}>
                <span>LOGO</span>
              </a>  */}
            </div>
          </div>
          <div className="col-md-4">
            <ul className={`${styles.navigation} ${toggleButton}`}>
              {/* Tages go here */}
              <span
                className={styles.hideNavigation}
                onClick={() => setToggleButton("hideNav")}
              ></span>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <NavLink href="/details">Explore Product</NavLink>
              </li>
              <li>
                <NavLink href="/item">Newest Item</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <div className={styles.rightNavWrapper}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Amount (to the nearest dollar)"
                />
                <button className="input-group-text">
                  <Search />
                </button>
              </div>
              <button className={styles.connectBtn}>Connect</button>
              <div className={styles.iconButton}>
                <button className={styles.customBtn} data-count="6">
                  <Bell />
                </button>
                <button
                  className={styles.customBtnBright}
                  onClick={() => changeTheme()}
                >
                  {themeIcon === "dark" ? <BrightnessHigh /> : <Moon />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
