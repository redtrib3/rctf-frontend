<template>
    <NavBar />
    <HeroBanner  @update-filtered-types="updateFilteredTypes" @update-filtered-diff="updateFilteredDiff" />
    <div class="ml-8 mr-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-start">
        <ChallCard v-for="(chall, index) in filteredChallenges" :key="index" :challJson="chall" />
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import HeroBanner from './components/HeroBanner.vue';
import ChallCard from './components/ChallCard.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    HeroBanner,
    ChallCard
  },
  data(){
    return {
    
        challenges : [
        {
        title: "Pipeline",
        type: "Web",
        difficulty: "Hard",
        desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
    {
        title: "Gobsufucated",
        type: "Reversing",
        difficulty: "Medium",
        desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
    {
        title: "Gutty Mystery",
        type: "OSINT",
        difficulty: "Easy",
        desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
    {
        title: "Gutty 2",
        type: "OSINT",
        difficulty: "Medium",
        desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    }
    ],


        filteredTypes: [],
        filteredDiff: []
    };
  },
  computed: {
    // Filtered challenges based on selected filters
    filteredChallenges() {
      return this.challenges.filter(chall => {
        // Filter by type
        const typeFiltered = this.filteredTypes.length === 0 || this.filteredTypes.includes(chall.type);
        // Filter by difficulty
        const diffFiltered = this.filteredDiff.length === 0 || this.filteredDiff.includes(chall.difficulty);
        return typeFiltered && diffFiltered;
      });
    }
  },
  methods: {

    updateFilteredTypes(types) {
      this.filteredTypes = types;
    },

    updateFilteredDiff(diff) {
      this.filteredDiff = diff;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap');

body {
    animation: fadeInAnimation ease .9s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    font-family: 'Lato', serif;
    margin: 0
}

@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

</style>
