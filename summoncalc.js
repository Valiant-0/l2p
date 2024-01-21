onerror=handleErr
var txt=""

var d=new _pdocument();

function _pdocument()
{
	var _alldata=new Array();
	function _getElementById(id) {
		if (_alldata[id]) {			
			return _alldata[id];
		}
		else {
			var s=document.getElementById(id);
			_alldata[id]=s;
			return _alldata[id];
		}
	}
	this.gI=_getElementById;

}

function handleErr(msg,url,l)
{
txt="There was an error on this page.\n\n"
txt+="Error: " + msg + "\n"
txt+="URL: " + url + "\n"
txt+="Line: " + l + "\n\n"
txt+="Click OK to continue.\n\n"
alert(txt)
return true
}

//Summon Stats
var BIGBOOMSLVL=new Array("58+","62+","66+","70+","74+")
var BIGBOOMBLVL=new Array(60,64,68,72,76)
var BIGBOOMHP=new Array(1933.24044,2141.82127,2345.76698,2540.15331,2719.97952)
var BIGBOOMMP=new Array(1036.8,1158,1282.4,1410,1540.8)
var BIGBOOMPATK=new Array(481,562,646,731,815)
var BIGBOOMMATK=new Array(328,383,441,499,556)
var BIGBOOMPDEF=new Array(247,267,286,305,323)
var BIGBOOMMDEF=new Array(181,195,209,223,236)
var CORRUPTEDMANSLVL=new Array("40+","48+","56+","62+","66+","70+","+1-9")
var CORRUPTEDMANBLVL=new Array(42,50,58,64,68,72,78)
var CORRUPTEDMANHP=new Array(1576.22478,2131.501545,2743.02399,3212.731905,3518.65047,3810.229965,4484.5)
var CORRUPTEDMANMP=new Array(796.5,1121.7,1466.1,1737,1923.6,2115,1607.5)
var CORRUPTEDMANPATK=new Array(238,366,531,674,775,877,1034.5)
var CORRUPTEDMANMATK=new Array(135,208,302,383,441,499,584)
var CORRUPTEDMANPDEF=new Array(164,200,237,267,286,305,332)
var CORRUPTEDMANMDEF=new Array(120,146,174,195,209,223,243)
var CURSEDMANSLVL=new Array("56+","60+","64+","68+","70+","72+","74+","+1-9")
var CURSEDMANBLVL=new Array(58,62,66,70,72,74,76,78)
var CURSEDMANHP=new Array(2194.416,2445.372,2693.616,2933.364,3048.18,3158.64,3263.976,3370)
var CURSEDMANMP=new Array(977.4,1097,1219.8,1345.8,1410,1475,1540.8,1607.5)
var CURSEDMANPATK=new Array(575,677,784,895,950,1005,1059,1137)
var CURSEDMANMATK=new Array(302,355,412,470,499,528,556,584)
var CURSEDMANPDEF=new Array(237,257,276,295,305,314,323,332)
var CURSEDMANMDEF=new Array(174,188,202,216,223,230,236,243)
var DARKPANTHERSLVL=new Array("40+","49+","58+","62+","66+","70+","74+","+1-9","+10")
var DARKPANTHERBLVL=new Array(42,51,60,64,68,72,76,78,79)
var DARKPANTHERHP=new Array(1155.898172,1617.457556,2126.564484,2356.003397,2580.343678,2794.168641,2991.977472,3064,3107)
var DARKPANTHERMP=new Array(531,775.8,1036.8,1158,1282.4,1410,1540.8,1607.5,1641)
var DARKPANTHERPATK=new Array(198,321,481,562,646,731,815,855,875)
var DARKPANTHERMATK=new Array(135,219,328,383,441,499,556,584,597)
var DARKPANTHERPDEF=new Array(164,204,247,267,286,305,323,332,337)
var DARKPANTHERMDEF=new Array(120,149,181,195,209,223,236,243,246)
var KAITHECATSLVL=new Array("40+","44+","48+","52+","56+","58+","60+","62+","64+","66+","68+","70+","72+","74+","+1-9")
// ^ also SOULLESS, MERROW
var KAITHECATBLVL=new Array(42,46,50,54,58,60,62,64,66,68,70,72,74,76,78)
var KAITHECATHP=new Array(1260.979824,1475.744136,1705.201236,1946.107416,2194.419192,2319.4444,2445.372984,2570.185524,2693.61258,2814.920376,2933.361828,3048.183972,3158.635632,3263.975424,3370.03)
var KAITHECATMP=new Array(531,637.8,747.8,861,977.4,1036.8,1097,1158,1219.8,1282.4,1345.8,1410,1475,1540.8,1607.4)
var KAITHECATPATK=new Array(218.180501,272.85786,336.103966,407.757944,487.18912,530.5,574,619.5,664.5,712,758,805.5,852.4,898.5,940.5)
var KAITHECATMATK=new Array(135,169.38777,208.6504,253.5,302.9,329,355.86007,383.78868,412.8,441.75,471.5,500,529,557.5,574.25)
var KAITHECATPDEF=new Array(164,182,200,218,237,247,257,267,276,286,295,305,314,323,332)
var KAITHECATMDEF=new Array(120,133,146,160,174,181,188,195,202,209,216,223,230,236,243)
var KATTHECATSLVL=new Array("20+","25+","30+","35+","40+","44+","48+","52+","56+","58+","60+","62+","64+","66+","68+","70+","72+","74+","+1-9")
// ^ also MEW, SHADOW, SILHOUETTE, BOXER, MIRAGE
var KATTHECATBLVL=new Array(22,27,32,37,42,46,50,54,58,60,62,64,66,68,70,72,74,76,78)
var KATTHECATHP=new Array(619.246048,824.285696,1069.554112,1355.708064,1681.306432,1967.658848,2273,2594.809888,2925.5,3093,3260,3426.914032,3591.48344,3753.227168,3911.149104,4064,4211,4351.967232,4484.5)
var KATTHECATMP=new Array(218.52,286.92,358.32,432.72,531,637.8,747.8,861,977.4,1036.8,1097,1158,1219.8,1282.4,1345.8,1410,1475,1540.8,1607.5)
var KATTHECATPATK=new Array(51,74,106,146,198,248,305,370,442,481,521,562,603,646,688,731,773,815,855)
var KATTHECATMATK=new Array(35,51,72,100,135,169,208,253,302,328,355,383,412,441,470,499,528,556,584)
var KATTHECATPDEF=new Array(92,108,125,144,164,182,200,218,237,247,257,267,276,286,295,305,314,323,332)
var KATTHECATMDEF=new Array(67,79,91,105,120,133,146,160,174,181,188,195,202,209,216,223,230,236,243)
var MECHANICGOLEMSLVL=new Array("28+","36+","43+","49+","55+","60+","64+","68+","72+")
var MECHANICGOLEMBLVL=new Array(30,38,45,51,57,62,66,70,74)
var MECHANICGOLEMHP=new Array(664.492609,974.709725,1302.186534,1617.457556,1954.238198,2241.591902,2469.144865,2688.915009,2895.415996)
var MECHANICGOLEMMP=new Array(329.4,447.96,610.8,775.8,948,1097,1219.8,1345.8,1475)
var MECHANICGOLEMPATK=new Array(92,156,234,321,424,521,603,688,773)
var MECHANICGOLEMMATK=new Array(63,106,160,219,289,355,412,470,528)
var MECHANICGOLEMPDEF=new Array(118,148,177,204,233,257,276,295,314)
var MECHANICGOLEMMDEF=new Array(86,108,130,149,170,188,202,216,230)
var NIGHTSHADESLVL=new Array("56+","58+","60+","62+","64+","66+","68+","70+","72+","74+","+1-9")
// ^ also QUEEN, SERAPHIM
var NIGHTSHADEBLVL=new Array(58,60,62,64,66,68,70,72,74,76,78)
var NIGHTSHADEHP=new Array(3657.8,3866.48088,4075.62164,4283.64254,4489.3543,4691.53396,4888.93638,5080.30662,5264.39272,5439.95904,5606)
var NIGHTSHADEMP=new Array(977.4,1036.8,1097,1158,1219.8,1282.4,1345.8,1410,1475,1540.8,1607.5)
var NIGHTSHADEPATK=new Array(177.76,190.6,203.62,216.73,229.83,242.83,255.62,268.07,280.09,291.56,302.5)
var NIGHTSHADEMATK=new Array(302,328,355,383,412,441,470,499,528,556,584)
var NIGHTSHADEPDEF=new Array(237,247,257,267,276,286,295,305,314,323,332)
var NIGHTSHADEMDEF=new Array(174,181,188,195,202,209,216,223,230,236,243)
var REANIMATEDMANSLVL=new Array("44+","52+","60+","64+","68+","72+","74+")
var REANIMATEDMANBLVL=new Array(46,54,62,66,70,74,76)
var REANIMATEDMANHP=new Array(1844.68017,2432.63427,3056.71623,3367.015725,3666.702285,3948.29454,4079.96928)
var REANIMATEDMANMP=new Array(637.8,861,1097,1219.8,1345.8,1475,1540.8)
var REANIMATEDMANPATK=new Array(297,444,625,724,826,928,978)
var REANIMATEDMANMATK=new Array(169,253,355,412,470,528,556)
var REANIMATEDMANPDEF=new Array(182,218,257,276,295,314,323)
var REANIMATEDMANMDEF=new Array(133,160,188,202,216,230,236)
var SIEGEGOLEMSLVL=new Array("49+","p")
var SIEGEGOLEMBLVL=new Array(55,"p")
var SIEGEGOLEMHP=new Array(500000,"p")
var SIEGEGOLEMMP=new Array(889.8,"p")
var SIEGEGOLEMPATK=new Array(1500,"p")
var SIEGEGOLEMMATK=new Array(265,"p")
var SIEGEGOLEMPDEF=new Array(837,"p")
var SIEGEGOLEMMDEF=new Array(674,"p")
var SPECTRALLORDSLVL=new Array("79+","p")
var SPECTRALLORDBLVL=new Array(80,"p")
var SPECTRALLORDHP=new Array(2862.16,"p")
var SPECTRALLORDMP=new Array(1674.5,"p")
var SPECTRALLORDPATK=new Array(1305.3,"p")
var SPECTRALLORDMATK=new Array(892.05,"p")
var SPECTRALLORDPDEF=new Array(259.17,"p")
var SPECTRALLORDMDEF=new Array(226.7,"p")
var SWOOPCANNONSLVL=new Array("68+","p")
var SWOOPCANNONBLVL=new Array(68,"p")
var SWOOPCANNONHP=new Array(496855.5,"p")
var SWOOPCANNONMP=new Array(889.8,"p")
var SWOOPCANNONPATK=new Array(12,"p")
var SWOOPCANNONMATK=new Array(265,"p")
var SWOOPCANNONPDEF=new Array(837,"p")
var SWOOPCANNONMDEF=new Array(674,"p")
var WILDHOGCANNONSLVL=new Array("58+","p")
var WILDHOGCANNONBLVL=new Array(60,"p")
var WILDHOGCANNONHP=new Array(1995.6,"p")
var WILDHOGCANNONMP=new Array(1036.8,"p")
var WILDHOGCANNONPATK=new Array(496,"p")
var WILDHOGCANNONMATK=new Array(328,"p")
var WILDHOGCANNONPDEF=new Array(476,"p")
var WILDHOGCANNONMDEF=new Array(383,"p")

