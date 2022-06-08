import { useState, useEffect } from "react";
import loading from "../../src/img/activity/loading.png";
import { useMoralisWeb3Api } from "react-moralis";
import { ReactDOM } from "react";
import { fixIPFS, fixURL, IPFS_SPLITTER_ONCE } from "../utils/utils";

export default function Activity() {
   
    //Данные по 1 nft
    const [nfts, setNfts] = useState({
        img: "",
        name: "",
        description:""
    });

    //Список с nft (объектами), с которого через map
    //буду выводить данные в ActivityItem
    const [nftlst, setNftlst] = useState([{}]);

    /*const GetNFTs = async() => {
        const NFTs = await useMoralisWeb3Api().token.searchNFTs({
            q: "art",
            filter: "description",
            limit: 9
        });
        return NFTs;
    }*/

    //Проблема тут

    useEffect(() => {
        GetNFTs();
    }, []);
    
    const GetNFTs = async() => {
        const NFTs = await useMoralisWeb3Api().token.searchNFTs({
            q: "art",
            filter: "description",
            limit: 9
        });
        NFTs.result?.forEach((nft) => {
            let url:string = fixURL(nft.token_uri)!;
            fetch(url)
            .then(response => response.json())
            .then(data => {
                if (!data.image.startsWith(IPFS_SPLITTER_ONCE)) {
                    let img_link = data.image;
                    setNfts({
                        ...nfts,
                        img:img_link
                    });
                    console.log(nfts);
                } else {
                    let img_link:string = fixIPFS(data.image)!;
                    setNfts({
                        ...nfts,
                        img:img_link
                    });
                }
                setNfts({
                    ...nfts,
                    name: data.name,
                    description: data.description
                });
                console.log(nfts);
            })
            .catch((error) => {
            setNfts({
                ...nfts,
                img: "./img/activity/hidden.png"
            });
            })
            .finally(() => {
                setNftlst([...nftlst, nfts]);
                console.log(nftlst);
                console.log(nfts);
            });
        })
    }
    
    
    return (
        <section className="activity" id="activity">
            <div className="base__title"><span>Trending</span> activity</div>
            <div className="activity__grid">
                <ActivityItem/>
            </div>
            <a href="https://opensea.io/" target="_blank" className="btn btn_activity">
                GO TO OPENSEA
            </a>
        </section>
    )
}

const ActivityItem = () => {
    return (
        <div className="activity__item">
            <img className="activity__img" src={loading} alt="nft" />
            <div className="activity__caption"></div>
            <div className="activity__title"></div>
            <div className="activity__subtitle"></div>
        </div>
    )
}



