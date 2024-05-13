<template>

<nav>
    <ul class="flex justify-center m-4 -space-x-px text-sm">
        <li v-for="page in pageSetlength" :key="page">
          <a :id="`pg-${page}`" @click="pageClick(page)" :class="{'flex items-center rounded-lg opacity-60 cursor-pointer m-2  justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-800 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white': true, 'opacity-100 dark:bg-gray-900  dark:border-gray-700': activePage === page, '': activePage!==page}">{{ page }}</a>
        </li>
    </ul>
</nav>

</template>

<script>
export default {
    name: 'Pagination',
    props: {
        pageSetlength: Number,
    },
    data(){
        return {
            activePage: 1,
        }
    },
    methods: {
        setStyleActive(page){
            this.activePage = page;

        },
        pageClick(pageNum) {
            this.setStyleActive(pageNum);
            this.$emit('page-clicked', pageNum);
        }
    }
}
</script>