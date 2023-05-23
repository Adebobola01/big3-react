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
                            <th className={styles.trending_table_header} >#</th>
                            <th className={styles.trending_table_header}>collection</th>
                            <th className={styles.trending_table_header}>volume</th>
                        </tr>
                        <tr>
                            <td className={styles.trending_index} >1</td>
                            <td>
                                <div className={styles.trending_collection} >
                                    <img src={akatsuki} alt="img" />
                                    <div>
                                        <span>Akatsuki</span>
                                        <p>Floor: 0.3 ETH</p>
                                    </div>
                                </div>
                            </td>
                            <td className={styles.trending_index} >7.8 ETH</td>
                        </tr>
                        <tr>
                            <td className={styles.trending_index} >2</td>
                            <td>
                                <div className={styles.trending_collection} >
                                    <img src={akatsuki} alt="img" />
                                    <div>
                                        <span>Akatsuki</span>
                                        <p>Floor: 0.3 ETH</p>
                                    </div>
                                </div>
                            </td>
                            <td className={styles.trending_index} >7.8 ETH</td>
                        </tr>
                        <tr>
                            <td className={styles.trending_index}>3</td>
                            <td>
                                <div className={styles.trending_collection} >
                                    <img src={akatsuki} alt="img" />
                                    <div>
                                        <span>Akatsuki</span>
                                        <p>Floor: 0.3 ETH</p>
                                    </div>
                                </div>
                            </td>
                            <td className={styles.trending_index} >7.8 ETH</td>
                        </tr>
                        <tr>
                            <td className={styles.trending_index}>4</td>
                            <td>
                                <div className={styles.trending_collection} >
                                    <img src={akatsuki} alt="img" />
                                    <div>
                                        <span>Akatsuki</span>
                                        <p>Floor: 0.3 ETH</p>
                                    </div>
                                </div>
                            </td>
                            <td className={styles.trending_index} >7.8 ETH</td>
                        </tr>
                        <tr>
                            <td className={styles.trending_index}>5</td>
                            <td>
                                <div className={styles.trending_collection} >
                                    <img src={akatsuki} alt="img" />
                                    <div>
                                        <span>Akatsuki</span>
                                        <p>Floor: 0.3 ETH</p>
                                    </div>
                                </div>
                            </td>
                            <td className={styles.trending_index} >7.8 ETH</td>
                        </tr>
                    </table>
                    <table className={styles.trending_table} >
                        <tr>
                            <th className={styles.trending_table_header} >#</th>
                            <th className={styles.trending_table_header}>collection</th>
                            <th className={styles.trending_table_header}>volume</th>
                        </tr>
                        <tr>
                            <td className={styles.trending_index} >6</td>
                            <td>
                                <div className={styles.trending_collection} >
                                    <img src={akatsuki} alt="img" />
                                    <div>
                                        <span>Akatsuki</span>
                                        <p>Floor: 0.3 ETH</p>
                                    </div>
                                </div>
                            </td>
                            <td className={styles.trending_index} >7.8 ETH</td>
                        </tr>
                        <tr>
                            <td className={styles.trending_index} >7</td>
                            <td>
                                <div className={styles.trending_collection} >
                                    <img src={akatsuki} alt="img" />
                                    <div>
                                        <span>Akatsuki</span>
                                        <p>Floor: 0.3 ETH</p>
                                    </div>
                                </div>
                            </td>
                            <td className={styles.trending_index} >7.8 ETH</td>
                        </tr>
                        <tr>
                            <td className={styles.trending_index} >8</td>
                            <td>
                                <div className={styles.trending_collection} >
                                    <img src={akatsuki} alt="img" />
                                    <div>
                                        <span>Akatsuki</span>
                                        <p>Floor: 0.3 ETH</p>
                                    </div>
                                </div>
                            </td>
                            <td className={styles.trending_index} >7.8 ETH</td>
                        </tr>
                        <tr>
                            <td className={styles.trending_index} >8</td>
                            <td>
                                <div className={styles.trending_collection} >
                                    <img src={akatsuki} alt="img" />
                                    <div>
                                        <span>Akatsuki</span>
                                        <p>Floor: 0.3 ETH</p>
                                    </div>
                                </div>
                            </td>
                            <td className={styles.trending_index} >7.8 ETH</td>
                        </tr>
                        <tr>
                            <td className={styles.trending_index} >10</td>
                            <td>
                                <div className={styles.trending_collection} >
                                    <img src={akatsuki} alt="img" />
                                    <div>
                                        <span>Akatsuki</span>
                                        <p>Floor: 0.3 ETH</p>
                                    </div>
                                </div>
                            </td>
                            <td className={styles.trending_index} >7.8 ETH</td>
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