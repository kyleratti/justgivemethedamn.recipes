<script lang="ts">
	export let prepTimeMinutes: number;
	export let cookTimeMinutes: number;

	function* generateHumanReadableTimeFromMinutes(minutes: number) {
		const hours = Math.floor(minutes / 60);
		const remainingMinutes = minutes % 60;

		if (hours > 0) {
			if (hours === 1) {
				yield "1 hour";
			} else {
				yield `${hours} hours`;
			}
		}

		if (remainingMinutes > 0) {
			if (remainingMinutes === 1) {
				yield "1 minute";
			} else {
				yield `${remainingMinutes} minutes`;
			}
		}
	}
</script>

<div class="grid grid-cols-[max-content_max-content] gap-1 py-4 lg:hidden">
	<div class="font-bold text-right">
		Prep Time
	</div>
	<div class="ml-2">
		{#each generateHumanReadableTimeFromMinutes(prepTimeMinutes) as time}
			<span>{time}</span>
		{/each}
	</div>

	<div class="font-bold text-right">
		Cook Time
	</div>
	<div class="ml-2">
		{#each generateHumanReadableTimeFromMinutes(cookTimeMinutes) as time}
			<span>{time}</span>
		{/each}
	</div>

	<div class="font-bold text-right">
		Total Time
	</div>
	<div class="ml-2">
		{#each generateHumanReadableTimeFromMinutes(prepTimeMinutes + cookTimeMinutes) as time}
			<span>{time}</span>
		{/each}
	</div>
</div>

<div class="hidden lg:block flex flex-row justify-start align-baseline">
	<div class="m-1 inline-block md:m-8" style="min-width: 50px; max-width: 250px;">
		<div class="mx-2 pt-1">
			<div class="mb-2">
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="bolt"
					class="u-inline-block fa-utensils fa-w-10 fa-wrapper bg-blue-100 p-3 text-blue-600"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 320 512"
					style="border-radius: 100%; height: 4.75rem; width: 4.75rem;"
				>
					<path
						fill="currentColor"
						d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"
					></path>
				</svg>
			</div>

			<p class="mb-0 mt-2 font-bold">Prep Time</p>

			{#each generateHumanReadableTimeFromMinutes(prepTimeMinutes) as time}
				<span>{time}</span>
			{/each}
		</div>
	</div>

	<div class="m-1 inline-block md:m-8" style="min-width: 50px; max-width: 250px;">
		<div class="mx-2 pt-1">
			<div class="mb-2">
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="fire-burner"
					class="u-inline-block fire-burner fa-w-10 fa-wrapper bg-red-100 p-3 text-red-500"
					role="img"
					style="border-radius: 100%; height: 4.75rem; width: 4.75rem;"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 640 512"
				>
					<!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
					<path
						fill="currentColor"
						d="M345.7 48.3L358 34.5c5.4-6.1 13.3-8.8 20.9-8.9c7.2 0 14.3 2.6 19.9 7.8c19.7 18.3 39.8 43.2 55 70.6C469 131.2 480 162.2 480 192.2C480 280.8 408.7 352 320 352c-89.6 0-160-71.3-160-159.8c0-37.3 16-73.4 36.8-104.5c20.9-31.3 47.5-59 70.9-80.2C273.4 2.3 280.7-.2 288 0c14.1 .3 23.8 11.4 32.7 21.6c0 0 0 0 0 0c2 2.3 4 4.6 6 6.7l19 19.9zM384 240.2c0-36.5-37-73-54.8-88.4c-5.4-4.7-13.1-4.7-18.5 0C293 167.1 256 203.6 256 240.2c0 35.3 28.7 64 64 64s64-28.7 64-64zM32 288c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64 448 0 0-64c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l0-96zM320 480a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm160-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM192 480a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
					/>
				</svg>
			</div>

			<p class="mb-0 mt-2 font-bold">Cook Time</p>

			{#each generateHumanReadableTimeFromMinutes(cookTimeMinutes) as time}
				<span>{time}</span>
			{/each}
		</div>
	</div>

	<div class="m-1 inline-block md:m-8" style="min-width: 50px; max-width: 250px;">
		<div class="mx-2 pt-1">
			<div class="mb-2">
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="utensils"
					class="u-inline-block fa-utensils fa-w-10 fa-wrapper bg-green-100 p-3 text-green-500"
					role="img"
					style="border-radius: 100%; height: 4.75rem; width: 4.75rem;"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
				>
					<!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
					<path
						fill="currentColor"
						d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"
					/>
				</svg>
			</div>

			<p class="mb-0 mt-2 font-bold">Total Time</p>

			{#each generateHumanReadableTimeFromMinutes(prepTimeMinutes + cookTimeMinutes) as time}
				<span>{time} </span>
			{/each}
		</div>
	</div>
</div>
