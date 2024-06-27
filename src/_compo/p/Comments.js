'use client'
import { useEffect, useRef } from 'react';

const Comments = ({ issueTerm }) => {
  const commentsSection = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('repo', 'shade-cool/article');
    script.setAttribute('issue-term', issueTerm);
    script.setAttribute('theme', 'github-light');
    commentsSection.current.appendChild(script);
  }, [issueTerm]);

  return <div ref={commentsSection} />;
};

export default Comments;
