<template>

<!--Side nav-->
<aside  class="fixed left-0 z-40 w-64 transition-transform -translate-x-full sm:translate-x-0" >
   <div class="h-screen px-3 py-1 overflow-y-auto bg-gray-800">
      <ul class="space-y-1 font-medium">

        <!--skills-->
        <div v-for="skillArr, head in skills" :key="head">

          <div class="text-gray-400 text-lg font-sans">{{head}}</div>
          <hr class="my-0.5 border-gray-700" />

          <div class="flex flex-wrap" >
                  <span v-for="(skill, index) in skillArr" :key="index" class="bg-gray-900 m-1 cursor-default  text-xs font-medium me-2 px-2.5 py-0.5 rounded text-gray-300 hover:bg-green-500 hover:text-gray-800">{{ skill }}</span>
          </div>
        </div>
      </ul>
      </div>
</aside>

</template>

<script>

export default{
    name: 'SideNav',
    data(){
        return {
          skills:{
            Languages: ['Python', 'NodeJs', 'C', 'Java', 'Bash', 'Visual Basic' ],
            Cybersecurity: ['Webapp Pentesting',  'NetworkSec', 'Linux Pentesting', 'Capture-the-flag', 'Cryptography'],
            Frameworks: ['ExpressJS', 'Django', 'Flask', 'FastAPI', 'VueJS'],
            DevOps: ['Git', 'Docker', 'Postman', 'GNU/Linux '],
            Others: ['MySQL', 'MongoDB']
          }
        };
    }
}

</script>