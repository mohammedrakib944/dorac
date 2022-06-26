import Image from "next/image";
import { Heart } from "react-bootstrap-icons";
// internal imports
import styles from "./Card.module.css";
import image from "../../assets/img/banner.png";
import lock from "../../assets/img/tala.png";

const Card = ({ data }) => {
  const { bannerImg, img_1, img_2, img_3, like_count, title, text, eth } = data;
  return (
    <div className={`card ${styles.myCard}`}>
      <div className={styles.image}>
        <Image src={bannerImg} />
      </div>
      <div className="card-body">
        <div className={styles.customCB}>
          <div className={styles.cardHeader}>
            <div className={styles.headerImages}>
              <Image src={img_1} />
              <Image src={img_2} />
              <Image src={img_3} />
              <span>{title}</span>
            </div>
            <span>
              <Heart /> {like_count}
            </span>
          </div>
          <h5>{title}</h5>
          <p>{text}</p>
        </div>
      </div>
      <div className="card-footer">
        <div className={styles.cardFooter}>
          <h5>{eth} ETH</h5>
          <button className="button">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
