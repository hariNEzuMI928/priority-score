# priority-score

![生ハム](https://user-images.githubusercontent.com/60064343/125165244-2465d500-e1d1-11eb-902b-7035953162ec.png)

## Browser settings (Without develop)

1. 任意のディレクトリで以下コマンドを実行

```
$ git clone https://github.com/hariNEzuMI928/priority-score
```

もしくは以下のボタンからzip形式でリポジトリをダウンロード（git不要）

<br>
<img src="https://user-images.githubusercontent.com/60064343/125165408-b7067400-e1d1-11eb-88cd-e46e411196e1.png" width="400px">

2. Chromeで chrome://extensions/ を検索窓に貼り付けて検索
3. 画面右上の「デベロッパーモード」をON
4. 画面左上の「パッケージ化されていない拡張機能を読み込む」を押下
5. 手順①で取得したリポジトリの、distディレクトリを指定する
6. 読み込んだ拡張機能を有効にする
7. 画面右上から拡張機能一覧ポップアップを表示し、本拡張機能をピン留めする

<br>
<img src="https://user-images.githubusercontent.com/60064343/125165512-3d22ba80-e1d2-11eb-9117-6aab553f2bbd.png" width="400px">


## How to use

1. タブ切り替えから、issueの種類を選択
2. 任意のスライダーを調整する
3. 画面上部のメモアイコンを押下し、Markdown形式でクリップボードにコピペする

## Develop Setup

```
$ git clone https://github.com/hariNEzuMI928/priority-score
$ cd priority-score
$ npm i
$ npm run build
```

watch
```
$ npm run serve
```
