import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Cocktails from './components/Cocktails.jsx'
import About from './components/About.jsx'
import Art from './components/Art.jsx'
import Menu from './components/Menu.jsx'
import Contact from './components/Contact.jsx'

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
return (
	<main style={{
		backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,1), rgba(0,0,0,0.6)), url("/images/bg.jpg")',
		backgroundSize: 'auto',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundAttachment: 'fixed'
	}}>
		<Navbar />
		<Hero />
		<Cocktails />
		<About />
		<Art />
		<Menu />
		<Contact />
	</main>
)
}

export default App
