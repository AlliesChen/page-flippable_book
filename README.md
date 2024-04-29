# Page-Flippable Book

使用了 react-spring, use-gesture 兩個 lib 來達成：

- 透過 position: relative/absolute 來堆疊書頁的正反面
- 用 z-index 切換堆疊的順序
- react-spring 控制 rotateY、opacity 做翻頁轉場
- 配合 perspective 屬性改變視角增添立體感
- use-gesture 加入拖曳翻頁功能