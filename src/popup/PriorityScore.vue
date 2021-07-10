<template>
  <div>
    <div id="bar">
      <h1>Priority Score</h1>
      <p>
        メリット量: {{ getScore() }}
        &nbsp;&nbsp;&nbsp;
        <button @click="writeToClipboard(formatedAsMarkdown())">
          <img alt="Vue logo" src="../assets/copy.png" />
        </button>
      </p>

      <div id="tabs" class="full-width">
        <input type="radio" value="1" id="tab1" v-model="isActive" />
        <label for="tab1">バグ改修</label>
        <input type="radio" value="2" id="tab2" v-model="isActive" />
        <label for="tab2">機能改善</label>
      </div>
    </div>

    <div class="page"></div>
    <ul id="contents">
      <li v-if="isActive == '1'">
        <!-- バグ改修 -->
        <div class="margin">
          <!-- メリット量=(施設アカウント数×頻度+社内関係者)×(関係者×その後の行動+社外コミット有無+事業戦略上の必要) -->

          <h4>{{ r_facilities_count.title }}</h4>
          <div>
            <vue-slider
              v-model="r_facilities_count.num"
              :adsorb="true"
              :min="1"
              :max="5"
              :interval="2"
              :marks="r_facilities_count.options"
            ></vue-slider>
          </div>

          <h4>{{ r_frequency.title }}</h4>
          <div>
            <vue-slider
              v-model="r_frequency.num"
              :adsorb="true"
              :min="1"
              :max="5"
              :interval="1"
              :marks="r_frequency.options"
            ></vue-slider>
          </div>

          <h4>{{ r_corporate_insider.title }}</h4>
          <p>{{ r_corporate_insider.csp_title }}</p>
          <div>
            <vue-slider
              v-model="r_corporate_insider.csp_num"
              :adsorb="true"
              :data="involved_ppl_object"
              :data-value="'id'"
              :data-label="'name'"
            ></vue-slider>
          </div>

          <p>{{ r_corporate_insider.dev_title }}</p>
          <div>
            <vue-slider
              v-model="r_corporate_insider.dev_num"
              :adsorb="true"
              :data="involved_ppl_object"
              :data-value="'id'"
              :data-label="'name'"
            ></vue-slider>
          </div>

          <br />

          <h4>{{ i_affected_users.title }}</h4>
          <vue-slider
            v-model="i_affected_users.num"
            :adsorb="true"
            :min="1"
            :max="5"
            :interval="2"
            :marks="i_affected_users.options"
          ></vue-slider>

          <h4>{{ i_after_actions.title }}</h4>
          <vue-slider
            v-model="i_after_actions.num"
            :adsorb="true"
            :min="1"
            :max="5"
            :interval="2"
            :marks="i_after_actions.options"
          ></vue-slider>

          <h4>{{ i_commit.title }}</h4>
          <vue-slider
            v-model="i_commit.num"
            :adsorb="true"
            :min="0"
            :max="25"
            :interval="25"
            :marks="i_commit.options"
          ></vue-slider>

          <h4>{{ i_strategy.title }}</h4>
          <vue-slider
            v-model="i_strategy.num"
            :adsorb="true"
            :min="0"
            :max="10"
            :interval="5"
            :marks="i_strategy.options"
          ></vue-slider>
        </div>
      </li>
      <li v-else-if="isActive == '2'">
        <p>
          <!-- メリット量=(施設アカウント数×頻度+社内関係者)×(関係者×感情の変化+コミット有無+事業戦略上の必要) -->
          <!-- TODO -->
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
  name: "PriorityScore",
  components: {
    VueSlider,
  },
  data: function () {
    return {
      r_facilities_count: {
        title: "既存施設アカウント数",
        num: 1,
        options: {
          1: "全施設の3割未満",
          3: "3〜6割",
          5: "6割以上",
        },
      },
      r_frequency: {
        title: "頻度",
        num: 1,
        options: {
          1: "1度きり",
          2: "年に1回以上",
          3: "月に1~3回",
          4: "週1回以上",
          5: "毎日",
        },
      },
      r_corporate_insider: {
        title: "社内関係者",
        csp_num: 0,
        csp_title: "サポート",
        dev_num: 0,
        dev_title: "DEV",
      },
      involved_ppl_object: [
        { id: 0, name: "影響小" },
        { id: 1, name: "そこそこ" },
        { id: 2, name: "影響大" },
      ],
      i_affected_users: {
        title: "ユーザー影響度",
        num: 1,
        options: {
          1: "職員1人で完結",
          3: "他の職員に波及",
          5: "保護者まで届く",
        },
      },
      i_after_actions: {
        title: "その後の行動",
        num: 1,
        options: {
          1: "無視/問い合わせ",
          3: "運用回避/丹念に説明",
          5: "運用回避不可/解約",
        },
      },
      i_commit: {
        title: "社外コミット",
        num: 0,
        options: {
          0: "コミットなし",
          25: "コミットあり",
        },
      },
      i_strategy: {
        title: "事業戦略的観点",
        num: 0,
        options: {
          0: "なし",
          5: "小",
          10: "大",
        },
      },
      isActive: "1",
    };
  },
  methods: {
    getScore: function () {
      return (
        // Reach
        (this.r_facilities_count.num * this.r_frequency.num +
          this.getCorporateInsiderNum()) *
        // Impact
        (this.i_affected_users.num * this.i_after_actions.num +
          this.i_commit.num +
          this.i_strategy.num)
      );
    },
    getCorporateInsiderNum: function () {
      return involved_ppl_options[this.r_corporate_insider.csp_num][
        this.r_corporate_insider.dev_num
      ];
    },
    formatedAsMarkdown() {
      let text = "";

      text += "## メリット量\n";
      text += "\n";
      text += "| name | value |\n";
      text += "| ---- | ---- |\n";
      text += "| " + this.r_facilities_count.title + " | " + this.r_facilities_count.num + " |\n";
      text += "| " + this.r_frequency.title + " | " + this.r_facilities_count.num + " |\n";
      text += "| " + this.r_corporate_insider.title + " | " + this.getCorporateInsiderNum()+ " |\n";
      text += "| " + this.i_affected_users.title + " | " + this.i_affected_users.num + " |\n";
      text += "| " + this.i_after_actions.title + " | " + this.i_after_actions.num + " |\n";
      text += "| " + this.i_commit.title + " | " + this.i_commit.num + " |\n";
      text += "| **total** | **" + this.getScore() + "** |\n";

      return text;
    },
    writeToClipboard(text) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).catch((e) => {
          console.error(e);
        });
      }
    },
  },
};
</script>

<style>
/* 全体 */
html {
  width: 400px;
  height: 400px;
  margin-left: 10px;
  margin-right: 50px;
}
.contents {
  position: relative;
  overflow: hidden;
  border: 2px solid #000;
}
#contents p {
  font-size: 15px;
}

/* position */
#bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  padding: 5px;
  background: skyblue;
  z-index: 500;
}
#bar h1 {
  margin-left: 30px;
}
#bar p {
  margin-left: 30px;
}
.page {
  margin-top: 160px;
  margin-right: 50px;
}

/* tab */
#tabs {
  overflow: hidden;
  margin: auto;
  text-align: center;
}
#tabs input {
  display: none;
}
#tabs label {
  display: inline-block;
  line-height: 40px;
  width: 180px;
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
</style>
