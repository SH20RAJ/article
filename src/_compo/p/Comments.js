'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

const Comments = ({ issueTerm }) => {
  const { theme } = useTheme();
  const commentsSection = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('repo', 'shade-cool/article');
    script.setAttribute('issue-term', issueTerm);
    script.setAttribute('theme', theme === 'dark' ? 'github-dark' : 'github-light');
    commentsSection.current.appendChild(script);
  }, [issueTerm, theme]);

  return <div ref={commentsSection} />;
};

export default Comments;
