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

item   [0] = [ "Air-rune", 1, 8, "Rune" ];  //  (8)
item   [1] = [ "Bronze Long Sword", 1, 1, "" ];
item   [2] = [ "Coins", 1, 4, "" ];  //  (4)
item   [3] = [ "Cadantine", 1, 1, "Herb" ];
item   [4] = [ "Coins", 1, 25, "" ];  //  (29)
item   [5] = [ "Coins", 1, 2, "" ];  //  (31)
item   [6] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (2)
item   [7] = [ "Coins", 1, 33, "" ];  //  (64)
item   [8] = [ "Ranarr Weed", 1, 1, "Herb" ];
item   [9] = [ "Coins", 1, 12, "" ];  //  (76)
item  [10] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (4)
item  [11] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [12] = [ "Coins", 1, 2, "" ];  //  (78)
item  [13] = [ "Coins", 1, 12, "" ];  //  (90)
item  [14] = [ "Nothing", 1, 0, "" ];
item  [15] = [ "Earth-rune", 1, 2, "Rune" ];  //  (2)
item  [16] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (2)
item  [17] = [ "Nothing", 1, 0, "" ];
item  [18] = [ "Marrentill", 1, 1, "Herb" ];
item  [19] = [ "Coins", 1, 12, "" ];  //  (102)
item  [20] = [ "Coins", 1, 2, "" ];  //  (104)
item  [21] = [ "Kwuarm", 1, 1, "Herb" ];
item  [22] = [ "Bronze Short Sword", 1, 1, "" ];
item  [23] = [ "Coins", 1, 12, "" ];  //  (116)
item  [24] = [ "Nothing", 1, 0, "" ];
item  [25] = [ "Nothing", 1, 0, "" ];
item  [26] = [ "Coins", 1, 4, "" ];  //  (120)
item  [27] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [28] = [ "Nothing", 1, 0, "" ];
item  [29] = [ "Nothing", 1, 0, "" ];
item  [30] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (6)
item  [31] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (8)
item  [32] = [ "Coins", 1, 16, "" ];  //  (136)
item  [33] = [ "Coins", 1, 2, "" ];  //  (138)
item  [34] = [ "Coins", 1, 12, "" ];  //  (150)
item  [35] = [ "Nothing", 1, 0, "" ];
item  [36] = [ "Iron dagger", 1, 1, "" ];
item  [37] = [ "Tarromin", 1, 1, "Herb" ];
item  [38] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [39] = [ "Earth-rune", 1, 2, "Rune" ];  //  (4)
item  [40] = [ "Harralander", 1, 1, "Herb" ];
item  [41] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (10)
item  [42] = [ "Bronze Short Sword", 1, 1, "" ];
item  [43] = [ "Coins", 1, 33, "" ];  //  (183)
item  [44] = [ "Coins", 1, 4, "" ];  //  (187)
item  [45] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (12)
item  [46] = [ "Coins", 1, 33, "" ];  //  (220)
item  [47] = [ "Nothing", 1, 0, "" ];
item  [48] = [ "Bronze Arrows", 1, 5, "Arrows" ];  //  (17)
item  [49] = [ "Coins", 1, 25, "" ];  //  (245)
item  [50] = [ "Tarromin", 1, 1, "Herb" ];
item  [51] = [ "Marrentill", 1, 1, "Herb" ];
item  [52] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [53] = [ "Nothing", 1, 0, "" ];
item  [54] = [ "Coins", 1, 12, "" ];  //  (257)
item  [55] = [ "Earth-rune", 1, 2, "Rune" ];  //  (6)
item  [56] = [ "Coins", 1, 12, "" ];  //  (269)
item  [57] = [ "Nothing", 1, 0, "" ];
item  [58] = [ "Bronze Arrows", 1, 5, "Arrows" ];  //  (22)
item  [59] = [ "Marrentill", 1, 1, "Herb" ];
item  [60] = [ "Coins", 1, 12, "" ];  //  (281)
item  [61] = [ "Coins", 1, 12, "" ];  //  (293)
item  [62] = [ "Avantoe", 1, 1, "Herb" ];
item  [63] = [ "Coins", 1, 25, "" ];  //  (318)
item  [64] = [ "Marrentill", 1, 1, "Herb" ];
item  [65] = [ "Nothing", 1, 0, "" ];
item  [66] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (24)
item  [67] = [ "Coins", 1, 2, "" ];  //  (320)
item  [68] = [ "Coins", 1, 4, "" ];  //  (324)
item  [69] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (26)
item  [70] = [ "Coins", 1, 2, "" ];  //  (326)
item  [71] = [ "Nothing", 1, 0, "" ];
item  [72] = [ "Coins", 1, 16, "" ];  //  (342)
item  [73] = [ "Coins", 1, 2, "" ];  //  (344)
item  [74] = [ "Coins", 1, 2, "" ];  //  (346)
item  [75] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [76] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (28)
item  [77] = [ "Coins", 1, 2, "" ];  //  (348)
item  [78] = [ "Dwarf Weed", 1, 1, "Herb" ];
item  [79] = [ "Coins", 1, 33, "" ];  //  (381)
item  [80] = [ "Nothing", 1, 0, "" ];
item  [81] = [ "Coins", 1, 2, "" ];  //  (383)
item  [82] = [ "Bronze Short Sword", 1, 1, "" ];
item  [83] = [ "Coins", 1, 2, "" ];  //  (385)
item  [84] = [ "Irit Leaf", 1, 1, "Herb" ];
item  [85] = [ "Ranarr Weed", 1, 1, "Herb" ];
item  [86] = [ "Nothing", 1, 0, "" ];
item  [87] = [ "Earth-rune", 1, 2, "Rune" ];  //  (8)
item  [88] = [ "Coins", 1, 2, "" ];  //  (387)
item  [89] = [ "Guam Leaf", 1, 1, "Herb" ];
item  [90] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (4)
item  [91] = [ "grain", 1, 1, "" ];
item  [92] = [ "Iron dagger", 1, 1, "" ];
item  [93] = [ "Coins", 1, 4, "" ];  //  (391)
item  [94] = [ "Fire-rune", 1, 1, "Rune" ];  //  (1)
item  [95] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (30)
item  [96] = [ "Coins", 1, 12, "" ];  //  (403)
item  [97] = [ "Coins", 1, 33, "" ];  //  (436)
item  [98] = [ "Coins", 1, 2, "" ];  //  (438)
item  [99] = [ "Nothing", 1, 0, "" ];
item [100] = [ "Guam Leaf", 1, 1, "Herb" ];
item [101] = [ "Irit Leaf", 1, 1, "Herb" ];
item [102] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [103] = [ "Harralander", 1, 1, "Herb" ];
item [104] = [ "Coins", 1, 2, "" ];  //  (440)
item [105] = [ "Coins", 1, 25, "" ];  //  (465)
item [106] = [ "Coins", 1, 33, "" ];  //  (498)
item [107] = [ "Coins", 1, 12, "" ];  //  (510)
item [108] = [ "Coins", 1, 12, "" ];  //  (522)
item [109] = [ "Cadantine", 1, 1, "Herb" ];
item [110] = [ "Coins", 1, 2, "" ];  //  (524)
item [111] = [ "Guam Leaf", 1, 1, "Herb" ];
item [112] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (32)
item [113] = [ "Coins", 1, 12, "" ];  //  (536)
item [114] = [ "Coins", 1, 4, "" ];  //  (540)
item [115] = [ "Bronze Arrows", 1, 5, "Arrows" ];  //  (37)
item [116] = [ "Coins", 1, 2, "" ];  //  (542)
item [117] = [ "Coins", 1, 33, "" ];  //  (575)
item [118] = [ "Coins", 1, 12, "" ];  //  (587)
item [119] = [ "Coins", 1, 25, "" ];  //  (612)
item [120] = [ "Nothing", 1, 0, "" ];
item [121] = [ "Guam Leaf", 1, 1, "Herb" ];
item [122] = [ "Marrentill", 1, 1, "Herb" ];
item [123] = [ "Coins", 1, 25, "" ];  //  (637)
item [124] = [ "Coins", 1, 12, "" ];  //  (649)
item [125] = [ "Nothing", 1, 0, "" ];
item [126] = [ "Nothing", 1, 0, "" ];
item [127] = [ "Air-rune", 1, 8, "Rune" ];  //  (16)
item [128] = [ "Nothing", 1, 0, "" ];
item [129] = [ "Nature-rune", 1, 2, "Rune" ];  //  (2)
item [130] = [ "Marrentill", 1, 1, "Herb" ];
item [131] = [ "Nothing", 1, 0, "" ];
item [132] = [ "Coins", 1, 2, "" ];  //  (651)
item [133] = [ "Nothing", 1, 0, "" ];
item [134] = [ "Coins", 1, 2, "" ];  //  (653)
item [135] = [ "Coins", 1, 12, "" ];  //  (665)
item [136] = [ "Coins", 1, 2, "" ];  //  (667)
item [137] = [ "Nothing", 1, 0, "" ];
item [138] = [ "Coins", 1, 12, "" ];  //  (679)
item [139] = [ "Nature-rune", 1, 2, "Rune" ];  //  (4)
item [140] = [ "Coins", 1, 4, "" ];  //  (683)
item [141] = [ "Iron dagger", 1, 1, "" ];
item [142] = [ "Coins", 1, 2, "" ];  //  (685)
item [143] = [ "Coins", 1, 2, "" ];  //  (687)
item [144] = [ "Tarromin", 1, 1, "Herb" ];
item [145] = [ "Coins", 1, 4, "" ];  //  (691)
item [146] = [ "Nothing", 1, 0, "" ];
item [147] = [ "Coins", 1, 2, "" ];  //  (693)
item [148] = [ "Coins", 1, 33, "" ];  //  (726)
item [149] = [ "Iron dagger", 1, 1, "" ];
item [150] = [ "Coins", 1, 25, "" ];  //  (751)
item [151] = [ "Coins", 1, 25, "" ];  //  (776)
item [152] = [ "Coins", 1, 12, "" ];  //  (788)
item [153] = [ "Coins", 1, 12, "" ];  //  (800)
item [154] = [ "Air-rune", 1, 8, "Rune" ];  //  (24)
item [155] = [ "Bronze Arrows", 1, 5, "Arrows" ];  //  (42)
item [156] = [ "Coins", 1, 33, "" ];  //  (833)
item [157] = [ "Bronze Arrows", 1, 5, "Arrows" ];  //  (47)
item [158] = [ "Coins", 1, 2, "" ];  //  (835)
item [159] = [ "Nothing", 1, 0, "" ];
item [160] = [ "Coins", 1, 25, "" ];  //  (860)
item [161] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [162] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (49)
item [163] = [ "Coins", 1, 2, "" ];  //  (862)
item [164] = [ "Coins", 1, 33, "" ];  //  (895)
item [165] = [ "Iron dagger", 1, 1, "" ];
item [166] = [ "Coins", 1, 12, "" ];  //  (907)
item [167] = [ "Nothing", 1, 0, "" ];
item [168] = [ "Guam Leaf", 1, 1, "Herb" ];
item [169] = [ "Coins", 1, 12, "" ];  //  (919)
item [170] = [ "Coins", 1, 2, "" ];  //  (921)
item [171] = [ "Nothing", 1, 0, "" ];
item [172] = [ "Nothing", 1, 0, "" ];
item [173] = [ "Ranarr Weed", 1, 1, "Herb" ];

