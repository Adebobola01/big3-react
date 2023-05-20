import React from "react";
import styles from "./Trending.module.scss";
import akatsuki from "../../assets/images/akatsuki.png"
import madara from "../../assets/images/madara.png";

import { NavLink } from "react-router-dom";

const Trending = (props: any) => {

    return (
        <>
            <section className={styles.trending} >
                <header className={styles.trending_header}>
                    <button className={`${styles.trending_btn} ${styles.trending_active}`}>
                        Trending
                    </button>
                    <button className={styles.trending_btn}>
                        Top
                    </button>
                </header>
                <div className={styles.trending_body}>
                    <table className={styles.trending_table} >
                        <tr>
                            <th className={styles.trending_index} >#</th>
                            <th className={styles.trending_collections}>collection</th>
                            <th className={styles.trending_volume}>volume</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <div className={styles.trending_collection} >
                                    <img src={akatsuki} alt="img" />
                                    <div>
                                        <span>Akatsuki</span>
                                        <p>Floor: 0.3 ETH</p>
                                    </div>
                                </div>
                            </td>
                            <td>7.8 ETH</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                <div className={styles.trending_collection} >
                                    <img src={akatsuki} alt="img" />
                                    <div>
                                        <span>Akatsuki</span>
                                        <p>Floor: 0.3 ETH</p>
                                    </div>
                                </div>
                            </td>
                            <td>7.8 ETH</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>
                                <div className={styles.trending_collection} >
                                    <img src={akatsuki} alt="img" />
                                    <div>
                                        <span>Akatsuki</span>
                                        <p>Floor: 0.3 ETH</p>
                                    </div>
                                </div>
                            </td>
                            <td>7.8 ETH</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>
                                <div className={styles.trending_collection} >
                                    <img src={akatsuki} alt="img" />
                                    <div>
                                        <span>Akatsuki</span>
                                        <p>Floor: 0.3 ETH</p>
                                    </div>
                                </div>
                            </td>
                            <td>7.8 ETH</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>
                                <div className={styles.trending_collection} >
                                    <img src={akatsuki} alt="img" />
                                    <div>
                                        <span>Akatsuki</span>
                                        <p>Floor: 0.3 ETH</p>
                                    </div>
                                </div>
                            </td>
                            <td>7.8 ETH</td>
                        </tr>
                    </table>
                    <table className={styles.trending_table} >
                        <tr>
                            <th className={styles.trending_index} >#</th>
                            <th className={styles.trending_collections}>collection</th>
                            <th className={styles.trending_volume}>volume</th>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>
                                <div className={styles.trending_collection} >
                                    <img src={akatsuki} alt="img" />
                                    <div>
                                        <span>Akatsuki</span>
                                        <p>Floor: 0.3 ETH</p>
                                    </div>
                                </div>
                            </td>
                            <td>7.8 ETH</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>
                                <div className={styles.trending_collection} >
                                    <img src={akatsuki} alt="img" />
                                    <div>
                                        <span>Akatsuki</span>
                                        <p>Floor: 0.3 ETH</p>
                                    </div>
                                </div>
                            </td>
                            <td>7.8 ETH</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>
                                <div className={styles.trending_collection} >
                                    <img src={akatsuki} alt="img" />
                                    <div>
                                        <span>Akatsuki</span>
                                        <p>Floor: 0.3 ETH</p>
                                    </div>
                                </div>
                            </td>
                            <td>7.8 ETH</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>
                                <div className={styles.trending_collection} >
                                    <img src={akatsuki} alt="img" />
                                    <div>
                                        <span>Akatsuki</span>
                                        <p>Floor: 0.3 ETH</p>
                                    </div>
                                </div>
                            </td>
                            <td>7.8 ETH</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>
                                <div className={styles.trending_collection} >
                                    <img src={akatsuki} alt="img" />
                                    <div>
                                        <span>Akatsuki</span>
                                        <p>Floor: 0.3 ETH</p>
                                    </div>
                                </div>
                            </td>
                            <td>7.8 ETH</td>
                        </tr>
                    </table>
                </div>
            </section>
            <section>
                <p className={styles.collection_title}>Trending Collections</p>
                <div className={styles.collections}>
                    <div className={styles.collection} >
                        <img src={madara} alt="img" />
                        <div className={styles.collection_details}>
                            <p className={styles.collection_name}>madara</p>
                            <div>
                                <span>
                                    Floor
                                    <p>0.06 ETH</p>
                                </span>
                                <span>
                                    24h volume
                                    <p>30 ETH</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.collection} >
                        <img src={madara} alt="img" />
                        <div className={styles.collection_details}>
                            <p className={styles.collection_name}>madara</p>
                            <div>
                                <span>
                                    Floor
                                    <p>0.06 ETH</p>
                                </span>
                                <span>
                                    24h volume
                                    <p>30 ETH</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.collection} >
                        <img src={madara} alt="img" />
                        <div className={styles.collection_details}>
                            <p className={styles.collection_name}>madara</p>
                            <div>
                                <span>
                                    Floor
                                    <p>0.06 ETH</p>
                                </span>
                                <span>
                                    24h volume
                                    <p>30 ETH</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.collection} >
                        <img src={madara} alt="img" />
                        <div className={styles.collection_details}>
                            <p className={styles.collection_name}>madara</p>
                            <div>
                                <span>
                                    Floor
                                    <p>0.06 ETH</p>
                                </span>
                                <span>
                                    24h volume
                                    <p>30 ETH</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.collection} >
                        <img src={madara} alt="img" />
                        <div className={styles.collection_details}>
                            <p className={styles.collection_name}>madara</p>
                            <div>
                                <span>
                                    Floor
                                    <p>0.06 ETH</p>
                                </span>
                                <span>
                                    24h volume
                                    <p>30 ETH</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.collection} >
                        <img src={madara} alt="img" />
                        <div className={styles.collection_details}>
                            <p className={styles.collection_name}>madara</p>
                            <div>
                                <span>
                                    Floor
                                    <p>0.06 ETH</p>
                                </span>
                                <span>
                                    24h volume
                                    <p>30 ETH</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.collection} >
                        <img src={madara} alt="img" />
                        <div className={styles.collection_details}>
                            <p className={styles.collection_name}>madara</p>
                            <div>
                                <span>
                                    Floor
                                    <p>0.06 ETH</p>
                                </span>
                                <span>
                                    24h volume
                                    <p>30 ETH</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.collection} >
                        <img src={madara} alt="img" />
                        <div className={styles.collection_details}>
                            <p className={styles.collection_name}>madara</p>
                            <div>
                                <span>
                                    Floor
                                    <p>0.06 ETH</p>
                                </span>
                                <span>
                                    24h volume
                                    <p>30 ETH</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                

            </section>
        </>
    )
}

export default Trending;