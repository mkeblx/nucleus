<script id="proj-mini-tmpl" type="text/template">
<div class="proj u{{ _.random(1,1) }}" data-id="{{ id }}" style="border-color: {{ color }}">
	<div class="corner" style="border-top-color: {{ color }}"></div>
	<div class="content">
		<div class="title">{{ name }}</div>
		<div class="desc">{{ description }}</div>
	</div>
</div>
</script>

<script id="proj-tmpl" type="text/template">
<!-- whole page project view -->
<div class="proj-page" data-id="{{ id }}">

</div>
</script>

<script id="todo-list-tmpl" type="text/template">
<!-- notes -->
<div class="todo-list" data-id="{{ id }}">
</div>
</script>

<script id="todo-item-tmpl" type="text/template">
<div class="item" data-id="{{ id }}">
	<input class="toggle" type="checkbox" <%= completed ? 'checked' : '' %>>
	<label><%- title %></label>
	<button class="destroy"></button>
</div>
</script>