import Script from "next/script";
import Head from "next/head";
import Link from "next/link";

// internal imports
import styles from "../styles/Home.module.css";
import Layout from "./layout/layout";
import Sidebar from "../components/sidebar/Sidebar";
import { ArrowRight } from "react-bootstrap-icons";
import { sidebarData, topCollections, cardData } from "../assets/Database";
import Card1 from "../components/card1/Card1";
import Card from "../components/card/Card";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.homeWrapper}>
        <div className="container-fluid">
          <Layout>
            <div className={styles.banner}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita quod sint modi distinctio excepturi earum ducimus vitae
                qui? Excepturi, magni. distinctio excepturi earum ducimus vitae
                qui? Excepturi, magni?
              </p>
              <h4>
                Lorem ipsum dolor sit amet excepturi earum except
                <span> NFT</span>
              </h4>
            </div>
            <div className={styles.topCollection}>
              <h2 className={styles.title}>
                Top Collection
                <span className={styles.viewAll}>
                  <Link href="/about">
                    <span>
                      View all <ArrowRight />
                    </span>
                  </Link>
                </span>
              </h2>
              <div className="row">
                {topCollections.map((data) => (
                  <div key={data.id} className="col-md-3">
                    <Card1 data={data} />
                  </div>
                ))}
              </div>
            </div>
            <br />
            <div className={styles.exploreProduct}>
              <h2 className={styles.title}>Explore Product</h2>
              <div className="row justify-content-center">
                {cardData.map((data) => (
                  <div key={data.id} className="col-md-3">
                    <Card data={data} />
                  </div>
                ))}
              </div>
            </div>
          </Layout>
        </div>

        {/* right sidebar */}
        <div className={styles.rightSection}>
          <Sidebar title="Notifications" btnTxt="Newest" data={sidebarData} />
          <br />
          <Sidebar title="Top Artists" btnTxt="Today" data={sidebarData} />
        </div>

        {/* Bootstrap CDN */}
        <Script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossorigin="anonymous"
        ></Script>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossorigin="anonymous"
        ></Script>
      </div>
    </>
  );
}
