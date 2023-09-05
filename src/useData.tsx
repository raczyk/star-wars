import * as React from "react";
import axios from "axios";

type Data = {
  name: string;
  id: string;
  manufacturer: string;
  image: string;
};

export const useData = (initialUrl: string, initialData?: unknown) => {
  const [data, setData] = React.useState<Data[]>();
  const [url, setUrl] = React.useState(initialUrl);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl] as const;
};
