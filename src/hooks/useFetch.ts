import { useCallback, useEffect, useState } from 'react';

const useFetch = <T = any>(request: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await request();
      setData(response);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [request]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, isError };
};

export default useFetch;
