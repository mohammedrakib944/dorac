import styles from "./Navigation.module.css";
import Button from "../button/Button";
import Logo from "../../assets/img/logo.png";
import {
  Search,
  Telephone,
  ChatSquare,
  BrightnessHigh,
  List,
} from "react-bootstrap-icons";
import Image from "next/image";

const Navigation = () => {
  return (
    <div className={styles.navWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className={styles.logo}>
              <Image src={Logo} alt="" />
              <h3>LOGO HERE</h3>
            </div>
          </div>
          <div className="col-md-3">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search here..."
                aria-label="Amount (to the nearest dollar)"
              />
              <button className="input-group-text">
                <Search />
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.navRight}>
              <Button text={<Telephone />} />
              <Button text={<ChatSquare />} />
              <Button text="Create" />
              <Button text="Wallet Connect" />
              <Button text={<BrightnessHigh />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
