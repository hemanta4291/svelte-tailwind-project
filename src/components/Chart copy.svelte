<script>
    import { onMount, onDestroy } from "svelte";
    import Chart from "chart.js/auto";

    // Data from the countryDataStore
    import { countryDataStore } from "../store";

    let chart; // To store the chart instance

    // Get the data for the 10 most populated countries
    let countriesData;
    const unsubscribe = countryDataStore.subscribe((value) => {
        countriesData = value;
    });
    let countries = countriesData
        .sort((a, b) => b.population - a.population)
        .slice(0, 10);

    onMount(() => {
        // Create the chart after the component is mounted

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
        });
    });

    onDestroy(unsubscribe);
</script>

<div>
    <canvas id="polar-area-chart" width="400" height="400" />
    ok
</div>

<style>
</style>
