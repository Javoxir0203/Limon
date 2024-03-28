import About from '@/components/about';
import App_store from '@/components/app_store';
import Aside from '@/components/aside';
import Card from '@/components/card';
import Cards from '@/components/cards';
import Download from '@/components/download';
import Hero from '@/components/hero';
import Main from '@/components/main';
import Payment from '@/components/public';
import Section from '@/components/section';
import React from 'react';

const Home = () => {
	return (
		<div>
			<About />
			<Section />
			<Main />
			<Aside />
			<Cards />
            <Payment/>
            <Card/>
            <Download/>
            <App_store/>
			<Hero />
		</div>
	);
};

export default Home;
