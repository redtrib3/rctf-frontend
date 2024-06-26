<template>
  <HeroBanner  @update-filtered-types="updateFilteredTypes" @update-filtered-diff="updateFilteredDiff" />
  
  <h1 v-if="!filteredChallenges" class="flex justify-center font-bold font-mono m-5 text-gray-500" >No results found.</h1>

  
  <div  class="ml-8 mr-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-start">
      <ChallCard :solvedChalls="solvedChalls" v-for="(chall, index) in filteredChallenges" :key="index" :challJson="chall" @show-modal-event="ShowModal"/>
  </div>
  <Modal v-if="ModalPopup" :challengeData="currChallData" @challenge-solved="handleChallSolve" @closeModal="closeModal()"/>
  
  <Pagination :pageSetlength="pageSet.length" @page-clicked="setPage" />
  <ScrollToTop />
</template>

<script>
import HeroBanner from '@/components/HeroBanner.vue';
import ChallCard from '@/components/ChallCard.vue';
import Modal from '@/components/Modal.vue';
import Pagination from '@/components/Pagination.vue';
import ScrollToTop  from '@/components/ScrollToTop.vue';

export default {
name: 'App',
components: {
  HeroBanner,
  ChallCard,
  Modal,
  Pagination,
  ScrollToTop
},

data(){
    return {
    
      ModalPopup: false,
      currChallData: null,        // stores data for the currently selected Modal.
      allChallenges: [], 
      solvedChalls: [],         // keeps track of solved challenges.
      pageSet: [],             // list of all pages [[{...}],[{...}] ...]
      currChallSet: [],       // The currently shown page.
      filteredTypes: [],
      filteredDiff: [],
      currPageNo: 0
    };
  },


// fetch challenges from backend, and setup pages.
mounted(){

  this.fetchChallenges().then(pages => {
    this.pageSet = pages.reverse(); // latest first.
    this.currChallSet = pages[0];
  }).catch(err => {
    console.error(`ERROR: Cannot reach server. VERBOSE: ${err}`);
  });

},

computed: {
  
  filteredChallenges() {

      // is the backend running?
     let filteredChalls =  this.allChallenges.filter(chall => {
      // Filter by type
      const typeFiltered = this.filteredTypes.length === 0 || this.filteredTypes.includes(chall.type);
      // Filter by difficulty
      const diffFiltered = this.filteredDiff.length === 0 || this.filteredDiff.includes(chall.difficulty);
      return typeFiltered && diffFiltered;
    });

    // divide the filtered all challs into pages, 6 each.
    filteredChalls = this.divideChallenges(filteredChalls, 6);
    return filteredChalls[this.currPageNo];
  }
},


methods: {

  // event handler for modal challenge-solved event.
  handleChallSolve(challId){
    this.solvedChalls.push(challId)
  },

  // set the current page
  setPage(pageNo){
    this.currChallSet = this.pageSet[pageNo-1];
    this.currPageNo = pageNo-1;

  },

  isExpired(timestamp, ttl) {
    if(!timestamp){
      return true;
    }

    const old = new Date(timestamp).getTime();
    const now = new Date().getTime();

    // if ttl is hit
    return Math.abs(now-old) >= ttl;
  },

 

  async fetchChallenges() {
    const CACHE_EXPIRY = 600000; // 10 minutes

    try {
        const cache = JSON.parse(localStorage.getItem('chall-cache'));

        if (!cache || this.isExpired(cache.timestamp, CACHE_EXPIRY)) {
            const response = await fetch('/api/challenges');
            let data = await response.json();
            const localData = { challenges: data.reverse(), timestamp: new Date().toISOString() };
            localStorage.setItem('chall-cache', JSON.stringify(localData));

            this.allChallenges = data;
        } else {
            this.allChallenges = cache.challenges;
        }

        return this.divideChallenges(this.allChallenges, 6);

    } catch (error) {
        console.error('Error fetching challenges:', error);
        return [];
    }
  },

  // divide challenge array into pages, 6 per pg.
  divideChallenges(allchallengeArray, pageSize){
    let pages = []
    for(let i=0 ; i< allchallengeArray.length; i+=pageSize){
        let page = allchallengeArray.slice(i, i + pageSize);
        pages.push(page);
    }
    
    return pages
  },

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


body {
  font-family: 'Lato', serif;
  margin: 0
}

code {
  padding: 2px;
}


</style>
