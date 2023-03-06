import React from "react";
import "./Footer.scss";

const Footer = props => {
    return (
        <footer class="footer">
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
                                    src="./static/images/Twitter-logo.svg"
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
                                    src="./static/images/icons8-linkedin-480.svg"
                                    alt="linkedIn"
                                    class="social-img"
                                />
                            </a>
                            <a
                                href="https://github.com/Adebobola01/TheBig3-minting-website"
                                target="_blank"
                                class="social__link"
                            >
                                <img
                                    src="./static/images/github2.svg"
                                    alt="github"
                                    class="social-img"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
    )
}

export default Footer;