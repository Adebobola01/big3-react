import React from "react";
import uzuImage from "../../assets/images/uzumakiFamily.png";
import itachiImg from "../../assets/images/itachi.png";
import "./Explore.scss"
const Explore = props => {

    return (
        <div className="explore__container">
        <div className="explore__sort">
            <p>aye sort ni mo fisi ile nibi bayi</p>
            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>
            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>
            <p>aye sort ni mo fisi ile nibi bayi</p>
        </div>
        <div className="explore__main">
            {/* <Link className="scroll-down" to="#footer" >
                <span>&gt;&gt;</span>
            </Link> */}
            <a
                className="explore__nft--container"
                    href="explore/details/0x804dB972ab4df78782deD04bE123430129bfaAF0/25"
            >
                <img
                    src={uzuImage}
                    alt="nft"
                    className="explore__nft--image"
                />
                <div className="explore__nft--details">
                    <p className="explore__nft--name">Azuki #25</p>
                    <div className="explore__nft--owner">
                        <img
                            src={itachiImg}
                            alt="nft__owner"
                            className="explore__nft--owner-image"
                        />
                        <p className="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div className="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                className="explore__nft--container"
                href="/explore/details/0x804dB972ab4df78782deD04bE123430129bfaAF0/25"
            >
                <img
                    src={uzuImage}
                    alt="nft"
                    className="explore__nft--image"
                />
                <div className="explore__nft--details">
                    <p className="explore__nft--name">Azuki #25</p>
                    <div className="explore__nft--owner">
                        <img
                            src={itachiImg}
                            alt="nft__owner"
                            className="explore__nft--owner-image"
                        />
                        <p className="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div className="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                className="explore__nft--container"
                href="/explore/details/0x804dB972ab4df78782deD04bE123430129bfaAF0/25"
            >
                <img
                    src={uzuImage}
                    alt="nft"
                    className="explore__nft--image"
                />
                <div className="explore__nft--details">
                    <p className="explore__nft--name">Azuki #25</p>
                    <div className="explore__nft--owner">
                        <img
                            src={itachiImg}
                            alt="nft__owner"
                            className="explore__nft--owner-image"
                        />
                        <p className="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div className="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                className="explore__nft--container"
                href="/explore/details/0x804dB972ab4df78782deD04bE123430129bfaAF0/25"
            >
                <img
                    src={uzuImage}
                    alt="nft"
                    className="explore__nft--image"
                />
                <div className="explore__nft--details">
                    <p className="explore__nft--name">Azuki #25</p>
                    <div className="explore__nft--owner">
                        <img
                            src={itachiImg}
                            alt="nft__owner"
                            className="explore__nft--owner-image"
                        />
                        <p className="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div className="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                className="explore__nft--container"
                href="/explore/details/0x804dB972ab4df78782deD04bE123430129bfaAF0/25"
            >
                <img
                    src={uzuImage}
                    alt="nft"
                    className="explore__nft--image"
                />
                <div className="explore__nft--details">
                    <p className="explore__nft--name">Azuki #25</p>
                    <div className="explore__nft--owner">
                        <img
                            src={itachiImg}
                            alt="nft__owner"
                            className="explore__nft--owner-image"
                        />
                        <p className="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div className="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                className="explore__nft--container"
                href="/explore/details/0x804dB972ab4df78782deD04bE123430129bfaAF0/25"
            >
                <img
                    src={uzuImage}
                    alt="nft"
                    className="explore__nft--image"
                />
                <div className="explore__nft--details">
                    <p className="explore__nft--name">Azuki #25</p>
                    <div className="explore__nft--owner">
                        <img
                            src={itachiImg}
                            alt="nft__owner"
                            className="explore__nft--owner-image"
                        />
                        <p className="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div className="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                className="explore__nft--container"
                href="/explore/details/0x804dB972ab4df78782deD04bE123430129bfaAF0/25"
            >
                <img
                    src={uzuImage}
                    alt="nft"
                    className="explore__nft--image"
                />
                <div className="explore__nft--details">
                    <p className="explore__nft--name">Azuki #25</p>
                    <div className="explore__nft--owner">
                        <img
                            src={itachiImg}
                            alt="nft__owner"
                            className="explore__nft--owner-image"
                        />
                        <p className="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div className="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                className="explore__nft--container"
                href="/explore/details/0x804dB972ab4df78782deD04bE123430129bfaAF0/25"
            >
                <img
                    src={uzuImage}
                    alt="nft"
                    className="explore__nft--image"
                />
                <div className="explore__nft--details">
                    <p className="explore__nft--name">Azuki #25</p>
                    <div className="explore__nft--owner">
                        <img
                            src={itachiImg}
                            alt="nft__owner"
                            className="explore__nft--owner-image"
                        />
                        <p className="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div className="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                className="explore__nft--container"
                href="/explore/details/0x804dB972ab4df78782deD04bE123430129bfaAF0/25"
            >
                <img
                    src={uzuImage}
                    alt="nft"
                    className="explore__nft--image"
                />
                <div className="explore__nft--details">
                    <p className="explore__nft--name">Azuki #25</p>
                    <div className="explore__nft--owner">
                        <img
                            src={itachiImg}
                            alt="nft__owner"
                            className="explore__nft--owner-image"
                        />
                        <p className="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div className="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                className="explore__nft--container"
                href="/explore/details/0x804dB972ab4df78782deD04bE123430129bfaAF0/25"
            >
                <img
                    src={uzuImage}
                    alt="nft"
                    className="explore__nft--image"
                />
                <div className="explore__nft--details">
                    <p className="explore__nft--name">Azuki #25</p>
                    <div className="explore__nft--owner">
                        <img
                            src={itachiImg}
                            alt="nft__owner"
                            className="explore__nft--owner-image"
                        />
                        <p className="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div className="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                className="explore__nft--container"
                href="/explore/details/0x804dB972ab4df78782deD04bE123430129bfaAF0/25"
            >
                <img
                    src={uzuImage}
                    alt="nft"
                    className="explore__nft--image"
                />
                <div className="explore__nft--details">
                    <p className="explore__nft--name">Azuki #25</p>
                    <div className="explore__nft--owner">
                        <img
                            src={itachiImg}
                            alt="nft__owner"
                            className="explore__nft--owner-image"
                        />
                        <p className="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div className="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                className="explore__nft--container"
                href="/explore/details/0x804dB972ab4df78782deD04bE123430129bfaAF0/25"
            >
                <img
                    src={uzuImage}
                    alt="nft"
                    className="explore__nft--image"
                />
                <div className="explore__nft--details">
                    <p className="explore__nft--name">Azuki #25</p>
                    <div className="explore__nft--owner">
                        <img
                            src={itachiImg}
                            alt="nft__owner"
                            className="explore__nft--owner-image"
                        />
                        <p className="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div className="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                className="explore__nft--container"
                href="/explore/details/0x804dB972ab4df78782deD04bE123430129bfaAF0/25"
            >
                <img
                    src={uzuImage}
                    alt="nft"
                    className="explore__nft--image"
                />
                <div className="explore__nft--details">
                    <p className="explore__nft--name">Azuki #25</p>
                    <div className="explore__nft--owner">
                        <img
                            src={itachiImg}
                            alt="nft__owner"
                            className="explore__nft--owner-image"
                        />
                        <p className="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div className="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
        </div>
        </div>
    )
}

export default Explore;