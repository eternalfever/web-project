import React from "react";
import nyan from "../../src/img/intro/nyanCat.gif";

export default function Intro() {
    return (
        <section className="intro" id="intro">
            <div className="intro__content">
                <div className="intro__title">
                    NFT ART &amp; <br /> COLLECTIBLES FOR THE <br /> <span>METAVERSE</span>
                </div>

                <a href="https://opensea.io/" target="_blank" className="btn btn_intro">
                    GO TO OPENSEA
                </a>

            </div>
            <div className="intro__cat ">
                <img src={nyan} alt="cat" />
                <div className="intro__subtitle">nft nyancat sold for
                    <span>$&nbsp;580&nbsp;000</span>
                </div>
            </div>
        </section>
    )
}