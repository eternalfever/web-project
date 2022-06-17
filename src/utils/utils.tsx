const BASE_URL = "https://ipfs.moralis.io:2053/ipfs/";
export const IPFS_SPLITTER_ONCE = "ipfs://";
export const IPFS_SPLITTER_DOUBLE = "ipfs://ipfs/";
/**
 * Приводит ссылку на объект NFT в необходимый для работы формат
 *
 * @param {string} url первичная ссылка, полученная в результатe обращения к API
 * @returns {string} ссылка в формате json
 */
export const fixURL = (url: string) => {
  if (
    url.startsWith(IPFS_SPLITTER_DOUBLE) ||
    url.startsWith(IPFS_SPLITTER_ONCE)
  ) {
    return fixIPFS(url);
  } else if (url.slice(-4) === "json") {
    return url;
  } else {
    return url + "?format=json";
  }
};
/**
 * Приводит ссылку, начинающуюся с ipfs://, в рабочий формат
 *
 * @param {string} url ссылка, начинающаяся с ipfs://
 * @returns {string} ссылка, начинающаяся с https://ipfs.moralis.io:2053/ipfs/
 */
export const fixIPFS = (url: string) => {
  if (url.startsWith(IPFS_SPLITTER_DOUBLE)) {
    return BASE_URL + url.split(IPFS_SPLITTER_DOUBLE).slice(-1)[0];
  } else if (url.startsWith(IPFS_SPLITTER_ONCE)) {
    return BASE_URL + url.split(IPFS_SPLITTER_ONCE).slice(-1)[0];
  }
};
