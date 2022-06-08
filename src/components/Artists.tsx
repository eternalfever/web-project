export default function Artists() {
    return (
        <section className="artists" id="artists">
            <div className="base__title">Top <span>NFT</span> Marketplaces</div>
            <div className="artists__content">
                <div className="artists__list">
                    <div className="artists__item">
                        <div className="artists__text artists__text_opensea">
                            OpenSea
                        </div>
                    </div>
                    <div className="artists__item">
                        <div className="artists__text artists__text_rarible">
                            Rarible
                        </div>
                    </div>
                    <div className="artists__item">
                        <div className="artists__text artists__text_superrare">
                            SuperRare
                        </div>
                    </div>
                </div>
                {/* <button className="artists__carousel-btn artists__carousel-btn_prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="41" viewBox="0 0 37 41" fill="none">
                        <path d="M2.4269e-07 20.3515L36.75 -6.82263e-05L17 20.3515L36.75 40.7031L2.4269e-07 20.3515Z" fill="#8567FC"/>
                    </svg>
                </button>
                <button className="artists__carousel-btn artists__carousel-btn_next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="41" viewBox="0 0 37 41" fill="none">
                        <path d="M37 20.5L0.249998 40.8516L20 20.5L0.25 0.148436L37 20.5Z" fill="#8567FC"/>
                    </svg>
                </button> */}
            </div>
        </section>
    )
}