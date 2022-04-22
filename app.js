const App = {
  data: () => ({
    inputValue: '',
    tasks: [],
  }),
  methods: {
    addTask() {
      if (this.inputValue) {
        const newTask = {
          id: Date.now(),
          text: this.inputValue,
          isDone: false,
        };

        this.tasks.push(newTask);
        this.inputValue = '';
      }
    },

    removeTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },

    removeTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },

    checkHandler(id) {
      this.tasks.forEach((task) => {
        if (task.id === id) task.isDone = !task.isDone;
      });
    },
  },

  computed: {
    fulfillTask() {
      return this.tasks.filter((task) => !task.isDone);
    },

    doneTask() {
      return this.tasks.filter((task) => task.isDone);
    },
  },
};

Vue.createApp(App).mount('#app');
