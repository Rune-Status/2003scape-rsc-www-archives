/*

 0 item name
 1 number of items dropped
 2 quantity
 3 extra info (type, Herb, Rune, Gem)
 
 run
 
 0 last drop of run (x, index of last drop of run)
 1 kills in run (y, kill number of x)

*/

var item = new Array();
var runs = new Array();

var cwcb = 6;  // column width of checkboxes

var notes = "";

//run 1

item   [0] = [ "Irit Leaf", 1, 1, "Herb" ];
item   [1] = [ "bronze bar", 1, 1, "" ];
item   [2] = [ "Nothing", 1, 0, "" ];
item   [3] = [ "Coins", 1, 5, "" ];  //  (5)
item   [4] = [ "Coins", 1, 45, "" ];  //  (50)
item   [5] = [ "Coins", 1, 10, "" ];  //  (60)
item   [6] = [ "Water-rune", 1, 6, "Rune" ];  //  (6)
item   [7] = [ "Coins", 1, 10, "" ];  //  (70)
item   [8] = [ "bronze bar", 1, 1, "" ];
item   [9] = [ "Coins", 1, 10, "" ];  //  (80)
item  [10] = [ "Coins", 1, 25, "" ];  //  (105)
item  [11] = [ "Harralander", 1, 1, "Herb" ];
item  [12] = [ "Coins", 1, 10, "" ];  //  (115)
item  [13] = [ "Coins", 1, 5, "" ];  //  (120)
item  [14] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item  [15] = [ "Coins", 1, 25, "" ];  //  (145)
item  [16] = [ "Coins", 1, 5, "" ];  //  (150)
item  [17] = [ "Coins", 1, 5, "" ];  //  (155)
item  [18] = [ "Coins", 1, 65, "" ];  //  (220)
item  [19] = [ "bronze bar", 1, 1, "" ];
item  [20] = [ "Coins", 1, 10, "" ];  //  (230)
item  [21] = [ "Coins", 1, 5, "" ];  //  (235)
item  [22] = [ "Coins", 1, 10, "" ];  //  (245)
item  [23] = [ "Nothing", 1, 0, "" ];
item  [24] = [ "Law-rune", 1, 1, "Rune" ];  //  (2)
item  [25] = [ "Bronze Chain Mail Body", 1, 1, "" ];
item  [26] = [ "Marrentill", 1, 1, "Herb" ];
item  [27] = [ "Coins", 1, 5, "" ];  //  (250)
item  [28] = [ "Coins", 1, 10, "" ];  //  (260)
item  [29] = [ "Coins", 1, 25, "" ];  //  (285)
item  [30] = [ "Coins", 1, 10, "" ];  //  (295)
item  [31] = [ "Coins", 1, 10, "" ];  //  (305)
item  [32] = [ "Coins", 1, 25, "" ];  //  (330)
item  [33] = [ "Kwuarm", 1, 1, "Herb" ];
item  [34] = [ "Coins", 1, 5, "" ];  //  (335)
item  [35] = [ "Coins", 1, 5, "" ];  //  (340)
item  [36] = [ "Coins", 1, 10, "" ];  //  (350)
item  [37] = [ "Coins", 1, 10, "" ];  //  (360)
item  [38] = [ "Coins", 1, 10, "" ];  //  (370)
item  [39] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (3)
item  [40] = [ "Coins", 1, 5, "" ];  //  (375)
item  [41] = [ "Coins", 1, 5, "" ];  //  (380)
item  [42] = [ "bronze bar", 1, 1, "" ];
item  [43] = [ "Tarromin", 1, 1, "Herb" ];
item  [44] = [ "Kwuarm", 1, 1, "Herb" ];
item  [45] = [ "Coins", 1, 10, "" ];  //  (390)
item  [46] = [ "Coins", 1, 10, "" ];  //  (400)
item  [47] = [ "Iron Axe", 1, 1, "" ];
item  [48] = [ "uncut sapphire", 1, 1, "Gem" ];
item  [49] = [ "Water-rune", 1, 6, "Rune" ];  //  (12)
item  [50] = [ "Iron Scimitar", 1, 1, "" ];
item  [51] = [ "Coins", 1, 10, "" ];  //  (410)
item  [52] = [ "Coins", 1, 5, "" ];  //  (415)
item  [53] = [ "Coins", 1, 5, "" ];  //  (420)
item  [54] = [ "Coins", 1, 5, "" ];  //  (425)
item  [55] = [ "Marrentill", 1, 1, "Herb" ];
item  [56] = [ "Coins", 1, 25, "" ];  //  (450)
item  [57] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [58] = [ "Coins", 1, 10, "" ];  //  (460)
item  [59] = [ "Coins", 1, 10, "" ];  //  (470)
item  [60] = [ "Coins", 1, 5, "" ];  //  (475)
item  [61] = [ "Coins", 1, 10, "" ];  //  (485)
item  [62] = [ "bronze bar", 1, 1, "" ];
item  [63] = [ "uncut sapphire", 1, 1, "Gem" ];
item  [64] = [ "Law-rune", 1, 1, "Rune" ];  //  (3)
item  [65] = [ "Coins", 1, 10, "" ];  //  (495)
item  [66] = [ "Coins", 1, 45, "" ];  //  (540)
item  [67] = [ "Marrentill", 1, 1, "Herb" ];
item  [68] = [ "Nothing", 1, 0, "" ];
item  [69] = [ "Coins", 1, 5, "" ];  //  (545)
item  [70] = [ "Coins", 1, 5, "" ];  //  (550)
item  [71] = [ "Coins", 1, 45, "" ];  //  (595)
item  [72] = [ "Coins", 1, 5, "" ];  //  (600)
item  [73] = [ "Coins", 1, 25, "" ];  //  (625)
item  [74] = [ "Iron Scimitar", 1, 1, "" ];
item  [75] = [ "Coins", 1, 5, "" ];  //  (630)
item  [76] = [ "Coins", 1, 5, "" ];  //  (635)
item  [77] = [ "Coins", 1, 45, "" ];  //  (680)
item  [78] = [ "Iron Short Sword", 1, 1, "" ];
item  [79] = [ "Coins", 1, 10, "" ];  //  (690)
item  [80] = [ "Air-rune", 1, 10, "Rune" ];  //  (10)
item  [81] = [ "Medium Iron Helmet", 1, 1, "" ];
item  [82] = [ "Medium Iron Helmet", 1, 1, "" ];
item  [83] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [84] = [ "Coins", 1, 10, "" ];  //  (700)
item  [85] = [ "Coins", 1, 5, "" ];  //  (705)
item  [86] = [ "Medium Iron Helmet", 1, 1, "" ];
item  [87] = [ "Marrentill", 1, 1, "Herb" ];
item  [88] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [89] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (6)
item  [90] = [ "Air-rune", 1, 10, "Rune" ];  //  (20)
item  [91] = [ "Coins", 1, 5, "" ];  //  (710)
item  [92] = [ "Nothing", 1, 0, "" ];
item  [93] = [ "Coins", 1, 5, "" ];  //  (715)
item  [94] = [ "Bronze Chain Mail Body", 1, 1, "" ];
item  [95] = [ "Air-rune", 1, 10, "Rune" ];  //  (30)
item  [96] = [ "Coins", 1, 5, "" ];  //  (720)
item  [97] = [ "Harralander", 1, 1, "Herb" ];
item  [98] = [ "Coins", 1, 25, "" ];  //  (745)
item  [99] = [ "Water-rune", 1, 6, "Rune" ];  //  (18)
item [100] = [ "Coins", 1, 25, "" ];  //  (770)
item [101] = [ "Coins", 1, 5, "" ];  //  (775)
item [102] = [ "Marrentill", 1, 1, "Herb" ];
item [103] = [ "Coins", 1, 5, "" ];  //  (780)
item [104] = [ "Coins", 1, 5, "" ];  //  (785)
item [105] = [ "Water-rune", 1, 6, "Rune" ];  //  (24)
item [106] = [ "Coins", 1, 5, "" ];  //  (790)
item [107] = [ "Coins", 1, 10, "" ];  //  (800)
item [108] = [ "Coins", 1, 10, "" ];  //  (810)
item [109] = [ "Coins", 1, 10, "" ];  //  (820)
item [110] = [ "Medium Iron Helmet", 1, 1, "" ];
item [111] = [ "Medium Iron Helmet", 1, 1, "" ];
item [112] = [ "Coins", 1, 1, "" ];  //  (821)
item [113] = [ "Coins", 1, 10, "" ];  //  (831)
item [114] = [ "Marrentill", 1, 1, "Herb" ];
item [115] = [ "Law-rune", 1, 1, "Rune" ];  //  (4)
item [116] = [ "Coins", 1, 10, "" ];  //  (841)
item [117] = [ "Marrentill", 1, 1, "Herb" ];
item [118] = [ "Guam Leaf", 1, 1, "Herb" ];
item [119] = [ "Coins", 1, 1, "" ];  //  (842)
item [120] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (9)
item [121] = [ "Coins", 1, 10, "" ];  //  (852)
item [122] = [ "Law-rune", 1, 1, "Rune" ];  //  (5)
item [123] = [ "Water-rune", 1, 6, "Rune" ];  //  (30)
item [124] = [ "Coins", 1, 5, "" ];  //  (857)
item [125] = [ "Coins", 1, 5, "" ];  //  (862)
item [126] = [ "Guam Leaf", 1, 1, "Herb" ];
item [127] = [ "Coins", 1, 5, "" ];  //  (867)
item [128] = [ "Nothing", 1, 0, "" ];
item [129] = [ "Irit Leaf", 1, 1, "Herb" ];
item [130] = [ "Coins", 1, 65, "" ];  //  (932)
item [131] = [ "Coins", 1, 65, "" ];  //  (997)
item [132] = [ "Medium Iron Helmet", 1, 1, "" ];
item [133] = [ "Air-rune", 1, 10, "Rune" ];  //  (40)
item [134] = [ "Nothing", 1, 0, "" ];
item [135] = [ "Coins", 1, 5, "" ];  //  (1002)
item [136] = [ "Iron Scimitar", 1, 1, "" ];
item [137] = [ "Coins", 1, 25, "" ];  //  (1027)
item [138] = [ "Bronze Chain Mail Body", 1, 1, "" ];
item [139] = [ "Coins", 1, 10, "" ];  //  (1037)
item [140] = [ "Law-rune", 1, 1, "Rune" ];  //  (6)
item [141] = [ "Coins", 1, 25, "" ];  //  (1062)
item [142] = [ "Cadantine", 1, 1, "Herb" ];
item [143] = [ "Coins", 1, 5, "" ];  //  (1067)
item [144] = [ "Nothing", 1, 0, "" ];
item [145] = [ "Coins", 1, 5, "" ];  //  (1072)
item [146] = [ "Coins", 1, 5, "" ];  //  (1077)
item [147] = [ "bronze bar", 1, 1, "" ];
item [148] = [ "Law-rune", 1, 1, "Rune" ];  //  (7)
item [149] = [ "Tarromin", 1, 1, "Herb" ];
item [150] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (1)
item [151] = [ "bronze bar", 1, 1, "" ];
item [152] = [ "Water-rune", 1, 6, "Rune" ];  //  (36)
item [153] = [ "Coins", 1, 10, "" ];  //  (1087)
item [154] = [ "Coins", 1, 10, "" ];  //  (1097)
item [155] = [ "Iron Short Sword", 1, 1, "" ];
item [156] = [ "Coins", 1, 5, "" ];  //  (1102)
item [157] = [ "Coins", 1, 10, "" ];  //  (1112)
item [158] = [ "Coins", 1, 25, "" ];  //  (1137)
item [159] = [ "Coins", 1, 25, "" ];  //  (1162)
item [160] = [ "Air-rune", 1, 10, "Rune" ];  //  (50)
item [161] = [ "Coins", 1, 5, "" ];  //  (1167)
item [162] = [ "Coins", 1, 5, "" ];  //  (1172)
item [163] = [ "Marrentill", 1, 1, "Herb" ];
item [164] = [ "Coins", 1, 10, "" ];  //  (1182)
item [165] = [ "Coins", 1, 25, "" ];  //  (1207)
item [166] = [ "Guam Leaf", 1, 1, "Herb" ];
item [167] = [ "Coins", 1, 5, "" ];  //  (1212)
item [168] = [ "Medium Iron Helmet", 1, 1, "" ];
item [169] = [ "Coins", 1, 5, "" ];  //  (1217)
item [170] = [ "Coins", 1, 45, "" ];  //  (1262)
item [171] = [ "Coins", 1, 5, "" ];  //  (1267)
item [172] = [ "Coins", 1, 10, "" ];  //  (1277)
item [173] = [ "Guam Leaf", 1, 1, "Herb" ];
item [174] = [ "Coins", 1, 10, "" ];  //  (1287)
item [175] = [ "Nothing", 1, 0, "" ];
item [176] = [ "Coins", 1, 25, "" ];  //  (1312)
item [177] = [ "Iron Scimitar", 1, 1, "" ];
item [178] = [ "Coins", 1, 10, "" ];  //  (1322)
item [179] = [ "Coins", 1, 1, "" ];  //  (1323)
item [180] = [ "Guam Leaf", 1, 1, "Herb" ];
item [181] = [ "Coins", 1, 5, "" ];  //  (1328)
item [182] = [ "Bronze Chain Mail Body", 1, 1, "" ];
item [183] = [ "Water-rune", 1, 6, "Rune" ];  //  (42)
item [184] = [ "Harralander", 1, 1, "Herb" ];
item [185] = [ "Medium Iron Helmet", 1, 1, "" ];
item [186] = [ "Law-rune", 1, 1, "Rune" ];  //  (8)
item [187] = [ "bronze bar", 1, 1, "" ];
item [188] = [ "Iron Short Sword", 1, 1, "" ];
item [189] = [ "Coins", 1, 25, "" ];  //  (1353)
item [190] = [ "Air-rune", 1, 10, "Rune" ];  //  (60)
item [191] = [ "Coins", 1, 1, "" ];  //  (1354)
item [192] = [ "Coins", 1, 5, "" ];  //  (1359)
item [193] = [ "Coins", 1, 25, "" ];  //  (1384)
item [194] = [ "Coins", 1, 5, "" ];  //  (1389)
item [195] = [ "Medium Iron Helmet", 1, 1, "" ];
item [196] = [ "Coins", 1, 25, "" ];  //  (1414)
item [197] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (12)
item [198] = [ "Tarromin", 1, 1, "Herb" ];
item [199] = [ "Coins", 1, 10, "" ];  //  (1424)
item [200] = [ "Iron Scimitar", 1, 1, "" ];
item [201] = [ "Coins", 1, 5, "" ];  //  (1429)
item [202] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (2)
item [203] = [ "Nothing", 1, 0, "" ];
item [204] = [ "Coins", 1, 10, "" ];  //  (1439)
item [205] = [ "Coins", 1, 45, "" ];  //  (1484)
item [206] = [ "Coins", 1, 10, "" ];  //  (1494)
item [207] = [ "Guam Leaf", 1, 1, "Herb" ];
item [208] = [ "Coins", 1, 5, "" ];  //  (1499)
item [209] = [ "Coins", 1, 5, "" ];  //  (1504)
item [210] = [ "Iron Axe", 1, 1, "" ];
item [211] = [ "Kwuarm", 1, 1, "Herb" ];
item [212] = [ "Coins", 1, 25, "" ];  //  (1529)
item [213] = [ "Iron Short Sword", 1, 1, "" ];
item [214] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (15)
item [215] = [ "Coins", 1, 10, "" ];  //  (1539)
item [216] = [ "Coins", 1, 10, "" ];  //  (1549)
item [217] = [ "Water-rune", 1, 6, "Rune" ];  //  (48)
item [218] = [ "Coins", 1, 5, "" ];  //  (1554)
item [219] = [ "Coins", 1, 10, "" ];  //  (1564)
item [220] = [ "Coins", 1, 5, "" ];  //  (1569)
item [221] = [ "Law-rune", 1, 1, "Rune" ];  //  (9)
item [222] = [ "Tarromin", 1, 1, "Herb" ];
item [223] = [ "Coins", 1, 1, "" ];  //  (1570)
item [224] = [ "Coins", 1, 5, "" ];  //  (1575)
item [225] = [ "Coins", 1, 45, "" ];  //  (1620)
item [226] = [ "Coins", 1, 45, "" ];  //  (1665)
item [227] = [ "uncut ruby", 1, 1, "Gem" ];
item [228] = [ "Coins", 1, 5, "" ];  //  (1670)
item [229] = [ "Coins", 1, 10, "" ];  //  (1680)
item [230] = [ "Coins", 1, 1, "" ];  //  (1681)
item [231] = [ "Coins", 1, 5, "" ];  //  (1686)
item [232] = [ "Coins", 1, 10, "" ];  //  (1696)
item [233] = [ "Air-rune", 1, 10, "Rune" ];  //  (70)
item [234] = [ "Coins", 1, 25, "" ];  //  (1721)
item [235] = [ "Coins", 1, 10, "" ];  //  (1731)
item [236] = [ "Medium Iron Helmet", 1, 1, "" ];
item [237] = [ "Water-rune", 1, 6, "Rune" ];  //  (54)
item [238] = [ "Harralander", 1, 1, "Herb" ];
item [239] = [ "Coins", 1, 5, "" ];  //  (1736)
item [240] = [ "Nothing", 1, 0, "" ];
item [241] = [ "Iron Short Sword", 1, 1, "" ];
item [242] = [ "Coins", 1, 5, "" ];  //  (1741)

