(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{180:function(e,a,t){"use strict";t.d(a,"a",function(){return p});t(181);var n=t(8),r=t.n(n),i=t(52),c=t.n(i),l=t(0),o=t.n(l),s=t(212),u=t.n(s),m=t(270),d=t.n(m),f=t(203),p=function(e){function a(a){var t;return(t=e.call(this,a)||this).toggle=t.toggle.bind(c()(c()(t))),t.state={isOpen:!1},t}r()(a,e);var t=a.prototype;return t.toggle=function(){this.setState({isOpen:!this.state.isOpen})},t.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.e,{className:"fixed-top",dark:!0,expand:"md"},o.a.createElement("div",{className:"container"},o.a.createElement(f.f,{href:"/",className:"d-block d-md-none mr-auto"},"AG"),o.a.createElement(f.g,{onClick:this.toggle,className:"mr-2"}),o.a.createElement(f.b,{isOpen:this.state.isOpen,navbar:!0},o.a.createElement(u.a,{className:"mr-auto navbar-nav",items:["presentation","formation","competences","experiences","realisations","contact"],currentClassName:"active"},o.a.createElement(f.c,{onClick:this.toggle},o.a.createElement(f.d,{href:"/#presentation"},o.a.createElement("i",{className:"fa fa-home","aria-hidden":"true"}))),o.a.createElement(f.c,{onClick:this.toggle},o.a.createElement(f.d,{href:"/#formation"},"Formation")),o.a.createElement(f.c,null,o.a.createElement(f.d,{onClick:this.toggle,href:"/#competences"},"Compétences")),o.a.createElement(f.c,{onClick:this.toggle},o.a.createElement(f.d,{href:"/#experiences"},"Expériences")),o.a.createElement(f.c,{onClick:this.toggle},o.a.createElement(f.d,{href:"/#realisations"},"Réalisations")),o.a.createElement(f.c,{onClick:this.toggle},o.a.createElement(f.d,{href:"/#contact"},"Contact")))))),o.a.createElement(d.a,{className:"audio-player",src:"Ever Felt pt. 2 - Otis McDonald.mp3",autoPlay:!0,controls:!0}))},a}(o.a.Component)},196:function(e,a,t){"use strict";var n=t(8),r=t.n(n),i=t(0),c=t.n(i),l=t(197),o=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={},t}return r()(a,e),a.prototype.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("footer",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row align-items-center"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"contact-infos"},c.a.createElement("div",{className:"address"},c.a.createElement("i",{className:"fa fa-envelope-o","aria-hidden":"true"})," 81 rue Chanzy, Le Mans"),c.a.createElement("div",{className:"phone"},c.a.createElement("i",{className:"fa fa-phone","aria-hidden":"true"})," 06 44 10 40 69"))),c.a.createElement("div",{className:"col-md-4 social-links-wrapper"},c.a.createElement("ul",{className:"social-links"},c.a.createElement("li",null,c.a.createElement("a",{href:"https://fr.linkedin.com/in/alexandre-gadiou-99717b60",className:"fa fa-linkedin",rel:"noopener noreferrer"},c.a.createElement("span",{className:"sr-only"},"alexandre-gadiou LinkedIn profile"))),c.a.createElement("li",null,c.a.createElement("a",{href:"http://www.viadeo.com/fr/profile/alexandre.gadiou",className:"fa fa-viadeo",rel:"noopener noreferrer"},c.a.createElement("span",{className:"sr-only"},"alexandre-gadiou Viadeo profile"))),c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/Alexandre-Gadiou",className:"fa fa-github",rel:"noopener noreferrer"},c.a.createElement("span",{className:"sr-only"},"alexandre-gadiou Github profile")))))))),c.a.createElement("div",{className:"copyright"},"Copyright © Alexandre Gadiou 2018 ",c.a.createElement(l.Link,{to:"/mentions"},"Mentions légales")))},a}(c.a.Component);a.a=o},197:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return h}),t.d(a,"StaticQueryContext",function(){return f}),t.d(a,"StaticQuery",function(){return p});var n=t(0),r=t.n(n),i=t(4),c=t.n(i),l=t(151),o=t.n(l);t.d(a,"Link",function(){return o.a}),t.d(a,"withPrefix",function(){return l.withPrefix}),t.d(a,"navigate",function(){return l.navigate}),t.d(a,"push",function(){return l.push}),t.d(a,"replace",function(){return l.replace}),t.d(a,"navigateTo",function(){return l.navigateTo});var s=t(35);t.d(a,"waitForRouteChange",function(){return s.c});var u=t(198),m=t.n(u);t.d(a,"PageRenderer",function(){return m.a});var d=t(50);t.d(a,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},198:function(e,a,t){var n;e.exports=(n=t(277))&&n.default||n},199:function(e,a,t){},277:function(e,a,t){"use strict";t.r(a);t(39);var n=t(0),r=t.n(n),i=t(4),c=t.n(i),l=t(74),o=t(1),s=function(e){var a=e.location,t=o.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(l.a,Object.assign({key:a.pathname,location:a,pageResources:t},t.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=s}}]);
//# sourceMappingURL=1-e3952d9d394b52651fa9.js.map