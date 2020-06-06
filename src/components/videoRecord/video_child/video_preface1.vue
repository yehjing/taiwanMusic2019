<template>
  <div v-if="show" class="preface">
    <div class="title">
      <h2>傳統音樂</h2>
      <span @click="close" class="cross">
        <img width="20" src="./../../../assets/cross.png" />
      </span>
    </div>
    <!-- <hr> -->
    <!-- <p class="firstRow"></p> -->
    
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有鑑於本年鑑所記載的內容主要為2019年度臺灣音樂活動，影音紀錄更能幫助民眾理解以音樂為主體的各項音樂動態，《2019臺灣音樂年鑑》工作團隊擇選具有代表性的音樂活動影像，以做為《2019臺灣音樂年鑑》的保存與補充資料。本年鑑共收錄51支臺灣音樂影音紀錄，其中傳統音樂篇共收錄38支影片。</p>
    <table rules="all" style="border:1px solid" cellpadding="5">
      <tbody>
        <tr>
          <td class="tableCenter">
            子計畫
          </td>
          <td width="4%" class="tableCenter">
            序號
          </td>
          <td class="tableCenter">
            標題名稱
          </td>
        </tr>
        <tr>
          <td rowspan="4">
            南管音樂
          </td>
          <td class="tableCenter">
            1
          </td>
          <td>
            慶祝台北聚賢堂一五四週年暨和鳴南樂社二十二週年整絃會奏
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            2
          </td>
          <td>
            戲細品味「108一桌二椅 秋意有藝事」－合和藝苑《蔣世隆‧瀟湘店》
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            3
          </td>
          <td>
            劉冠伶・劉憶靜碩一南管聯合音樂會
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            4
          </td>
          <td>
            「元宵十五－陳三五娘本事」南管音樂會
          </td>
        </tr>
        <tr>
          <td rowspan="4">
            北管音樂
          </td>
          <td class="tableCenter">
            1
          </td>
          <td>
            基隆市2019西秦盛典－聚樂社一組祝壽排場暨文化保存團體授證典禮
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            2
          </td>
          <td>
            技藝傳薪－108年度重要傳統表演藝術重要傳統工藝傳習成果展（北管音樂－邱火榮傳習計畫）
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            3
          </td>
          <td>
            技藝傳薪－108年度重要傳統表演藝術重要傳統工藝傳習成果展（亂彈戲－潘玉嬌傳習計畫）
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            4
          </td>
          <td>
            潮和社90週年慶社慶大典
          </td>
        </tr>
        <tr>
          <td rowspan="4">
            福佬歌謠
          </td>
          <td class="tableCenter">
            1
          </td>
          <td>
            2019總統府音樂會（Presidential Office Concert）－「總統府建築百年慶」
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            2
          </td>
          <td>
            2019亞太傳統藝術節：大地慶典－農村節慶與無形文化資產的對話
            北寧官賀民歌「國立北寧官賀民歌藝術團」（越南）vs.滿州民謠「屏東縣滿州鄉民謠協進會」（臺灣）
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            3
          </td>
          <td>
            2019唸歌年度大戲－《青竹絲奇案》
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            4
          </td>
          <td>
            2019臺灣文博會－演變舞臺《唸啥咪歌》
          </td>
        </tr>
        <tr>
          <td rowspan="4">
            客家音樂
          </td>
          <td class="tableCenter">
            1
          </td>
          <td>
            108年度「傳統客家音樂人才培訓－北管八音研習」
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            2
          </td>
          <td>
            108年度「客家就在巷子裡」
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            3
          </td>
          <td>
            「2019六堆運動會－六堆客音風采 創作之夜」
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            4
          </td>
          <td>
            富安教會客家詩歌、民謠分享會
          </td>
        </tr>
        <tr>
          <td rowspan="5">
            原住民音樂－泰雅族、賽夏族、阿美族、卑南族、雅美（達悟）族
          </td>
          <td class="tableCenter">
            1
          </td>
          <td>
            泰雅族 107學年度全國師生鄉土歌謠比賽 原住民語國中團體組
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            2
          </td>
          <td>
            賽夏族 2019桃園市原住民族歲時祭儀－賽夏族 祖靈祭 paSbaki'
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            3
          </td>
          <td>
            阿美族 杵音文化藝術團2019年度公演劇展《守護者伊娜INA》
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            4
          </td>
          <td>
            卑南族 下賓朗部落大獵祭
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            5
          </td>
          <td>
            雅美（達悟）族 世代之聲－臺灣族群音樂紀實系列：傾聽達悟 大海的搖籃曲
          </td>
        </tr>
        <tr>
          <td rowspan="3">
            原住民音樂－太魯閣族、鄒族、撒奇萊雅族
          </td>
          <td class="tableCenter">
            1
          </td>
          <td>
            太魯閣族 2019秀林鄉太魯閣族感恩祭儀
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            2
          </td>
          <td>
            鄒族 108年度特富野社mayasvi
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            3
          </td>
          <td>
            撒奇萊雅族 108年度Sakul部落豐年祭
          </td>
        </tr>
        <tr>
          <td rowspan="5">
            原住民音樂－排灣族、魯凱族、卡那卡那富族、拉阿魯哇族、平埔族
          </td>
          <td class="tableCenter">
            1
          </td>
          <td>
            排灣族 鼻笛資源手冊及教師研習與學生體驗工坊
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            2
          </td>
          <td>
            排灣族 108年來義鄉鄉運傳統歌謠比賽
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            3
          </td>
          <td>
            魯凱族 108年萬山部落勇士祭（Ta'avalra）
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            4
          </td>
          <td>
            拉阿魯哇族 雁爾社聖貝祭
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            5
          </td>
          <td>
            平埔族－馬卡道 加蚋埔聯合夜祭
          </td>
        </tr>
        <tr>
          <td rowspan="4">
            原住民音樂－邵族、布農族、噶瑪蘭族、賽德克族
          </td>
          <td class="tableCenter">
            1
          </td>
          <td>
            邵族 2019年邵族祖靈祭Lus'an
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            2
          </td>
          <td>
            布農族 「越嶺－聆聽布農族的音樂故事」音樂會<br>
            布農族 108年布農音樂Pasibutbut傳習計劃－暑期青少年布農族傳統音樂夏令營
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            3
          </td>
          <td>
            噶瑪蘭族 海祭sepaw tu lazing
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            4
          </td>
          <td>
            賽德克族 2019年賽德克族聯合歲時祭儀（本篇內容經賽德克族傳智授權）
          </td>
        </tr>
        <tr>
          <td>
            佛、釋教音樂
          </td>
          <td class="tableCenter">
            1
          </td>
          <td>
            接雲寺「浴佛消災祈福法會」
          </td>
        </tr>
        <tr>
          <td rowspan="4">
            道、法教音樂
          </td>
          <td class="tableCenter">
            1
          </td>
          <td>
            清微道派 一元復始護國消災星漢普照祈安植福大聖會
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            2
          </td>
          <td>
            臺南「和勝堂」己亥年接財神
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            3
          </td>
          <td>
            全真道派 新北市汐止拱北殿秋季祈安禮斗法會
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            4
          </td>
          <td>
            清微道派 三奶夫人過關保童科儀
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
      show: true,
    };
  },
  methods: {
    close() {
      this.show = false;
    },
  },
};
</script>
