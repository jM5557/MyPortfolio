import React from 'react';
import ReactDOM from 'react-dom';
import scrollToElement from 'scroll-to-element';

export class Header extends React.Component {

	render () {
		return (
			<header id = "top__header">
				<nav>
					<a id = "top__logo" href = "">
						<img alt = "Javier Minchala logo" src = "images/jm-logo-black.png" />
					</a>
					<ul>
						<li onClick = {() => { scrollToElement('#projects__sect'); } }>Projects</li>

						<li onClick = {() => { scrollToElement('#skills__sect'); } }>Skills</li>

						<li onClick = {() => { scrollToElement('#contact__sect'); } } >Contact</li>
					</ul>
				</nav>
			</header>
		);
	}
	
}