<template>
  <div v-if="show" class="preface">
    <div class="title">
      <h2>跨界音樂與其他</h2>
      <span @click="close" class="cross">
        <img width="20" src="./../../../assets/cross.png" />
      </span>
    </div>
    <!-- <hr> -->
    <!-- <p class="firstRow"></p> -->
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有鑑於本年鑑所記載的內容為2019年度臺灣音樂活動，影音紀錄更能幫助民眾理解以音樂為主體的各項活動實況，《2019臺灣音樂年鑑》工作團隊擇選具有代表性的音樂活動影像，以做為《2019臺灣音樂年鑑》的保存與補充資料。本年鑑共收錄51支臺灣音樂影音紀錄，其中跨界音樂其他篇收錄3支影片。</p>
    <table rules="all" style="border:1px solid" cellpadding="5">
      <tbody>
        <tr>
          <td>
            子計畫
          </td>
          <td>
            序號
          </td>
          <td>
            標題名稱
          </td>
        </tr>
        <tr>
          <td rowspan="3">
            跨界音樂與其他
          </td>
          <td>
            1
          </td>
          <td>
            臺灣燈會在屏東－國際燈區新住民藝術表演「藝遊未境」系列活動
          </td>
        </tr>
        <tr>
          <td>
            2
          </td>
          <td>
            東南亞樂舞表演
          </td>
        </tr>
        <tr>
          <td>
            3
          </td>
          <td>
            爪哇伯公：漫步日惹鄉村傳唱臺灣民間故事
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true
    };
  },
  methods: {
    close() {
      this.show = false;
    }
  }
};
</script>