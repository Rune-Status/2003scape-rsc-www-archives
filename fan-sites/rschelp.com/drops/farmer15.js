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

item   [0] = [ "Nothing", 1, 0, "" ];  // 1
item   [1] = [ "Nothing", 1, 0, "" ];
item   [2] = [ "Coins", 1, 3, "" ];  //  (3)
item   [3] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (1)
item   [4] = [ "Fishing Bait", 1, 1, "" ];
item   [5] = [ "Coins", 1, 3, "" ];  //  (6)
item   [6] = [ "Nothing", 1, 0, "" ];
item   [7] = [ "Tarromin", 1, 1, "Herb" ];
item   [8] = [ "Coins", 1, 3, "" ];  //  (9)
item   [9] = [ "Tarromin", 1, 1, "Herb" ];  // 10
item  [10] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [11] = [ "Coins", 1, 3, "" ];  //  (12)
item  [12] = [ "Coins", 1, 3, "" ];  //  (15)
item  [13] = [ "Nothing", 1, 0, "" ];
item  [14] = [ "Iron dagger", 1, 1, "" ];
item  [15] = [ "Tarromin", 1, 1, "Herb" ];
item  [16] = [ "Nothing", 1, 0, "" ];
item  [17] = [ "Coins", 1, 3, "" ];  //  (18)
item  [18] = [ "Coins", 1, 3, "" ];  //  (21)
item  [19] = [ "Ranarr Weed", 1, 1, "Herb" ];  // 20
item  [20] = [ "Coins", 1, 3, "" ];  //  (24)
item  [21] = [ "Earth-rune", 1, 3, "Rune" ];  //  (3)
item  [22] = [ "Cadantine", 1, 1, "Herb" ];
item  [23] = [ "Kwuarm", 1, 1, "Herb" ];
item  [24] = [ "Nothing", 1, 0, "" ];
item  [25] = [ "Coins", 1, 3, "" ];  //  (27)
item  [26] = [ "Coins", 1, 15, "" ];  //  (42)
item  [27] = [ "Nothing", 1, 0, "" ];
item  [28] = [ "Nothing", 1, 0, "" ];
item  [29] = [ "Earth-rune", 1, 3, "Rune" ];  // 30  (6)
item  [30] = [ "Coins", 1, 15, "" ];  //  (57)
item  [31] = [ "Coins", 1, 3, "" ];  //  (60)
item  [32] = [ "Coins", 1, 3, "" ];  //  (63)
item  [33] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [34] = [ "Coins", 1, 3, "" ];  //  (66)
item  [35] = [ "Tarromin", 1, 1, "Herb" ];
item  [36] = [ "Coins", 1, 3, "" ];  //  (69)
item  [37] = [ "Coins", 1, 3, "" ];  //  (72)
item  [38] = [ "Nothing", 1, 0, "" ];
item  [39] = [ "Coins", 1, 3, "" ];  // 40  (75)
item  [40] = [ "Coins", 1, 5, "" ];  //  (80)
item  [41] = [ "Coins", 1, 3, "" ];  //  (83)
item  [42] = [ "Coins", 1, 3, "" ];  //  (86)
item  [43] = [ "copper ore", 1, 1, "" ];
item  [44] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [45] = [ "Coins", 1, 5, "" ];  //  (91)
item  [46] = [ "Fire-rune", 1, 4, "Rune" ];  //  (4)
item  [47] = [ "Tarromin", 1, 1, "Herb" ];
item  [48] = [ "Coins", 1, 3, "" ];  //  (94)
item  [49] = [ "Nothing", 1, 0, "" ];  // 50
item  [50] = [ "Nothing", 1, 0, "" ];
item  [51] = [ "Marrentill", 1, 1, "Herb" ];
item  [52] = [ "Coins", 1, 15, "" ];  //  (109)
item  [53] = [ "Coins", 1, 3, "" ];  //  (112)
item  [54] = [ "Fishing Bait", 1, 1, "" ];
item  [55] = [ "Coins", 1, 3, "" ];  //  (115)
item  [56] = [ "Coins", 1, 3, "" ];  //  (118)
item  [57] = [ "Coins", 1, 3, "" ];  //  (121)
item  [58] = [ "Coins", 1, 3, "" ];  //  (124)
item  [59] = [ "Nothing", 1, 0, "" ];  // 60
item  [60] = [ "Nothing", 1, 0, "" ];
item  [61] = [ "Coins", 1, 15, "" ];  //  (139)
item  [62] = [ "Nothing", 1, 0, "" ];
item  [63] = [ "Irit Leaf", 1, 1, "Herb" ];
item  [64] = [ "Earth-rune", 1, 3, "Rune" ];  //  (9)
item  [65] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [66] = [ "Nothing", 1, 0, "" ];
item  [67] = [ "Coins", 1, 3, "" ];  //  (142)
item  [68] = [ "Nothing", 1, 0, "" ];
item  [69] = [ "Nothing", 1, 0, "" ];  // 70
item  [70] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [71] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [72] = [ "Coins", 1, 5, "" ];  //  (147)
item  [73] = [ "Coins", 1, 3, "" ];  //  (150)
item  [74] = [ "Nothing", 1, 0, "" ];
item  [75] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [76] = [ "Nothing", 1, 0, "" ];
item  [77] = [ "Nothing", 1, 0, "" ];
item  [78] = [ "Harralander", 1, 1, "Herb" ];
item  [79] = [ "Coins", 1, 3, "" ];  // 80  (153)
item  [80] = [ "Coins", 1, 3, "" ];  //  (156)
item  [81] = [ "Nothing", 1, 0, "" ];
item  [82] = [ "Nothing", 1, 0, "" ];
item  [83] = [ "Coins", 1, 15, "" ];  //  (171)
item  [84] = [ "Nothing", 1, 0, "" ];
item  [85] = [ "Coins", 1, 3, "" ];  //  (174)
item  [86] = [ "Coins", 1, 3, "" ];  //  (177)
item  [87] = [ "Nothing", 1, 0, "" ];
item  [88] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [89] = [ "Nothing", 1, 0, "" ];  // 90
item  [90] = [ "Nothing", 1, 0, "" ];
item  [91] = [ "Fishing Bait", 1, 1, "" ];
item  [92] = [ "Coins", 1, 25, "" ];  //  (202)
item  [93] = [ "Coins", 1, 3, "" ];  //  (205)
item  [94] = [ "Coins", 1, 3, "" ];  //  (208)
item  [95] = [ "Coins", 1, 3, "" ];  //  (211)
item  [96] = [ "copper ore", 1, 1, "" ];
item  [97] = [ "Nothing", 1, 0, "" ];
item  [98] = [ "Irit Leaf", 1, 1, "Herb" ];
item  [99] = [ "Coins", 1, 3, "" ];  // 100  (214)
item [100] = [ "Nothing", 1, 0, "" ];
item [101] = [ "Coins", 1, 3, "" ];  //  (217)
item [102] = [ "Nothing", 1, 0, "" ];
item [103] = [ "Coins", 1, 5, "" ];  //  (222)
item [104] = [ "Coins", 1, 15, "" ];  //  (237)
item [105] = [ "Medium Bronze Helmet", 1, 1, "" ];
item [106] = [ "Bronze Arrows", 1, 7, "Arrows" ];
item [107] = [ "Harralander", 1, 1, "Herb" ];
item [108] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [109] = [ "Coins", 1, 3, "" ];  // 110  (240)
item [110] = [ "copper ore", 1, 1, "" ];
item [111] = [ "Nothing", 1, 0, "" ];
item [112] = [ "Tarromin", 1, 1, "Herb" ];
item [113] = [ "Coins", 1, 3, "" ];  //  (243)
item [114] = [ "Coins", 1, 3, "" ];  //  (246)
item [115] = [ "Coins", 1, 3, "" ];  //  (249)
item [116] = [ "Nothing", 1, 0, "" ];
item [117] = [ "Tarromin", 1, 1, "Herb" ];
item [118] = [ "Coins", 1, 3, "" ];  //  (252)
item [119] = [ "Nothing", 1, 0, "" ];  // 120
item [120] = [ "Nothing", 1, 0, "" ];
item [121] = [ "Coins", 1, 15, "" ];  //  (267)
item [122] = [ "Coins", 1, 5, "" ];  //  (272)
item [123] = [ "Nothing", 1, 0, "" ];
item [124] = [ "Coins", 1, 3, "" ];  //  (275)
item [125] = [ "Bronze Arrows", 1, 7, "Arrows" ];
item [126] = [ "Nothing", 1, 0, "" ];
item [127] = [ "Fire-rune", 1, 4, "Rune" ];  //  (8)
item [128] = [ "Coins", 1, 3, "" ];  //  (278)
item [129] = [ "Guam Leaf", 1, 1, "Herb" ];  // 130
item [130] = [ "Cabbage", 1, 1, "" ];
item [131] = [ "Nothing", 1, 0, "" ];
item [132] = [ "Coins", 1, 3, "" ];  //  (281)
item [133] = [ "Coins", 1, 3, "" ];  //  (284)
item [134] = [ "Nothing", 1, 0, "" ];
item [135] = [ "Coins", 1, 15, "" ];  //  (299)
item [136] = [ "Guam Leaf", 1, 1, "Herb" ];
item [137] = [ "Coins", 1, 5, "" ];  //  (304)
item [138] = [ "Avantoe", 1, 1, "Herb" ];
item [139] = [ "copper ore", 1, 1, "" ];  // 140
item [140] = [ "Coins", 1, 3, "" ];  //  (307)
item [141] = [ "Kwuarm", 1, 1, "Herb" ];
item [142] = [ "Nothing", 1, 0, "" ];
item [143] = [ "copper ore", 1, 1, "" ];
item [144] = [ "Coins", 1, 3, "" ];  //  (310)
item [145] = [ "Coins", 1, 5, "" ];  //  (315)
item [146] = [ "Coins", 1, 3, "" ];  //  (318)
item [147] = [ "Coins", 1, 3, "" ];  //  (321)
item [148] = [ "Nothing", 1, 0, "" ];
item [149] = [ "Coins", 1, 5, "" ];  // 150  (326)

