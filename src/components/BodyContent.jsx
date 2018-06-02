import React from 'react';
import ReactDOM from 'react-dom';

import ProjectsList from './../data/projects.json';
import SkillsList from './../data/skills.json';

import scrollToElement from 'scroll-to-element';

export class HeroSection extends React.Component {

	render () {
		return (

			<section id = "hero__sect">

				<header>
					Hi. I'm Javier.
				</header>

				<div id = "phrase__wrapper">
					<span class = "one phrase">
						Web Developer.
					</span>

					<span class = "two phrase">
						Student.
					</span> 

					<span class = "three phrase">
						Gamer.
					</span>
				</div>

				<button class = "more__btn" onClick = { () => { scrollToElement('#projects__sect'); } } >More About Me</button>

			</section>

		);

	}

}

export class ProjectsSection extends React.Component  {

	constructor (props) {
		super(props);

		this.state = {
			
			projectsArr: ProjectsList.list,

			renderedItemList: null

		}

	}

	componentDidMount () {

		let _renderedItemList = this.state.projectsArr.map ( (item, i) => {

				return (

						<div class = "card__item" key = {i}>
							<div class = "thumb_wrapper">
								<img alt = "thumbnail"  src = {"images/sites/" +  item.screens[0] } />
							</div>

							<div class = "details_wrapper ">
								<p class = "name">
									{ item.name }
								</p>
							</div>
						</div>

				);

		});

		this.setState( {
			renderedItemList: _renderedItemList
		} );

	}

	render () {

		return (

			<section id = "projects__sect">

				<header>
					My Projects
				</header>

				<div class = "card__wrapper">

					{ this.state.renderedItemList }

				</div>

			</section>

		);
	}

}

export class SkillsSection extends React.Component {

	constructor (props) {
		
		super(props);

		this.state = {

			skillsArr: SkillsList.list,

			renderedItemList: null

		}

	}

	componentDidMount () {

		let _renderedItemList = this.state.skillsArr.map( (item, i) => {

			return ( 

				<li>{ item.name }</li>

			);

		} );

		this.setState( {

			renderedItemList: _renderedItemList

		});

	}


	render () {
		return (

			<section id = "skills__sect">

				<div class = "content_wrapper">

					<header>
						My Skills
					</header>

					<div class = "rounded__line"></div>

					<p>
						I am knowledgeable and proficient with several technologies.
					</p>

					<ul>
						{ this.state.renderedItemList }
					</ul>
				</div>

				<div class = "logos_wrapper">

				</div>
			</section>

		);
	}
}

export class ContactSection extends React.Component {

	render () {

		return (

			<section id = "contact__sect">

				<header>
					Get In Contact
				</header>

				<form id = "form_wrapper" method = "POST" action = "https://formspree.io/javierminchala@gmail.com">

					<label>

						<p> Your Name </p>

						<input name = "username" type = "text" required />

					</label>

					<label>

						<p> Your email </p>

						<input name = "email" type = "email" required />

					</label>

					<label>

						<p> Your Message </p>

						<textarea name = "message"></textarea>

					</label>

					<input type = "submit" value = "Send" />

				</form>

			</section>

		);

	}

}