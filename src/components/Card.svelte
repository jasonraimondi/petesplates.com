<script lang="ts">
	export let logo: string;
	export let title: string;
	export let subtitle: string;
	export let description: string;
	export let price: string;
	export let cartUrl: string;
</script>

<article class="w-full flex flex-col bg-white shadow-lg rounded-lg">
	<div class="p-4">
		<header class="flex flex-col md:flex-row justify-between">
			<h2 class="text-2xl font-bold mb-4">
				{title} <span class="text-sm font-semibold">({subtitle})</span>
			</h2>
			<p class="text-gray-700 mb-4 md:text-3xl font-bold">{price}</p>
		</header>
		<section class="pt-4 pb-6 flex-1">
			<img src={logo} alt="" class="rounded-3xl" />
			<p class="text-gray-600 mt-4 leading-tight">{description}</p>
		</section>
		<footer class="flex justify-end">
			<a
				href={cartUrl}
				target="_blank"
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				Purchase
			</a>
		</footer>
	</div>
</article>
