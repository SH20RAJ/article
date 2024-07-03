import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useCatFacts = (page, limit) => {
  const { data, error, mutate } = useSWR(
    `https://catfact.ninja/facts?page=${page}&limit=${limit}`,
    fetcher
  );

  return {
    data: data?.data || [],
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
