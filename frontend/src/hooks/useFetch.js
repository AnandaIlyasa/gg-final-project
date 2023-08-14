import { useEffect, useState } from "react";
// import useUpdateEffect from "./useUpdateEffect";

const useFetch = (initialUrl, opt) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [url] = useState(initialUrl || "");
  const [options] = useState(opt);

  const callback = () => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
        setLoading(false);
        setError(null);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchData();
  };

  useEffect(callback, [options, url]);

  return [data, setData, error, loading];
};

export default useFetch;
