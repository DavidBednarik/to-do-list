import { useState } from "react";

const useLoadData = <T>() => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(false);

  const loadData = async (dataFetcher: () => Promise<T>) => {
    try {
      setError(false);
      setLoading(true);
      const fetchedData = await dataFetcher();
      setData(fetchedData);
      return fetchedData;
    } catch (err) {
      console.log("❌ Error: ", err);
      setError(err);

      return undefined;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, loadData };
};

export { useLoadData };
