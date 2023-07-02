<div class="flex flex-column mr-auto ml-auto w-100 ph2 ph3-m ph0-l w-100 w-80-m mw-custom-l">
	<slot />
</div>

<style>
	@media screen and (min-width: 60em) {
		:global(.mw-custom-l) {
			max-width: 36rem; /* usage: `<p>One two three four five six seven eight nine ten eleven.</p>` */
		}
	}
</style>