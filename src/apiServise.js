const APIServise = {
  defaultUrl: "https://api.spacexdata.com/v3/launches",
  getData: async (url = APIServise.defaultUrl) => {
    const fetchData = await fetch(url);
    const data = await fetchData.json();
    return data;
  },
};
export default APIServise;
