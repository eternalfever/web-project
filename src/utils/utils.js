const BASE_URL = "https://ipfs.moralis.io:2053/ipfs/";
export const IPFS_SPLITTER_ONCE = "ipfs://";
export const IPFS_SPLITTER_DOUBLE = "ipfs://ipfs/";


export async function fetchNFT(NFTs) {
    NFTs.result.forEach((nft) => {
        let url = fixURL(nft.token_uri);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (!data.image.startsWith(IPFS_SPLITTER_ONCE)) {
                    let img_link = data.image;
                    blocks[count].src = img_link;
                } else {
                    let img_link = fixIPFS(data.image);
                    blocks[count].src = img_link;
                }
                titles[count].innerHTML = data.name;
                subtitles[count].innerHTML = data.description;
            })
            .catch((error) => {
                console.log(error);
                blocks[count].src = "./img/activity/hidden.png";
            })
            .finally(() => {
                count++;
            });
    });
}




export const fixURL = (url) => {
    if (url.startsWith(IPFS_SPLITTER_DOUBLE) || url.startsWith(IPFS_SPLITTER_ONCE)) {
        return fixIPFS(url);
    } else if (url.slice(-4) === "json") {
        return url;
    } else {
        return url + "?format=json";
    }
}

export const fixIPFS = (url) => {
    if (url.startsWith(IPFS_SPLITTER_DOUBLE)) {
        return BASE_URL + url.split(IPFS_SPLITTER_DOUBLE).slice(-1)[0];
    } else if (url.startsWith(IPFS_SPLITTER_ONCE)) {
        return BASE_URL + url.split(IPFS_SPLITTER_ONCE).slice(-1)[0];
    }
}