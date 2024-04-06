<script lang="ts">
	let headerBtn: HTMLElement;
	let headerMenu: HTMLElement;

	const onHeaderButtonClick = () => {
		const isActive = headerBtn.classList.toggle("active");
		headerMenu.classList.toggle("active", isActive);
	};

	const onHeaderMenuClick = (event: MouseEvent) => {
		if (event.target instanceof HTMLAnchorElement) {
			headerBtn.classList.remove("active");
			headerMenu.classList.remove("active");
		}
	};
</script>

<div class="header header-fixed unselectable header-animated px-1">
	<div class="header-brand">
		<div class="nav-item no-hover">
			<h6 class="title">JustGiveMeTheDamn<span class="text-red-500">.Recipes</span></h6>
		</div>
		<a bind:this={headerBtn} on:click={onHeaderButtonClick} class="nav-item nav-btn"
			 id="header-btn"><span></span> <span></span> <span></span></a>
	</div>
	<div bind:this={headerMenu} class="header-nav" id="header-menu" role="button">
		<div class="nav-left">
			<div class="nav-item text-center">
				<a href="#top">
					<span class="icon"> <i class="fab fa-wrapper fa-twitter" aria-hidden="true"></i></span>
				</a>
			</div>
		</div>
		<div class="nav-right">
			<div class="nav-item has-sub toggle-hover" id="dropdown">
				<a class="nav-dropdown-link" href="#top" on:click={event => event.preventDefault()}>Slow Cooker</a>
				<ul class="dropdown-menu dropdown-animated" role="menu">
					<li role="menuitem">
						<a href="/recipes/slow-cooker/heavy-mac-and-cheese"
							 on:click={onHeaderMenuClick}>
							Heavy Mac and Cheese
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
