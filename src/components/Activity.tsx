import { useState, useEffect, useCallback } from "react";
import loading from "../../src/img/activity/loading.png";
import { useMoralisWeb3Api } from "react-moralis";
import { ReactDOM } from "react";
import { fixIPFS, fixURL, IPFS_SPLITTER_ONCE } from "../utils/utils";
import Moralis from "moralis";


export default function Activity() {

    const moralisWeb3Api = useMoralisWeb3Api();
   
    //Данные по 1 nft
    const [nfts, setNfts] = useState({
        img: "",
        name: "",
        description:""
    });

    const [error, setError] = useState(null);

    //Список с nft (объектами), с которого через map
    //буду выводить данные в ActivityItem
    const [nftlst, setNftlst] = useState([{}]);

    const GetNFTs = useCallback(async() => {
        const NFTs = await moralisWeb3Api.token.searchNFTs({
            q: "art",
            filter: "description",
            limit: 9
        });
        let count =0;
        console.log(NFTs);
        NFTs.result?.forEach((nft) => {
            let url:string = fixURL(nft.token_uri)!;
            fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
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
                setNftlst([...nftlst, nfts]);

            })
            .catch((er) => {
            setNfts({
                ...nfts,
                img: "./img/activity/hidden.png"
            });
            setError(er);
            })
            .finally(() => {
                setNftlst([...nftlst, nfts]);
                count++;
            });
        })
    },[moralisWeb3Api.token, nftlst,nfts])

    useEffect(() => {
        GetNFTs();
    }, [GetNFTs]);
    
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



