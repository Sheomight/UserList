<template>
  <div class="control container">
    <custom-button class="control__btn" @click="showModal">Add new user</custom-button>
  </div>
  <div class="container">
    <modal-win v-model:show="modalVisible">
      <UserForm @create="createUser" :id="users.length + 1"></UserForm>
    </modal-win>
    <UserList :userList="users" @edit:user="editUser" />
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue';
import UserList from '@/components/UserList.vue';

export default {
  components: {
    UserForm, UserList
  },
  data() {
    return {
      modalVisible: false,
      //
      users: [
        {
          id: 1,
          name: 'Leanne',
          lastName: 'Graham',
          experience: {
            years: 1,
            month: 3
          },
          age: 26,
          address: {
            city: 'Gwenborough',
            street: 'Kulas Light',
            apartment: 'Apt. 556'
          }
        },
        {
          id: 2,
          name: 'Ervin',
          lastName: 'Howell',
          experience: {
            years: 4,
            month: 0
          },
          age: 24,
          address: {
            city: 'Wisokyburgh',
            street: 'Victor Plains',
            apartment: 'Suite 879'
          }
        },
        {
          id: 3,
          name: 'Clementine',
          lastName: 'Bauch',
          experience: {
            years: 6,
            month: 2
          },
          age: 32,
          address: {
            city: 'McKenziehaven',
            street: 'Douglas Extension',
            apartment: 'Suite 847'
          }
        },
        {
          id: 4,
          name: 'Patricia',
          lastName: 'Lebsack',
          experience: {
            years: 5,
            month: 7
          },
          age: 28,
          address: {
            city: 'South Elvis',
            street: 'Hoeger Mall',
            apartment: 'Apt. 692'
          }
        },
      ]
    }
  },
  methods: {
    showModal() {
      this.modalVisible = true;
    },
    createUser(user) {
      this.users.push(user);
      this.modalVisible = false;
    },
    editUser(editedUser) {
      let editingUserIndex = this.users.findIndex(user => user.id === editedUser.id);
      if (editingUserIndex !== -1) {
        this.users[editingUserIndex] = structuredClone(editedUser);
      }
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

h1,
h2,
h3 {
  margin: 0;
}

.container {
  padding: 0 60px;
}

.control {
  height: 100px;
  display: flex;
  align-items: center;
  background-color: #1d3461;
}

.control__btn {
  width: 150px;
}
</style>
