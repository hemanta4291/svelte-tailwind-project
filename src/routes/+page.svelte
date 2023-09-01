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
	
	<div class="layout-container">
		<div class="layout-one common">1</div>
		<div class="layout-two common">2</div>
		<div class="layout-three common">3</div>
		<div class="layout-four common">4</div>
		<div class="layout-five common">5</div>
		<div class="layout-six common">6</div>
		<div class="layout-seven common">7</div>
	</div>


	<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
		<div class="shrink-0">
		  <!-- <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"> -->
		  ok
		</div>
		<div>
		  <div class="text-xl font-medium text-black">ChitChat</div>
		  <p class="text-slate-500">You have a new message!</p>
		</div>
	  </div>
</section>

<style>
	/* .layout-container{
		display: grid;
		grid-template-columns: repeat(12,1fr);
		grid-template-rows: repeat(6,1fr);
		width: 100%;
		height: 400px;
		grid-gap: 8px;
		grid-template-areas: 
			"l1 l1 l2 l2 l2 l2 l3 l3 l3 l3 l3 l3"
			"l1 l1 l2 l2 l2 l2 l3 l3 l3 l3 l3 l3"
			"l1 l1 l2 l2 l2 l2 l5 l5 l5 l5 l6 l6"
			"l4 l4 l2 l2 l2 l2 l5 l5 l5 l5 l6 l6"
			"l4 l4 l2 l2 l2 l2 l5 l5 l5 l5 l6 l6"
			"l7 l7 l7 l7 l7 l7 l5 l5 l5 l5 l6 l6"
		;
	
	}
	.common{
		background-color: black;
		color: white;;
	}
	.layout-one{
		background-color: red;
		grid-area: l1;
	}
	.layout-two{
		grid-area: l2;
	}
	.layout-three{
		grid-area: l3;
	}
	.layout-four{
		grid-area: l4;
	}
	.layout-five{
		grid-area: l5;
	}

	.layout-six{
		grid-area: l6;
	}
	.layout-seven{
		grid-area: l7;
	} */



	.layout-container{
		display: grid;
		grid-template-columns: repeat(12,1fr);
		grid-template-rows: repeat(6,1fr);
		grid-gap: 8px;
		height: 500px;
		border: 1px solid #f00;
	}


	.common{
		background-color: black;
		color: white;
	}
	/* .layout-one{
		grid-column: 1 / 3;
		grid-row: 1 / 4;
		
	}
	.layout-two{
		grid-column: 3 / 7;
		grid-row: 1 / 6;
	}
	.layout-three{
		grid-column: 7 / -1;
		grid-row: 1 / 3;
	}
	.layout-four{
		grid-column: 1 / 3;
		grid-row: 3 / -1;
	}

	.layout-five{
		grid-column: 7 / 11;
		grid-row: 3 / 7;
	}

	.layout-six{
		grid-column: 11 / -1;
		grid-row: 3 / 7;
	}

	.layout-seven{
		grid-column: 3 / 11;
		grid-row: 6 / -1;
	} */
	

	@media only screen and (max-width: 768px) {
		.layout-container{
			/* grid-template-columns: repeat(4,1fr);
			grid-template-areas: 
			"l1 l1 l1 l1 l1 l1 l1 l1 l1 l1 l1 l1"
			"l2 l2 l2 l2 l2 l2 l2 l2 l2 l2 l2 l2"
			"l3 l3 l3 l3 l3 l3 l3 l3 l3 l3 l3 l3"
			"l4 l4 l4 l4 l4 l4 l4 l4 l4 l4 l4 l4"
			"l5 l5 l5 l5 l5 l5 l5 l5 l5 l5 l5 l5"
			"l6 l6 l6 l6 l6 l6 l6 l6 l6 l6 l6 l6"
		;
		} */

		grid-template-columns: repeat(4,1fr);


		}
		
	}

</style>
