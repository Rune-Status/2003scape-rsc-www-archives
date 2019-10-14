/*

 0 item name
 1 number of items dropped
 2 quantity
 3 extra info (type, Herb, Rune, Gem)
 
 run
 
 0 last drop of run (x, index of last kill of run - index of the previous last kill of run)
 1 kills in run (y, drop number of x - drop number of previous x)

*/

var item = new Array();
var runs = new Array();

var cwcb = 6;  // column width of checkboxes

var notes = "";

// run 1

item   [0] = [ "Fire-rune", 1, 7, "Rune" ];  // 1
item   [1] = [ "Chaos-rune", 1, 3, "Rune" ];
item   [2] = [ "Coins", 1, 2, "" ];
item   [3] = [ "Nature-rune", 1, 3, "Rune" ];
item   [4] = [ "Nothing", 1, 0, "" ];
item   [5] = [ "Staff", 1, 1, "" ];
item   [6] = [ "Earth-rune", 1, 7, "Rune" ];
item   [7] = [ "Mind-rune", 1, 7, "Rune" ];
item   [8] = [ "Mind-rune", 1, 7, "Rune" ];
item   [9] = [ "Nothing", 1, 0, "" ];  // 10
item  [10] = [ "Earth-rune", 1, 12, "Rune" ];
item  [11] = [ "Nothing", 1, 0, "" ];
item  [12] = [ "Staff", 1, 1, "" ];
item  [13] = [ "Coins", 1, 1, "" ];
item  [14] = [ "Blood-rune", 1, 1, "Rune" ];
item  [15] = [ "Coins", 1, 1, "" ];
item  [16] = [ "Coins", 1, 30, "" ];
item  [17] = [ "Nature-rune", 1, 3, "Rune" ];
item  [18] = [ "Coins", 1, 4, "" ];
item  [19] = [ "wizardshat (Black)", 1, 1, "" ];  // 20
item  [20] = [ "Nothing", 1, 0, "" ];
item  [21] = [ "Water-rune", 1, 7, "Rune" ];
item  [22] = [ "Nothing", 1, 0, "" ];
item  [23] = [ "Earth-rune", 1, 24, "Rune" ];
item  [24] = [ "Coins", 1, 2, "" ];
item  [25] = [ "Nothing", 1, 0, "" ];
item  [26] = [ "Air-rune", 1, 12, "Rune" ];
item  [27] = [ "Black robe (Wizard's top)", 1, 1, "" ];
item  [28] = [ "Coins", 1, 2, "" ];
item  [29] = [ "Coins", 1, 29, "" ];  // 30
item  [30] = [ "Black robe (Wizard's top)", 1, 1, "" ];
item  [31] = [ "Coins", 1, 29, "" ];
item  [32] = [ "Air-rune", 1, 7, "Rune" ];
item  [33] = [ "wizardshat (Black)", 1, 1, "" ];
item  [34] = [ "Nature-rune", 1, 3, "Rune" ];
item  [35] = [ "wizardshat (Black)", 1, 1, "" ];
item  [36] = [ "Air-rune", 1, 7, "Rune" ];
item  [37] = [ "Nature-rune", 1, 3, "Rune" ];
item  [38] = [ "Staff", 1, 1, "" ];
item  [39] = [ "Nothing", 1, 0, "" ];  // 40
item  [40] = [ "Mind-rune", 1, 7, "Rune" ];
item  [41] = [ "Coins", 1, 1, "" ];
item  [42] = [ "Coins", 1, 1, "" ];
item  [43] = [ "wizardshat (Black)", 1, 1, "" ];
item  [44] = [ "Staff", 1, 1, "" ];
item  [45] = [ "Nothing", 1, 0, "" ];
item  [46] = [ "Coins", 1, 2, "" ];
item  [47] = [ "Fire-rune", 1, 7, "Rune" ];
item  [48] = [ "Air-rune", 1, 12, "Rune" ];
item  [49] = [ "Staff", 1, 1, "" ];  //  50
item  [50] = [ "Coins", 1, 4, "" ];
item  [51] = [ "Body-rune", 1, 7, "Rune" ];
item  [52] = [ "Earth-rune", 1, 24, "Rune" ];
item  [53] = [ "Coins", 1, 4, "" ];
item  [54] = [ "Law-rune", 1, 2, "Rune" ];
item  [55] = [ "Coins", 1, 2, "" ];
item  [56] = [ "Coins", 1, 2, "" ];
item  [57] = [ "Nature-rune", 1, 3, "Rune" ];
item  [58] = [ "Fire-rune", 1, 12, "Rune" ];
item  [59] = [ "Nature-rune", 1, 3, "Rune" ];  //  60
item  [60] = [ "Nothing", 1, 0, "" ];
item  [61] = [ "Earth-rune", 1, 12, "Rune" ];
item  [62] = [ "Blood-rune", 1, 1, "Rune" ];
item  [63] = [ "Coins", 1, 2, "" ];
item  [64] = [ "Coins", 1, 30, "" ];
item  [65] = [ "Coins", 1, 4, "" ];
item  [66] = [ "Coins", 1, 1, "" ];
item  [67] = [ "Coins", 1, 2, "" ];
item  [68] = [ "Mind-rune", 1, 7, "Rune" ];
item  [69] = [ "Air-rune", 1, 7, "Rune" ];  //  70
item  [70] = [ "Coins", 1, 2, "" ];
item  [71] = [ "Chaos-rune", 1, 3, "Rune" ];
item  [72] = [ "Nothing", 1, 0, "" ];
item  [73] = [ "Staff", 1, 1, "" ];
item  [74] = [ "Coins", 1, 4, "" ];
item  [75] = [ "Water-rune", 1, 12, "Rune" ];
item  [76] = [ "Chaos-rune", 1, 3, "Rune" ];
item  [77] = [ "Coins", 1, 1, "" ];
item  [78] = [ "Earth-rune", 1, 7, "Rune" ];
item  [79] = [ "Nothing", 1, 0, "" ];  //  80
item  [80] = [ "Law-rune", 1, 2, "Rune" ];
item  [81] = [ "Law-rune", 1, 2, "Rune" ];
item  [82] = [ "Fire-rune", 1, 12, "Rune" ];
item  [83] = [ "Black robe (Wizard's top)", 1, 1, "" ];
item  [84] = [ "Coins", 1, 4, "" ];
item  [85] = [ "Body-rune", 1, 7, "Rune" ];
item  [86] = [ "Body-rune", 1, 7, "Rune" ];
item  [87] = [ "Coins", 1, 1, "" ];
item  [88] = [ "Water-rune", 1, 12, "Rune" ];
item  [89] = [ "Staff", 1, 1, "" ];  //  90
item  [90] = [ "Earth-rune", 1, 7, "Rune" ];
item  [91] = [ "Mind-rune", 1, 12, "Rune" ];
item  [92] = [ "Staff", 1, 1, "" ];
item  [93] = [ "Coins", 1, 2, "" ];
item  [94] = [ "Air-rune", 1, 7, "Rune" ];
item  [95] = [ "Coins", 1, 1, "" ];
item  [96] = [ "Earth-rune", 1, 7, "Rune" ];
item  [97] = [ "Nothing", 1, 0, "" ];
item  [98] = [ "Staff", 1, 1, "" ];
item  [99] = [ "Coins", 1, 29, "" ];  //  100
item [100] = [ "Coins", 1, 1, "" ];
item [101] = [ "Staff", 1, 1, "" ];
item [102] = [ "Air-rune", 1, 12, "Rune" ];
item [103] = [ "Coins", 1, 4, "" ];
item [104] = [ "Earth-rune", 1, 7, "Rune" ];
item [105] = [ "Staff", 1, 1, "" ];
item [106] = [ "Fire-rune", 1, 7, "Rune" ];
item [107] = [ "Coins", 1, 4, "" ];
item [108] = [ "Earth-rune", 1, 7, "Rune" ];
item [109] = [ "Staff", 1, 1, "" ];  //  110
item [110] = [ "Mind-rune", 1, 7, "Rune" ];
item [111] = [ "Coins", 1, 1, "" ];
item [112] = [ "Coins", 1, 4, "" ];
item [113] = [ "Coins", 1, 2, "" ];
item [114] = [ "wizardshat (Black)", 1, 1, "" ];
item [115] = [ "Nothing", 1, 0, "" ];
item [116] = [ "Body-rune", 1, 12, "Rune" ];
item [117] = [ "Chaos-rune", 1, 3, "Rune" ];
item [118] = [ "Cosmic-rune", 1, 1, "Rune" ];
item [119] = [ "Water-rune", 1, 7, "Rune" ];  //  120
item [120] = [ "Coins", 1, 1, "" ];
item [121] = [ "Coins", 1, 2, "" ];
item [122] = [ "Air-rune", 1, 12, "Rune" ];
item [123] = [ "Coins", 1, 30, "" ];
item [124] = [ "Coins", 1, 1, "" ];
item [125] = [ "Chaos-rune", 1, 3, "Rune" ];
item [126] = [ "wizardshat (Black)", 1, 1, "" ];
item [127] = [ "Body-rune", 1, 12, "Rune" ];
item [128] = [ "Coins", 1, 2, "" ];
item [129] = [ "Coins", 1, 29, "" ];  //  130
item [130] = [ "Coins", 1, 1, "" ];
item [131] = [ "Chaos-rune", 1, 3, "Rune" ];
item [132] = [ "Coins", 1, 29, "" ];
item [133] = [ "Body-rune", 1, 12, "Rune" ];
item [134] = [ "Coins", 1, 1, "" ];
item [135] = [ "Coins", 1, 2, "" ];
item [136] = [ "Coins", 1, 1, "" ];
item [137] = [ "Coins", 1, 1, "" ];
item [138] = [ "Coins", 1, 2, "" ];
item [139] = [ "Chaos-rune", 1, 3, "Rune" ];  //  140
item [140] = [ "Mind-rune", 1, 12, "Rune" ];
item [141] = [ "Chaos-rune", 1, 3, "Rune" ];
item [142] = [ "Coins", 1, 2, "" ];
item [143] = [ "Mind-rune", 1, 7, "Rune" ];
item [144] = [ "wizardshat (Black)", 1, 1, "" ];
item [145] = [ "Nothing", 1, 0, "" ];
item [146] = [ "wizardshat (Black)", 1, 1, "" ];
item [147] = [ "Coins", 1, 1, "" ];
item [148] = [ "Staff", 1, 1, "" ];
item [149] = [ "Coins", 1, 2, "" ];  //  150
item [150] = [ "Nature-rune", 1, 3, "Rune" ];
item [151] = [ "Earth-rune", 1, 24, "Rune" ];
item [152] = [ "Water-rune", 1, 7, "Rune" ];
item [153] = [ "Coins", 1, 2, "" ];
item [154] = [ "Cosmic-rune", 1, 1, "Rune" ];
item [155] = [ "Coins", 1, 2, "" ];
item [156] = [ "Coins", 1, 1, "" ];
item [157] = [ "Coins", 1, 2, "" ];
item [158] = [ "Coins", 1, 2, "" ];
item [159] = [ "Coins", 1, 29, "" ];  //  160
item [160] = [ "Coins", 1, 4, "" ];
item [161] = [ "Coins", 1, 2, "" ];
item [162] = [ "Staff", 1, 1, "" ];
item [163] = [ "Earth-rune", 1, 7, "Rune" ];
item [164] = [ "Nature-rune", 1, 3, "Rune" ];
item [165] = [ "Staff", 1, 1, "" ];
item [166] = [ "Water-rune", 1, 12, "Rune" ];
item [167] = [ "Nothing", 1, 0, "" ];
item [168] = [ "Coins", 1, 4, "" ];
item [169] = [ "Air-rune", 1, 12, "Rune" ];  // 170
item [170] = [ "Nothing", 1, 0, "" ];
item [171] = [ "Nature-rune", 1, 3, "Rune" ];
item [172] = [ "Body-rune", 1, 7, "Rune" ];
item [173] = [ "Coins", 1, 2, "" ];
item [174] = [ "Air-rune", 1, 7, "Rune" ];
item [175] = [ "Nothing", 1, 0, "" ];
item [176] = [ "Body-rune", 1, 12, "Rune" ];
item [177] = [ "Chaos-rune", 1, 3, "Rune" ];
item [178] = [ "Coins", 1, 2, "" ];
item [179] = [ "Nothing", 1, 0, "" ];  //  180
item [180] = [ "Mind-rune", 1, 12, "Rune" ];
item [181] = [ "Black robe (Wizard's top)", 1, 1, "" ];
item [182] = [ "Nature-rune", 1, 3, "Rune" ];
item [183] = [ "Coins", 1, 2, "" ];
item [184] = [ "Mind-rune", 1, 7, "Rune" ];
item [185] = [ "Mind-rune", 1, 12, "Rune" ];
item [186] = [ "Earth-rune", 1, 7, "Rune" ];
item [187] = [ "Coins", 1, 1, "" ];
item [188] = [ "Staff", 1, 1, "" ];
item [189] = [ "Coins", 1, 1, "" ];  //  190
item [190] = [ "Coins", 1, 29, "" ];
item [191] = [ "wizardshat (Black)", 1, 1, "" ];
item [192] = [ "Coins", 1, 30, "" ];
item [193] = [ "Mind-rune", 1, 12, "Rune" ];
item [194] = [ "Fire-rune", 1, 7, "Rune" ];
item [195] = [ "Nature-rune", 1, 3, "Rune" ];
item [196] = [ "Nothing", 1, 0, "" ];
item [197] = [ "Nothing", 1, 0, "" ];
item [198] = [ "Coins", 1, 2, "" ];
item [199] = [ "Blood-rune", 1, 1, "Rune" ];  // 200
item [200] = [ "Coins", 1, 30, "" ];
item [201] = [ "Water-rune", 1, 7, "Rune" ];
item [202] = [ "Coins", 1, 1, "" ];
item [203] = [ "Coins", 1, 4, "" ];
item [204] = [ "Coins", 1, 2, "" ];
item [205] = [ "wizardshat (Black)", 1, 1, "" ];
item [206] = [ "Staff", 1, 1, "" ];
item [207] = [ "Nature-rune", 1, 3, "Rune" ];
item [208] = [ "Coins", 1, 2, "" ];
item [209] = [ "Coins", 1, 2, "" ];  //  210
item [210] = [ "Nothing", 1, 0, "" ];
item [211] = [ "Nature-rune", 1, 3, "Rune" ];
item [212] = [ "Coins", 1, 4, "" ];
item [213] = [ "Coins", 1, 2, "" ];
item [214] = [ "Mind-rune", 1, 7, "Rune" ];
item [215] = [ "Black robe (Wizard's top)", 1, 1, "" ];
item [216] = [ "Coins", 1, 1, "" ];
item [217] = [ "Blood-rune", 1, 1, "Rune" ];
item [218] = [ "Coins", 1, 2, "" ];
item [219] = [ "Coins", 1, 30, "" ];  //  220
item [220] = [ "Coins", 1, 1, "" ];
item [221] = [ "Coins", 1, 4, "" ];
item [222] = [ "Nothing", 1, 0, "" ];
item [223] = [ "Air-rune", 1, 7, "Rune" ];
item [224] = [ "Water-rune", 1, 7, "Rune" ];
item [225] = [ "Earth-rune", 1, 12, "Rune" ];
item [226] = [ "Coins", 1, 4, "" ];
item [227] = [ "Chaos-rune", 1, 3, "Rune" ];
item [228] = [ "Chaos-rune", 1, 3, "Rune" ];
item [229] = [ "Coins", 1, 1, "" ];  //  230
item [230] = [ "Nature-rune", 1, 3, "Rune" ];
item [231] = [ "Chaos-rune", 1, 3, "Rune" ];
item [232] = [ "Coins", 1, 1, "" ];
item [233] = [ "Fire-rune", 1, 7, "Rune" ];
item [234] = [ "Body-rune", 1, 7, "Rune" ];
item [235] = [ "Black robe (Wizard's top)", 1, 1, "" ];
item [236] = [ "Black robe (Wizard's top)", 1, 1, "" ];
item [237] = [ "Coins", 1, 2, "" ];
item [238] = [ "Coins", 1, 2, "" ];
item [239] = [ "Nothing", 1, 0, "" ];  //  240
item [240] = [ "Coins", 1, 29, "" ];
item [241] = [ "Coins", 1, 2, "" ];
item [242] = [ "Coins", 1, 2, "" ];
item [243] = [ "Coins", 1, 4, "" ];
item [244] = [ "Coins", 1, 2, "" ];
item [245] = [ "Chaos-rune", 1, 3, "Rune" ];
item [246] = [ "Nothing", 1, 0, "" ];
item [247] = [ "Black robe (Wizard's top)", 1, 1, "" ];
item [248] = [ "Blood-rune", 1, 1, "Rune" ];
item [249] = [ "Nature-rune", 1, 3, "Rune" ];  //  250
item [250] = [ "Earth-rune", 1, 7, "Rune" ];
item [251] = [ "Coins", 1, 4, "" ];
item [252] = [ "Air-rune", 1, 12, "Rune" ];
item [253] = [ "Coins", 1, 4, "" ];
item [254] = [ "Nothing", 1, 0, "" ];
item [255] = [ "Coins", 1, 4, "" ];
item [256] = [ "Earth-rune", 1, 24, "Rune" ];
item [257] = [ "Fire-rune", 1, 12, "Rune" ];
item [258] = [ "Nature-rune", 1, 3, "Rune" ];
item [259] = [ "Air-rune", 1, 7, "Rune" ];  //  260
item [260] = [ "Staff", 1, 1, "" ];
item [261] = [ "Coins", 1, 2, "" ];
item [262] = [ "Earth-rune", 1, 24, "Rune" ];
item [263] = [ "Nothing", 1, 0, "" ];
item [264] = [ "Water-rune", 1, 7, "Rune" ];
item [265] = [ "Water-rune", 1, 7, "Rune" ];
item [266] = [ "Air-rune", 1, 7, "Rune" ];
item [267] = [ "Staff", 1, 1, "" ];
item [268] = [ "Coins", 1, 1, "" ];
item [269] = [ "Chaos-rune", 1, 3, "Rune" ];  //  270
item [270] = [ "Mind-rune", 1, 7, "Rune" ];
item [271] = [ "Coins", 1, 1, "" ];
item [272] = [ "Water-rune", 1, 12, "Rune" ];
item [273] = [ "Nature-rune", 1, 3, "Rune" ];
item [274] = [ "Nature-rune", 1, 3, "Rune" ];
item [275] = [ "Coins", 1, 4, "" ];
item [276] = [ "Coins", 1, 1, "" ];
item [277] = [ "Nature-rune", 1, 3, "Rune" ];
item [278] = [ "Air-rune", 1, 7, "Rune" ];
item [279] = [ "wizardshat (Black)", 1, 1, "" ];  //  280
item [280] = [ "Fire-rune", 1, 7, "Rune" ];
item [281] = [ "Nothing", 1, 0, "" ];
item [282] = [ "Staff", 1, 1, "" ];
item [283] = [ "Earth-rune", 1, 24, "Rune" ];
item [284] = [ "Nothing", 1, 0, "" ];
item [285] = [ "Coins", 1, 4, "" ];
item [286] = [ "Coins", 1, 2, "" ];
item [287] = [ "Coins", 1, 2, "" ];
item [288] = [ "Chaos-rune", 1, 3, "Rune" ];
item [289] = [ "Black robe (Wizard's top)", 1, 1, "" ];  //  290
item [290] = [ "Coins", 1, 2, "" ];
item [291] = [ "Nothing", 1, 0, "" ];
item [292] = [ "Blood-rune", 1, 1, "Rune" ];
item [293] = [ "Earth-rune", 1, 24, "Rune" ];
item [294] = [ "Coins", 1, 2, "" ];
item [295] = [ "Nothing", 1, 0, "" ];
item [296] = [ "wizardshat (Black)", 1, 1, "" ];
item [297] = [ "Coins", 1, 1, "" ];
item [298] = [ "Nothing", 1, 0, "" ];
item [299] = [ "Mind-rune", 1, 7, "Rune" ];  //  300