runs [0] = [ 149, 150 ];  // kills 150, drops 149

// run 2

item [150] = [ "Coins", 1, 3, "" ];  //  151  (3)
item [151] = [ "Coins", 1, 3, "" ];  //  (6)
item [152] = [ "Nothing", 1, 0, "" ];
item [153] = [ "Nothing", 1, 0, "" ];
item [154] = [ "Nothing", 1, 0, "" ];
item [155] = [ "Guam Leaf", 1, 1, "Herb" ];
item [156] = [ "Coins", 1, 3, "" ];  //  (9)
item [157] = [ "Marrentill", 1, 1, "Herb" ];
item [158] = [ "Fishing Bait", 1, 1, "" ];
item [159] = [ "Nothing", 1, 0, "" ];  //  160
item [160] = [ "Bronze Arrows", 1, 7, "Arrows" ];
item [161] = [ "Cadantine", 1, 1, "Herb" ];
item [162] = [ "Fishing Bait", 1, 1, "" ];
item [163] = [ "Coins", 1, 3, "" ];  //  (12)
item [164] = [ "Nothing", 1, 0, "" ];
item [165] = [ "Coins", 1, 5, "" ];  //  (17)
item [166] = [ "Coins", 1, 3, "" ];  //  (20)
item [167] = [ "Coins", 1, 3, "" ];  //  (23)
item [168] = [ "Coins", 1, 3, "" ];  //  (26)
item [169] = [ "Irit Leaf", 1, 1, "Herb" ];  //  170
item [170] = [ "Tarromin", 1, 1, "Herb" ];
item [171] = [ "copper ore", 1, 1, "" ];
item [172] = [ "Fishing Bait", 1, 1, "" ];
item [173] = [ "Nothing", 1, 0, "" ];
item [174] = [ "Nothing", 1, 0, "" ];
item [175] = [ "Earth-rune", 1, 3, "Rune" ];  //  (3)
item [176] = [ "Coins", 1, 5, "" ];  //  (31)
item [177] = [ "Coins", 1, 3, "" ];  //  (34)
item [178] = [ "Tarromin", 1, 1, "Herb" ];
item [179] = [ "Nothing", 1, 0, "" ];  //  180
item [180] = [ "Coins", 1, 3, "" ];  //  (37)
item [181] = [ "Guam Leaf", 1, 1, "Herb" ];
item [182] = [ "Coins", 1, 5, "" ];  //  (42)
item [183] = [ "Nothing", 1, 0, "" ];
item [184] = [ "Coins", 1, 5, "" ];  //  (47)
item [185] = [ "Bronze Arrows", 1, 7, "Arrows" ];
item [186] = [ "Coins", 1, 3, "" ];  //  (50)
item [187] = [ "Coins", 1, 3, "" ];  //  (53)
item [188] = [ "Harralander", 1, 1, "Herb" ];
item [189] = [ "Nothing", 1, 0, "" ];  //  190
item [190] = [ "Coins", 1, 3, "" ];  //  (56)
item [191] = [ "Medium Bronze Helmet", 1, 1, "" ];
item [192] = [ "Earth-rune", 1, 3, "Rune" ];  //  (6)
item [193] = [ "Coins", 1, 3, "" ];  //  (59)
item [194] = [ "Fishing Bait", 1, 1, "" ];
item [195] = [ "Nothing", 1, 0, "" ];
item [196] = [ "Coins", 1, 3, "" ];  //  (62)
item [197] = [ "Earth-rune", 1, 3, "Rune" ];  //  (9)
item [198] = [ "Guam Leaf", 1, 1, "Herb" ];
item [199] = [ "Coins", 1, 5, "" ];  //  200  (67)
item [200] = [ "Coins", 1, 15, "" ];  //  (82)
item [201] = [ "Kwuarm", 1, 1, "Herb" ];
item [202] = [ "Fishing Bait", 1, 1, "" ];
item [203] = [ "Coins", 1, 3, "" ];  //  (85)
item [204] = [ "Cabbage", 1, 1, "" ];
item [205] = [ "Fire-rune", 1, 4, "Rune" ];
item [206] = [ "Coins", 1, 5, "" ];  //  (90)
item [207] = [ "Guam Leaf", 1, 1, "Herb" ];
item [208] = [ "Nothing", 1, 0, "" ];
item [209] = [ "Nothing", 1, 0, "" ];  //  210
item [210] = [ "Coins", 1, 3, "" ];  //  (93)
item [211] = [ "Harralander", 1, 1, "Herb" ];
item [212] = [ "Nothing", 1, 0, "" ];
item [213] = [ "Coins", 1, 3, "" ];  //  (96)
item [214] = [ "Coins", 1, 3, "" ];  //  (99)
item [215] = [ "Nothing", 1, 0, "" ];
item [216] = [ "Coins", 1, 3, "" ];  //  (102)
item [217] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (1)
item [218] = [ "Coins", 1, 3, "" ];  //  (105)
item [219] = [ "Coins", 1, 3, "" ];  //  220  (108)
item [220] = [ "Kwuarm", 1, 1, "Herb" ];
item [221] = [ "Marrentill", 1, 1, "Herb" ];
item [222] = [ "Coins", 1, 3, "" ];  //  (111)
item [223] = [ "Irit Leaf", 1, 1, "Herb" ];
item [224] = [ "Coins", 1, 3, "" ];  //  (114)
item [225] = [ "Coins", 1, 15, "" ];  //  (129)
item [226] = [ "Coins", 1, 3, "" ];  //  (132)
item [227] = [ "Coins", 1, 3, "" ];  //  (135)
item [228] = [ "Coins", 1, 5, "" ];  //  (140)
item [229] = [ "Coins", 1, 3, "" ];  //  230  (143)
item [230] = [ "Tarromin", 1, 1, "Herb" ];
item [231] = [ "Fishing Bait", 1, 1, "" ];
item [232] = [ "Coins", 1, 3, "" ];  //  (146)
item [233] = [ "Coins", 1, 3, "" ];  //  (149)
item [234] = [ "Tarromin", 1, 1, "Herb" ];
item [235] = [ "Coins", 1, 3, "" ];  //  (152)
item [236] = [ "Coins", 1, 3, "" ];  //  (155)
item [237] = [ "Nothing", 1, 0, "" ];
item [238] = [ "Cabbage", 1, 1, "" ];
item [239] = [ "Coins", 1, 3, "" ];  //  240  (158)
item [240] = [ "Nothing", 1, 0, "" ];
item [241] = [ "Coins", 1, 3, "" ];  //  (161)
item [242] = [ "Iron dagger", 1, 1, "" ];
item [243] = [ "Coins", 1, 5, "" ];  //  (166)
item [244] = [ "Guam Leaf", 1, 1, "Herb" ];
item [245] = [ "Fishing Bait", 1, 1, "" ];
item [246] = [ "Iron dagger", 1, 1, "" ];
item [247] = [ "Guam Leaf", 1, 1, "Herb" ];
item [248] = [ "Coins", 1, 3, "" ];  //  (169)
item [249] = [ "Coins", 1, 3, "" ];  //  250  (172)
item [250] = [ "Guam Leaf", 1, 1, "Herb" ];
item [251] = [ "Nothing", 1, 0, "" ];
item [252] = [ "Coins", 1, 3, "" ];  //  (175)
item [253] = [ "Marrentill", 1, 1, "Herb" ];
item [254] = [ "Coins", 1, 3, "" ];  //  (178)
item [255] = [ "Bronze Arrows", 1, 7, "Arrows" ];
item [256] = [ "Marrentill", 1, 1, "Herb" ];
item [257] = [ "Chaos-rune", 1, 1, "Rune" ];  //  (2)
item [258] = [ "Nothing", 1, 0, "" ];
item [259] = [ "Nothing", 1, 0, "" ];  //  260
item [260] = [ "Coins", 1, 3, "" ];  //  (181)
item [261] = [ "Nothing", 1, 0, "" ];
item [262] = [ "Tarromin", 1, 1, "Herb" ];
item [263] = [ "Coins", 1, 3, "" ];  //  (184)
item [264] = [ "Coins", 1, 15, "" ];  //  (199)
item [265] = [ "Coins", 1, 3, "" ];  //  (202)
item [266] = [ "Medium Bronze Helmet", 1, 1, "" ];
item [267] = [ "Nothing", 1, 0, "" ];
item [268] = [ "copper ore", 1, 1, "" ];
item [269] = [ "Coins", 1, 3, "" ];  //  270  (205)
item [270] = [ "Nothing", 1, 0, "" ];
item [271] = [ "Nothing", 1, 0, "" ];
item [272] = [ "Nothing", 1, 0, "" ];
item [273] = [ "Nothing", 1, 0, "" ];
item [274] = [ "Nothing", 1, 0, "" ];
item [275] = [ "Coins", 1, 5, "" ];  //  (210)
item [276] = [ "Marrentill", 1, 1, "Herb" ];
item [277] = [ "Nothing", 1, 0, "" ];
item [278] = [ "Medium Bronze Helmet", 1, 1, "" ];
item [279] = [ "Coins", 1, 3, "" ];  //  280  (213)
item [280] = [ "Dwarf Weed", 1, 1, "Herb" ];
item [281] = [ "Nothing", 1, 0, "" ];
item [282] = [ "Fishing Bait", 1, 1, "" ];
item [283] = [ "Coins", 1, 3, "" ];  //  (216)
item [284] = [ "Nothing", 1, 0, "" ];
item [285] = [ "Coins", 1, 3, "" ];  //  (219)
item [286] = [ "Nothing", 1, 0, "" ];
item [287] = [ "Coins", 1, 3, "" ];  //  (222)
item [288] = [ "Coins", 1, 3, "" ];  //  (225)
item [289] = [ "Coins", 1, 15, "" ];  //  290  (240)
item [290] = [ "Coins", 1, 3, "" ];  //  (243)
item [291] = [ "Nothing", 1, 0, "" ];
item [292] = [ "Coins", 1, 5, "" ];  //  (248)
item [293] = [ "Fire-rune", 1, 4, "Rune" ];  //  (8)
item [294] = [ "Coins", 1, 3, "" ];  //  (251)
item [295] = [ "Bronze Arrows", 1, 7, "Arrows" ];  //  (28)
item [296] = [ "Coins", 1, 3, "" ];  //  (254)
item [297] = [ "Nothing", 1, 0, "" ];
item [298] = [ "Coins", 1, 3, "" ];  //  (257)
item [299] = [ "Marrentill", 1, 1, "Herb" ];  //  300

