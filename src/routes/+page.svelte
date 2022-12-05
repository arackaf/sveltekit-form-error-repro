<script>
	import { enhance } from '$app/forms';

	function fn() {
		return async () => {};
	}
</script>

<h1>Welcome to SvelteKit</h1>

<h2>Throw new Error()</h2>
<form method="post" action="?/save1">
	<input name="a" />
</form>

<h2>Throw new Error() with use:enhance</h2>
<form method="post" action="?/save1" use:enhance>
	<input name="a" />
</form>

<h2>Throw new Error() with use:enhance with callback</h2>
<form method="post" action="?/save1" use:enhance={fn}>
	<input name="a" />
</form>

<h2>return invalid()</h2>
<form method="post" action="?/save2">
	<input name="b" />
</form>

<style>
	form {
		margin-bottom: 10px;
	}
</style>
