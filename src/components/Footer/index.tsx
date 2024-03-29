import React from "react";
import styles from "./footer.module.scss";
import twitterLogo from "../../assets/images/Twitter-logo.svg";
import linkedInLogo from "../../assets/images/icons8-linkedin-480.svg";
import githubLogo from "../../assets/images/iconmonstr-github-5.svg";

const Footer = (props: any) => {
    return (
        // <footer className="footer" id="footer" >
        //         <div className="footer__container">
        //             <nav className="footer__nav">
        //                 <a href="#" className="footer-nav__link">MarketPlace</a>
        //                 <a
        //                     href="https://github.com/Adebobola01/TheBig3-minting-website"
        //                     className="footer-nav__link"
        //                     >Docs</a
        //                 >
        //                 <a href="#" className="footer-nav__link">How to Use</a>
        //                 <a
        //                     href="https://www.linkedin.com/in/adebobola-oyedunmade-34a464218/"
        //                     className="footer-nav__link"
        //                     >Developer</a
        //                 >
        //             </nav>
        //             <div className="footer__soc-cop">
        //                 <p className="copyright">
        //                     © 2022 by <a href="#" className="dev">Adebobola</a> . All
        //                     rights reserved.
        //                 </p>
        //                 <div className="footer__socials">
        //                     <a
        //                         href="https://twitter.com/AdebobolaMuhyd1"
        //                         target="_blank"
        //                         className="social__link"
        //                     >
        //                         <img
        //                             src={twitterLogo}
        //                             alt="twitter"
        //                             className="social-img"
        //                         />
        //                     </a>
        //                     <a
        //                         href="https://www.linkedin.com/in/adebobola-oyedunmade-34a464218/"
        //                         target="_blank"
        //                         className="social__link"
        //                     >
        //                         <img
        //                             src={linkedInLogo}
        //                             alt="linkedIn"
        //                             className="social-img"
        //                         />
        //                     </a>
        //                     <a
        //                         href="https://github.com/Adebobola01/TheBig3-minting-website"
        //                         target="_blank"
        //                         className="social__link"
        //                     >
        //                         {/* <img
        //                             src={githubLogo}
        //                             alt="github"
        //                             className="social-img"
        //                         /> */}
        //                     <svg className="social-img"
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         width="24"
        //                         height="24"
        //                         viewBox="0 0 24 24">
        //                         <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" fill="#1d9bf0" />
        //                     </svg>
        //                     </a>
        //                 </div>
        //             </div>
        //         </div>
        //     </footer>
        <footer className={styles.footer} >
            <div className={styles.footer_socials}>
                <a href="https://www.linkedin.com/in/adebobola-oyedunmade-34a464218/"><img src={linkedInLogo} /></a>
                <a href="https://twitter.com/AdebobolaMuhyd1"><img src={twitterLogo} /></a>
                <a href="https://github.com/Adebobola01/TheBig3-minting-website"><img src={githubLogo}/></a>
            </div>
            <div className={styles.footer_body}>
                <h2>Big3</h2>
                <p>Explore, Collect, Sell, buy and sell anime based NFTs.</p>
                <div className={styles.footer_links}>
                    <div className={styles.footer_link} >
                       <h2>MarketPlace</h2>
                        <a href="/explore">All NFTs</a>
                        <a href="/explore">Art</a>
                        <a href="/explore">Gaming</a>
                        <a href="/explore">Membership</a>
                        <a href="/explore">Photography</a>
                    </div>
                    <div className={styles.footer_link} >
                        <h2>My Account</h2>
                        <a href="/explore">Profile</a>
                        <a href="/explore">My Collections</a>
                        <a href="/explore">Watchlist</a>
                        <a href="/explore">Favourites</a>
                        <a href="/explore">Create</a>
                        <a href="/explore">Settings</a>
                    </div>
                    <div className={styles.footer_link} >
                        <h2>Resources</h2>
                        <a href="/explore">Learn</a>
                        <a href="/explore">Help Center</a>
                        <a href="/explore">Patners</a>
                        <a href="/explore">Developer Platform</a>
                    </div>
                    <div className={styles.footer_link} >
                        <h2>Company</h2>
                        <a href="/explore">About</a>
                        <a href="/explore">Ventures</a>
                        <a href="/explore">Grants</a>
                    </div>
                </div>
                <span className={styles.footer_copyright}>© 2022 <a href="https://www.linkedin.com/in/adebobola-oyedunmade-34a464218/" >Adebobola Oyedunmade</a></span>
            </div>

        </footer>
    )
}

export default Footer;