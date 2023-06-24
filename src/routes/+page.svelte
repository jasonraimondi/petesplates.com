<script>
	import Flag from '../components/flag/Flag.svelte';

	const subject = "Hey, I'm interested in a plate!";
	const body = "Pete's Plates!";
</script>

<div class="h-full">
	<div
		id="animated"
		class="h-full bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 pb-20 mb-20 rounded-b-3xl"
	>
		<div class="h-full flex flex-col justify-center items-center">
			<div class="max-w-prose text-center px-4">
				<p class="text-5xl pb-4">👋</p>
				<p>
					Shoot <a class="font-semibold hover:underline" href="https://jasonraimondi.com">me</a> an
					email at
					<a
						class="font-semibold hover:underline"
						href="mailto:jason@petesplates.com?subject={subject}&body={body}"
						>jason@petesplates.com</a
					> if you're interested in grabbing one of these plates!
				</p>
				<div class="mt-4 text-lg flex justify-evenly pb-30">
					<div
						class="w-40 py-8 bg-white/75 border border-black rounded-2xl flex flex-col justify-center items-center"
					>
						<!--						<span class="mb-4">-->
						<!--							<Flag />-->
						<!--						</span>-->
						<strong>$25</strong>
						<span>With Logo</span>
					</div>
					<div
						class="w-40 py-8 bg-white/75 border border-black rounded-2xl flex flex-col justify-center items-center"
					>
						<!--						<span class="mb-4">-->
						<!--							<Flag />-->
						<!--						</span>-->
						<strong>$35</strong>
						<span>Without Logo</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	#animated {
		background-size: 200% 200%;
		animation: gradient 15s ease infinite;
	}

	@keyframes gradient {
		0% {
			background-position: 0 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0 50%;
		}
	}
</style>
