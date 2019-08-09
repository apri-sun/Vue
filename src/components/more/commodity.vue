<template>
    <router-link :to="'/home/shopping/' + commoditylist.id" class="commodity-container">
        <img class="commodity-pic" :src="commoditylist.pic">
        <div class="commodity-info">
            <p class="price">￥ {{ commoditylist.price }}</p>
            <p class="status">热卖中</p>
            <p class="residue">剩余量: {{ commoditylist.residue }}</p>
        </div>
    </router-link>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: ["commoditylist"],
}
</script>

<style lang="scss" scoped>
    .commodity-container {
        box-shadow:0px 0px 5px #999;
        background-color: #eee;
        border-radius: 10px;
        width: 180px;
        margin: 5px auto;
        box-sizing: border-box;
        .commodity-pic {
            // background: url() no-repeat center/cover;
            height: 180px;
            width: 180px;
        }
        .commodity-info {
            width: 180px;
            padding: 5px;
            // box-sizing: border-box;
        }
        .price {
            color: rgb(223, 55, 4);
        }
        .status {
            float: left;
        }
        .residue {
            float: right;
        }
    }
</style>
