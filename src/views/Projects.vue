<template>

<SideNav />
<!--Content-->
<div  class="animate-fadeIn p-2 sm:ml-64" >

  <div class="bg-gray-900  text-white px-4 py-10 relative">
    <div class="container mx-auto">
        <h1 class="text-3xl md:text-3xl lg:text-4xl font-bold font-mono  ml-4">Projects</h1>
    </div>
  </div>

  <a  v-for="(proj, index) in projects" :key="index" title="Click to view" :href="proj.link" target="_blank">
    <div  class="cursor-pointer max-w p-6 bg-white border border-gray-200 rounded-lg mx-4 my-4 shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-[-4px] transform transition duration-300 relative">

            <h5 class="text-2xl  font-bold tracking-tight text-gray-900 dark:text-gray-100 ">{{  proj.title  }}</h5>
            <p class="text-sm pb-4 text-gray-400 font-mono transition duration-200">{{ proj.stack }}</p>
        <div>
            <p class="font-normal text-gray-700 dark:text-gray-400 text-sm" >{{ proj.desc }}</p>
        </div>

        <div class="flex items-center justify-end">
          <div class="flex items-center">
            <span class="mr-1 text-gray-400">{{  proj.stars }}</span>
            <svg  aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="w-3 h-5 fill-current text-amber-400">
              <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
            </svg>
            <span class="mr-1 ml-1 text-gray-400">{{  proj.forks }}</span>
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="w-3 h-5 fill-current text-white">
              <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
            </svg>
          </div>
        </div>
    </div>
  </a>

  <a href="https://github.com/redtrib3" class="justify-center flex items-center mt-10 pointer-events-none dark:from-slate-900 w-full" target="_blank" >
    <button type="button" class="relative bg-gray-800 hover:bg-gray-900 focus:outline-none  font-medium rounded-lg text-sm  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700  h-12 px-6 flex items-center pointer-events-auto">
        View More
    </button>
  </a>

  <FooterComp/>
  <ScrollToTop />
</div>

</template>

<script>

import FooterComp from '@/components/FooterComp.vue';
import SideNav from '@/components/SideNav.vue';
import ScrollToTop from '@/components/ScrollToTop.vue';

export default {
    name: 'Projects',
    components: {
      FooterComp,
      SideNav,
      ScrollToTop 
    },

    mounted(){
      this.fetchProjects();
    },

    data() {
      return {
        projects: []
      };
    },

    methods: {

      isExpired(timestamp, ttl) {
        if(!timestamp){
          return true;
        } 

        const old = new Date(timestamp).getTime();
        const now = new Date().getTime();

        // if ttl is hit
        return Math.abs(now-old) >= ttl;
      },

      async fetchProjects() {
        const CACHE_EXPIRY = 600000; // 10 minutes
        let projects = [];

        try {
          const cache = JSON.parse(localStorage.getItem('proj-cache'));

          if (!cache || this.isExpired(cache.timestamp, CACHE_EXPIRY)) {
              const response = await fetch('http://127.0.0.1:3000/api/projects');
              let data = await response.json();
              const localData = { projects: data, timestamp: new Date().toISOString() };
              localStorage.setItem('proj-cache', JSON.stringify(localData));

              this.projects = data;
          } else {
              this.projects = cache.projects;
          } 
          
        } catch (error) {
            console.error('Error fetching challenges:', error);
            return [];
        }
     },
    }
}

</script>

