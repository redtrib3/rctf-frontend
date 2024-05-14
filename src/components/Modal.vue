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
                    <span class="flex">
                        {{ challengeData.title }}
                        <svg v-if="challengeIsSolved" class="m-2 w-4 h-4 fill-current text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M11.707,15.707C11.512,15.902,11.256,16,11,16s-0.512-0.098-0.707-0.293l-4-4c-0.391-0.391-0.391-1.023,0-1.414 s1.023-0.391,1.414,0L11,13.586l8.35-8.35C17.523,3.251,14.911,2,12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10 c0-1.885-0.531-3.642-1.438-5.148L11.707,15.707z"></path>
                        </svg>
                    </span>
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
                    <a v-if="challengeData.attachmentLink" :href="challengeData.attachmentLink" type="button" class="inline-flex items-center text-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">

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
            <input v-model="userFlag" type="text" class="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 border-none dark:placeholder-gray-400 dark:text-white dark:focus:outline-none" placeholder="Flag: rctf{...}">
            <!-- Submit Button -->
            <button :disabled="BtnIsDisabled" @click="submitFlag" type="button" :class="{'text-white bg-teal-700 hover:bg-teal-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-1 dark:bg-teal-600 dark:hover:bg-teal-800 dark:focus:ring-teal-800 dark:focus:outline-none': true, 'opacity-50 cursor-not-allowed': BtnIsDisabled }">
                <span v-if="BtnIsLoading">
                    <svg aria-hidden="true" role="status" class="inline mr-3.5 ml-3.5 w-4 h-4  animate-spin dark:text-gray-200" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"></path>
                    </svg>
                </span>
                <span v-else>
                    Submit
                </span>
            </button>
            <!-- Hint Button -->            
             <button @click="showHint" v-if="challengeData.hint" type="button" class="text-gray-900 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-1 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500">Hint</button>

        </div>
        </div>
    </div>

    <!--Toast-->
    <Toast v-if="showHintToast" :message="challengeData.hint" state="warning"/>
    <Toast v-if="showRespToast" :message="respToastMsg" :state="responseTheme"/>

</div>



</template>

<script>
import Toast from '@/components/Toast.vue';

export default {
    name: 'Modal',
    components: { Toast },
    props: {
        challengeData: Object
    },
    
    data(){
        return {
            showRespToast: false,
            respToastMsg: '',
            responseTheme: '',
            showHintToast: false,
            userFlag: '',
            BtnIsLoading: false,
            BtnIsDisabled: false,
            challengeIsSolved: false
        }
    },

    methods:{


        showHint(){
            this.showHintToast  = true;
            setTimeout(()=>{
                this.showHintToast = false;
            }, 5000);
        },

        showResponse(message){
            this.respToastMsg = message;
            this.showRespToast = true;
            setTimeout(() => {
                this.showRespToast = false;
            }, 5000);
        },

        challengeCompleted(challId){
            this.$emit('challenge-solved', challId);
            this.challengeIsSolved = true;
        },

        async submitFlag() {
            
            this.BtnIsLoading = true;

            try {
                const response = await fetch('http://127.0.0.1:3000/api/submit-flag', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ 
                        chal_id: this.challengeData.id, //change
                        flag: this.userFlag.trim() 
                    })
                });

                const data = await response.json();
                if (data.success){
                    this.showResponse('Yay, Correct Flag');
                    this.responseTheme = 'success';
                    this.BtnIsDisabled = true;
                    
                    this.challengeCompleted(this.challengeData.id);

                } else {
                    this.showResponse('Wrong flag, Try again');
                    this.responseTheme = 'failure';
                    this.userFlag = '';
                }

                

            } catch (error) {
                this.showResponse('Some error occured');
                this.responseTheme = 'failure';
                console.error('Error submitting flag:', error);
            }
            
            setTimeout(() => {
                this.BtnIsLoading = false;
            }, 1000);
            
        }
    }
}
</script>