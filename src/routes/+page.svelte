<script>
	import Gutter from './Gutter.svelte';
	import banner from '$lib/images/custodians.webp';
</script>	
<Gutter>
	<main class="lh-copy highlight ph3 ph0-m ph0-l pb5 ">
		<header class="w-100 flex justify-around">
			<img src="{banner}" alt="The Custodians || An Ethical Think Tank" class="w-third" />
		</header>
		<h1 id="hci-for-ai" class="tc sr-only">The Custodians</h1>
		<h2 class="tc sr-only">An Ethical Think Tank</h2>
		<p>The “Custodians” are the think tank of the <a class="b link o-70 inherit hover-o-100 b--black bb bw0 transition hover-bw1 pt2 system f7 tracked ttu fs-normal" href="https://biodesignfoundation.org/en/custodians-3/">BioDesign Foundation</a>, they are the <em>guardians of the future</em>.</p>
		<p>Being a Custodian means looking for solutions to protect nature. Custodians are actively involved in cleaning up beaches, rivers and oceans or wherever action is needed to restore the beauty of nature.</p>
		<p>First and foremost, Custodians of the Future strive to live a healthy and ethical lifestyle, respectful of the environment and the beauty in which they live.</p>
		<p>Those who can, actively help and support the activities with material and other resources.</p>
		<h3 class="">Resources</h3>
		<ul class="list ma0 pl0">
			<li><a class="b link o-70 inherit hover-o-100 b--black bb bw0 transition hover-bw1 pt2 system f7 tracked ttu fs-normal" href="https://biodesignfoundation.org/wp-content/uploads/2023/06/Web-Brochure-BioDesign-Foundation-EN.pdf">Brochure</a></li>		
			<li><a class="b link o-70 inherit hover-o-100 b--black bb bw0 transition hover-bw1 pt2 system f7 tracked ttu fs-normal" href="https://github.com/inspiredlabs/custodians/blob/master/README.md">Github</a></li>
		</ul>
	
		<!-- <h4 id="by-scott-phillips">About Scott Phillips</h4>
		<p>I am an Interaction Design specialist, experienced in information architecture and graphic communication. Here's <a class="b link o-70 inherit hover-o-100 b--black bb bw0 transition hover-bw1 pt2 system f7 tracked ttu fs-normal" href="https://www.instantwebapp.com/">my portfolio</a>. -->
	
	</main>
</Gutter>


<style>

.sr-only:not(:focus):not(:active) {
	clip: rect(0 0 0 0); 
	clip-path: inset(50%);
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap; 
	width: 1px;
}

</style>