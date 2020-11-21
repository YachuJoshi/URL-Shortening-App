import { ShortURL } from "../data";

async function getShortURL(url) {
  const res = await ShortURL({
    method: "GET",
    url: `/shorten?url=${url}`,
  });

  return res.data;
}

export { getShortURL };
