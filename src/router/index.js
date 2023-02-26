import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Stations from '@/views/Stations.vue'
import Map from '@/views/Map.vue'
import journey from '@/views/journey.vue'
import Hero from '@/views/Hero.vue'
import singleStation from '@/views/singleStation.vue'

const routes = [
	{
		name: 'Home',
		path: '/journey',
		component: Home
		
	},
	{
		name: 'Hero',
		path: '/',
		component: Hero
		
	},
	{
		name: 'journey',
		path: '/singlejourney/:id',
		component: journey
	},
	{
		name: 'station',
		path: '/singlestation/:id',
		component: singleStation
	},
	
	{
		name: 'Stations',
		path: '/stations',
		component: Stations,

	

	},
	
	{
		name: 'Map',
		path: '/map/:id',
		component: Map
	},
	
	{
		name: 'About',
		path: '/about',
		component: () => import('@/views/About.vue')
	},
	{
		name: 'Blank',
		path: '/blank',
		component: () => import('@/views/Blank.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
