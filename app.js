const app = Vue.createApp({
  // Optionen
  data: function () {
    return {
      submissions: submissions, //aus seed.js
    };
  },
  computed: {
    totalVotes() {
      return this.submissions.reduce((totalVotes, submissions) => {
        return totalVotes + submissions.votes;
      }, 0);
    },
    sortedSubmissions() {
      return this.submissions.sort((a, b) => {
        return b.votes - a.votes;
      });
    }
  },
  methods: {
    // upvote: function() {}
    upvote() {
      this.submissions[0].votes++;
    },
  }
});

// Liefert die Instanz zur Root-Component zurück
const vm = app.mount("#app");
