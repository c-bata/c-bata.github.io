# 方針

- ページ数も少ないので CSSフレームワーク は使わずに書いてみる
- 練習も兼ねて全てSass + Compassで記述
- SMACSSの方針を取り入れる。
- [KOJI ISHIMOTO](http://t32k.me/mol/log/the-perfect-css-i-thought/) さんの以下の考え方をすごく大事にしたい。
    - 絶対にCSSを増やしたくない
    - class名で悩みたくない
    - 完璧じゃなくてもいい


### SMACSS 復習

OOCSS、BEMの流れを汲みつついいとこ取りしていこうってやつ。

SMACSSでは要素を以下の5つに分ける

- Base : サイト全体に関わるもの(marginとかpaddingみたいなサイト全体で使いまわすものも含む) (例: `reset.css`、`helper.css`)
- Layout : headerはここ、sidebarはこことかを定義
- Modules : buttonとかcardとかサイト内で使いまわすであろうブロックを定義
- State : 選択されている状態のタブは色が変わる。これは `.is_selected` みたいなクラスをここで定義しておいて、それを割り当てる.
- Theme : サイト全体の色を変える

Modulesとか結構ざっくりしてる。完璧じゃなくてもいい。


### フォルダ構成

SMACSSの流れを汲んでいるので、以下の3つのフォルダがある。

- `base/` : サイト全体を構築している基本的なスタイル
- `layout/` : `header` `footer` `main` `side` と各ペーンのスタイルを記述
- `modules/` : 各コンポーネントのスタイルを記述(例: button)