runs [0] = [ 173, 174 ];  // kills 174 drops 174

// run 2

item [174] = [ "Coins", 1, 33, "" ];  //  (33)
item [175] = [ "Coins", 1, 16, "" ];  //  (49)
item [176] = [ "Nothing", 1, 0, "" ];
item [177] = [ "Coins", 1, 4, "" ];  //  (53)
item [178] = [ "Tarromin", 1, 1, "Herb" ];
item [179] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (2)
item [180] = [ "Earth-rune", 1, 2, "Rune" ];  //  (2)
item [181] = [ "Coins", 1, 4, "" ];  //  (57)
item [182] = [ "Bronze Short Sword", 1, 1, "" ];
item [183] = [ "Coins", 1, 12, "" ];  //  (69)
item [184] = [ "Coins", 1, 4, "" ];  //  (73)
item [185] = [ "Coins", 1, 2, "" ];  //  (75)
item [186] = [ "Dwarf Weed", 1, 1, "Herb" ];
item [187] = [ "Coins", 1, 16, "" ];  //  (91)
item [188] = [ "Bronze Arrows", 1, 5, "Arrows" ];  //  (7)
item [189] = [ "Bronze Short Sword", 1, 1, "" ];
item [190] = [ "Coins", 1, 2, "" ];  //  (93)
item [191] = [ "Nothing", 1, 0, "" ];
item [192] = [ "Coins", 1, 2, "" ];  //  (95)
item [193] = [ "Coins", 1, 33, "" ];  //  (128)
item [194] = [ "Coins", 1, 16, "" ];  //  (144)
item [195] = [ "Coins", 1, 25, "" ];  //  (169)
item [196] = [ "Bronze Short Sword", 1, 1, "" ];
item [197] = [ "Nothing", 1, 0, "" ];
item [198] = [ "Coins", 1, 4, "" ];  //  (173)
item [199] = [ "Bronze Long Sword", 1, 1, "" ];
item [200] = [ "Coins", 1, 33, "" ];  //  (206)
item [201] = [ "Coins", 1, 12, "" ];  //  (218)
item [202] = [ "Nothing", 1, 0, "" ];
item [203] = [ "Coins", 1, 2, "" ];  //  (220)
item [204] = [ "Coins", 1, 2, "" ];  //  (222)
item [205] = [ "Coins", 1, 2, "" ];  //  (224)
item [206] = [ "Iron dagger", 1, 1, "" ];
item [207] = [ "Coins", 1, 12, "" ];  //  (236)
item [208] = [ "Tarromin", 1, 1, "Herb" ];
item [209] = [ "Coins", 1, 2, "" ];  //  (238)
item [210] = [ "Iron dagger", 1, 1, "" ];
item [211] = [ "Iron dagger", 1, 1, "" ];
item [212] = [ "Coins", 1, 12, "" ];  //  (250)
item [213] = [ "Dwarf Weed", 1, 1, "Herb" ];
item [214] = [ "Coins", 1, 4, "" ];  //  (254)
item [215] = [ "Iron dagger", 1, 1, "" ];
item [216] = [ "Marrentill", 1, 1, "Herb" ];
item [217] = [ "Coins", 1, 4, "" ];  //  (258)
item [218] = [ "Bronze Arrows", 1, 5, "Arrows" ];  //  (12)
item [219] = [ "Bronze Short Sword", 1, 1, "" ];
item [220] = [ "Bronze Short Sword", 1, 1, "" ];
item [221] = [ "Iron dagger", 1, 1, "" ];
item [222] = [ "Coins", 1, 2, "" ];  //  (260)
item [223] = [ "Coins", 1, 12, "" ];  //  (272)
item [224] = [ "grain", 1, 1, "" ];
item [225] = [ "Bronze Arrows", 1, 5, "Arrows" ];  //  (17)
item [226] = [ "Coins", 1, 12, "" ];  //  (284)
item [227] = [ "Bronze Short Sword", 1, 1, "" ];
item [228] = [ "Coins", 1, 2, "" ];  //  (286)
item [229] = [ "Harralander", 1, 1, "Herb" ];
item [230] = [ "Bronze Arrows", 1, 5, "Arrows" ];  //  (22)
item [231] = [ "Coins", 1, 12, "" ];  //  (298)
item [232] = [ "Coins", 1, 12, "" ];  //  (310)
item [233] = [ "Nothing", 1, 0, "" ];
item [234] = [ "Bronze Short Sword", 1, 1, "" ];
item [235] = [ "Coins", 1, 12, "" ];  //  (322)
item [236] = [ "Coins", 1, 33, "" ];  //  (355)
item [237] = [ "grain", 1, 1, "" ];
item [238] = [ "Coins", 1, 4, "" ];  //  (359)
item [239] = [ "Guam Leaf", 1, 1, "Herb" ];
item [240] = [ "Bronze Short Sword", 1, 1, "" ];
item [241] = [ "Coins", 1, 2, "" ];  //  (361)
item [242] = [ "Nothing", 1, 0, "" ];
item [243] = [ "Iron dagger", 1, 1, "" ];
item [244] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (24)
item [245] = [ "Marrentill", 1, 1, "Herb" ];
item [246] = [ "Bronze Short Sword", 1, 1, "" ];
item [247] = [ "Coins", 1, 2, "" ];  //  (363)
item [248] = [ "Coins", 1, 25, "" ];  //  (388)
item [249] = [ "Coins", 1, 12, "" ];  //  (400)
item [250] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (26)
item [251] = [ "Coins", 1, 12, "" ];  //  (412)
item [252] = [ "Nothing", 1, 0, "" ];
item [253] = [ "Harralander", 1, 1, "Herb" ];
item [254] = [ "Coins", 1, 48, "" ];  //  (460)
item [255] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [256] = [ "Marrentill", 1, 1, "Herb" ];
item [257] = [ "Bronze Arrows", 1, 5, "Arrows" ];  //  (31)
item [258] = [ "Nothing", 1, 0, "" ];
item [259] = [ "Nothing", 1, 0, "" ];
item [260] = [ "Marrentill", 1, 1, "Herb" ];
item [261] = [ "Avantoe", 1, 1, "Herb" ];
item [262] = [ "Earth-rune", 1, 2, "Rune" ];  //  (4)
item [263] = [ "grain", 1, 1, "" ];
item [264] = [ "Coins", 1, 12, "" ];  //  (472)
item [265] = [ "Coins", 1, 2, "" ];  //  (474)
item [266] = [ "Coins", 1, 2, "" ];  //  (476)
item [267] = [ "Coins", 1, 12, "" ];  //  (488)
item [268] = [ "Marrentill", 1, 1, "Herb" ];
item [269] = [ "Nothing", 1, 0, "" ];
item [270] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (33)
item [271] = [ "Earth-rune", 1, 2, "Rune" ];  //  (6)
item [272] = [ "Marrentill", 1, 1, "Herb" ];
item [273] = [ "Nothing", 1, 0, "" ];
item [274] = [ "Coins", 1, 12, "" ];  //  (500)
item [275] = [ "Guam Leaf", 1, 1, "Herb" ];
item [276] = [ "Coins", 1, 2, "" ];  //  (502)
item [277] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (35)
item [278] = [ "Coins", 1, 2, "" ];  //  (504)
item [279] = [ "Coins", 1, 12, "" ];  //  (516)
item [280] = [ "Coins", 1, 12, "" ];  //  (528)
item [281] = [ "Avantoe", 1, 1, "Herb" ];
item [282] = [ "Coins", 1, 4, "" ];  //  (532)
item [283] = [ "Coins", 1, 12, "" ];  //  (544)
item [284] = [ "Guam Leaf", 1, 1, "Herb" ];
item [285] = [ "Coins", 1, 12, "" ];  //  (556)
item [286] = [ "Coins", 1, 2, "" ];  //  (558)
item [287] = [ "Nothing", 1, 0, "" ];
item [288] = [ "Coins", 1, 2, "" ];  //  (560)
item [289] = [ "Coins", 1, 2, "" ];  //  (562)
item [290] = [ "Coins", 1, 16, "" ];  //  (578)
item [291] = [ "Coins", 1, 12, "" ];  //  (590)
item [292] = [ "Coins", 1, 2, "" ];  //  (592)
item [293] = [ "Bronze Short Sword", 1, 1, "" ];
item [294] = [ "Coins", 1, 4, "" ];  //  (596)
item [295] = [ "Coins", 1, 4, "" ];  //  (600)
item [296] = [ "uncut diamond", 1, 1, "Gem" ];
item [297] = [ "Guam Leaf", 1, 1, "Herb" ];
item [298] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (37)
item [299] = [ "Irit Leaf", 1, 1, "Herb" ];
item [300] = [ "Iron dagger", 1, 1, "" ];
item [301] = [ "Coins", 1, 16, "" ];  //  (616)
item [302] = [ "Guam Leaf", 1, 1, "Herb" ];
item [303] = [ "Coins", 1, 2, "" ];  //  (618)
item [304] = [ "Coins", 1, 2, "" ];  //  (620)
item [305] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (39)
item [306] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (41)
item [307] = [ "Guam Leaf", 1, 1, "Herb" ];
item [308] = [ "Coins", 1, 2, "" ];  //  (622)
item [309] = [ "Bronze Short Sword", 1, 1, "" ];
item [310] = [ "Harralander", 1, 1, "Herb" ];
item [311] = [ "Coins", 1, 12, "" ];  //  (634)
item [312] = [ "Coins", 1, 4, "" ];  //  (638)
item [313] = [ "Marrentill", 1, 1, "Herb" ];
item [314] = [ "Nothing", 1, 0, "" ];
item [315] = [ "Marrentill", 1, 1, "Herb" ];
item [316] = [ "Nothing", 1, 0, "" ];
item [317] = [ "iron ore", 1, 1, "" ];
item [318] = [ "Coins", 1, 12, "" ];  //  (650)
item [319] = [ "Nothing", 1, 0, "" ];
item [320] = [ "Tarromin", 1, 1, "Herb" ];
item [321] = [ "Coins", 1, 4, "" ];  //  (654)
item [322] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [323] = [ "Air-rune", 1, 8, "Rune" ];  //  (8)
item [324] = [ "Coins", 1, 2, "" ];  //  (656)
item [325] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (2)
item [326] = [ "Coins", 1, 12, "" ];  //  (668)
item [327] = [ "Nothing", 1, 0, "" ];
item [328] = [ "Coins", 1, 2, "" ];  //  (670)
item [329] = [ "Iron dagger", 1, 1, "" ];
item [330] = [ "Coins", 1, 25, "" ];  //  (695)
item [331] = [ "Tarromin", 1, 1, "Herb" ];
item [332] = [ "Nothing", 1, 0, "" ];
item [333] = [ "Nothing", 1, 0, "" ];
item [334] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (43)
item [335] = [ "Coins", 1, 16, "" ];  //  (711)
item [336] = [ "Coins", 1, 2, "" ];  //  (713)
item [337] = [ "Coins", 1, 33, "" ];  //  (746)
item [338] = [ "Coins", 1, 4, "" ];  //  (750)
item [339] = [ "Iron dagger", 1, 1, "" ];
item [340] = [ "Marrentill", 1, 1, "Herb" ];
item [341] = [ "Avantoe", 1, 1, "Herb" ];
item [342] = [ "Coins", 1, 12, "" ];  //  (762)
item [343] = [ "Nothing", 1, 0, "" ];
item [344] = [ "Coins", 1, 25, "" ];  //  (787)
item [345] = [ "Coins", 1, 2, "" ];  //  (789)
item [346] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (45)
item [347] = [ "Coins", 1, 25, "" ];  //  (814)
item [348] = [ "Coins", 1, 12, "" ];  //  (826)
item [349] = [ "Chaos-rune", 1, 2, "Rune" ];  //  (4)
item [350] = [ "Marrentill", 1, 1, "Herb" ];
item [351] = [ "Iron dagger", 1, 1, "" ];
item [352] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (47)
item [353] = [ "Bronze Short Sword", 1, 1, "" ];
item [354] = [ "Irit Leaf", 1, 1, "Herb" ];
item [355] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [356] = [ "Marrentill", 1, 1, "Herb" ];
item [357] = [ "Coins", 1, 2, "" ];  //  (828)
item [358] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (49)
item [359] = [ "Air-rune", 1, 8, "Rune" ];  //  (16)
item [360] = [ "Bronze Short Sword", 1, 1, "" ];
item [361] = [ "Coins", 1, 12, "" ];  //  (840)
item [362] = [ "Iron dagger", 1, 1, "" ];
item [363] = [ "Ranarr Weed", 1, 1, "Herb" ];
item [364] = [ "Iron dagger", 1, 1, "" ];
item [365] = [ "Iron dagger", 1, 1, "" ];
item [366] = [ "Nothing", 1, 0, "" ];
item [367] = [ "Coins", 1, 12, "" ];  //  (852)
item [368] = [ "Nature-rune", 1, 2, "Rune" ];  //  (2)
item [369] = [ "Coins", 1, 12, "" ];  //  (864)
item [370] = [ "Nothing", 1, 0, "" ];
item [371] = [ "Bronze Arrows", 1, 5, "Arrows" ];  //  (54)
item [372] = [ "Nothing", 1, 0, "" ];
item [373] = [ "Nothing", 1, 0, "" ];
item [374] = [ "Nothing", 1, 0, "" ];
item [375] = [ "Coins", 1, 12, "" ];  //  (876)
item [376] = [ "Coins", 1, 33, "" ];  //  (909)
item [377] = [ "Nothing", 1, 0, "" ];
item [378] = [ "Coins", 1, 2, "" ];  //  (911)
item [379] = [ "Coins", 1, 2, "" ];  //  (913)
item [380] = [ "Coins", 1, 12, "" ];  //  (925)
item [381] = [ "Coins", 1, 4, "" ];  //  (929)
item [382] = [ "Bronze Short Sword", 1, 1, "" ];
item [383] = [ "Nothing", 1, 0, "" ];
item [384] = [ "Guam Leaf", 1, 1, "Herb" ];
item [385] = [ "Coins", 1, 33, "" ];  //  (962)
item [386] = [ "Nothing", 1, 0, "" ];
item [387] = [ "Coins", 1, 12, "" ];  //  (974)
item [388] = [ "Bronze Arrows", 1, 5, "Arrows" ];  //  (59)
item [389] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  (61)
item [390] = [ "Coins", 1, 12, "" ];  //  (986)
item [391] = [ "Irit Leaf", 1, 1, "Herb" ];

