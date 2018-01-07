<template>
  <div class="input-group">
    <label>{{ label }}</label>
    <input ref="input"
           @input="$emit('input',$event.target.value)"
           v-bind="$props">
  </div>
</template>

<script>
export default {
  name: 'InputGroup',
  props: ['label', 'type', 'placeholder', 'maxlength', 'minlength', 'name', 'form', 'value', 'disabled', 'readonly', 'autofocus']
}
</script>