import React from 'react';

export const GalarPokemonProject = (
  <div id="galarpokemon-wrapper">
    <h3>
      Galar Pokemon App
    </h3>
    <a href="https://galar-pokemon.herokuapp.com/" target="_blank">
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
      <img src="images/projects/reactlogo.png" alt="react logo"/>
      <p></p>
    </div>
    <p>Through the process of implementing this app, I gained a lot of experience with using React components as well as how JavaScript in React can be used in a 
      general way to handle arbitrarily many sorts/filters on data of arbitrarily sized length. This was also my first time deploying an app on Heroku, and I found 
      it to be very easy to do since I could just import my app directly from Github and use the <code>npm run build</code> command. </p>
    <p>All images of Pokemon used are courtesy of <a href="http://www.serebii.net">serebii.net</a>.</p>
  </div>
);

export const AbotProject = (
  <div id="abot-wrapper">
      <h3>
        ABOT Database Website
      </h3>
      <a href="https://www.abotdatabase.info" target="_blank">
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
      <img src="images/projects/nodemongologo.png" alt="node mongo logo"/>
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
  <div id="umreu-wrapper">
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam. Sed odio morbi quis commodo odio. Vel pharetra vel turpis nunc eget lorem. In cursus turpis massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. Gravida arcu ac tortor dignissim convallis aenean et. Ornare suspendisse sed nisi lacus. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Massa sapien faucibus et molestie. Proin sed libero enim sed faucibus turpis. Sagittis aliquam malesuada bibendum arcu. Mollis nunc sed id semper. Velit scelerisque in dictum non consectetur a. Habitant morbi tristique senectus et netus et malesuada.
    </p>
  </div>
);

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
