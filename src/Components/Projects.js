import React from 'react';

export const GalarPokemonProject = (
  <div id="galarpokemon-wrapper" className="project-wrapper">
    <h3>
      Galar Pokemon App
    </h3>
    <a href="https://leonlei.com/galarpokemon/" target="_blank">
      <div className="image-wrapper">
        <img src="images/projects/galarpokemon.jpg" alt="galar pokemon app"/>
        <p><em>Click to visit page.</em></p>
      </div>
    </a>
    <p>
      This app implented with React allows users to browse all 400 Pokemon in the Galar Region (as presented in the new Pokemon Sword and Shield video games). 
      Users can search for and filter Pokemon by their different Types (e.g. Fire, Water, Grass) or by their base stats, as well as sort 
      them by Pokedex number or by total base stats. Through this app, users are able to efficiently look up the image and stats of a Pokemon 
      in the Galar Pokedex, as well as quickly determine which Pokemon have the highest total base stats, highest stats in a particular category, etc.
    </p>
    <p>
      The interface is designed with user efficiency in mind, for example by providing a compact area in which all the pokemon's stats are 
      visible at a glance as well as keeping a search feature for quick lookup of a given Pokemon. The dropdowns provided for filtering 
      and sorting are intuitive to use and descriptive enough that users will have an idea of what effect applying each filter or sort would have. 
      Furthermore, the filters, sort, and search can be applied together in any combination such that there is no inconsistent behavior. A message 
      is also displayed that makes clear to the user which filters have already been applied. The App uses several React components, most importantly 
      a <code>FilteredList</code> component which is passed in several props containing Pokemon stats and image data from the main <code>App.js</code>. Changes in this component's 
      state can be triggered by selecting which filters/sort to use, or by typing in the search bar. Additional components used include a <code>Pokemon</code> component 
      which has props for a individual Pokemon's data/images, as well as a state for keeping track of whether a given Pokemon has been toggled or not 
      (to display its shiny form). There is also a <code>RainbowHeader</code> component that takes as a prop the text used to create the header, and has a state to keep 
      track of the current color and cycle through a list of colors. Changes in both of these component's states can be triggered when the respective components 
      are clicked.
    </p>
    <div className="image-wrapper">
      <img className="smaller-image" src="images/projects/reactlogo.png" alt="react logo"/>
      <p></p>
    </div>
    <p>Through the process of implementing this app, I gained a lot of experience with using React components as well as how JavaScript in React can be used in a 
      general way to handle arbitrarily many sorts/filters on data of arbitrarily sized length. This was also my first time deploying an app on Heroku, and I found 
      it to be very easy to do since I could just import my app directly from Github and use the <code>npm run build</code> command. </p>
    <p>All images of Pokemon used are courtesy of <a href="http://www.serebii.net">serebii.net</a>.</p>
  </div>
);

export const AbotProject = (
  <div id="abot-wrapper" className="project-wrapper">
      <h3>
        ABOT Database Website
      </h3>
      <a href="http://www.abotdatabase.info" target="_blank">
        <div className="image-wrapper">
          <img src="images/projects/abot.jpg" alt="abot website"/>
          <p><em>Click to visit page.</em></p>
        </div>
      </a>
      <p>
        The ABOT (Anthropomorphic roBOT) Database is a collection of real-world anthropomorphic robots that have been created for 
        research or commercial purposes. As part of a collaborative effort in Spring 2017, I played an integral role in the design 
        and implementation of this website along with Brown students Fawn Tong, Ken Noh, and RISD student Cammy Cha. This was one of my first experiences
        working on a web project with clients (Beth Phillips, Xuan Zhao, and Bertram Malle), and I learned a ton from the back-and-forth process.
      </p>
      <p>
        We implemented the website backend with Node.JS for the server programming and MongoDB for storing data of all the robots. 
        For the frontend, we just used simple HTML, CSS, and JavaScript (no Bootstrap, surprisingly). I was also the primary developer working on the 
        deployment of the website, for which we used Amazon Web Services. I had a blast (not quite, but it was instructive at least)
        setting up the workspace on AWS EC2 as well wrangling with Route 53. There was also some DNS configuration that I needed to get it linked up 
        with the GoDaddy domain.
      </p>
      <div className="image-wrapper">
      <img className="smaller-image" src="images/projects/nodemongologo.png" alt="node mongo logo"/>
      <p></p>
    </div>
      <p>
        In addition to porting over and preserving the major functionalities from the previous version of the website, such as a downloadable robot information list 
        with human-likeness scores, a preview of 200 robots, and a feature-based human-likeness predictor, the new website we created also featured advanced search and filter 
        capabilities, integrated robot information in preview windows, and radar graphs visually representing each robot's human-likeness profile. We also helped to improve 
        the image collection and streamlined the human-likeness predictor.
      </p>
      <div className="image-wrapper">
        <img src="images/projects/abotrobotlist.jpg" alt="abot robot list"/>
        <p>Example of viewing robots on the collection page</p>
      </div>
      <p>
        I really enjoyed working on this project and learned many prominent web technologies while doing so. Our clients were fully satisfied with our work, although in hindsight
        I also learned about many not-so-effective practices in web programming which unfortunately made their way into the site (as is frequently the case when trying something for the first time). Presently, I continue to make modifications and upgrades to the website as the sole developer.
        If I ever find a solid chunk of free time, I would love to recreate the site with my newly gained experience of around 2 years, making the site significantly cleaner
        and more efficient for upkeep.</p>
  </div>
);

