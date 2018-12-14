(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,a){"use strict";a.r(t);a(54),a(53),a(38);var n=a(8),r=a.n(n),l=a(0),s=a.n(l),c=a(178),i=a.n(c),o=a(180),m=a(196),d=(a(199),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={title:t.title,description:t.description,keywords:t.keywords,children:t.children},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.location.hash&&setTimeout(function(){document.querySelector(""+window.location.hash).scrollIntoView()},0)},a.render=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.a,{title:this.state.title,meta:[{name:"description",content:this.state.description},{name:"keywords",content:this.state.keywords}]},s.a.createElement("html",{lang:"fr"})),s.a.createElement("div",{className:"bodywrapper"},s.a.createElement(o.a,null),this.state.children,s.a.createElement(m.a,null)))},t}(s.a.Component)),u=(a(278),a(279)),p=a.n(u),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={skills:t.skills},a}r()(t,e);var a=t.prototype;return a.fontSizeMapper=function(e){var t=e.value;return 5===e.value&&(t=1*e.value),2===e.value&&(t=10*e.value),3===e.value&&(t=200*e.value),4===e.value&&(t=1e3*e.value),12+3*Math.log2(t)},a.render=function(){return"undefined"!=typeof window?s.a.createElement("div",{className:"word-cloud"},s.a.createElement(p.a,{data:this.state.skills,height:"300",fontSizeMapper:this.fontSizeMapper})):s.a.createElement(s.a.Fragment,null)},t}(s.a.Component),h=(a(181),a(52)),g=a.n(h),v=a(203),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={messageSent:t.messageSent,mailTo:t.mailTo,redirectTo:t.redirectTo},a.onDismiss=a.onDismiss.bind(g()(g()(a))),a}r()(t,e);var a=t.prototype;return a.onDismiss=function(){this.setState({messageSent:!1})},a.render=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(v.a,{color:"success",isOpen:this.state.messageSent,toggle:this.onDismiss,fade:!0},"Votre message a été envoyé avec succès !"),s.a.createElement("form",{className:"contact-form",action:"https://formspree.io/"+this.state.mailTo,method:"POST"},s.a.createElement("input",{type:"hidden",name:"_next",value:this.state.redirectTo+"?messageSent=true"}),s.a.createElement("input",{type:"hidden",name:"_subject",value:"alexandre-gadiou message"}),s.a.createElement("input",{className:"d-none",type:"text",name:"_gotcha"}),s.a.createElement("div",{className:"form-group row"},s.a.createElement("label",{htmlFor:"inputLastName",className:"sr-only"},"Nom"),s.a.createElement("div",{className:"offset-sm-2 col-sm-8"},s.a.createElement("input",{type:"text",name:"lastName",className:"form-control",id:"inputLastName",placeholder:"Nom"}))),s.a.createElement("div",{className:"form-group row"},s.a.createElement("label",{htmlFor:"inputFirstName",className:"sr-only"},"Prénom"),s.a.createElement("div",{className:"offset-sm-2 col-sm-8"},s.a.createElement("input",{type:"text",name:"firstName",className:"form-control",id:"inputFirstName",placeholder:"Prénom"}))),s.a.createElement("div",{className:"form-group row"},s.a.createElement("label",{htmlFor:"inputEmail",className:"sr-only"},"Email"),s.a.createElement("div",{className:"offset-sm-2 col-sm-8"},s.a.createElement("input",{type:"email",name:"_replyto",className:"form-control",id:"inputEmail",placeholder:"Email"}))),s.a.createElement("div",{className:"form-group row"},s.a.createElement("label",{htmlFor:"inputMessage",className:"sr-only"},"Message"),s.a.createElement("div",{className:"offset-sm-2 col-sm-8"},s.a.createElement("textarea",{rows:"10",className:"form-control",id:"inputMessage",name:"message",placeholder:"Votre message"}))),s.a.createElement("div",{className:"buttons-bar form-group row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary"},"Envoyer")))))},t}(s.a.Component);a.d(t,"query",function(){return N});var N="2487863430",y=function(e){function t(t){var a;a=e.call(this,t)||this;var n=new URLSearchParams(t.location.search);return a.state={cv:t.data.allContentfulCv.edges[0].node,educations:t.data.allContentfulEducation.edges,experiences:t.data.allContentfulExperience.edges,totalExperienceTime:t.data.allContentfulExperience.edges.map(function(e,t){return a.getWorkingYear(e)}).reduce(function(e,t){return e+t}),skills:t.data.allContentfulSkill.edges.map(function(e,t){return{text:e.node.title,value:e.node.level}}),achievments:t.data.allContentfulAchievement.edges,currentURL:t.location.href,messageSent:"true"===n.get("messageSent")},a}r()(t,e);var a=t.prototype;return a.getWorkingYear=function(e){var t=new Date,a=new Date;return null!=e.node.startDate&&(t=new Date(e.node.startDate)),null!=e.node.endDate&&(a=new Date(e.node.endDate)),Math.round((a.getTime()-t.getTime())/1e3/31536e3)},a.getWorkingYearLabel=function(e){var t=this.getWorkingYear(e);return t+=1===t?" an":" ans"},a.getYearStyle=function(e){return{width:this.getWorkingYear(e)/this.state.totalExperienceTime*100+"%"}},a.getProgressBarStyle=function(e){var t="progress-bar";return null===e.node.endDate&&(t+=" current-exp-progress-bar progress-bar-striped progress-bar-animated"),t},a.render=function(){var e=this;return s.a.createElement(d,{title:"Accueil",description:"Alexandre Gadiou, Ingénieur, Java, J2EE, Développement, Développeur, Web, Le Mans",keywords:"Alexandre Gadiou - Ingénieur Java/J2EE"},s.a.createElement("header",{id:"presentation",className:"presentation"},s.a.createElement("img",{className:"photo-cv rounded-circle",src:this.state.cv.photo.sizes.src,alt:this.state.cv.firstName+" "+this.state.cv.lastName}),s.a.createElement("h1",null,this.state.cv.firstName+" "+this.state.cv.lastName),s.a.createElement("h2",null,"Web Developer - Le Mans - France")),s.a.createElement("section",{id:"a-propos",className:"about"},s.a.createElement("div",{className:"container"},s.a.createElement("h2",null,"À propos"),s.a.createElement("hr",null),s.a.createElement("div",{className:"text-center"},s.a.createElement("p",null,"Je suis développeur web spécialisé dans les technologies front-end."),s.a.createElement("p",null,"Le but de ce site est d'exposer mon CV et de vous confirmer mon intéret pour le web."),s.a.createElement("p",null,"L'architecture de ce site est de type ",s.a.createElement("a",{href:"https://jamstatic.fr/2018/05/31/startups-jamstack/",target:"_blank",rel:"noopener noreferrer"},"JAMStack"),". Il a été codé avec ",s.a.createElement("a",{href:"https://www.gatsbyjs.org/",target:"_blank",rel:"noopener noreferrer"},"GatsbyJS"),", un CMS basé sur la technologie React."),s.a.createElement("p",null,"Spécialisé sur le CMS ",s.a.createElement("a",{href:"http://www.jahia.com",target:"_blank",title:"jahia.com",rel:"noopener noreferrer"},"Jahia"),", je travaille actuellement au Mans chez GFI.")))),s.a.createElement("section",{id:"formation",className:"education"},s.a.createElement("div",{className:"container"},s.a.createElement("h2",null,"Formation"),s.a.createElement("hr",null),s.a.createElement("div",{className:"card-deck"},this.state.educations.map(function(e,t){return s.a.createElement("div",{key:t,className:"card"},s.a.createElement("img",{className:"card-img-top",src:e.node.image.sizes.src,alt:e.node.title}),s.a.createElement("div",{className:"card-body"},s.a.createElement("h3",null,e.node.title),s.a.createElement("div",{className:"card-text",dangerouslySetInnerHTML:{__html:e.node.description.childMarkdownRemark.html}})))})))),s.a.createElement("section",{id:"competences",className:"skills"},s.a.createElement("div",{className:"container"},s.a.createElement("h2",null,"Compétences"),s.a.createElement("hr",null),s.a.createElement("div",{className:"text-center"},s.a.createElement(E,{skills:this.state.skills}),s.a.createElement("ul",{className:"sr-only"},this.state.skills.map(function(e,t){return s.a.createElement("li",{key:t},s.a.createElement("span",null,e.text))}))))),s.a.createElement("section",{id:"experiences",className:"experiences"},s.a.createElement("div",{className:"container"},s.a.createElement("h2",null,"Expériences"),s.a.createElement("hr",null),s.a.createElement("div",{className:"card-deck"},this.state.experiences.map(function(t,a){return s.a.createElement("div",{key:a,className:"card"},s.a.createElement("img",{className:"card-img-top",src:t.node.image.sizes.src,alt:t.node.title}),s.a.createElement("div",{className:"card-body"},s.a.createElement("h3",null,t.node.title),s.a.createElement("div",{className:"card-text",dangerouslySetInnerHTML:{__html:t.node.description.childMarkdownRemark.html}}),s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:e.getProgressBarStyle(t),style:e.getYearStyle(t),role:"progressbar","aria-valuenow":e.getWorkingYear(t),"aria-valuemin":"0","aria-valuemax":"100"},e.getWorkingYearLabel(t)))))})))),s.a.createElement("section",{id:"realisations",className:"achievments"},s.a.createElement("div",{className:"container"},s.a.createElement("h2",null,"Réalisations"),s.a.createElement("hr",null),this.state.achievments.map(function(e,t){return s.a.createElement("article",{key:t,className:"article"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-5 col-lg-4"},s.a.createElement("img",{className:"card-img-top",src:e.node.image.sizes.src,alt:e.node.title})),s.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-7 col-lg-8"},s.a.createElement("h3",{className:"title"},s.a.createElement("a",{href:e.node.url},e.node.title)),s.a.createElement("div",{className:"text",dangerouslySetInnerHTML:{__html:e.node.description.childMarkdownRemark.html}}),s.a.createElement("div",null,s.a.createElement("strong",null,"Mots clefs")," : ",e.node.technologies.join(", ")))))}))),s.a.createElement("section",{id:"contact",className:"contact"},s.a.createElement("div",{className:"container"},s.a.createElement("h2",null,"Contact"),s.a.createElement("hr",null),s.a.createElement(f,{messageSent:this.state.messageSent,mailTo:this.state.cv.email,redirectTo:this.state.currentURL}))))},t}(s.a.Component);t.default=y}}]);
//# sourceMappingURL=component---src-pages-index-js-c739b973c2c164aafeb1.js.map