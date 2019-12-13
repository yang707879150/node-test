<template>
    <div>
       首页
    </div>
</template>

<script>
import {getActIndex} from "api/login"
export default {
    props: {

    },
    data() {
        return {

        };
    },
    computed: {

    },
    created() {
      getActIndex().then(res=>{
        
      })
    },
    mounted() {

    },
    watch: {

    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped>

</style>
