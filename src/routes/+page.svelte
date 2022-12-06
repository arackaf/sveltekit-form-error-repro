<script>
	import { enhance } from '$app/forms';
</script>

<h1>Welcome to SvelteKit</h1>

<h2>RawDog form (won't save)</h2>
<form action="?/save1">
	<input name="a" />
</form>

<h2>PE form (will save)</h2>
<form action="?/save1" use:enhance>
	<input name="a" />
</form>

<style>
	form {
		margin-bottom: 10px;
	}
</style>
