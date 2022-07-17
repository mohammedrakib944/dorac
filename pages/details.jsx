import Layout from "../components/layout/layout";
import styles from "../styles/Details.module.css";
import image from "../assets/img/tala2.png";
import profile from "../assets/img/crypto.png";
import Card from "../components/card/Card";
import { cardData } from "../assets/Database";

// external imports
import { useState } from "react";
import { ChevronRight, Heart, ThreeDots } from "react-bootstrap-icons";
import Image from "next/image";
import Button from "../components/button/Button";

const Details = () => {
  const [showItem, setShowItem] = useState("history");
  return (
    <Layout>
      <div className={styles.detailsHeading}>
        <h2>Details</h2>
        <p>
          <span>Home</span> <ChevronRight /> Product Details
        </p>
      </div>

      <div className={styles.detailsSectoin}>
        <div className="row">
          <div className="col-md-6">
            <div className={styles.detailsImg}>
              <Image src={image} alt="image" />
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.rightDetails}>
              <div className={styles.dtHeading}>
                <h3>Lorem, ipsum dolor.</h3>
                <div className={styles.dtIcons}>
                  <Button text={<Heart />} />
                  <Button text={<ThreeDots />} />
                </div>
              </div>

              <p>lorem Ipsum</p>
              <h4>#22Lorem, Ipsum dolor</h4>

              <div className={styles.dtNames}>
                <div className={styles.df}>
                  <div className={styles.imageContainer}>
                    <Image src={profile} alt="image" />
                  </div>
                  <div>
                    <p>Category 10% roylities</p>
                    <h5>Brodband</h5>
                  </div>
                </div>
                <div className={styles.df}>
                  <div className={styles.imageContainer}>
                    <Image src={profile} alt="image" />
                  </div>
                  <div>
                    <p>Owner</p>
                    <h5>Brodband</h5>
                  </div>
                </div>
              </div>
              <span className={styles.colorF}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
                blanditiis eveniet optio labore quia. Voluptate mollitia in
                nulla consequuntur dolores impedit.
              </span>
              <br />

              <h4 className={styles.priceSection}>
                <p>Price</p>
                <span>
                  0.11wETH <br /> <p>=$12.234</p>
                </span>
              </h4>

              <button className={styles.buyNowBtn}>Buy Now</button>
            </div>

            <div className={styles.history}>
              <div className={styles.buttons}>
                <button
                  onClick={() => setShowItem("history")}
                  className={showItem === "history" ? "activeitems" : ""}
                >
                  History
                </button>
                <button
                  onClick={() => setShowItem("info")}
                  className={showItem === "info" ? "activeitems" : ""}
                >
                  Info
                </button>
                <button
                  onClick={() => setShowItem("prov")}
                  className={showItem === "prov" ? "activeitems" : ""}
                >
                  Provenance
                </button>
              </div>

              <div className={styles.lists}>
                {showItem === "history" && (
                  <div className={styles.list}>
                    <div className={styles.listLeft}>
                      <div className={styles.imageContainer}>
                        <Image src={profile} alt="image" />
                      </div>
                      <div className={styles.listsItem}>
                        <h5>Lorem Ipsum</h5>
                        <p>8 hours ago</p>
                      </div>
                    </div>
                    <div className={styles.listsItem}>
                      <h5>4.82 ETH</h5>
                      <p>= $12.342</p>
                    </div>
                  </div>
                )}

                {showItem === "info" && (
                  <div className={styles.list}>
                    <p>
                      Info Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit
                      amet consectetur adipisicing elit. Rem voluptatum incidunt
                      voluptatibus minus in consectetur illo quos aliquam
                      voluptates animi!
                    </p>
                  </div>
                )}
                {showItem === "prov" && (
                  <div className={styles.list}>
                    <p>
                      Provenance Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit. Minima, animi.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <h5 className={styles.title}>Related Items</h5>
      <div className="row">
        {cardData.map((data, index) =>
          index < 4 ? (
            <div key={data.id} className="col-md-3 col-sm-6">
              <Card data={data} />
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <br />
      <br />
      <div className={styles.wf}>
        <button className={styles.loadMoreBtn}>Load More</button>
      </div>
    </Layout>
  );
};

export default Details;
