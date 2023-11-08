<template>
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
            <custom-button class="userlist__btn" @click="startEditing">Edit</custom-button>
            <custom-button class="userlist__btn btn_danger" @click="deleteUser">Delete</custom-button>
        </td>
    </tr>
    <tr v-else>
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
            <custom-button class="userlist__btn" @click="editUser(user)">OK</custom-button>
            <custom-button class="userlist__btn btn_danger" @click="stopEditing">X</custom-button>
        </td>
    </tr>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
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
            isEditing: false
        }
    },
    methods: {
        startEditing() {
            this.editedUser = structuredClone(this.user)
            this.isEditing = true;
        },
        editUser() {
            this.editedUser.experience.years = +this.editedUser.experience.years;
            this.editedUser.experience.month = +this.editedUser.experience.month;
            this.$emit('edit:user', this.editedUser);
            this.isEditing = false;
        },
        stopEditing() {
            this.isEditing = false;
        },
        deleteUser() {
            this.$emit('delete:user', this.user.id);
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