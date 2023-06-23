<script>
	import '../app.css';
	import Flag from '../components/flag/Flag.svelte';

	const year = new Date().getFullYear();
</script>

<div id="container" class="container mx-auto">
	<main>
		<slot />
	</main>
	<footer class="text-center my-4">
		<div class="flex justify-center pb-4">
			<Flag />
		</div>
		<p class="text-sm pb-2 font-medium">Built in in St. Pete, Fl.</p>
		<p class="text-xs">Copyright &copy; {year}</p>
	</footer>
</div>

<style>
	#container {
		display: grid;
		grid-template-rows: 1fr auto;
		height: 100%;
	}
</style>
