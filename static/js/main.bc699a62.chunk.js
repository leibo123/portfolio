(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(e,a,t){e.exports=t(22)},18:function(e,a,t){},21:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var i=t(0),s=t.n(i),n=t(10),l=t.n(n),r=(t(18),t(1)),u=t(2),o=t(5),c=t(3),m=t(4),d=t(8),p=t(11),b=t.n(p),h=(t(21),function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.occupation,t=this.props.data.description,i=this.props.data.social.map((function(e){return s.a.createElement("li",{key:e.name},s.a.createElement("a",{href:e.url},s.a.createElement("i",{className:e.className})))}));return s.a.createElement("header",{id:"home"},s.a.createElement("nav",{id:"nav-wrap"},s.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),s.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),s.a.createElement("ul",{id:"nav",className:"nav"},s.a.createElement("li",{className:"current"},s.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")))),s.a.createElement("div",{className:"row banner"},s.a.createElement("div",{className:"banner-text"},s.a.createElement("h1",{className:"responsive-headline"},"Hi, I'm ",e,"."),s.a.createElement("h3",null,"I'm a ",s.a.createElement("span",null,a),". ",t,"."),s.a.createElement("hr",null),s.a.createElement("ul",{className:"social"},i))),s.a.createElement("p",{className:"scrolldown"},s.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},s.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(i.Component)),v=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return s.a.createElement("li",{key:e.name},s.a.createElement("a",{href:e.url},s.a.createElement("i",{className:e.className})))}));return s.a.createElement("footer",null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"twelve columns"},s.a.createElement("ul",{className:"social-links"},e)),s.a.createElement("div",{id:"go-top"},s.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},s.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(i.Component),f=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,i=this.props.data.phone,n=this.props.data.email,l=this.props.data.resumedownload;return s.a.createElement("section",{id:"about"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"three columns"},s.a.createElement("img",{className:"profile-pic",src:a,alt:"Leon Lei Profile Pic"})),s.a.createElement("div",{className:"nine columns main-col"},s.a.createElement("h2",null,"About Me"),s.a.createElement("p",null,t),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"columns contact-details"},s.a.createElement("h2",null,"Contact"),s.a.createElement("p",{className:"address"},s.a.createElement("span",null,e),s.a.createElement("br",null),s.a.createElement("span",null,n),s.a.createElement("br",null),s.a.createElement("span",null,i))),s.a.createElement("div",{className:"columns download"},s.a.createElement("p",null,s.a.createElement("a",{href:l,className:"button"},s.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),a}(i.Component),E=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,a=this.props.data.education.map((function(e){return s.a.createElement("div",{key:e.school},s.a.createElement("h3",null,e.school),s.a.createElement("p",{className:"info"},e.degree," ",s.a.createElement("span",null,"\u2022"),s.a.createElement("em",{className:"date"},e.graduated)),s.a.createElement("p",null,e.description))})),t=this.props.data.work.map((function(e){return s.a.createElement("div",{key:e.company},s.a.createElement("h3",null,e.company),s.a.createElement("p",{className:"info"},e.title,s.a.createElement("span",null,"\u2022")," ",s.a.createElement("em",{className:"date"},e.years)),s.a.createElement("p",null,e.description))})),i=this.props.data.skills.map((function(e){var a="bar-expand "+e.name.toLowerCase();return s.a.createElement("li",{key:e.name},s.a.createElement("span",{style:{width:e.level},className:a}),s.a.createElement("em",null,e.name))}));return s.a.createElement("section",{id:"resume"},s.a.createElement("div",{className:"row education"},s.a.createElement("div",{className:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Education"))),s.a.createElement("div",{className:"nine columns main-col"},s.a.createElement("div",{className:"row item"},s.a.createElement("div",{className:"twelve columns"},a)))),s.a.createElement("div",{className:"row work"},s.a.createElement("div",{className:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Work"))),s.a.createElement("div",{className:"nine columns main-col"},t)),s.a.createElement("div",{className:"row skill"},s.a.createElement("div",{className:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Skills"))),s.a.createElement("div",{className:"nine columns main-col"},s.a.createElement("p",null,e),s.a.createElement("div",{className:"bars"},s.a.createElement("ul",{className:"skills"},i)))))}}]),a}(i.Component),g=t(7),q=t(12),N=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(c.a)(a).call(this,e))).state={open:!1},t.openModal=t.openModal.bind(Object(g.a)(t)),t.closeModal=t.closeModal.bind(Object(g.a)(t)),t}return Object(m.a)(a,e),Object(u.a)(a,[{key:"openModal",value:function(){this.setState({open:!0}),document.body.style.overflowY="hidden"}},{key:"closeModal",value:function(){this.setState({open:!1}),document.body.style.overflowY="auto"}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"overlay",onClick:this.openModal},s.a.createElement("div",{className:"portfolio-item-meta"},s.a.createElement("h5",null,this.props.title),s.a.createElement("p",null,this.props.category))),s.a.createElement(q.a,{open:this.state.open,closeOnDocumentClick:!0,onClose:this.closeModal},s.a.createElement("a",{className:"close",onClick:this.closeModal},"\xd7"),s.a.createElement("div",{className:"modal"},s.a.createElement(this.props.content,null))))}}]),a}(s.a.Component),j={abot:function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{id:"abot-wrapper"},s.a.createElement("h2",null,"This is information about the abot project."),s.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam. Sed odio morbi quis commodo odio. Vel pharetra vel turpis nunc eget lorem. In cursus turpis massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. Gravida arcu ac tortor dignissim convallis aenean et. Ornare suspendisse sed nisi lacus. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Massa sapien faucibus et molestie. Proin sed libero enim sed faucibus turpis. Sagittis aliquam malesuada bibendum arcu. Mollis nunc sed id semper. Velit scelerisque in dictum non consectetur a. Habitant morbi tristique senectus et netus et malesuada."),s.a.createElement("p",null,"Etiam tempor orci eu lobortis elementum nibh tellus molestie. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Eget duis at tellus at urna condimentum mattis pellentesque id. Id ornare arcu odio ut sem nulla. Habitant morbi tristique senectus et netus et malesuada. Ut etiam sit amet nisl purus in mollis nunc. Est velit egestas dui id ornare arcu odio ut. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Sed elementum tempus egestas sed sed risus pretium quam vulputate. In nisl nisi scelerisque eu ultrices vitae auctor eu. Et odio pellentesque diam volutpat commodo. Auctor augue mauris augue neque gravida in fermentum et. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Arcu odio ut sem nulla pharetra."),s.a.createElement("p",null,"Dui id ornare arcu odio. In hac habitasse platea dictumst. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Sed libero enim sed faucibus turpis in. Gravida neque convallis a cras semper auctor neque vitae. Quis ipsum suspendisse ultrices gravida dictum fusce. A iaculis at erat pellentesque. Mattis aliquam faucibus purus in massa tempor nec feugiat. A cras semper auctor neque vitae tempus quam pellentesque nec. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. In mollis nunc sed id semper."),s.a.createElement("p",null,"Sed risus ultricies tristique nulla aliquet. Volutpat lacus laoreet non curabitur gravida arcu ac. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Viverra orci sagittis eu volutpat odio facilisis mauris. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Justo laoreet sit amet cursus sit amet. Porta lorem mollis aliquam ut porttitor leo a diam. Tellus rutrum tellus pellentesque eu. Sollicitudin ac orci phasellus egestas tellus. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. In nibh mauris cursus mattis molestie. Urna id volutpat lacus laoreet non curabitur. Est placerat in egestas erat imperdiet sed euismod nisi."))}}]),a}(i.Component),galarpokemon:function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{id:"galarpokemon-wrapper"},s.a.createElement("h2",null,"This is information about the Galar Pokemon project."),s.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam. Sed odio morbi quis commodo odio. Vel pharetra vel turpis nunc eget lorem. In cursus turpis massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. Gravida arcu ac tortor dignissim convallis aenean et. Ornare suspendisse sed nisi lacus. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Massa sapien faucibus et molestie. Proin sed libero enim sed faucibus turpis. Sagittis aliquam malesuada bibendum arcu. Mollis nunc sed id semper. Velit scelerisque in dictum non consectetur a. Habitant morbi tristique senectus et netus et malesuada."),s.a.createElement("p",null,"Etiam tempor orci eu lobortis elementum nibh tellus molestie. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Eget duis at tellus at urna condimentum mattis pellentesque id. Id ornare arcu odio ut sem nulla. Habitant morbi tristique senectus et netus et malesuada. Ut etiam sit amet nisl purus in mollis nunc. Est velit egestas dui id ornare arcu odio ut. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Sed elementum tempus egestas sed sed risus pretium quam vulputate. In nisl nisi scelerisque eu ultrices vitae auctor eu. Et odio pellentesque diam volutpat commodo. Auctor augue mauris augue neque gravida in fermentum et. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Arcu odio ut sem nulla pharetra."),s.a.createElement("p",null,"Dui id ornare arcu odio. In hac habitasse platea dictumst. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Sed libero enim sed faucibus turpis in. Gravida neque convallis a cras semper auctor neque vitae. Quis ipsum suspendisse ultrices gravida dictum fusce. A iaculis at erat pellentesque. Mattis aliquam faucibus purus in massa tempor nec feugiat. A cras semper auctor neque vitae tempus quam pellentesque nec. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. In mollis nunc sed id semper."),s.a.createElement("p",null,"Sed risus ultricies tristique nulla aliquet. Volutpat lacus laoreet non curabitur gravida arcu ac. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Viverra orci sagittis eu volutpat odio facilisis mauris. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Justo laoreet sit amet cursus sit amet. Porta lorem mollis aliquam ut porttitor leo a diam. Tellus rutrum tellus pellentesque eu. Sollicitudin ac orci phasellus egestas tellus. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. In nibh mauris cursus mattis molestie. Urna id volutpat lacus laoreet non curabitur. Est placerat in egestas erat imperdiet sed euismod nisi."))}}]),a}(i.Component),placeholder:function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{id:"placeholder-wrapper"},s.a.createElement("h2",null,"This is information about a placeholder project."),s.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam. Sed odio morbi quis commodo odio. Vel pharetra vel turpis nunc eget lorem. In cursus turpis massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. Gravida arcu ac tortor dignissim convallis aenean et. Ornare suspendisse sed nisi lacus. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Massa sapien faucibus et molestie. Proin sed libero enim sed faucibus turpis. Sagittis aliquam malesuada bibendum arcu. Mollis nunc sed id semper. Velit scelerisque in dictum non consectetur a. Habitant morbi tristique senectus et netus et malesuada."),s.a.createElement("p",null,"Etiam tempor orci eu lobortis elementum nibh tellus molestie. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Eget duis at tellus at urna condimentum mattis pellentesque id. Id ornare arcu odio ut sem nulla. Habitant morbi tristique senectus et netus et malesuada. Ut etiam sit amet nisl purus in mollis nunc. Est velit egestas dui id ornare arcu odio ut. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Sed elementum tempus egestas sed sed risus pretium quam vulputate. In nisl nisi scelerisque eu ultrices vitae auctor eu. Et odio pellentesque diam volutpat commodo. Auctor augue mauris augue neque gravida in fermentum et. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Arcu odio ut sem nulla pharetra."),s.a.createElement("p",null,"Dui id ornare arcu odio. In hac habitasse platea dictumst. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Sed libero enim sed faucibus turpis in. Gravida neque convallis a cras semper auctor neque vitae. Quis ipsum suspendisse ultrices gravida dictum fusce. A iaculis at erat pellentesque. Mattis aliquam faucibus purus in massa tempor nec feugiat. A cras semper auctor neque vitae tempus quam pellentesque nec. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. In mollis nunc sed id semper."),s.a.createElement("p",null,"Sed risus ultricies tristique nulla aliquet. Volutpat lacus laoreet non curabitur gravida arcu ac. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Viverra orci sagittis eu volutpat odio facilisis mauris. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Justo laoreet sit amet cursus sit amet. Porta lorem mollis aliquam ut porttitor leo a diam. Tellus rutrum tellus pellentesque eu. Sollicitudin ac orci phasellus egestas tellus. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. In nibh mauris cursus mattis molestie. Urna id volutpat lacus laoreet non curabitur. Est placerat in egestas erat imperdiet sed euismod nisi."))}}]),a}(i.Component)},O=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var a="images/portfolio/"+e.image;return s.a.createElement("div",{key:e.title,className:"columns portfolio-item"},s.a.createElement("div",{className:"item-wrap"},s.a.createElement("img",{alt:e.title,src:a}),s.a.createElement(N,{title:e.title,category:e.category,content:j[e.contentKey]})))}));return s.a.createElement("section",{id:"portfolio"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"twelve columns collapsed"},s.a.createElement("h1",null,"Take a Look at Some of My Works."),s.a.createElement(N,null),s.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-thirds s-bgrid-thirds cf"},e))))}}]),a}(i.Component),w=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(c.a)(a).call(this,e))).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),t}return Object(m.a)(a,e),Object(u.a)(a,[{key:"getResumeData",value:function(){b.a.ajax({url:"resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(h,{data:this.state.resumeData.main}),s.a.createElement(O,{data:this.state.resumeData.portfolio}),s.a.createElement(f,{data:this.state.resumeData.main}),s.a.createElement(E,{data:this.state.resumeData.resume}),s.a.createElement(v,{data:this.state.resumeData.main}))}}]),a}(i.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(s.a.createElement(w,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/portfolio","/service-worker.js");k?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):y(e)}))}}()}},[[13,1,2]]]);
//# sourceMappingURL=main.bc699a62.chunk.js.map