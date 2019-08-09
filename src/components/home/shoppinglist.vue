<template>
    <div class="shopping-container">
        <commodity v-for="item in commoditylist" :key="item.id" v-bind:commoditylist='item'></commodity>
    </div>
</template>

<script>
import commodity from '../more/commodity.vue'
export default {
    data() {
        return {
            commoditylist: [
                { id: 1, price: 700, pic: "https://img11.360buyimg.com/da/s590x470_jfs/t1/53782/6/6460/69553/5d40f344E4c1825e0/4c867d3bd358af26.jpg.webp", residue: 0, },
                { id: 2, price: 7800, pic: "https://img11.360buyimg.com/mobilecms/s140x140_jfs/t1/42741/16/10832/129167/5d43e115E55a0a774/0f700f11d2cea62a.jpg.webp", residue: 20,},
            ],
        }
    },
    methods: {},
    components: {
        commodity,
    }
}
</script>

<style lang="scss" scoped>
.shopping-container {
    display: flex;
    flex-wrap: wrap;
}
</style>
