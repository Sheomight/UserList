<template>
    <!-- Предотвращаем принудительное обновление страницы при отправке формы, а так же всплытие события клика -->
    <form class="modal__content" @click.stop @submit.prevent>
        <h2 class="modal__title">Add user info</h2>
        <div class="modal__fields">
            <!-- Реактивно связываем инпуты с переменными хранящими информацию о новом пользователе -->
            <custom-input class="modal__input" placeholder="Name" v-model="name"></custom-input>
            <custom-input class="modal__input" placeholder="Last name" v-model="lastName"></custom-input>
            <fieldset class="modal__group">
                <legend>Work experience</legend>
                <custom-input class="modal__input" placeholder="Years" v-model="experience.years"
                    type="number"></custom-input>
                <custom-input class="modal__input" placeholder="Month" v-model="experience.month"
                    type="number"></custom-input>
            </fieldset>
            <custom-input class="modal__input" placeholder="Age" v-model="age" type="number"></custom-input>
            <fieldset class="modal__group">
                <legend>Address</legend>
                <custom-input class="modal__input" placeholder="City" v-model="address.city"></custom-input>
                <custom-input class="modal__input" placeholder="Street" v-model="address.street"></custom-input>
                <custom-input class="modal__input" placeholder="Apartment" v-model="address.apartment"></custom-input>
            </fieldset>
        </div>
        <!-- Вызываем метож создания нового пользователя при клике на кнопку -->
        <custom-button class="modal__btn" @click="createUser">Add user</custom-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            // Обявляем реактивные переменные которые будут хранить в себе информацию о новом пользователе получнную из инпутов
            name: '',
            lastName: '',
            experience: {
                years: '',
                month: ''
            },
            age: null,
            address: {
                city: '',
                street: '',
                apartment: ''
            }
        }
    },
    // Объявляем информацию о входных параметрах
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    methods: {
        // Объявляем метод создающий нового пользователя
        createUser() {
            // Задаём полям нового пользователя значени полученные из реактивных переменных
            let newUser = {
                id: this.id,
                name: this.name,
                lastName: this.lastName,
                experience: {
                    years: +this.experience.years,
                    month: +this.experience.month
                },
                age: this.age,
                address: {
                    city: this.address.city,
                    street: this.address.street,
                    apartment: this.address.apartment
                }
            };
            // Создаём событие 'create' и передаём вместе с его всплытием новго пользователя
            this.$emit('create', newUser);
            // Отчищаем реактивные переменные
            this.name = '';
            this.lastName = '';
            this.experience.years = '';
            this.experience.month = '';
            this.age = null;
            this.address.city = '';
            this.address.street = '';
            this.address.apartment = '';
        }
    }
}
</script>

<style>
.modal__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    background: white;
    border-radius: 12px;
    width: 100%;
    max-width: 700px;
    padding: 20px;
    gap: 20px;
}

.modal__fields {
    width: 100%;
    height: 270px;
    display: flex;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px 10px;
}

.modal__btn {
    width: 100px;
}

.modal__input {
    width: 200px;
}

.modal__group {
    border: 1px dotted rgb(56, 56, 56);
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 1em;
    margin-top: auto;
}
</style>