export const MiamiResearchProject = (
  <div id="umreu-wrapper" className="project-wrapper">
    <h3>
      University of Miami REU 
    </h3>
    <a href="http://www.cs.miami.edu/reu-cfs/2017/posters/CooperLeiPoster.pdf" target="_blank">
      <div className="image-wrapper">
        <img src="images/projects/umreu.png" alt="university of miami REU"/>
        <p><em>Click to visit page.</em></p>
      </div>
    </a>
    <p>
    Over the summer of 2017, I was a 10-week research intern at the University of Miami. This was under the Computer Science REU 
    (Research Experience for Undergraduates) Program: Computing for Structure.
     The REU was data science focused, and the project that I worked on was a child-developmental psychology project under Professor Daniel Messinger along with another REU student, Samuel. 
     We looked at the effect of language level on a child's social ties and development in a classroom, focusing especially on children with deafness or hard-of-hearing. 
     Using the programming skills that I had picked up so far, I wrote bits of code in Matlab and C# to process and analyzed the large amounts of data produced by 
     two recording devices: LENA and Ubisense. These were worn by each child in the classroom during the observation period, tracking their position in the classroom 
     as well recording their auditory information with a high sampling rate.</p>
     <div className="image-wrapper">
        <img src="images/projects/lenaubivis.gif" alt="LENA Ubisense visualization"/>
        <p><em>Visualizing the position of children and when they speak (thickened outline)</em></p>
      </div>
     <p>From these data recordings, I produced and automated the production of real-time videos for visualization. 
       I also produced network graphs to visualize how each child's social ties looked like. At the end of the summer program for Poster Day, 
       the project that I worked on was among the selected to give a talk.
    </p>
    <p>As this was one of my first formal experiences with the research process, I learned a great deal about the research process through close interactions with the lab members
      I worked with over the summer. The skills that I gained here were invaluable to me as I continue to conduct research at Brown. 
    </p>
  </div>
);

