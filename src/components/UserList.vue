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
import UserItem from '@/components/UserItem.vue';

export default {
    props: {
        userList: {
            type: Array,
            required: true
        }
    },
    components: {
        UserItem
    },
    methods: {
        editUser(editedUser) {
            this.$emit('edit:user', editedUser)
        },
        deleteUser(delitingUserId) {
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
