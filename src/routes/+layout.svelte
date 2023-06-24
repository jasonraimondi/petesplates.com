<script>
	import '../app.css';
	import Flag from '../components/flag/Flag.svelte';

	const year = new Date().getFullYear();
</script>

<div class="container mx-auto px-4 flex flex-col h-full">
	<main class="flex-1">
		<slot />
	</main>

	<footer class="text-center my-4 h-50">
		<p class="text-sm pb-2 font-medium">Built in in St. Pete, Fl.</p>
		<p class="text-xs">Copyright &copy; {year}</p>
	</footer>
</div>
