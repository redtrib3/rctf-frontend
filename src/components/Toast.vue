<template>
    <div id="toast-success" class="absolute top-0 right-0 z-50 mt-4 mr-4 w-30 h-10 ">
        <div  class="flex items-center w-full max-w-xs p-4 mb-4 top-4 right-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
            <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-yellow-500 bg-yellow-100 rounded-lg dark:bg-yellow-700 dark:text-yellow-200">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" fill="currentColor">
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,21h-2v-7h2V21z M15,11.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S15.828,11.5,15,11.5z"></path>
                </svg>
            </div>
            <div class="ms-3 text-sm font-normal p-2 ">{{ message }}</div>

        </div>
    </div>
</template>


<script>
export default {
    name: 'Toast',
    props: {
        message: String,
    }
}
</script>