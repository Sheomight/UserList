<template>
    <!-- Элемент будед отображаться только если show в значении true 
         При клике на модальное окно вызывается метож скрывающий его-->
    <div class="modal" v-if="show" @click="hideModal()">
        <slot></slot>
    </div>
</template>

<script>
export default {
    // Задаём имя компоненту
    name: 'modal-win',
    // Объявляем информацию о входных параметрах
    props: {
        show: {
            type: Boolean,
            defaul: false
        }
    },
    emits: ['update:show'],
    methods: {
        // Объявляем метож обновляющмй значение show в родительском компоненте на false
        hideModal() {
            this.$emit('update:show', false)
        }
    }
}
</script>


<style scoped>
.modal {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}
</style>