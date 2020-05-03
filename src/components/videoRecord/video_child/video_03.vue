<template>
  <div>
    <VideoPreface4/>
    <div v-for="tab in tabs" :key="tab.name" @click="changeView(tab)">
      <div class="title rwdTitle">
        <h2>{{ tab.name }}</h2>
        <span>{{tab.autor}}</span>
      </div>
      <hr>
      <!-- <component  v-if="currentTab.name === tab.name" :is="currentTab.component"/> -->
    </div>
  </div>
</template>

<script>
import VideoPreface4 from './video_preface4.vue';
import Video14 from './video_14.vue';


const tabs = [
  // {
  //   name: '跨界音樂(序)',
  //   autor: '',
  //   component: VideoPreface4,
  // },
  {
    name: '跨界音樂',
    autor: '',
    component: Video14,
    path: 'videoRecord_14',
  },
];

export default {
  components: { VideoPreface4 },
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
      this.$router.push(`/videoRecord/${tab.path}`);
      this.currentTab = tab;
    },
  },
};
</script>
