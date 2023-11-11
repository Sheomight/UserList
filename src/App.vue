<template>
  <div class="control container">
    <!-- Вешаем обработчик события на клик по кнопке, запускающий метод отображающий модальное окно -->
    <custom-button class="control__btn" @click="showModal">Add new user</custom-button>
  </div>
  <div class="container">
    <!-- В компонент модального окна в качестве входного параметра передаём переменную с информацией о видимости окна 
    и следим за её измнениями-->
    <modal-win v-model:show="modalVisible">
      <!-- В форме создания пользователя подписываемся на событие create и при его всплытии вызываем метож создания пользователя
      в качестве входного параметра - id нового пользоателя, передаём увеличеную на 1 длину списка пользователей  -->
      <UserForm @create="createUser" :id="users.length + 1"></UserForm>
    </modal-win>
    <!-- В компонент списка пользователей входным параметром передаём массив пользователей
    подписываемся на событие edit и delete и при их всплытии вызываем метод редактирующий или удаляющий пользователя-->
    <UserList :userList="users" @edit="editUser" @delete="deleteUser" />
  </div>
</template>

<script>
// Импортируем компонент формы добавления нового пользователя 
import UserForm from '@/components/UserForm.vue';
// Импортируем компонент отвечающий за за отрисовку списка пользователей
import UserList from '@/components/UserList.vue';

export default {
  // Регистрируем компоненты в приложении
  components: {
    UserForm, UserList
  },
  data() {
    return {
      // Инициализируем реактивную переменную отвечающую за видимость модального окна
      modalVisible: false,
      // Инициализурем реактивный массив хранящий в себе список пользователей
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
    // Объявляем метод отображающий моадльное окно
    showModal() {
      this.modalVisible = true;
    },
    // Объявляем метод принимающий в качестве атрибута оъект с новым пользователем
    createUser(newUser) {
      // Добавляем в список нового пользователя
      this.users.push(newUser);
      // Закрываем модальное окно
      this.modalVisible = false;
    },
    // Объявляем метод принимающий в качестве атрибута объект с изменённым пользователем
    editUser(editedUser) {
      // Ищем в массиве хранящем список пользователей индекс изменённого элемента
      let editingUserIndex = this.users.findIndex(user => user.id === editedUser.id);
      // В случае если такой элемент есть, заменяем его на изменённый
      if (editingUserIndex !== -1) {
        this.users[editingUserIndex] = structuredClone(editedUser);
      }
    },
    // Объявляем метод принимающий в качестве атрибута id удаляемого пользователя
    deleteUser(delitingUserId) {
      // Ищем в массиве хранящем список пользователей индекс удаляемого элемента
      let deletingUserIndex = this.users.findIndex(user => user.id === delitingUserId);
      // Удаляем нужный элемент из массива
      this.users.splice(deletingUserIndex, 1)
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