runs [0] = [ 299, 300 ];  // kills 300, drops 300

// run 2

// runs [1] = [ x, y ];  // kills ? ( y - 300 ), drops ? ( x - 299 )

/*
item [000] = [ "Coins", 1, 1, "" ];  //  ()
item [000] = [ "Coins", 1, 2, "" ];  //  ()
item [000] = [ "Coins", 1, 4, "" ];  //  ()
item [000] = [ "Coins", 1, 29, "" ];  //  ()
item [000] = [ "Coins", 1, 30, "" ];  //  ()

item [000] = [ "Air-rune", 1, 7, "Rune" ];  //  ()
item [000] = [ "Air-rune", 1, 12, "Rune" ];  //  ()
item [000] = [ "Water-rune", 1, 7, "Rune" ];  //  ()
item [000] = [ "Water-rune", 1, 12, "Rune" ];  //  ()
item [000] = [ "Earth-rune", 1, 7, "Rune" ];  //  ()
item [000] = [ "Earth-rune", 1, 12, "Rune" ];  //  ()
item [000] = [ "Earth-rune", 1, 24, "Rune" ];  //  ()
item [000] = [ "Fire-rune", 1, 7, "Rune" ];  //  ()
item [000] = [ "Fire-rune", 1, 12, "Rune" ];  //  ()
item [000] = [ "Body-rune", 1, 7, "Rune" ];  //  ()
item [000] = [ "Body-rune", 1, 12, "Rune" ];  //  ()
item [000] = [ "Mind-rune", 1, 7, "Rune" ];  //  ()
item [000] = [ "Mind-rune", 1, 12, "Rune" ];  //  ()
item [000] = [ "Chaos-rune", 1, 3, "Rune" ];  //  ()
item [000] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  ()
item [000] = [ "Nature-rune", 1, 3, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Blood-rune", 1, 1, "Rune" ];  //  ()

item [000] = [ "Staff", 1, 1, "" ];
item [000] = [ "wizardshat (Black)", 1, 1, "" ];
item [000] = [ "Black robe (Wizard's top)", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];
*/

var idbl = item.length;
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Darkwizard";         // monster's name
var mcbl = 25;                    // monster's combat level
var mindex = 60;                  // index into monster data base
var mrpt = 2;                     // number of non-breaking space to add after index name