runs [1] = [ 299, 300 ];  // kills 150, drops 150

// runs [2] = [ x, y ];  // kills ? ( y - 300 ), drops ? ( x - 299 )

/*
item [000] = [ "Coins", 1, 3, "" ];  //  ()
item [000] = [ "Coins", 1, 5, "" ];  //  ()
item [000] = [ "Coins", 1, 15, "" ];  //  ()
item [000] = [ "Coins", 1, 25, "" ];  //  ()

item [000] = [ "Guam Leaf", 1, 1, "Herb" ];
item [000] = [ "Marrentill", 1, 1, "Herb" ];
item [000] = [ "Tarromin", 1, 1, "Herb" ];
item [000] = [ "Harralander", 1, 1, "Herb" ];
item [000] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [000] = [ "Irit Leaf", 1, 1, "Herb" ];
item [000] = [ "Avantoe", 1, 1, "Herb" ];
item [000] = [ "Kwuarm", 1, 1, "Herb" ];
item [000] = [ "Cadantine", 1, 1, "Herb" ];
item [000] = [ "Dwarf Weed", 1, 1, "Herb" ];

item [000] = [ "Earth-rune", 1, 3, "Rune" ];  //  ()
item [000] = [ "Fire-rune", 1, 4, "Rune" ];  //  ()
item [000] = [ "Chaos-rune", 1, 1, "Rune" ];  //  ()

item [000] = [ "Bronze Arrows", 1, 7, "Arrows" ];  //  ()
item [000] = [ "Iron dagger", 1, 1, "" ];

item [000] = [ "Medium Bronze Helmet", 1, 1, "" ];

item [000] = [ "Fishing Bait", 1, 1, "" ];
item [000] = [ "copper ore", 1, 1, "" ];
item [000] = [ "Cabbage", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];
*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "farmer";        // monster's name
var mcbl = 15;               // monster's combat level
var mindex = 27;             // index into monster data base
var mrpt = 2;                // number of non-breaking space to add after index name