<template>
	<header class="bg-white shadow">
		<div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
			<h1 class="text-4xl font-bold tracking-tight text-gray-900">
				<!-- title slot -->
				<slot name="title">

					<img class="inline-block text-green-500" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Bicycle-icon.svg/2459px-Bicycle-icon.svg.png" height="40" width="50"/>
					
					Helsinki City Bikes</slot>
			</h1>

			<ul
				class="flex flex-wrap text-sm font-medium text-center text-gray-900  dark:text-gray-900">
				<li class="mr-2">
					<router-link :to="{ name: 'Hero' }"
					  
						class="inline-block p-4  rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">
						<!-- pass a prop -->
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-emerald-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
</svg>

Home

					</router-link>
				</li>
				<li class="mr-2">
					<router-link :to="{ name: 'Home' }"
					  
						class="inline-block p-4  rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">
						<!-- pass a prop -->
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-blue-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

All	Journeys

					</router-link>
				</li>
				<li class="mr-2">
					<router-link
						:to="{ name: 'Stations' }"
						class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-pink-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
</svg>

						
						Stations</router-link>
				</li>
				

			</ul>





		</div>
	</header>
</template>

<script>

</script>