<template>
    <!-- Связываем значение инпута с modelValue
    Подписываем на событие input и при вводе текста вызываем метож updateInput -->
    <input class="input" :value="modelValue" @input="updateInput">
</template>

<script>
export default {
    // Задаём имя компоненту
    name: 'custom-input',
    // Объявляем информацию о входных параметрах
    props: {
        modelValue: [String, Number]
    },
    emits: ['update:model-value'],
    methods: {
        // Объявляем метож принимающий в качестве параметра событие
        updateInput(event) {
            // Регистрируем событие update:modelValue и передаём с его всплытием значение внутри инпута
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