import React from 'react';

import Section from '../../components/Section/Section';
import Line from '../../components/Line/Line';
import Project from '../../components/Project/Project';

import burgerBuilder from '../../assets/projects/burgerbuilder.png';
import journeyPlanner from '../../assets/projects/journeyplanner.png';

import classes from './Portfolio.module.scss';

const portfolio = () => {
	return (
		<section className={classes.Portfolio}>
			<Section id='portfolio' name='Projects' />

			<p className={classes.Description}>
				Below you will see the tools I use most often, front-end
				development skills I know, and other programming stuff I do. The
				list is constantly expanding as I enjoy learning new things :)
			</p>

			<Line />

			<Project
				icon={''}
				about='Hello'
				built={['ReactJS', 'React Hooks', 'Google Maps API', 'TFL API']}
				github=''
				online=''
			/>

			<Line />

			<Project
				icon={''}
				about='Hello'
				built={['ReactJS', 'Redux', 'React Hooks', 'Google Firebase']}
				github=''
				online=''
			/>

			<Line />

			<Project icon='' about='Hello' built='' view='' />
		</section>
	);
};

export default portfolio;
