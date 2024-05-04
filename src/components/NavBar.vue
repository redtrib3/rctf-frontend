<template>
     <nav class="flex shadow-lg justify-between bg-gray-900 text-white w-screen">
      <div class="px-5 xl:px-12 py-6 flex w-full items-center">
        <a class="text-2xl font-bold font-heading hover:text-lime-400 hover:animate-pulse" id="brand-head" href="/">
          redtrib3
        </a>
        <!-- Nav Links -->
        <ul id="nav-links" class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li><a class="hover:text-gray-300" href="#">Writeups</a></li>
          <li><a class="hover:text-gray-300" href="#">Challenges</a></li>
          <li><a class="hover:text-gray-300" href="#">Projects</a></li>
          <li><a class="hover:text-gray-300" href="#">Socials</a></li>
        </ul>
      </div>
      <!-- Responsive navbar -->
      <a id="nav-burger" class="navbar-burger self-center mr-6 md:hidden" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>      
      </a>
    </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>

#brand-head {
    font-family: 'Anonymous Pro', monospace;
}

</style>
