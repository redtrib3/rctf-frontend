<template>

<!-- Main modal -->
<div  class="flex backdrop-blur-sm transition-colors  supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75  overflow-y-auto overflow-x-hidden fixed top-0 left-0 right-0 z-50 justify-center items-center w-full h-full md:inset-0  max-h-screen">
    <div class="relative p-4 w-full max-w-2xl max-h-full ">
        <!-- Modal content -->
        <div class="relative rounded-lg shadow-lg bg-gray-900 bg-opacity-1">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <div>
                <h3 class="text-2xl font-bold font-mono text-gray-900 dark:text-white">
                    {{ challengeData.title }}
                </h3>
                <p class="text-sm text-gray-400 font-mono">{{ challengeData.type }} - {{ challengeData.difficulty }}</p>
                </div>
                <button @click="$emit('closeModal')" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4">
                <p class="text-base leading-relaxed text-gray-300 font-bold">Description</p>
                <p class="text-base pb-4 leading-relaxed text-gray-500 dark:text-gray-400">
                    {{ challengeData.desc }}
                </p>
                    <!--Attachment button v-if challenge has attachment link-->
                    <a v-if="challengeData.attachmentLink" :href="challengeData.attachmentLink" type="button" target="_blank" class="inline-flex items-center text-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                            <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z" />
                              <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
                        </svg>
                    <span class="mx-1">Attachments</span>
                    </a>


                    <!--Attachment button v-if challenge has URL link-->
                    <a v-if="challengeData.externalLink" :href="challengeData.externalLink" target="_blank"  type="button" class="inline-flex items-center text-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                      <path fill-rule="evenodd" d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                      <path fill-rule="evenodd" d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                    </svg>
                    <span class="mx-1">Link</span>
                    
                    </a>
            </div>
            <!-- Modal footer -->
        <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <!-- Input -->
            <input type="text"  class="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-none" placeholder="Flag: rctf{...}">
            <!-- Submit Button -->
            <button  type="button" class="text-white bg-teal-700 hover:bg-teal-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-1 dark:bg-teal-600 dark:hover:bg-teal-800 dark:focus:ring-teal-800 dark:focus:outline-none">Submit</button>
            <!-- Hint Button -->
             <button v-if="challengeData.hint" type="button" class="text-gray-900 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-1 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500">Hint</button>

        </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
    name: 'Modal',

    props: {
        challengeData: Object
    }
}
</script>