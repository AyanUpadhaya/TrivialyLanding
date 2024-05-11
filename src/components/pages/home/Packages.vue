<template>
    <div class=" overflow-hidden">
        <div class="hidden lg:block">
            <TrivialyLargePackage :isParaWhite="true" :isHeadingWhite="true" ></TrivialyLargePackage>
        </div>
        <div class="block lg:hidden px-4 bg-darkslateblue pb-[60px]" >
            <TrivialyMobilePackages></TrivialyMobilePackages>
        </div>
        
    </div>
</template>


<script>
    import TrivialyLargePackage from "./TrivialyLargePackage.vue"
    import TrivialyMobilePackages from "./TrivialyMobilePackages.vue"
    export default {
        components:{
            
            TrivialyLargePackage,
            TrivialyMobilePackages
        }
        
    }
</script>

<style scoped>

</style>