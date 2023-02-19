<template>

<header class="bg-white shadow">
			<div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
				<h1 class="text-3xl font-bold tracking-tight text-gray-900">
					<!-- title slot -->
					<slot name="title">Helsinki City Bikes</slot>
				</h1>

				<ul
					class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
					<li class="mr-2">
						<a href="/" aria-current="page"
							class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">All
							<!-- pass a prop -->
							 Journeys
						
						</a>
					</li>
					<li class="mr-2">
						<a href="/stations"
							class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Stations</a>
					</li>
					<li class="mr-2">
						<a href="#"
							class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Graphs</a>
					</li>
					<li class="mr-2">
						<a href="/map"
							class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Maps</a>
					</li>

				</ul>





			</div>
		</header>

</template>

<script>

</script>