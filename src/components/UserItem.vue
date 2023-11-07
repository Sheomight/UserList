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
        <td class="userlist__action"><custom-button @click="startEditing">Edit</custom-button></td>
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
        <td><custom-button @click="editUser(user)">OK</custom-button></td>
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
            this.$emit('edit:user', this.editedUser);
            this.isEditing = false;
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
</style>