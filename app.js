const app = Vue.createApp({
  // Optionen
  data: function () {
    return {
      submissions: submissions, //aus seed.js
    };
  },
  methods: {
    // upvote: function() {}
    upvote() {
      this.submissions[0].votes++;
    },
  },
});

// Liefert die Instanz zur Root-Component zurück
const vm = app.mount("#app");
