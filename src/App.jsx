import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/partials/Header.jsx';

import { 
	HeroSection, 
	ProjectsSection,
	SkillsSection,
	ContactSection
} from './components/BodyContent.jsx';

export let App = function () {

	return (
		<div>
			<Header />

			<HeroSection />

			<ProjectsSection />

			<SkillsSection />

			<ContactSection />

		</div>
		
	);
}
