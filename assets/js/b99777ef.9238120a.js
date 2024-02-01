"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1979],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?i.createElement(h,a(a({ref:t},d),{},{components:n})):i.createElement(h,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],l={id:"dev-guide-electron-sdk",title:"Electron SDK"},s=void 0,p={unversionedId:"dev-guide/dev-guide-electron-sdk",id:"dev-guide/dev-guide-electron-sdk",title:"Electron SDK",description:"The Jitsi Meet Electron SDK provides a toolkit for adding Jitsi Meet into electron applications with additional features for a better desktop experience.",source:"@site/docs/dev-guide/electron-sdk.md",sourceDirName:"dev-guide",slug:"/dev-guide/dev-guide-electron-sdk",permalink:"/handbook/docs/dev-guide/dev-guide-electron-sdk",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/dev-guide/electron-sdk.md",tags:[],version:"current",lastUpdatedAt:1706786855,formattedLastUpdatedAt:"Feb 1, 2024",frontMatter:{id:"dev-guide-electron-sdk",title:"Electron SDK"},sidebar:"docs",previous:{title:"lib-jitsi-meet API (low level)",permalink:"/handbook/docs/dev-guide/dev-guide-ljm-api"},next:{title:"React SDK",permalink:"/handbook/docs/dev-guide/dev-guide-react-sdk"}},d={},c=[{value:"Sample Application",id:"sample-application",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Screen Sharing",id:"screen-sharing",level:3},{value:"Remote Control",id:"remote-control",level:3},{value:"Always On Top",id:"always-on-top",level:3},{value:"Power Monitor",id:"power-monitor",level:3},{value:"NOTE:",id:"note",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Jitsi Meet Electron SDK provides a toolkit for adding Jitsi Meet into electron applications with additional features for a better desktop experience."),(0,o.kt)("p",null,"Supported Electron versions: >= 16."),(0,o.kt)("h2",{id:"sample-application"},"Sample Application"),(0,o.kt)("p",null,"The Jitsi Meet Electron Application is created using the Electron SDK and makes use of all its available features. The source code is available here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet-electron"},"jitsi-meet-electron application repository"),"."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Install from npm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install @jitsi/electron-sdk\n")),(0,o.kt)("p",null,"Note: This package contains native code on Windows for the remote control module. Binary prebuilds are packaged with prebuildify as part of the npm package."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"screen-sharing"},"Screen Sharing"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requirements"),":\nThe screen sharing utility requires iframe HTML Element that will load Jitsi Meet."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Enable the screen sharing:")),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"render")," electron process of the window where Jitsi Meet is displayed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const {\n    setupScreenSharingRender\n} = require("@jitsi/electron-sdk");\n\n// api - The Jitsi Meet iframe api object.\nsetupScreenSharingRender(api);\n')),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"main")," electron process:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const {\n    setupScreenSharingMain\n} = require("@jitsi/electron-sdk");\n\n// jitsiMeetWindow - The BrowserWindow instance of the window where Jitsi Meet is loaded.\n// appName - Application name which will be displayed inside the content sharing tracking window\n// i.e. [appName] is sharing your screen.\n// osxBundleId - Mac Application bundleId for which screen capturer permissions will be reset if user denied them.  \nsetupScreenSharingMain(mainWindow, appName, osxBundleId);\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),":\nAn example using screensharing in Electron without the SDK is available here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gabiborlea/jitsi-meet-electron-example"},"screensharing example without the SDK"),"."),(0,o.kt)("h3",{id:"remote-control"},"Remote Control"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requirements"),":\nThe remote control utility requires an iframe HTML Element that will load Jitsi Meet."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Enable the remote control:")),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"render")," electron process of the window where Jitsi Meet is displayed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const {\n    RemoteControl\n} = require("@jitsi/electron-sdk");\n\n// iframe - the Jitsi Meet iframe\nconst remoteControl = new RemoteControl(iframe);\n')),(0,o.kt)("p",null,"To disable the remote control:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"remoteControl.dispose();\n")),(0,o.kt)("p",null,"NOTE: The ",(0,o.kt)("inlineCode",{parentName:"p"},"dispose")," method will be called automatically when the Jitsi Meet iframe unloads."),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"main")," electron process:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const {\n    RemoteControlMain\n} = require("@jitsi/electron-sdk");\n\n// jitsiMeetWindow - The BrowserWindow instance of the window where Jitsi Meet is loaded.\nconst remoteControl = new RemoteControlMain(mainWindow);\n')),(0,o.kt)("h3",{id:"always-on-top"},"Always On Top"),(0,o.kt)("p",null,"Displays a small window with the currently active speaker video when the main Jitsi Meet window is not focused."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requirements"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Jitsi Meet should be initialized through our ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/jitsi/jitsi-meet/blob/master/doc/api.md"},"iframe API")),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"BrowserWindow")," instance where Jitsi Meet is displayed should use the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/electron/electron/blob/master/docs/api/window-open.md#using-chromes-windowopen-implementation"},"Chrome's window.open implementation")," (set ",(0,o.kt)("inlineCode",{parentName:"li"},"nativeWindowOpen")," option of ",(0,o.kt)("inlineCode",{parentName:"li"},"BrowserWindow"),"'s constructor to ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),")."),(0,o.kt)("li",{parentName:"ol"},"If you have a custom handler for opening windows you have to filter the always-on-top window. You can do this by its ",(0,o.kt)("inlineCode",{parentName:"li"},"frameName")," argument which will be set to ",(0,o.kt)("inlineCode",{parentName:"li"},"AlwaysOnTop"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Enable the aways on top:")),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"main")," electron process:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const {\n    setupAlwaysOnTopMain\n} = require("@jitsi/electron-sdk");\n\n// jitsiMeetWindow - The BrowserWindow instance\n// of the window where Jitsi Meet is loaded.\nsetupAlwaysOnTopMain(jitsiMeetWindow);\n')),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"render")," electron process of the window where Jitsi Meet is displayed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const {\n    setupAlwaysOnTopRender\n} = require(\"@jitsi/electron-sdk\");\n\nconst api = new JitsiMeetExternalAPI(...);\nconst alwaysOnTop = setupAlwaysOnTopRender(api);\n\nalwaysOnTop.on('will-close', handleAlwaysOnTopClose);\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"setupAlwaysOnTopRender")," returns an instance of EventEmitter with the following events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"dismissed")," - emitted when the always-on-top window is explicitly dismissed via its close button")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"will-close")," - emitted right before the always-on-top window is going to close"))),(0,o.kt)("h3",{id:"power-monitor"},"Power Monitor"),(0,o.kt)("p",null,"Provides a way to query Electron for system idle and receive power monitor events."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"enable power monitor:"),"\nIn the ",(0,o.kt)("strong",{parentName:"p"},"main")," electron process:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const {\n    setupPowerMonitorMain\n} = require("@jitsi/electron-sdk");\n\n// jitsiMeetWindow - The BrowserWindow instance\n// of the window where Jitsi Meet is loaded.\nsetupPowerMonitorMain(jitsiMeetWindow);\n')),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"render")," electron process of the window where Jitsi Meet is displayed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const {\n    setupPowerMonitorRender\n} = require("@jitsi/electron-sdk");\n\nconst api = new JitsiMeetExternalAPI(...);\nsetupPowerMonitorRender(api);\n')),(0,o.kt)("h3",{id:"note"},"NOTE:"),(0,o.kt)("p",null,"You'll need to add 'disable-site-isolation-trials' switch because of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/electron/electron/issues/18214"},"https://github.com/electron/electron/issues/18214"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"app.commandLine.appendSwitch('disable-site-isolation-trials')\n")),(0,o.kt)("p",null,"For more information please check out the SDK's repository ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet-electron-sdk"},"https://github.com/jitsi/jitsi-meet-electron-sdk"),"."))}m.isMDXComponent=!0}}]);