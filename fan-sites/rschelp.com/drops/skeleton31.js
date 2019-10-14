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

// run 1

item   [0] = [ "Coins", 1, 1, "" ];  //  (1)
item   [1] = [ "Coins", 1, 10, "" ];  //  (11)
item   [2] = [ "Nothing", 1, 0, "" ];
item   [3] = [ "Nothing", 1, 0, "" ];
item   [4] = [ "Nothing", 1, 0, "" ];
item   [5] = [ "Coins", 1, 10, "" ];  //  (21)
item   [6] = [ "Coins", 1, 45, "" ];  //  (66)
item   [7] = [ "Coins", 1, 5, "" ];  //  (71)
item   [8] = [ "Coins", 1, 10, "" ];  //  (81)
item   [9] = [ "Coins", 1, 10, "" ];  //  (91)
item  [10] = [ "Medium Iron Helmet", 1, 1, "" ];
item  [11] = [ "Coins", 1, 10, "" ];  //  (101)
item  [12] = [ "Coins", 1, 5, "" ];  //  (106)
item  [13] = [ "Marrentill", 1, 1, "Herb" ];
item  [14] = [ "Marrentill", 1, 1, "Herb" ];
item  [15] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (1)
item  [16] = [ "Coins", 1, 5, "" ];  //  (111)
item  [17] = [ "Medium Iron Helmet", 1, 1, "" ];
item  [18] = [ "Chaos-rune", 1, 3, "Rune" ];  //  ()
item  [19] = [ "Irit Leaf", 1, 1, "Herb" ];
item  [20] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [21] = [ "Coins", 1, 10, "" ];  //  (121)
item  [22] = [ "Coins", 1, 25, "" ];  //  (146)
item  [23] = [ "Coins", 1, 5, "" ];  //  (151)
item  [24] = [ "Iron Axe", 1, 1, "" ];
item  [25] = [ "Tarromin", 1, 1, "Herb" ];
item  [26] = [ "Coins", 1, 10, "" ];  //  (161)
item  [27] = [ "Coins", 1, 10, "" ];  //  (171)
item  [28] = [ "uncut sapphire", 1, 1, "Gem" ];
item  [29] = [ "Coins", 1, 10, "" ];  //  (181)
item  [30] = [ "Coins", 1, 25, "" ];  //  (206)
item  [31] = [ "Coins", 1, 65, "" ];  //  (271)
item  [32] = [ "Coins", 1, 25, "" ];  //  (296)
item  [33] = [ "Iron Short Sword", 1, 1, "" ];
item  [34] = [ "Coins", 1, 25, "" ];  //  (321)
item  [35] = [ "Coins", 1, 5, "" ];  //  (326)
item  [36] = [ "Coins", 1, 10, "" ];  //  (336)
item  [37] = [ "Irit Leaf", 1, 1, "Herb" ];
item  [38] = [ "Iron Short Sword", 1, 1, "" ];
item  [39] = [ "Coins", 1, 5, "" ];  //  (341)
item  [40] = [ "Bronze Chain Mail Body", 1, 1, "" ];
item  [41] = [ "Medium Iron Helmet", 1, 1, "" ];
item  [42] = [ "Coins", 1, 5, "" ];  //  (346)
item  [43] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [44] = [ "Coins", 1, 10, "" ];  //  (356)
item  [45] = [ "Coins", 1, 10, "" ];  //  (366)
item  [46] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [47] = [ "Coins", 1, 10, "" ];  //  (376)
item  [48] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item  [49] = [ "bronze bar", 1, 1, "" ];
item  [50] = [ "Kwuarm", 1, 1, "Herb" ];
item  [51] = [ "Coins", 1, 10, "" ];  //  (386)
item  [52] = [ "Nothing", 1, 0, "" ];
item  [53] = [ "Coins", 1, 10, "" ];  //  (396)
item  [54] = [ "bronze bar", 1, 1, "" ];
item  [55] = [ "Coins", 1, 45, "" ];  //  (441)
item  [56] = [ "Coins", 1, 5, "" ];  //  (446)
item  [57] = [ "Coins", 1, 5, "" ];  //  (451)
item  [58] = [ "Coins", 1, 5, "" ];  //  (456)
item  [59] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [60] = [ "Tarromin", 1, 1, "Herb" ];
item  [61] = [ "Coins", 1, 10, "" ];  //  (466)
item  [62] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [63] = [ "Air-rune", 1, 10, "Rune" ];  //  (10)
item  [64] = [ "Coins", 1, 5, "" ];  //  (471)
item  [65] = [ "Coins", 1, 10, "" ];  //  (481)
item  [66] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (6)
item  [67] = [ "Coins", 1, 5, "" ];  //  (486)
item  [68] = [ "bronze bar", 1, 1, "" ];
item  [69] = [ "Coins", 1, 5, "" ];  //  (491)
item  [70] = [ "Coins", 1, 5, "" ];  //  (496)
item  [71] = [ "Coins", 1, 1, "" ];  //  (497)
item  [72] = [ "Nothing", 1, 0, "" ];
item  [73] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [74] = [ "Coins", 1, 25, "" ];  //  (522)
item  [75] = [ "Law-rune", 1, 1, "Rune" ];  //  (2)
item  [76] = [ "Coins", 1, 10, "" ];  //  (532)
item  [77] = [ "Marrentill", 1, 1, "Herb" ];
item  [78] = [ "Water-rune", 1, 6, "Rune" ];  //  (6)
item  [79] = [ "Coins", 1, 10, "" ];  //  (542)
item  [80] = [ "Nothing", 1, 0, "" ];
item  [81] = [ "Coins", 1, 5, "" ];  //  (547)
item  [82] = [ "Coins", 1, 5, "" ];  //  (552)
item  [83] = [ "Coins", 1, 10, "" ];  //  (562)
item  [84] = [ "Iron Simitar", 1, 1, "" ];
item  [85] = [ "Coins", 1, 10, "" ];  //  (572)
item  [86] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [87] = [ "Coins", 1, 45, "" ];  //  (617)
item  [88] = [ "Nothing", 1, 0, "" ];
item  [89] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [90] = [ "Water-rune", 1, 6, "Rune" ];  //  (12)
item  [91] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [92] = [ "Coins", 1, 25, "" ];  //  (642)
item  [93] = [ "Coins", 1, 10, "" ];  //  (652)
item  [94] = [ "Marrentill", 1, 1, "Herb" ];
item  [95] = [ "bronze bar", 1, 1, "" ];
item  [96] = [ "Coins", 1, 25, "" ];  //  (677)
item  [97] = [ "Coins", 1, 10, "" ];  //  (687)
item  [98] = [ "Coins", 1, 5, "" ];  //  (692)
item  [99] = [ "Irit Leaf", 1, 1, "Herb" ];
item [100] = [ "Iron Short Sword", 1, 1, "" ];
item [101] = [ "Coins", 1, 5, "" ];  //  (697)
item [102] = [ "Coins", 1, 25, "" ];  //  (722)
item [103] = [ "Guam Leaf", 1, 1, "Herb" ];
item [104] = [ "Coins", 1, 10, "" ];  //  (732)
item [105] = [ "Coins", 1, 65, "" ];  //  (797)
item [106] = [ "Coins", 1, 10, "" ];  //  (807)
item [107] = [ "Coins", 1, 25, "" ];  //  (832)
item [108] = [ "Coins", 1, 25, "" ];  //  (857)
item [109] = [ "Tarromin", 1, 1, "Herb" ];
item [110] = [ "Nothing", 1, 0, "" ];
item [111] = [ "Iron Axe", 1, 1, "" ];
item [112] = [ "Coins", 1, 5, "" ];  //  (862)
item [113] = [ "Coins", 1, 10, "" ];  //  (872)
item [114] = [ "Law-rune", 1, 1, "Rune" ];  //  (3)
item [115] = [ "Harralander", 1, 1, "Herb" ];
item [116] = [ "Nothing", 1, 0, "" ];
item [117] = [ "Coins", 1, 5, "" ];  //  (877)
item [118] = [ "Coins", 1, 25, "" ];  //  (902)
item [119] = [ "Marrentill", 1, 1, "Herb" ];
item [120] = [ "Coins", 1, 65, "" ];  //  (967)
item [121] = [ "Water-rune", 1, 6, "Rune" ];  //  (18)
item [122] = [ "Air-rune", 1, 10, "Rune" ];  //  (20)
item [123] = [ "Coins", 1, 10, "" ];  //  (977)
item [124] = [ "Medium Iron Helmet", 1, 1, "" ];
item [125] = [ "Coins", 1, 10, "" ];  //  (987)
item [126] = [ "Coins", 1, 5, "" ];  //  (992)
item [127] = [ "bronze bar", 1, 1, "" ];
item [128] = [ "Marrentill", 1, 1, "Herb" ];
item [129] = [ "Nothing", 1, 0, "" ];
item [130] = [ "Coins", 1, 5, "" ];  //  (997)
item [131] = [ "Coins", 1, 25, "" ];  //  (1022)
item [132] = [ "Marrentill", 1, 1, "Herb" ];
item [133] = [ "Coins", 1, 25, "" ];  //  (1047)
item [134] = [ "Coins", 1, 5, "" ];  //  (1052)
item [135] = [ "Coins", 1, 45, "" ];  //  (1097)
item [136] = [ "Coins", 1, 10, "" ];  //  (1107)
item [137] = [ "Marrentill", 1, 1, "Herb" ];
item [138] = [ "Medium Iron Helmet", 1, 1, "" ];
item [139] = [ "Coins", 1, 10, "" ];  //  (1117)
item [140] = [ "Coins", 1, 45, "" ];  //  (1162)
item [141] = [ "Coins", 1, 5, "" ];  //  (1167)
item [142] = [ "Coins", 1, 10, "" ];  //  (1177)
item [143] = [ "Coins", 1, 5, "" ];  //  (1182)
item [144] = [ "Nothing", 1, 0, "" ];
item [145] = [ "Guam Leaf", 1, 1, "Herb" ];
item [146] = [ "Nothing", 1, 0, "" ];
item [147] = [ "Coins", 1, 5, "" ];  //  (1187)
item [148] = [ "Coins", 1, 5, "" ];  //  (1192)
item [149] = [ "Coins", 1, 5, "" ];  //  (1197)
item [150] = [ "Iron Short Sword", 1, 1, "" ];
item [151] = [ "Cadantine", 1, 1, "Herb" ];
item [152] = [ "Coins", 1, 5, "" ];  //  (1202)
item [153] = [ "Nothing", 1, 0, "" ];
item [154] = [ "Coins", 1, 5, "" ];  //  (1207)
item [155] = [ "Coins", 1, 10, "" ];  //  (1217)
item [156] = [ "Coins", 1, 10, "" ];  //  (1227)
item [157] = [ "Coins", 1, 25, "" ];  //  (1252)
item [158] = [ "Coins", 1, 5, "" ];  //  (1257)
item [159] = [ "Coins", 1, 5, "" ];  //  (1262)
item [160] = [ "Coins", 1, 45, "" ];  //  (1307)
item [161] = [ "Marrentill", 1, 1, "Herb" ];
item [162] = [ "Coins", 1, 5, "" ];  //  (1312)
item [163] = [ "Coins", 1, 10, "" ];  //  (1322)
item [164] = [ "Coins", 1, 5, "" ];  //  (1327)
item [165] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (9)
item [166] = [ "Coins", 1, 10, "" ];  //  (1337)
item [167] = [ "Coins", 1, 5, "" ];  //  (1342)
item [168] = [ "Coins", 1, 5, "" ];  //  (1347)
item [169] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [170] = [ "Coins", 1, 5, "" ];  //  (1352)
item [171] = [ "Coins", 1, 5, "" ];  //  (1357)
item [172] = [ "Iron Axe", 1, 1, "" ];
item [173] = [ "Coins", 1, 5, "" ];  //  (1362)
item [174] = [ "Coins", 1, 45, "" ];  //  (1407)
item [175] = [ "Coins", 1, 5, "" ];  //  (1412)
item [176] = [ "Bronze Chain Mail Body", 1, 1, "" ];
item [177] = [ "Coins", 1, 65, "" ];  //  (1477)
item [178] = [ "Bronze Chain Mail Body", 1, 1, "" ];
item [179] = [ "Coins", 1, 10, "" ];  //  (1487)
item [180] = [ "Coins", 1, 5, "" ];  //  (1492)
item [181] = [ "Nothing", 1, 0, "" ];
item [182] = [ "Medium Iron Helmet", 1, 1, "" ];
item [183] = [ "Coins", 1, 5, "" ];  //  (1497)
item [184] = [ "Air-rune", 1, 10, "Rune" ];  //  (30)
item [185] = [ "Iron Short Sword", 1, 1, "" ];
item [186] = [ "Tarromin", 1, 1, "Herb" ];
item [187] = [ "Nothing", 1, 0, "" ];
item [188] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (12)
item [189] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (15)
item [190] = [ "bronze bar", 1, 1, "" ];
item [191] = [ "Coins", 1, 65, "" ];  //  (1562)
item [192] = [ "Nothing", 1, 0, "" ];
item [193] = [ "Coins", 1, 10, "" ];  //  (1572)
item [194] = [ "Coins", 1, 25, "" ];  //  (1597)
item [195] = [ "Coins", 1, 10, "" ];  //  (1607)
item [196] = [ "Coins", 1, 5, "" ];  //  (1612)
item [197] = [ "Nothing", 1, 0, "" ];
item [198] = [ "Coins", 1, 65, "" ];  //  (1677)
item [199] = [ "Law-rune", 1, 1, "Rune" ];  //  (4)
item [200] = [ "Marrentill", 1, 1, "Herb" ];
item [201] = [ "Coins", 1, 10, "" ];  //  (1687)
item [202] = [ "bronze bar", 1, 1, "" ];
item [203] = [ "Coins", 1, 1, "" ];  //  (1688)
item [204] = [ "bronze bar", 1, 1, "" ];
item [205] = [ "Coins", 1, 10, "" ];  //  (1698)
item [206] = [ "Coins", 1, 65, "" ];  //  (1763)
item [207] = [ "Coins", 1, 10, "" ];  //  (1773)
item [208] = [ "Coins", 1, 45, "" ];  //  (1818)
item [209] = [ "Nothing", 1, 0, "" ];
item [210] = [ "Coins", 1, 5, "" ];  //  (1823)
item [211] = [ "Medium Iron Helmet", 1, 1, "" ];
item [212] = [ "Coins", 1, 10, "" ];  //  (1833)
item [213] = [ "Coins", 1, 45, "" ];  //  (1878)
item [214] = [ "Iron Short Sword", 1, 1, "" ];
item [215] = [ "Water-rune", 1, 6, "Rune" ];  //  (24)
item [216] = [ "Coins", 1, 5, "" ];  //  (1883)
item [217] = [ "Harralander", 1, 1, "Herb" ];
item [218] = [ "Coins", 1, 5, "" ];  //  (1888)
item [219] = [ "Coins", 1, 5, "" ];  //  (1893)
item [220] = [ "Coins", 1, 5, "" ];  //  (1898)
item [221] = [ "Nothing", 1, 0, "" ];
item [222] = [ "Coins", 1, 5, "" ];  //  (1903)
item [223] = [ "Coins", 1, 5, "" ];  //  (1908)
item [224] = [ "Iron Short Sword", 1, 1, "" ];
item [225] = [ "Nothing", 1, 0, "" ];
item [226] = [ "Nothing", 1, 0, "" ];
item [227] = [ "Water-rune", 1, 6, "Rune" ];  //  (30)
item [228] = [ "Coins", 1, 5, "" ];  //  (1913)
item [229] = [ "Guam Leaf", 1, 1, "Herb" ];
item [230] = [ "Coins", 1, 5, "" ];  //  (1918)
item [231] = [ "Coins", 1, 65, "" ];  //  (1983)
item [232] = [ "Coins", 1, 10, "" ];  //  (1993)
item [233] = [ "bronze bar", 1, 1, "" ];
item [234] = [ "Iron Axe", 1, 1, "" ];
item [235] = [ "bronze bar", 1, 1, "" ];
item [236] = [ "Coins", 1, 65, "" ];  //  (2058)
item [237] = [ "Nothing", 1, 0, "" ];
item [238] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (2)
item [239] = [ "Water-rune", 1, 6, "Rune" ];  //  (36)
item [240] = [ "Coins", 1, 10, "" ];  //  (2068)
item [241] = [ "Coins", 1, 25, "" ];  //  (2093)
item [242] = [ "Coins", 1, 5, "" ];  //  (2098)
item [243] = [ "Coins", 1, 10, "" ];  //  (2108)
item [244] = [ "Coins", 1, 1, "" ];  //  (2109)
item [245] = [ "Tarromin", 1, 1, "Herb" ];
item [246] = [ "Coins", 1, 10, "" ];  //  (2119)
item [247] = [ "Kwuarm", 1, 1, "Herb" ];
item [248] = [ "Irit Leaf", 1, 1, "Herb" ];

