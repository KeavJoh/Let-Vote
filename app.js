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
      };
    },
    cardTitleFontSize() {
      return {
        fontSize: this.totalVotes + "px",
      };
    },
  },
  methods: {
    // upvote: function() {}
/*     upvote(submissionID) {
      const submission = this.submissions.find(
        (submission) => submission.id === submissionID
      );
      submission.votes++;
    }, */
  },
});

// Globale Component
app.component("SubmissionListItem", {
  // Optionen
  props: ["submission"],
  methods: {
    upvote() {
      this.submission.votes++;
    }
  },
  template: `
  <div class="d-flex">
   <div class="d-shrink-0">
    <img :src="submission.img" alt="placeholder" />
   </div>
   <div class="flex-grow-1 ms-3">
    <!-- <h5 v-once> -->
    <h5>
      {{ submission.title }}
      <span
        class="float-end text-primary"
        style="cursor: pointer"
        @click="upvote()"
        ><i class="fa fa-chevron-up"></i
        ><strong>{{ submission.votes }}</strong></span
      >
    </h5>
    <!-- <div>{{ submissions[0].desc }}</div> -->
    <div v-html="submission.desc"></div>
    <small class="text-muted"
      >Gericht kommt aus: {{ submission.author }}</small
    >
   </div>
  </div>
  `
});

// Liefert die Instanz zur Root-Component zurück
const vm = app.mount("#app");
