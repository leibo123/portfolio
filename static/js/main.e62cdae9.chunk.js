(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(e,t,a){e.exports=a(22)},18:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),s=a.n(o),i=(a(18),a(1)),l=a(2),c=a(5),m=a(3),u=a(4),d=a(8),h=a(11),p=a.n(h),f=(a(21),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.occupation,a=this.props.data.description,n=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}));return r.a.createElement("header",{id:"home"},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{className:"responsive-headline"},"Hi, I'm ",e,"."),r.a.createElement("h3",null,"I'm a ",r.a.createElement("span",null,t)," ",a,"."),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},n))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},r.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component)),g=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}));return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e)),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t="images/"+this.props.data.image,a=this.props.data.bio,n=this.props.data.phone,o=this.props.data.email,s=this.props.data.resumedownload;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"three columns"},r.a.createElement("img",{className:"profile-pic",src:t,alt:"Leon Lei Profile Pic"})),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,a),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"columns contact-details"},r.a.createElement("h2",null,"Contact"),r.a.createElement("p",{className:"address"},r.a.createElement("span",null,e),r.a.createElement("br",null),r.a.createElement("span",null,o),r.a.createElement("br",null),r.a.createElement("span",null,n))),r.a.createElement("div",{className:"columns download"},r.a.createElement("p",null,r.a.createElement("a",{href:s,className:"button"},r.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),t}(n.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,t=this.props.data.education.map((function(e){return r.a.createElement("div",{key:e.school},r.a.createElement("h3",null,e.school),r.a.createElement("p",{className:"info"},e.degree," ",r.a.createElement("span",null,"\u2022"),r.a.createElement("em",{className:"date"},e.graduated)),r.a.createElement("p",null,r.a.createElement("b",null,"Relevant Coursework: "),e.description))})),a=this.props.data.work.map((function(e){return r.a.createElement("div",{key:e.company},r.a.createElement("h3",null,e.company),r.a.createElement("p",{className:"info"},e.title,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.years)),r.a.createElement("p",null,e.description))})),n=this.props.data.skills.map((function(e){var t="bar-expand "+e.name.toLowerCase();return r.a.createElement("li",{key:e.name},r.a.createElement("span",{style:{width:e.level},className:t}),r.a.createElement("em",null,e.name))}));return r.a.createElement("section",{id:"resume"},r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Education"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},t)))),r.a.createElement("div",{className:"row work"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Work"))),r.a.createElement("div",{className:"nine columns main-col"},a)),r.a.createElement("div",{className:"row skill"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Skills"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("p",null,e),r.a.createElement("div",{className:"bars"},r.a.createElement("ul",{className:"skills"},n)))))}}]),t}(n.Component),b=a(7),E=a(12),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={open:!1},a.openModal=a.openModal.bind(Object(b.a)(a)),a.closeModal=a.closeModal.bind(Object(b.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"openModal",value:function(){this.setState({open:!0}),document.body.style.overflowY="hidden",document.body.style.paddingRight="10px",document.getElementById("nav").style.paddingRight="10px"}},{key:"closeModal",value:function(){this.setState({open:!1}),document.body.style.overflowY="auto",document.body.style.paddingRight="0px",document.getElementById("nav").style.paddingRight="0px"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"overlay",onClick:this.openModal},r.a.createElement("div",{className:"portfolio-item-meta"},r.a.createElement("h5",null,this.props.title),r.a.createElement("p",null,this.props.category))),r.a.createElement(E.a,{open:this.state.open,closeOnDocumentClick:!0,onClose:this.closeModal},r.a.createElement("div",{className:"modal-wrapper"},r.a.createElement("div",{id:"closemodal"},r.a.createElement("button",{className:"close",onClick:this.closeModal},"\xd7")),r.a.createElement("div",{className:"modal"},this.props.content))))}}]),t}(n.Component),k=r.a.createElement("div",{id:"galarpokemon-wrapper",className:"project-wrapper"},r.a.createElement("h3",null,"Galar Pokemon App"),r.a.createElement("a",{href:"https://galar-pokemon.herokuapp.com/",target:"_blank"},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:"images/projects/galarpokemon.jpg",alt:"galar pokemon app"}),r.a.createElement("p",null,r.a.createElement("em",null,"Click to visit page.")))),r.a.createElement("p",null,"This app implented with React allows users to browse all 400 Pokemon in the Galar Region (as presented in the new Pokemon Sword and Shield video games). Users can search for and filter Pokemon by their different Types (e.g. Fire, Water, Grass) or by their base stats, as well as sort them by Pokedex number or by total base stats. Through this app, users are able to efficiently look up the image and stats of a Pokemon in the Galar Pokedex, as well as quickly determine which Pokemon have the highest total base stats, highest stats in a particular category, etc."),r.a.createElement("p",null,"The interface is designed with user efficiency in mind, for example by providing a compact area in which all the pokemon's stats are visible at a glance as well as keeping a search feature for quick lookup of a given Pokemon. The dropdowns provided for filtering and sorting are intuitive to use and descriptive enough that users will have an idea of what effect applying each filter or sort would have. Furthermore, the filters, sort, and search can be applied together in any combination such that there is no inconsistent behavior. A message is also displayed that makes clear to the user which filters have already been applied. The App uses several React components, most importantly a ",r.a.createElement("code",null,"FilteredList")," component which is passed in several props containing Pokemon stats and image data from the main ",r.a.createElement("code",null,"App.js"),". Changes in this component's state can be triggered by selecting which filters/sort to use, or by typing in the search bar. Additional components used include a ",r.a.createElement("code",null,"Pokemon")," component which has props for a individual Pokemon's data/images, as well as a state for keeping track of whether a given Pokemon has been toggled or not (to display its shiny form). There is also a ",r.a.createElement("code",null,"RainbowHeader")," component that takes as a prop the text used to create the header, and has a state to keep track of the current color and cycle through a list of colors. Changes in both of these component's states can be triggered when the respective components are clicked."),r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{className:"smaller-image",src:"images/projects/reactlogo.png",alt:"react logo"}),r.a.createElement("p",null)),r.a.createElement("p",null,"Through the process of implementing this app, I gained a lot of experience with using React components as well as how JavaScript in React can be used in a general way to handle arbitrarily many sorts/filters on data of arbitrarily sized length. This was also my first time deploying an app on Heroku, and I found it to be very easy to do since I could just import my app directly from Github and use the ",r.a.createElement("code",null,"npm run build")," command. "),r.a.createElement("p",null,"All images of Pokemon used are courtesy of ",r.a.createElement("a",{href:"http://www.serebii.net"},"serebii.net"),".")),N={abot:r.a.createElement("div",{id:"abot-wrapper",className:"project-wrapper"},r.a.createElement("h3",null,"ABOT Database Website"),r.a.createElement("a",{href:"https://www.abotdatabase.info",target:"_blank"},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:"images/projects/abot.jpg",alt:"abot website"}),r.a.createElement("p",null,r.a.createElement("em",null,"Click to visit page.")))),r.a.createElement("p",null,"The ABOT (Anthropomorphic roBOT) Database is a collection of real-world anthropomorphic robots that have been created for research or commercial purposes. As part of a collaborative effort in Spring 2017, I played an integral role in the design and implementation of this website along with Brown students Fawn Tong, Ken Noh, and RISD student Cammy Cha. This was one of my first experiences working on a web project with clients (Beth Phillips, Xuan Zhao, and Bertram Malle), and I learned a ton from the back-and-forth process."),r.a.createElement("p",null,"We implemented the website backend with Node.JS for the server programming and MongoDB for storing data of all the robots. For the frontend, we just used simple HTML, CSS, and JavaScript (no Bootstrap, surprisingly). I was also the primary developer working on the deployment of the website, for which we used Amazon Web Services. I had a blast (not quite, but it was instructive at least) setting up the workspace on AWS EC2 as well wrangling with Route 53. There was also some DNS configuration that I needed to get it linked up with the GoDaddy domain."),r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{className:"smaller-image",src:"images/projects/nodemongologo.png",alt:"node mongo logo"}),r.a.createElement("p",null)),r.a.createElement("p",null,"In addition to porting over and preserving the major functionalities from the previous version of the website, such as a downloadable robot information list with human-likeness scores, a preview of 200 robots, and a feature-based human-likeness predictor, the new website we created also featured advanced search and filter capabilities, integrated robot information in preview windows, and radar graphs visually representing each robot's human-likeness profile. We also helped to improve the image collection and streamlined the human-likeness predictor."),r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:"images/projects/abotrobotlist.jpg",alt:"abot robot list"}),r.a.createElement("p",null,"Example of viewing robots on the collection page")),r.a.createElement("p",null,"I really enjoyed working on this project and learned many prominent web technologies while doing so. Our clients were fully satisfied with our work, although in hindsight I also learned about many not-so-effective practices in web programming which unfortunately made their way into the site (as is frequently the case when trying something for the first time). Presently, I continue to make modifications and upgrades to the website as the sole developer. If I ever find a solid chunk of free time, I would love to recreate the site with my newly gained experience of around 2 years, making the site significantly cleaner and more efficient for upkeep.")),galarpokemon:k,umreu:r.a.createElement("div",{id:"umreu-wrapper",className:"project-wrapper"},r.a.createElement("h3",null,"University of Miami REU"),r.a.createElement("a",{href:"http://www.cs.miami.edu/reu-cfs/2017/posters/CooperLeiPoster.pdf",target:"_blank"},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:"images/projects/umreu.png",alt:"university of miami REU"}),r.a.createElement("p",null,r.a.createElement("em",null,"Click to visit page.")))),r.a.createElement("p",null,"Over the summer of 2017, I was a 10-week research intern at the University of Miami. This was under the Computer Science REU (Research Experience for Undergraduates) Program: Computing for Structure. The REU was data science focused, and the project that I worked on was a child-developmental psychology project under Professor Daniel Messinger along with another REU student, Samuel. We looked at the effect of language level on a child's social ties and development in a classroom, focusing especially on children with deafness or hard-of-hearing. Using the programming skills that I had picked up so far, I wrote bits of code in Matlab and C# to process and analyzed the large amounts of data produced by two recording devices: LENA and Ubisense. These were worn by each child in the classroom during the observation period, tracking their position in the classroom as well recording their auditory information with a high sampling rate."),r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:"images/projects/lenaubivis.gif",alt:"LENA Ubisense visualization"}),r.a.createElement("p",null,r.a.createElement("em",null,"Visualizing the position of children and when they speak (thickened outline)"))),r.a.createElement("p",null,"From these data recordings, I produced and automated the production of real-time videos for visualization. I also produced network graphs to visualize how each child's social ties looked like. At the end of the summer program for Poster Day, the project that I worked on was among the selected to give a talk."),r.a.createElement("p",null,"As this was one of my first formal experiences with the research process, I learned a great deal about the research process through close interactions with the lab members I worked with over the summer. The skills that I gained here were invaluable to me as I continue to conduct research at Brown.")),iterativedesign:r.a.createElement("div",{id:"iterativedesign-wrapper",className:"project-wrapper"},r.a.createElement("h3",null,"Iterative Design"),r.a.createElement("a",{href:"https://www.figma.com/proto/r5GTTLw9RNO7t30d4gRBjp/GitStart?node-id=36%3A4&scaling=scale-down",target:"_blank"},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:"images/projects/gitstart.jpg",alt:"gitstart redesign"}),r.a.createElement("p",null,r.a.createElement("em",null,"Click to visit page.")))),r.a.createElement("p",null,"GitStart is a startup that aims to revolutionize how companies can outsource software development. GitStart connects independent developers with companies and uses repository-specific rankings to make the on-boarding process automatic. If a company likes the work of a specific developer, they can hire them. I and two other Brown students (Chris and Elizabeth) decided to apply the process of iterative design in creating a desktop app for GitStart, which we refined iteratively through a couple stages of critiques and usertesting feedback."),r.a.createElement("p",null,"Before we began the sketching process of our iterative design, we asked ourselves a few questions to understand our target audience:"),r.a.createElement("p",null,r.a.createElement("strong",null,"What is a group of people that will be directly impacted by your interface?"),r.a.createElement("br",null),"There are two groups of people that will be directly impacted by this interface. The first group consists of any companies that outsource their software development. The second group consists of independent developers seeking work. Through the interface, these two groups can connect with each other and mutually benefit each other. GitStart works as a mediator between the two groups to ensure trust and establish a common infrastructure."),r.a.createElement("p",null,r.a.createElement("strong",null,"What is a group of people that will be indirectly impacted by your interface?"),r.a.createElement("br",null),"Customers of companies that outsource their software development work are impacted indirectly by this interface. It is difficult to exactly determine the make-up of this group as it depends on what type of companies use GitStart."),r.a.createElement("p",null,r.a.createElement("strong",null,"How are these groups affected by your interface? What are some questions that your interface should address to ethically handle these effects?"),r.a.createElement("br",null),"All of these groups should be positively affected by this interface. Software companies can outsource projects with trust and independent developers can find reliable work. Then, with the increased amount of productivity, company customers can benefit as well. In terms of ethics, the interface must ensure that the independent developers do not cheat their work for the companies. Additionally, the interface must make sure that companies properly pay their outsourced developers."),r.a.createElement("p",null,"Next, we produced four sets of four sketches to brainstorm ideas for our prototype:"),r.a.createElement("div",{id:"sketchsetgrid"},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:"images/projects/sketchA.jpg",alt:"sketch set A"}),r.a.createElement("p",null,r.a.createElement("em",null,"Sketch Set A"))),r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:"images/projects/sketchB.jpg",alt:"sketch set B"}),r.a.createElement("p",null,r.a.createElement("em",null,"Sketch Set B"))),r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:"images/projects/sketchC.jpg",alt:"sketch set C"}),r.a.createElement("p",null,r.a.createElement("em",null,"Sketch Set C"))),r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:"images/projects/sketchD.jpg",alt:"sketch set D"}),r.a.createElement("p",null,r.a.createElement("em",null,"Sketch Set D")))),r.a.createElement("p",null,"With sketches in hand, we proceeded to creating our high-fidelity prototype. In doing so, we took the elements that we liked the best from each of our four sketch sets. For instance, we used the left-hand-side navbar design and clickable dropdown items from sketch set D, some of the button elements for the recruiter side from sketch set A and B, as well as some aspects of the homepage and developer elements from sketch set C. The elements in our prototype were more elaborately planned out than in our sketches, for instance in the dropdown elements on both the developer and recruiter workspaces. We also added some new elements that were not in our sketches, such as the tabbing (e.g. separating the owned projects, developers, code reviews) present in each dashboard. Since we wanted our prototype to just contain enough screens to get the idea across, we did not end up including all the features that we had originally sketched out, and picked only the pages that we thought were essential to the startup but went more in depth with these pages."),r.a.createElement("p",null,"We had the opportunity to present our initial prototype in a critique session from which we received some highly valuable feedback. Overall, we received positive comments about the simplicity and cleanliness of our prototype, although there was some criticism about the potential for navigation features to be confusing. We agreed with this feedback and subsequently improved our prototype by removing the ambiguous navbar item for accessing the developer workspace from the top of the homepage. We kept only the behavior that was consistent with how one would access the recruiter workspace, and reserved the homepage navbar items to only point to informational pages, i.e. \u2018About\u2019, \u2018Pricing\u2019, and \u2018Join Us\u2019. We also observed a desire for more information and functionalities within the developer and recruiter workspaces, e.g. providing a way for the developer to contact a recruiter. We kept to the essential functions of the startup in our prototype and did not add in all of these new features even though we agreed that they would be useful, but we began to add some of these features to the left-hand-side navbar of each respective workspace as a proof of concept, and made a note to include more such icons in that space in future iterations."),r.a.createElement("p",null,"By now, we were ready to get even more feedback about our prototype from other users. This would allow us to make further refinements to our app. We used UserTesting.com to conduct three quick tests from random users online (we did not specify any demographics)."),r.a.createElement("p",null,r.a.createElement("b",null,"Our Hypothesis"),": Despite the somewhat complex and two-sided nature of the application, users (even those without prior knowledge of Github) will still be able to intuitively navigate through and complete the provided tasks."),r.a.createElement("p",null,"We asked our testers to navigate through the pages on both the developer\u2019s side and the recruiter\u2019s side. We obtained results for three users which we will henceforth refer to as User 1, User 2, and User 3. Our results showed a large difference in the developer vs recruiter experience. The main issue that arose in the user testing was making the transition between developer and recruiter tasks. This is evident in the large difference between sub-task 2 and sub-task 3. Additionally, the developer tasks had a much shorter average \u201cTime on Task\u201d than the recruiter tasks, and reported 0 errors compared to the 8 errors on the recruiter side. In analyzing the users on a case by case basis, it became evident that our initial hypothesis was incorrect. User 1 experienced minimal errors, and had the best overall review of the site. This is in contrast with Users 2 and 3 who explicitly mentioned having no idea about the purpose of the site, or what certain terms were referencing. This had a clear effect on their performance as both of these users had much more errors on average, and much longer \u201cTime on Task\u201d averages. Most of these errors were due to misunderstandings in the tasks, which lead them to click around the site more often and get distracted from the main task."),r.a.createElement("p",null,"Concerning their overall review of the site, User 1 was the most happy as they mentioned how intuitive the site navigation was. Users 2 and 3 had similar reviews in how they disagreed overall with the aesthetic of the site, claiming it was a bit unprofessional. Additionally, they addressed how hard it would be for a first time user to navigate the site as there is a lack of explanation of key words and functionalities."),r.a.createElement("p",null,r.a.createElement("b",null,"Potential Changes"),":",r.a.createElement("br",null),"Most users had no problems with the intuitiveness and overall design of the site. The main problems came from users who had no prior knowledge of the field of work that this startup is targeting. As such, in order to make this a better experience for recruiters who may come from similar backgrounds, we would like to add tutorial functionality and other text reminders that help guide users through the site. This would come in the form of basic text that accompanies icons on the sidebar, a walk through tutorial when users initially sign up, and reminders that pop up over any text or icons that the user hovers their mouse over."),r.a.createElement("p",null,r.a.createElement("b",null,"Testing Experience"),":",r.a.createElement("br",null),"The main takeaway from the testing experience was the importance of recognizing a demographic when choosing subjects to test on. For this prototype in particular, there were no specifications when setting up the test order, and this proved to be a problem when reviewing the user recordings. Two of the three users had issues with the aesthetic and understanding of terms that were on the site which added to their confusion. This lead to some critique points that weren\u2019t necessarily relevant to what we were targeting to get answered. However, the analysis address some problems that this startup will potentially face in the future as they establish themselves. This method of testing proved to be effective, and if given the chance to use it again, we would spend more time focusing on our target demographic and establishing post-test questions more specific to our goals.")),placeholder:r.a.createElement("div",{id:"placeholder-wrapper"},r.a.createElement("h3",null,"Placeholder Project"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam. Sed odio morbi quis commodo odio. Vel pharetra vel turpis nunc eget lorem. In cursus turpis massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. Gravida arcu ac tortor dignissim convallis aenean et. Ornare suspendisse sed nisi lacus. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Massa sapien faucibus et molestie. Proin sed libero enim sed faucibus turpis. Sagittis aliquam malesuada bibendum arcu. Mollis nunc sed id semper. Velit scelerisque in dictum non consectetur a. Habitant morbi tristique senectus et netus et malesuada."),r.a.createElement("p",null,"Etiam tempor orci eu lobortis elementum nibh tellus molestie. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Eget duis at tellus at urna condimentum mattis pellentesque id. Id ornare arcu odio ut sem nulla. Habitant morbi tristique senectus et netus et malesuada. Ut etiam sit amet nisl purus in mollis nunc. Est velit egestas dui id ornare arcu odio ut. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Sed elementum tempus egestas sed sed risus pretium quam vulputate. In nisl nisi scelerisque eu ultrices vitae auctor eu. Et odio pellentesque diam volutpat commodo. Auctor augue mauris augue neque gravida in fermentum et. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Arcu odio ut sem nulla pharetra."),r.a.createElement("p",null,"Dui id ornare arcu odio. In hac habitasse platea dictumst. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Sed libero enim sed faucibus turpis in. Gravida neque convallis a cras semper auctor neque vitae. Quis ipsum suspendisse ultrices gravida dictum fusce. A iaculis at erat pellentesque. Mattis aliquam faucibus purus in massa tempor nec feugiat. A cras semper auctor neque vitae tempus quam pellentesque nec. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. In mollis nunc sed id semper."),r.a.createElement("p",null,"Sed risus ultricies tristique nulla aliquet. Volutpat lacus laoreet non curabitur gravida arcu ac. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Viverra orci sagittis eu volutpat odio facilisis mauris. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Justo laoreet sit amet cursus sit amet. Porta lorem mollis aliquam ut porttitor leo a diam. Tellus rutrum tellus pellentesque eu. Sollicitudin ac orci phasellus egestas tellus. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. In nibh mauris cursus mattis molestie. Urna id volutpat lacus laoreet non curabitur. Est placerat in egestas erat imperdiet sed euismod nisi."))},j=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return r.a.createElement("div",{key:e.title,className:"columns portfolio-item"},r.a.createElement("div",{className:"item-wrap"},r.a.createElement("img",{alt:e.title,src:t}),r.a.createElement(y,{title:e.title,category:e.category,content:N[e.contentKey]})))}));return r.a.createElement("section",{id:"portfolio"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns collapsed"},r.a.createElement("h1",null,"Take a Look at Some of My Works."),r.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-halves s-bgrid-thirds cf"},e))))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"getResumeData",value:function(){p.a.ajax({url:"resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,a){console.log(a),alert(a)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,{data:this.state.resumeData.main}),r.a.createElement(j,{data:this.state.resumeData.portfolio}),r.a.createElement(w,{data:this.state.resumeData.main}),r.a.createElement(v,{data:this.state.resumeData.resume}),r.a.createElement(g,{data:this.state.resumeData.main}))}}]),t}(n.Component),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(r.a.createElement(T,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/portfolio","/service-worker.js");O?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):S(e)}))}}()}},[[13,1,2]]]);
//# sourceMappingURL=main.e62cdae9.chunk.js.map