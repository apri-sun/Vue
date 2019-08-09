<template>
    <div>
        <mt-swipe :show-indicators="false" :auto="6000">
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../img/menu1.png" />
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../img/menu2.png" />
                    <div class="mui-media-body">图片分享</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/shopping">
                    <img src="../../img/menu3.png" />
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../img/menu4.png" />
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../img/menu5.png" />
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../img/menu6.png" />
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    // created: {
    //     getSwiper()
    // },
    methods: {
        getSwiper: function() {
            this.$http.get("http://ww1.studyit.io/getlunbo").then(result => {
                console.log(result);
            });
        }
    }
};
</script>

<style lang="css" scoped>
.mint-swipe {
    height: 25vh;
}
.mint-swipe-item:nth-child(1) {
    background: url(https://p3.pstatp.com/list/pgc-image/RYVrRIP2jo21HE)
        no-repeat center/cover;
    width: 100%;
    height: 100%;
}
.mint-swipe-item:nth-child(2) {
    background: url(https://p3.pstatp.com/list/pgc-image/524bef014ce74956b50f8025d4a3f266)
        no-repeat center/cover;
    width: 100%;
    height: 100%;
}
.mint-swipe-item:nth-child(3) {
    background: url(https://p3.pstatp.com/list/pgc-image/710b25260a65405cbfe906471e80125b)
        no-repeat center/cover;
    width: 100%;
    height: 100%;
}
.mui-table-view {
    background-color: #fff !important;
}
.mui-table-view li {
    border: 0 !important;
}
.mui-table-view img {
    width: 60px;
    height: 60px;
}
</style>