//Buffs
var ACUMEN=new Array(0,1.15,1.23,1.3)
var AGILITY=new Array(0,2,3,4)
var BTB=new Array(0,1.1,1.15,1.2,1.25,1.3,1.35)
var BTS=new Array(0,1.1,1.15,1.2,1.25,1.3,1.35)
var CATBUFFS=new Array(0,1.06,1.08,1.1,0.25,0.27,0.3)
var CURSEOFSHADE=new Array(0,0.94,0.92,0.9)
var DEACC=new Array(0,12,13)
var DEASPD=new Array(0,0.83,0.8,0.77)
var DEMONICBD=new Array(0,0,0.85,0,0,0.7)
var EMPOWER=new Array(0,1.55,1.65,1.75,1.44)
var FOCUS=new Array(0,0.2,0.25,0.3)
var GREATERMIGHT=new Array(0,1.04,1.07,1.10)
var GREATERSHIELD=new Array(0,1.05,1.10,1.15)
var GUIDANCE=new Array(0,2,3,4)
var HASTE=new Array(0,1.15,1.33)
var HEX=new Array(0,0.77)
var HSCHOLACC=new Array(0,3,6,8,10,6,0,0,0,0,0)
var HSCHOLEVA=new Array(0,0,-3,-3,-3,-5,-5,-5,-8,-9,-10)
var HSMALARIA=new Array(0,1.04,1.08,1.12,1.16,1.08,1,1,1,1,1)
var MAGICBARRIER=new Array(0,1.15,1.23,1.3)
var MIGHT=new Array(0,1.08,1.12,1.15,1.25)
var PROPHECYHP=new Array(0,1.2,1.2,1,1,1)
var PROPHECYMP=new Array(0,1,1,1,1,1.15)
var PROPHECYPATK=new Array(0,1.1,1.1,1,1,1)
var PROPHECYMATK=new Array(0,1.2,1,1.2,1,1.3)
var PROPHECYPDEF=new Array(0,1.2,1.2,1,1,1)
var PROPHECYMDEF=new Array(0,1.2,1,1.2,1,1.3)
var PROPHECYACC=new Array(0,4,4,0,4,0)
var PROPHECYEVA=new Array(0,0,0,0,4,0)
var PROPHECYSPEED=new Array(0,0.8,0.9,0.8,1,1)
var PROPHECYCRIT=new Array(0,0.25,0,0,0,0)
var PROPHECYCRITDMG=new Array(0,1.2,1,1,1,1)
var PROPHECYASPD=new Array(0,1.2,1.2,1,1.2,1)
var PROPHECYCAST=new Array(0,1.2,1,1.2,1,1.2)
var PROPHECYHPR=new Array(0,1,1.2,1,1,1)
var PROPHECYMPR=new Array(0,1,1,1.2,1,1.2)
var PROPHECYVR=new Array(0,0,0,0,0.05,0)
var PSYCHO=new Array(0,0.9)
var SANDBOMB=new Array(0,-6,0,-12)
var SHIELD=new Array(0,1.08,1.12,1.15)
var SLOW=new Array(0,0.7,0.55)
var TRIBUNAL=new Array (0,-0.3,-0.4,-0.5)
var UDPDEF=new Array(0,1800,3600,5400,3636,3672,3708,3744,3780,3816,3852,3888,3924,3960,3996,4032,4068,4104,4140,4176,4212,4248,4284,4320,4356,4392,4428,4464,4500,4536,4572,4608,4644,4680)
var UDMDEF=new Array(0,1350,2700,4050,2727,2754,2781,2808,2835,2862,2889,2916,2943,2970,2997,3024,3051,3078,3105,3132,3159,3186,3213,3240,3267,3294,3321,3348,3375,3402,3429,3456,3483,3510)
var WEAKNESS=new Array(0,0.83,0.8,0.77)
var WINDWALK=new Array(0,20,33)
var ZERK=new Array(0,1.05,1.08)
var ZERKMATK=new Array(0,1.1,1.16)
var ZERKMDEF=new Array(0,0.9,0.84)
var ZERKPDEF=new Array(0,0.95,0.92)
var ZERKSPEED=new Array(0,5,8)
var ZERKEVA=new Array(0,-2,-4)

//Weapon
var WEAPON=new Array()
WEAPON[0]=new Array(4,6,"unequipped","no SA",0,"",0,"",0,"",0,"",0,"",0,"",0,"",0,"",0,"",0)

//Armor
var HELMETPDEF=new Array(12,83,83,83,69,69,69,69,73,73,69,62,66,66,62,47,54,58,51,54,29,41,33,37,37,37,37,44,13,26,16,23,19)

function boxgoaway() {
//toggle display for fieldsets
	if (d.gI("COMBATC").checked==false)
		{d.gI("COMBAT").style.display='none'}
	else if (d.gI("COMBATC").checked==true)
		{d.gI("COMBAT").style.display='block'}
	if (d.gI("EDEBUFFSC").checked==false)
		{d.gI("EDEBUFFS").style.display='none'}
	else if (d.gI("EDEBUFFSC").checked==true)
		{d.gI("EDEBUFFS").style.display='block'}
	if (d.gI("BUFFSCHECK").checked==false)
		{d.gI("BUFFS").style.display='none'}
	else if (d.gI("BUFFSCHECK").checked==true)
		{d.gI("BUFFS").style.display='block'}
	if (d.gI("DEBUFFSCHECK").checked==false)
		{d.gI("DEBUFFS").style.display='none'}
	else if (d.gI("DEBUFFSCHECK").checked==true)
		{d.gI("DEBUFFS").style.display='block'}
}

