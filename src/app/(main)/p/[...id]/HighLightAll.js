"use client";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-css";
import "prismjs/components/prism-scss";
import "prismjs/components/";

import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js";
// import "prismjs/plugins/line-numbers/prism-line-numbers.min.js";
// import "prismjs/plugins/line-highlight/prism-line-highlight.min.js";
// import "prismjs/plugins/line-highlight/prism-line-highlight.css";
// import "prismjs/plugins/toolbar/prism-toolbar.min.js";
// import "prismjs/plugins/show-language/prism-show-language.min.js";
// import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js";


export default function HighlightAll() {
  useEffect(() => {
    Prism.highlightAll();
    
  }, []);
  return <div className="hidden">
      <style dangerouslySetInnerHTML={{__html: "\n      /**\n * Solarized dark atom theme for `prism.js`\n * Based on Atom's `atom-dark` theme: https://github.com/atom/atom-dark-syntax\n * @author Pranay Chauhan (@PranayChauhan2516)\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: #839496;\n\ttext-shadow: 0 1px rgba(0, 0, 0, 0.3);\n\tfont-family: Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace;\n\tdirection: ltr;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n\tborder-radius: 0.3em;\n}\n\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tbackground: #002b36;\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: #586e75;\n}\n\n.token.punctuation {\n\tcolor: #93a1a1;\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.keyword,\n.token.tag {\n\tcolor: #268bd2;\n}\n\n.token.class-name {\n\tcolor: #FFFFB6;\n\ttext-decoration: underline;\n}\n\n.token.boolean,\n.token.constant {\n\tcolor: #b58900;\n}\n\n.token.symbol,\n.token.deleted {\n\tcolor: #dc322f;\n}\n\n.token.number {\n\tcolor: #859900;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #859900;\n}\n\n.token.variable {\n\tcolor: #268bd2;\n}\n\n.token.operator {\n\tcolor: #EDEDED;\n}\n\n.token.function {\n\tcolor: #268bd2;\n}\n\n.token.regex {\n\tcolor: #E9C062;\n}\n\n.token.important {\n\tcolor: #fd971f;\n}\n\n.token.entity {\n\tcolor: #FFFFB6;\n\tcursor: help;\n}\n\n.token.url {\n\tcolor: #96CBFE;\n}\n\n.language-css .token.string,\n.style .token.string {\n\tcolor: #87C38A;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.atrule,\n.token.attr-value {\n\tcolor: #F9EE98;\n}\n      " }} />

  </div>;
}