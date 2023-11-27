const generateUrl = (type, id) => {
  let url = `${process.env.REACT_APP_BASE_URL}`;
  console.log(JSON.stringify(id));
  switch (type) {
    case "initial":
      url += "dandaprojects/";
      return url;
    case "frames":
      url += "frames/";
      return url;
    case "project":
      url += "dandaprojects/";
      return (url += `${id}`);
    case "photos":
      url += "dandaprojects/";
      return (url += `${id}/projectphotos/`);
    default:
      throw new Error(`Invalid type: ${type}`);
  }
};

const dataFetch = async (type, id) => {
  const fetch = require("node-fetch");

  const url = generateUrl(type, id);

  console.log(`url - ${url}`);

  return await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const results = data;
      return results;
    })
    .catch((err) => console.error("error:" + err));
};

export { dataFetch };