function buffs(setbuff) {
//Buffs Autoselect
var setbuffs=d.gI("SETBUFFS").value
var APROPH=new Array("n",1,"n","n","n","n","n","n","n",3,"n","n","n","n","n","n","n",0,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n",4,6,"n","n","n","n","n",4,7,"n","n","n","n","n",4,5,"n","n","n","n","n")
var ABTB=new Array("n",5,5,4,3,2,1,0,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n",5,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n")
var ABTS=new Array("n",5,5,4,3,2,1,0,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n",5,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n")
var AFCS=new Array("n",2,2,2,2,2,1,1,0,2,2,2,2,2,1,1,0,5,5,5,4,4,3,3,3,3,"n","n","n","n","n","n","n","n","n","n",0,2,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n")
var AHASTE=new Array("n",1,1,1,1,1,0,0,"n","n","n","n","n","n","n","n","n",3,3,3,3,3,3,3,2,2,"n","n","n","n","n","n","n","n","n","n",1,1,8,8,8,8,7,7,"n",8,8,8,8,7,7,"n",8,8,8,8,7,7,7,"n")
var AEMP=new Array("n","n","n","n","n","n","n","n","n",2,2,2,2,2,1,1,0,"n","n","n","n","n","n","n","n","n","n","n",4,"n","n","n","n","n","n","n",2,"n",7,7,7,6,6,5,5,"n","n","n","n","n","n","n","n","n","n","n","n","n","n")
var AWW=new Array("n",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,"n","n","n","n","n","n","n","n","n","n","n",3,3,2,"n","n","n","n","n",1,1,"n","n","n","n","n","n","n","n","n","n","n","n","n",10,10,10,10,10,10,9,9,9)
var AMB=new Array("n",1,1,1,1,1,0,0,"n","n","n","n","n","n","n","n","n",4,4,4,4,4,4,4,4,3,3,3,7,7,7,7,6,6,5,5,1,"n",9,9,9,9,8,8,"n",9,9,9,9,8,8,"n",9,9,9,9,8,8,8)
var AAGI=new Array("n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n",5,5,5,5,5,5,5,4,4,3,3,8,8,8,8,7,7,6,6,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n")
var AGUID=new Array("n",2,2,2,2,1,1,0,0,2,2,2,2,1,1,0,0,5,5,5,5,5,4,3,3,3,"n","n",8,8,8,8,7,6,6,6,2,2,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n")
var AACU=new Array("n",2,2,2,2,2,2,1,1,"n","n","n","n","n","n","n","n",5,5,5,5,5,5,5,4,4,4,3,8,8,8,8,7,7,7,6,0,2,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n")
var ASHIELD=new Array("n",2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,8,8,8,8,8,8,8,8,8,8,8,5,5,5,5,5,4,4,3,2,"n",14,14,14,13,13,12,12,14,14,14,13,13,12,12,14,14,14,13,13,12,12)
var AMIGHT=new Array("n",2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,6,6,6,6,6,6,6,6,6,6,5,9,9,9,9,9,9,8,8,2,2,0,0,0,0,0,0,0,12,12,12,11,11,10,10,0,0,0,0,0,0,0)
var AREGENERATION=new Array("n",2,2,2,2,1,1,0,0,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n")
var ADEATHWHISPER=new Array("n",2,2,2,2,1,1,0,0,2,2,2,2,1,1,0,0,5,5,5,5,5,5,5,4,3,3,"n",6,"n","n","n","n","n","n","n",0,2,"n")
var AVAMPIRICRAGE=new Array("n","n","n","n","n","n","n","n","n",3,3,2,1,1,1,1,0,7,7,6,6,5,5,4,4,4,4,"n","n","n","n","n","n","n","n","n",3,"n","n")
var ASKIN=new Array("n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n",2,2,1,0,0,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n")
if (setbuff && setbuffs=="0"){
	d.gI("BTBCHECK").checked=false
	d.gI("VITCHECK").checked=false
	d.gI("BTSCHECK").checked=false
	d.gI("MIGHTCHECK").checked=false
	d.gI("DOWACHECK").checked=false
	d.gI("GREATERMIGHTCHECK").checked=false
	d.gI("EMPCHECK").checked=false
	d.gI("DOMYCHECK").checked=false
	d.gI("SHIELDCHECK").checked=false
	d.gI("SOECHECK").checked=false
	d.gI("GREATERSHIELDCHECK").checked=false
	d.gI("MBCHECK").checked=false
	d.gI("WARDCHECK").checked=false
	d.gI("GUIDCHECK").checked=false
	d.gI("DOICHECK").checked=false
	d.gI("AGICHECK").checked=false
	d.gI("SWATCHECK").checked=false
	d.gI("FCSCHECK").checked=false
	d.gI("SOHCHECK").checked=false
	d.gI("WWCHECK").checked=false
	d.gI("SWINDCHECK").checked=false
	d.gI("DSHCHECK").checked=false
	d.gI("HASTECHECK").checked=false
	d.gI("DFURYCHECK").checked=false
	d.gI("ACUCHECK").checked=false
	d.gI("DCONCHECK").checked=false
	d.gI("DEWC").checked=false
	d.gI("DOFC").checked=false
	d.gI("VRAC").checked=false
	d.gI("DOVC").checked=false
	d.gI("RGNC").checked=false
	d.gI("SOLC").checked=false
	d.gI("SOMC").checked=false
	d.gI("SERC").checked=false
	d.gI("SKNC").checked=false
	d.gI("SOVC").checked=false
	d.gI("ZERKCHECK").checked=false
	d.gI("QUEENCHECK").checked=false
	d.gI("PROPHCHECK").checked=false
	d.gI("UDCHECK").checked=false
	}
else if (setbuff) {
	var PROPH=APROPH[setbuffs]
	if (PROPH>=0)
		{d.gI("PROPHCHECK").checked=true
		d.gI("PROPH").selectedIndex=PROPH}
	var BTB=ABTB[setbuffs]
	if (BTB>=0)
		{d.gI("BTBCHECK").checked=true
		d.gI("BTB").selectedIndex=BTB}
	var BTS=ABTS[setbuffs]
	if (BTS>=0)
		{d.gI("BTSCHECK").checked=true
		d.gI("BTS").selectedIndex=BTS}
	var FCS=AFCS[setbuffs]
	if (FCS>=0)
		{d.gI("FCSCHECK").checked=true
		d.gI("FCS").selectedIndex=FCS}
	var HASTE=AHASTE[setbuffs]
	if (HASTE>=0)
		{d.gI("HASTECHECK").checked=true
		d.gI("HASTE").selectedIndex=HASTE}
	var EMP=AEMP[setbuffs]
	if (EMP>=0)
		{d.gI("EMPCHECK").checked=true
		d.gI("EMP").selectedIndex=EMP}
	var WW=AWW[setbuffs]
	if (WW>=0)
		{d.gI("WWCHECK").checked=true
		d.gI("WW").selectedIndex=WW}
	var MB=AMB[setbuffs]
	if (MB>=0)
		{d.gI("MBCHECK").checked=true
		d.gI("MB").selectedIndex=MB}
	var AGI=AAGI[setbuffs]
	if (AGI>=0)
		{d.gI("AGICHECK").checked=true
		d.gI("AGI").selectedIndex=AGI}
	var GUID=AGUID[setbuffs]
	if (GUID>=0)
		{d.gI("GUIDCHECK").checked=true
		d.gI("GUID").selectedIndex=GUID}
	var ACU=AACU[setbuffs]
	if (ACU>=0)
		{d.gI("ACUCHECK").checked=true
		d.gI("ACU").selectedIndex=ACU}
	var SHIELD=ASHIELD[setbuffs]
	if (SHIELD>=0)
		{d.gI("SHIELDCHECK").checked=true
		d.gI("SHIELD").selectedIndex=SHIELD}
	var MIGHT=AMIGHT[setbuffs]
	if (MIGHT>=0)
		{d.gI("MIGHTCHECK").checked=true
		d.gI("MIGHT").selectedIndex=MIGHT}
	var REGENERATION=AREGENERATION[setbuffs]
	if (REGENERATION>=0)
		{d.gI("RGNC").checked=true
		d.gI("RGN").selectedIndex=REGENERATION}
	var DEATHWHISPER=ADEATHWHISPER[setbuffs]
	if (DEATHWHISPER>=0)
		{d.gI("DEWC").checked=true
		d.gI("DEW").selectedIndex=DEATHWHISPER}
	var VAMPIRICRAGE=AVAMPIRICRAGE[setbuffs]
	if (VAMPIRICRAGE>=0)
		{d.gI("VRAC").checked=true
		d.gI("VRA").selectedIndex=VAMPIRICRAGE}
	var SKIN=ASKIN[setbuffs]
	if (SKIN>=0)
		{d.gI("SKNC").checked=true
		d.gI("SKN").selectedIndex=SKIN}
}
	if (d.gI("ACUCHECK").checked==false)
		{d.gI("ACU").disabled=true;}
	else
		{d.gI("ACU").disabled=false;}
	if (d.gI("AGICHECK").checked==false)
		{d.gI("AGI").disabled=true;}
	else
		{d.gI("AGI").disabled=false;}
	if (d.gI("ZERKCHECK").checked==false)
		{d.gI("ZERK").disabled=true;}
	else
		{d.gI("ZERK").disabled=false;}
	if (d.gI("BTBCHECK").checked==false)
		{d.gI("BTB").disabled=true;}
	else
		{d.gI("BTB").disabled=false;}
	if (d.gI("BTSCHECK").checked==false)
		{d.gI("BTS").disabled=true;}
	else
		{d.gI("BTS").disabled=false;}
	if (d.gI("DCONCHECK").checked==false)
		{d.gI("DCON").disabled=true;}
	else
		{d.gI("DCON").disabled=false;}
	if (d.gI("DOFC").checked==false)
		{d.gI("DOF").disabled=true;}
	else
		{d.gI("DOF").disabled=false;}
	if (d.gI("DFURYCHECK").checked==false)
		{d.gI("DFURY").disabled=true;}
	else
		{d.gI("DFURY").disabled=false;}
	if (d.gI("DOICHECK").checked==false)
		{d.gI("DOI").disabled=true;}
	else
		{d.gI("DOI").disabled=false;}
	if (d.gI("DOMYCHECK").checked==false)
		{d.gI("DOMY").disabled=true;}
	else
		{d.gI("DOMY").disabled=false;}
	if (d.gI("DSHCHECK").checked==false)
		{d.gI("DSH").disabled=true;}
	else
		{d.gI("DSH").disabled=false;}
	if (d.gI("DOVC").checked==false)
		{d.gI("DOV").disabled=true;}
	else
		{d.gI("DOV").disabled=false;}
	if (d.gI("DOWACHECK").checked==false)
		{d.gI("DOWA").disabled=true;}
	else
		{d.gI("DOWA").disabled=false;}
	if (d.gI("DEWC").checked==false)
		{d.gI("DEW").disabled=true;}
	else
		{d.gI("DEW").disabled=false;}
	if (d.gI("EMPCHECK").checked==false)
		{d.gI("EMP").disabled=true;}
	else
		{d.gI("EMP").disabled=false;}
	if (d.gI("FCSCHECK").checked==false)
		{d.gI("FCS").disabled=true;}
	else
		{d.gI("FCS").disabled=false;}
	if (d.gI("GREATERMIGHTCHECK").checked==true && d.gI("GREATERSHIELDCHECK").checked==false)
		{d.gI("GREATERMIGHT").disabled=false;
		d.gI("GREATERSHIELDCHECK").disabled=true;
		d.gI("GREATERSHIELDCHECK").checked=false;
		d.gI("GREATERSHIELD").disabled=true;}
	else if (d.gI("GREATERSHIELDCHECK").checked==true && d.gI("GREATERMIGHTCHECK").checked==false)
		{d.gI("GREATERSHIELD").disabled=false;
		d.gI("GREATERMIGHTCHECK").disabled=true;
		d.gI("GREATERMIGHTCHECK").checked=false;
		d.gI("GREATERMIGHT").disabled=true;}
	else if (d.gI("GREATERSHIELDCHECK").checked==true && d.gI("GREATERMIGHTCHECK").checked==true)
		{d.gI("GREATERMIGHT").disabled=false;
		d.gI("GREATERSHIELDCHECK").disabled=true;
		d.gI("GREATERSHIELDCHECK").checked=false;
		d.gI("GREATERSHIELD").disabled=true;}
	else
		{d.gI("GREATERMIGHT").disabled=true;
		d.gI("GREATERSHIELD").disabled=true;
		d.gI("GREATERSHIELDCHECK").disabled=false;
		d.gI("GREATERMIGHTCHECK").disabled=false;}
	if (d.gI("GUIDCHECK").checked==false)
		{d.gI("GUID").disabled=true;}
	else
		{d.gI("GUID").disabled=false;}
	if (d.gI("HASTECHECK").checked==false)
		{d.gI("HASTE").disabled=true;}
	else
		{d.gI("HASTE").disabled=false;}
	if (d.gI("MBCHECK").checked==false)
		{d.gI("MB").disabled=true;}
	else
		{d.gI("MB").disabled=false;}
	if (d.gI("MIGHTCHECK").checked==false)
		{d.gI("MIGHT").disabled=true;}
	else
		{d.gI("MIGHT").disabled=false;}
	if (d.gI("PROPHCHECK").checked==false)
		{d.gI("PROPH").disabled=true;}
	else
		{d.gI("PROPH").disabled=false;}
	if (d.gI("QUEENCHECK").checked==false)
		{d.gI("QUEEN").disabled=true;}
	else
		{d.gI("QUEEN").disabled=false;}
	if (d.gI("RGNC").checked==false)
		{d.gI("RGN").disabled=true;}
	else
		{d.gI("RGN").disabled=false;}
	if (d.gI("SERC").checked==false)
		{d.gI("SER").disabled=true;}
	else
		{d.gI("SER").disabled=false;}
	if (d.gI("BLKSCHECK").checked==false)
		{d.gI("BLKS").disabled=true;
		d.gI("SHIELDCHECK").disabled=false;}
	else if (d.gI("BLKSCHECK").checked==true)
		{d.gI("BLKS").disabled=false;
		d.gI("SHIELDCHECK").disabled=true;
		d.gI("SHIELDCHECK").checked=false;}
	if (d.gI("SHIELDCHECK").checked==false)
		{d.gI("SHIELD").disabled=true;}
	else
		{d.gI("SHIELD").disabled=false;}
	if (d.gI("SKNC").checked==false)
		{d.gI("SKN").disabled=true;}
	else
		{d.gI("SKN").disabled=false;}
	if (d.gI("SOECHECK").checked==false)
		{d.gI("SOEA").disabled=true;}
	else
		{d.gI("SOEA").disabled=false;}
	if (d.gI("SOHCHECK").checked==false)
		{d.gI("SOH").disabled=true;}
	else
		{d.gI("SOH").disabled=false;}
	if (d.gI("SOLC").checked==false)
		{d.gI("SOL").disabled=true;}
	else
		{d.gI("SOL").disabled=false;}
	if (d.gI("SOMC").checked==false)
		{d.gI("SOM").disabled=true;}
	else
		{d.gI("SOM").disabled=false;}
	if (d.gI("SOVC").checked==false)
		{d.gI("SOV").disabled=true;}
	else
		{d.gI("SOV").disabled=false;}
	if (d.gI("VITCHECK").checked==false)
		{d.gI("VIT").disabled=true;}
	else
		{d.gI("VIT").disabled=false;}
	if (d.gI("WARDCHECK").checked==false)
		{d.gI("WARD").disabled=true;}
	else
		{d.gI("WARD").disabled=false;}
	if (d.gI("SWATCHECK").checked==false)
		{d.gI("SWAT").disabled=true;}
	else
		{d.gI("SWAT").disabled=false;}
	if (d.gI("SWINDCHECK").checked==false)
		{d.gI("SWIND").disabled=true;}
	else
		{d.gI("SWIND").disabled=false;}
	if (d.gI("UDCHECK").checked==false)
		{d.gI("UD").disabled=true;}
	else
		{d.gI("UD").disabled=false;}
	if (d.gI("VRAC").checked==false)
		{d.gI("VRA").disabled=true;}
	else
		{d.gI("VRA").disabled=false;}
	if (d.gI("BWWCHECK").checked==false)
		{d.gI("BWW").disabled=true;
		d.gI("WWCHECK").disabled=false;}
	else
		{d.gI("BWW").disabled=false;
		d.gI("WWCHECK").disabled=true;
		d.gI("WWCHECK").checked=false;}
	if (d.gI("WWCHECK").checked==false)
		{d.gI("WW").disabled=true;}
	else
		{d.gI("WW").disabled=false;}
}
function debuffs() {
	if (d.gI("DEACCCHECK").checked==false)
		{d.gI("DEACC").disabled=true;}
	else
		{d.gI("DEACC").disabled=false;}
	if (d.gI("ACCHECK").checked==false)
		{d.gI("ARCR").disabled=true;}
	else
		{d.gI("ARCR").disabled=false;}
	if (d.gI("DEASPDCHECK").checked==false)
		{d.gI("DEASPD").disabled=true;}
	else
		{d.gI("DEASPD").disabled=false;}
	if (d.gI("GLOOMCHECK").checked==false)
		{d.gI("GLOOM").disabled=true;}
	else
		{d.gI("GLOOM").disabled=false;}
	if (d.gI("COABYSSCHECK").checked==false)
		{d.gI("COABYSS").disabled=true;}
	else
		{d.gI("COABYSS").disabled=false;}
	if (d.gI("CODOOMCHECK").checked==false)
		{d.gI("CODOOM").disabled=true;}
	else
		{d.gI("CODOOM").disabled=false;}
	if (d.gI("COSHADECHECK").checked==false)
		{d.gI("COSHADE").disabled=true;}
	else
		{d.gI("COSHADE").disabled=false;}
	if (d.gI("DVCHECK").checked==false)
		{d.gI("DV").disabled=true;}
	else
		{d.gI("DV").disabled=false;}
	if (d.gI("DEMONICBDCHECK").checked==false)
		{d.gI("DEMONICBD").disabled=true;}
	else
		{d.gI("DEMONICBD").disabled=false;}
	if (d.gI("PSYCHOCHECK").checked==false)
		{d.gI("PSYCHO").disabled=true;}
	else
		{d.gI("PSYCHO").disabled=false;}
	if (d.gI("TRIBUNALCHECK").checked==false)
		{d.gI("TRIBUNAL").disabled=true;}
	else
		{d.gI("TRIBUNAL").disabled=false;}
	if (d.gI("FVCHECK").checked==false)
		{d.gI("FV").disabled=true;}
	else
		{d.gI("FV").disabled=false;}
	if (d.gI("CHOLCHECK").checked==false)
		{d.gI("CHOL").disabled=true;}
	else
		{d.gI("CHOL").disabled=false;}
	if (d.gI("MALCHECK").checked==false)
		{d.gI("MAL").disabled=true;}
	else
		{d.gI("MAL").disabled=false;}
	if (d.gI("IVCHECK").checked==false)
		{d.gI("IV").disabled=true;}
	else
		{d.gI("IV").disabled=false;}
	if (d.gI("LVORCHECK").checked==false)
		{d.gI("LVOR").disabled=true;}
	else
		{d.gI("LVOR").disabled=false;}
	if (d.gI("DEPATKCHECK").checked==false)
		{d.gI("DEPATK").disabled=true;}
	else
		{d.gI("DEPATK").disabled=false;}
	if (d.gI("DEPDEFCHECK").checked==false)
		{d.gI("DEPDEF").disabled=true;}
	else
		{d.gI("DEPDEF").disabled=false;}
	if (d.gI("SANDBOMBCHECK").checked==false)
		{d.gI("SANDBOMB").disabled=true;}
	else
		{d.gI("SANDBOMB").disabled=false;}
	if (d.gI("DESPAIRCHECK").checked==false)
		{d.gI("DESPAIR").disabled=true;}
	else
		{d.gI("DESPAIR").disabled=false;}
	if (d.gI("SBCHECK").checked==false)
		{d.gI("SB").disabled=true;}
	else
		{d.gI("SB").disabled=false;}
	if (d.gI("DESPEEDCHECK").checked==false)
		{d.gI("DESPEED").disabled=true;}
	else
		{d.gI("DESPEED").disabled=false;}
	if (d.gI("WVCHECK").checked==false)
		{d.gI("WV").disabled=true;}
	else
		{d.gI("WV").disabled=false;}
}
function edebuffs() {
	if (d.gI("EDEPC").checked==false)
		{d.gI("EDEP").disabled=true;}
	else
		{d.gI("EDEP").disabled=false;}
	if (d.gI("EDEDC").checked==false)
		{d.gI("EDED").disabled=true;}
	else
		{d.gI("EDED").disabled=false;}
	if (d.gI("EBLKSC").checked==false)
		{d.gI("EBLKS").disabled=true;}
	else
		{d.gI("EBLKS").disabled=false;}
	if (d.gI("EDEAC").checked==false)
		{d.gI("EDEA").disabled=true;}
	else
		{d.gI("EDEA").disabled=false;}
	if (d.gI("ESBBC").checked==false)
		{d.gI("ESBB").disabled=true;}
	else
		{d.gI("ESBB").disabled=false;}
	if (d.gI("ETRBC").checked==false)
		{d.gI("ETRB").disabled=true;}
	else
		{d.gI("ETRB").disabled=false;}
	if (d.gI("EDENC").checked==false)
		{d.gI("EDEN").disabled=true;}
	else
		{d.gI("EDEN").disabled=false;}
	if (d.gI("EJDGC").checked==false)
		{d.gI("EJDG").disabled=true;}
	else
		{d.gI("EJDG").disabled=false;}
	if (d.gI("EARCRC").checked==false)
		{d.gI("EARCR").disabled=true;}
	else
		{d.gI("EARCR").disabled=false;}
	if (d.gI("ECBYC").checked==false)
		{d.gI("ECBY").disabled=true;}
	else
		{d.gI("ECBY").disabled=false;}
	if (d.gI("ECDMC").checked==false)
		{d.gI("ECDM").disabled=true;}
	else
		{d.gI("ECDM").disabled=false;}
	if (d.gI("ECSHC").checked==false)
		{d.gI("ECSH").disabled=true;}
	else
		{d.gI("ECSH").disabled=false;}
	if (d.gI("EDBDC").checked==false)
		{d.gI("EDBD").disabled=true;}
	else
		{d.gI("EDBD").disabled=false;}
	if (d.gI("EFVC").checked==false)
		{d.gI("EFV").disabled=true;}
	else
		{d.gI("EFV").disabled=false;}
	if (d.gI("EHEEC").checked==false)
		{d.gI("EHEE").disabled=true;}
	else
		{d.gI("EHEE").disabled=false;}
	if (d.gI("ECHOLC").checked==false)
		{d.gI("ECHOL").disabled=true;}
	else
		{d.gI("ECHOL").disabled=false;}
	if (d.gI("EIVC").checked==false)
		{d.gI("EIV").disabled=true;}
	else
		{d.gI("EIV").disabled=false;}
	if (d.gI("ELVORC").checked==false)
		{d.gI("ELVOR").disabled=true;}
	else
		{d.gI("ELVOR").disabled=false;}
	if (d.gI("EPSYC").checked==false)
		{d.gI("EPSY").disabled=true;}
	else
		{d.gI("EPSY").disabled=false;}
	if (d.gI("ESBC").checked==false)
		{d.gI("ESB").disabled=true;}
	else
		{d.gI("ESB").disabled=false;}
	if (d.gI("EDERC").checked==false)
		{d.gI("EDER").disabled=true;}
	else
		{d.gI("EDER").disabled=false;}
	if (d.gI("EWVC").checked==false)
		{d.gI("EWV").disabled=true;}
	else
		{d.gI("EWV").disabled=false;}
}

function calc()
{
var timeset1=new Date();
//placeholders
var AddASPD=0
var AddCAST=0
var AddCOMBATCRIT=0
var AddCP=0
var AddCRIT=0
var AddCRIT60=0
var AddCRIT30=0
var AddCRITDMG=0
var AddHPR=0
var AddMPR=0
var AddMPR2=0
var AddSPEED=0
var AddSPEED60=0
var AddSPEED30=0
var AddHP=0
var AddMP=0
var AddMATK=0
var AddPATK=0
var AddPATK60=0
var AddPATK30=0
var AddMDEF=0
var AddMDEF60=0
var AddMDEF30=0
var AddPDEF=0
var AddPDEF60=0
var AddPDEF30=0
var AddSPEED=0
var BaseCON=0
var BaseSTR=0
var BaseDEX=0
var BaseINT=0
var BaseMEN=0
var BaseWIT=0
var BaseCP=0
var BaseHP=0
var BaseMP=0
var BaseRun=0
var block360=false
var BuffACC=0
var BuffACC60=0
var BuffACC30=0
var BuffASPD=1
var BuffASPD60=1
var BuffASPD30=1
var BuffCAST=1
var BuffCOMBATCRIT=1
var BuffCRITDMG=1
var BuffDAMAGE=1
var BuffEVA=0
var BuffEVA60=0
var BuffEVA30=0
var BuffHP=1
var BuffHPR=1
var BuffHPR2=1
var BuffMATK=1
var BuffMDEF=1
var BuffMDEF60=1
var BuffMDEF30=1
var BuffMP=1
var BuffMPR=1
var BuffMPR2=1
var BuffPATK=1
var BuffPATK60=1
var BuffPATK30=1
var BuffPDEF=1
var BuffPDEF60=1
var BuffPDEF30=1
var BuffRD=0
var BuffSPEED=1
var BuffSPEED60=1
var BuffSPEED30=1
var BuffVR=0
var ClassType=0
var combatevasion=0
var CON=0
var CONMOD=0
var DEX=0
var DEXMOD=0
var EBaseShieldBlockRate=0.2
var Glove=0
var EBuffDAMAGE=1
var fullbody=0
var Helmet=0
var INT=0
var INTMOD=0
var Lower=0
var MasteryMATK=0
var MasteryPATK=1
var pen=0
var position=d.gI("POS").value
var randdmg=1.2
var Shield=0
var ShieldEvasion=0
var STR=0
var STRMOD=0
var subcritical=0
var shield=0
var Upper=0
var WIT=0
var WITMOD=0
var WpnAcc=0
var WpnMATK=0
var WpnCrt=40
var WpnType="unequipped"

var JOB=d.gI("class").value
var STR=40
var CON=43
var DEX=30
var INT=21
var WIT=11
var MEN=25
var STRMOD=1.2
var DEXMOD=1.1
var CONMOD=1.59
var INTMOD=0.81
var WITMOD=0.64
var MENMOD=1.28
var BaseRun=0

//Weapon SAs
var summonerlvl=document.forms['statcalculator'].LV;
summonerlvl.length=20
for (i=0;i<20;i++){
	if (JOB=="BB") {
		if (BIGBOOMBLVL[i]>=0) {
			summonerlvl.options[i] = new Option(BIGBOOMSLVL[i],BIGBOOMBLVL[i],false,summonerlvl.options[i].selected);}
		else {
			summonerlvl.length=i
			break}
	}
	else if (JOB=="CO") {
		if (CORRUPTEDMANBLVL[i]>=0) {
			summonerlvl.options[i] = new Option(CORRUPTEDMANSLVL[i],CORRUPTEDMANBLVL[i],false,summonerlvl.options[i].selected);}
		else {
			summonerlvl.length=i
			break}
	}
	else if (JOB=="CU") {
		if (CURSEDMANBLVL[i]>=0) {
			summonerlvl.options[i] = new Option(CURSEDMANSLVL[i],CURSEDMANBLVL[i],false,summonerlvl.options[i].selected);}
		else {
			summonerlvl.length=i
			break}
	}
	else if (JOB=="DP") {
		if (DARKPANTHERBLVL[i]>=0) {
			summonerlvl.options[i] = new Option(DARKPANTHERSLVL[i],DARKPANTHERBLVL[i],false,summonerlvl.options[i].selected);}
		else {
			summonerlvl.length=i
			break}
	}
	else if (JOB=="KAI"||JOB=="SL"||JOB=="MER") {
		if (KAITHECATBLVL[i]>=0) {
			summonerlvl.options[i] = new Option(KAITHECATSLVL[i],KAITHECATBLVL[i],false,summonerlvl.options[i].selected);}
		else {
			summonerlvl.length=i
			break}
	}
	else if (JOB=="KAT"||JOB=="MEW"||JOB=="SH"||JOB=="SI"||JOB=="BOX"||JOB=="MIR") {
		if (KATTHECATBLVL[i]>=0) {
			summonerlvl.options[i] = new Option(KATTHECATSLVL[i],KATTHECATBLVL[i],false,summonerlvl.options[i].selected);}
		else {
			summonerlvl.length=i
			break}
	}
	else if (JOB=="MG") {
		if (MECHANICGOLEMBLVL[i]>=0) {
			summonerlvl.options[i] = new Option(MECHANICGOLEMSLVL[i],MECHANICGOLEMBLVL[i],false,summonerlvl.options[i].selected);}
		else {
			summonerlvl.length=i
			break}
	}
	else if (JOB=="NS"||JOB=="QC"||JOB=="SER") {
		if (NIGHTSHADEBLVL[i]>=0) {
			summonerlvl.options[i] = new Option(NIGHTSHADESLVL[i],NIGHTSHADEBLVL[i],false,summonerlvl.options[i].selected);}
		else {
			summonerlvl.length=i
			break}
	}
	else if (JOB=="RM") {
		if (REANIMATEDMANBLVL[i]>=0) {
			summonerlvl.options[i] = new Option(REANIMATEDMANSLVL[i],REANIMATEDMANBLVL[i],false,summonerlvl.options[i].selected);}
		else {
			summonerlvl.length=i
			break}
	}
	else if (JOB=="SG") {
		if (SIEGEGOLEMBLVL[i]>=0) {
			summonerlvl.options[i] = new Option(SIEGEGOLEMSLVL[i],SIEGEGOLEMBLVL[i],false,summonerlvl.options[i].selected);}
		else {
			summonerlvl.length=i
			break}
	}
	else if (JOB=="SP"||JOB=="FK"||JOB=="MU") {
		if (SPECTRALLORDBLVL[i]>=0) {
			summonerlvl.options[i] = new Option(SPECTRALLORDSLVL[i],SPECTRALLORDBLVL[i],false,summonerlvl.options[i].selected);}
		else {
			summonerlvl.length=i
			break}
	}
	else if (JOB=="SW") {
		if (SWOOPCANNONBLVL[i]>=0) {
			summonerlvl.options[i] = new Option(SWOOPCANNONSLVL[i],SWOOPCANNONBLVL[i],false,summonerlvl.options[i].selected);}
		else {
			summonerlvl.length=i
			break}
	}
	else if (JOB=="WHC") {
		if (WILDHOGCANNONBLVL[i]>=0) {
			summonerlvl.options[i] = new Option(WILDHOGCANNONSLVL[i],WILDHOGCANNONBLVL[i],false,summonerlvl.options[i].selected);}
		else {
			summonerlvl.length=i
			break}
	}
	}

//Level Modifier
var LVL = + d.gI("LV").value
var LVLMOD=(LVL+89)/100
var LVLVAR=d.gI("LV").selectedIndex

//////////////////Enemy Targets
var TARGET=new Array(
new Array("Generic Player",LVL,"player",30,1.1,1.2,1.1,"Sword",0,80,379,"S","bu",244,1.085,1,0,300,1,0,0,0,0,0,1,0,1,0,0,1,0,false,0,0,0),
new Array("Generic Monster",LVL,"monster",30,1.1,1.2,1.1,"Sword",0,80,379,"N","no SA",244,1,1,0,300,1,0,0,0,0,0,1,0,1,0,0,1,0,false,0,0,0),
new Array("lv40 Temple Knight",40,"player",35,1.15,1.04,1.1,"Sword",0,80,379,"C","bu",165,1.085,1,19.1,394,1,73.5,0,-8,73.3,0,1,0,1,0,206,1,0,false,1.94731,0,0),
new Array("lv40 Hawkeye",40,"player",34,1.14,1.65,1.05,"Bow",-3.75,120,293,"C","bu",341,1.085,1,182.8,301,1,31.8,0,12,0,0.2,1.05,0,1,56,0,1,0,false,0,0,1500),
new Array("lv40 Prophet",40,"player",21,1.01,0.63,1.2,"Blunt",4.75,40,379,"C","bu",165,1.45,1,18.1,245,1.0526,38,0,-8,0,0,1,0,1,0,206,1,0,false,1,0,0),
new Array("lv61 Temple Knight",61,"player",33,1.13,1.04,1.1,"Sword",0,80,379,"A","bu",244,1.085,1.04,50.4,483,1,346.4,0,-8,0,0,1,0,1,0,259,1,0,true,3,0.05,0),
new Array("lv61 Hawkeye",61,"player",35,1.15,1.43,1.05,"YumiBow",-3.75,120,227,"A","bu",552,1.085,1.08,497.1,410,1,57.5,0,12,0,0.2,1.05,0,1,56,0,1,0,false,0,0,696.915),
new Array("lv61 Prophet",61,"player",21,1.01,0.63,1.2,"Blunt",4.75,40,379,"A","bu",244,1.45,1,49.4,319,1.08,69.5,0,-8,0,0,1,0,1,0,259,1,0,false,1,0,0),
new Array("lv80 Temple Knight",80,"player",33,1.13,1.12,1.1,"Sword",0,80,379,"S","bu",296,1.085,1.04,80.4,545,1.08,556.3,4,-8,84.3,0,1.04,0,1.3225,0,293,1.1,599,true,3,0.05,0),
new Array("lv80 Hawkeye",80,"player",35,1.15,1.48,1.05,"Bow",-3.75,120,293,"S","bu",611,1.085,1.0816,998.6,461,1,79.6,4,12,88.1,0.2,1.13568,0,1.3225,56,0,1,0,false,0,0.05,1500),
new Array("lv80 Prophet",80,"player",21,1.01,0.63,1.2,"Blunt",4.75,40,379,"S","bu",296,1.45,1.04,79.4,319,1.08,96.6,4,-8,0,0,1.04,0,1.3225,0,293,1,0,false,1,0.05,0),
new Array("clone"),
0)

//Enemy Stats
var enemy = + d.gI("ENE").value
if (enemy!=11) {
//Enemy Base Stats
	var ELVL=TARGET[enemy][1]
	var ELVLMOD=(ELVL+89)/100
	var targettype=TARGET[enemy][2]
	var EDEX=TARGET[enemy][3]
	var EDEXMOD=TARGET[enemy][4]
	var ESTRMOD=TARGET[enemy][5]
//Enemy Weapon
	var Eranddmg=TARGET[enemy][6]
	var EWpnType=TARGET[enemy][7]
	var EWpnAcc=TARGET[enemy][8]
	var EWpnCrt=TARGET[enemy][9]
	var EWpnSpd=TARGET[enemy][10]
	var Eweapongrade=TARGET[enemy][11]
	var Eweapon_sa=TARGET[enemy][12]
	var Ebowdelay=TARGET[enemy][34]
//Enemy P.Atk.
	var EWpnPATK=TARGET[enemy][13]
	var EMasteryPATK=TARGET[enemy][14]
	var EBuffPATK=TARGET[enemy][15]
	var EAddPATK=TARGET[enemy][16]
//Enemy P.Def.
	var Eapdef=TARGET[enemy][17]
	var EBuffPDEF=TARGET[enemy][18]
	var EAddPDEF=TARGET[enemy][19]
//Enemy Accuracy
	var EBuffACC=TARGET[enemy][20]
//Enemy Evasion
	var EBuffEVA=TARGET[enemy][21]
//Enemy Critical
	var Ebasecritical=EWpnCrt*EDEXMOD
	var EAddCRIT=TARGET[enemy][22]
	var Esubcritical=Ebasecritical*(TARGET[enemy][23])
//Enemy Atk. Spd.
	var EBuffASPD=TARGET[enemy][24]
	var EAddASPD=TARGET[enemy][25]
//Enemy Critical Damage
	var EBuffCRITDMG=TARGET[enemy][26]
	var EAddCRITDMG=TARGET[enemy][27]
//Enemy Reflect Damage
	var Ebuffrd=TARGET[enemy][33]
	d.gI("EBUFFS").disabled=false
//Enemy Buffs
	var EBuffShieldBlockRate=1
	var EBuffSHIELDPDEF=TARGET[enemy][29]
	var ebuffs=d.gI("EBUFFS").value
	if (ebuffs=="1" && enemy==2)
		{EBuffPATK=EBuffPATK*1.12;EBuffPDEF=EBuffPDEF*1.12;}
	if (ebuffs=="1" && (enemy==5||enemy==8))
		{EBuffPATK=EBuffPATK*1.12;EBuffPDEF=EBuffPDEF*1.12;}
	if (enemy==3)
		{EBuffASPD=EBuffASPD*1.08}
	if (enemy==6||enemy==9)
		{EBuffASPD=EBuffASPD*1.12}
	if (ebuffs=="1" && enemy==4)
		{EBuffPATK=EBuffPATK*1.15*1.05;EBuffPDEF=EBuffPDEF*1.0925;EBuffACC=EBuffACC+2;EBuffEVA=EBuffEVA-2;Esubcritical=Esubcritical+Ebasecritical*0.2;EBuffASPD=EBuffASPD*1.05;EBuffShieldBlockRate=EBuffShieldBlockRate*1.3;EBuffCRITDMG=EBuffCRITDMG*1.3}
	if (ebuffs=="1" && (enemy==7||enemy==10)||(ebuffs>=2 && ebuffs<=6 && enemy!=2 && enemy!=5 && enemy!=8))
		{EBuffPATK=EBuffPATK*1.242;EBuffPDEF=EBuffPDEF*1.058;EBuffACC=EBuffACC+4;EBuffEVA=EBuffEVA-4;Esubcritical=Esubcritical+Ebasecritical*0.3;EBuffASPD=EBuffASPD*1.4364;EBuffShieldBlockRate=EBuffShieldBlockRate*1.5;EBuffCRITDMG=EBuffCRITDMG*1.35}
	if ((ebuffs>=2 && ebuffs<=6 && (enemy==2||enemy==5||enemy==8)))
		{EBuffPATK=EBuffPATK*1.15;EBuffPDEF=EBuffPDEF*1.15;EBuffACC=EBuffACC+4;Esubcritical=Esubcritical+Ebasecritical*0.3;EBuffASPD=EBuffASPD*1.33;EBuffShieldBlockRate=EBuffShieldBlockRate*1.5;EBuffCRITDMG=EBuffCRITDMG*1.35}
	if (ebuffs=="3"||ebuffs=="5"||ebuffs=="6")
		{EBuffPATK=EBuffPATK*1.12;EBuffASPD=EBuffASPD*1.15;EBuffCRITDMG=EBuffCRITDMG*1.35}
	if (ebuffs=="4"||ebuffs=="5"||ebuffs=="6")
		{EBuffPDEF=EBuffPDEF*1.25;Esubcritical=Esubcritical+Ebasecritical}
	if (ebuffs=="6")
		{EBuffPATK=EBuffPATK*1.1*1.1;EBuffPDEF=EBuffPDEF*1.2;EBuffACC=EBuffACC+8;EBuffEVA=EBuffEVA+7;Esubcritical=Esubcritical+Ebasecritical*0.5;EBuffASPD=EBuffASPD*1.2;EBuffShieldBlockRate=EBuffShieldBlockRate/1.5*1.8;EBuffCRITDMG=EBuffCRITDMG*1.25*1.2;EBuffSHIELDPDEF=EBuffSHIELDPDEF*2;Ebuffrd=Ebuffrd+0.4}
//Enemy Debuffs
	if (d.gI("EDEPC").checked==true)
		{var depatk=d.gI("EDEP").value;EBuffPATK=EBuffPATK*WEAKNESS[depatk]}
	if (d.gI("EDEDC").checked==true)
		{var depdef=d.gI("EDED").value;EBuffPDEF=EBuffPDEF*HEX[depdef]}
	if (d.gI("EBLKSC").checked==true && ((ebuffs=="1" && enemy==2)||(ebuffs=="1" && (enemy==5||enemy==8))))
		{EBuffPDEF=(EBuffPDEF/1.12)*0.9}
	else if (d.gI("EBLKSC").checked==true && ((ebuffs=="1" && enemy==4)||(ebuffs=="1" && (enemy==7||enemy==10)||(ebuffs>=2 && ebuffs<=6 && enemy!=2 && enemy!=5 && enemy!=8))))
		{EBuffPDEF=0.90*EBuffPDEF}
	else if (d.gI("EBLKSC").checked==true)
		{EBuffPDEF=0.90*EBuffPDEF}
	if (d.gI("EDEAC").checked==true)
		{var bu=d.gI("EDEA").value;EBuffACC=EBuffACC-DEACC[bu]}
	if (d.gI("ESBBC").checked==true)
		{var sandbomb=d.gI("ESBB").value;EBuffACC=EBuffACC+SANDBOMB[sandbomb]}
	if (d.gI("ETRBC").checked==true)
		{var tribunal=d.gI("ETRB").value;Esubcritical=Esubcritical+(Ebasecritical*TRIBUNAL[tribunal])}
	if (d.gI("EDENC").checked==true)
		{var bu=d.gI("EDEN").value;EBuffASPD=EBuffASPD*DEASPD[bu]}
	if (d.gI("EJDGC").checked==true)
		{var iv=d.gI("EJDG").value;EBuffCRITDMG=EBuffCRITDMG*JUDGMENT[iv]}
	if (d.gI("EARCRC").checked==true)
		{EBuffPDEF=0.70*EBuffPDEF}
	if (d.gI("ECBYC").checked==true)
		{EBuffEVA=EBuffEVA-6}
	if (d.gI("ECDMC").checked==true)
		{EBuffPATK=0.83*EBuffPATK}
	if (d.gI("ECSHC").checked==true)
		{var bu=d.gI("ECSH").value;EBuffPDEF=CURSEOFSHADE[bu]*EBuffPDEF}
	if (d.gI("EDBDC").checked==true)
		{var bu=d.gI("EDBD").value;EBuffPATK=EBuffPATK*DEMONICBD[bu]}
	if (d.gI("EFVC").checked==true)
		{EBuffASPD=EBuffASPD*0.7}
	if (d.gI("EHEEC").checked==true) 
		{var bu=d.gI("HEE").value;EBuffPDEF=EBuffPDEF*0.5;EBuffEVA=EBuffEVA-16;EBuffShieldBlockRate=EBuffShieldBlockRate*0.5}
	if (d.gI("ECHOLC").checked==true)
		{var bu=d.gI("ECHOL").value;EBuffACC=EBuffACC+HSCHOLACC[bu];EBuffEVA=EBuffEVA+HSCHOLEVA[bu]}
	if (d.gI("EIVC").checked==true)
		{var iv=d.gI("EIV").value;EBuffASPD=EBuffASPD*0.9}
	if (d.gI("ELVORC").checked==true)
		{var bu=d.gI("ELVOR").value;EBuffACC=EBuffACC-6}
	if (d.gI("EPSYC").checked==true)
		{var psycho=d.gI("EPSY").value;EBuffASPD=EBuffASPD*PSYCHO[psycho]}
	if (d.gI("ESBC").checked==true)
		{var shockblast=d.gI("ESB").value;EBuffPDEF=0.70*EBuffPDEF}
	if (d.gI("EDERC").checked==true)
		{var despair=d.gI("EDER").value;EBuffACC=EBuffACC-6;Esubcritical=Esubcritical+(Ebasecritical*-0.3);EBuffASPD=EBuffASPD*0.8;EBuffCRITDMG=EBuffCRITDMG*0.7}
	if (d.gI("EWVC").checked==true)
		{var wv=d.gI("EWV").value;EBuffASPD=EBuffASPD*0.9}
//Enemy final stats
	var Ecombatpatk=EWpnPATK*ESTRMOD*ELVLMOD*EMasteryPATK*EBuffPATK+EAddPATK
	if (((Eweapongrade=="S"||Eweapongrade=="A") && Eweapon_sa!="no SA")||Eweapongrade=="H")
		{Ecombatpatk=Ecombatpatk*1.05}
	if (targettype=="player")
		{Ecombatpatk=Ecombatpatk*2}
	var Ecombatpdef=Eapdef*ELVLMOD*EBuffPDEF+EAddPDEF
	var EAccuracy=(Math.sqrt(EDEX)*6)+ELVL+EWpnAcc+EBuffACC
	var EEvasion=(Math.sqrt(EDEX)*6)+ELVL+EBuffEVA
	var Ecombatcritical=Ebasecritical+EAddCRIT+Esubcritical
	if (Ecombatcritical>500)
		{Ecombatcritical=500}
	var Ecombatatkspd=EWpnSpd*EDEXMOD*EBuffASPD+EAddASPD
//Enemy Shield stats
	var EShield=TARGET[enemy][28]
	var EAddSHIELDPDEF=TARGET[enemy][30]
	var Eshieldpdef=EShield*EBuffSHIELDPDEF+Ecombatpdef+EAddSHIELDPDEF
	var Eblock360=TARGET[enemy][31]
	var EBuffShieldBlockRate=EBuffShieldBlockRate*TARGET[enemy][32]
	var EShieldBlockRate=EBaseShieldBlockRate*EBuffShieldBlockRate*EDEXMOD
	if ((position==2||position==3) && block360==false)
		{EShieldBlockRate=0}
	if (EShieldBlockRate>=1)
		{EShieldBlockRate=1}
	var Eavgshieldpdef=Eshieldpdef*EShieldBlockRate+Ecombatpdef*(1-EShieldBlockRate)}
if (enemy==11)
	{var EWpnType=WpnType}

//Base HP/MP Calculation
if (JOB=="BB") {
	BaseHP=BIGBOOMHP[LVLVAR]*0.99375
	BaseMP=BIGBOOMMP[LVLVAR]
	WpnPATK=BIGBOOMPATK[LVLVAR]
	WpnMATK=BIGBOOMMATK[LVLVAR]
	apdef=BIGBOOMPDEF[LVLVAR]
	jmdef=BIGBOOMMDEF[LVLVAR]
	WpnType="normal"}
else if (JOB=="CO") {
	BaseHP=CORRUPTEDMANHP[LVLVAR]
	BaseMP=CORRUPTEDMANMP[LVLVAR]
	WpnPATK=CORRUPTEDMANPATK[LVLVAR]
	WpnMATK=CORRUPTEDMANMATK[LVLVAR]
	apdef=CORRUPTEDMANPDEF[LVLVAR]
	jmdef=CORRUPTEDMANMDEF[LVLVAR]
	WpnType="normal"}
else if (JOB=="CU") {
	BaseHP=CURSEDMANHP[LVLVAR]
	BaseMP=CURSEDMANMP[LVLVAR]
	WpnPATK=CURSEDMANPATK[LVLVAR]
	WpnMATK=CURSEDMANMATK[LVLVAR]
	apdef=CURSEDMANPDEF[LVLVAR]
	jmdef=CURSEDMANMDEF[LVLVAR]
	WpnType="CM"}
else if (JOB=="DP") {
	BaseHP=DARKPANTHERHP[LVLVAR]
	BaseMP=DARKPANTHERMP[LVLVAR]
	WpnPATK=DARKPANTHERPATK[LVLVAR]
	WpnMATK=DARKPANTHERMATK[LVLVAR]
	apdef=DARKPANTHERPDEF[LVLVAR]
	jmdef=DARKPANTHERMDEF[LVLVAR]
	WpnType="normal"}
else if (JOB=="KAI"||JOB=="MER") {
	BaseHP=KAITHECATHP[LVLVAR]
	BaseMP=KAITHECATMP[LVLVAR]
	WpnPATK=KAITHECATPATK[LVLVAR]
	WpnMATK=KAITHECATMATK[LVLVAR]*0.737*LVLMOD
	apdef=KAITHECATPDEF[LVLVAR]
	jmdef=KAITHECATMDEF[LVLVAR]
	WpnType="normal"}
else if (JOB=="SL") {
	BaseHP=KAITHECATHP[LVLVAR]*1.002
	BaseMP=KAITHECATMP[LVLVAR]
	WpnPATK=KAITHECATPATK[LVLVAR]*0.998
	WpnMATK=KAITHECATMATK[LVLVAR]*1.207
	apdef=KAITHECATPDEF[LVLVAR]
	jmdef=KAITHECATMDEF[LVLVAR]
	WpnType="normal"}
else if (JOB=="KAT"||JOB=="MEW"||JOB=="SH"||JOB=="SI"||JOB=="BOX"||JOB=="MIR") {
	BaseHP=KATTHECATHP[LVLVAR]
	BaseMP=KATTHECATMP[LVLVAR]
	WpnPATK=KATTHECATPATK[LVLVAR]
	WpnMATK=KATTHECATMATK[LVLVAR]
	apdef=KATTHECATPDEF[LVLVAR]
	jmdef=KATTHECATMDEF[LVLVAR]
	WpnType="normal"}
else if (JOB=="MG") {
	BaseHP=MECHANICGOLEMHP[LVLVAR]*0.99375
	BaseMP=MECHANICGOLEMMP[LVLVAR]
	WpnPATK=MECHANICGOLEMPATK[LVLVAR]
	WpnMATK=MECHANICGOLEMMATK[LVLVAR]
	apdef=MECHANICGOLEMPDEF[LVLVAR]
	jmdef=MECHANICGOLEMMDEF[LVLVAR]
	WpnType="normal"}
else if (JOB=="NS") {
	BaseHP=NIGHTSHADEHP[LVLVAR]*0.99372
	BaseMP=NIGHTSHADEMP[LVLVAR]
	WpnPATK=NIGHTSHADEPATK[LVLVAR]*0.6605*LVLMOD
	WpnMATK=NIGHTSHADEMATK[LVLVAR]
	apdef=NIGHTSHADEPDEF[LVLVAR]
	jmdef=NIGHTSHADEMDEF[LVLVAR]
	WpnType="normal"}
else if (JOB=="SER"||JOB=="QC") {
	BaseHP=NIGHTSHADEHP[LVLVAR]*0.99372*0.5
	BaseMP=NIGHTSHADEMP[LVLVAR]
	WpnPATK=NIGHTSHADEPATK[LVLVAR]*0.6605*LVLMOD
	WpnMATK=NIGHTSHADEMATK[LVLVAR]
	apdef=NIGHTSHADEPDEF[LVLVAR]
	jmdef=NIGHTSHADEMDEF[LVLVAR]
	WpnType="normal"}
else if (JOB=="RM") {
	BaseHP=REANIMATEDMANHP[LVLVAR]
	BaseMP=REANIMATEDMANMP[LVLVAR]
	WpnPATK=REANIMATEDMANPATK[LVLVAR]
	WpnMATK=REANIMATEDMANMATK[LVLVAR]
	apdef=REANIMATEDMANPDEF[LVLVAR]
	jmdef=REANIMATEDMANMDEF[LVLVAR]
	WpnType="normal"}
else if (JOB=="SG") {
	BaseHP=SIEGEGOLEMHP[LVLVAR]
	BaseMP=SIEGEGOLEMMP[LVLVAR]
	WpnPATK=SIEGEGOLEMPATK[LVLVAR]
	WpnMATK=SIEGEGOLEMMATK[LVLVAR]
	apdef=SIEGEGOLEMPDEF[LVLVAR]
	jmdef=SIEGEGOLEMMDEF[LVLVAR]
	WpnType="SG"}
else if (JOB=="SP"||JOB=="FK"||JOB=="MU") {
	BaseHP=SPECTRALLORDHP[LVLVAR]
	BaseMP=SPECTRALLORDMP[LVLVAR]
	WpnPATK=SPECTRALLORDPATK[LVLVAR]
	WpnMATK=SPECTRALLORDMATK[LVLVAR]
	apdef=SPECTRALLORDPDEF[LVLVAR]
	jmdef=SPECTRALLORDMDEF[LVLVAR]
	WpnType="normal"}
else if (JOB=="SW") {
	BaseHP=SWOOPCANNONHP[LVLVAR]
	BaseMP=SWOOPCANNONMP[LVLVAR]
	WpnPATK=SWOOPCANNONPATK[LVLVAR]
	WpnMATK=SWOOPCANNONMATK[LVLVAR]
	apdef=SWOOPCANNONPDEF[LVLVAR]
	jmdef=SWOOPCANNONMDEF[LVLVAR]
	WpnType="SG"}
else if (JOB=="WHC") {
	BaseHP=WILDHOGCANNONHP[LVLVAR]
	BaseMP=WILDHOGCANNONMP[LVLVAR]
	WpnPATK=WILDHOGCANNONPATK[LVLVAR]
	WpnMATK=WILDHOGCANNONMATK[LVLVAR]
	apdef=WILDHOGCANNONPDEF[LVLVAR]
	jmdef=WILDHOGCANNONMDEF[LVLVAR]
	WpnType="normal"}

if (JOB=="BB"||JOB=="CO"||JOB=="MEW"||JOB=="BOX"||JOB=="MIR"||JOB=="SER"||JOB=="SH"||JOB=="SI"||JOB=="RM"||JOB=="CU") {
	BaseRun=140}
else if (JOB=="WHC") {
	BaseRun=10}
else if (JOB=="SG"||JOB=="SW") {
	BaseRun=40}
else if (JOB=="KAT") {
	BaseRun=120}
else if (JOB=="MG"||JOB=="DP") {
	BaseRun=150}
else if (JOB=="CU") {
	BaseRun=160}
else if (JOB=="NS") {
	BaseRun=170}
else if (JOB=="QC"||JOB=="KAI"||JOB=="SL"||JOB=="SP"||JOB=="FK"||JOB=="MU") {
	BaseRun=180}
else if (JOB=="MER") {
	BuffEVA=BuffEVA+10
	BaseRun=180}

//Weapon Types
if (WpnType=="normal")
	{WpnSpd=253;WpnAcc=4.75;critical=40}
else if (WpnType=="CM")
	{WpnSpd=253;WpnAcc=4.75;critical=80}
else if (WpnType=="SG")
	{WpnSpd=150;WpnAcc=4.75;critical=40}

//Buffs
//Shadow's VR
	if (JOB=="SH")
		{BuffVR=BuffVR+0.15}
//Kai's Reflect Damage
	if (JOB=="KAI")
		{BuffRD=BuffRD+0.2}
//Accuracy Debuffs
	if (d.gI("DEACCCHECK").checked==true)
		{var deacc=d.gI("DEACC").value;BuffACC=BuffACC-DEACC[deacc]}
//Acumen
	if (d.gI("ACUCHECK").checked==true)
		{var acu=d.gI("ACU").value;BuffCAST=BuffCAST*ACUMEN[acu]}
//Agility
	if (d.gI("AGICHECK").checked==true)
		{var agi=d.gI("AGI").value;BuffEVA=BuffEVA+AGILITY[agi]}
//Armor Crush
	if (d.gI("ACCHECK").checked==true)
		{var armorcrush=d.gI("ARCR").value;BuffPDEF=0.70*BuffPDEF;BuffMDEF=0.70*BuffMDEF}
//Attack Speed Debuffs
	if (d.gI("DEASPDCHECK").checked==true)
		{var deaspd=d.gI("DEASPD").value;BuffASPD=BuffASPD*DEASPD[deaspd]}
//Berserker Spirit
	if (d.gI("ZERKCHECK").checked==true)
		{var zerk=d.gI("ZERK").value;BuffPATK=BuffPATK*ZERK[zerk];BuffPDEF=BuffPDEF*ZERKPDEF[zerk];BuffMATK=BuffMATK*ZERKMATK[zerk];BuffMDEF=BuffMDEF*ZERKMDEF[zerk];BuffEVA=BuffEVA+ZERKEVA[zerk];AddSPEED=AddSPEED+ZERKSPEED[zerk];BuffASPD=BuffASPD*ZERK[zerk];BuffCAST=BuffCAST*ZERK[zerk]}
//Bless the Body
	if (d.gI("BTBCHECK").checked==true)
		{var btb=d.gI("BTB").value
		BuffHP=BuffHP*BTB[btb]}
//Bless the Soul
	if (d.gI("BTSCHECK").checked==true)
		{var bts=d.gI("BTS").value;BuffMP=BuffMP*BTS[bts]}
//Blessing of Seraphim
	if (d.gI("SERC").checked==true)
		{var bu=d.gI("SER").value;BuffMPR=BuffMPR*SERAPHIM[bu]}
//Block Shield
	if (d.gI("BLKSCHECK").checked==true)
		{var blockshield=d.gI("BLKS").value;BuffPDEF=0.90*BuffPDEF}
//Block Wind Walk
	if (d.gI("BWWCHECK").checked==true)
		{var bww=d.gI("BWW").value;BuffSPEED=BuffSPEED*0.9}
//Curse Gloom
	if (d.gI("GLOOMCHECK").checked==true)
		{var gloom=d.gI("GLOOM").value;BuffMDEF=0.77*BuffMDEF}
//Curse of Abyss
	if (d.gI("COABYSSCHECK").checked==true)
		{var coabyss=d.gI("COABYSS").value;BuffMATK=0.70*BuffMATK;BuffEVA=BuffEVA-6;BuffSPEED=BuffSPEED*0.9;BuffCAST=BuffCAST*0.8}
//Curse of Doom
	if (d.gI("CODOOMCHECK").checked==true)
		{var codoom=d.gI("CODOOM").value;BuffPATK=0.83*BuffPATK}
//Curse of Shade
	if (d.gI("COSHADECHECK").checked==true)
		{var coshade=d.gI("COSHADE").value;BuffPDEF=CURSEOFSHADE[coshade]*BuffPDEF;BuffMDEF=CURSEOFSHADE[coshade]*BuffMDEF}
//Dance of Concentration
	if (d.gI("DCONCHECK").checked==true)
		{var dcon=d.gI("DCON").value;BuffCAST=BuffCAST*1.3}
//Dance of Fire
	if (d.gI("DOFC").checked==true)
		{BuffCRITDMG=BuffCRITDMG*1.35}
//Dance of Fury
	if (d.gI("DFURYCHECK").checked==true)
		{var dfury=d.gI("DFURY").value;BuffASPD=BuffASPD*1.15}
//Dance of Inspiration
	if (d.gI("DOICHECK").checked==true)
		{var doi=d.gI("DOI").value;BuffACC=BuffACC+4}
//Dance of Mystic
	if (d.gI("DOMYCHECK").checked==true)
		{var domy=d.gI("DOMY").value;BuffMATK=1.2*BuffMATK}
//Dance of Shadow
	if (d.gI("DSHCHECK").checked==true)
		{var dsh=d.gI("DSH").value;BuffSPEED=BuffSPEED*0.5}
//Dance of Vampire
	if (d.gI("DOVC").checked==true)
		{BuffVR=BuffVR+0.08}
//Dance of Warrior
	if (d.gI("DOWACHECK").checked==true)
		{var dowa=d.gI("DOWA").value;BuffPATK=1.12*BuffPATK}
//Death Whisper
	if (d.gI("DEWC").checked==true)
		{var bu=d.gI("DEW").value;BuffCRITDMG=BuffCRITDMG*DEATHWHISPER[bu]}
//Demonic Blade Dance
	if (d.gI("DEMONICBDCHECK").checked==true)
		{var demonicbd=d.gI("DEMONICBD").value;BuffPATK=BuffPATK*DEMONICBD[demonicbd];BuffMATK=BuffMATK*DEMONICBD[demonicbd]}
//Empower
	if (d.gI("EMPCHECK").checked==true)
		{var emp=d.gI("EMP").value;BuffMATK=BuffMATK*EMPOWER[emp]}
//Fire Vortex
	if (d.gI("FVCHECK").checked==true)
		{var fv=d.gI("FV").value;BuffSPEED=BuffSPEED*0.9;BuffASPD=BuffASPD*0.7;BuffCAST=BuffCAST*0.9}
//Focus
	if (d.gI("FCSCHECK").checked==true)
		{var fcs=d.gI("FCS").value;AddCRIT=AddCRIT+(critical*0.25)}
//Greater Might
	if (d.gI("GREATERMIGHTCHECK").checked==true)
		{var greatermight=d.gI("GREATERMIGHT").value;BuffPATK=BuffPATK*GREATERMIGHT[greatermight]}
//Greater Shield
	if (d.gI("GREATERSHIELDCHECK").checked==true)
		{var greatershield=d.gI("GREATERSHIELD").value;BuffPDEF=BuffPDEF*GREATERSHIELD[greatershield]}
//Guidance
	if (d.gI("GUIDCHECK").checked==true)
		{var guid=d.gI("GUID").value;BuffACC=BuffACC+GUIDANCE[guid]}
//Haste
	if (d.gI("HASTECHECK").checked==true)
		{var haste=d.gI("HASTE").value;BuffASPD=BuffASPD*HASTE[haste]}
//Hot Springs Cholera
	if (d.gI("CHOLCHECK").checked==true)
		{var chol=d.gI("CHOL").value;BuffACC=BuffACC+HSCHOLACC[chol];BuffEVA=BuffEVA+HSCHOLEVA[chol]}
//Hot Springs Malaria
	if (d.gI("MALCHECK").checked==true)
		{var mal=d.gI("MAL").value;BuffCAST=BuffCAST*HSMALARIA[mal]}
//Ice Vortex
	if (d.gI("IVCHECK").checked==true)
		{var iv=d.gI("IV").value;BuffSPEED=BuffSPEED*0.7;BuffASPD=BuffASPD*0.9;BuffCAST=BuffCAST*0.9}
//Light Vortex
	if (d.gI("LVORCHECK").checked==true)
		{var lvor=d.gI("LVOR").value;BuffACC=BuffACC-6}
//Magic Barrier
	if (d.gI("MBCHECK").checked==true)
		{var mb=d.gI("MB").value;BuffMDEF=BuffMDEF*MAGICBARRIER[mb]}
//Might
	if (d.gI("MIGHTCHECK").checked==true)
		{var might=d.gI("MIGHT").value;BuffPATK=BuffPATK*MIGHT[might]}
//P.Atk. Debuffs
	if (d.gI("DEPATKCHECK").checked==true)
		{var depatk=d.gI("DEPATK").value;BuffPATK=BuffPATK*WEAKNESS[depatk]}
//P.Def. Debuffs
	if (d.gI("DEPDEFCHECK").checked==true)
		{var depdef=d.gI("DEPDEF").value;BuffPDEF=BuffPDEF*HEX[depdef]}
//Prophecies
	var proph=d.gI("PROPH").value
	if (d.gI("PROPHCHECK").checked==true)
		{BuffHP=BuffHP*PROPHECYHP[proph];
		BuffMP=BuffMP*PROPHECYMP[proph];
		BuffPATK=BuffPATK*PROPHECYPATK[proph];
		BuffMATK=BuffMATK*PROPHECYMATK[proph];
		BuffPDEF=BuffPDEF*PROPHECYPDEF[proph];
		BuffMDEF=BuffMDEF*PROPHECYMDEF[proph];
		BuffACC=BuffACC+PROPHECYACC[proph];
		BuffEVA=BuffEVA+PROPHECYEVA[proph];
		AddCRIT=AddCRIT+(critical*PROPHECYCRIT[proph]);
		BuffSPEED=BuffSPEED*PROPHECYSPEED[proph];
		BuffASPD=BuffASPD*PROPHECYASPD[proph];
		BuffCAST=BuffCAST*PROPHECYCAST[proph];
		BuffHPR=BuffHPR*PROPHECYHPR[proph];
		BuffMPR=BuffMPR*PROPHECYMPR[proph];
		BuffCRITDMG=BuffCRITDMG*PROPHECYCRITDMG[proph]
		BuffVR=BuffVR+PROPHECYVR[proph]}
	if (d.gI("PROPHCHECK").checked==true && proph==4 && position==3)
		{BuffCRITDMG=BuffCRITDMG*1.2;BuffCOMBATCRIT=BuffCOMBATCRIT*1.2}
//Psycho Symphony
	if (d.gI("PSYCHOCHECK").checked==true)
		{var psycho=d.gI("PSYCHO").value;
		BuffSPEED=BuffSPEED*PSYCHO[psycho];
		BuffASPD=BuffASPD*PSYCHO[psycho];
		BuffCAST=BuffCAST*PSYCHO[psycho];}
//Regeneration
	if (d.gI("RGNC").checked==true)
		{var regeneration=d.gI("RGN").value;BuffHPR=BuffHPR*REGENERATION[regeneration]}
//Queen Buffs
	var queen=d.gI("QUEEN").value
	if ((queen=="1"||queen=="2"||queen=="3") && d.gI("QUEENCHECK").checked==true)
		{BuffPATK=CATBUFFS[queen]*BuffPATK;BuffACC=BuffACC+2}
	else if ((queen=="4"||queen=="5"||queen=="6") && d.gI("QUEENCHECK").checked==true)
		{AddCRIT=AddCRIT+(critical*0.25)}
//Sand Bomb
	if (d.gI("SANDBOMBCHECK").checked==true)
		{var sandbomb=d.gI("SANDBOMB").value;BuffACC=BuffACC+SANDBOMB[sandbomb]}
//Seal of Despair
	if (d.gI("DESPAIRCHECK").checked==true)
		{var despair=d.gI("DESPAIR").value;BuffMDEF=0.70*BuffMDEF;BuffACC=BuffACC-6;AddCRIT=AddCRIT-(critical*0.25);BuffSPEED=BuffSPEED*0.8;BuffASPD=BuffASPD*0.8}
//Shield
	if (d.gI("SHIELDCHECK").checked==true)
		{var shield=d.gI("SHIELD").value;BuffPDEF=BuffPDEF*SHIELD[shield]}
//Shock Blast
	if (d.gI("SBCHECK").checked==true)
		{var shockblast=d.gI("SB").value;BuffPDEF=0.70*BuffPDEF;BuffMDEF=0.70*BuffMDEF}
//Skin
	if (d.gI("SKNC").checked==true)
		{var bu=d.gI("SKN").value;BuffRD=BuffRD+SKIN[bu]}
//Slow
	if (d.gI("DESPEEDCHECK").checked==true)
		{var despeed=d.gI("DESPEED").value;BuffSPEED=BuffSPEED*SLOW[despeed]}
//Song of Earth
	if (d.gI("SOECHECK").checked==true)
		{var soea=d.gI("SOEA").value;BuffPDEF=1.25*BuffPDEF}
//Song of Hunter
	if (d.gI("SOHCHECK").checked==true)
		{var soh=d.gI("SOH").value;AddCRIT=AddCRIT+critical*1.25}
//Song of Life
	if (d.gI("SOLC").checked==true)
		{BuffHPR=BuffHPR*1.2}
//Song of Meditation
	if (d.gI("SOMC").checked==true)
		{BuffMPR=BuffMPR*1.2}
//Song of Vengeance
	if (d.gI("SOVC").checked==true)
		{BuffRD=BuffRD+0.2}
//Song of Vitality
	if (d.gI("VITCHECK").checked==true)
		{var vit=d.gI("VIT").value;BuffHP=1.3*BuffHP}
//Song of Warding
	if (d.gI("WARDCHECK").checked==true)
		{var ward=d.gI("WARD").value;BuffMDEF=1.3*BuffMDEF}
//Song of Water
	if (d.gI("SWATCHECK").checked==true)
		{var swat=d.gI("SWAT").value;BuffEVA=BuffEVA+3}
//Song of Wind
	if (d.gI("SWINDCHECK").checked==true)
		{var swind=d.gI("SWIND").value;AddSPEED=AddSPEED+20}
//Tribunal
	var tribunal=d.gI("TRIBUNAL").value
	if (d.gI("TRIBUNALCHECK").checked==true)
		{var tribunal=d.gI("TRIBUNAL").value;
		AddCRIT=AddCRIT+(critical*0.25)}
//Ultimate Defense
	if (d.gI("UDCHECK").checked==true)
		{var ud=d.gI("UD").value
		AddPDEF=AddPDEF+UDPDEF[ud]
		AddMDEF=AddMDEF+UDMDEF[ud]}
//Vampiric Rage
	if (d.gI("VRAC").checked==true)
		{var bu=d.gI("VRA").value;BuffVR=BuffVR+VAMPIRICRAGE[bu]}
//Wind Vortex
	if (d.gI("WVCHECK").checked==true)
		{var wv=d.gI("WV").value;BuffSPEED=BuffSPEED*0.9;BuffASPD=BuffASPD*0.9;BuffCAST=BuffCAST*0.7}
//Wind Walk
	if (d.gI("WWCHECK").checked==true)
		{var ww=d.gI("WW").value;AddSPEED=AddSPEED+WINDWALK[ww]}

//Lv
d.gI("LVL").innerHTML=(LVL)

//HP calculation
var hp=BaseHP*CONMOD*BuffHP+AddHP
if (hp<1)
	{hp=1}
var hp2=Math.floor(hp)
d.gI("HP").innerHTML=(hp2)

//MP calculation
var mp=BaseMP*MENMOD*BuffMP+AddMP
var mp2=Math.floor(mp)
d.gI("MP").innerHTML=mp2

//P.Atk. calculation
var patk=WpnPATK*STRMOD*LVLMOD*BuffPATK+AddPATK
var patk2=Math.floor(patk)
var combatpatk=patk
d.gI("PATK").innerHTML=patk2

//M.Atk. calculation
var matk=WpnMATK*(INTMOD*INTMOD)*(LVLMOD*LVLMOD)*BuffMATK+AddMATK
var matk2=Math.floor(matk)
var combatmatk=matk
d.gI("MATK").innerHTML=matk2

//P.Def. calculation
pdef=apdef*LVLMOD*BuffPDEF+AddPDEF
pdef2=Math.floor(pdef)
var combatpdef=pdef
d.gI("PDEF").innerHTML=pdef2

//M.Def. calculation
mdef=jmdef*LVLMOD*MENMOD*BuffMDEF+AddMDEF
mdef2=Math.floor(mdef)
var combatmdef=mdef
d.gI("MDEF").innerHTML=mdef2

//Accuracy Calculation
var Accuracy=(Math.sqrt(DEX)*6)+LVL+WpnAcc+BuffACC
var Accuracy2=Math.floor(Accuracy)
var combataccuracy=Accuracy
d.gI("ACCURACY").innerHTML=Accuracy2

//Evasion Calculation
var Evasion=(Math.sqrt(DEX)*6)+LVL+BuffEVA
var Evasion2=Math.floor(Evasion)
var combatevasion=Evasion
d.gI("EVASION").innerHTML=Evasion2

//Critical calculation
var critical=critical+AddCRIT
if (critical > 500)
	{critical=500}
var critical2=Math.floor(critical)
combatcritical=critical
d.gI("CRITICAL").innerHTML=critical2

//Speed calculation
var Speed=BaseRun*DEXMOD*BuffSPEED+AddSPEED
var Speed2=Math.floor(Speed)
var Speed60=BaseRun*DEXMOD*BuffSPEED*BuffSPEED60+AddSPEED+AddSPEED60
var Speed602=Math.floor(Speed60)
var Speed30=BaseRun*DEXMOD*BuffSPEED*BuffSPEED60*BuffSPEED30+AddSPEED+AddSPEED60+AddSPEED30
var Speed302=Math.floor(Speed30)
var combatspeed=Speed
d.gI("SPEED").innerHTML=Speed2

//Atk. Spd. calculation
var atkspd=WpnSpd*DEXMOD*BuffASPD+AddASPD
var atkspd2=Math.floor(atkspd)
var combatatkspd=atkspd
d.gI("ATKSPD").innerHTML=atkspd2

//Casting Spd. calculation
var castingspd=333*BuffCAST+AddCAST
var castingspd2=Math.floor(castingspd)
d.gI("CASTINGSPD").innerHTML=castingspd2

var timeset2=new Date();
var timer=timeset2.getTime() - timeset1.getTime();
var timer2=timer/1000

//HP Regen, CP Regen, MP Regen
var basehpregen
var basempregen
if (LVL>0 && LVL<11)
	{basehpregen=1.95+(LVL/20);basempregen=0.9}
if (LVL>10)
	{basehpregen=1.4+(LVL/10)}
if (LVL>10 && LVL<21)
	{basempregen=1.2}
if (LVL>20 && LVL<31)
	{basempregen=1.5}
if (LVL>30 && LVL<41)
	{basempregen=1.8}
if (LVL>40 && LVL<51)
	{basempregen=2.1}
if (LVL>50 && LVL<61)
	{basempregen=2.4}
if (LVL>60 && LVL<71)
	{basempregen=2.7}
if (LVL>70 && LVL<81)
	{basempregen=3}
var hpregen=(basehpregen*CONMOD*LVLMOD*BuffHPR*1.1+AddHPR)*BuffHPR2
var hpregen2=Math.floor(hpregen*10)/10
d.gI("HPREGEN").innerHTML=hpregen2
var mpregen=(basempregen*MENMOD*LVLMOD*BuffMPR*1.1+AddMPR)*BuffMPR2+AddMPR2
var mpregen2=Math.floor(mpregen*10)/10
d.gI("MPREGEN").innerHTML=mpregen2

if (enemy==11)
	{var ELVL=LVL
	var ELVLMOD=LVLMOD
	var EDEXMOD=DEXMOD
	var targettype="player"
	var Eranddmg=randdmg
	var EWpnCrt=WpnCrt
	var Eweapongrade="N"
	var Eweapon_sa="no SA"
	var EBuffCRITDMG=BuffCRITDMG
	var EAddCRITDMG=AddCRITDMG
	var Ecombatpatk=combatpatk*2
	if (((Eweapongrade=="S"||Eweapongrade=="A") && Eweapon_sa!="no SA")||Eweapongrade=="H")
		{Ecombatpatk=Ecombatpatk*1.05}
	var Ecombatpdef=combatpdef
	var EAccuracy=Accuracy
	var EEvasion=Evasion
	var Ecombatcritical=combatcritical
	var Ecombatatkspd=combatatkspd
//Enemy Shield stats
	var EShield=Shield
	var EBuffSHIELDPDEF=1
	var EAddSHIELDPDEF=0
	var Eshieldpdef=EShield*EBuffSHIELDPDEF+Ecombatpdef+EAddSHIELDPDEF
	var Eblock360=block360
	var EBuffShieldBlockRate=1
	var EShieldBlockRate=0.2*EBuffShieldBlockRate*EDEXMOD
	if ((position==2||position==3) && block360==false)
		{EShieldBlockRate=0}
	if (EShieldBlockRate>=1)
		{EShieldBlockRate=1}
	var Eavgshieldpdef=Eshieldpdef*EShieldBlockRate+Ecombatpdef*(1-EShieldBlockRate)
//Enemy Reflect Damage
	var Ebuffrd=(BuffRD)
	d.gI("EBUFFS").disabled=true}

////////////////////Damage Calculations
if (d.gI("SS").checked==true)
	{combatpatk=combatpatk*2}

if ((position==2||position==3) && Eblock360==false)
	{EShieldBlockRate=0}

//Base Damage
var basedmg=(combatpatk*70/Ecombatpdef)*BuffDAMAGE
var Ebasedmg=(Ecombatpatk*70/combatpdef)*EBuffDAMAGE

//Normal hit Min/Max Damage
if (position>=1 && position <=3)
	{var mindmg=(basedmg)/randdmg
	var mindmg2=Math.floor(mindmg)
	if (mindmg2==0) {mindmg2=1}
	var maxdmg=(basedmg)*randdmg
	var maxdmg2=Math.floor(maxdmg)
	if (maxdmg2==0) {maxdmg2=1}
	d.gI("DMGRNG").innerHTML=(mindmg2+"-"+maxdmg2)}
else
	{var mindmg2=0;var maxdmg2=0;var mindmg=0;var maxdmg=0
	d.gI("DMGRNG").innerHTML=("-")}

if (position==1||position==4||position==5)
	{var Emindmg=(Ebasedmg)/randdmg
	var Emindmg2=Math.floor(Emindmg)
	if (Emindmg2==0) {Emindmg2=1}
	var Emaxdmg=(Ebasedmg)*randdmg
	var Emaxdmg2=Math.floor(Emaxdmg)
	if (Emaxdmg2==0) {Emaxdmg2=1}
	d.gI("EDMGRNG").innerHTML=(Emindmg2+"-"+Emaxdmg2)}
else
	{var Emindmg2=0;var Emaxdmg2=0;var Emindmg=0;var Emaxdmg=0
	d.gI("EDMGRNG").innerHTML=("-")}

//Average Damage on Shield Blocks
if ((position==1 && EShieldBlockRate!=0)||((position==2||position==3) && Eblock360==true && EShieldBlockRate!=0))
	{var shieldblockdmg=(combatpatk*70/Eshieldpdef)*BuffDAMAGE
	var shieldblockdmg2=Math.floor(shieldblockdmg)
	if (shieldblockdmg2==0) {shieldblockdmg2=1}}
else
	{var shieldblockdmg2=0;var shieldblockdmg=0}
var Eshieldblockdmg2=0
var Eshieldblockdmg=0

//Shield Block Min/Max Damage
if ((position==1 && EShieldBlockRate!=0)||((position==2||position==3) && Eblock360==true && EShieldBlockRate!=0))
	{var shieldmindmg=(shieldblockdmg)/randdmg
	var shieldmindmg2=Math.floor(shieldmindmg)
	if (shieldmindmg2==0) {shieldmindmg2=1}
	var shieldmaxdmg=(shieldblockdmg)*randdmg
	var shieldmaxdmg2=Math.floor(shieldmaxdmg)
	if (shieldmaxdmg2==0) {shieldmaxdmg2=1}
	d.gI("SHDDMGRNG").innerHTML=(shieldmindmg2+"-"+shieldmaxdmg2)}
else
	{var shieldmindmg2=0;var shieldmaxdmg2=0;var shieldmindmg=0;var shieldmaxdmg=0
	d.gI("SHDDMGRNG").innerHTML=("-")}
var Eshieldmindmg2=0
var Eshieldmaxdmg2=0
var Eshieldmindmg=0
var Eshieldmaxdmg=0
d.gI("ESHIELDDMGRNG").innerHTML=("-")

//Critical hits
if (position==1)
	{var critchance=(combatcritical/10)*BuffCOMBATCRIT+AddCOMBATCRIT
	if (critchance>=100)
		{critchance=100}
	var critchance2=Math.floor(critchance*10)/10}
else if (position==2)
	{var critchance=(combatcritical/10)*1.2*BuffCOMBATCRIT+AddCOMBATCRIT
	if (critchance>=100)
		{critchance=100}
	var critchance2=Math.floor(critchance*10)/10}
else if (position==3)
	{var critchance=(combatcritical/10)*1.4*BuffCOMBATCRIT+AddCOMBATCRIT
	if (critchance>=100)
		{critchance=100}
	var critchance2=Math.floor(critchance*10)/10}
else
	{var critchance2=0;var critchance=0}
	d.gI("CRITCHANCE").innerHTML=(critchance2+"%")
if (position==1)
	{var Ecritchance=Ecombatcritical/10
	if (Ecritchance>=100)
		{Ecritchance=100}
	var Ecritchance2=Math.floor(Ecritchance*10)/10}
else if (position==4)
	{var Ecritchance=(Ecombatcritical/10)*1.2
	if (Ecritchance>=100)
		{Ecritchance=100}
	var Ecritchance2=Math.floor(Ecritchance*10)/10}
else if (position==5)
	{var Ecritchance=(Ecombatcritical/10)*1.4
	if (Ecritchance>=100)
		{Ecritchance=100}
	var Ecritchance2=Math.floor(Ecritchance*10)/10}
else
	{var Ecritchance2=0;var Ecritchance=0}
	d.gI("ECRITCHANCE").innerHTML=(Ecritchance2+"%")

var critdmg=((basedmg/BuffDAMAGE)*2*BuffCRITDMG+(AddCRITDMG*70/Ecombatpdef))*BuffDAMAGE
var sbcritdmg=((shieldblockdmg/BuffDAMAGE)*2*BuffCRITDMG+(AddCRITDMG*70/Eshieldpdef))*BuffDAMAGE
if (position>=1 && position <=3)
	{var mincritdmg=critdmg/randdmg
	var mincritdmg2=Math.floor(mincritdmg)
	if (mincritdmg2==0) {mincritdmg2=1}
	var maxcritdmg=critdmg*randdmg
	var maxcritdmg2=Math.floor(maxcritdmg)
	if (maxcritdmg2==0) {maxcritdmg2=1}
	d.gI("CRITDMG").innerHTML=(mincritdmg2+"-"+maxcritdmg2)}
else
	{var mincritdmg=0;var mincritdmg2=0;var maxcritdmg=0;var maxcritdmg2=0;
	d.gI("CRITDMG").innerHTML=("-")}
if ((position==1 && EShieldBlockRate!=0)||((position==2||position==3) && Eblock360==true && EShieldBlockRate!=0))
	{var minsbcritdmg=sbcritdmg/randdmg
	var minsbcritdmg2=Math.floor(minsbcritdmg)
	if (minsbcritdmg2==0) {minsbcritdmg2=1}
	var maxsbcritdmg=sbcritdmg*randdmg
	var maxsbcritdmg2=Math.floor(maxsbcritdmg)
	if (maxsbcritdmg2==0) {maxsbcritdmg2=1}
	d.gI("SBCRITDMG").innerHTML=(minsbcritdmg2+"-"+maxsbcritdmg2)}
else
	{var minsbcritdmg=0;var minsbcritdmg2=0;var maxsbcritdmg=0;var maxsbcritdmg2=0
	d.gI("SBCRITDMG").innerHTML=("-")}
if (position==1||position==4||position==5)
	{var Ecritdmg=Ebasedmg*2*EBuffCRITDMG+(EAddCRITDMG*70/combatpdef)
	var Emincritdmg=Ecritdmg/randdmg
	var Emincritdmg2=Math.floor(Emincritdmg)
	if (Emincritdmg2==0) {Emincritdmg2=1}
	var Emaxcritdmg=Ecritdmg*randdmg
	var Emaxcritdmg2=Math.floor(Emaxcritdmg)
	if (Emaxcritdmg2==0) {Emaxcritdmg2=1}
	d.gI("ECRITDMG").innerHTML=(Emincritdmg2+"-"+Emaxcritdmg2)}
else
	{var Ecritdmg=0;var Emincritdmg=0;var Emincritdmg2=0;var Emaxcritdmg=0;var Emaxcritdmg2=0
	d.gI("ECRITDMG").innerHTML=("-")}
var Esbcritdmg=0
var Eminsbcritdmg=0
var Eminsbcritdmg2=0
var Emaxsbcritdmg=0
var Emaxsbcritdmg2=0
d.gI("ESBCRITDMG").innerHTML=("-")

//Hits per second
if (position>=1 && position <=3)
	{var hitspersecond=combatatkspd/500
	var hitspersecond2=Math.floor(hitspersecond*100)/100
	d.gI("HITSPERSECOND").innerHTML=(hitspersecond2)}
else
	{var hitspersecond=0;var hitspersecond2=0;
	d.gI("HITSPERSECOND").innerHTML=("-")}
if ((position==1||position==4||position==5))
	{var Ehitspersecond=Ecombatatkspd/500
	var Ehitspersecond2=Math.floor(Ehitspersecond*100)/100
	d.gI("EHITSPERSECOND").innerHTML=(Ehitspersecond2)}
else
	{var Ehitspersecond=0;var Ehitspersecond2=0;
	d.gI("EHITSPERSECOND").innerHTML=("-")}

//Chance to hit
var hitratio=combataccuracy-EEvasion
if (hitratio<-24.5)
	{hitratio=0.275}
else if (hitratio<-20 && hitratio>=-24.5)
	{hitratio=0.25+((hitratio+25)*5/100)}
else if (hitratio<-15 && hitratio>=-20)
	{hitratio=0.50+((hitratio+20)*3/100)}
else if (hitratio<-10 && hitratio>=-15)
	{hitratio=0.65+((hitratio+15)*2/100)}
else if (hitratio<-0 && hitratio>=-10)
	{hitratio=0.75+((hitratio+10)*1.5/100)}
else if (hitratio<5 && hitratio>=0)
	{hitratio=0.905+(hitratio*1/100)}
else if (hitratio<10 && hitratio>=5)
	{hitratio=0.955+((hitratio-5)*0.5/100)}
else if (hitratio>10)
	{hitratio=0.98}
var Ehitratio=EAccuracy-combatevasion
if (Ehitratio<-24.5)
	{Ehitratio=0.275}
else if (Ehitratio<-20 && Ehitratio>=-24.5)
	{Ehitratio=0.25+((Ehitratio+25)*5/100)}
else if (Ehitratio<-15 && Ehitratio>=-20)
	{Ehitratio=0.50+((Ehitratio+20)*3/100)}
else if (Ehitratio<-10 && Ehitratio>=-15)
	{Ehitratio=0.65+((Ehitratio+15)*2/100)}
else if (Ehitratio<-0 && Ehitratio>=-10)
	{Ehitratio=0.75+((Ehitratio+10)*1.5/100)}
else if (Ehitratio<5 && Ehitratio>=0)
	{Ehitratio=0.905+(Ehitratio*1/100)}
else if (Ehitratio<10 && Ehitratio>=5)
	{Ehitratio=0.955+((Ehitratio-5)*0.5/100)}
else if (Ehitratio>10)
	{Ehitratio=0.98}
if (position==2)
	{hitratio=hitratio*1.1}
if (position==3)
	{hitratio=hitratio*1.2}
if (position==4)
	{Ehitratio=Ehitratio*1.1}
if (position==5)
	{Ehitratio=Ehitratio*1.2}
if (hitratio>0.98) {hitratio=0.98}
if (Ehitratio>0.98) {Ehitratio=0.98}

var hitratio2=Math.floor(hitratio*100)+"%"
if (position>=1 && position<=3)
	{d.gI("HITRATIO").innerHTML=(hitratio2)}
else
	{d.gI("HITRATIO").innerHTML=("-")}
var Ehitratio2=Math.floor(Ehitratio*100)+"%"
if (position==1||position==4||position==5)
	{d.gI("EHITRATIO").innerHTML=(Ehitratio2)}
else
	{d.gI("EHITRATIO").innerHTML=("-")}

//Damage Per Second
if (position>=1 && position<=3)
	{var avgdmg=(basedmg*(1-EShieldBlockRate)*(1-(critchance/100))+shieldblockdmg*EShieldBlockRate*(1-(critchance/100))+critdmg*(1-EShieldBlockRate)*(critchance/100)+sbcritdmg*EShieldBlockRate*(critchance/100))*hitspersecond*hitratio}
else
	{var avgdmg=0}
ShieldBlockRate=0
if ((position==1||position==4||position==5))
	{var Eavgdmg=(Ebasedmg*(1-ShieldBlockRate)*(1-(Ecritchance/100))+Eshieldblockdmg*ShieldBlockRate*(1-(Ecritchance/100))+Ecritdmg*(1-ShieldBlockRate)*(Ecritchance/100)+Esbcritdmg*ShieldBlockRate*(Ecritchance/100))*Ehitspersecond*Ehitratio}
else
	{var Eavgdmg=0}

//Vampiric Rage
var vr=avgdmg*BuffVR
var vr2=Math.floor(vr*10)/10
d.gI("VR").innerHTML=vr2

//Reflect Damage
var buffrd=BuffRD
if (EWpnType=="Bow"||EWpnType=="YumiBow")
	{buffrd=0}
var buffrd2=Math.floor(100*buffrd)
d.gI("RD").innerHTML=(buffrd2+"%")

var avgdmg2=(Eavgdmg*buffrd)+avgdmg
var avgdmg3=Math.floor(avgdmg2*10)/10
d.gI("AVGDMG").innerHTML=avgdmg3
var Eavgdmg2=(avgdmg*Ebuffrd)+Eavgdmg
var Eavgdmg3=Math.floor(Eavgdmg2*10)/10
d.gI("EAVGDMG").innerHTML=Eavgdmg3

//alert(Ebasedmg)

//d.gI("TEST").innerHTML=timer2
}