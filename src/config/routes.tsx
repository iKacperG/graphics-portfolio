import Homepage from '../components/Homepage/Homepage';
import Gallery from '../components/Gallery/Gallery';
import About from '../components/About/About';

export const routes = [
  {
    name: 'route_homepage',
    path: '/',
    component: <Homepage />
  },
  {
    name: 'route_gallery',
    path: '/gallery',
    component: <Gallery />
  },
  {
    name: 'route_about',
    path: '/about',
    component: <About />
  },
];
