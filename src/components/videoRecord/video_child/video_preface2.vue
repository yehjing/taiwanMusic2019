<template>
  <div v-if="show" class="preface">
    <div class="title">
      <h2>藝術（當代創作）音樂</h2>
      <span @click="close" class="cross">
        <img width="20" src="./../../../assets/cross.png" />
      </span>
    </div>
    <!-- <hr> -->
    <!-- <p class="firstRow"></p> -->
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有鑑於本年鑑所記載的內容主要為2019年度臺灣音樂活動，影音紀錄更能幫助民眾理解以音樂為主體的各項音樂動態，《2019臺灣音樂年鑑》工作團隊擇選具有代表性的音樂活動影像，以做為《2019臺灣音樂年鑑》的保存與補充資料。本年鑑共收錄51支臺灣音樂影音紀錄，其中藝術（當代創作）篇共收錄9支影片。</p>
    <table rules="all" style="border:1px solid" cellpadding="5">
      <tbody>
        <tr>
          <td class="tableCenter">
            子計畫
          </td>
          <td class="tableCenter">
            序號
          </td>
          <td class="tableCenter">
            標題名稱
          </td>
        </tr>
        <tr>
          <td rowspan="5">
            國樂
          </td>
          <td class="tableCenter">
            1
          </td>
          <td>
            臺北市立國樂團2019年回顧影片
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            2
          </td>
          <td>
            2019竹塹國樂節－風吹樂動「聚菁匯城」閉幕音樂會《北管印象》片段
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            3
          </td>
          <td>
            2019國樂聯合創作發表會《社戲》片段
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            4
          </td>
          <td>
            桃園市國樂團2019年回顧影片
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            5
          </td>
          <td>
            臺灣國樂團「花漾寶島」《繁花》演出實況
          </td>
        </tr>
        <tr>
          <td rowspan="4">
            西樂及混合編制
          </td>
          <td class="tableCenter">
            1
          </td>
          <td>
            《春華秋水》德國E-MEX樂團與臺灣中青世代作曲家「2019臺灣音樂憶像系列」音樂會演出選粹
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            2
          </td>
          <td>
            2019 TSO 50週年團慶音樂會－溫隆信《臺北交響曲》第五樂章〈終曲〉選粹
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            3
          </td>
          <td>
            2019臺南藝術節閉幕製作－音樂劇場《聽海日記》
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            4
          </td>
          <td>
            2019 ACL「音樂台灣」2019作曲聯展－高雄場選粹：許常惠《鄉愁三調》
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