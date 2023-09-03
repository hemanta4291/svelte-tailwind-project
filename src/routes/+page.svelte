<script>
	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<!-- h-[calc(100vh-48px)] -->
	<div class="layout-container h-[1024px] sm:h-[780px] grid grid-cols-12 grid-rows-6">
		<div class="layout-one col-[1/-1] sm:col-[1/3] sm:row-[1/4] bg-blue-400"></div>
		<div class="layout-two col-[1/-1] sm:col-[3/7] sm:row-[1/6] bg-rose-100"></div>
		<div class="layout-three col-[1/-1] sm:col-[7/-1] sm:row-[1/3] bg-blue-400"></div>
		<div class="layout-four col-[1/-1] sm:col-[1/3] sm:row-[4/6] bg-teal-400"></div>
		<div class="layout-five col-[1/-1] sm:col-[7/11] sm:row-[3/7] bg-yellow-100 grid justify-center items-center">
			<div class="mountain-container">
				<div class="mountain-inner bg-yellow-100">
					<div class="mountain-sticker"></div>
				</div>
			</div>
		</div>
		<div class="layout-six col-[1/-1] sm:col-[11/-1] sm:row-[3/7] bg-emerald-400"></div>
		<div class="layout-seven col-[1/-1] sm:col-[1/7] sm:row-[6/-1] bg-fuchsia-400"></div>
	</div>

</section>

<style>
	.mountain-container{
		width: 400px;
		height: 100%;
		max-height: 400px;
		background: #293462;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.mountain-inner{
		width: 100%;
		max-width: 300px;
		height: 100%;
		max-height: 300px;
		border-radius: 50%;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		position: relative;
		overflow: hidden;

	}

	.mountain-sticker {
		width: 0px;
		height: 0;
		border-left: 299px solid transparent;
		border-right: 141px solid transparent;
		border-bottom: 190px solid red;
		position: relative;
		margin-bottom: -1px;
		transform: rotate(-11deg);
    }
    .mountain-sticker:after {	
		position: absolute;
		content: '';
		bottom: -129px;
		width: 50px;
		height: 50px;
		left: -215px;
		background: red;
		transform: rotate(57deg)
    }


	@media screen and (min-width:768px)and (max-width: 1366px)  {
		.mountain-container{
			width: 300px;
			height: 300px;
		}
		.mountain-inner{
			max-width: 250px;
			max-height: 250px;
		}
	}
	@media screen and (min-width:320px)and (max-width: 1023px)  {
		.mountain-container{
			width: 200px;
			height: 200px;
		}
		.mountain-inner{
			max-width: 150px;
			max-height: 150px;
		}
		.mountain-sticker{
			border-left: 139px solid transparent;
			border-right: 49px solid transparent;
			border-bottom: 81px solid red;

		}
		.mountain-sticker:after{
			bottom: -81px;
			left:-124px;

		}
	}

</style>