runs [0] = [ 242, 243 ];  // kills 243, drops 243

// run 2

item [243] = [ "Coins", 1, 5, "" ];  //  (5)
item [244] = [ "Coins", 1, 5, "" ];  //  (10)
item [245] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (1)
item [246] = [ "Marrentill", 1, 1, "Herb" ];
item [247] = [ "Coins", 1, 45, "" ];  //  (55)
item [248] = [ "Coins", 1, 5, "" ];  //  (60)
item [249] = [ "bronze bar", 1, 1, "" ];
item [250] = [ "Coins", 1, 25, "" ];  //  (85)
item [251] = [ "bronze bar", 1, 1, "" ];
item [252] = [ "Medium Iron Helmet", 1, 1, "" ];
item [253] = [ "Air-rune", 1, 10, "Rune" ];  //  (10)
item [254] = [ "Coins", 1, 5, "" ];  //  (90)
item [255] = [ "Tarromin", 1, 1, "Herb" ];
item [256] = [ "Water-rune", 1, 6, "Rune" ];  //  (6)
item [257] = [ "Coins", 1, 10, "" ];  //  (100)
item [258] = [ "Iron Short Sword", 1, 1, "" ];
item [259] = [ "Coins", 1, 10, "" ];  //  (110)
item [260] = [ "Guam Leaf", 1, 1, "Herb" ];
item [261] = [ "Coins", 1, 10, "" ];  //  (120)
item [262] = [ "Nothing", 1, 0, "" ];
item [263] = [ "Coins", 1, 5, "" ];  //  (125)
item [264] = [ "bronze bar", 1, 1, "" ];
item [265] = [ "Coins", 1, 5, "" ];  //  (130)
item [266] = [ "Coins", 1, 5, "" ];  //  (135)
item [267] = [ "Coins", 1, 5, "" ];  //  (140)
item [268] = [ "Coins", 1, 5, "" ];  //  (145)
item [269] = [ "Coins", 1, 10, "" ];  //  (155)
item [270] = [ "Coins", 1, 10, "" ];  //  (165)
item [271] = [ "uncut sapphire", 1, 1, "Gem" ];
item [272] = [ "Medium Iron Helmet", 1, 1, "" ];
item [273] = [ "Coins", 1, 10, "" ];  //  (175)
item [274] = [ "Coins", 1, 65, "" ];  //  (240)
item [275] = [ "Coins", 1, 5, "" ];  //  (245)
item [276] = [ "Nothing", 1, 0, "" ];
item [277] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item [278] = [ "Coins", 1, 10, "" ];  //  (255)
item [279] = [ "Coins", 1, 1, "" ];  //  (256)
item [280] = [ "Coins", 1, 65, "" ];  //  (321)
item [281] = [ "Coins", 1, 5, "" ];  //  (326)
item [282] = [ "bronze bar", 1, 1, "" ];
item [283] = [ "Coins", 1, 10, "" ];  //  (336)
item [284] = [ "Guam Leaf", 1, 1, "Herb" ];
item [285] = [ "Coins", 1, 5, "" ];  //  (341)
item [286] = [ "Coins", 1, 5, "" ];  //  (346)
item [287] = [ "Coins", 1, 25, "" ];  //  (371)
item [288] = [ "Nothing", 1, 0, "" ];
item [289] = [ "Coins", 1, 5, "" ];  //  (376)
item [290] = [ "Coins", 1, 25, "" ];  //  (401)
item [291] = [ "Tarromin", 1, 1, "Herb" ];
item [292] = [ "Medium Iron Helmet", 1, 1, "" ];
item [293] = [ "Marrentill", 1, 1, "Herb" ];
item [294] = [ "Coins", 1, 10, "" ];  //  (411)
item [295] = [ "Irit Leaf", 1, 1, "Herb" ];
item [296] = [ "Coins", 1, 45, "" ];  //  (456)
item [297] = [ "Coins", 1, 5, "" ];  //  (461)
item [298] = [ "Avantoe", 1, 1, "Herb" ];
item [299] = [ "Medium Iron Helmet", 1, 1, "" ];
item [300] = [ "Coins", 1, 5, "" ];  //  (466)
item [301] = [ "Iron Short Sword", 1, 1, "" ];
item [302] = [ "Coins", 1, 10, "" ];  //  (476)
item [303] = [ "Coins", 1, 10, "" ];  //  (486)
item [304] = [ "bronze bar", 1, 1, "" ];
item [305] = [ "Coins", 1, 10, "" ];  //  (496)
item [306] = [ "Coins", 1, 5, "" ];  //  (501)
item [307] = [ "Coins", 1, 10, "" ];  //  (511)
item [308] = [ "Guam Leaf", 1, 1, "Herb" ];
item [309] = [ "Coins", 1, 10, "" ];  //  (521)
item [310] = [ "Coins", 1, 5, "" ];  //  (526)
item [311] = [ "Nothing", 1, 0, "" ];
item [312] = [ "Coins", 1, 5, "" ];  //  (531)
item [313] = [ "Coins", 1, 45, "" ];  //  (576)
item [314] = [ "Coins", 1, 5, "" ];  //  (581)
item [315] = [ "Tarromin", 1, 1, "Herb" ];
item [316] = [ "Coins", 1, 5, "" ];  //  (586)
item [317] = [ "Coins", 1, 65, "" ];  //  (651)
item [318] = [ "Coins", 1, 5, "" ];  //  (656)
item [319] = [ "Coins", 1, 10, "" ];  //  (666)
item [320] = [ "Iron Axe", 1, 1, "" ];
item [321] = [ "Coins", 1, 5, "" ];  //  (671)
item [322] = [ "Coins", 1, 5, "" ];  //  (676)
item [323] = [ "Medium Iron Helmet", 1, 1, "" ];
item [324] = [ "Iron Scimitar", 1, 1, "" ];
item [325] = [ "Medium Iron Helmet", 1, 1, "" ];
item [326] = [ "bronze bar", 1, 1, "" ];
item [327] = [ "Medium Iron Helmet", 1, 1, "" ];
item [328] = [ "Coins", 1, 25, "" ];  //  (701)
item [329] = [ "Coins", 1, 65, "" ];  //  (766)
item [330] = [ "Water-rune", 1, 6, "Rune" ];  //  (12)
item [331] = [ "Coins", 1, 10, "" ];  //  (776)
item [332] = [ "bronze bar", 1, 1, "" ];
item [333] = [ "Coins", 1, 5, "" ];  //  (781)
item [334] = [ "Coins", 1, 10, "" ];  //  (791)
item [335] = [ "Coins", 1, 5, "" ];  //  (796)
item [336] = [ "Coins", 1, 10, "" ];  //  (806)
item [337] = [ "uncut sapphire", 1, 1, "Gem" ];
item [338] = [ "Guam Leaf", 1, 1, "Herb" ];
item [339] = [ "Iron Axe", 1, 1, "" ];
item [340] = [ "Iron Short Sword", 1, 1, "" ];
item [341] = [ "bronze bar", 1, 1, "" ];
item [342] = [ "Coins", 1, 10, "" ];  //  (816)
item [343] = [ "uncut sapphire", 1, 1, "Gem" ];
item [344] = [ "Coins", 1, 10, "" ];  //  (826)
item [345] = [ "Coins", 1, 5, "" ];  //  (831)
item [346] = [ "Coins", 1, 45, "" ];  //  (876)
item [347] = [ "Iron Axe", 1, 1, "" ];
item [348] = [ "Marrentill", 1, 1, "Herb" ];
item [349] = [ "Coins", 1, 25, "" ];  //  (901)
item [350] = [ "Iron Short Sword", 1, 1, "" ];
item [351] = [ "bronze bar", 1, 1, "" ];
item [352] = [ "Coins", 1, 10, "" ];  //  (911)
item [353] = [ "bronze bar", 1, 1, "" ];
item [354] = [ "Coins", 1, 10, "" ];  //  (921)
item [355] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (2)
item [356] = [ "Nothing", 1, 0, "" ];
item [357] = [ "Nothing", 1, 0, "" ];
item [358] = [ "Coins", 1, 5, "" ];  //  (926)
item [359] = [ "Iron Short Sword", 1, 1, "" ];
item [360] = [ "Coins", 1, 5, "" ];  //  (931)
item [361] = [ "Air-rune", 1, 10, "Rune" ];  //  (20)
item [362] = [ "Iron Axe", 1, 1, "" ];
item [363] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (3)
item [364] = [ "Coins", 1, 5, "" ];  //  (936)
item [365] = [ "Iron Axe", 1, 1, "" ];
item [366] = [ "Coins", 1, 5, "" ];  //  (941)
item [367] = [ "Nothing", 1, 0, "" ];
item [368] = [ "Coins", 1, 45, "" ];  //  (986)
item [369] = [ "Coins", 1, 5, "" ];  //  (991)
item [370] = [ "Avantoe", 1, 1, "Herb" ];
item [371] = [ "Iron Short Sword", 1, 1, "" ];
item [372] = [ "Coins", 1, 25, "" ];  //  (1016)
item [373] = [ "Nothing", 1, 0, "" ];
item [374] = [ "Coins", 1, 25, "" ];  //  (1041)
item [375] = [ "Coins", 1, 5, "" ];  //  (1046)
item [376] = [ "Coins", 1, 5, "" ];  //  (1051)
item [377] = [ "Marrentill", 1, 1, "Herb" ];
item [378] = [ "Coins", 1, 25, "" ];  //  (1076)
item [379] = [ "Coins", 1, 5, "" ];  //  (1081)
item [380] = [ "Coins", 1, 10, "" ];  //  (1091)
item [381] = [ "Coins", 1, 5, "" ];  //  (1096)
item [382] = [ "Coins", 1, 25, "" ];  //  (1121)
item [383] = [ "Coins", 1, 25, "" ];  //  (1146)
item [384] = [ "Coins", 1, 10, "" ];  //  (1156)
item [385] = [ "Coins", 1, 5, "" ];  //  (1161)
item [386] = [ "Coins", 1, 5, "" ];  //  (1166)
item [387] = [ "Coins", 1, 10, "" ];  //  (1176)
item [388] = [ "Coins", 1, 25, "" ];  //  (1201)
item [389] = [ "Coins", 1, 10, "" ];  //  (1211)
item [390] = [ "Coins", 1, 45, "" ];  //  (1256)
item [391] = [ "Coins", 1, 5, "" ];  //  (1261)
item [392] = [ "Coins", 1, 5, "" ];  //  (1266)
item [393] = [ "Guam Leaf", 1, 1, "Herb" ];
item [394] = [ "Nothing", 1, 0, "" ];
item [395] = [ "Tarromin", 1, 1, "Herb" ];
item [396] = [ "Coins", 1, 5, "" ];  //  (1271)
item [397] = [ "Coins", 1, 10, "" ];  //  (1281)
item [398] = [ "Iron Short Sword", 1, 1, "" ];
item [399] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [400] = [ "Marrentill", 1, 1, "Herb" ];
item [401] = [ "Nothing", 1, 0, "" ];