runs [1] = [ 391, 392 ];  // kills 218 drops 218

// runs [2] = [ x, y ];  // kills ? ( y - 392 ), drops ? ( x - 391 )

/*
item [000] = [ "Coins", 1, 2, "" ];  //  ()
item [000] = [ "Coins", 1, 4, "" ];  //  ()
item [000] = [ "Coins", 1, 12, "" ];  //  ()
item [000] = [ "Coins", 1, 16, "" ];  //  ()
item [000] = [ "Coins", 1, 25, "" ];  //  ()
item [000] = [ "Coins", 1, 33, "" ];  //  ()
item [000] = [ "Coins", 1, 48, "" ];  //  ()

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

item [000] = [ "Air-rune", 1, 8, "Rune" ];  //  ()
item [000] = [ "Earth-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Fire-rune", 1, 1, "Rune" ];  //  ()
item [000] = [ "Chaos-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Nature-rune", 1, 2, "Rune" ];  //  ()

item [000] = [ "uncut sapphire", 1, 1, "Gem" ];
item [000] = [ "uncut emerald", 1, 1, "Gem" ];
item [000] = [ "uncut ruby", 1, 1, "Gem" ];
item [000] = [ "uncut diamond", 1, 1, "Gem" ];

item [000] = [ "Half of a key (loop)", 1, 1, "" ];
item [000] = [ "Half of a key (teeth)", 1, 1, "" ];

item [000] = [ "grain", 1, 1, "" ];
item [000] = [ "iron ore", 1, 1, "" ];

item [000] = [ "Bronze Arrows", 1, 2, "Arrows" ];  //  ()
item [000] = [ "Bronze Arrows", 1, 5, "Arrows" ];  //  ()
item [000] = [ "Bronze Short Sword", 1, 1, "" ];
item [000] = [ "Bronze Long Sword", 1, 1, "" ];
item [000] = [ "Iron dagger", 1, 1, "" ];

item [000] = [ "Medium Bronze Helmet", 1, 1, "" ];
item [000] = [ "Bronze Chain Mail Body", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];
*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "skeleton";         // monster's name
var mcbl = 25;                  // monster's combat level
var mindex = 62;                // index into monster data base
var mrpt = 2;                   // number of non-breaking space to add after index name