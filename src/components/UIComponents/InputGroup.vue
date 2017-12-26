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
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style lang="scss">
  .input-group {
    margin-bottom: 25px;
    label {
      display: block;
      margin-bottom: 5px;
      font-size: 12px;
      color: #9a9a9a;
      text-transform: uppercase;
    }
    input,textarea {
      width: 100%;
      padding: 8px 12px;
      border-radius: 4px;
      outline: none;
      border: 1px solid #e3e3e3;
      font-size: 16px;
      color: #565656;
      font-family: inherit;
      &[disabled]{
        background-color: #f5f5f5;
        color: #888;
        cursor: not-allowed;
      }
    }
    textarea {
      height: 40px;
      resize: vertical;
    }
  }
</style>
