// --- 1. 情緒元素資料庫 ---
const emotionData = [
  { "id": "e_1_1", "name": "開心", "col": 1, "row": 1, "cat": "c-yellow" },
  { "id": "e_2_1", "name": "平靜", "col": 2, "row": 1, "cat": "c-beige" },
  { "id": "e_18_1", "name": "生氣", "col": 18, "row": 1, "cat": "c-red" },
  { "id": "e_1_2", "name": "高興", "col": 1, "row": 2, "cat": "c-yellow" },
  { "id": "e_2_2", "name": "放心", "col": 2, "row": 2, "cat": "c-beige" },
  { "id": "e_3_2", "name": "有趣", "col": 3, "row": 2, "cat": "c-brown" },
  { "id": "e_17_2", "name": "擔心", "col": 17, "row": 2, "cat": "c-pink" },
  { "id": "e_18_2", "name": "不爽", "col": 18, "row": 2, "cat": "c-red" },
  { "id": "e_1_3", "name": "快樂", "col": 1, "row": 3, "cat": "c-yellow" },
  { "id": "e_2_3", "name": "自在", "col": 2, "row": 3, "cat": "c-beige" },
  { "id": "e_3_3", "name": "好奇", "col": 3, "row": 3, "cat": "c-brown" },
  { "id": "e_12_3", "name": "難過", "col": 12, "row": 3, "cat": "c-indigo" },
  { "id": "e_13_3", "name": "尷尬", "col": 13, "row": 3, "cat": "c-purple1" },
  { "id": "e_14_3", "name": "無奈", "col": 14, "row": 3, "cat": "c-purple2" },
  { "id": "e_15_3", "name": "害怕", "col": 15, "row": 3, "cat": "c-purple3" },
  { "id": "e_16_3", "name": "緊張", "col": 16, "row": 3, "cat": "c-violet" },
  { "id": "e_17_3", "name": "著急", "col": 17, "row": 3, "cat": "c-pink" },
  { "id": "e_18_3", "name": "憤怒", "col": 18, "row": 3, "cat": "c-red" },
  { "id": "e_1_4", "name": "喜悅", "col": 1, "row": 4, "cat": "c-yellow" },
  { "id": "e_2_4", "name": "舒服", "col": 2, "row": 4, "cat": "c-beige" },
  { "id": "e_3_4", "name": "期待", "col": 3, "row": 4, "cat": "c-brown" },
  { "id": "e_4_4", "name": "得意", "col": 4, "row": 4, "cat": "c-gray" },
  { "id": "e_5_4", "name": "害羞", "col": 5, "row": 4, "cat": "c-green1" },
  { "id": "e_6_4", "name": "無聊", "col": 6, "row": 4, "cat": "c-green2" },
  { "id": "e_7_4", "name": "驚訝", "col": 7, "row": 4, "cat": "c-cyan" },
  { "id": "e_11_4", "name": "孤單", "col": 11, "row": 4, "cat": "c-sky" },
  { "id": "e_12_4", "name": "傷心", "col": 12, "row": 4, "cat": "c-indigo" },
  { "id": "e_13_4", "name": "難堪", "col": 13, "row": 4, "cat": "c-purple1" },
  { "id": "e_14_4", "name": "後悔", "col": 14, "row": 4, "cat": "c-purple2" },
  { "id": "e_15_4", "name": "畏懼", "col": 15, "row": 4, "cat": "c-purple3" },
  { "id": "e_16_4", "name": "不安", "col": 16, "row": 4, "cat": "c-violet" },
  { "id": "e_17_4", "name": "心急", "col": 17, "row": 4, "cat": "c-pink" },
  { "id": "e_18_4", "name": "火冒三丈", "col": 18, "row": 4, "cat": "c-red" },
  { "id": "e_1_5", "name": "爽", "col": 1, "row": 5, "cat": "c-yellow" },
  { "id": "e_2_5", "name": "溫暖", "col": 2, "row": 5, "cat": "c-beige" },
  { "id": "e_3_5", "name": "驚喜", "col": 3, "row": 5, "cat": "c-brown" },
  { "id": "e_4_5", "name": "自信", "col": 4, "row": 5, "cat": "c-gray" },
  { "id": "e_5_5", "name": "喜歡", "col": 5, "row": 5, "cat": "c-green1" },
  { "id": "e_6_5", "name": "討厭", "col": 6, "row": 5, "cat": "c-green2" },
  { "id": "e_7_5", "name": "疑惑", "col": 7, "row": 5, "cat": "c-cyan" },
  { "id": "e_8_5", "name": "失望", "col": 8, "row": 5, "cat": "c-blue1" },
  { "id": "e_9_5", "name": "委屈", "col": 9, "row": 5, "cat": "c-blue1" },
  { "id": "e_10_5", "name": "無望", "col": 10, "row": 5, "cat": "c-blue1" },
  { "id": "e_11_5", "name": "寂寞", "col": 11, "row": 5, "cat": "c-sky" },
  { "id": "e_12_5", "name": "悲傷", "col": 12, "row": 5, "cat": "c-indigo" },
  { "id": "e_13_5", "name": "羞愧", "col": 13, "row": 5, "cat": "c-purple1" },
  { "id": "e_14_5", "name": "惋惜", "col": 14, "row": 5, "cat": "c-purple2" },
  { "id": "e_15_5", "name": "驚嚇", "col": 15, "row": 5, "cat": "c-purple3" },
  { "id": "e_16_5", "name": "焦慮", "col": 16, "row": 5, "cat": "c-violet" },
  { "id": "e_17_5", "name": "慌張", "col": 17, "row": 5, "cat": "c-pink" },
  { "id": "e_18_5", "name": "挫折", "col": 18, "row": 5, "cat": "c-red" },
  { "id": "e_1_6", "name": "興奮", "col": 1, "row": 6, "cat": "c-yellow" },
  { "id": "e_2_6", "name": "幸福", "col": 2, "row": 6, "cat": "c-beige" },
  { "id": "e_3_6", "name": "滿足", "col": 3, "row": 6, "cat": "c-brown" },
  { "id": "e_4_6", "name": "驕傲", "col": 4, "row": 6, "cat": "c-gray" },
  { "id": "e_5_6", "name": "羨慕", "col": 5, "row": 6, "cat": "c-green1" },
  { "id": "e_6_6", "name": "嫉妒", "col": 6, "row": 6, "cat": "c-green2" },
  { "id": "e_7_6", "name": "矛盾", "col": 7, "row": 6, "cat": "c-cyan" },
  { "id": "e_8_6", "name": "失落", "col": 8, "row": 6, "cat": "c-blue1" },
  { "id": "e_9_6", "name": "冤枉", "col": 9, "row": 6, "cat": "c-blue1" },
  { "id": "e_10_6", "name": "絕望", "col": 10, "row": 6, "cat": "c-blue1" },
  { "id": "e_11_6", "name": "落寞", "col": 11, "row": 6, "cat": "c-sky" },
  { "id": "e_12_6", "name": "痛苦", "col": 12, "row": 6, "cat": "c-indigo" },
  { "id": "e_13_6", "name": "羞辱", "col": 13, "row": 6, "cat": "c-purple1" },
  { "id": "e_14_6", "name": "自責", "col": 14, "row": 6, "cat": "c-purple2" },
  { "id": "e_15_6", "name": "恐懼", "col": 15, "row": 6, "cat": "c-purple3" },
  { "id": "e_16_6", "name": "憂慮", "col": 16, "row": 6, "cat": "c-violet" },
  { "id": "e_17_6", "name": "焦躁", "col": 17, "row": 6, "cat": "c-pink" },
  { "id": "e_18_6", "name": "挫敗", "col": 18, "row": 6, "cat": "c-red" }
];

