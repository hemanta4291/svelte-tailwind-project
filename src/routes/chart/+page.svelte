<!-- src/components/CountryTable.svelte -->
<script>
	import { onMount, onDestroy } from "svelte";
	import Chart from "chart.js/auto";
	import { countryDataStore, setCountryDataStore } from "../../store";
	import { fetchCountries } from "../../api";

	let countriesData;
	const unsubscribe = countryDataStore.subscribe((value) => {
		countriesData = value;
	});

	let loading = true

	let columns = [
		"flag",
		"name",
		"population",
		"cioc",
		"unMember",
		"currencies",
		"languages",
	];

	onMount(async () => {
		try {
			const data = await fetchCountries();
			// console.log('data',{data})
			let dataSlice = data;
			setCountryDataStore(dataSlice);


			//for Chart js
		let chart;
		let countries = countriesData
			.sort((a, b) => b.population - a.population)
			.slice(0, 10);
		const ctx = document
			.getElementById("polar-area-chart")
			.getContext("2d");

		chart = new Chart(ctx, {
			type: "polarArea",
			data: {
				labels: countries.map((country) => country.name.common),
				datasets: [
					{
						label: "My First Dataset",
						data: countries.map((country) => country.population),
						backgroundColor: [
							"rgb(255, 99, 132)",
							"rgb(75, 192, 192)",
							"rgb(255, 205, 86)",
							"rgb(201, 203, 207)",
							"rgb(54, 162, 235)",
						],
					},
				],
			},
			options: {
				plugins: {
					legend: {
						position: "bottom",
						type: "checkbox",
					},
				},
			},
		});


		} catch (error) {
			console.error("Error fetching countries:", error);
		}

		
	});

	onDestroy(unsubscribe);
</script>

<svelte:head>
	<title>Chart</title>
	<meta name="description" content="chart this app" />
</svelte:head>

<section class="grid grid-cols-5 gap-4 mt-4">
	<div class="xl:col-[1/4] col-[1/-1]">
		<table
			class=" chart-table overflow-hidden border border-gray-300 bg-white rounded-md text-left"
		>
			<thead class="border border-gray-200">
				<tr>
					{#each columns as column}
						<th class="p-4">{column}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each countriesData.slice(0, parseInt(countriesData.length / 8)) as country}
					<tr class="border-b border-gray-200">
						<td class="p-4">{country.flag}</td>
						<td class="p-4">{country.name.common}</td>
						<td class="p-4"
							>{country.population.toLocaleString()}</td
						>
						<td class="p-4">{country.cioc}</td>
						<td class="p-4">{country.unMember ? "Yes" : "No"}</td>
						<td class="p-4">
							{#if country.currencies}
								{#each Object.entries(country.currencies) as [currencyCode]}
									{currencyCode ? currencyCode : ""}
								{/each}
							{/if}
						</td>
						<td class="p-4">
							{#if country.languages}
								{Object.values(country.languages).join(",")}
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<div class="polar-chart xl:col-[4/-1] col-[1/-1]">
		<div class="border h-auto border-gray-300 bg-white rounded-md text-left">
			<h4 class="border-b border-gray-300 p-4 mb-4">Countries</h4>
			<canvas id="polar-area-chart" />
			<!-- {#if countriesData.length > 0}
				
			{:else}
				<p>Loading data...</p>
			{/if} -->
		</div>
	</div>
</section>

<style>
	.chart-table th,
	.chart-table td {
		word-break: break-word;
		width: 10%;
	}
	.chart-table th:last-child {
		width: 20%;
	}
</style>
