<template>
  <div>
    <h1>Priority Score</h1>

    <p>メリット量: {{ getScore }}</p>

    <div>
    <span>{{ my_text }}</span>
    <button @click="writeToClipboard(my_text)">COPY</button>
    </div>

    <div id="tabs">
      <input type="radio" value="1" id="tab1" v-model="isActive" />
      <label for="tab1">バグ改修</label>
      <input type="radio" value="2" id="tab2" v-model="isActive" />
      <label for="tab2">機能改善</label>
    </div>
    <ul id="contents">
      <li v-if="isActive == '1'">
        <h2>バグ改修</h2>
        <div>
          <!-- メリット量=(施設アカウント数×頻度+社内関係者)×(関係者×その後の行動+社外コミット有無+事業戦略上の必要) -->
          <h3>~Reach~</h3>

          <h4>既存施設アカウント数</h4>
          <div>
            <vue-slider
              v-model="r_facilities_count"
              :adsorb="true"
              :min="1"
              :max="5"
              :interval="2"
              :marks="r_facilities_count_options"
            ></vue-slider>
          </div>

          <h4>頻度</h4>
          <div>
            <vue-slider
              v-model="r_frequency"
              :adsorb="true"
              :min="1"
              :max="5"
              :interval="1"
              :marks="r_frequency_options"
            ></vue-slider>
          </div>

          <h4>社内関係者</h4>
          <p>サポート</p>
          影響小
          <div>
            <vue-slider
              v-model="r_corporate_insider_csp"
              :adsorb="true"
              :data="involved_ppl_object"
              :data-value="'id'"
              :data-label="'name'"
            ></vue-slider>
          </div>

          <p>DEV</p>
          影響小
          <div>
            <vue-slider
              v-model="r_corporate_insider_dev"
              :adsorb="true"
              :data="involved_ppl_object"
              :data-value="'id'"
              :data-label="'name'"
            ></vue-slider>
          </div>

          <br />

          <h3>~Impact~</h3>

          <h4>ユーザー影響度</h4>
          <vue-slider
            v-model="i_affected_users"
            :adsorb="true"
            :min="1"
            :max="5"
            :interval="2"
            :marks="i_affected_users_options"
          ></vue-slider>

          <h4>その後の行動</h4>
          <vue-slider
            v-model="i_after_actions"
            :adsorb="true"
            :min="1"
            :max="5"
            :interval="2"
            :marks="i_after_actions_options"
          ></vue-slider>

          <h4>社外コミット</h4>
          <vue-slider
            v-model="i_commit"
            :adsorb="true"
            :min="0"
            :max="25"
            :interval="25"
            :marks="i_commit_options"
          ></vue-slider>

          <h4>事業戦略的観点</h4>
          <vue-slider
            v-model="i_strategy"
            :adsorb="true"
            :min="0"
            :max="10"
            :interval="5"
            :marks="i_strategy_options"
          ></vue-slider>
        </div>
      </li>
      <li v-else-if="isActive == '2'">
        <h2>機能改善</h2>
        <p>
          <!-- メリット量=(施設アカウント数×頻度+社内関係者)×(関係者×感情の変化+コミット有無+事業戦略上の必要) -->
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

const involved_ppl_options = [
  [0, 1, 2],
  [1, 3, 4],
  [2, 4, 5],
];

export default {
  name: "App",
  components: {
    VueSlider,
  },
  data: function () {
    return {
      // 既存施設アカウント数
      r_facilities_count: 1,
      r_facilities_count_options: {
        1: "全施設の3割未満",
        3: "全施設の3〜6割",
        5: "全施設の6割以上",
      },
      // 頻度
      r_frequency: 1,
      r_frequency_options: {
        1: "1回きり",
        2: "年に1回以上",
        3: "月に1~3回",
        4: "週1回以上",
        5: "毎日",
      },
      // 社内関係者
      r_corporate_insider_csp: 1,
      r_corporate_insider_dev: 1,
      involved_ppl_object: [
        { id: 0, name: "影響小" },
        { id: 1, name: "そこそこ" },
        { id: 2, name: "影響大" },
      ],
      // ユーザー影響度
      i_affected_users: 1,
      i_affected_users_options: {
        1: "そのユーザー1人で完結する",
        3: "施設内の他の職員に波及する",
        5: "保護者まで届く",
      },
      // その後の行動
      i_after_actions: 1,
      i_after_actions_options: {
        1: "無視 or 問い合わせ",
        3: "運用回避 or 丹念に説明",
        5: "運用回避できず謝罪 or 解約",
      },
      // 社外コミット
      i_commit: 0,
      i_commit_options: {
        0: "コミットなし",
        25: "コミットあり",
      },
      // 事業戦略的観点
      i_strategy: 0,
      i_strategy_options: {
        0: "なし",
        5: "小",
        10: "大",
      },
      isActive: "1",
      my_text: 'uhohoo?'
    };
  },
  computed: {
    getScore: function () {
      return (
        // Reach
        (this.r_facilities_count * this.r_frequency +
          this.getCorporateInsiderNum()) *
        // Impact
        (this.i_affected_users * this.i_after_actions +
          this.i_commit +
          this.i_strategy)
      );
    },
  },
  methods: {
    getCorporateInsiderNum: function () {
      return involved_ppl_options[this.r_corporate_insider_csp][
        this.r_corporate_insider_dev
      ];
    },
    writeToClipboard(text) {
      navigator.clipboard.writeText(text).catch((e) => {
        console.error(e)
      })
    }
  },
};
</script>

<style>
html {
  width: 400px;
  height: 400px;
}
.contents {
  position: relative;
  overflow: hidden;
  width: 280px;
  border: 2px solid #000;
}

/* tab */
#tabs {
  overflow: hidden;
}
#tabs input {
  display: none;
}
#tabs label {
  display: inline-block;
  line-height: 40px;
  width: 120px;
  text-align: center;
  cursor: pointer;
  background: #eee;
  transition: 0.3s;
  border-radius: 10px 10px 0 0;
}
#tabs input:checked + label,
#tabs label:hover {
  background: #01a2c1;
  color: #fff;
}
#contents p {
  font-size: 15px;
  margin: 0;
}
#contents p.title {
  font-size: 16px;
  font-weight: bold;
}
</style>
