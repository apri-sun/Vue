<template>
    <div class="newsinfo-container">
        <h1 class="title">{{ title }}</h1>
        <div class="time-click">
            <p class="time">{{ time }}</p>
            <p class="click">点击量:{{ count }}</p>    
        </div>
        <hr>
        <div class="info">{{ info }}</div>
        <comment></comment>
    </div>
</template>

<script>
import comment from '../more/comment.vue'
export default {
    data() {
        return {
            id: this.$route.params.id,
            title: null,
            time: null,
            count: null,
            info: null,
            newsinfo: [
                { id: 1, title: "新闻标题1", time: "2019-8-9", count: 0, info: "中南海连着最基层，人民领袖和人民群众心贴心。党的十八大以来，习近平总书记多次给基层干部群众回信。从脱贫攻坚，到志愿服务；从大学校园，到民营企业；从祖国边疆，到创新一线……一封封回信，饱含深情、字字暖心、催人奋进，体现着心心相印的人民情怀，蕴含着对治国理政的深刻思考，表达着对奋进新时代的殷切希望。人民日报推出“牢记嘱托 奔跑追梦——收到总书记回信之后”系列报道，与您一起见证发展变化、感悟初心使命。今天刊发第七篇《浙江大陈岛老垦荒队员后代：争做新时代的“垦荒者”》。“习爷爷给我们回信啦！” 82岁的张其元与老伴戴婕嬃是63年前第一批登上大陈岛的垦荒队员，队友们离岛后，他们选择留下并在此结婚安家。老两口至今对3年前孙女张婧怡打来的电话记忆犹新。两鬓斑白，青春无悔，张其元告诉记者：“垦荒精神一代代传承，我们当年的付出，已经有了最好的回报。”" },
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
    },
    components: {
        comment,
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