<template>
    <!-- 评论列表 -->
    <div class="comment-container">
        <h1 class="comment-head">发表评论</h1>
        <hr />
        <textarea v-model="inputValue" placeholder="请输入需要BB的内容(最多120字)" maxlength="120"></textarea>
        <mt-button class="sub-btn" type="primary" @click="handlerPost">发表看法</mt-button>
        <ul>
            <li class="list" v-for="item in commentlist" :key="item.id">
                <p class="user-info">第{{ item.id }}楼 用户:{{ item.user }} 发表时间:{{ item.time | inittime }}</p>
                <p class="comment-inner">{{ item.container }}</p>
            </li>
        </ul>
        <mt-button class="sub-btn" plain>加载评论</mt-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputValue:"",
            commentlist: [
                { id: 1, user: "sxf", time: new Date(), container: "哇哈哈" },
                { id: 2, user: "sdf", time: new Date(), container: "啦啦啦" },
                { id: 3, user: "sf", time: new Date(), container: "顶顶顶" },
                { id: 4, user: "ssf", time: new Date(), container: "沙发" },
            ],
        }
    },
    methods:{
        handlerPost:function(){
            const msg=this.inputValue
            const a={ id: this.commentlist.length+1, user: "ssf", time: new Date(), container:msg  }
            this.commentlist.push(a)
            this.inputValue = ''
        }
    }
}
</script>

<style lang="scss" scoped>
    .comment-container {
        .comment-head {
            font-size: 20px;
            margin: 0 10px;
        }
        textarea {
            position: relative;
            width: 94%;
            height: 100px;
            left: 50%;
            transform: translateX(-50%);
        }
        .sub-btn {
            width: 94%;
            margin-left: 3%;
        }
        ul {
            margin: 10px 0;
        }
        .list {
            margin: 0;
        }
        .user-info {
            line-height: 30px;
            background-color: #eee;
        }
    }
</style>
