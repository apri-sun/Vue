<template>
    <div class="newsinfo-container">
        <h1 class="title">{{ title }}</h1>
        <div class="time-click">
            <p class="time">{{ time }}</p>
            <p class="click">点击量:{{ count }}</p>    
        </div>
        <hr>
        <div class="info">{{ info }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            title: null,
            time: null,
            count: null,
            info: null,
            newsinfo: [
                { id: 1, title: "新闻标题1", time: "2019-8-9", count: 0, info: "111" },
                { id: 2, title: "新闻标题2", time: "2019-8-9", count: 0, info: "222" },
                { id: 3, title: "新闻标题3", time: "2019-8-9", count: 0, info: "333" },
                { id: 4, title: "新闻标题4", time: "2019-8-9", count: 0, info: "444" },
                { id: 5, title: "新闻标题5", time: "2019-8-9", count: 0, info: "555" },
                { id: 6, title: "新闻标题6", time: "2019-8-9", count: 0, info: "666" },
                { id: 7, title: "新闻标题7", time: "2019-8-9", count: 0, info: "777" },
            ],
        }
    },
    created: function() {
        this.newsinit()
    },
    methods: {
        newsinit: function() {
            for(let i of this.newsinfo) {
                if(i.id == this.id) {
                    this.title = i.title
                    this.time = i.time
                    this.count = i.count
                    this.info = i.info
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
    .newsinfo-container {
        .title {
            margin-top: 15px;
            font-size: 18px;
            text-align: center;
        }
        p {
           display: inline-block;
           margin: 0;
        }
        .time-click {
            padding: 0 10px;
            display: flex;
            justify-content: space-between;
        }
        .info {
            padding: 10px;
        }
    }
</style>