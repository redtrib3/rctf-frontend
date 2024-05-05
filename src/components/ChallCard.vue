<template>
    
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg mx-4 my-4 shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-95 transform transition duration-300 relative">
        <a>
            <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-mono">{{ challJson.title }}</h5>
            <p class="text-sm pb-4 text-gray-400 font-mono transition duration-200">{{ challJson.type }} - {{ challJson.difficulty }}</p>
        </a>
        <div class="p-2">
            <p class="font-normal text-gray-700 dark:text-gray-400 text-sm pb-4 line-clamp-2" >{{ challJson.desc }}</p>
        </div>
        <button @click="showModal" class="mt-4 bottom-3 left-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Solve
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
        
    </div>

</template>

<script>

export default {
    name: 'ChallCard',
    props: { challJson: Object },
    methods: {
        showModal() {
            this.$emit('show-modal-event', this.challJson);
            // console.log(this.challJson);
        }
    }

}
</script>

