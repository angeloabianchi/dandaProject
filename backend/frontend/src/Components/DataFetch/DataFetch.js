const generateUrl = (type, id) => {
  let url = `${process.env.REACT_APP_BASE_URL}`;
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
  const url = generateUrl(type, id);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow the error for handling at the point of usage
  }
};

export { dataFetch };
