import { useState, useEffect, useCallback } from "react";
import loading from "../../src/img/activity/loading.png";
import { useMoralisWeb3Api } from "react-moralis";
import { fixIPFS, fixURL, IPFS_SPLITTER_ONCE } from "../utils/utils";

/**
 * @returns экран NFTs с блоками NFT
 */
export default function Activity() {
  const moralisWeb3Api = useMoralisWeb3Api();
  const [nft, setNft] = useState({
    img: "",
    name: "",
    description: "",
  });
  const [nftLst, setNftLst] = useState([{}]);

  const GetNFTs = useCallback(async () => {
    const NFTs = await moralisWeb3Api.token.searchNFTs({
      q: "art",
      filter: "description",
      limit: 9,
    });

    NFTs.result?.forEach((nftElem) => {
      const url: string = fixURL(nftElem.token_uri)!;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (!data.image.startsWith(IPFS_SPLITTER_ONCE)) {
            const imgUrl = data.image;
            setNft({
              ...nft,
              img: imgUrl,
            });
            console.log(nft);
          } else {
            const imgUrl: string = fixIPFS(data.image)!;
            setNft({
              ...nft,
              img: imgUrl,
            });
          }
          setNft({
            ...nft,
            name: data.name,
            description: data.description,
          });
          setNftLst([...nftLst, nft]);
        })
        .catch(() => {
          setNft({
            ...nft,
            img: "./img/activity/hidden.png",
          });
        })
        .finally(() => {
          setNftLst([...nftLst, nft]);
        });
    });
  }, [moralisWeb3Api.token, nftLst, nft]);

  useEffect(() => {
    GetNFTs();
  }, [GetNFTs]);

  return (
    <section className="activity" id="activity">
      <div className="base__title">
        <span>Trending</span> activity
      </div>
      <div className="activity__grid">
        <ActivityItem />
      </div>
      <a
        href="https://opensea.io/"
        target="_blank"
        className="btn btn_activity"
      >
        GO TO OPENSEA
      </a>
    </section>
  );
}
/**
 * @returns блок для одного NFT
 */
const ActivityItem = () => {
  return (
    <div className="activity__item">
      <img className="activity__img" src={loading} alt="nft" />
      <div className="activity__caption"></div>
      <div className="activity__title"></div>
      <div className="activity__subtitle"></div>
    </div>
  );
};
