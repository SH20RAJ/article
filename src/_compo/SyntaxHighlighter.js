// components/SyntaxHighlighter.client.js
'use client';

import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // You can use different themes

export default function SyntaxHighlighter({ children }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
 
  return (
    <div>
      {children}
    </div>
  );
}
