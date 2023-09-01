<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	
	<div class="layout-container h-[calc(100vh-48px)] grid grid-cols-12 grid-rows-6">
		<div class="layout-one col-[1/3] row-[1/4] bg-blue-400">1</div>
		<div class="layout-two col-[3/7] row-[1/6] bg-rose-100">2</div>
		<div class="layout-three col-[7/-1] row-[1/3] bg-blue-400">3</div>
		<div class="layout-four col-[1/3] row-[4/6] bg-teal-400">4</div>
		<div class="layout-five col-[7/11] row-[3/7] bg-yellow-100 grid justify-center items-center">
			<div class="mountain-container">
				<div class="mountain-inner bg-yellow-100">
					<div class="mountain-sticker"></div>
				</div>
			</div>
		</div>
		<div class="layout-six col-[11/-1] row-[3/7] bg-emerald-400">6</div>
		<div class="layout-seven col-[1/7] row-[6/-1] bg-fuchsia-400">7</div>
	</div>

</section>

<style>
	.mountain-container{
		width: 400px;
		height: 100%;
		max-height: 400px;
		background: #000;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.mountain-container .mountain-inner{
		width: 100%;
		max-width: 300px;
		height: 100%;
		max-height: 300px;
		border-radius: 50%;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		position: relative;

	}

	.mountain-container .mountain-sticker {
		width: 150px;
      height: 100px;
      transform: skew(20deg);
      background: red;
    }
    .mountain-container .mountain-sticker:after {
		/* content: '';
      position: absolute;
      left: -50px;
      top: 70px;
      width: 0;
      height: 0;
      border: 50px solid transparent;
      border-top: 70px solid red; */

    }

</style>
