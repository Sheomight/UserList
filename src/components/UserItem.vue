<template>
    <!-- Элемент будет отображаться только если пользователь не редактируется -->
    <tr v-if="!isEditing">
        <td>{{ user.name }}</td>
        <td>{{ user.lastName }}</td>
        <td>
            <span v-if="user.experience.years">{{ user.experience.years }} years</span> <span
                v-if="user.experience.month">{{ user.experience.month }} month</span>
        </td>
        <td>{{ user.age }}</td>
        <td>{{ user.address.city }}, {{ user.address.street }}, {{ user.address.apartment }}</td>
        <td class="userlist__action">
            <!-- Вешаем обработчик события на клик по кнопке, запускающий метод редактирования пользователя -->
            <custom-button class="userlist__btn" @click="startEditing">Edit</custom-button>
            <!-- Вешаем обработчик события на клик по кнопке, запускающий метод удаления пользователя -->
            <custom-button class="userlist__btn btn_danger" @click="deleteUser">Delete</custom-button>
        </td>
    </tr>
    <!-- Элемент будет отображаться только если пользователь редактируется -->
    <tr v-else>
        <!-- Реактивно связываем инпуты с полями пользователя -->
        <td><custom-input class="userlist__input" v-model="editedUser.name" /></td>
        <td><custom-input class="userlist__input" v-model="editedUser.lastName" /></td>
        <td>
            <custom-input class="userlist__input" v-model="editedUser.experience.years" type="number" />
            <custom-input class="userlist__input" v-model="editedUser.experience.month" type="number" />
        </td>
        <td><custom-input class="userlist__input" v-model="editedUser.age" type="number" /></td>
        <td>
            <custom-input class="userlist__input" v-model="editedUser.address.city" />
            <custom-input class="userlist__input" v-model="editedUser.address.street" />
            <custom-input class="userlist__input" v-model="editedUser.address.apartment" />
        </td>
        <td class="userlist__action">
            <!-- Вешаем обработчик события на клик по кнопке, запускающий метод сохранения изменений -->
            <custom-button class="userlist__btn" @click="editUser(user)">OK</custom-button>
            <!-- Вешаем обработчик события на клик по кнопке, запускающий метод прекращения редактирования -->
            <custom-button class="userlist__btn btn_danger" @click="stopEditing">X</custom-button>
        </td>
    </tr>
</template>

<script>
export default {
    // Объявляем информацию о входных параметрах
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            // Инициализируем реактивный объект который будет хранить в себе изменённого пользователя
            editedUser: {
                name: '',
                lastName: '',
                experience: {
                    years: '',
                    month: ''
                },
                age: '',
                address: {
                    city: '',
                    street: '',
                    apartment: ''
                },
            },
            // Инициализируем реактивную переменную значение которй указывает на то,
            // редактируется сейчас пользователь или нет
            isEditing: false
        }
    },
    methods: {
        // Объявляем метод изменяющий состояние редактирования пользователя
        startEditing() {
            // Копируем все данные пользователя в объект который сохранит измнения
            this.editedUser = structuredClone(this.user)
            // Меняем статус редактирования
            this.isEditing = true;
        },
        // Обхявляем метод сохраняющий изменения пользователя
        editUser() {
            // !!! поискать как можно заменить эти преобразования
            this.editedUser.experience.years = +this.editedUser.experience.years;
            this.editedUser.experience.month = +this.editedUser.experience.month;
            // Регестрируем событие edit и передаём с его всплытием изменённого пользователя
            this.$emit('edit', this.editedUser);
            // Меняем статус редактирования
            this.isEditing = false;
        },
        // Объявляем метод прекращающий редактирование
        // Попробовать переделать в изменяющий состояние и использовать везде
        stopEditing() {
            this.isEditing = false;
        },
        // Объявляем метод удаления пользователя
        deleteUser() {
            // Регестрируем событие delete и передаём с его всплытием id удаляемого пользователя
            this.$emit('delete', this.user.id);
        }
    }
}
</script>

<style>
.userlist__input {
    margin-bottom: 10px;
}

.userlist__action {
    text-align: center;
}

.userlist__btn {
    min-width: 40px;
    height: 40px;
}
</style>
