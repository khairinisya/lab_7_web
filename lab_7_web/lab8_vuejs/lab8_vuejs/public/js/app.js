const { createApp } = Vue;

const apiUrl = 'http://localhost/lab11_ci/ci4/public';

createApp({
  data() {
    return {
      artikel: [],
      formData: {
        id: null,
        judul: '',
        isi: '',
        status: "0"
      },
      showForm: false,
      formTitle: 'Tambah Data',
      statusOptions: [
        { text: 'Draft', value: "0" },
        { text: 'Publish', value: "1" }
      ]
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios.get(apiUrl + '/post')
        .then(response => {
          this.artikel = response.data.artikel;
        })
        .catch(error => console.error(error));
    },
    tambah() {
      this.showForm = true;
      this.formTitle = 'Tambah Data';
      this.formData = { id: null, judul: '', isi: '', status: "0" };
    },
    edit(data) {
      this.showForm = true;
      this.formTitle = 'Ubah Data';
      this.formData = { ...data };
    },
    hapus(index, id) {
      if (confirm('Yakin menghapus data?')) {
        axios.delete(apiUrl + '/post/' + id)
          .then(() => {
            this.artikel.splice(index, 1);
          })
          .catch(error => console.error(error));
      }
    },
    saveData() {
      if (this.formData.id) {
        axios.put(apiUrl + '/post/' + this.formData.id, this.formData)
          .then(() => this.loadData())
          .catch(error => console.error(error));
      } else {
        axios.post(apiUrl + '/post', this.formData)
          .then(() => this.loadData())
          .catch(error => console.error(error));
      }
      this.resetForm();
    },
    resetForm() {
      this.formData = { id: null, judul: '', isi: '', status: "0" };
      this.showForm = false;
    },
    statusText(status) {
      return status == "1" ? 'Publish' : 'Draft';
    }
  }
}).mount('#app');
