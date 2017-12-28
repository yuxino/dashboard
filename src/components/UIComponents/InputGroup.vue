<template>
  <div class="input-group">
    <label>{{ label }}</label>
    <input ref="input"
           :value="value"
           @input="$emit('input',$event.target.value)"
           :disabled="disabled"
           :placeholder="placeholder"
           :type="type">
  </div>
</template>

<script>
export default {
  name: 'InputGroup',
  props: {
    label: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    placeholder: { type: String, default: '' },
    value: { type: [String, Number], default: '' },
    type: { type: String, default: 'text' }
  }
}
</script>