export const IterativeDesignProject = (
  <div id="iterativedesign-wrapper" className="project-wrapper">
    <h3>
      Iterative Design
    </h3>
    <a href="https://www.figma.com/proto/r5GTTLw9RNO7t30d4gRBjp/GitStart?node-id=36%3A4&scaling=scale-down" target="_blank">
      <div className="image-wrapper">
        <img src="images/projects/gitstart.jpg" alt="gitstart redesign"/>
        <p><em>Click to visit page.</em></p>
      </div>
    </a>
    <p>GitStart is a startup that aims to
    revolutionize how companies can outsource software development.
    GitStart connects independent developers with companies and uses
    repository-specific rankings to make the on-boarding process
    automatic. If a company likes the work of a specific developer, they
    can hire them. I and two other Brown students (Chris and Elizabeth) decided to apply the process of
    iterative design in creating a desktop app for GitStart, which we
    refined iteratively through a couple stages of critiques and
    usertesting feedback.</p>

    <p>Before we began the sketching process
    of our iterative design, we asked ourselves a few questions to
    understand our target audience:</p>
    <p><strong>What is a group of people that
      will be directly impacted by your interface?</strong><br/>
      There are two
    groups of people that will be directly impacted by this interface.
    The first group consists of any companies that outsource their
    software development. The second group consists of independent
    developers seeking work. Through the interface, these two groups can
    connect with each other and mutually benefit each other. GitStart
    works as a mediator between the two groups to ensure trust and
    establish a common infrastructure.</p>
    <p><strong>What is a group of people that
      will be indirectly impacted by your interface?</strong><br/>
      Customers of
    companies that outsource their software development work are impacted
    indirectly by this interface. It is difficult to exactly determine
    the make-up of this group as it depends on what type of companies use
    GitStart.</p>
   <p><strong>How are these groups affected by
      your interface? What are some questions that your interface should
      address to ethically handle these effects?</strong><br/>
      All of these groups
    should be positively affected by this interface. Software companies
    can outsource projects with trust and independent developers can find
    reliable work. Then, with the increased amount of productivity,
    company customers can benefit as well. In terms of ethics, the
    interface must ensure that the independent developers do not cheat
    their work for the companies. Additionally, the interface must make
    sure that companies properly pay their outsourced developers.</p>

    <p>Next,
    we produced four sets of four sketches to brainstorm ideas for our
    prototype:</p>

    <div id="sketchsetgrid">
      <div className="image-wrapper">
        <img src="images/projects/sketchA.jpg" alt="sketch set A"/>
        <p><em>Sketch Set A</em></p>
      </div>
      <div className="image-wrapper">
        <img src="images/projects/sketchB.jpg" alt="sketch set B"/>
        <p><em>Sketch Set B</em></p>
      </div>
      <div className="image-wrapper">
        <img src="images/projects/sketchC.jpg" alt="sketch set C"/>
        <p><em>Sketch Set C</em></p>
      </div>
      <div className="image-wrapper">
        <img src="images/projects/sketchD.jpg" alt="sketch set D"/>
        <p><em>Sketch Set D</em></p>
      </div>
    </div>
   
    <p>With sketches in hand, we proceeded to creating our high-fidelity prototype. 
      In doing so, we took the elements that
    we liked the best from each of our four sketch sets. For instance, we
    used the left-hand-side navbar design and clickable dropdown items
    from sketch set D, some of the button elements for the recruiter side
    from sketch set A and B, as well as some aspects of the homepage and
    developer elements from sketch set C. The elements in our prototype
    were more elaborately planned out than in our sketches, for instance
    in the dropdown elements on both the developer and recruiter
    workspaces. We also added some new elements that were not in our
    sketches, such as the tabbing (e.g. separating the owned projects,
    developers, code reviews) present in each dashboard. Since we wanted
    our prototype to just contain enough screens to get the idea across,
    we did not end up including all the features that we had originally
    sketched out, and picked only the pages that we thought were
    essential to the startup but went more in depth with these pages. 
    </p>
    <p>We had the opportunity to present our
    initial prototype in a critique session from which we received some
    highly valuable feedback. Overall, we received positive comments
    about the simplicity and cleanliness of our prototype, although there
    was some criticism about the potential for navigation features to be
    confusing. We agreed with this feedback and subsequently improved our
    prototype by removing the ambiguous navbar item for accessing the
    developer workspace from the top of the homepage. We kept only the
    behavior that was consistent with how one would access the recruiter
    workspace, and reserved the homepage navbar items to only point to
    informational pages, i.e. ‘About’, ‘Pricing’, and ‘Join
    Us’. We also observed a desire for more information and
    functionalities within the developer and recruiter workspaces, e.g.
    providing a way for the developer to contact a recruiter. We kept to
    the essential functions of the startup in our prototype and did not
    add in all of these new features even though we agreed that they
    would be useful, but we began to add some of these features to the
    left-hand-side navbar of each respective workspace as a proof of
    concept, and made a note to include more such icons in that space in
    future iterations. 
    </p>
    <p>By now, we were ready to get even more
    feedback about our prototype from other users. This would allow us to
    make further refinements to our app. We used UserTesting.com to
    conduct three quick tests from random users online (we did not
    specify any demographics).</p>

    <p><b>Our Hypothesis</b>: Despite the
    somewhat complex and two-sided nature of the application, users (even
    those without prior knowledge of Github) will still be able to
    intuitively navigate through and complete the provided tasks.</p>
 
    <p>We asked our testers to navigate
    through the pages on both the developer’s side and the recruiter’s
    side. We obtained results for three users which we will henceforth refer to as User 1, User 2, and User 3.
    Our results showed a
    large difference in the developer vs recruiter experience. The main
    issue that arose in the user testing was making the transition
    between developer and recruiter tasks. This is evident in the large
    difference between sub-task 2 and sub-task 3. Additionally, the
    developer tasks had a much shorter average “Time on Task” than
    the recruiter tasks, and reported 0 errors compared to the 8 errors
    on the recruiter side. In analyzing the users on a case by case
    basis, it became evident that our initial hypothesis was incorrect.
    User 1 experienced minimal errors, and had the best overall review of
    the site. This is in contrast with Users 2 and 3 who explicitly
    mentioned having no idea about the purpose of the site, or what
    certain terms were referencing. This had a clear effect on their
    performance as both of these users had much more errors on average,
    and much longer “Time on Task” averages. Most of these errors
    were due to misunderstandings in the tasks, which lead them to click
    around the site more often and get distracted from the main task. 
    </p>
    <p>Concerning their
    overall review of the site, User 1 was the most happy as they
    mentioned how intuitive the site navigation was. Users 2 and 3 had
    similar reviews in how they disagreed overall with the aesthetic of
    the site, claiming it was a bit unprofessional. Additionally, they
    addressed how hard it would be for a first time user to navigate the
    site as there is a lack of explanation of key words and
    functionalities.</p>
    <p><b>Potential Changes</b>:<br/>
    Most users had no problems with the
    intuitiveness and overall design of the site. The main problems came
    from users who had no prior knowledge of the field of work that this
    startup is targeting. As such, in order to make this a better
    experience for recruiters who may come from similar backgrounds, we
    would like to add tutorial functionality and other text reminders
    that help guide users through the site. This would come in the form
    of basic text that accompanies icons on the sidebar, a walk through
    tutorial when users initially sign up, and reminders that pop up over
    any text or icons that the user hovers their mouse over.</p>
    <p><b>Testing Experience</b>:<br/>
    The main takeaway
    from the testing experience was the importance of recognizing a
    demographic when choosing subjects to test on. For this prototype in
    particular, there were no specifications when setting up the test
    order, and this proved to be a problem when reviewing the user
    recordings. Two of the three users had issues with the aesthetic and
    understanding of terms that were on the site which added to their
    confusion. This lead to some critique points that weren’t
    necessarily relevant to what we were targeting to get answered.
    However, the analysis address some problems that this startup will
    potentially face in the future as they establish themselves. This
    method of testing proved to be effective, and if given the chance to
    use it again, we would spend more time focusing on our target
    demographic and establishing post-test questions more specific to our
    goals.</p>
  </div>
)

