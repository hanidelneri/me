import App from './App.svelte';
import "animate.css"

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;