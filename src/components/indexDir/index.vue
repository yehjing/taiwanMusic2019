<template>
  <section class="wrapContain">
    <aside class="linkLeft">
      <div class="middleItem noLeaf" :class="activeName === '' ? 'active' :''" @click="clickLink('')">
        團體及個人名錄
      </div>
      <div class="middleItem noLeaf" :class="activeName === 'indexDir_01' ? 'active' :''" @click="clickLink('indexDir_01')">
        重要音樂活動一覽表
      </div>
    </aside>
    <div class="viewRight">
      <router-view></router-view>
      <Share></Share>
    </div>
  </section>
</template>

<script>
import Share from '../share.vue';

export default {
  components: {
    Share,
  },
  data() {
    return {
      activeName: '',
    };
  },
  created() {
  },
  methods: {
    clickLink(data) {
      this.activeName = data;
      this.$router.push(`/indexDir/${data}`);
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
