<template>
    <NavBar />
    <HeroBanner  @update-filtered-types="updateFilteredTypes" @update-filtered-diff="updateFilteredDiff" />
    
    <h1 v-if="filteredChallenges.length === 0" class="flex justify-center font-bold font-mono m-5 text-gray-500" >No results found.</h1>
    
    <div  class="ml-8 mr-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-start">
        <ChallCard v-for="(chall, index) in filteredChallenges" :key="index" :challJson="chall" @show-modal-event="ShowModal"/>
    </div>
    <Modal v-if="ModalPopup" :challengeData="currChallData" @closeModal="closeModal()"/>
    <FooterComp />
</template>

<script>
import NavBar from './components/NavBar.vue';
import HeroBanner from './components/HeroBanner.vue';
import ChallCard from './components/ChallCard.vue';
import FooterComp from './components/FooterComp.vue';
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    HeroBanner,
    ChallCard,
    Modal,
    FooterComp
  },

  data(){
    return {

      ModalPopup: false,
      currChallData: null,
      challenges : [
      {
        title: "Pipeline",
        type: "Web",
        difficulty: "Hard",
        desc: " A house keeper who has to take care of many people at once “Man am I lucky to have a Nano!” ",
        hint: null,
        attachmentLink: null,
        externalLink: "http://google.com"
      },
    {
        title: "Gobsufucated",
        type: "Reversing",
        difficulty: "Medium",
        hint: null,
        desc: " Walking is a simple yet effective way to improve your health. Not only is it a great form of low-impact exercise that can prevent witches from hexing you, but it can also make you touch grass. Go ahead, Take a walk! ",
        attachmentLink: "http://redtrib3.me/file",
        externalLink: null
    },
    {
        title: "Gutty Mystery",
        type: "OSINT",
        difficulty: "Easy",
        hint: "The hint is life around you",
        desc: " Looking for answers? Look no further! Crush search, the ultimate Crush-search engine , is here to help. Just type in your crush's name and discover a world of information at your fingertips, even the phone number!. Fast, reliable, and easy to use, Don't waste time, start Crushing today! ",
        attachmentLink: null,
        externalLink: null
    },
    {
        title: "Gutty 2",
        type: "OSINT",
        difficulty: "Medium",
        hint: "This another hint btw.",
        desc: " The Web-Times has requested a black box pentest. As a pentester, find ways to exploit the server and retrive the flag. ",
        attachmentLink: null,
        externalLink: "http://google.com.1"
    }
    ],
        filteredTypes: [],
        filteredDiff: [],
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

    ShowModal(challengeData){
      this.currChallData = challengeData;
      this.ModalPopup = true;

    },
    closeModal(){
      this.ModalPopup = false;
      this.currChallData = null;
    },

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
