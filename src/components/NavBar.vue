<template>
  
<nav class="sticky top-0 z-50 shadow-lg  text-white w-screen border-gray-200 bg-gray-900 backdrop-blur-xl supports-backdrop-blur:bg-white/95 bg-slate-900/75">
  <div class="flex flex-wrap items-center justify-between mx-auto p-4 px-5 xl:px-12 py-6 w-full">
    <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse text-2xl font-semibold font-heading font-anonymouspro transition duration-1000 ease-out hover:text-lime-400">
      redtrib3
    </router-link>
    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button @click="changeBurgerIcon" id="hamburger" data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-900" aria-controls="navbar-cta" aria-expanded="false">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-transform duration-300 ease-in-out" :class="{ 'scale-x-[-1]': isOpen }"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
        </svg>
      </button>
    </div>



    <div class="animate-growDown items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent md:bg-transparent border-gray-700">

        <li>
          <a href="//blog.redtrib3.me" target="_blank" class="hover:bg-blue-800 md:hover:bg-transparent block py-2 px-3 md:p-0   md:font-semibold">Writeups</a>        
        </li>
        
        <li>
          <a href="/challenges" :class="{ 'text-lime-500 hover:bg-blue-800 md:hover:bg-transparent block py-2 px-3 md:p-0   md:font-semibold': isActive(), 'hover:bg-blue-800 md:hover:bg-transparent block py-2 px-3 md:p-0   md:font-semibold': !isActive() }">Challenges</a>        
        </li>

        <li>
          <router-link to="/projects"  active-class="text-lime-400" class="hover:bg-blue-800 md:hover:bg-transparent block py-2 px-3 md:p-0   md:font-semibold" aria-current="page">Projects</router-link>
        </li>
        <li>
          <router-link to="/socials" active-class="text-lime-400" class="hover:bg-blue-800 md:hover:bg-transparent block py-2 px-3 md:p-0   md:font-semibold" aria-current="page">Socials</router-link>
        </li>
      </ul>
    </div>

  </div>
</nav>



</template>

<script>
export default {
  name: 'NavBar',
  data(){
    return {
      isOpen: false
    }
  },


  methods:{
      isActive(){
        return this.$route.path === '/challenges';
      },

      changeBurgerIcon(){
        this.isOpen = !this.isOpen;
      }
 
    }
}

</script>