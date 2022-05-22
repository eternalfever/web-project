const serverUrl = "https://jrffsta5kgpz.usemoralis.com:2053/server";
const appId = "RHdGOpDM94gMymPyI6IRXBRGp5mybwmQibCkdn5m";

Moralis.start({ serverUrl, appId });
// В документации прописано, что переменные необходимо задавать именно таким образом.
// С SERVER_URL и APP_ID не работает.

const FADE_INTERVAL = 16;
const TIME_NTERVAL = 1000;

const getNFTs = async() => {
    const options = {
        q: "art",
        filter: "description",
        limit: 9
    };
    const NFTs = await Moralis.Web3API.token.searchNFTs(options);
    const blocks = document.querySelectorAll(".activity__img");
    const titles = document.querySelectorAll(".activity__title");
    const subtitles = document.querySelectorAll(".activity__subtitle");
    let count = 0;
    NFTs.result.forEach((nft) => {
        let url = fixURL(nft.token_uri);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (!data.image.startsWith("ipfs://")) {
                    let img_link = data.image;
                    blocks[count].src = img_link;
                } else {
                    let img_link = fixURL_IPFS(data.image);
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

const fixURL = (url) => {
    if (url.startsWith("ipfs://ipfs/") || url.startsWith("ipfs://")) {
        return fixURL_IPFS(url);
    } else if (url.slice(-4) === "json") {
        return url;
    } else {
        return url + "?format=json";
    }
}

const fixURL_IPFS = (url) => {
    if (url.startsWith("ipfs://ipfs/")) {
        return "https://ipfs.moralis.io:2053/ipfs/" + url.split("ipfs://ipfs/").slice(-1)[0];
    } else if (url.startsWith("ipfs://")) {
        return "https://ipfs.moralis.io:2053/ipfs/" + url.split("ipfs://").slice(-1)[0];
    }
}

const fadeOut = (el) => {
    el.style.opacity = 1;
    const interhellopreloader = setInterval(function() {
        el.style.opacity = el.style.opacity - 0.05;
        if (el.style.opacity <= 0.05) {
            clearInterval(interhellopreloader);
            hellopreloader.style.display = "none";
        }
    }, FADE_INTERVAL);
}

const funonload = () => {
    let hellopreloader = document.getElementById("hellopreloader_preload");
    setTimeout(function() {
        fadeOut(hellopreloader);
    }, TIME_NTERVAL);
};

getNFTs();