runs [1] = [ 401, 402 ];  // kills 402, drops 402

// runs [2] = [ x, y ];  // kills ? ( y - 402 ), drops ? ( x - 401 )

/*
item [000] = [ "Coins", 1, 1, "" ];  //  ()
item [000] = [ "Coins", 1, 5, "" ];  //  ()
item [000] = [ "Coins", 1, 10, "" ];  //  ()
item [000] = [ "Coins", 1, 25, "" ];  //  ()
item [000] = [ "Coins", 1, 45, "" ];  //  ()
item [000] = [ "Coins", 1, 65, "" ];  //  ()

item [000] = [ "Guam Leaf", 1, 1, "Herb" ];
item [000] = [ "Marrentill", 1, 1, "Herb" ];
item [000] = [ "Tarromin", 1, 1, "Herb" ];
item [000] = [ "Harralander", 1, 1, "Herb" ];
item [000] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [000] = [ "Irit Leaf", 1, 1, "Herb" ];
item [000] = [ "Avantoe", 1, 1, "Herb" ];
item [000] = [ "Kwuarm", 1, 1, "Herb" ];
item [000] = [ "Cadantine", 1, 1, "Herb" ];  // Dwarf Weed
item [000] = [ "Dwarf Weed", 1, 1, "Herb" ];

item [000] = [ "Air-rune", 1, 10, "Rune" ];  //  ()
item [000] = [ "Water-rune", 1, 6, "Rune" ];  //  ()
item [000] = [ "Chaos-rune", 1, 3, "Rune" ];  //  ()
item [000] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 1, "Rune" ];  //  ()

item [000] = [ "uncut sapphire", 1, 1, "Gem" ];
item [000] = [ "uncut emerald", 1, 1, "Gem" ];
item [000] = [ "uncut ruby", 1, 1, "Gem" ];
item [000] = [ "uncut diamond", 1, 1, "Gem" ];

item [000] = [ "Half of a key (loop)", 1, 1, "" ];
item [000] = [ "Half of a key (teeth)", 1, 1, "" ];

item [000] = [ "bronze bar", 1, 1, "" ];

item [000] = [ "Iron Axe", 1, 1, "" ];
item [000] = [ "Iron Short Sword", 1, 1, "" ];
item [000] = [ "Iron Scimitar", 1, 1, "" ];

item [000] = [ "Bronze Chain Mail Body", 1, 1, "" ];
item [000] = [ "Medium Iron Helmet", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];
*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "zombie";           // monster's name
var mcbl = 32;                  // monster's combat level
var mindex = 88;                // index into monster data base
var mrpt = 2;                   // number of non-breaking space to add after index name