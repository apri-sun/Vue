<template>
        <div class="wrap">
            <mt-header fixed title="明日头条"></mt-header>
                <transition mode="out-in">
                    <router-view></router-view>
                </transition>
            <nav class="mui-bar mui-bar-tab">
                <router-link class="mui-tab-item" to="/home">
                    <span class="mui-icon mui-icon-home"></span>
                    <span class="mui-tab-label">首页</span>
                </router-link>
                <router-link class="mui-tab-item" to="/vip">
                    <span class="mui-icon mui-icon-contact"></span>
                    <span class="mui-tab-label">会员</span>
                </router-link>
                <router-link class="mui-tab-item" to="/shopcar">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
                    <span class="mui-tab-label">购物车</span>
                </router-link>
                <router-link class="mui-tab-item" to="/search">
                    <span class="mui-icon mui-icon-search"></span>
                    <span class="mui-tab-label">搜索</span>
                </router-link>
            </nav>
        </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .v-enter,.v-leave-to {
        opacity: 0;
        transform: translateX(100%);
        position: absolute;
    }
    .v-enter-active {
        transition: all .1s ease;
    }
    .v-leave-active {
        transition: all .1s ease;
        transform: translateX(-100%);
    }
</style>