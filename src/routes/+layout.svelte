<script type="ts">
	// learn: stackoverflow.com/questions/64245188/how-to-differentiate-between-svelte-dev-mode-and-build-mode#answer-68074574
	import { dev, browser } from '$app/environment';

	import Gutter from './Gutter.svelte';
	import Header from './Header.svelte';
	// import './styles.css';
	import './tachyon.shower.css';
	
</script>
<!-- <Header /> -->
<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	
	<footer class="pb5 h2">
		<Gutter >
			<div class="flex flex-row justify-between">
				<a class="b link o-70 inherit hover-o-100 b--black bb bw0 transition hover-bw1 pt2 system f7 tracked ttu fs-normal" href="https://www.instagram.com/biodesign.foundation/">Instagram</a>
				<a class="b link o-70 inherit hover-o-100 b--black bb bw0 transition hover-bw1 pt2 system f7 tracked ttu fs-normal" href="https://www.facebook.com/BioDesign-Foundation-109688911444258">Facebook</a>
				<a class="b link o-70 inherit hover-o-100 b--black bb bw0 transition hover-bw1 pt2 system f7 tracked ttu fs-normal" href="https://m.youtube.com/@biodesignfoundation2156/videos">Youtube</a>
			</div>
		</Gutter>
		<!-- <p>Unlock value from your data using <a href="https://instantwebapp.com">InstantWebapp</a>, in English &amp; Italian</p> -->
		

	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
	
	/* :global(.hover-shadow-5:hover) { box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2) } */
	:global(.hover-bw2:hover),
	:global(.hover-bw2:active) {
		border-width: 0.25rem
	}

	:global(.hover-bw1:hover),
	:global(.hover-bw1:active) {
		border-width: 0.125rem
	}
</style>

<svelte:head>
	{#if !dev }
		<script
		defer
		src="https://unpkg.com/@tinybirdco/flock.js"
		data-host="https://api.tinybird.co" data-token="p.eyJ1IjogImE0MTA3ZGE5LWNjZDItNDUxZi1hOWRjLTk5YzA3OGM3NmIwNSIsICJpZCI6ICJhYjU5OTgyOS01ODFlLTRlZTctYTMwNi00Nzg3OTNmZjk3OTIifQ.j1_UjsZl1wu5Gcxb9l9bPeyfFRAC1eQfpLkv_mLV_fs"></script>
	{/if}
</svelte:head>