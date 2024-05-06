<script setup>

    let displayText = ""

    const loading = ref(false)

    const { add, sub } = useUtils()

    const load = () => {
        if(loading.value) {
            return
        }
        displayText = add(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10))
        //console.log(loading.value)
        loading.value = true
        setTimeout(() => {
            loading.value = false
            displayText = ""
        }, 1000)
    }

</script>

<template>
    <Nav></Nav>
    <div class="flex flex-col p-4">
        <!-- <div v-for="item in colors">
            {{item}}
        </div> -->
        {{  displayText }}
        <button @click="load" class="p-4 font-semibold bg-gray-200 hover:bg-gray-300 w-24 rounded-xl">
            <div v-if="loading">
                Loading...
            </div>
            <div v-else>
                Click me
            </div>
        </button>
    </div>
</template>