<template>
    <table class="userlist">
        <thead class="userlist__header">
            <tr>
                <td>Name</td>
                <td>Last name</td>
                <td>Work experience</td>
                <td>Age</td>
                <td>Address</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            <template v-for="user in userList" :key="user.id">
                <UserItem :user="user" @edit:user="editUser" @delete:user="deleteUser" />
            </template>
        </tbody>
    </table>
</template>

<script>
// Импортируем компонент отвечающий за отображение пользователя
import UserItem from '@/components/UserItem.vue';

export default {
    // Объявляем информацию о входных параметрах
    props: {
        userList: {
            type: Array,
            required: true
        }
    },
    // Подключаем компонент
    components: {
        UserItem
    },
    methods: {
        // Обявляем метод принимающий в качестве аргумента изменённого пользователя
        editUser(editedUser) {
            // Создаём событие 'edit:user' и передаём вмсте с его всплытием изменённого пользователя
            this.$emit('edit:user', editedUser)
        },
        // Обявляем метод принимающий в качестве аргумента id удаляемого пользователя
        deleteUser(delitingUserId) {
            // Создаём событие 'delete:user' и передаём вмсте с его всплытием id удаляемого пользователя
            this.$emit('delete:user', delitingUserId);
        }
    }
}
</script>

<style>
.userlist {
    border: 2px solid #000;
    margin-top: 20px;
    border-spacing: 0;
    max-width: 80%;
    min-width: 500px;
}

.userlist__header {
    height: 2rem;
    text-align: center;
    font-weight: 700;
}

td {
    border: 1px solid #000;
    padding: 5px 10px;
    max-width: 500px;
}
</style>
