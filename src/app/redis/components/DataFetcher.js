// // components/DataFetcher.js
// import useSWR from 'swr';

// const fetcher = (url) => fetch(url).then((res) => res.json());

// export default function DataFetcher({ key }) {
//   const { data, error } = useSWR(`/api/data?key=${key}`, fetcher);

//   if (error) return <div>Failed to load data</div>;
//   if (!data) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>Fetched Data</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// }