export const PlaceholderProject = (
  <div id="placeholder-wrapper">
      <h3>
        Placeholder Project
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam. Sed odio morbi quis commodo odio. Vel pharetra vel turpis nunc eget lorem. In cursus turpis massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. Gravida arcu ac tortor dignissim convallis aenean et. Ornare suspendisse sed nisi lacus. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Massa sapien faucibus et molestie. Proin sed libero enim sed faucibus turpis. Sagittis aliquam malesuada bibendum arcu. Mollis nunc sed id semper. Velit scelerisque in dictum non consectetur a. Habitant morbi tristique senectus et netus et malesuada.
      </p>
      <p>
        Etiam tempor orci eu lobortis elementum nibh tellus molestie. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Eget duis at tellus at urna condimentum mattis pellentesque id. Id ornare arcu odio ut sem nulla. Habitant morbi tristique senectus et netus et malesuada. Ut etiam sit amet nisl purus in mollis nunc. Est velit egestas dui id ornare arcu odio ut. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Sed elementum tempus egestas sed sed risus pretium quam vulputate. In nisl nisi scelerisque eu ultrices vitae auctor eu. Et odio pellentesque diam volutpat commodo. Auctor augue mauris augue neque gravida in fermentum et. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Arcu odio ut sem nulla pharetra.
      </p>
      <p>
        Dui id ornare arcu odio. In hac habitasse platea dictumst. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Sed libero enim sed faucibus turpis in. Gravida neque convallis a cras semper auctor neque vitae. Quis ipsum suspendisse ultrices gravida dictum fusce. A iaculis at erat pellentesque. Mattis aliquam faucibus purus in massa tempor nec feugiat. A cras semper auctor neque vitae tempus quam pellentesque nec. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. In mollis nunc sed id semper.
      </p>
      <p>
        Sed risus ultricies tristique nulla aliquet. Volutpat lacus laoreet non curabitur gravida arcu ac. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Viverra orci sagittis eu volutpat odio facilisis mauris. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Justo laoreet sit amet cursus sit amet. Porta lorem mollis aliquam ut porttitor leo a diam. Tellus rutrum tellus pellentesque eu. Sollicitudin ac orci phasellus egestas tellus. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. In nibh mauris cursus mattis molestie. Urna id volutpat lacus laoreet non curabitur. Est placerat in egestas erat imperdiet sed euismod nisi.
      </p>
  </div>
);
