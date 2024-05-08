<script setup>

    

    let displayText = ""

    const loading = ref(false)

    const { add, sub } = useUtils()

    const loadImage = async () => {

        if(loading.value == true) {
            return
        }

        displayText = "Loading..."

        loading.value = true
        let img = await useFetch(`https://dummyjson.com/products/${Math.floor(Math.random() * 20)}`)
        loading.value = false

        let { id, title, description } = img.data.value

        if(description) {
            displayText = description
        }
        else {
            displayText = "Error when fetching"
        }
    }

</script>

<template>
    <Nav></Nav>
    <div class="flex flex-col p-4">
        <!-- <div v-for="item in colors">
            {{item}}
        </div> -->
        {{  displayText }}
        <button @click="loadImage" class="p-4 font-semibold bg-gray-200 hover:bg-gray-300 w-24 rounded-xl">
            <div v-if="loading">
                Loading...
            </div>
            <div v-else>
                Click me
            </div>
        </button>
    </div>
</template>