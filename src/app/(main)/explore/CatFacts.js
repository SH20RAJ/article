import { useEffect, useRef, useState } from 'react';
import { useCatFacts } from './CatFact';

const CatFacts = () => {
  const [page, setPage] = useState(1);
  const [facts, setFacts] = useState([]);
  const { data, isLoading, isError } = useCatFacts(page, 40);

  useEffect(() => {
    if (data.length) {
      setFacts((prevFacts) => [...prevFacts, ...data]);
    }
  }, [data]);

  const observer = useRef();
  const lastFactElementRef = useRef();

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (lastFactElementRef.current) {
      observer.current.observe(lastFactElementRef.current);
    }
  }, [isLoading]);

  if (isError) return <div>Failed to load facts</div>;

  return (
    <div>
      {facts.map((fact, index) => (
        <div
          key={fact.id}
          ref={index === facts.length - 1 ? lastFactElementRef : null}
        >
          {fact.fact}
        </div>
      ))}
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default CatFacts;
