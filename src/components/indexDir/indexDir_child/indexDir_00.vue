<template>
  <div>
    <index-dir-preface1/>
    <div v-for="tab in tabs" :key="tab.name" @click="changeView(tab)">
      <div class="title rwdTitle">
        <h2>{{ tab.name }}</h2>
        <span>{{tab.autor}}</span>
      </div>
      <hr>
      <!-- <router-view></router-view> -->
      <!-- 原本要做在同一頁 -->
      <!-- <component  v-if="currentTab.name === tab.name" :is="currentTab.component"/> -->
    </div>
  </div>
</template>

<script>
import IndexDirPreface1 from './indexDir_preface1.vue';
import IndexDir12 from './indexDir_12.vue';
import IndexDir13 from './indexDir_13.vue';
import IndexDir14 from './indexDir_14.vue';
import IndexDir15 from './indexDir_15.vue';
import IndexDir16 from './indexDir_16.vue';
import IndexDir17 from './indexDir_17.vue';
import IndexDir18 from './indexDir_18.vue';
import IndexDir19 from './indexDir_19.vue';
import IndexDir20 from './indexDir_20.vue';
import IndexDir21 from './indexDir_21.vue';
import IndexDir22 from './indexDir_22.vue';


const tabs = [
  // {
  //   name: '序',
  //   autor: '',
  //   component: IndexDirPreface1,
  // },
  {
    name: '南管音樂篇',
    autor: '',
    component: IndexDir12,
    path: 'indexDir_12',
  },
  {
    name: '北管音樂篇',
    autor: '',
    component: IndexDir13,
    path: 'indexDir_13',
  },
  {
    name: '福佬歌謠篇',
    autor: '',
    component: IndexDir14,
    path: 'indexDir_14',
  },
  {
    name: '客家音樂篇',
    autor: '',
    component: IndexDir15,
    path: 'indexDir_15',
  },
  {
    name: '原住民音樂篇',
    autor: '',
    component: IndexDir16,
    path: 'indexDir_16',
  },
  {
    name: '佛、釋教音樂篇',
    autor: '',
    component: IndexDir17,
    path: 'indexDir_17',
  },
  {
    name: '道、法教音樂篇',
    autor: '',
    component: IndexDir18,
    path: 'indexDir_18',
  },
  {
    name: '國樂篇',
    autor: '',
    component: IndexDir19,
    path: 'indexDir_19',
  },
  {
    name: '西樂及混合編制篇',
    autor: '',
    component: IndexDir20,
    path: 'indexDir_20',
  },
  {
    name: '流行音樂篇',
    autor: '',
    component: IndexDir21,
    path: 'indexDir_21',
  },
  {
    name: '跨界音樂與其他篇',
    autor: '',
    component: IndexDir22,
    path: 'indexDir_22',
  },
];

export default {
  components: { IndexDirPreface1 },
  inject: ['initScroll'],
  data() {
    return {
      currentTab: tabs[0],
      tabs,
    };
  },
  created() {
    // this.$router.push(`observed/${this.tabs[0].name}`);
  },
  methods: {
    changeView(tab) {
      // this.$router.push({
      //   params: {
      //     name: tab.name,
      //   },
      // });
      console.log(tab.path);
      this.$router.push(`/indexDir/${tab.path}`);
      this.currentTab = tab;
      this.initScroll()
    },
  },
};
</script>
