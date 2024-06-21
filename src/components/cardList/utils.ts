import axios from "axios";
import defaultData from "@public/data.json";
import "dotenv/config";

export const filterServerData = async (
  searchQuery: string,
  region: string
): Promise<any> => {
  let url = `${process.env.NEXT_PUBLIC_BASE_URL}/all`;

  if (region) {
    url = `${process.env.NEXT_PUBLIC_BASE_URL}/region/${
      region[0].toUpperCase() + region.slice(1).toLowerCase()
    }`;
  } else if (searchQuery) {
    url = `${
      process.env.NEXT_PUBLIC_BASE_URL
    }/name/${searchQuery.toLowerCase()}`;
  }

  const cancelTokenSource = axios.CancelToken.source();

  try {
    const { data } = await axios.get(url, {
      cancelToken: cancelTokenSource.token,
    });

    return data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Request canceled", error.message);
    } else {
      throw error;
    }
    return [];
  }
};

export const filterDefaultData = (searchQuery: string, region: string) => {
  console.log("asdasdasdasdasdasd");

  return defaultData.filter((item: any) => {
    const searchMatch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const regionMatch = item.region === region;

    return (!searchQuery || searchMatch) && (!region ?? regionMatch);
  });
};
