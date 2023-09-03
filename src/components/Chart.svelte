<script>
     export let countriesData
    import { onMount, onDestroy } from "svelte";
    import Chart from "chart.js/auto";

   
    $: {
    // Use reactive statement to handle changes in 'prop'
        if (countriesData.length > 0) {
            console.log('emidiatffkdfsdkf')
            console.log(countriesData)
            let chart; // To store the chart instance
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
        }
    }

    

    

</script>


{#if countriesData.length > 0}
    <div>
    <canvas id="polar-area-chart" width="400" height="400" />
</div>
  {:else}
    <div>Loading...........</div>
  {/if}
<style>
</style>
