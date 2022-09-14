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
    },
    cardHeaderBackgroundColor() {
      return {
        "bg-primary": this.totalVotes >= 50,
        "text-white": this.totalVotes >= 50,
      }
    },
    cardTitleFontSize() {
      return {
        fontSize: this.totalVotes + "px"
      }
    }
  },
  methods: {
    // upvote: function() {}
    upvote(submissionID) {
      const submission = this.submissions.find(
        (submission) => submission.id === submissionID
      );
      submission.votes++;
    },
  },
});

// Liefert die Instanz zur Root-Component zurück
const vm = app.mount("#app");
