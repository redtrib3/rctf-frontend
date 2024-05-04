<template>
  <div class="bg-gradient-to-r from-gray-900 to-blue-900 shadow-md text-white py-20 relative">
    <div class="container mx-auto">
        <h1 class="text-3xl md:text-3xl lg:text-4xl font-bold mb-4 font-mono ml-4">Challenges<span class="animate-ping">_</span></h1>
        <p class="text-base md:text-lg lg:text-md mb-8 ml-4">A Collection of CTF challenges created by me.</p>
        <!-- <a href="#" class="md:hidden bg-blue-500 hover:bg-blue-600 text-white font-bold ml-4 py-2 px-4 rounded">Learn More</a> -->
        <!--Filter by Difficulty -->
        <div class="inline-flex md:hidden ml-4">
        <button id="dropdownBgHoverButton" data-dropdown-toggle="dropdownBgHover" class="relative text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="button">
            Difficulty
            <svg class="w-3 h-3 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>
        <!-- Dropdown menu -->
        <div id="dropdownBgHover" class="absolute right-0 mt-2 z-10 hidden w-48 bg-white rounded-lg shadow dark:bg-gray-700">
            <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
                <li v-for="(diff, index) in challDiffs" :key="index">
                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input  v-model="filteredDiff" id="checkbox-item-1" type="checkbox" :value="diff" class="w-4 h-4 text-green-500 bg-green-100 border-green-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label  for="checkbox-item-1" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">{{ diff }}</label>
                    </div>
                </li>
            </ul>
        </div>
        <!--Filter by type --->
        <button id="filterByTypeBtn" data-dropdown-toggle="filterByMenus" class="relative text-white bg-green-700  ml-2 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="button">
            Type
            <svg class="w-3 h-3 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>
        <!-- Dropdown menu -->
        <div id="filterByTypeMenus" class="absolute right-0 mt-2 z-10 hidden w-48 bg-white rounded-lg shadow dark:bg-gray-700">
            <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="filterByTypeBtn">
                <li v-for="(type, index) in challTypes" :key="index">
                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input v-model="filteredTypes" id="checkbox-item-4" type="checkbox" :value="type" class="w-4 h-4 text-green-500 bg-green-100 border-green-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="checkbox-item-4" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">{{ type }}</label>
                    </div>
                </li>

            </ul>
        </div>
        </div>
    </div>
    <div class="absolute bottom-0 right-0 mb-4 mr-4 hidden md:block">
        <!--Filter by Difficulty -->
        <button id="dropdownBgHoverButton" data-dropdown-toggle="dropdownBgHover" class="relative text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="button">
            Difficulty
            <svg class="w-3 h-3 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>
        <!-- Dropdown menu -->
        <div id="dropdownBgHover" class="absolute right-0 mt-2 z-10 hidden w-48 bg-white rounded-lg shadow dark:bg-gray-700">
            <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
                <li v-for="(diff, index) in challDiffs" :key="index">
                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input  v-model="filteredDiff" id="checkbox-item-1" type="checkbox" :value="diff" class="w-4 h-4 text-green-500 bg-green-100 border-green-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label  for="checkbox-item-1" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">{{ diff }}</label>
                    </div>
                </li>
            </ul>
        </div>
        <!--Filter by type --->
        <button id="filterByTypeBtn" data-dropdown-toggle="filterByMenus" class="relative text-white bg-green-700  ml-2 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="button">
            Type
            <svg class="w-3 h-3 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>
        <!-- Dropdown menu -->
        <div id="filterByTypeMenus" class="absolute right-0 mt-2 z-10 hidden w-48 bg-white rounded-lg shadow dark:bg-gray-700">
            <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="filterByTypeBtn">
                <li v-for="(type, index) in challTypes" :key="index">
                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input v-model="filteredTypes" id="checkbox-item-4" type="checkbox" :value="type" class="w-4 h-4 text-green-500 bg-green-100 border-green-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="checkbox-item-4" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">{{ type }}</label>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</div>

</template>

<script>

export default {
    name: 'HeroBanner',
    data(){
        return {
            challTypes: ['Web', 'Forensics', 'Crypto', 'Reversing','OSINT', 'Misc'],
            challDiffs: ['Easy', 'Medium', 'Hard'],
            filteredTypes: [],
            filteredDiff: [],
            isMobile: false
        }
    },
    
    watch: {
        filteredTypes: function() {
            this.$emit('update-filtered-types', this.filteredTypes);
        },
        filteredDiff: function() {
            this.$emit('update-filtered-diff', this.filteredDiff);
        }
    }
}
</script>
