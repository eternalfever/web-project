const BASE_URL = "https://ipfs.moralis.io:2053/ipfs/";
export const IPFS_SPLITTER_ONCE = "ipfs://";
export const IPFS_SPLITTER_DOUBLE = "ipfs://ipfs/";

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