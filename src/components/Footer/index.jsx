import React from "react";
import "./Footer.scss";
import twitterLogo from "../../assets/images/Twitter-logo.svg";
import linkedInLogo from "../../assets/images/icons8-linkedin-480.svg";
import githubLogo from "../../assets/images/iconmonstr-github-5.svg";

const Footer = props => {
    return (
        <footer class="footer" id="footer" >
                <div class="footer__container">
                    <nav class="footer__nav">
                        <a href="#" class="footer-nav__link">MarketPlace</a>
                        <a
                            href="https://github.com/Adebobola01/TheBig3-minting-website"
                            class="footer-nav__link"
                            >Docs</a
                        >
                        <a href="#" class="footer-nav__link">How to Use</a>
                        <a
                            href="https://www.linkedin.com/in/adebobola-oyedunmade-34a464218/"
                            class="footer-nav__link"
                            >Developer</a
                        >
                    </nav>
                    <div class="footer__soc-cop">
                        <p class="copyright">
                            © 2022 by <a href="#" class="dev">Adebobola</a> . All
                            rights reserved.
                        </p>
                        <div class="footer__socials">
                            <a
                                href="https://twitter.com/AdebobolaMuhyd1"
                                target="_blank"
                                class="social__link"
                            >
                                <img
                                    src={twitterLogo}
                                    alt="twitter"
                                    class="social-img"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/adebobola-oyedunmade-34a464218/"
                                target="_blank"
                                class="social__link"
                            >
                                <img
                                    src={linkedInLogo}
                                    alt="linkedIn"
                                    class="social-img"
                                />
                            </a>
                            <a
                                href="https://github.com/Adebobola01/TheBig3-minting-website"
                                target="_blank"
                                class="social__link"
                            >
                                {/* <img
                                    src={githubLogo}
                                    alt="github"
                                    class="social-img"
                                /> */}
                            <svg alt="github" className="social-img"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24">
                                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" fill="#1d9bf0" />
                            </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
    )
}

export default Footer;