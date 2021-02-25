(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),h=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=h(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=h(n),u=r,y=d["".concat(i,".").concat(u)]||d[u]||p[u]||a;return n?o.a.createElement(y,c(c({ref:t},l),{},{components:n})):o.a.createElement(y,c({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return h}));var r=n(3),o=n(7),a=(n(0),n(108)),i={id:"crypto",title:"Cryptocurrency donations"},c={unversionedId:"crypto",id:"crypto",isDocsHomePage:!1,title:"Cryptocurrency donations",description:"What is and why Cryptocurrency?",source:"@site/guides/guide2-crypto.md",slug:"/crypto",permalink:"/guides/crypto",editUrl:"https://github.com/giveth/giveth-docs/edit/master/guides/guide2-crypto.md",version:"current",lastUpdatedBy:"Mitch",lastUpdatedAt:1614177636,sidebar:"guides",previous:{title:"Troubleshooting",permalink:"/guides/troubleshooting"},next:{title:"Donating with Fiat via the Torus on-ramp",permalink:"/guides/torusonramp"}},s=[{value:"What is and why Cryptocurrency?",id:"what-is-and-why-cryptocurrency",children:[]},{value:"What is the Blockchain?",id:"what-is-the-blockchain",children:[]},{value:"What is and why choose Ethereum?",id:"what-is-and-why-choose-ethereum",children:[]},{value:"How does it work in the context of the application?",id:"how-does-it-work-in-the-context-of-the-application",children:[]}],l={rightToc:s};function h(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"what-is-and-why-cryptocurrency"},"What is and why Cryptocurrency?"),Object(a.b)("p",null,"Simply, it is a secure form of digital currency that can be transferred anywhere in the world peer-to-peer, similar to email (where the email's server is replaced with a decentralized network)."),Object(a.b)("p",null,"More technically, bitcoin is a type of digital currency that uses cryptography and open source software to regulate the generation of units of currency and verify the transfer of funds, operating independently of a central bank. There is a distinction between bitcoin, the digital currency, and Blockchain the technology, which has many additional potential use cases beyond the currency."),Object(a.b)("p",null,"Using cryptocurrency for sending and receiving donations has many advantages against using 'fiat' or regular currency. With the implementation of the blockchain crypto transactions are recorded and forever stored on the digital ledger or 'blockchain' making currency donations and distrubtion transparent."),Object(a.b)("h2",{id:"what-is-the-blockchain"},"What is the Blockchain?"),Object(a.b)("p",null,"The Blockchain is the decentralized online ledger that is distributed across the network that records all the transactions that are being made. This ledger is constantly being updated and distributed. Since there are many copies being updated and verified synchronously it prevents one bad actor from manipulating the data. In other cyrptocurrencies this same technology is being taken to a whole other level.."),Object(a.b)("h2",{id:"what-is-and-why-choose-ethereum"},"What is and why choose Ethereum?"),Object(a.b)("p",null," It's the world's programmable blockchain. Ethereum builds on Bitcoin's innovation, with some big differences. Both let you use digital money without payment providers or banks. But Ethereum is programmable, so you can also use it for lots of different digital assets \u2013 even Bitcoin! This also means Ethereum is for more than payments. It's a marketplace of financial services, games and apps that can't steal your data or censor you."),Object(a.b)("p",null," On Giveth we use these programmable ethereum blocks to create applications that facilitate donations. In the near future we will be using this same technology to potentially mint our own tokens and precipitate the GIVing economy."),Object(a.b)("h2",{id:"how-does-it-work-in-the-context-of-the-application"},"How does it work in the context of the application?"),Object(a.b)("p",null,"One of these superpowers is to create dApps or Decentralized Applications, these are applications programmed onto the blockchain. dApps can be programmed to work as smart contracts receiving, holding and distributing currency as per the terms wrote into the contract. This feature removes the need for banks and/or lawyers, cutting through red tape and allowing project creators more autonomy."),Object(a.b)("p",null,"When you create or donate to a project you're interacting with the Giveth dApp, your donations sent or received are recorded on the blockchain and can be viewed by anyone, anytime and anywhere. Donations are faciliated by dApp's code, transactions thus can be done straigh A -> B without anyone else needing to be involved. "),Object(a.b)("p",null,"One of the other superpowers is the ability for developers to create tokens or 'coins' which can create alternative economies based on the functionality programmed onto the coin. Giveth is in the works of implementing it's own version of a token which will amplify the potential of donations. ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"More on this is in development!"))))}h.isMDXComponent=!0}}]);