runs [0] = [ 248, 249 ];  // kills 249 drops 249

// run 2

item [249] = [ "Coins", 1, 5, "" ];  //  (5)
item [250] = [ "Marrentill", 1, 1, "Herb" ];
item [251] = [ "Marrentill", 1, 1, "Herb" ];
item [252] = [ "Coins", 1, 5, "" ];  //  (10)
item [253] = [ "Nothing", 1, 0, "" ];
item [254] = [ "Coins", 1, 5, "" ];  //  (15)
item [255] = [ "Nothing", 1, 0, "" ];
item [256] = [ "Iron Axe", 1, 1, "" ];
item [257] = [ "Coins", 1, 5, "" ];  //  (20)
item [258] = [ "Coins", 1, 10, "" ];  //  (30)
item [259] = [ "Coins", 1, 10, "" ];  //  (40)
item [260] = [ "Coins", 1, 25, "" ];  //  (65)
item [261] = [ "Coins", 1, 10, "" ];  //  (75)
item [262] = [ "Coins", 1, 10, "" ];  //  (85)
item [263] = [ "Medium Iron Helmet", 1, 1, "" ];
item [264] = [ "Coins", 1, 5, "" ];  //  (90)
item [265] = [ "bronze bar", 1, 1, "" ];
item [266] = [ "Guam Leaf", 1, 1, "Herb" ];
item [267] = [ "Marrentill", 1, 1, "Herb" ];
item [268] = [ "Medium Iron Helmet", 1, 1, "" ];
item [269] = [ "Medium Iron Helmet", 1, 1, "" ];
item [270] = [ "Iron Axe", 1, 1, "" ];
item [271] = [ "bronze bar", 1, 1, "" ];
item [272] = [ "uncut ruby", 1, 1, "Gem" ];
item [273] = [ "Coins", 1, 5, "" ];  //  (95)
item [274] = [ "Coins", 1, 10, "" ];  //  (105)
item [275] = [ "Coins", 1, 10, "" ];  //  (115)
item [276] = [ "Coins", 1, 10, "" ];  //  (125)
item [277] = [ "Coins", 1, 10, "" ];  //  (135)
item [278] = [ "Coins", 1, 10, "" ];  //  (145)
item [279] = [ "Irit Leaf", 1, 1, "Herb" ];
item [280] = [ "Coins", 1, 5, "" ];  //  (150)
item [281] = [ "Coins", 1, 5, "" ];  //  (155)
item [282] = [ "Coins", 1, 5, "" ];  //  (160)
item [283] = [ "Coins", 1, 10, "" ];  //  (170)
item [284] = [ "Coins", 1, 10, "" ];  //  (180)
item [285] = [ "Bronze Chain Mail Body", 1, 1, "" ];
item [286] = [ "Marrentill", 1, 1, "Herb" ];
item [287] = [ "Coins", 1, 10, "" ];  //  (190)
item [288] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [289] = [ "Law-rune", 1, 1, "Rune" ];  //  (1)
item [290] = [ "Nothing", 1, 0, "" ];
item [291] = [ "Coins", 1, 65, "" ];  //  (255)
item [292] = [ "Marrentill", 1, 1, "Herb" ];
item [293] = [ "Coins", 1, 1, "" ];  //  (256)
item [294] = [ "bronze bar", 1, 1, "" ];
item [295] = [ "Coins", 1, 45, "" ];  //  (301)
item [296] = [ "Iron Simitar", 1, 1, "" ];
item [297] = [ "bronze bar", 1, 1, "" ];
item [298] = [ "Coins", 1, 10, "" ];  //  (311)
item [299] = [ "bronze bar", 1, 1, "" ];
item [300] = [ "Medium Iron Helmet", 1, 1, "" ];
item [301] = [ "Coins", 1, 10, "" ];  //  (321)
item [302] = [ "Iron Axe", 1, 1, "" ];
item [303] = [ "Coins", 1, 5, "" ];  //  (326)
item [304] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (1)
item [305] = [ "Marrentill", 1, 1, "Herb" ];
item [306] = [ "Coins", 1, 5, "" ];  //  (331)
item [307] = [ "Nothing", 1, 0, "" ];
item [308] = [ "Harralander", 1, 1, "Herb" ];
item [309] = [ "Coins", 1, 5, "" ];  //  (336)
item [310] = [ "Marrentill", 1, 1, "Herb" ];
item [311] = [ "Coins", 1, 10, "" ];  //  (346)
item [312] = [ "Coins", 1, 45, "" ];  //  (391)
item [313] = [ "Coins", 1, 25, "" ];  //  (416)
item [314] = [ "Iron Axe", 1, 1, "" ];
item [315] = [ "Coins", 1, 5, "" ];  //  (421)
item [316] = [ "Coins", 1, 5, "" ];  //  (426)
item [317] = [ "Harralander", 1, 1, "Herb" ];
item [318] = [ "Coins", 1, 1, "" ];  //  (427)
item [319] = [ "Coins", 1, 10, "" ];  //  (437)
item [320] = [ "Coins", 1, 5, "" ];  //  (442)
item [321] = [ "Coins", 1, 5, "" ];  //  (447)
item [322] = [ "Coins", 1, 5, "" ];  //  (452)
item [323] = [ "Marrentill", 1, 1, "Herb" ];
item [324] = [ "Medium Iron Helmet", 1, 1, "" ];
item [325] = [ "Coins", 1, 5, "" ];  //  (457)
item [326] = [ "Coins", 1, 65, "" ];  //  (522)
item [327] = [ "Coins", 1, 65, "" ];  //  (587)
item [328] = [ "Medium Iron Helmet", 1, 1, "" ];
item [329] = [ "Coins", 1, 5, "" ];  //  (592)
item [330] = [ "Kwuarm", 1, 1, "Herb" ];
item [331] = [ "Nothing", 1, 0, "" ];
item [332] = [ "Coins", 1, 25, "" ];  //  (617)
item [333] = [ "Coins", 1, 10, "" ];  //  (627)
item [334] = [ "Coins", 1, 5, "" ];  //  (632)
item [335] = [ "Coins", 1, 45, "" ];  //  (677)
item [336] = [ "Law-rune", 1, 1, "Rune" ];  //  (2)
item [337] = [ "Coins", 1, 5, "" ];  //  (682)
item [338] = [ "Iron Short Sword", 1, 1, "" ];
item [339] = [ "Coins", 1, 1, "" ];  //  (683)
item [340] = [ "Coins", 1, 10, "" ];  //  (693)
item [341] = [ "Coins", 1, 5, "" ];  //  (698)
item [342] = [ "Tarromin", 1, 1, "Herb" ];
item [343] = [ "Coins", 1, 45, "" ];  //  (743)
item [344] = [ "Iron Short Sword", 1, 1, "" ];
item [345] = [ "Coins", 1, 25, "" ];  //  (768)
item [346] = [ "Tarromin", 1, 1, "Herb" ];
item [347] = [ "Coins", 1, 5, "" ];  //  (773)
item [348] = [ "Coins", 1, 5, "" ];  //  (778)
item [349] = [ "Medium Iron Helmet", 1, 1, "" ];
item [350] = [ "Harralander", 1, 1, "Herb" ];
item [351] = [ "Coins", 1, 5, "" ];  //  (783)
item [352] = [ "Coins", 1, 5, "" ];  //  (788)
item [353] = [ "Coins", 1, 1, "" ];  //  (789)
item [354] = [ "Coins", 1, 5, "" ];  //  (794)
item [355] = [ "Medium Iron Helmet", 1, 1, "" ];
item [356] = [ "Marrentill", 1, 1, "Herb" ];
item [357] = [ "Iron Short Sword", 1, 1, "" ];
item [358] = [ "Irit Leaf", 1, 1, "Herb" ];
item [359] = [ "Coins", 1, 5, "" ];  //  (799)
item [360] = [ "bronze bar", 1, 1, "" ];
item [361] = [ "Coins", 1, 10, "" ];  //  (809)
item [362] = [ "Coins", 1, 10, "" ];  //  (819)
item [363] = [ "Coins", 1, 5, "" ];  //  (824)
item [364] = [ "Coins", 1, 10, "" ];  //  (834)
item [365] = [ "Coins", 1, 5, "" ];  //  (839)
item [366] = [ "Nothing", 1, 0, "" ];
item [367] = [ "Water-rune", 1, 6, "Rune" ];  //  (6)
item [368] = [ "Medium Iron Helmet", 1, 1, "" ];
item [369] = [ "Nothing", 1, 0, "" ];
item [370] = [ "Coins", 1, 10, "" ];  //  (849)
item [371] = [ "Nothing", 1, 0, "" ];
item [372] = [ "Coins", 1, 25, "" ];  //  (874)
item [373] = [ "Medium Iron Helmet", 1, 1, "" ];
item [374] = [ "Coins", 1, 25, "" ];  //  (899)
item [375] = [ "Coins", 1, 10, "" ];  //  (909)
item [376] = [ "Coins", 1, 10, "" ];  //  (919)
item [377] = [ "Coins", 1, 25, "" ];  //  (944)
item [378] = [ "Coins", 1, 45, "" ];  //  (989)
item [379] = [ "Law-rune", 1, 1, "Rune" ];  //  (3)
item [380] = [ "Iron Short Sword", 1, 1, "" ];
item [381] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [382] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [383] = [ "Coins", 1, 5, "" ];  //  (994)
item [384] = [ "Coins", 1, 10, "" ];  //  (1004)
item [385] = [ "Coins", 1, 5, "" ];  //  (1009)
item [386] = [ "Bronze Chain Mail Body", 1, 1, "" ];
item [387] = [ "Nothing", 1, 0, "" ];
item [388] = [ "Coins", 1, 10, "" ];  //  (1019)
item [389] = [ "Coins", 1, 5, "" ];  //  (1024)
item [390] = [ "Marrentill", 1, 1, "Herb" ];
item [391] = [ "Law-rune", 1, 1, "Rune" ];  //  (4)
item [392] = [ "Guam Leaf", 1, 1, "Herb" ];
item [393] = [ "Coins", 1, 65, "" ];  //  (1089)
item [394] = [ "Tarromin", 1, 1, "Herb" ];
item [395] = [ "Guam Leaf", 1, 1, "Herb" ];
item [396] = [ "Coins", 1, 45, "" ];  //  (1134)
item [397] = [ "Coins", 1, 10, "" ];  //  (1144)
item [398] = [ "Medium Iron Helmet", 1, 1, "" ];
item [399] = [ "Coins", 1, 10, "" ];  //  (1154)

runs [1] = [ 399, 400 ];  // kills 400 drops 400

// runs [2] = [ x, y ];  // kills ? ( y - 400 ), drops ? ( x - 399 )

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

item [000] = [ "bronze bar", 1, 1, "" ];

item [000] = [ "Iron Axe", 1, 1, "" ];
item [000] = [ "Iron Short Sword", 1, 1, "" ];
item [000] = [ "Iron Simitar", 1, 1, "" ];

item [000] = [ "Bronze Chain Mail Body", 1, 1, "" ];
item [000] = [ "Medium Iron Helmet", 1, 1, "" ];

item [000] = [ "uncut sapphire", 1, 1, "Gem" ];
item [000] = [ "uncut emerald", 1, 1, "Gem" ];
item [000] = [ "uncut ruby", 1, 1, "Gem" ];
item [000] = [ "uncut diamond", 1, 1, "Gem" ];

item [000] = [ "Half of a key (loop)", 1, 1, "" ];
item [000] = [ "Half of a key (teeth)", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];
*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "skeleton";         // monster's name
var mcbl = 31;                  // monster's combat level
var mindex = 81;                // index into monster data base
var mrpt = 2;                   // number of non-breaking space to add after index name