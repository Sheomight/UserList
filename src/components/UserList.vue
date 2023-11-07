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
                <UserItem :user="user" @edit:user="editUser" />
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
        editUser(user) {
            this.$emit('edit:user', user)
        }
    }
}
</script>

<style>
.userlist {
    border: 2px solid #000;
    margin-top: 20px;
    border-spacing: 0;
    width: 90vw;
}

.userlist__header {
    height: 2rem;
    text-align: center;
}

td {
    border: 1px solid #000;
    padding: 5px 10px;
}
</style>
