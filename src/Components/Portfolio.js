import React, { Component } from 'react';

import ControlledPopup from "./ControlledPopup"
import {GalarPokemonProject, AbotProject, PlaceholderProject, MiamiResearchProject} from './Projects';

const content = {"abot": AbotProject, "galarpokemon": GalarPokemonProject, "umreu": MiamiResearchProject, "placeholder": PlaceholderProject}
class Portfolio extends Component {

  render() {
    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
               <img alt={projects.title} src={projectImage}/>
               <ControlledPopup title={projects.title} category = {projects.category} content={content[projects.contentKey]}/>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Take a Look at Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
