<template>
    <div class="newslist-container">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in news" :key="item.id">
                <router-link :to="'/home/newslist/' + item.id">
                    <img class="mui-media-object mui-pull-left" src="https://i2.hdslb.com/bfs/face/f8be0adcbae684598ad497312012ca6951b39388.jpg@68w_68h.webp" />
                    <h1>{{ item.title }}</h1>
                    <div class="mui-media-body">
                        <p>{{ item.time }}</p>
                        <p class="mui-ellipsis">点击量:{{ item.count }}</p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            news: [
                { id: 1, title: "新闻标题1", time: "2019-8-9", count: 0 },
                { id: 2, title: "新闻标题2", time: "2019-8-9", count: 0 },
                { id: 3, title: "新闻标题3", time: "2019-8-9", count: 0 },
                { id: 4, title: "新闻标题4", time: "2019-8-9", count: 0 },
                { id: 5, title: "新闻标题5", time: "2019-8-9", count: 0 },
                { id: 6, title: "新闻标题6", time: "2019-8-9", count: 0 },
                { id: 7, title: "新闻标题7", time: "2019-8-9", count: 0 },
            ],
        };
    }
};
</script>

<style scoped>
    .mui-table-view-cell h1 {
        height: 16px;
        overflow: hidden;
        font-size: 16px;
    }
    .mui-table-view-cell a {
        background-color: #fff !important;
    }
    .mui-media-body {
        display: flex;
        justify-content: space-between;
    }
</style>
