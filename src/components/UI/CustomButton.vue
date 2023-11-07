<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'custom-button'
}
</script>


<style scoped>
.btn {
    cursor: pointer;
    color: #fff;
    border-radius: 10px;
    font-size: 18px;
    background-color: #1c63e9;
    border: none;
    height: 2.3em;
}

.btn:hover {
    background-color: #005bfe;
}
</style>