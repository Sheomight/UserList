<template>
    <input class="input" :value="modelValue" @input="updateInput">
</template>

<script>
export default {
    name: 'custom-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style>
.input {
    height: 40px;
    outline: none;
    padding: 0 10px;
    background-color: rgba(224, 224, 224, 0.402);
    border: none;
    border-bottom: 2px solid #1c63e9;
    color: #000;
}

.input:focus {
    border-bottom: 4px solid #005bfe;
}

.input::placeholder {
    color: #949494;
}

.input_danger {
    border-bottom: 4px solid rgba(255, 41, 41, 0.402);
}
</style>