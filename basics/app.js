const App = {
  data() {
    return {
      title: 'Список заметок',
      placeholderStr: 'Введите название заметок',
      inputValue: '',
      notes: [
        { id: '1', text: 'Заметка 1' },
        { id: '2', text: 'Заметка 2' },
      ],
    };
  },

  methods: {
    addNewNote() {
      if (this.inputValue) {
        const newNote = {
          id: Date.now(),
          text: this.inputValue,
        };
        this.notes.push(newNote);
        this.inputValue = '';
      }
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },

    removeNote(id) {
      this.notes = this.notes.filter((note) => note.id != id);
    },
  },
};

Vue.createApp(App).mount('#app');