// --- 2. 情境題庫 (加入 type 標記) ---
const scenarios = [
    // --- 負向情境範例 ---
    { 
        type: "negative",
        text: "同學在背後說我壞話，被我聽到了...", 
        targets: [
            { name: "委屈", thought: "我明明沒有做錯事，為什麼要被這樣說。" },
            { name: "憤怒", thought: "他們憑什麼這樣亂講話！" },
            { name: "難過", thought: "原來他們私底下是這樣看我的..." }
        ]
    },
    { 
        type: "negative",
        text: "分組報告時，同組的人都不做事，工作都推給我...", 
        targets: [
            { name: "無奈", thought: "跟老師說好像打小報告，自己做又覺得很不公平。" },
            { name: "火冒三丈", thought: "到底為什麼分數要大家一起平分！" },
            { name: "焦慮", thought: "如果我不做，整組分數都會很難看怎麼辦？" }
        ]
    },

    // --- 正向情境範例 ---
    { 
        type: "positive",
        text: "這次期中考，我一直考不好的那一科竟然及格了！", 
        targets: [
            { name: "開心", thought: "太棒了！昨天的熬夜看書有代價了。" },
            { name: "驕傲", thought: "我其實也沒那麼差嘛，只要努力還是做得到的！" },
            { name: "驚喜", thought: "看到分數的時候差點叫出來，太不可思議了！" }
        ]
    },
    { 
        type: "positive",
        text: "換座位時，剛好被排在好朋友的旁邊...", 
        targets: [
            { name: "興奮", thought: "太爽了！接下來這幾個禮拜上課絕對不會無聊了。" },
            { name: "期待", thought: "等一下下課就可以一起討論喜歡的遊戲了。" },
            { name: "舒服", thought: "旁邊坐著熟悉的人，感覺有一種安全感。" }
        ]
    }
];
