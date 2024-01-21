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

function calc(classreset,sareset)
{
if (sareset) {
	d.gI("WPNSA").selectedIndex=0
}
//placeholders
var AddASPD=0
var AddCAST=0
var AddCOMBATCRIT=0
var AddCP=0
var AddCPR=0
var AddCRIT=0
var AddCRIT60=0
var AddCRIT30=0
var AddCRITDMG=0
var AddHEAL=0
var AddHPR=0
var AddMPR=0
var AddMPR2=0
var AddSHIELDPDEF=0
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
var AddWEIGHT=0
var ALType=0
var AType=0
var AUType=0
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
var Boot=0
var bowdelay=1500
var BuffACC=0
var BuffACC60=0
var BuffACC30=0
var BuffASPD=1
var BuffASPD60=1
var BuffASPD30=1
var BuffCAST=1
var BuffCOMBATCRIT=1
var BuffCP=1
var BuffCPR=1
var BuffCRITDMG=1
var BuffDAMAGE=1
var BuffEVA=0
var BuffEVA60=0
var BuffEVA30=0
var BuffHEAL=1
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
var BuffSBR=1
var BuffSD=1
var BuffSPEED=1
var BuffSPEED60=1
var BuffSPEED30=1
var BuffVR=0
var Cloak=0
var combatevasion=0
var CON=0
var CONMOD=0
var DEX=0
var DEXMOD=0
var Glove=0
var GPA="<font color=red><b>GP!</b></font>"
var Earring1=0
var Earring2=0
var EARRINGOFANTHARASVR=0
var EARRINGOFZAKENVR=0
var EBuffDAMAGE=1
var FRINTEZZARD=0
var fullbody=0
var Helmet=0
var HPWR=0
var INT=0
var INTMOD=0
var Lower=0
var MasteryMATK=0
var MasteryPATK=1
var MEN=0
var MENMOD=0
var Necklace=0
var NECKLACEHP=0
var NECKLACEMATK=1
var NECKLACEPATK=1
var overMATK=0
var overPATK=0
var pen=0
var position=d.gI("POS").value
var Ring1=0
var Ring2=0
var RINGOFBAIUMACC=0
var RINGOFBAIUMCRITDMG=1
var RINGOFCOREACC=0
var RINGOFQUEENACC=0
var RINGOFQUEENCRITDMG=1
var RINGOFBAIUMASPD=1
var RINGOFBAIUMCAST=1
var Shield=0
var BaseShieldBlockRate=0.2
var EBaseShieldBlockRate=0.2
var ShieldEvasion=0
var STR=0
var STRMOD=0
var subcritical=0
var underMATK=0
var underMDEF=0
var underPATK=0
var helmetoverPDEF=0
var upperoverPDEF=0
var loweroverPDEF=0
var bootoverPDEF=0
var gloveoverPDEF=0
var necklaceoverPDEF=0
var earring1overPDEF=0
var earring2overPDEF=0
var ring1overPDEF=0
var ring2overPDEF=0
var helmetunderPDEF=0
var upperunderPDEF=0
var lowerunderPDEF=0
var bootunderPDEF=0
var gloveunderPDEF=0
var necklaceunderPDEF=0
var earring1underPDEF=0
var earring2underPDEF=0
var ring1underPDEF=0
var ring2underPDEF=0
var shield=0
var Upper=0
var VALAKASRD=0
var weightlimit=69000
var weightpenalty=0
var WIT=0
var WITMOD=0
var WpnAcc=0
var WpnMATK=0
var WpnType="unequipped"

//Level Modifier
var LVL = + d.gI("LV").value
var LVLMOD=(LVL+89)/100

var JOB=d.gI("job").value
JOB=PROFESSIONS[JOB]
if (JOB=="DA"||JOB=="GL"||JOB=="HE"||JOB=="HF"||JOB=="HK"||JOB=="PA"||JOB=="RO"||JOB=="TH"||JOB=="WD"||JOB=="WA")
	{race="HF"}
else if (JOB=="BI"||JOB=="CL"||JOB=="HM"||JOB=="NE"||JOB=="PP"||JOB=="SOR"||JOB=="WL"||JOB=="WI")
	{race="HM"}
else if (JOB=="EF"||JOB=="EK"||JOB=="EFS"||JOB=="PW"||JOB=="SW"||JOB=="TK"||JOB=="SR")
	{race="EF"}
else if (JOB=="ELS"||JOB=="EE"||JOB=="EM"||JOB=="EO"||JOB=="EW"||JOB=="SPS")
	{race="EM"}
else if (JOB=="AW"||JOB=="AS"||JOB=="BD"||JOB=="DF"||JOB=="PK"||JOB=="PR"||JOB=="SK")
	{race="DF"}
else if (JOB=="DM"||JOB=="DW"|JOB=="PS"||JOB=="SHE"|JOB=="SO"||JOB=="SPH")
	{race="DM"}
else if (JOB=="DE"||JOB=="MO"||JOB=="OF"||JOB=="OR"|JOB=="TY")
	{race="OF"}
else if (JOB=="OM"||JOB=="OS"||JOB=="OL"||JOB=="WC")
	{race="OM"}
else if (JOB=="AR"||JOB=="BH"||JOB=="DO"||JOB=="SC"||JOB=="WS")
	{race="DW"}
else if (JOB=="KSM"||JOB=="TRP"||JOB=="BKR"||JOB=="SBM"||JOB=="INM")
	{race="KM"}
else if (JOB=="KSF"||JOB=="WRD"||JOB=="SBF"||JOB=="ARB"||JOB=="INF")
	{race="KF"}
	
//Transformations
var trans="none"
var slowattack=0
	if (d.gI("TRNSC").checked==true)
		{
		trans2=d.gI("TRNS").value;
		trans=TRANSFORMATION[trans2]
		slowattack=1
		if (trans=="FINALFORM")
			{BuffPATK=BuffPATK*2;BuffPDEF=BuffPDEF*2;BuffMATK=BuffMATK*2;BuffMDEF=BuffMDEF*2;slowattack=0}
		else if (trans=="VANGUARD")
			{BuffSD=BuffSD*0.5;slowattack=0}
		}
if (race=="HF")
	{BaseSTR=40;BaseCON=43;BaseDEX=30;BaseINT=21;BaseWIT=11;BaseMEN=25;BaseRun=115;BaseWalk=80;}
else if (race=="HM")
	{BaseSTR=22;BaseCON=27;BaseDEX=21;BaseINT=41;BaseWIT=20;BaseMEN=39;BaseRun=120;BaseWalk=78;}
else if (race=="EF")
	{BaseSTR=36;BaseCON=36;BaseDEX=35;BaseINT=23;BaseWIT=14;BaseMEN=26;BaseRun=125;BaseWalk=90;}
else if (race=="EM")
	{BaseSTR=21;BaseCON=25;BaseDEX=24;BaseINT=37;BaseWIT=23;BaseMEN=40;BaseRun=122;BaseWalk=85;}
else if (race=="DF")
	{BaseSTR=41;BaseCON=32;BaseDEX=34;BaseINT=25;BaseWIT=12;BaseMEN=26;BaseRun=122;BaseWalk=85;}
else if (race=="DM")
	{BaseSTR=23;BaseCON=24;BaseDEX=23;BaseINT=44;BaseWIT=19;BaseMEN=37;BaseRun=122;BaseWalk=85;}
else if (race=="OF")
	{BaseSTR=40;BaseCON=47;BaseDEX=26;BaseINT=18;BaseWIT=12;BaseMEN=27;BaseRun=117;BaseWalk=70;}
else if (race=="OM")
	{BaseSTR=27;BaseCON=31;BaseDEX=24;BaseINT=31;BaseWIT=15;BaseMEN=42;BaseRun=121;BaseWalk=70;}
else if (race=="DW")
	{BaseSTR=39;BaseCON=45;BaseDEX=29;BaseINT=20;BaseWIT=10;BaseMEN=27;BaseRun=115;BaseWalk=80;}
else if (race=="KM")
	{BaseSTR=41;BaseCON=31;BaseDEX=33;BaseINT=29;BaseWIT=11;BaseMEN=25;BaseRun=122;BaseWalk=87;weightlimit=weightlimit*1.25}
else if (race=="KF")
	{BaseSTR=39;BaseCON=30;BaseDEX=35;BaseINT=28;BaseWIT=11;BaseMEN=27;BaseRun=122;BaseWalk=87;weightlimit=weightlimit*1.25}
if (trans=="FINALFORM")
	{BaseRun=125;BaseWalk=60}
else if (trans=="GRAIL")
	{BaseSTR=40;BaseCON=43;BaseDEX=30;BaseINT=21;BaseWIT=11;BaseMEN=25;BaseRun=125;BaseWalk=60}
else if (trans=="UNICORN")
	{BaseSTR=36;BaseCON=36;BaseDEX=35;BaseINT=23;BaseWIT=14;BaseMEN=26;BaseRun=125;BaseWalk=46}
else if (trans=="LILIM")
	{BaseSTR=41;BaseCON=32;BaseDEX=34;BaseINT=25;BaseWIT=12;BaseMEN=26;BaseRun=125;BaseWalk=56}
else if (trans=="GOLEMGUARD")
	{BaseSTR=39;BaseCON=45;BaseDEX=29;BaseINT=20;BaseWIT=10;BaseMEN=27;BaseRun=125;BaseWalk=53}
else if (trans=="INFERNO")
	{BaseSTR=40;BaseCON=47;BaseDEX=26;BaseINT=18;BaseWIT=12;BaseMEN=27;BaseRun=125;BaseWalk=57}
else if (trans=="BOMBER")
	{BaseSTR=41;BaseCON=31;BaseDEX=33;BaseINT=29;BaseWIT=11;BaseMEN=25;BaseRun=125;BaseWalk=100}
else if (trans=="ONYX"||trans=="DWARRIOR"||trans=="DKNIGHT"||trans=="DROGUE"||trans=="SABRETOOTH"||trans=="OELMAHUM"||trans=="DOLLBLADER")
	{BaseSTR=40;BaseCON=43;BaseDEX=30;BaseINT=21;BaseWIT=11;BaseMEN=25;BaseRun=125;BaseWalk=30}
else if (trans=="BLADER")
	{BaseSTR=40;BaseCON=43;BaseDEX=30;BaseINT=21;BaseWIT=11;BaseMEN=25;BaseRun=125;BaseWalk=100}
else if (trans=="DWIZARD"||trans=="DSUMMONER"||trans=="DHEALER"||trans=="DENCHANTER")
	{BaseSTR=22;BaseCON=27;BaseDEX=21;BaseINT=41;BaseWIT=20;BaseMEN=39;BaseRun=125;BaseWalk=30}
else if (trans=="ZAKEN")
	{BaseSTR=48;BaseCON=52;BaseDEX=30;BaseINT=45;BaseWIT=20;BaseMEN=45;BaseRun=125;BaseWalk=30}
else if (trans=="ANAKIM")
	{BaseSTR=46;BaseCON=49;BaseDEX=30;BaseINT=50;BaseWIT=20;BaseMEN=45;BaseRun=125;BaseWalk=30}
else if (trans=="BENOM"||trans=="GORDON"||trans=="RANKU"||trans=="KECHI"||trans=="DEMONPRINCE")
	{BaseSTR=43;BaseCON=47;BaseDEX=30;BaseINT=46;BaseWIT=20;BaseMEN=42;BaseRun=125;BaseWalk=30}
else if (trans=="HERETIC"||trans=="VALE")
	{BaseSTR=22;BaseCON=27;BaseDEX=21;BaseINT=41;BaseWIT=20;BaseMEN=39;BaseRun=125;BaseWalk=30}
else if (trans=="GOLEMARMOR")
	{BaseSTR=39;BaseCON=45;BaseDEX=29;BaseINT=20;BaseWIT=10;BaseMEN=27;BaseRun=125;BaseWalk=30}
//else if (trans=="MERCENARY" && (race!="KF" && race!="KM"))
//	{BaseRun=125;BaseWalk=50}
//else if (trans=="MERCENARY")
//	{BaseRun=125;BaseWalk=39}

//default selections when class is changed
if (classreset){
	d.gI("ts1f").selectedIndex=0
	d.gI("ts2f").selectedIndex=0
	d.gI("ts3f").selectedIndex=0
	d.gI("ts1n").selectedIndex=0
	d.gI("ts2n").selectedIndex=0
	d.gI("ts3n").selectedIndex=0
	d.gI("ts1h").selectedIndex=0
	d.gI("ts2h").selectedIndex=0
	d.gI("ts3h").selectedIndex=0
	}

//Tattoo Restrictions by class
if (JOB=="AW"||JOB=="AR"||JOB=="AS"||JOB=="BD"||JOB=="BH"||JOB=="DA"||JOB=="DE"||JOB=="EK"||JOB=="EFS"||JOB=="GL"||JOB=="HE"||JOB=="HK"||JOB=="MO"||JOB=="OR"||JOB=="PA"||JOB=="PK"||JOB=="PR"||JOB=="PW"||JOB=="RO"||JOB=="SC"||JOB=="SK"||JOB=="SR"||JOB=="SW"||JOB=="TK"||JOB=="TH"||JOB=="TY"||JOB=="WD"||JOB=="WA"||JOB=="WS"||JOB=="EF"||JOB=="DF"||JOB=="OR"||JOB=="DO"||JOB=="HF"||JOB=="OF"||JOB=="BKR"||JOB=="SBM"||JOB=="INM"||JOB=="SBF"||JOB=="ARB"||JOB=="INF"||JOB=="KSM"||JOB=="KSF"||JOB=="TRP"||JOB=="WRD")
{
d.gI("ts1f").style.display = 'block'
d.gI("ts2f").style.display = 'block'
d.gI("ts3f").style.display = 'block'
d.gI("ts1h").style.display = 'none'
d.gI("ts2h").style.display = 'none'
d.gI("ts3h").style.display = 'none'
d.gI("ts1n").style.display = 'none'
d.gI("ts2n").style.display = 'none'
d.gI("ts3n").style.display = 'none'
if (d.gI("TTT1C").checked==true)
	{var TAT1=d.gI("ts1f").value}
else {var TAT1=0}
if (d.gI("TTT2C").checked==true)
	{var TAT2=d.gI("ts2f").value}
else {var TAT2=0}
if (d.gI("TTT3C").checked==true)
	{var TAT3=d.gI("ts3f").value}
else {var TAT3=0}
}
else if (JOB=="EO"||JOB=="CL"||JOB=="PP"||JOB=="BI"||JOB=="EE"||JOB=="SO"||JOB=="SHE"||JOB=="OS"||JOB=="WC"||JOB=="OL"||JOB=="OM")
{
d.gI("ts1f").style.display = 'none'
d.gI("ts2f").style.display = 'none'
d.gI("ts3f").style.display = 'none'
d.gI("ts1h").style.display = 'block'
d.gI("ts2h").style.display = 'block'
d.gI("ts3h").style.display = 'block'
d.gI("ts1n").style.display = 'none'
d.gI("ts2n").style.display = 'none'
d.gI("ts3n").style.display = 'none'
if (d.gI("TTT1C").checked==true)
	{var TAT1=d.gI("ts1h").value}
else {var TAT1=0}
if (d.gI("TTT2C").checked==true)
	{var TAT2=d.gI("ts2h").value}
else {var TAT2=0}
if (d.gI("TTT3C").checked==true)
	{var TAT3=d.gI("ts3h").value}
else {var TAT3=0}
}
else if (JOB=="WI"||JOB=="SOR"||JOB=="NE"||JOB=="WL"||JOB=="EW"||JOB=="SPS"||JOB=="ELS"||JOB=="DW"||JOB=="PS"||JOB=="SPH"||JOB=="DM"||JOB=="EM"||JOB=="HM")
{
d.gI("ts1f").style.display = 'none'
d.gI("ts2f").style.display = 'none'
d.gI("ts3f").style.display = 'none'
d.gI("ts1h").style.display = 'none'
d.gI("ts2h").style.display = 'none'
d.gI("ts3h").style.display = 'none'
d.gI("ts1n").style.display = 'block'
d.gI("ts2n").style.display = 'block'
d.gI("ts3n").style.display = 'block'
if (d.gI("TTT1C").checked==true)
	{var TAT1=d.gI("ts1n").value}
else {var TAT1=0}
if (d.gI("TTT2C").checked==true)
	{var TAT2=d.gI("ts2n").value}
else {var TAT2=0}
if (d.gI("TTT3C").checked==true)
	{var TAT3=d.gI("ts3n").value}
else {var TAT3=0}
}

if (JOB=="EF"||JOB=="DF"||JOB=="OF"||JOB=="DO"||JOB=="HF"||JOB=="HM"||JOB=="EM"||JOB=="DM"||JOB=="OM"||JOB=="KSM"||JOB=="KSF"){
d.gI("TTT2C").disabled=true
d.gI("TTT3C").disabled=true
d.gI("ts2f").disabled=true
d.gI("ts3f").disabled=true
d.gI("ts2h").disabled=true
d.gI("ts3h").disabled=true
d.gI("ts2n").disabled=true
d.gI("ts3n").disabled=true
var TAT2=0
var TAT3=0
}
else if (JOB=="RO"||JOB=="WA"||JOB=="HK"||JOB=="WI"||JOB=="CL"||JOB=="EK"||JOB=="EFS"||JOB=="EO"||JOB=="EW"||JOB=="PK"||JOB=="AS"||JOB=="DW"||JOB=="SO"||JOB=="MO"||JOB=="OR"||JOB=="OS"||JOB=="SC"||JOB=="AR"||JOB=="TRP"||JOB=="WRD"){
d.gI("TTT2C").disabled=false
d.gI("TTT3C").disabled=true
d.gI("ts2f").disabled=false
d.gI("ts3f").disabled=true
d.gI("ts2h").disabled=false
d.gI("ts3h").disabled=true
d.gI("ts2n").disabled=false
d.gI("ts3n").disabled=true
var TAT3=0
}
else{
d.gI("TTT2C").disabled=false
d.gI("TTT3C").disabled=false
d.gI("ts2f").disabled=false
d.gI("ts3f").disabled=false
d.gI("ts2h").disabled=false
d.gI("ts3h").disabled=false
d.gI("ts2n").disabled=false
d.gI("ts3n").disabled=false
}

//Tattoos
var TATSTR=STRTAT[TAT1]+STRTAT[TAT2]+STRTAT[TAT3]
if (TATSTR>5)
{TATSTR=5}
var TATDEX=DEXTAT[TAT1]+DEXTAT[TAT2]+DEXTAT[TAT3]
if (TATDEX>5)
{TATDEX=5}
var TATCON=CONTAT[TAT1]+CONTAT[TAT2]+CONTAT[TAT3]
if (TATCON>5)
{TATCON=5}
var TATINT=INTTAT[TAT1]+INTTAT[TAT2]+INTTAT[TAT3]
if (TATINT>5)
{TATINT=5}
var TATWIT=WITTAT[TAT1]+WITTAT[TAT2]+WITTAT[TAT3]
if (TATWIT>5)
{TATWIT=5}
var TATMEN=MENTAT[TAT1]+MENTAT[TAT2]+MENTAT[TAT3]
if (TATMEN>5)
{TATMEN=5}

var STR=TATSTR+BaseSTR
var DEX=TATDEX+BaseDEX
var CON=TATCON+BaseCON
var INT=TATINT+BaseINT
var WIT=TATWIT+BaseWIT
var MEN=TATMEN+BaseMEN

//Base HP/CP Calculation
if (JOB=="HF") {
	BaseHP=68.3+11.635*LVL+0.065*(LVL*LVL)
	CPMOD=0.4
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="WA" && LVL<=20) {
	BaseHP=68.3+11.635*LVL+0.065*(LVL*LVL)
	CPMOD=0.8
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="WA" && LVL>20) {
	BaseHP=-270+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.8
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="GL" && LVL<=20) {
	BaseHP=68.3+11.635*LVL+0.065*(LVL*LVL)
	CPMOD=0.9
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="GL" && LVL>20 && LVL<=40) {
	BaseHP=-270+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.9
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="GL" && LVL>40) {
	BaseHP=-620.4+34.01*LVL+0.19*(LVL*LVL)
	CPMOD=0.9
	BaseMP=FIGHTER3MP[LVL]}
else if (JOB=="WD" && LVL<=20) {
	BaseHP=68.3+11.635*LVL+0.065*(LVL*LVL)
	CPMOD=0.8
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="WD" && LVL>20 && LVL<=40) {
	BaseHP=-270+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.8
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="WD" && LVL>40) {
	BaseHP=-795.6+37.59*LVL+0.21*(LVL*LVL)
	CPMOD=0.8
	BaseMP=FIGHTER3MP[LVL]}
else if (JOB=="HK" && LVL<=20) {
	BaseHP=68.3+11.635*LVL+0.065*(LVL*LVL)
	CPMOD=0.6
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="HK" && LVL>20) {
	BaseHP=-210.3+24.165*LVL+0.135*(LVL*LVL)
	CPMOD=0.6
	BaseMP=FIGHTER2MP[LVL]}
else if ((JOB=="DA"||JOB=="PA") && LVL<=20) {
	BaseHP=68.3+11.635*LVL+0.065*(LVL*LVL)
	CPMOD=0.6
	BaseMP=FIGHTER1MP[LVL]}
else if ((JOB=="DA"||JOB=="PA") && LVL>20 && LVL<=40) {
	BaseHP=-210.3+24.165*LVL+0.135*(LVL*LVL)
	CPMOD=0.6
	BaseMP=FIGHTER2MP[LVL]}
else if ((JOB=="DA"||JOB=="PA") && LVL>40) {
	BaseHP=-604.5+32.22*LVL+0.18*(LVL*LVL)
	CPMOD=0.6
	BaseMP=FIGHTER3MP[LVL]}
else if (JOB=="RO" && LVL<=20) {
	BaseHP=68.3+11.635*LVL+0.065*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="RO" && LVL>20) {
	BaseHP=-170.5+22.375*LVL+0.125*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="TH" && LVL<=20) {
	BaseHP=68.3+11.635*LVL+0.065*(LVL*LVL)
	CPMOD=0.55
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="TH" && LVL>20 && LVL<=40) {
	BaseHP=-170.5+22.375*LVL+0.125*(LVL*LVL)
	CPMOD=0.55
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="TH" && LVL>40) {
	BaseHP=-477.1+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.55
	BaseMP=FIGHTER3MP[LVL]}
else if (JOB=="HE" && LVL<=20) {
	BaseHP=68.3+11.635*LVL+0.065*(LVL*LVL)
	CPMOD=0.7
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="HE" && LVL>20 && LVL<=40) {
	BaseHP=-170.5+22.375*LVL+0.125*(LVL*LVL)
	CPMOD=0.7
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="HE" && LVL>40) {
	BaseHP=-564.7+30.43*LVL+0.17*(LVL*LVL)
	CPMOD=0.7
	BaseMP=FIGHTER3MP[LVL]}
else if (JOB=="HM") {
	BaseHP=85.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC1MP[LVL]}
else if (JOB=="WI" && LVL<=20) {
	BaseHP=85.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC1MP[LVL]}
else if (JOB=="WI" && LVL>20) {
	BaseHP=-73.5+22.375*LVL+0.125*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC2MP[LVL]}
else if (JOB=="SOR" && LVL<=20) {
	BaseHP=85.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.6
	BaseMP=MYSTIC1MP[LVL]}
else if (JOB=="SOR" && LVL>20 && LVL<=40) {
	BaseHP=-73.5+22.375*LVL+0.125*(LVL*LVL)
	CPMOD=0.6
	BaseMP=MYSTIC2MP[LVL]}
else if (JOB=="SOR" && LVL>40) {
	BaseHP=-511.5+31.325*LVL+0.175*(LVL*LVL)
	CPMOD=0.6
	BaseMP=MYSTIC3MP[LVL]}
else if (JOB=="NE" && LVL<=20) {
	BaseHP=85.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC1MP[LVL]}
else if (JOB=="NE" && LVL>20 && LVL<=40) {
	BaseHP=-73.5+22.375*LVL+0.125*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC2MP[LVL]}
else if (JOB=="NE" && LVL>40) {
	BaseHP=-511.5+31.325*LVL+0.175*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC3MP[LVL]}
else if (JOB=="WL" && LVL<=20) {
	BaseHP=85.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.6
	BaseMP=MYSTIC1MP[LVL]}
else if (JOB=="WL" && LVL>20 && LVL<=40) {
	BaseHP=-73.5+22.375*LVL+0.125*(LVL*LVL)
	CPMOD=0.6
	BaseMP=MYSTIC2MP[LVL]}
else if (JOB=="WL" && LVL>40) {
	BaseHP=-642.9+34.01*LVL+0.19*(LVL*LVL)
	CPMOD=0.6
	BaseMP=MYSTIC3MP[LVL]}
else if (JOB=="CL" && LVL<=20) {
	BaseHP=85.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC1MP[LVL]}
else if (JOB=="CL" && LVL>20) {
	BaseHP=-192.9+27.745*LVL+0.155*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC2MP[LVL]}
else if (JOB=="BI" && LVL<=20) {
	BaseHP=85.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.9
	BaseMP=MYSTIC1MP[LVL]}
else if (JOB=="BI" && LVL>20 && LVL<=40) {
	BaseHP=-192.9+27.745*LVL+0.155*(LVL*LVL)
	CPMOD=0.9
	BaseMP=MYSTIC2MP[LVL]}
else if (JOB=="BI" && LVL>40) {
	BaseHP=-499.5+34.01*LVL+0.19*(LVL*LVL)
	CPMOD=0.9
	BaseMP=MYSTIC3MP[LVL]}
else if (JOB=="PP" && LVL<=20) {
	BaseHP=85.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC1MP[LVL]}
else if (JOB=="PP" && LVL>20 && LVL<=40) {
	BaseHP=-192.9+27.745*LVL+0.155*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC2MP[LVL]}
else if (JOB=="PP" && LVL>40) {
	BaseHP=-630.9+36.695*LVL+0.205*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC3MP[LVL]}
else if (JOB=="EF") {
	BaseHP=76.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.4
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="EK" && LVL<=20) {
	BaseHP=76.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="EK" && LVL>20) {
	BaseHP=-242+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="TK" && LVL<=20) {
	BaseHP=76.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.6
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="TK" && LVL>20 && LVL<=40) {
	BaseHP=-242+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.6
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="TK" && LVL>40) {
	BaseHP=-680+35.8*LVL+0.2*(LVL*LVL)
	CPMOD=0.6
	BaseMP=FIGHTER3MP[LVL]}
else if (JOB=="SW" && LVL<=20) {
	BaseHP=76.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="SW" && LVL>20 && LVL<=40) {
	BaseHP=-242+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="SW" && LVL>40) {
	BaseHP=-767.6+37.59*LVL+0.21*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER3MP[LVL]}
else if (JOB=="EFS" && LVL<=20) {
	BaseHP=76.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="EFS" && LVL>20) {
	BaseHP=-202.2+25.06*LVL+0.14*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="PW" && LVL<=20) {
	BaseHP=76.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.55
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="PW" && LVL>20 && LVL<=40) {
	BaseHP=-202.2+25.06*LVL+0.14*(LVL*LVL)
	CPMOD=0.55
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="PW" && LVL>40) {
	BaseHP=-552.6+32.22*LVL+0.18*(LVL*LVL)
	CPMOD=0.55
	BaseMP=FIGHTER3MP[LVL]}
else if (JOB=="SR" && LVL<=20) {
	BaseHP=76.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="SR" && LVL>20 && LVL<=40) {
	BaseHP=-202.2+25.06*LVL+0.14*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="SR" && LVL>40) {
	BaseHP=-640.2+34.01*LVL+0.19*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER3MP[LVL]}
else if (JOB=="EM") {
	BaseHP=88.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC1MP[LVL]}
else if (JOB=="EW" && LVL<=20) {
	BaseHP=88.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC1MP[LVL]}
else if (JOB=="EW" && LVL>20) {
	BaseHP=-90.4+23.27*LVL+0.13*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC2MP[LVL]}
else if (JOB=="SPS" && LVL<=20) {
	BaseHP=88.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.6
	BaseMP=MYSTIC1MP[LVL]}
else if (JOB=="SPS" && LVL>20 && LVL<=40) {
	BaseHP=-90.4+23.27*LVL+0.13*(LVL*LVL)
	CPMOD=0.6
	BaseMP=MYSTIC2MP[LVL]}
else if (JOB=="SPS" && LVL>40) {
	BaseHP=-572.2+33.115*LVL+0.185*(LVL*LVL)
	CPMOD=0.6
	BaseMP=MYSTIC3MP[LVL]}
else if (JOB=="ELS" && LVL<=20) {
	BaseHP=88.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.6
	BaseMP=MYSTIC1MP[LVL]}
else if (JOB=="ELS" && LVL>20 && LVL<=40) {
	BaseHP=-90.4+23.27*LVL+0.13*(LVL*LVL)
	CPMOD=0.6
	BaseMP=MYSTIC2MP[LVL]}
else if (JOB=="ELS" && LVL>40) {
	BaseHP=-659.8+34.905*LVL+0.195*(LVL*LVL)
	CPMOD=0.6
	BaseMP=MYSTIC3MP[LVL]}
else if (JOB=="EO" && LVL<=20) {
	BaseHP=88.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC1MP[LVL]}
else if (JOB=="EO" && LVL>20) {
	BaseHP=-209.8+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC2MP[LVL]}
else if (JOB=="EE" && LVL<=20) {
	BaseHP=88.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.9
	BaseMP=MYSTIC1MP[LVL]}
else if (JOB=="EE" && LVL>20 && LVL<=40) {
	BaseHP=-209.8+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.9
	BaseMP=MYSTIC2MP[LVL]}
else if (JOB=="EE" && LVL>40) {
	BaseHP=-647.8+37.59*LVL+0.21*(LVL*LVL)
	CPMOD=0.9
	BaseMP=MYSTIC3MP[LVL]}
else if (JOB=="DF") {
	BaseHP=80.5+13.425*LVL+0.075*(LVL*LVL)
	CPMOD=0.4
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="PK" && LVL<=20) {
	BaseHP=80.5+13.425*LVL+0.075*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="PK" && LVL>20) {
	BaseHP=-257.8+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="SK" && LVL<=20) {
	BaseHP=80.5+13.425*LVL+0.075*(LVL*LVL)
	CPMOD=0.6
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="SK" && LVL>20 && LVL<=40) {
	BaseHP=-257.8+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.6
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="SK" && LVL>40) {
	BaseHP=-695.8+37.59*LVL+0.21*(LVL*LVL)
	CPMOD=0.6
	BaseMP=FIGHTER3MP[LVL]}
else if (JOB=="BD" && LVL<=20) {
	BaseHP=80.5+13.425*LVL+0.075*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="BD" && LVL>20 && LVL<=40) {
	BaseHP=-257.8+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="BD" && LVL>40) {
	BaseHP=-827.2+40.275*LVL+0.225*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER3MP[LVL]}
else if (JOB=="AS" && LVL<=20) {
	BaseHP=80.5+13.425*LVL+0.075*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="AS" && LVL>20) {
	BaseHP=-218+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="AW" && LVL<=20) {
	BaseHP=80.5+13.425*LVL+0.075*(LVL*LVL)
	CPMOD=0.55
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="AW" && LVL>20 && LVL<=40) {
	BaseHP=-218+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.55
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="AW" && LVL>40) {
	BaseHP=-568.4+34.01*LVL+0.19*(LVL*LVL)
	CPMOD=0.55
	BaseMP=FIGHTER3MP[LVL]}
else if (JOB=="PR" && LVL<=20) {
	BaseHP=80.5+13.425*LVL+0.075*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="PR" && LVL>20 && LVL<=40) {
	BaseHP=-218+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="PR" && LVL>40) {
	BaseHP=-656+35.8*LVL+0.2*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER3MP[LVL]}
else if (JOB=="DM") {
	BaseHP=90.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC1MP[LVL]}
else if (JOB=="DW" && LVL<=20) {
	BaseHP=90.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC1MP[LVL]}
else if (JOB=="DW" && LVL>20) {
	BaseHP=-108.3+24.165*LVL+0.135*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC2MP[LVL]}
else if (JOB=="SPH" && LVL<=20) {
	BaseHP=90.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.6
	BaseMP=MYSTIC1MP[LVL]}
else if (JOB=="SPH" && LVL>20 && LVL<=40) {
	BaseHP=-108.3+24.165*LVL+0.135*(LVL*LVL)
	CPMOD=0.6
	BaseMP=MYSTIC2MP[LVL]}
else if (JOB=="SPH" && LVL>40) {
	BaseHP=-546.3+33.115*LVL+0.185*(LVL*LVL)
	CPMOD=0.6
	BaseMP=MYSTIC3MP[LVL]}
else if (JOB=="PS" && LVL<=20) {
	BaseHP=90.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.6
	BaseMP=MYSTIC1MP[LVL]}
else if (JOB=="PS" && LVL>20 && LVL<=40) {
	BaseHP=-108.3+24.165*LVL+0.135*(LVL*LVL)
	CPMOD=0.6
	BaseMP=MYSTIC2MP[LVL]}
else if (JOB=="PS" && LVL>40) {
	BaseHP=-656+35.8*LVL+0.2*(LVL*LVL)
	CPMOD=0.6
	BaseMP=MYSTIC3MP[LVL]}
else if (JOB=="SO" && LVL<=20) {
	BaseHP=90.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC1MP[LVL]}
else if (JOB=="SO" && LVL>20) {
	BaseHP=-227.7+29.535*LVL+0.165*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC2MP[LVL]}
else if (JOB=="SHE" && LVL<=20) {
	BaseHP=90.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.9
	BaseMP=MYSTIC1MP[LVL]}
else if (JOB=="SHE" && LVL>20 && LVL<=40) {
	BaseHP=-227.7+29.535*LVL+0.165*(LVL*LVL)
	CPMOD=0.9
	BaseMP=MYSTIC2MP[LVL]}
else if (JOB=="SHE" && LVL>40) {
	BaseHP=-621.9+37.59*LVL+0.21*(LVL*LVL)
	CPMOD=0.9
	BaseMP=MYSTIC3MP[LVL]}
else if (JOB=="OF") {
	BaseHP=67.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="MO" && LVL<=20) {
	BaseHP=67.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="MO" && LVL>20) {
	BaseHP=-251+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="TY" && LVL<=20) {
	BaseHP=67.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="TY" && LVL>20 && LVL<=40) {
	BaseHP=-251+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="TY" && LVL>40) {
	BaseHP=-776.6+37.59*LVL+0.21*(LVL*LVL)
	CPMOD=0.5
	BaseMP=FIGHTER3MP[LVL]}
else if (JOB=="OR" && LVL<=20) {
	BaseHP=67.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.7
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="OR" && LVL>20) {
	BaseHP=-290.8+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.7
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="DE" && LVL<=20) {
	BaseHP=67.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.7
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="DE" && LVL>20 && LVL<=40) {
	BaseHP=-290.8+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.7
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="DE" && LVL>40) {
	BaseHP=-816.4+39.38*LVL+0.22*(LVL*LVL)
	CPMOD=0.7
	BaseMP=FIGHTER3MP[LVL]}
else if (JOB=="OM") {
	BaseHP=79.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC1MP[LVL]}
else if (JOB=="OS" && LVL<=20) {
	BaseHP=79.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC1MP[LVL]}
else if (JOB=="OS" && LVL>20) {
	BaseHP=-218.8+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC2MP[LVL]}
else if (JOB=="WC" && LVL<=20) {
	BaseHP=79.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC1MP[LVL]}
else if (JOB=="WC" && LVL>20 && LVL<=40) {
	BaseHP=-218.8+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC2MP[LVL]}
else if (JOB=="WC" && LVL>40) {
	BaseHP=-613+36.695*LVL+0.205*(LVL*LVL)
	CPMOD=0.5
	BaseMP=MYSTIC3MP[LVL]}
else if (JOB=="OL" && LVL<=20) {
	BaseHP=79.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.9
	BaseMP=MYSTIC1MP[LVL]}
else if (JOB=="OL" && LVL>20 && LVL<=40) {
	BaseHP=-218.8+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.9
	BaseMP=MYSTIC2MP[LVL]}
else if (JOB=="OL" && LVL>40) {
	BaseHP=-613+36.695*LVL+0.205*(LVL*LVL)
	CPMOD=0.9
	BaseMP=MYSTIC3MP[LVL]}
else if (JOB=="DO") {
	BaseHP=67.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.7
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="AR" && LVL<=20) {
	BaseHP=67.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.8
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="AR" && LVL>20) {
	BaseHP=-251+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.8
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="WS" && LVL<=20) {
	BaseHP=67.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.8
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="WS" && LVL>20 && LVL<=40) {
	BaseHP=-251+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.8
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="WS" && LVL>40) {
	BaseHP=-776.6+37.59*LVL+0.21*(LVL*LVL)
	CPMOD=0.8
	BaseMP=FIGHTER3MP[LVL]}
else if (JOB=="SC" && LVL<=20) {
	BaseHP=67.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.7
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="SC" && LVL>20) {
	BaseHP=-290.8+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.7
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="BH" && LVL<=20) {
	BaseHP=67.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.7
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="BH" && LVL>20 && LVL<=40) {
	BaseHP=-290.8+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.7
	BaseMP=FIGHTER2MP[LVL]}
else if (JOB=="BH" && LVL>40) {
	BaseHP=-816.4+39.38*LVL+0.22*(LVL*LVL)
	CPMOD=0.7
	BaseMP=FIGHTER3MP[LVL]}
else if (JOB=="KSM"||JOB=="KSF") {
	BaseHP=KSOLDIERMHP[LVL]
	CPMOD=0.5
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="KSF") {
	BaseHP=KSOLDIERFHP[LVL]
	CPMOD=0.5
	BaseMP=FIGHTER1MP[LVL]}
else if (JOB=="TRP") {
	BaseHP=TROOPERHP[LVL]
	CPMOD=0.5
	BaseMP=KAMAEL2MP[LVL]}
else if (JOB=="WRD") {
	BaseHP=WARDERHP[LVL]
	CPMOD=0.5
	BaseMP=KAMAEL2MP[LVL]}
else if (JOB=="BKR") {
	BaseHP=BERSERKERHP[LVL]
	CPMOD=0.5
	BaseMP=KAMAEL3MP[LVL]}
else if (JOB=="SBM") {
	BaseHP=SBREAKERMHP[LVL]
	CPMOD=0.5
	BaseMP=KAMAEL3MP[LVL]}
else if (JOB=="ARB") {
	BaseHP=ARBALESTERHP[LVL]
	CPMOD=0.5
	BaseMP=KAMAEL3MP[LVL]}
else if (JOB=="SBF") {
	BaseHP=SBREAKERFHP[LVL]
	CPMOD=0.5
	BaseMP=KAMAEL3MP[LVL]}
else if (JOB=="INM"||JOB=="INF") {
	BaseHP=INSPECTORHP[LVL]
	CPMOD=0.5
	BaseMP=KAMAEL3MP[LVL]}
if (trans=="FINALFORM") {
	BaseHP=FINALFORMHP[LVL]
	CPMOD=0.5
	BaseMP=FINALFORMMP[LVL]
	}
if (trans=="GRAIL")
	{if (race=="HF"||race=="HM") {
	BaseHP=GRAILAPOHP[LVL]
	CPMOD=0.5
	BaseMP=GRAILAPOMP[LVL]}
	else if (race=="KF"||race=="KM") {
	BaseHP=GRAILAPOHP3[LVL]
	CPMOD=0.5
	BaseMP=GRAILAPOMP3[LVL]}
	else {
	BaseHP=GRAILAPOHP2[LVL]
	CPMOD=0.5
	BaseMP=GRAILAPOMP2[LVL]}
	}
if (trans=="UNICORN")
	{if (race=="EF"||race=="EM") {
	BaseHP=UNICORNHP[LVL]
	CPMOD=0.5
	BaseMP=UNICORNMP[LVL]}
	else if (race=="DF"||race=="DM") {
	BaseHP=UNICORNHP3[LVL]
	CPMOD=0.5
	BaseMP=UNICORNMP3[LVL]}
	else {
	BaseHP=GRAILAPOHP2[LVL]
	CPMOD=0.5
	BaseMP=GRAILAPOMP2[LVL]}
	}
if (trans=="LILIM")
	{if (race=="DF"||race=="DM") {
	BaseHP=LILIMHP[LVL]
	CPMOD=0.5
	BaseMP=UNICORNMP[LVL]}
	else if (race=="EF"||race=="EM") {
	BaseHP=LILIMHP3[LVL]
	CPMOD=0.5
	BaseMP=UNICORNMP3[LVL]}
	else {
	BaseHP=LILIMHP2[LVL]
	CPMOD=0.5
	BaseMP=GRAILAPOMP2[LVL]}
	}
if (trans=="GOLEMGUARD")
	{if (race=="DW") {
	BaseHP=GOLEMGUARDHP[LVL]
	CPMOD=0.5
	BaseMP=UNICORNMP[LVL]}
	else if (race=="OF"||race=="OM") {
	BaseHP=GOLEMGUARDHP3[LVL]
	CPMOD=0.5
	BaseMP=UNICORNMP3[LVL]}
	else {
	BaseHP=GOLEMGUARDHP2[LVL]
	CPMOD=0.5
	BaseMP=GRAILAPOMP2[LVL]}
	}
if (trans=="INFERNO")
	{if (race=="OF"||race=="OM") {
	BaseHP=GOLEMGUARDHP[LVL]
	CPMOD=0.5
	BaseMP=UNICORNMP[LVL]}
	else if (race=="DW") {
	BaseHP=GOLEMGUARDHP3[LVL]
	CPMOD=0.5
	BaseMP=UNICORNMP3[LVL]}
	else {
	BaseHP=GOLEMGUARDHP2[LVL]
	CPMOD=0.5
	BaseMP=GRAILAPOMP2[LVL]}
	}
if (trans=="BOMBER")
	{if (race=="KF"||race=="KM") {
	BaseHP=BOMBERHP[LVL]
	CPMOD=0.5
	BaseMP=UNICORNMP[LVL]}
	else if (race=="HF"||race=="HM") {
	BaseHP=BOMBERHP3[LVL]
	CPMOD=0.5
	BaseMP=UNICORNMP3[LVL]}
	else {
	BaseHP=BOMBERHP2[LVL]
	CPMOD=0.5
	BaseMP=GRAILAPOMP2[LVL]}
	}
if (trans=="ONYX") {
	BaseHP=ONYXHP[LVL]
	CPMOD=0.5
	BaseMP=ONYXMP[LVL]}
if (trans=="BLADER") {
	BaseHP=BLADERHP[LVL]
	CPMOD=0.5
	BaseMP=GRAILAPOMP[LVL]}
if (trans=="DWARRIOR") {
	BaseHP=DWARRIORHP[LVL]
	CPMOD=0.5
	BaseMP=FINALFORMMP[LVL]}
if (trans=="DKNIGHT") {
	BaseHP=DKNIGHTHP[LVL]
	CPMOD=0.5
	BaseMP=FINALFORMMP[LVL]}
if (trans=="DROGUE") {
	BaseHP=DROGUEHP[LVL]
	CPMOD=0.5
	BaseMP=FINALFORMMP[LVL]}
if (trans=="DWIZARD") {
	BaseHP=DWIZARDHP[LVL]
	CPMOD=0.5
	BaseMP=DWIZARDMP[LVL]}
if (trans=="DSUMMONER"||trans=="DHEALER") {
	BaseHP=DSUMMONERHP[LVL]
	CPMOD=0.5
	BaseMP=DWIZARDMP[LVL]}
if (trans=="DENCHANTER") {
	BaseHP=DENCHANTERHP[LVL]
	CPMOD=0.5
	BaseMP=DWIZARDMP[LVL]}
if (trans=="ZAKEN") {
	BaseHP=ZAKENHP[LVL]
	CPMOD=0.5
	BaseMP=ZAKENMP[LVL]}
if (trans=="ANAKIM"||trans=="BENOM"||trans=="GORDON"||trans=="RANKU"||trans=="KECHI"||trans=="DEMONPRINCE") {
	BaseHP=ANAKIMHP[LVL]
	CPMOD=0.5
	BaseMP=ANAKIMMP[LVL]}
if (trans=="HERETIC") {
	BaseHP=HERETICHP[LVL]
	CPMOD=0.5
	BaseMP=HERETICMP[LVL]}
if (trans=="SABRETOOTH"||trans=="OELMAHUM") {
	BaseHP=SABREHP[LVL]
	CPMOD=0.5
	BaseMP=SABREMP[LVL]}
if (trans=="DOLLBLADER") {
	BaseHP=DOLLHP[LVL]
	CPMOD=0.5
	BaseMP=SABREMP[LVL]}
if (trans=="GOLEMARMOR") {
	BaseHP=GOLEMARMORHP[LVL]
	CPMOD=0.5
	BaseMP=FINALFORMMP[LVL]}

BaseCP=BaseHP*CPMOD

//Move Mode
var movemode=d.gI("MVM").value
movemode=MOVEMODE[movemode]

//Shield Grade
var shieldgrade=d.gI("SHDG").value
shieldgrade=GRADE[shieldgrade]
var shieldenchant=d.gI("SHDE").value
if (shieldgrade=="S")
	{shield=d.gI("SHDS").value;}
else if (shieldgrade=="A")
	{shield=d.gI("SHDA").value;}
else if (shieldgrade=="B")
	{shield=d.gI("SHDB").value;}
else if (shieldgrade=="C")
	{shield=d.gI("SHDC").value;}
else if (shieldgrade=="D")
	{shield=d.gI("SHDD").value;}
else if (shieldgrade=="N")
	{shield=d.gI("SHDN").value;}
else if (shieldgrade=="S80")
	{shield=d.gI("SHD80").value;}
else if (shieldgrade=="S84")
	{shield=d.gI("SHD84").value;}

if (shieldgrade=="S" && shield!="0")
	{AddHP=AddHP+AHPBSGRADE[shieldenchant]}
else if (shieldgrade=="A" && shield!="0")
	{AddHP=AddHP+AHPBAGRADE[shieldenchant]}
else if (shieldgrade=="B" && shield!="0")
	{AddHP=AddHP+AHPBBGRADE[shieldenchant]}
else if (shieldgrade=="C" && shield!="0")
	{AddHP=AddHP+AHPBCGRADE[shieldenchant]}
else if (shieldgrade=="D" && shield!="0")
	{AddHP=AddHP+AHPBDGRADE[shieldenchant]}
else if (shieldgrade=="S80" && shield!="0")
	{AddHP=AddHP+AHPBSGRADE[shieldenchant]}
else if (shieldgrade=="S84" && shield!="0")
	{AddHP=AddHP+AHPBSGRADE[shieldenchant]}

//Shields
Shield=SHIELDPDEF[shield]
ShieldSigil=SHIELDPDEFSIGIL[shield]
if (shield=="0")
{ShieldEvasion=0}
else if (shield>0)
{ShieldEvasion=-8}

//Shield Enchant
if (shieldenchant <= 3)
	{shieldunderenchant=shieldenchant;shieldoverenchant=0;}
else
	{shieldunderenchant=3;shieldoverenchant=shieldenchant-3;}
if (shield=="0") {
	shieldunderPDEF=0
	shieldoverPDEF=0
	BaseShieldBlockRate=0
	}
else if (shieldgrade=="N") {
	shieldunderPDEF=0
	shieldoverPDEF=0
	}
else if (Shield>0) {
	shieldunderPDEF=1
	shieldoverPDEF=3
	Shield=Shield+(shieldunderenchant*shieldunderPDEF)+(shieldoverenchant*shieldoverPDEF)
	}
else if (ShieldSigil>0) {
	shieldunderPDEF=1
	shieldoverPDEF=3
	ShieldSigil=ShieldSigil+(shieldunderenchant*shieldunderPDEF)+(shieldoverenchant*shieldoverPDEF)
	}

//Weapon Grade
var weapongrade=d.gI("WPNG").value
weapongrade=GRADE[weapongrade]
if (weapongrade=="S")
	{var weapon=d.gI("WPNS").value}
else if (weapongrade=="A")
	{var weapon=d.gI("WPNA").value}
else if (weapongrade=="B")
	{var weapon=d.gI("WPNB").value}
else if (weapongrade=="C")
	{var weapon=d.gI("WPNC").value}
else if (weapongrade=="D")
	{var weapon=d.gI("WPND").value}
else if (weapongrade=="N")
	{var weapon=d.gI("WPNN").value}
else if (weapongrade=="H")
	{var weapon=d.gI("WPNH").value}
else if (weapongrade=="S80")
	{var weapon=d.gI("WPN80").value}
else if (weapongrade=="S84")
	{var weapon=d.gI("WPN84").value}
	
//Disarm
	if (d.gI("DISC").checked==true)
		{BuffPATK=BuffPATK*0.6;weapon="0"}

//Weapon SAs
var weaponsa=document.forms['statcalculator'].WPNSA;
weaponsa.length=5
for (i=0;i<5;i++)
	{
	var p=i*2+4
	if (WEAPON[weapon][p]!="")
		{
		weaponsa.options[i] = new Option(WEAPON[weapon][p],WEAPON[weapon][p],false,weaponsa.options[i].selected);
		}
	if (WEAPON[weapon][p]==""||WEAPON[weapon][p]==null)
		{
		weaponsa.length=i
		break
		}
	}

//Weapon Enchant
var weaponenchant=d.gI("WPNE").value
if (weaponenchant <= 3)
	{weaponunderenchant=weaponenchant;weaponoverenchant=0;}
else
	{weaponunderenchant=3;weaponoverenchant=weaponenchant-3;}
if (weapon=="0") {
	d.gI("WPNE").disabled=true
	underMATK=0
	overMATK=0
	}
else if (weapongrade=="H") {
	d.gI("WPNE").disabled=true
	underMATK=0
	overMATK=0
	}
else if (weapongrade=="D"||weapongrade=="N") {
	d.gI("WPNE").disabled=false
	underMATK=2
	overMATK=4
	}
else if (weapongrade=="S"||weapongrade=="S80"||weapongrade=="S84") {
	d.gI("WPNE").disabled=false
	underMATK=4
	overMATK=8
	}
else {
	d.gI("WPNE").disabled=false
	underMATK=3
	overMATK=6
	}

//Weapons
WpnPATK=WEAPON[weapon][0]
WpnMATK=WEAPON[weapon][1]
WpnType=WEAPON[weapon][2]
if (WpnType!="Duals" && WpnType!="DualD")
	{
	var weapon_sa=d.gI("WPNSA").value
	var sasubvalue=d.gI("WPNSA").selectedIndex
	var samultiplier=sasubvalue*2+5
	}
else if (WpnType=="Duals"||WpnType=="DualD")
	{
	var duals_sa=WEAPON[weapon][4]
	var duals_v=WEAPON[weapon][5]
	}
if ((WpnType=="2hs"||WpnType=="2hb") && trans=="VANGUARD" && (JOB=="PA"||JOB=="TK"))
	{AddPATK=AddPATK+THMVANGUARD[LVL];BuffACC=BuffACC+3}
if (WpnType=="Duals" && trans=="VANGUARD" && (JOB=="DA"||JOB=="SK"))
	{AddPATK=AddPATK+DUALMVANGUARD[LVL];BuffASPD=BuffASPD*1.08}

var CSA=0
if (weapongrade=="D" && LVL<20 && weapon!=0)
	{BuffACC=BuffACC-20;d.gI("weapon grade penalty").innerHTML=GPA}
else if (weapongrade=="C" && LVL<40 && weapon!=0)
	{CSA=1;BuffACC=BuffACC-20;d.gI("weapon grade penalty").innerHTML=GPA}
else if (weapongrade=="B" && LVL<52 && weapon!=0)
	{CSA=1;BuffACC=BuffACC-20;d.gI("weapon grade penalty").innerHTML=GPA}
else if (weapongrade=="A" && LVL<61 && weapon!=0)
	{CSA=1;BuffACC=BuffACC-20;d.gI("weapon grade penalty").innerHTML=GPA}
else if ((weapongrade=="S"||weapongrade=="H") && LVL<76 && weapon!=0)
	{CSA=1;BuffACC=BuffACC-20;d.gI("weapon grade penalty").innerHTML=GPA}
else if (weapongrade=="S80" && LVL<80 && weapon!=0)
	{CSA=1;BuffACC=BuffACC-20;d.gI("weapon grade penalty").innerHTML=GPA}
else if (weapongrade=="S84" && LVL<84 && weapon!=0)
	{CSA=1;BuffACC=BuffACC-20;d.gI("weapon grade penalty").innerHTML=GPA}
else
	{d.gI("weapon grade penalty").innerHTML=" "}

if ((race=="HM"||race=="EM"||race=="DM"||race=="OM") && weapon==0)
	{WpnPATK=3}
if (weapon_sa=="Haste" && CSA==0)
	{BuffASPD=BuffASPD*WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Acumen" && CSA==0)
	{BuffCAST=BuffCAST*1.15}
else if (weapon_sa=="Mana Up" && CSA==0)
	{BuffMP=BuffMP*1.3}
else if (weapon_sa=="Health" && CSA==0)
	{BuffHP=BuffHP*1.25}
else if (weapon_sa=="Focus" && CSA==0)
	{AddCRIT=AddCRIT+WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Empower" && CSA==0)
	{AddMATK=AddMATK+WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Evasion" && CSA==0)
	{BuffEVA=BuffEVA+WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Guidance" && CSA==0)
	{BuffACC=BuffACC+WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Anger" && CSA==0)
	{BuffHP=BuffHP*0.85;AddPATK=AddPATK+WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Conversion" && CSA==0)
	{BuffMP=BuffMP*1.6;BuffHP=BuffHP*0.6}
else if (weapon_sa=="Rsk. Focus" && CSA==0)
	{AddCRIT60=AddCRIT60+WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Rsk. Haste" && CSA==0)
	{BuffASPD60=BuffASPD60*WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Rsk. Evasion" && CSA==0)
	{BuffEVA60=BuffEVA60+WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Magic Power" && CSA==0)
	{AddMATK=AddMATK+WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Critical Anger" && CSA==0)
	{BuffHP=BuffHP*0.85;AddCRITDMG=AddCRITDMG+WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Critical Damage" && CSA==0)
	{AddCRITDMG=AddCRITDMG+WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Quick Recovery" && CSA==0)
	{bowdelay=bowdelay*WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Back Blow" && CSA==0 && (position==3||position==5))
	{AddCOMBATCRIT=AddCOMBATCRIT+(WEAPON[weapon][samultiplier]*1.4)}
else if (weapon_sa=="HP Regeneration" && CSA==0)
	{AddHPR=AddHPR+(WEAPON[weapon][samultiplier]*movemode)}
else if (weapon_sa=="MP Regeneration" && CSA==0)
	{AddMPR=AddMPR+(WEAPON[weapon][samultiplier]*movemode)}
else if (weapon_sa=="HP Drain" && CSA==0)
	{BuffVR=BuffVR+WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Light" && CSA==0)
	{weightlimit=weightlimit*1.2}
else if (duals_sa=="HP/CP/MP" && weaponenchant >=4 && CSA==0)
	{BuffHP=BuffHP*1.15;BuffMP=BuffMP*1.2;BuffCP=BuffCP*1.3}
else if (duals_sa=="Guidance" && weaponenchant >=4 && CSA==0)
	{BuffACC=BuffACC+duals_v}
else if (duals_sa=="Health" && weaponenchant >=4 && CSA==0)
	{BuffHP=BuffHP*1.25}
else if (duals_sa=="Haste" && weaponenchant >=4 && CSA==0)
	{BuffASPD=BuffASPD*duals_v}
else if (duals_sa=="Focus" && weaponenchant >=4 && CSA==0)
	{AddCRIT=AddCRIT+duals_v}
else if (duals_sa=="Critical Damage" && weaponenchant >=4 && CSA==0)
	{AddCRITDMG=AddCRITDMG+duals_v}
else if (weapon=="330" && CSA==0)
	{BuffHP=BuffHP*1.25;BuffMP=BuffMP*1.3;BuffCP=BuffCP*1.5;BuffSBR=BuffSBR*1.39;BuffRD=BuffRD+0.09}
else if (weapon=="331" && CSA==0)
	{BuffHP=BuffHP*1.25;BuffMP=BuffMP*1.3;BuffCP=BuffCP*1.5;BuffRD=BuffRD+0.09;BuffSD=BuffSD*1.33}
else if (weapon=="332" && CSA==0)
	{BuffMP=BuffMP*1.3;BuffCP=BuffCP*1.5;bowdelay=bowdelay*0.932}
else if (weapon=="333" && CSA==0)
	{BuffHP=BuffHP*1.25;BuffCP=BuffCP*1.5;AddCRIT=AddCRIT+78.7;AddCRITDMG=AddCRITDMG+504}
else if (weapon=="334" && CSA==0)
	{BuffHP=BuffHP*1.25;BuffCP=BuffCP*1.5;BuffASPD=BuffASPD*1.07}
else if (weapon=="335" && CSA==0)
	{BuffHP=BuffHP*1.25;BuffMP=BuffMP*1.3;BuffCP=BuffCP*1.5;BuffEVA=BuffEVA+3.15}
else if (weapon=="336" && CSA==0)
	{BuffMP=BuffMP*1.3;BuffCP=BuffCP*1.5;BuffCAST=BuffCAST*1.15}
else if (weapon=="337" && CSA==0)
	{BuffMP=BuffMP*1.3;BuffCP=BuffCP*1.5;AddMATK=AddMATK+29.67}
else if (weapon=="338" && CSA==0)
	{BuffHP=BuffHP*1.25;BuffCP=BuffCP*1.5;BuffASPD=BuffASPD*1.07;BuffACC=BuffACC+4.89}
else if (weapon=="339" && CSA==0)
	{BuffMP=BuffMP*1.3;BuffCP=BuffCP*1.5;BuffASPD*BuffASPD*1.03;BuffVR=BuffVR+0.02}
else if (weapon=="340" && CSA==0)
	{BuffHP=BuffHP*1.25;BuffMP=BuffMP*1.3;BuffCP=BuffCP*1.5;AddCRIT=AddCRIT+78.7}
else if (duals_sa=="HP/Crt." && weaponenchant >=4 && CSA==0)
	{BuffHP=BuffHP*1.1;AddCRIT=AddCRIT+109}
if (weapon=="339" && CSA==0 && (position==3||position==5))
	{AddCOMBATCRIT=AddCOMBATCRIT+22}

//Weapon Types
var ShieldDisabled=false
var Range="SR"
if (WpnType=="unequipped")
	{WpnSpd=300;WpnAcc=0;WpnCrt=40;WpnMAS="Fist";ShieldDisabled=false;randdmg=1.1;minranddmg=0.9;Range="SR"}
else if (WpnType=="2hs")
	{WpnSpd=325;WpnAcc=0;WpnCrt=80;WpnMAS="Sword";ShieldDisabled=true;randdmg=1.1;minranddmg=0.9;Range="SR"}
else if (WpnType=="2hb")
	{WpnSpd=325;WpnAcc=4.75;WpnCrt=40;WpnMAS="Blunt";ShieldDisabled=true;randdmg=1.2;minranddmg=0.8;Range="SR"}
else if (WpnType=="Sword")
	{WpnSpd=379;WpnAcc=0;WpnCrt=80;WpnMAS="Sword";ShieldDisabled=false;randdmg=1.1;minranddmg=0.9;Range="SR"}
else if (WpnType=="Duals")
	{WpnSpd=325;WpnAcc=0;WpnCrt=80;WpnMAS="Duals";ShieldDisabled=true;randdmg=1.1;minranddmg=0.9;Range="SR"}
else if (WpnType=="Blunt")
	{WpnSpd=379;WpnAcc=4.75;WpnCrt=40;WpnMAS="Blunt";ShieldDisabled=false;randdmg=1.2;minranddmg=0.8;Range="SR"}
else if (WpnType=="Bow")
	{WpnSpd=293;WpnAcc=(-3.75);WpnCrt=120;WpnMAS="Bow";ShieldDisabled=true;randdmg=1.05;minranddmg=0.95;Range="LR"}
else if (WpnType=="YumiBow")
	{WpnSpd=227;WpnAcc=(-3.75);WpnCrt=120;WpnMAS="Bow";ShieldDisabled=true;randdmg=1.05;minranddmg=0.95;bowdelay=bowdelay*0.5466;Range="LR"}
else if (WpnType=="Dagger")
	{WpnSpd=433;WpnAcc=(-3.75);WpnCrt=120;WpnMAS="Dagger";ShieldDisabled=false;randdmg=1.05;minranddmg=0.95;Range="SR"}
else if (WpnType=="Polearm")
	{WpnSpd=325;WpnAcc=(-3.75);WpnCrt=80;WpnMAS="Polearm";ShieldDisabled=true;randdmg=1.1;minranddmg=0.9;Range="SR"}
else if (WpnType=="Fist")
	{WpnSpd=325;WpnAcc=4.75;WpnCrt=40;WpnMAS="Fist";ShieldDisabled=true;randdmg=1.05;minranddmg=0.95;Range="SR"}
else if (WpnType=="Etc")
	{WpnSpd=379;WpnAcc=4.75;WpnCrt=40;WpnMAS="Etc";ShieldDisabled=false;randdmg=1.1;minranddmg=0.9;Range="SR"}
else if (WpnType=="Ancient")
	{WpnSpd=350;WpnAcc=2;WpnCrt=60;WpnMAS="Ancient";ShieldDisabled=true;randdmg=1.15;minranddmg=0.85;Range="SR"}
else if (WpnType=="Rapier")
	{WpnSpd=406;WpnAcc=-1.5;WpnCrt=100;WpnMAS="Rapier";ShieldDisabled=false;randdmg=1.4;minranddmg=0.6;Range="SR"}
else if (WpnType=="Crossbow")
	{WpnSpd=303;WpnAcc=-1.5;WpnCrt=100;WpnMAS="Crossbow";ShieldDisabled=true;randdmg=1.1;minranddmg=0.9;bowdelay=bowdelay*0.2666;Range="LR"}
else if (WpnType=="DualD")
	{WpnSpd=433;WpnAcc=(-3.75);WpnCrt=120;WpnMAS="Dagger";ShieldDisabled=true;randdmg=1.05;minranddmg=0.95;Range="SR"}

if (ShieldDisabled==true) {
	d.gI("SHDS").disabled=true
	d.gI("SHDA").disabled=true
	d.gI("SHDB").disabled=true
	d.gI("SHDC").disabled=true
	d.gI("SHDD").disabled=true
	d.gI("SHDN").disabled=true
	d.gI("SHD80").disabled=true
	d.gI("SHD84").disabled=true
	shield="unequipped"
	Shield=0
	ShieldSigil=0
	ShieldEvasion=0
	BaseShieldBlockRate=0
	}
else if (ShieldDisabled==false) {
	d.gI("SHDS").disabled=false
	d.gI("SHDA").disabled=false
	d.gI("SHDB").disabled=false
	d.gI("SHDC").disabled=false
	d.gI("SHDD").disabled=false
	d.gI("SHDN").disabled=false
	d.gI("SHD80").disabled=false
	d.gI("SHD84").disabled=false
}
if (shieldgrade=="N"||(Shield=="0" && ShieldSigil=="0")) {
	d.gI("SHDE").disabled=true
	}
else {
	d.gI("SHDE").disabled=false
	}

if (shieldgrade=="D" && LVL<20 && (Shield!=0 && ShieldSigil!=0))
	{pen=pen+1;d.gI("SHD grade penalty").innerHTML=GPA}
else if (shieldgrade=="C" && LVL<40 && (Shield!=0 && ShieldSigil!=0))
	{pen=pen+1;d.gI("SHD grade penalty").innerHTML=GPA}
else if (shieldgrade=="B" && LVL<52 && (Shield!=0 && ShieldSigil!=0))
	{pen=pen+1;d.gI("SHD grade penalty").innerHTML=GPA}
else if (shieldgrade=="A" && LVL<61 && (Shield!=0 && ShieldSigil!=0))
	{pen=pen+1;d.gI("SHD grade penalty").innerHTML=GPA}
else if (shieldgrade=="S" && LVL<76 && (Shield!=0 && ShieldSigil!=0))
	{pen=pen+1;d.gI("SHD grade penalty").innerHTML=GPA}
else if (shieldgrade=="S80" && LVL<80 && (Shield!=0 && ShieldSigil!=0))
	{pen=pen+1;d.gI("SHD grade penalty").innerHTML=GPA}
else if (shieldgrade=="S84" && LVL<80 && (Shield!=0 && ShieldSigil!=0))
	{pen=pen+1;d.gI("SHD grade penalty").innerHTML=GPA}
else
	{d.gI("SHD grade penalty").innerHTML=" "}


if (WpnMAS=="Bow" && (weapongrade=="S"||weapongrade=="S80"||weapongrade=="S84"))
	{underPATK=10;overPATK=20}
else if (WpnMAS=="Bow" && weapongrade=="A")
	{underPATK=8;overPATK=16}
else if (WpnMAS=="Bow" && (weapongrade=="B" || weapongrade=="C"))
	{underPATK=6;overPATK=12}
else if (WpnMAS=="Bow" && (weapongrade=="D"||weapongrade=="N"))
	{underPATK=4;overPATK=8}
else if ((WpnType=="Dagger"||WpnType=="Rapier") && (weapongrade=="S"||weapongrade=="S80"||weapongrade=="S84"))
	{underPATK=5;overPATK=10}
else if ((WpnType=="Dagger"||WpnType=="Rapier") && weapongrade=="A")
	{underPATK=4;overPATK=8}
else if ((WpnType=="Dagger"||WpnType=="Rapier") && (weapongrade=="B" || weapongrade=="C"))
	{underPATK=3;overPATK=6}
else if ((WpnType=="Dagger"||WpnType=="Rapier") && (weapongrade=="D"||weapongrade=="N"))
	{underPATK=2;overPATK=4}
else if ((WpnType=="2hs"||WpnType=="2hb"||WpnType=="Ancient"||WpnType=="Crossbow") && (weapongrade=="S"||weapongrade=="S80"||weapongrade=="S84"))
	{underPATK=6;overPATK=12}
else if ((WpnType=="2hs"||WpnType=="2hb"||WpnType=="Ancient"||WpnType=="Crossbow") && weapongrade=="A")
	{underPATK=5;overPATK=10}
else if ((WpnType=="2hs"||WpnType=="2hb"||WpnType=="Ancient"||WpnType=="Crossbow") && (weapongrade=="B" || weapongrade=="C"))
	{underPATK=4;overPATK=8}
else if ((WpnType=="2hs"||WpnType=="2hb"||WpnType=="Ancient"||WpnType=="Crossbow") && (weapongrade=="D"||weapongrade=="N"))
	{underPATK=2;overPATK=4}
else if ((WpnType=="Duals"||WpnType=="Fist"||WpnType=="DualD") && (weapongrade=="S"||weapongrade=="S80"||weapongrade=="S84"))
	{underPATK=6;overPATK=12}
else if ((WpnType=="Duals"||WpnType=="Fist") && weapongrade=="A")
	{underPATK=5;overPATK=10}
else if ((WpnType=="Duals"||WpnType=="Fist") && (weapongrade=="B" || weapongrade=="C"))
	{underPATK=4;overPATK=8}
else if ((WpnType=="Duals"||WpnType=="Fist") && (weapongrade=="D"||weapongrade=="N"))
	{underPATK=4;overPATK=8}
else if ((WpnType=="Sword"||WpnType=="Blunt") && (weapongrade=="S"||weapongrade=="S80"||weapongrade=="S84"))
	{underPATK=5;overPATK=10}
else if ((WpnType=="Sword"||WpnType=="Blunt") && weapongrade=="A")
	{underPATK=4;overPATK=8}
else if ((WpnType=="Sword"||WpnType=="Blunt") && (weapongrade=="B" || weapongrade=="C"))
	{underPATK=3;overPATK=6}
else if ((WpnType=="Sword"||WpnType=="Blunt") && (weapongrade=="D"||weapongrade=="N"))
	{underPATK=2;overPATK=4}
else if (WpnType=="Polearm" && (weapongrade=="S"||weapongrade=="S80"||weapongrade=="S84"))
	{underPATK=5;overPATK=10}
else if (WpnType=="Polearm" && weapongrade=="A")
	{underPATK=4;overPATK=8}
else if (WpnType=="Polearm" && (weapongrade=="B" || weapongrade=="C"))
	{underPATK=3;overPATK=6}
else if (WpnType=="Polearm" && (weapongrade=="D"||weapongrade=="N"))
	{underPATK=2;overPATK=4}

//Attributes
if ((weapongrade=="S"||weapongrade=="S80"||weapongrade=="S84") &&  weapon!=0)
	{d.gI("ATT").style.display='block'
	d.gI("ATT2").style.display='block'}
else
	{d.gI("ATT").style.display='none'
	d.gI("ATT2").style.display='none'}
		
var wpnatt = + d.gI("ATTS").value
	if (weapongrade=="S"||weapongrade=="S80"||weapongrade=="S84")
		{var subatt=WPNATT[wpnatt]
		BuffDAMAGE=BuffDAMAGE*subatt}
	
//Helmet Grade
var helmetgrade=d.gI("HLMG").value
helmetgrade=GRADE[helmetgrade]
var helmetenchant=d.gI("HLME").value
if (helmetgrade=="S")
	{helmet=d.gI("HLMS").value}
else if (helmetgrade=="A")
	{helmet=d.gI("HLMA").value}
else if (helmetgrade=="B")
	{helmet=d.gI("HLMB").value}
else if (helmetgrade=="C")
	{helmet=d.gI("HLMC").value}
else if (helmetgrade=="D")
	{helmet=d.gI("HLMD").value}
else if (helmetgrade=="N")
	{helmet=d.gI("HLMN").value}
else if (helmetgrade=="S80")
	{helmet=d.gI("HLM80").value}
else if (helmetgrade=="S84")
	{helmet=d.gI("HLM84").value}
	
if (helmetgrade=="S" && helmet!="0")
	{AddHP=AddHP+AHPBSGRADE[helmetenchant]}
else if (helmetgrade=="A" && helmet!="0")
	{AddHP=AddHP+AHPBAGRADE[helmetenchant]}
else if (helmetgrade=="B" && helmet!="0")
	{AddHP=AddHP+AHPBBGRADE[helmetenchant]}
else if (helmetgrade=="C" && helmet!="0")
	{AddHP=AddHP+AHPBCGRADE[helmetenchant]}
else if (helmetgrade=="D" && helmet!="0")
	{AddHP=AddHP+AHPBDGRADE[helmetenchant]}
else if (helmetgrade=="S80" && helmet!="0")
	{AddHP=AddHP+AHPBSGRADE[helmetenchant]}
else if (helmetgrade=="S84" && helmet!="0")
	{AddHP=AddHP+AHPBSGRADE[helmetenchant]}

if (helmetgrade=="D" && LVL<20 && helmet!=0)
	{pen=pen+1;d.gI("HLM grade penalty").innerHTML=GPA}
else if (helmetgrade=="C" && LVL<40 && helmet!=0)
	{pen=pen+1;d.gI("HLM grade penalty").innerHTML=GPA}
else if (helmetgrade=="B" && LVL<52 && helmet!=0)
	{pen=pen+1;d.gI("HLM grade penalty").innerHTML=GPA}
else if (helmetgrade=="A" && LVL<61 && helmet!=0)
	{pen=pen+1;d.gI("HLM grade penalty").innerHTML=GPA}
else if (helmetgrade=="S" && LVL<76 && helmet!=0)
	{pen=pen+1;d.gI("HLM grade penalty").innerHTML=GPA}
else if (helmetgrade=="S80" && LVL<80 && helmet!=0)
	{pen=pen+1;d.gI("HLM grade penalty").innerHTML=GPA}
else if (helmetgrade=="S84" && LVL<84 && helmet!=0)
	{pen=pen+1;d.gI("HLM grade penalty").innerHTML=GPA}
else
	{d.gI("HLM grade penalty").innerHTML=" "}

//Helmets
Helmet=HELMETPDEF[helmet]
HelmetSet=HELMETSET[helmet]

//Helmet Enchant
if (helmetenchant <= 3)
	{helmetunderenchant=helmetenchant;helmetoverenchant=0;}
else
	{helmetunderenchant=3;helmetoverenchant=helmetenchant-3;}
if (helmetgrade=="N"||helmet=="0") {
	d.gI("HLME").disabled=true
	helmetunderPDEF=0
	helmetoverPDEF=0
	Helmet=Helmet
	}
else {
	d.gI("HLME").disabled=false
	helmetunderPDEF=1
	helmetoverPDEF=3
	Helmet=Helmet+(helmetunderenchant*helmetunderPDEF)+(helmetoverenchant*helmetoverPDEF)
	}

//Body Grade
var lowergrade=d.gI("LWRG").value
lowergrade=GRADE[lowergrade]
var lowerenchant=d.gI("LWRE").value
var lowerenchanthp=0
if (lowergrade=="S")
	{lower=d.gI("LWRS").value}
else if (lowergrade=="A")
	{lower=d.gI("LWRA").value}
else if (lowergrade=="B")
	{lower=d.gI("LWRB").value}
else if (lowergrade=="C")
	{lower=d.gI("LWRC").value}
else if (lowergrade=="D")
	{lower=d.gI("LWRD").value}
else if (lowergrade=="N")
	{lower=d.gI("LWRN").value}
else if (lowergrade=="S80")
	{lower=d.gI("LWR80").value}
else if (lowergrade=="S84")
	{lower=d.gI("LWR84").value}
	
if (lowergrade=="S" && lower!="0")
	{lowerenchanthp=AHPBSGRADE[lowerenchant]}
else if (lowergrade=="A" && lower!="0")
	{lowerenchanthp=AHPBAGRADE[lowerenchant]}
else if (lowergrade=="B" && lower!="0")
	{lowerenchanthp=AHPBBGRADE[lowerenchant]}
else if (lowergrade=="C" && lower!="0")
	{lowerenchanthp=AHPBCGRADE[lowerenchant]}
else if (lowergrade=="D" && lower!="0")
	{lowerenchanthp=AHPBDGRADE[lowerenchant]}
else if (lowergrade=="S80" && lower!="0")
	{lowerenchanthp=AHPBSGRADE[lowerenchant]}
else if (lowergrade=="S84" && lower!="0")
	{lowerenchanthp=AHPBSGRADE[lowerenchant]}

//Body (Lower)
Lower=LOWERPDEF[lower]
ALType=LOWERTYPE[lower]
LowerSet=LOWERSET[lower]
if ((race=="HM"||race=="EM"||race=="DM"||race=="OM") && lower==0)
{Lower=8}

//Body (Lower) Enchant
if (lowerenchant <= 3)
	{lowerunderenchant=lowerenchant;loweroverenchant=0;}
else
	{lowerunderenchant=3;loweroverenchant=lowerenchant-3;}
if (lowergrade=="N"||lower=="0") {
	d.gI("LWRE").disabled=true
	lowerunderPDEF=0
	loweroverPDEF=0
	Lower=Lower
	}
else {
	d.gI("LWRE").disabled=false
	lowerunderPDEF=1
	loweroverPDEF=3
	Lower=Lower+(lowerunderenchant*lowerunderPDEF)+(loweroverenchant*loweroverPDEF)
	}

//Body (Upper) Grade
var uppergrade=d.gI("UPRG").value
uppergrade=GRADE[uppergrade]
var upperenchant=d.gI("UPRE").value
if (uppergrade=="S")
	{upper=d.gI("UPRS").value}
else if (uppergrade=="A")
	{upper=d.gI("UPRA").value}
else if (uppergrade=="B")
	{upper=d.gI("UPRB").value}
else if (uppergrade=="C")
	{upper=d.gI("UPRC").value}
else if (uppergrade=="D")
	{upper=d.gI("UPRD").value}
else if (uppergrade=="N")
	{upper=d.gI("UPRN").value}
else if (uppergrade=="S80")
	{upper=d.gI("UPR80").value}
else if (uppergrade=="S84")
	{upper=d.gI("UPR84").value}

if (uppergrade=="D" && LVL<20 && upper!=0)
	{pen=pen+1;d.gI("UPR grade penalty").innerHTML=GPA}
else if (uppergrade=="C" && LVL<40 && upper!=0)
	{pen=pen+1;d.gI("UPR grade penalty").innerHTML=GPA}
else if (uppergrade=="B" && LVL<52 && upper!=0)
	{pen=pen+1;d.gI("UPR grade penalty").innerHTML=GPA}
else if (uppergrade=="A" && LVL<61 && upper!=0)
	{pen=pen+1;d.gI("UPR grade penalty").innerHTML=GPA}
else if (uppergrade=="S" && LVL<76 && upper!=0)
	{pen=pen+1;d.gI("UPR grade penalty").innerHTML=GPA}
else if (uppergrade=="S80" && LVL<80 && upper!=0)
	{pen=pen+1;d.gI("UPR grade penalty").innerHTML=GPA}
else if (uppergrade=="S84" && LVL<84 && upper!=0)
	{pen=pen+1;d.gI("UPR grade penalty").innerHTML=GPA}
else
	{d.gI("UPR grade penalty").innerHTML=" "}

//Upper
Upper=UPPERPDEF[upper]
AddMP=AddMP+UPPERMP[upper]
AUType=UPPERTYPE[upper]
fullbody=FULLBODY[upper]
UpperSet=UPPERSET[upper]
if ((race=="HM"||race=="EM"||race=="DM"||race=="OM") && upper==0)
	{Upper=15}

//Body (Upper) Enchant
if (upperenchant <= 3)
	{upperunderenchant=upperenchant;upperoverenchant=0;}
else
	{upperunderenchant=3;upperoverenchant=upperenchant-3;}
if (uppergrade=="N"||upper=="0") {
	d.gI("UPRE").disabled=true
	upperunderPDEF=0
	upperoverPDEF=0
	Upper=Upper
	}
else {
	d.gI("UPRE").disabled=false
	upperunderPDEF=1
	upperoverPDEF=3
	Upper=Upper+(upperunderenchant*upperunderPDEF)+(upperoverenchant*upperoverPDEF)
	}

//Disable Lower when Upper is a full body armor
if (fullbody==1)
	{
	d.gI("LWRS").disabled=true
	d.gI("LWRA").disabled=true
	d.gI("LWRB").disabled=true
	d.gI("LWRC").disabled=true
	d.gI("LWRD").disabled=true
	d.gI("LWRN").disabled=true
	d.gI("LWRE").disabled=true
	d.gI("LWR80").disabled=true
	d.gI("LWR84").disabled=true
	lower="unequipped"
	Lower=0
	}
else if (fullbody==0)
	{
	d.gI("LWRS").disabled=false
	d.gI("LWRA").disabled=false
	d.gI("LWRB").disabled=false
	d.gI("LWRC").disabled=false
	d.gI("LWRD").disabled=false
	d.gI("LWRN").disabled=false
	d.gI("LWR80").disabled=false
	d.gI("LWR84").disabled=false
	AddMP=AddMP+LOWERMP[lower]
	AddHP=AddHP+lowerenchanthp
	}
	
if ((uppergrade=="S"||uppergrade=="S80"||uppergrade=="S84") && fullbody==0 && upper!="0")
	{AddHP=AddHP+AHPBSGRADE[upperenchant]}
else if ((uppergrade=="S"||uppergrade=="S80"||uppergrade=="S84") && fullbody==1 && upper!="0")
	{AddHP=AddHP+AHPBSGRADEFULL[upperenchant]}
else if (uppergrade=="A" && fullbody==0 && upper!="0")
	{AddHP=AddHP+AHPBAGRADE[upperenchant]}
else if (uppergrade=="A" && fullbody==1 && upper!="0")
	{AddHP=AddHP+AHPBAGRADEFULL[upperenchant]}
else if (uppergrade=="B" && fullbody==0 && upper!="0")
	{AddHP=AddHP+AHPBBGRADE[upperenchant]}
else if (uppergrade=="B" && fullbody==1 && upper!="0")
	{AddHP=AddHP+AHPBBGRADEFULL[upperenchant]}
else if (uppergrade=="C" && fullbody==0 && upper!="0")
	{AddHP=AddHP+AHPBCGRADE[upperenchant]}
else if (uppergrade=="C" && fullbody==1 && upper!="0")
	{AddHP=AddHP+AHPBCGRADEFULL[upperenchant]}
else if (uppergrade=="D" && fullbody==0 && upper!="0")
	{AddHP=AddHP+AHPBDGRADE[upperenchant]}
else if (uppergrade=="D" && fullbody==1 && upper!="0")
	{AddHP=AddHP+AHPBDGRADEFULL[upperenchant]}

if (lowergrade=="D" && LVL<20 && lower!=0 && fullbody==0)
	{pen=pen+1;d.gI("LWR grade penalty").innerHTML=GPA}
else if (lowergrade=="C" && LVL<40 && lower!=0 && fullbody==0)
	{pen=pen+1;d.gI("LWR grade penalty").innerHTML=GPA}
else if (lowergrade=="B" && LVL<52 && lower!=0 && fullbody==0)
	{pen=pen+1;d.gI("LWR grade penalty").innerHTML=GPA}
else if (lowergrade=="A" && LVL<61 && lower!=0 && fullbody==0)
	{pen=pen+1;d.gI("LWR grade penalty").innerHTML=GPA}
else if (lowergrade=="S" && LVL<76 && lower!=0 && fullbody==0)
	{pen=pen+1;d.gI("LWR grade penalty").innerHTML=GPA}
else if (lowergrade=="S80" && LVL<80 && lower!=0 && fullbody==0)
	{pen=pen+1;d.gI("LWR grade penalty").innerHTML=GPA}
else if (lowergrade=="S84" && LVL<84 && lower!=0 && fullbody==0)
	{pen=pen+1;d.gI("LWR grade penalty").innerHTML=GPA}
else
	{d.gI("LWR grade penalty").innerHTML=" "}

//Armor Types (Heavy/Light/Robe)
if (AUType=="H" && (ALType=="H"||fullbody==1))
	{AType="H"}
else if (AUType=="L" && (ALType=="L"||fullbody==1))
	{AType="L"}
else if (AUType=="R" && (ALType=="R"||fullbody==1))
	{AType="R"}

//Glove Grade
var glovegrade=d.gI("GLVG").value
glovegrade=GRADE[glovegrade]
var gloveenchant=d.gI("GLVE").value
if (glovegrade=="S")
	{glove=d.gI("GLVS").value}
else if (glovegrade=="A")
	{glove=d.gI("GLVA").value}
else if (glovegrade=="B")
	{glove=d.gI("GLVB").value}
else if (glovegrade=="C")
	{glove=d.gI("GLVC").value}
else if (glovegrade=="D")
	{glove=d.gI("GLVD").value}
else if (glovegrade=="N")
	{glove=d.gI("GLVN").value}
else if (glovegrade=="S80")
	{glove=d.gI("GLV80").value}
else if (glovegrade=="S84")
	{glove=d.gI("GLV84").value}
	
if (glovegrade=="S" && glove!="0")
	{AddHP=AddHP+AHPBSGRADE[gloveenchant]}
else if (glovegrade=="A" && glove!="0")
	{AddHP=AddHP+AHPBAGRADE[gloveenchant]}
else if (glovegrade=="B" && glove!="0")
	{AddHP=AddHP+AHPBBGRADE[gloveenchant]}
else if (glovegrade=="C" && glove!="0")
	{AddHP=AddHP+AHPBCGRADE[gloveenchant]}
else if (glovegrade=="D" && glove!="0")
	{AddHP=AddHP+AHPBDGRADE[gloveenchant]}
else if (glovegrade=="S80" && glove!="0")
	{AddHP=AddHP+AHPBSGRADE[gloveenchant]}
else if (glovegrade=="S84" && glove!="0")
	{AddHP=AddHP+AHPBSGRADE[gloveenchant]}

if (glovegrade=="D" && LVL<20 && glove!=0)
	{pen=pen+1;d.gI("GLV grade penalty").innerHTML=GPA}
else if (glovegrade=="C" && LVL<40 && glove!=0)
	{pen=pen+1;d.gI("GLV grade penalty").innerHTML=GPA}
else if (glovegrade=="B" && LVL<52 && glove!=0)
	{pen=pen+1;d.gI("GLV grade penalty").innerHTML=GPA}
else if (glovegrade=="A" && LVL<61 && glove!=0)
	{pen=pen+1;d.gI("GLV grade penalty").innerHTML=GPA}
else if (glovegrade=="S" && LVL<76 && glove!=0)
	{pen=pen+1;d.gI("GLV grade penalty").innerHTML=GPA}
else if (glovegrade=="S80" && LVL<80 && glove!=0)
	{pen=pen+1;d.gI("GLV grade penalty").innerHTML=GPA}
else if (glovegrade=="S84" && LVL<84 && glove!=0)
	{pen=pen+1;d.gI("GLV grade penalty").innerHTML=GPA}
else
	{d.gI("GLV grade penalty").innerHTML=" "}

//Glove
Glove=GLOVEPDEF[glove]
GloveSet=GLOVESET[glove]

//Glove Enchant
if (gloveenchant <= 3)
	{gloveunderenchant=gloveenchant;gloveoverenchant=0;}
else
	{gloveunderenchant=3;gloveoverenchant=gloveenchant-3;}
if (glovegrade=="N"||glove=="0") {
	d.gI("GLVE").disabled=true
	gloveunderPDEF=0
	gloveoverPDEF=0
	Glove=Glove
	}
else {
	d.gI("GLVE").disabled=false
	gloveunderPDEF=1
	gloveoverPDEF=3
	Glove=Glove+(gloveunderenchant*gloveunderPDEF)+(gloveoverenchant*gloveoverPDEF)
	}

//Boot Grade
var bootgrade=d.gI("BOOG").value
bootgrade=GRADE[bootgrade]
var bootenchant=d.gI("BOOE").value
if (bootgrade=="S")
	{boot=d.gI("BOOS").value}
else if (bootgrade=="A")
	{boot=d.gI("BOOA").value}
else if (bootgrade=="B")
	{boot=d.gI("BOOB").value}
else if (bootgrade=="C")
	{boot=d.gI("BOOC").value}
else if (bootgrade=="D")
	{boot=d.gI("BOOD").value}
else if (bootgrade=="N")
	{boot=d.gI("BOON").value}
else if (bootgrade=="S80")
	{boot=d.gI("BOO80").value}
else if (bootgrade=="S84")
	{boot=d.gI("BOO84").value}
	
if (bootgrade=="S" && boot!="0")
	{AddHP=AddHP+AHPBSGRADE[bootenchant]}
else if (bootgrade=="A" && boot!="0")
	{AddHP=AddHP+AHPBAGRADE[bootenchant]}
else if (bootgrade=="B" && boot!="0")
	{AddHP=AddHP+AHPBBGRADE[bootenchant]}
else if (bootgrade=="C" && boot!="0")
	{AddHP=AddHP+AHPBCGRADE[bootenchant]}
else if (bootgrade=="D" && boot!="0")
	{AddHP=AddHP+AHPBDGRADE[bootenchant]}
else if (bootgrade=="S80" && boot!="0")
	{AddHP=AddHP+AHPBSGRADE[bootenchant]}
else if (bootgrade=="S84" && boot!="0")
	{AddHP=AddHP+AHPBSGRADE[bootenchant]}

if (bootgrade=="D" && LVL<20 && boot!=0)
	{pen=pen+1;d.gI("BOO grade penalty").innerHTML=GPA}
else if (bootgrade=="C" && LVL<40 && boot!=0)
	{pen=pen+1;d.gI("BOO grade penalty").innerHTML=GPA}
else if (bootgrade=="B" && LVL<52 && boot!=0)
	{pen=pen+1;d.gI("BOO grade penalty").innerHTML=GPA}
else if (bootgrade=="A" && LVL<61 && boot!=0)
	{pen=pen+1;d.gI("BOO grade penalty").innerHTML=GPA}
else if (bootgrade=="S" && LVL<76 && boot!=0)
	{pen=pen+1;d.gI("BOO grade penalty").innerHTML=GPA}
else if (bootgrade=="S80" && LVL<80 && boot!=0)
	{pen=pen+1;d.gI("BOO grade penalty").innerHTML=GPA}
else if (bootgrade=="S84" && LVL<84 && boot!=0)
	{pen=pen+1;d.gI("BOO grade penalty").innerHTML=GPA}
else
	{d.gI("BOO grade penalty").innerHTML=" "}

//Boot
Boot=BOOTPDEF[boot]
BootSet=BOOTSET[boot]

//Boot Enchant
if (bootenchant <= 3)
	{bootunderenchant=bootenchant;bootoverenchant=0;}
else
	{bootunderenchant=3;bootoverenchant=bootenchant-3;}
if (bootgrade=="N"||boot=="0") {
	d.gI("BOOE").disabled=true
	bootunderPDEF=0
	bootoverPDEF=0
	Boot=Boot
	}
else {
	d.gI("BOOE").disabled=false
	bootunderPDEF=1
	bootoverPDEF=3
	Boot=Boot+(bootunderenchant*bootunderPDEF)+(bootoverenchant*bootoverPDEF)
	}
	
//Underwear Grade
var undgrade=d.gI("UNDG").value
undgrade=GRADE[undgrade]
var undenchant=d.gI("UNDE").value
if (undgrade=="S")
	{und=d.gI("UNDS").value}
else if (undgrade=="A")
	{und=d.gI("UNDA").value}
else if (undgrade=="B")
	{und=d.gI("UNDB").value}
else if (undgrade=="C")
	{und=d.gI("UNDC").value}
else if (undgrade=="D")
	{und=d.gI("UNDD").value}
else if (undgrade=="N")
	{und=d.gI("UNDN").value}
else if (undgrade=="S80")
	{und=d.gI("UND80").value}
else if (undgrade=="S84")
	{und=d.gI("UND84").value}

if (undgrade=="S" && und!="0")
	{AddHP=AddHP+AHPBSGRADE[undenchant]}
else if (undgrade=="A" && und!="0")
	{AddHP=AddHP+AHPBAGRADE[undenchant]}
else if (undgrade=="B" && und!="0")
	{AddHP=AddHP+AHPBBGRADE[undenchant]}
else if (undgrade=="C" && und!="0")
	{AddHP=AddHP+AHPBCGRADE[undenchant]}
else if (undgrade=="D" && und!="0")
	{AddHP=AddHP+AHPBDGRADE[undenchant]}
else if (undgrade=="S80" && und!="0")
	{AddHP=AddHP+AHPBSGRADE[undenchant]}
else if (undgrade=="S84" && und!="0")
	{AddHP=AddHP+AHPBSGRADE[undenchant]}

if (undgrade=="D" && LVL<20 && und!=0)
	{pen=pen+1;d.gI("UND grade penalty").innerHTML=GPA}
else if (undgrade=="C" && LVL<40 && und!=0)
	{pen=pen+1;d.gI("UND grade penalty").innerHTML=GPA}
else if (undgrade=="B" && LVL<52 && und!=0)
	{pen=pen+1;d.gI("UND grade penalty").innerHTML=GPA}
else if (undgrade=="A" && LVL<61 && und!=0)
	{pen=pen+1;d.gI("UND grade penalty").innerHTML=GPA}
else if (undgrade=="S" && LVL<76 && und!=0)
	{pen=pen+1;d.gI("UND grade penalty").innerHTML=GPA}
else if (undgrade=="S80" && LVL<80 && und!=0)
	{pen=pen+1;d.gI("UND grade penalty").innerHTML=GPA}
else if (undgrade=="S84" && LVL<84 && und!=0)
	{pen=pen+1;d.gI("UND grade penalty").innerHTML=GPA}
else
	{d.gI("UND grade penalty").innerHTML=" "}

//Underwear SAs
var undsa=document.forms['statcalculator'].UNDSA;
undsa.length=5
for (i=0;i<5;i++)
	{
	var p=i*2+1
	if (UND[und][p]!="")
		{
		undsa.options[i] = new Option(UND[und][p],UND[und][p],false,undsa.options[i].selected);
		}
	if (UND[und][p]==""||UND[und][p]==null)
		{
		undsa.length=i
		break
		}
	}
	
//Underwear Enchant
Und=UND[und][0]
if (undenchant <= 3)
	{undunderenchant=undenchant;undoverenchant=0;}
else
	{undunderenchant=3;undoverenchant=undenchant-3;}
if (undgrade=="N"||und=="0") {
	d.gI("UNDE").disabled=true
	undunderPDEF=0
	undoverPDEF=0
	Und=Und
	}
else {
	d.gI("UNDE").disabled=false
	undunderPDEF=1
	undoverPDEF=3
	Und=Und+(undunderenchant*undunderPDEF)+(undoverenchant*undoverPDEF)
	}
	
//Underwear
var und_sa=d.gI("UNDSA").value
var undsubvalue=d.gI("UNDSA").selectedIndex
var undmultiplier=undsubvalue*2+2
if (und_sa=="HP" && undenchant>=4)
	{AddHP=AddHP+UND[und][undmultiplier]}
else if (und_sa=="CP" && undenchant>=4)
	{AddCP=AddCP+UND[und][undmultiplier]}
else if (und_sa=="MP" && undenchant>=4)
	{AddMP=AddMP+UND[und][undmultiplier]}
if (und==13)
	(AddMP=AddMP+40)

//Shoulder Type
var shouldertype=d.gI("STY").value
var shoulderset
if (shouldertype=="0")
	{shoulderset=d.gI("SHV").value}
else if (shouldertype=="1")
	{shoulderset=d.gI("SLT").value}
else if (shouldertype=="2")
	{shoulderset=d.gI("SRB").value}

//Necklace Grade
var necklacegrade=d.gI("NCKG").value
necklacegrade=GRADE[necklacegrade]
if (necklacegrade=="S")
	{necklace=d.gI("NCKS").value}
else if (necklacegrade=="A")
	{necklace=d.gI("NCKA").value}
else if (necklacegrade=="B")
	{necklace=d.gI("NCKB").value}
else if (necklacegrade=="C")
	{necklace=d.gI("NCKC").value}
else if (necklacegrade=="D")
	{necklace=d.gI("NCKD").value}
else if (necklacegrade=="N")
	{necklace=d.gI("NCKN").value}
else if (necklacegrade=="S80")
	{necklace=d.gI("NCK80").value}
else if (necklacegrade=="S84")
	{necklace=d.gI("NCK84").value}

if (necklacegrade=="D" && LVL<20 && necklace!=0)
	{pen=pen+1;d.gI("NCK grade penalty").innerHTML=GPA}
else if (necklacegrade=="C" && LVL<40 && necklace!=0)
	{pen=pen+1;d.gI("NCK grade penalty").innerHTML=GPA}
else if (necklacegrade=="B" && LVL<52 && necklace!=0)
	{pen=pen+1;d.gI("NCK grade penalty").innerHTML=GPA}
else if (necklacegrade=="A" && LVL<61 && necklace!=0)
	{pen=pen+1;d.gI("NCK grade penalty").innerHTML=GPA}
else if (necklacegrade=="S" && LVL<76 && necklace!=0)
	{pen=pen+1;d.gI("NCK grade penalty").innerHTML=GPA}
else if (necklacegrade=="S80" && LVL<80 && necklace!=0)
	{pen=pen+1;d.gI("NCK grade penalty").innerHTML=GPA}
else if (necklacegrade=="S84" && LVL<84 && necklace!=0)
	{pen=pen+1;d.gI("NCK grade penalty").innerHTML=GPA}
else
	{d.gI("NCK grade penalty").innerHTML=" "}

//Necklace
Necklace=NECKLACEMDEF[necklace]
if (necklace=="6")
	{AddMP=AddMP+33}
else if (necklace=="20")
	{NECKLACEHP=445;AddMP=AddMP+42;NECKLACEPATK=1.04;NECKLACEMATK=1.08;VALAKASRD=0.05}
else if (necklace=="23")
	{AddMP=AddMP+26}
else if (necklace=="27")
	{AddMP=AddMP+42}
else if (necklace=="28")
	{AddMP=AddMP+42;FRINTEZZARD=0.05}
else if (necklace=="29")
	{AddMP=AddMP+46}
else if (necklace=="30")
	{AddMP=AddMP+50}
else if (necklace=="31")
	{AddMP=AddMP+48}
else if (necklace=="32")
	{AddMP=AddMP+52}
else if (necklace=="33")
	{AddMP=AddMP+51}
else if (necklace=="34")
	{AddMP=AddMP+42;FRINTEZZARD=0.05}

//Necklace Enchant
var necklaceenchant=d.gI("NCKE").value
if (necklaceenchant <= 3)
	{necklaceunderenchant=necklaceenchant;necklaceoverenchant=0;}
else
	{necklaceunderenchant=3;necklaceoverenchant=necklaceenchant-3;}
if (necklacegrade=="N"||necklace=="0") {
	d.gI("NCKE").disabled=true
	necklaceunderPDEF=0
	necklaceoverPDEF=0
	Necklace=Necklace
	}
else {
	d.gI("NCKE").disabled=false
	necklaceunderPDEF=1
	necklaceoverPDEF=3
	Necklace=Necklace+(necklaceunderenchant*necklaceunderPDEF)+(necklaceoverenchant*necklaceoverPDEF)
	}

//Earring1 Grade
var earring1grade=d.gI("EAR1G").value
earring1grade=GRADE[earring1grade]
if (earring1grade=="S")
	{earring1=d.gI("EAR1S").value}
else if (earring1grade=="A")
	{earring1=d.gI("EAR1A").value}
else if (earring1grade=="B")
	{earring1=d.gI("EAR1B").value}
else if (earring1grade=="C")
	{earring1=d.gI("EAR1C").value}
else if (earring1grade=="D")
	{earring1=d.gI("EAR1D").value}
else if (earring1grade=="N")
	{earring1=d.gI("EAR1N").value}
else if (earring1grade=="S80")
	{earring1=d.gI("EAR180").value}
else if (earring1grade=="S84")
	{earring1=d.gI("EAR184").value}

if (earring1grade=="D" && LVL<20 && earring1!=0)
	{pen=pen+1;d.gI("EAR1 grade penalty").innerHTML=GPA}
else if (earring1grade=="C" && LVL<40 && earring1!=0)
	{pen=pen+1;d.gI("EAR1 grade penalty").innerHTML=GPA}
else if (earring1grade=="B" && LVL<52 && earring1!=0)
	{pen=pen+1;d.gI("EAR1 grade penalty").innerHTML=GPA}
else if (earring1grade=="A" && LVL<61 && earring1!=0)
	{pen=pen+1;d.gI("EAR1 grade penalty").innerHTML=GPA}
else if (earring1grade=="S" && LVL<76 && earring1!=0)
	{pen=pen+1;d.gI("EAR1 grade penalty").innerHTML=GPA}
else if (earring1grade=="S80" && LVL<80 && earring1!=0)
	{pen=pen+1;d.gI("EAR1 grade penalty").innerHTML=GPA}
else if (earring1grade=="S84" && LVL<84 && earring1!=0)
	{pen=pen+1;d.gI("EAR1 grade penalty").innerHTML=GPA}
else
	{d.gI("EAR1 grade penalty").innerHTML=" "}

//Earring1
Earring1=EARRINGMDEF[earring1]
var OLYMPIADEARRINGVR=0
if (earring1=="5")
	{AddMP=AddMP+31;EARRINGOFANTHARASVR=0.04}
else if (earring1=="9")
	{AddMP=AddMP+31}
else if (earring1=="15")
	{AddMP=AddMP+25}
else if (earring1=="21")
	{AddMP=AddMP+20}
else if (earring1=="25")
	{AddMP=AddMP+31}
else if (earring1=="27")
	{AddMP=AddMP+31;EARRINGOFZAKENVR=0.04}
else if (earring1=="28")
	{AddMP=AddMP+35}
else if (earring1=="29")
	{AddMP=AddMP+37}
else if (earring1=="30")
	{AddMP=AddMP+36}
else if (earring1=="31")
	{AddMP=AddMP+39}
else if (earring1=="32")
	{AddMP=AddMP+38}
else if (earring1=="33")
	{AddMP=AddMP+31;OLYMPIADEARRINGVR=0.04}

//Earring1 Enchant
var earring1enchant=d.gI("EAR1E").value
if (earring1enchant <= 3)
	{earring1underenchant=earring1enchant;earring1overenchant=0;}
else
	{earring1underenchant=3;earring1overenchant=earring1enchant-3;}
if (earring1grade=="N"||earring1=="0") {
	d.gI("EAR1E").disabled=true
	earring1underPDEF=0
	earring1overPDEF=0
	Earring1=Earring1
	}
else {
	d.gI("EAR1E").disabled=false
	earring1underPDEF=1
	earring1overPDEF=3
	Earring1=Earring1+(earring1underenchant*earring1underPDEF)+(earring1overenchant*earring1overPDEF)
	}

//Earring2 Grade
var earring2grade=d.gI("EAR2G").value
earring2grade=GRADE[earring2grade]
if (earring2grade=="S")
	{earring2=d.gI("EAR2S").value}
else if (earring2grade=="A")
	{earring2=d.gI("EAR2A").value}
else if (earring2grade=="B")
	{earring2=d.gI("EAR2B").value}
else if (earring2grade=="C")
	{earring2=d.gI("EAR2C").value}
else if (earring2grade=="D")
	{earring2=d.gI("EAR2D").value}
else if (earring2grade=="N")
	{earring2=d.gI("EAR2N").value}
else if (earring2grade=="S80")
	{earring2=d.gI("EAR280").value}
else if (earring2grade=="S84")
	{earring2=d.gI("EAR284").value}

if (earring2grade=="D" && LVL<20 && earring2!=0)
	{pen=pen+1;d.gI("EAR2 grade penalty").innerHTML=GPA}
else if (earring2grade=="C" && LVL<40 && earring2!=0)
	{pen=pen+1;d.gI("EAR2 grade penalty").innerHTML=GPA}
else if (earring2grade=="B" && LVL<52 && earring2!=0)
	{pen=pen+1;d.gI("EAR2 grade penalty").innerHTML=GPA}
else if (earring2grade=="A" && LVL<61 && earring2!=0)
	{pen=pen+1;d.gI("EAR2 grade penalty").innerHTML=GPA}
else if (earring2grade=="S" && LVL<76 && earring2!=0)
	{pen=pen+1;d.gI("EAR2 grade penalty").innerHTML=GPA}
else if (earring2grade=="S80" && LVL<80 && earring2!=0)
	{pen=pen+1;d.gI("EAR2 grade penalty").innerHTML=GPA}
else if (earring2grade=="S84" && LVL<84 && earring2!=0)
	{pen=pen+1;d.gI("EAR2 grade penalty").innerHTML=GPA}
else
	{d.gI("EAR2 grade penalty").innerHTML=" "}

//Earring2
Earring2=EARRINGMDEF[earring2]
if (earring2=="5")
	{AddMP=AddMP+31;EARRINGOFANTHARASVR=0.04}
else if (earring2=="9")
	{AddMP=AddMP+31}
else if (earring2=="15")
	{AddMP=AddMP+25}
else if (earring2=="21")
	{AddMP=AddMP+20}
else if (earring2=="25")
	{AddMP=AddMP+31}
else if (earring2=="27")
	{AddMP=AddMP+31;EARRINGOFZAKENVR=0.04}
else if (earring2=="28")
	{AddMP=AddMP+35}
else if (earring2=="29")
	{AddMP=AddMP+37}
else if (earring2=="30")
	{AddMP=AddMP+36}
else if (earring2=="31")
	{AddMP=AddMP+39}
else if (earring2=="32")
	{AddMP=AddMP+38}
else if (earring2=="33")
	{AddMP=AddMP+31;OLYMPIADEARRINGVR=0.04}

//Earring2 Enchant
var earring2enchant=d.gI("EAR2E").value
if (earring2enchant <= 3)
	{earring2underenchant=earring2enchant;earring2overenchant=0;}
else
	{earring2underenchant=3;earring2overenchant=earring2enchant-3;}
if (earring2grade=="N"||earring2=="0") {
	d.gI("EAR2E").disabled=true
	earring2underPDEF=0
	earring2overPDEF=0
	Earring2=Earring2
	}
else {
	d.gI("EAR2E").disabled=false
	earring2underPDEF=1
	earring2overPDEF=3
	Earring2=Earring2+(earring2underenchant*earring2underPDEF)+(earring2overenchant*earring2overPDEF)
	}

//Ring1 Grade
var ring1grade=d.gI("RNG1G").value
ring1grade=GRADE[ring1grade]
if (ring1grade=="S")
	{ring1=d.gI("RNG1S").value}
else if (ring1grade=="A")
	{ring1=d.gI("RNG1A").value}
else if (ring1grade=="B")
	{ring1=d.gI("RNG1B").value}
else if (ring1grade=="C")
	{ring1=d.gI("RNG1C").value}
else if (ring1grade=="D")
	{ring1=d.gI("RNG1D").value}
else if (ring1grade=="N")
	{ring1=d.gI("RNG1N").value}
else if (ring1grade=="S80")
	{ring1=d.gI("RNG180").value}
else if (ring1grade=="S84")
	{ring1=d.gI("RNG184").value}

if (ring1grade=="D" && LVL<20 && ring1!=0)
	{pen=pen+1;d.gI("RNG1 grade penalty").innerHTML=GPA}
else if (ring1grade=="C" && LVL<40 && ring1!=0)
	{pen=pen+1;d.gI("RNG1 grade penalty").innerHTML=GPA}
else if (ring1grade=="B" && LVL<52 && ring1!=0)
	{pen=pen+1;d.gI("RNG1 grade penalty").innerHTML=GPA}
else if (ring1grade=="A" && LVL<61 && ring1!=0)
	{pen=pen+1;d.gI("RNG1 grade penalty").innerHTML=GPA}
else if (ring1grade=="S" && LVL<76 && ring1!=0)
	{pen=pen+1;d.gI("RNG1 grade penalty").innerHTML=GPA}
else if (ring1grade=="S80" && LVL<80 && ring1!=0)
	{pen=pen+1;d.gI("RNG1 grade penalty").innerHTML=GPA}
else if (ring1grade=="S84" && LVL<84 && ring1!=0)
	{pen=pen+1;d.gI("RNG1 grade penalty").innerHTML=GPA}
else
	{d.gI("RNG1 grade penalty").innerHTML=" "}

//Ring1
Ring1=RINGMDEF[ring1]
var OLYMPIADRINGACC=0
var OLYMPIADRINGCRITDMG=1
if(ring1=="8")
	{AddMP=AddMP+17}
else if(ring1=="10")
	{AddMP=AddMP+13}
else if(ring1=="13")
	{AddMP=AddMP+21;RINGOFBAIUMACC=2;RINGOFBAIUMASPD=1.04;RINGOFBAIUMCAST=1.04;RINGOFBAIUMCRITDMG=1.15}
else if(ring1=="17")
	{AddMP=AddMP+21;RINGOFCOREACC=1}
else if(ring1=="22")
	{AddMP=AddMP+21;RINGOFQUEENACC=2;RINGOFQUEENCRITDMG=1.15}
else if(ring1=="28")
	{AddMP=AddMP+21;}
else if(ring1=="29")
	{AddMP=AddMP+23;}
else if(ring1=="30")
	{AddMP=AddMP+25;}
else if(ring1=="31")
	{AddMP=AddMP+24;}
else if(ring1=="32")
	{AddMP=AddMP+27;}
else if(ring1=="33")
	{AddMP=AddMP+26;}
else if(ring1=="34")
	{AddMP=AddMP+21;OLYMPIADRINGACC=2;OLYMPIADRINGCRITDMG=1.15}

//Ring1 Enchant
var ring1enchant=d.gI("RNG1E").value
if (ring1enchant <= 3)
	{ring1underenchant=ring1enchant;ring1overenchant=0;}
else
	{ring1underenchant=3;ring1overenchant=ring1enchant-3;}
if (ring1grade=="N"||ring1=="0") {
	d.gI("RNG1E").disabled=true
	ring1underPDEF=0
	ring1overPDEF=0
	Ring1=Ring1
	}
else {
	d.gI("RNG1E").disabled=false
	ring1underPDEF=1
	ring1overPDEF=3
	Ring1=Ring1+(ring1underenchant*ring1underPDEF)+(ring1overenchant*ring1overPDEF)
	}

//Ring2 Grade
var ring2grade=d.gI("RNG2G").value
ring2grade=GRADE[ring2grade]
if (ring2grade=="S")
	{ring2=d.gI("RNG2S").value}
else if (ring2grade=="A")
	{ring2=d.gI("RNG2A").value}
else if (ring2grade=="B")
	{ring2=d.gI("RNG2B").value}
else if (ring2grade=="C")
	{ring2=d.gI("RNG2C").value}
else if (ring2grade=="D")
	{ring2=d.gI("RNG2D").value}
else if (ring2grade=="N")
	{ring2=d.gI("RNG2N").value}
else if (ring2grade=="S80")
	{ring2=d.gI("RNG280").value}
else if (ring2grade=="S84")
	{ring2=d.gI("RNG284").value}

if (ring2grade=="D" && LVL<20 && ring2!=0)
	{pen=pen+1;d.gI("RNG2 grade penalty").innerHTML=GPA}
else if (ring2grade=="C" && LVL<40 && ring2!=0)
	{pen=pen+1;d.gI("RNG2 grade penalty").innerHTML=GPA}
else if (ring2grade=="B" && LVL<52 && ring2!=0)
	{pen=pen+1;d.gI("RNG2 grade penalty").innerHTML=GPA}
else if (ring2grade=="A" && LVL<61 && ring2!=0)
	{pen=pen+1;d.gI("RNG2 grade penalty").innerHTML=GPA}
else if (ring2grade=="S" && LVL<76 && ring2!=0)
	{pen=pen+1;d.gI("RNG2 grade penalty").innerHTML=GPA}
else if (ring2grade=="S80" && LVL<80 && ring2!=0)
	{pen=pen+1;d.gI("RNG2 grade penalty").innerHTML=GPA}
else if (ring2grade=="S84" && LVL<84 && ring2!=0)
	{pen=pen+1;d.gI("RNG2 grade penalty").innerHTML=GPA}
else
	{d.gI("RNG2 grade penalty").innerHTML=" "}

//Ring2
Ring2=RINGMDEF[ring2]
if (ring2=="8")
	{AddMP=AddMP+17}
else if(ring2=="10")
	{AddMP=AddMP+13}
else if(ring2=="13")
	{AddMP=AddMP+21;RINGOFBAIUMACC=2;RINGOFBAIUMASPD=1.04;RINGOFBAIUMCAST=1.04;RINGOFBAIUMCRITDMG=1.15}
else if(ring2=="17")
	{AddMP=AddMP+21;RINGOFCOREACC=1}
else if(ring2=="22")
	{AddMP=AddMP+21;RINGOFQUEENACC=2;RINGOFQUEENCRITDMG=1.15}
else if(ring2=="28")
	{AddMP=AddMP+21;}
else if(ring2=="29")
	{AddMP=AddMP+23;}
else if(ring2=="30")
	{AddMP=AddMP+25;}
else if(ring2=="31")
	{AddMP=AddMP+24;}
else if(ring2=="32")
	{AddMP=AddMP+27;}
else if(ring2=="33")
	{AddMP=AddMP+26;}
else if(ring2=="34")
	{AddMP=AddMP+21;OLYMPIADRINGACC=2;OLYMPIADRINGCRITDMG=1.15}

//Ring2 Enchant
var ring2enchant=d.gI("RNG2E").value
if (ring2enchant <= 3)
	{ring2underenchant=ring2enchant;ring2overenchant=0;}
else
	{ring2underenchant=3;ring2overenchant=ring2enchant-3;}
if (ring2grade=="N"||ring2=="0") {
	d.gI("RNG2E").disabled=true
	ring2underPDEF=0
	ring2overPDEF=0
	Ring2=Ring2
	}
else {
	d.gI("RNG2E").disabled=false
	ring2underPDEF=1
	ring2overPDEF=3
	Ring2=Ring2+(ring2underenchant*ring2underPDEF)+(ring2overenchant*ring2overPDEF)
	}

//Armor Grade Penalties
if (pen==1)
	{BuffSPEED=BuffSPEED*0.8319;BuffASPD=BuffASPD*0.8319;BuffCAST=BuffCAST*0.8319}
else if (pen==2)
	{BuffSPEED=BuffSPEED*0.694;BuffASPD=BuffASPD*0.692;BuffCAST=BuffCAST*0.695}
else if (pen==3)
	{BuffSPEED=BuffSPEED*0.58;BuffASPD=BuffASPD*0.578;BuffCAST=BuffCAST*0.58}
else if (pen>=4)
	{BuffSPEED=BuffSPEED*0.5;BuffASPD=BuffASPD*0.499;BuffCAST=BuffCAST*0.5}

//Set Bonuses
//+6 stuff that goes before Set Bonuses
if (helmetenchant>=6 && UpperSet==HelmetSet)
	{helmetench=true}
else
	{helmetench=false}
if (upperenchant>=6)
	{upperench=true}
else
	{upperench=false}
if ((lowerenchant>=6 && UpperSet==LowerSet)||Lower=="0")
	{lowerench=true}
else
	{lowerench=false}
if (gloveenchant>=6 && UpperSet==GloveSet)
	{gloveench=true}
else
	{gloveench=false}
if (bootenchant>=6 && UpperSet==BootSet)
	{bootench=true}
else
	{bootench=false}
//Apella Heavy
	if (helmet=="5" && upper=="3" && glove=="1" && boot=="3")
		{AddCP=AddCP+232}
//Apella Light
	if (helmet=="6" && upper=="1" && glove=="2" && boot=="1")
		{AddCP=AddCP+195}
//Apella Robe
	if (helmet=="4" && upper=="2" && glove=="3" && boot=="2")
		{AddCP=AddCP+177}
//Avadon Heavy
	if (helmet=="11" && upper=="6" && lower=="2" && glove=="4" && boot=="6")
		{AddHP=AddHP+294.49}
	if (helmet=="11" && upper=="6" && lower=="2" && glove=="4" && boot=="6" && shield=="2")
		{BuffSBR=BuffSBR*1.24}
//Avadon Light
	if (helmet=="11" && upper=="7" && glove=="4" && boot=="6")
		{BuffMDEF=BuffMDEF*1.0525;weightpenalty=weightpenalty+5795}
//Avadon Robes
	if (helmet=="11" && upper=="8" && glove=="4" && boot=="6")
		{BuffPDEF=BuffPDEF*1.0526;BuffCAST=BuffCAST*1.15}
//Blue Wolf Heavy
	if (helmet=="12" && upper=="10" && lower=="3" && glove=="5" && boot=="8")
		{STR=STR+3;CON=CON-1;DEX=DEX-2;AddSPEED=AddSPEED+7;BuffHPR=BuffHPR*1.0524}
//Blue Wolf Light
	if (helmet=="12" && upper=="11" && glove=="5" && boot=="8")
		{INT=INT-2;MEN=MEN+3;WIT=WIT-1;BuffPDEF=BuffPDEF*1.0526;BuffCAST=BuffCAST*1.15}
//Blue Wolf Robes
	if (helmet=="12" && upper=="12" && lower=="4" && glove=="5" && boot=="8")
		{INT=INT-2;MEN=MEN-1;WIT=WIT+3;AddMP=AddMP+206;BuffMPR=BuffMPR*1.0524}
//Brigandine
	if (upper=="14" && lower=="6" && helmet=="21")
		{BuffPDEF=BuffPDEF*1.05;AddHP=AddHP+153;bootench=true;gloveench=true}
	if (upper=="14" && lower=="6" && helmet=="21" && shield=="4")
		{AddHP=AddHP+20;bootench=true;gloveench=true}
//Chain Mail
	if (upper=="16" && lower=="8" && helmet=="15")
		{gloveench=true;bootench=true}
	if (upper=="16" && lower=="8" && helmet=="15" && shield=="7")
		{AddHP=AddHP+198.21;gloveench=true;bootench=true}
//Clan Oath Heavy
	if (helmet=="24" && upper=="19" && glove=="9" && boot=="17")
		{BuffPDEF=BuffPDEF*1.05;AddHP=AddHP+85}
//Clan Oath Light
	if (helmet=="25" && upper=="18" && glove=="10" && boot=="16")
		{BuffPDEF=BuffPDEF*1.05;BuffEVA=BuffEVA+3}
//Clan Oath Robes
	if (helmet=="23" && upper=="17" && glove=="11" && boot=="18")
		{BuffPDEF=BuffPDEF*1.05;BuffCAST=BuffCAST*1.05}
//Composite
	if (upper=="20" && helmet=="16")
		{gloveench=true;bootench=true;weightpenalty=weightpenalty+5795}
	if (upper=="20" && helmet=="16" && shield=="28")
		{BuffMDEF=BuffMDEF*1.0526;gloveench=true;bootench=true}
//Dark Crystal Heavy
	if (helmet=="7" && upper=="26" && lower=="13" && glove=="12" && boot=="24")
		{STR=STR-2;CON=CON+2}
	if (helmet=="7" && upper=="26" && lower=="13" && glove=="12" && boot=="24" && shield=="8")
		{BuffSBR=BuffSBR*1.18}
//Dark Crystal Light
	if (helmet=="7" && upper=="25" && lower=="14" && glove=="12" && boot=="24")
		{STR=STR+1;CON=CON-1;BuffASPD=BuffASPD*1.04;BuffPATK=BuffPATK*1.04}
//Dark Crystal Robe
	if (helmet=="7" && upper=="27" && glove=="12" && boot=="24")
		{WIT=WIT+2;MEN=MEN-2;BuffPDEF=BuffPDEF*1.08;BuffCAST=BuffCAST*1.15;AddSPEED=AddSPEED+7}
//Demon
	if (upper=="28" && lower=="16" && glove=="13")
		{INT=INT+4;WIT=WIT-1;AddHP=AddHP-269.65;bootench=true;helmetench=true}
//Devotion
	if (upper=="75" && lower=="44" && helmet=="31")
		{BuffCAST=BuffCAST*1.15}
//Divine
	if (upper=="29" && lower=="17" && glove=="14")
		{INT=INT-1;WIT=WIT+1;BuffPDEF=BuffPDEF*1.0526;AddMP=AddMP+170.62;bootench=true;helmetench=true}
//Doom Heavy
	if (helmet=="13" && upper=="30" && glove=="15" && boot=="27")
		{STR=STR-3;CON=CON+3;AddHP=AddHP+320}
	if (helmet=="13" && upper=="30" && glove=="15" && boot=="27" && shield=="9")
		{BuffSBR=BuffSBR*1.24}
//Doom Light
	if (helmet=="13" && upper=="42" && glove=="15" && boot=="27")
		{STR=STR-1;CON=CON-2;DEX=DEX+3;BuffPATK=BuffPATK*1.027;BuffMPR=BuffMPR*1.025}
//Doom Robes
	if (helmet=="13" && upper=="76" && lower=="51" && glove=="15" && boot=="27")
		{INT=INT+2;MEN=MEN+1;WIT=WIT-3;AddSPEED=AddSPEED+7;BuffMPR=BuffMPR*1.0524}
//Draconic
	if (helmet=="1" && upper=="31" && glove=="16" && boot=="28")
		{BuffASPD=BuffASPD*1.04;BuffPATK=BuffPATK*1.04;AddMP=AddMP+289;STR=STR+1;DEX=DEX+1;CON=CON-2;weightpenalty=weightpenalty+5759}
//Drake
	if (upper=="32" && boot=="29")
		{BuffMDEF=BuffMDEF*1.0524;gloveench=true;helmetench=true}
//Dynasty Heavy Shield Master
	if ((helmet=="33"||helmet=="61") && (upper=="84"||upper=="87") && (lower=="57"||lower=="84") && (glove=="48"||glove=="75") && (boot=="53"||boot=="80") && (shield=="29"||shield=="40") && LVL>=76 && shoulderset==1)
		{BuffSBR=BuffSBR*1.05}
//Dynasty Heavy Shield Master
	if ((helmet=="33"||helmet=="61") && upper=="84" && (lower=="57"||lower=="84") && (glove=="48"||glove=="75") && (boot=="53"||boot=="80") && LVL>=76 && shoulderset==1)
		{CON=CON+2;STR=STR-2;BuffPDEF=BuffPDEF*1.054;AddHP=AddHP+492}
//Dynasty Heavy Shield Master 2
	else if ((helmet=="33"||helmet=="61") && upper=="87" && (lower=="57"||lower=="84") && (glove=="48"||glove=="75") && (boot=="53"||boot=="80") && LVL>=76 && shoulderset==1)
		{CON=CON+2;STR=STR-2;BuffPDEF=BuffPDEF*1.066;AddHP=AddHP+492}
//Dynasty Heavy Bard
	else if ((helmet=="33"||helmet=="61") && upper=="84" && (lower=="57"||lower=="84") && (glove=="48"||glove=="75") && (boot=="53"||boot=="80") && LVL>=76 && shoulderset==2)
		{CON=CON-2;STR=STR+2;BuffPDEF=BuffPDEF*1.054;AddHP=AddHP+492}
//Dynasty Heavy Bard 2
	else if ((helmet=="33"||helmet=="61") && upper=="87" && (lower=="57"||lower=="84") && (glove=="48"||glove=="75") && (boot=="53"||boot=="80") && LVL>=76 && shoulderset==2)
		{CON=CON-2;STR=STR+2;BuffPDEF=BuffPDEF*1.066;AddHP=AddHP+492}
//Dynasty Heavy Force Master
	else if ((helmet=="33"||helmet=="61") && upper=="84" && (lower=="57"||lower=="84") && (glove=="48"||glove=="75") && (boot=="53"||boot=="80") && LVL>=76 && shoulderset==3)
		{STR=STR+1;CON=CON-2;DEX=DEX+1;BuffPATK=BuffPATK*1.054;AddHP=AddHP+492}
//Dynasty Heavy Force Master 2
	else if ((helmet=="33"||helmet=="61") && upper=="87" && (lower=="57"||lower=="84") && (glove=="48"||glove=="75") && (boot=="53"||boot=="80") && LVL>=76 && shoulderset==3)
		{STR=STR+1;CON=CON-2;DEX=DEX+1;BuffPATK=BuffPATK*1.066;AddHP=AddHP+492}
//Dynasty Heavy Weapon Master
	else if ((helmet=="33"||helmet=="61") && upper=="84" && (lower=="57"||lower=="84") && (glove=="48"||glove=="75") && (boot=="53"||boot=="80") && LVL>=76 && shoulderset==4)
		{CON=CON-2;STR=STR+2;BuffPATK=BuffPATK*1.054;AddHP=AddHP+492;AddCRIT=AddCRIT+24.6;AddCRITDMG=AddCRITDMG+234}
//Dynasty Heavy Weapon Master 2
	else if ((helmet=="33"||helmet=="61") && upper=="87" && (lower=="57"||lower=="84") && (glove=="48"||glove=="75") && (boot=="53"||boot=="80") && LVL>=76 && shoulderset==4)
		{CON=CON-2;STR=STR+2;BuffPATK=BuffPATK*1.066;AddHP=AddHP+492;AddCRIT=AddCRIT+29.5;AddCRITDMG=AddCRITDMG+282}
//Dynasty Heavy no shoulder
	else if ((helmet=="33"||helmet=="61") && (upper=="84"||upper=="87") && (lower=="57"||lower=="84") && (glove=="48"||glove=="75") && (boot=="53"||boot=="80") && LVL>=76)
		{CON=CON-1;STR=STR+1;BuffPDEF=BuffPDEF*1.046;AddHP=AddHP+418;
		d.gI("STY").style.display='block';
		d.gI("SHV").style.display='block';
		d.gI("SLT").style.display='none';
		d.gI("SRB").style.display='none';
		}
//Dynasty Light Bow Master
	else if ((helmet=="49"||helmet=="62") && upper=="85" && (lower=="58"||lower=="85") && (glove=="50"||glove=="77") && (boot=="54"||boot=="81") && LVL>=76 && shoulderset==5)
		{CON=CON-2;DEX=DEX+2;BuffACC=BuffACC+4.3;AddHP=AddMP+321;BuffASPD=BuffASPD*1.0266;AddMPR=AddMPR+1.72}
//Dynasty Light Bow Master 2
	else if ((helmet=="49"||helmet=="62") && upper=="88" && (lower=="58"||lower=="85") && (glove=="50"||glove=="77") && (boot=="54"||boot=="81") && LVL>=76 && shoulderset==5)
		{CON=CON-2;DEX=DEX+2;BuffACC=BuffACC+5.3;AddHP=AddMP+321;BuffASPD=BuffASPD*1.0324;BuffMPR=BuffMPR*1.066}
//Dynasty Light Dagger Master
	else if ((helmet=="49"||helmet=="62") && upper=="85" && (lower=="58"||lower=="85") && (glove=="50"||glove=="77") && (boot=="54"||boot=="81") && LVL>=76 && shoulderset==6)
		{CON=CON-2;DEX=DEX+2;BuffEVA=BuffEVA+4.3;AddHP=AddHP+492;BuffASPD=BuffASPD*1.0266}
//Dynasty Light Dagger Master 2
	else if ((helmet=="49"||helmet=="62") && upper=="88" && (lower=="58"||lower=="85") && (glove=="50"||glove=="77") && (boot=="54"||boot=="81") && LVL>=76 && shoulderset==6)
		{CON=CON-2;DEX=DEX+2;BuffEVA=BuffEVA+5.3;AddHP=AddHP+492;BuffASPD=BuffASPD*1.0324}
//Dynasty Light Enchanter
	else if ((helmet=="49"||helmet=="62") && upper=="85" && (lower=="58"||lower=="85") && (glove=="50"||glove=="77") && (boot=="54"||boot=="81") && LVL>=76 && shoulderset==11)
		{INT=INT-1;WIT=WIT-1;MEN=MEN+2;BuffCAST=BuffCAST*1.15;AddMP=AddMP+321}
//Dynasty Light Enchanter 2
	else if ((helmet=="49"||helmet=="62") && upper=="88" && (lower=="58"||lower=="85") && (glove=="50"||glove=="77") && (boot=="54"||boot=="81") && LVL>=76 && shoulderset==11)
		{INT=INT-1;WIT=WIT-1;MEN=MEN+2;BuffCAST=BuffCAST*1.15;AddMP=AddMP+321}
//Dynasty Light Force Master
	else if ((helmet=="49"||helmet=="62") && upper=="85" && (lower=="58"||lower=="85") && (glove=="50"||glove=="77") && (boot=="54"||boot=="81") && LVL>=76 && shoulderset==12)
		{STR=STR+1;CON=CON-2;DEX=DEX+1;BuffPATK=BuffPATK*1.054;AddHP=AddHP+492}
//Dynasty Light Force Master 2
	else if ((helmet=="49"||helmet=="62") && upper=="88" && (lower=="58"||lower=="85") && (glove=="50"||glove=="77") && (boot=="54"||boot=="81") && LVL>=76 && shoulderset==12)
		{STR=STR+1;CON=CON-2;DEX=DEX+1;BuffPATK=BuffPATK*1.066;AddHP=AddHP+492}
//Dynasty Light Summoner
	else if ((helmet=="49"||helmet=="62") && upper=="85" && (lower=="58"||lower=="85") && (glove=="50"||glove=="77") && (boot=="54"||boot=="81") && LVL>=76 && shoulderset==11)
		{STR=STR-2;CON=CON+2;BuffASPD=BuffASPD*1.054;BuffPATK=BuffPATK*1.0266;BuffPDEF=BuffPDEF*1.0266;AddHP=AddHP+492}
//Dynasty Light Summoner 2
	else if ((helmet=="49"||helmet=="62") && upper=="88" && (lower=="58"||lower=="85") && (glove=="50"||glove=="77") && (boot=="54"||boot=="81") && LVL>=76 && shoulderset==11)
		{STR=STR-2;CON=CON+2;BuffASPD=BuffASPD*1.066;BuffPATK=BuffPATK*1.0266;BuffPDEF=BuffPDEF*1.0266;AddHP=AddHP+492}
//Dynasty Light Weapon Master
	else if ((helmet=="49"||helmet=="62") && upper=="85" && (lower=="58"||lower=="85") && (glove=="50"||glove=="77") && (boot=="54"||boot=="81") && LVL>=76 && shoulderset==13)
		{CON=CON-2;STR=STR+1;DEX=DEX+1;BuffPATK=BuffPATK*1.054;AddHP=AddHP+492;AddCRIT=AddCRIT+24.6;AddCRITDMG=AddCRITDMG+234}
//Dynasty Light Weapon Master 2
	else if ((helmet=="49"||helmet=="62") && upper=="88" && (lower=="58"||lower=="85") && (glove=="50"||glove=="77") && (boot=="54"||boot=="81") && LVL>=76 && shoulderset==13)
		{CON=CON-2;STR=STR+2;DEX=DEX+1;BuffPATK=BuffPATK*1.066;AddHP=AddHP+492;AddCRIT=AddCRIT+29.5;AddCRITDMG=AddCRITDMG+282}
//Dynasty Light
	else if ((helmet=="49"||helmet=="62") && (upper=="85"||upper=="88") && (lower=="58"||lower=="85") && (glove=="50"||glove=="77") && (boot=="54"||boot=="81") && LVL>=76)
		{CON=CON-1;DEX=DEX+1;BuffACC=BuffACC+1.72;BuffEVA=BuffEVA+1.72;AddHP=AddHP+418
		d.gI("STY").style.display='block';
		d.gI("SHV").style.display='none';
		d.gI("SLT").style.display='block';
		d.gI("SRB").style.display='none';}
//Dynasty Robe Enchanter
	else if ((helmet=="50"||helmet=="60") && upper=="86" && (lower=="59"||lower=="86") && (glove=="49"||glove=="76") && (boot=="55"||boot=="82") && LVL>=76 && shoulderset==7)
		{INT=INT-2;MEN=MEN+2;BuffCAST=BuffCAST*1.15;AddMP=AddMP+321}
//Dynasty Robe Enchanter 2
	else if ((helmet=="50"||helmet=="60") && upper=="89" && (lower=="59"||lower=="86") && (glove=="49"||glove=="76") && (boot=="55"||boot=="82") && LVL>=76 && shoulderset==7)
		{INT=INT-2;MEN=MEN+2;BuffCAST=BuffCAST*1.15;AddMP=AddMP+321}
//Dynasty Robe Healer
	else if ((helmet=="50"||helmet=="60") && upper=="86" && (lower=="59"||lower=="86") && (glove=="49"||glove=="76") && (boot=="55"||boot=="82") && LVL>=76 && shoulderset==8)
		{INT=INT-2;MEN=MEN+2;BuffCAST=BuffCAST*1.15;AddMP=AddMP+321}
//Dynasty Robe Healer 2
	else if ((helmet=="50"||helmet=="60") && upper=="89" && (lower=="59"||lower=="86") && (glove=="49"||glove=="76") && (boot=="55"||boot=="82") && LVL>=76 && shoulderset==8)
		{INT=INT-2;MEN=MEN+2;BuffCAST=BuffCAST*1.15;AddMP=AddMP+321}
//Dynasty Robe Summoner
	else if ((helmet=="50"||helmet=="60") && upper=="86" && (lower=="59"||lower=="86") && (glove=="49"||glove=="76") && (boot=="55"||boot=="82") && LVL>=76 && shoulderset==9)
		{INT=INT-2;MEN=MEN+2;BuffCAST=BuffCAST*1.15;AddMP=AddMP+321;BuffPATK=BuffPATK*1.026;BuffPDEF=BuffPDEF*1.026}
//Dynasty Robe Summoner 2
	else if ((helmet=="50"||helmet=="60") && upper=="89" && (lower=="59"||lower=="86") && (glove=="49"||glove=="76") && (boot=="55"||boot=="82") && LVL>=76 && shoulderset==9)
		{INT=INT-2;MEN=MEN+2;BuffCAST=BuffCAST*1.15;AddMP=AddMP+321;BuffPATK=BuffPATK*1.033;BuffPDEF=BuffPDEF*1.033}
//Dynasty Robe Wizard
	else if ((helmet=="50"||helmet=="60") && upper=="86" && (lower=="59"||lower=="86") && (glove=="49"||glove=="76") && (boot=="55"||boot=="82") && LVL>=76 && shoulderset==10)
		{INT=INT+1;WIT=WIT+1;MEN=MEN-2;BuffCAST=BuffCAST*1.15;AddMP=AddMP+321;BuffMATK=BuffMATK*1.054}
//Dynasty Robe Wizard 2
	else if ((helmet=="50"||helmet=="60") && upper=="89" && (lower=="59"||lower=="86") && (glove=="49"||glove=="76") && (boot=="55"||boot=="82") && LVL>=76 && shoulderset==10)
		{INT=INT+1;WIT=WIT+1;MEN=MEN-2;BuffCAST=BuffCAST*1.15;AddMP=AddMP+321;BuffMATK=BuffMATK*1.066}
//Dynasty Robe
	else if ((helmet=="50"||helmet=="60") && (upper=="86"||upper=="89") && (lower=="59"||lower=="86") && (glove=="49"||glove=="76") && (boot=="55"||boot=="82") && LVL>=76)
		{INT=INT-1;MEN=MEN+1;BuffCAST=BuffCAST*1.12;AddMP=AddMP+257;
		d.gI("STY").style.display='block';
		d.gI("SHV").style.display='none';
		d.gI("SLT").style.display='none';
		d.gI("SRB").style.display='block';}
	else
		{d.gI("STY").style.display='none';
		d.gI("SHV").style.display='none';
		d.gI("SLT").style.display='none';
		d.gI("SRB").style.display='none';}
	if (helmet=="60")
		{BuffMATK=BuffMATK*1.0125;AddMP=AddMP+80}
	if (upper=="116"||upper=="119")
		{BuffCAST=BuffCAST*1.15}
	if (lower=="86")
		{BuffMATK=BuffMATK*1.0208;AddMP=AddMP+133}
	if (glove=="76")
		{BuffMATK=BuffMATK*1.0083;AddMP=AddMP+53}
	if (boot=="82")
		{BuffMATK=BuffMATK*1.0083;AddMP=AddMP+53}
	if (shield=="40")
		{
		//nothing!
		}
	if (helmet=="61")
		{BuffPDEF=BuffPDEF*1.0125;AddHP=AddHP+123}
	if (upper=="114")
		{BuffPDEF=BuffPDEF*1.0724;AddHP=AddHP+984}
	if (upper=="117")
		{BuffPDEF=BuffPDEF*1.0724;AddHP=AddHP+1023}
	if (lower=="84")
		{BuffPDEF=BuffPDEF*1.0208;AddHP=AddHP+205}
	if (glove=="75")
		{BuffPDEF=BuffPDEF*1.0083;AddHP=AddHP+82}
	if (boot=="80")
		{BuffPDEF=BuffPDEF*1.0083;AddHP=AddHP+82}
	if (helmet=="62")
		{BuffEVA=BuffEVA+0.47;BuffACC=BuffACC+0.47;AddHP=AddHP+123;BuffASPD=BuffASPD*1.0041}
	if (upper=="115"||upper=="118")
		{BuffEVA=BuffEVA+3.4;BuffACC=BuffACC+3.4;AddHP=AddHP+492;BuffASPD=BuffASPD*1.0477}
	if (lower=="85")
		{BuffEVA=BuffEVA+0.79;BuffACC=BuffACC+0.79;AddHP=AddHP+205;BuffASPD=BuffASPD*1.0068}
	if (glove=="77")
		{BuffEVA=BuffEVA+0.31;BuffACC=BuffACC+0.31;AddHP=AddHP+82;BuffASPD=BuffASPD*1.0027}
	if (boot=="81")
		{BuffEVA=BuffEVA+0.31;BuffACC=BuffACC+0.31;AddHP=AddHP+82;BuffASPD=BuffASPD*1.0027}
//Elegia Heavy
	if (helmet=="43" && upper=="99" && lower=="69" && glove=="60" && boot=="65" && LVL>=84)
		{STR=STR+3;CON=CON-2;BuffPATK=BuffPATK*1.0659;AddCRIT=AddCRIT+12.74;AddHP=AddHP+550}
//Elegia Light
	if (helmet=="44" && upper=="100" && lower=="70" && glove=="61" && boot=="66" && LVL>=84)
		{STR=STR+1;DEX=DEX+2;CON=CON-2;BuffPATK=BuffPATK*1.0659;BuffASPD=BuffASPD*1.06;AddCRIT=AddCRIT+17.05;BuffSPEED=BuffSPEED*1.03}
//Elegia Robe
	if (helmet=="45" && upper=="101" && lower=="71" && glove=="62" && boot=="67" && LVL>=84)
		{WIT=WIT+2;MEN=MEN-2;INT=INT+1;BuffMATK=BuffMATK*1.1;BuffCAST=BuffCAST*1.15;BuffMPR=BuffMPR*1.05}
//Elven Mithril
	if (upper=="54" && lower=="34" && glove=="19")
		{AddSPEED=AddSPEED+7;WIT=WIT+1;INT=INT-1;bootench=true;helmetench=true}
//Full Plate
	if (upper=="37" && helmet=="17")
		{AddHP=AddHP+269.65;gloveench=true;bootench=true}
	if (upper=="37" && helmet=="17" && shield=="12")
		{BuffSBR=BuffSBR*1.0526}
//Imperial Crusader
	if (helmet=="2" && upper=="40" && lower=="24" && glove=="27" && boot=="33")
		{AddHP=AddHP+445;BuffPDEF=BuffPDEF*1.08;DEX=DEX-2;STR=STR+2}
//Karmian
	if (upper=="41" && lower=="26" && glove=="28")
		{BuffCAST=BuffCAST*1.15;BuffPDEF=BuffPDEF*1.0526;bootench=true;helmetench=true}
//Knowledge
	if (upper=="77" && lower=="52" && glove=="24")
		{BuffMATK=BuffMATK*1.1025;BuffMPR=BuffMPR*0.95;bootench=true;helmetench=true}
//Majestic Heavy
	if (helmet=="9" && upper=="47" && glove=="31" && boot=="40")
		{STR=STR+2;CON=CON-2;BuffPATK=BuffPATK*1.04;BuffACC=BuffACC+3}
//Majestic Light
	if (helmet=="9" && upper=="46" && glove=="31" && boot=="40")
		{DEX=DEX+1;CON=CON-1;AddMP=AddMP+240;weightpenalty=weightpenalty+5759}
	if (helmet=="9" && upper=="46" && glove=="31" && boot=="40" && (WpnMAS=="Bow"||WpnMAS=="Crossbow"))
		{BuffPATK=BuffPATK*1.08;}
//Majestic Robe
	if (helmet=="9" && upper=="48" && glove=="31" && boot=="40")
		{MEN=MEN+1;INT=INT-1;AddMP=AddMP+240;BuffCAST=BuffCAST*1.15;BuffMPR=BuffMPR*1.08}
//Major Arcana
	if (helmet=="3" && upper=="49" && boot=="41" && glove=="32")
		{BuffMATK=BuffMATK*1.17;AddSPEED=AddSPEED+7;WIT=WIT+1;INT=INT+1;MEN=MEN-2;weightpenalty=weightpenalty+5759}
//Manticore
	if (upper=="50" && lower=="30" && boot=="42")
		{AddMP=AddMP+91.81;gloveench=true;helmetench=true}
//Mithril Heavy
	if (upper=="52" && lower=="32" && helmet=="26")
		{bootench=true;gloveench=true}
	if (upper=="52" && lower=="32" && helmet=="26" && shield=="13")
		{AddHP=AddHP+126.13;bootench=true;gloveench=true}
//Mithril Light
	if (upper=="53" && lower=="47" && boot=="43")
		{BuffEVA=BuffEVA+4;gloveench=true;helmetench=true}
//Moirai Heavy
	if ((helmet=="40"||helmet=="51") && upper=="96" && (lower=="66"||lower=="75") && (glove=="57"||glove=="66") && (boot=="62"||boot=="71") && LVL>=80)
		{STR=STR+2;CON=CON-2;BuffPATK=BuffPATK*1.0426;BuffASPD=BuffASPD*1.04;}
	if ((helmet=="40"||helmet=="51") && upper=="96" && (lower=="66"||lower=="75") && (glove=="57"||glove=="66") && (boot=="62"||boot=="71") && LVL>=80 && shield=="31")
		{BuffSD=BuffSD*1}
	if (helmet=="51")
		{BuffPATK=BuffPATK*1.0125;BuffASPD=BuffASPD*1.01}
	if (upper=="105")
		{BuffPATK=BuffPATK*1.0426;BuffASPD=BuffASPD*1.04}
	if (lower=="75")
		{BuffPATK=BuffPATK*1.0208;BuffASPD=BuffASPD*1.0167}
	if (glove=="66")
		{BuffPATK=BuffPATK*1.0083;BuffASPD=BuffASPD*1.0067}
	if (boot=="71")
		{BuffPATK=BuffPATK*1.0083;BuffASPD=BuffASPD*1.0067}
//Moirai Light
	if ((helmet=="41"||helmet=="52") && upper=="97" && (lower=="67"||lower=="76") && (glove=="58"||glove=="67") && (boot=="63"||boot=="72") && LVL>=80)
		{DEX=DEX+2;CON=CON-2;BuffPATK=BuffPATK*1.0426;BuffASPD=BuffASPD*1.03;}
	if (helmet=="52")
		{BuffPATK=BuffPATK*1.0125;BuffMPR=BuffMPR*1.01}
	if (upper=="106")
		{BuffPATK=BuffPATK*1.0426;BuffMPR=BuffMPR*1.04}
	if (lower=="76")
		{BuffPATK=BuffPATK*1.0208;BuffMPR=BuffMPR*1.0167}
	if (glove=="67")
		{BuffPATK=BuffPATK*1.0083;BuffMPR=BuffMPR*1.0067}
	if (boot=="72")
		{BuffPATK=BuffPATK*1.0083;BuffMPR=BuffMPR*1.0067}
//Moirai Robe
	if ((helmet=="42"||helmet=="53") && upper=="98" && (lower=="68"||lower=="77") && (glove=="59"||glove=="68") && (boot=="64"||boot=="73") && LVL>=80)
		{WIT=WIT+2;MEN=MEN-2;BuffMATK=BuffMATK*1.0811;BuffCAST=BuffCAST*1.15;}
	if (helmet=="53")
		{BuffMATK=BuffMATK*1.0062}
	if (upper=="107")
		{BuffMATK=BuffMATK*1.0811;BuffCAST=BuffCAST*1.15}
	if (lower=="77")
		{BuffMATK=BuffMATK*1.0103}
	if (glove=="68")
		{BuffMATK=BuffMATK*1.0041}
	if (boot=="73")
		{BuffMATK=BuffMATK*1.0041}
//Nightmare Heavy
	if (helmet=="8" && upper=="5" && glove=="25" && boot=="11")
		{CON=CON+2;DEX=DEX-2;BuffPATK=BuffPATK*1.04}
	if (helmet=="8" && upper=="5" && glove=="25" && boot=="11" && shield=="22")
		{BuffRD=BuffRD+0.05}
//Nightmare Light
	if (helmet=="8" && upper=="56" && glove=="25" && boot=="11")
		{DEX=DEX+1;CON=CON-1;BuffMDEF=BuffMDEF*1.04;BuffVR=BuffVR+0.03}
//Nightmare Robe
	if (helmet=="8" && upper=="63" && glove=="25" && boot=="11")
		{INT=INT+2;WIT=WIT-2;BuffMATK=BuffMATK*1.08;BuffMPR=BuffMPR*1.04}
//Plated Leather
	if (upper=="58" && lower=="39" && boot=="45")
		{STR=STR+4;CON=CON-1;gloveench=true;helmetench=true}
//Reinforced Leather
	if (upper=="60" && lower=="41" && boot=="46")
		{AddMP=AddMP+80;gloveench=true;helmetench=true}
//Tallum Heavy
	if (helmet=="10" && upper=="71" && glove=="45" && boot=="50")
		{STR=STR+2;CON=CON-2;BuffASPD=BuffASPD*1.08;weightpenalty=weightpenalty+5759}
//Tallum Light
	if (helmet=="10" && upper=="70" && glove=="45" && boot=="50")
		{MEN=MEN+2;WIT=WIT-2;AddMP=AddMP+222;BuffMPR=BuffMPR*1.08}
//Tallum Robe
	if (helmet=="10" && upper=="72" && lower=="46" && glove=="45" && boot=="50")
		{INT=INT-2;WIT=WIT+2;BuffCAST=BuffCAST*1.15;BuffMDEF=BuffMDEF*1.08}
//Theca
	if (upper=="73" && lower=="48" && boot=="51")
		{BuffPDEF=BuffPDEF*1.0526;gloveench=true;helmetench=true}
//Vesper Heavy
	if ((helmet=="35"||helmet=="54") && upper=="90" && (lower=="60"||lower=="78") && (glove=="51"||glove=="69") && (boot=="56"||boot=="74") && LVL>=84)
		{STR=STR+2;DEX=DEX-2;BuffPATK=BuffPATK*1.0557;BuffPDEF=BuffPDEF*1.0557;AddHP=AddHP+531}
//Vesper Noble Heavy
	if ((helmet=="38"||helmet=="57") && upper=="92" && (lower=="62"||lower=="81") && (glove=="54"||glove=="72") && (boot=="58"||boot=="77") && LVL>=84)
		{STR=STR+2;DEX=DEX-2;BuffPATK=BuffPATK*1.0557;BuffPDEF=BuffPDEF*1.0557;AddHP=AddHP+531}
	if (helmet=="54"||helmet=="57")
		{BuffPATK=BuffPATK*1.0062;BuffPDEF=BuffPDEF*1.0062;AddHP=AddHP+133}
	if (upper=="108"||upper=="111")
		{BuffPATK=BuffPATK*1.0557;BuffPDEF=BuffPDEF*1.0557;AddHP=AddHP+531}
	if (lower=="78"||lower=="81")
		{BuffPATK=BuffPATK*1.03;BuffPDEF=BuffPDEF*1.03;AddHP=AddHP+55}
	if (glove=="69"||glove=="72")
		{BuffPATK=BuffPATK*1.0041;BuffPDEF=BuffPDEF*1.0041;AddHP=AddHP+22}
	if (boot=="74"||boot=="77")
		{BuffPATK=BuffPATK*1.0041;BuffPDEF=BuffPDEF*1.0041;AddHP=AddHP+22}
//Vesper Light
	if ((helmet=="36"||helmet=="55") && upper=="91" && (lower=="61"||lower=="79") && (glove=="53"||glove=="70") && (boot=="57"||boot=="75") && LVL>=84)
		{STR=STR+1;CON=CON-2;DEX=DEX+1;BuffPATK=BuffPATK*1.0557;BuffASPD=BuffASPD*1.0557;BuffMPR=BuffMPR*1.0557;AddMP=AddMP+347.4}
//Vesper Noble Light
	if ((helmet=="39"||helmet=="58") && upper=="93" && (lower=="63"||lower=="82") && (glove=="56"||glove=="73") && (boot=="59"||boot=="78") && LVL>=84)
		{STR=STR+1;CON=CON-2;DEX=DEX+1;BuffPATK=BuffPATK*1.0557;BuffASPD=BuffASPD*1.0557;BuffMPR=BuffMPR*1.0557;AddMP=AddMP+347.4}
	if (helmet=="55"||helmet=="58")
		{BuffPATK=BuffPATK*1.0041;BuffASPD=BuffASPD*1.0041;BuffMPR=BuffMPR*1.0041;AddMP=AddMP+87}
	if (upper=="109"||upper=="112")
		{BuffPATK=BuffPATK*1.0557;BuffASPD=BuffASPD*1.05;BuffMPR=BuffMPR*1.05;AddMP=AddMP+347}
	if (lower=="79"||lower=="82")
		{BuffPATK=BuffPATK*1.0068;BuffASPD=BuffASPD*1.0068;BuffMPR=BuffMPR*1.0068;AddMP=AddMP+145}
	if (glove=="70"||glove=="73")
		{BuffPATK=BuffPATK*1.0027;BuffASPD=BuffASPD*1.0027;BuffMPR=BuffMPR*1.0027;AddMP=AddMP+58}
	if (boot=="75"||boot=="78")
		{BuffPATK=BuffPATK*1.0027;BuffASPD=BuffASPD*1.0027;BuffMPR=BuffMPR*1.0027;AddMP=AddMP+58}
//Vesper Robe
	if ((helmet=="34"||helmet=="56") && upper=="95" && (lower=="65"||lower=="80") && (glove=="52"||glove=="71") && (boot=="61"||boot=="76") && LVL>=84)
		{INT=INT+1;MEN=MEN-2;WIT=WIT+1;BuffMATK=BuffMATK*1.0847;BuffCAST=BuffCAST*1.15;BuffMPR=BuffMPR*1.0557}
//Vesper Noble Robe
	if ((helmet=="37"||helmet=="59") && upper=="94" && (lower=="64"||lower=="83") && (glove=="55"||glove=="74") && (boot=="60"||boot=="79") && LVL>=84)
		{INT=INT+1;MEN=MEN-2;WIT=WIT+1;BuffMATK=BuffMATK*1.0847;BuffCAST=BuffCAST*1.15;BuffMPR=BuffMPR*1.0557}
	if (helmet=="56"||helmet=="59")
		{BuffMATK=BuffMATK*1.0041;BuffMPR=BuffMPR*1.0041}
	if (upper=="110"||upper=="113")
		{BuffMATK=BuffMATK*1.0847;BuffMPR=BuffMPR*1.05;BuffCAST=BuffCAST*1.15}
	if (lower=="80"||lower=="83")
		{BuffMATK=BuffMATK*1.0068;BuffMPR=BuffMPR*1.0068}
	if (glove=="71"||glove=="74")
		{BuffMATK=BuffMATK*1.0027;BuffMPR=BuffMPR*1.0027}
	if (boot=="76"||boot=="79")
		{BuffMATK=BuffMATK*1.0027;BuffMPR=BuffMPR*1.0027}
//Vorpal Heavy
	if (helmet=="46" && upper=="102" && lower=="72" && glove=="63" && boot=="68" && LVL>=84)
		{STR=STR-2;CON=CON+2;BuffPDEF=BuffPDEF*1.0847;BuffPATK=BuffPATK*1.0557;AddHP=AddHP+541}
//Vorpal Light
	if (helmet=="47" && upper=="103" && lower=="73" && glove=="64" && boot=="69" && LVL>=84)
		{STR=STR+1;DEX=DEX+2;CON=CON-3;BuffPATK=BuffPATK*1.0557;BuffPATK=BuffPATK*1.0557;BuffASPD=BuffASPD*1.05;BuffSPEED=BuffSPEED*1.03;}
//Vorpal Robe
	if (helmet=="48" && upper=="104" && lower=="74" && glove=="65" && boot=="70" && LVL>=84)
		{WIT=WIT+2;MEN=MEN-1;INT=INT-1;BuffMATK=BuffMATK*1.087;BuffCAST=BuffCAST*1.15;BuffMPR=BuffMPR*1.05}
//Wooden
	if (upper=="81" && lower=="54" && helmet=="32")
		{BuffPDEF=BuffPDEF*1.02;AddHP=AddHP+41}
//Zubei Heavy
	if (helmet=="14" && upper=="82" && lower=="55" && glove=="47" && boot=="52")
		{BuffPDEF=BuffPDEF*1.0526;AddHP=AddHP+294.49}
//Zubei Light
	if (helmet=="14" && upper=="83" && lower=="56" && glove=="47" && boot=="52")
		{BuffEVA=BuffEVA+4}
//Zubei Robes
	if (helmet=="14" && upper=="79" && lower=="53" && glove=="47" && boot=="52")
		{BuffMATK=BuffMATK*1.1025;BuffMPR=BuffMPR*0.95}
//+6 Heavy Armor Bonuses
	if ((uppergrade=="S"||uppergrade=="S80"||uppergrade=="S84") && AType=="H" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{AddPDEF=AddPDEF+56;AddMPR=AddMPR+(2*movemode)}
	if (uppergrade=="A" && AType=="H" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{AddPDEF=AddPDEF+50;AddMPR=AddMPR+(2*movemode)}
	if (uppergrade=="B" && AType=="H" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{AddPDEF=AddPDEF+44;AddMPR=AddMPR+(2*movemode)}
	if (uppergrade=="C" && AType=="H" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{AddPDEF=AddPDEF+38;AddMPR=AddMPR+(2*movemode)}
	if (uppergrade=="D" && AType=="H" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{AddPDEF=AddPDEF+25;AddMPR=AddMPR+(2*movemode)}
//+6 Light Armor Bonus
	if ((uppergrade=="S"||uppergrade=="S80"||uppergrade=="S84") && AType=="L" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{AddMDEF=AddMDEF+32;BuffEVA=BuffEVA+2}
	if (uppergrade=="A" && AType=="L" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{AddMDEF=AddMDEF+28;BuffEVA=BuffEVA+2}
	if (uppergrade=="B" && AType=="L" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{AddMDEF=AddMDEF+24;BuffEVA=BuffEVA+2}
	if (uppergrade=="C" && AType=="L" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{AddMDEF=AddMDEF+20;BuffEVA=BuffEVA+2}
	if (uppergrade=="D" && AType=="L" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{AddMDEF=AddMDEF+12;BuffEVA=BuffEVA+2}
//+6 Robe Bonus
	if ((uppergrade=="S"||uppergrade=="S80"||uppergrade=="S84") && AType=="R" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{weightlimit=weightlimit*1.3;AddPDEF=AddPDEF+36}
	if (uppergrade=="A" && AType=="R" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{weightlimit=weightlimit*1.3;AddPDEF=AddPDEF+32}
	if (uppergrade=="B" && AType=="R" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{weightlimit=weightlimit*1.3;AddPDEF=AddPDEF+28}
	if (uppergrade=="C" && AType=="R" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{weightlimit=weightlimit*1.3;AddPDEF=AddPDEF+24}
	if (uppergrade=="D" && AType=="R" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{weightlimit=weightlimit*1.3;AddPDEF=AddPDEF+16}
		
//Augmentations
var augment1 = + d.gI("WAU1").value
var augment12 = + d.gI("AUG1").value
	if (augment1==2)
		{BuffACC=BuffACC+augment12}
	if (augment1==3)
		{CON=CON+augment12}
	if (augment1==4)
		{AddCP=AddCP+augment12}
	if (augment1==5)
		{AddCPR=AddCPR+augment12}
	if (augment1==6)
		{AddCRIT=AddCRIT+augment12}
	if (augment1==7)
		{BuffEVA=BuffEVA+augment12}
	if (augment1==8)
		{AddHP=AddHP+augment12}
	if (augment1==9)
		{AddHPR=AddHPR+augment12}
	if (augment1==10)
		{INT=INT+augment12}
	if (augment1==11)
		{AddMATK=AddMATK+augment12}
	if (augment1==12)
		{AddMDEF=AddMDEF+augment12}
	if (augment1==13)
		{MEN=MEN+augment12}
	if (augment1==14)
		{AddMP=AddMP+augment12}
	if (augment1==15)
		{AddMPR=AddMPR+augment12}
	if (augment1==16)
		{AddPATK=AddPATK+augment12}
	if (augment1==17)
		{AddPDEF=AddPDEF+augment12}
	if (augment1==18)
		{STR=STR+augment12}
var augment2 = + d.gI("WAU2").value
var augment22 = + d.gI("AUG2").value
	if (augment2==2)
		{BuffACC=BuffACC+augment22}
	if (augment2==3)
		{CON=CON+augment22}
	if (augment2==4)
		{AddCP=AddCP+augment22}
	if (augment2==5)
		{AddCPR=AddCPR+augment22}
	if (augment2==6)
		{AddCRIT=AddCRIT+augment22}
	if (augment2==7)
		{BuffEVA=BuffEVA+augment22}
	if (augment2==8)
		{AddHP=AddHP+augment22}
	if (augment2==9)
		{AddHPR=AddHPR+augment22}
	if (augment2==10)
		{INT=INT+augment22}
	if (augment2==11)
		{AddMATK=AddMATK+augment22}
	if (augment2==12)
		{AddMDEF=AddMDEF+augment22}
	if (augment2==13)
		{MEN=MEN+augment22}
	if (augment2==14)
		{AddMP=AddMP+augment22}
	if (augment2==15)
		{AddMPR=AddMPR+augment22}
	if (augment2==16)
		{AddPATK=AddPATK+augment22}
	if (augment2==17)
		{AddPDEF=AddPDEF+augment22}
	if (augment2==18)
		{STR=STR+augment22}
var augment3 = + d.gI("WAU3").value
var augment32 = + d.gI("AUG3").value
	if (augment3==2)
		{BuffACC=BuffACC+augment32}
	if (augment3==3)
		{CON=CON+augment32}
	if (augment3==4)
		{AddCP=AddCP+augment32}
	if (augment3==5)
		{AddCPR=AddCPR+augment32}
	if (augment3==6)
		{AddCRIT=AddCRIT+augment32}
	if (augment3==7)
		{BuffEVA=BuffEVA+augment32}
	if (augment3==8)
		{AddHP=AddHP+augment32}
	if (augment3==9)
		{AddHPR=AddHPR+augment32}
	if (augment3==10)
		{INT=INT+augment32}
	if (augment3==11)
		{AddMATK=AddMATK+augment32}
	if (augment3==12)
		{AddMDEF=AddMDEF+augment32}
	if (augment3==13)
		{MEN=MEN+augment32}
	if (augment3==14)
		{AddMP=AddMP+augment32}
	if (augment3==15)
		{AddMPR=AddMPR+augment32}
	if (augment3==16)
		{AddPATK=AddPATK+augment32}
	if (augment3==17)
		{AddPDEF=AddPDEF+augment32}
	if (augment3==18)
		{STR=STR+augment32}
var augment4 = + d.gI("WAU4").value
var augment42 = + d.gI("AUG4").value
	if (augment4==2)
		{BuffACC=BuffACC+augment42}
	if (augment4==3)
		{CON=CON+augment42}
	if (augment4==4)
		{AddCP=AddCP+augment42}
	if (augment4==5)
		{AddCPR=AddCPR+augment42}
	if (augment4==6)
		{AddCRIT=AddCRIT+augment42}
	if (augment4==7)
		{BuffEVA=BuffEVA+augment42}
	if (augment4==8)
		{AddHP=AddHP+augment42}
	if (augment4==9)
		{AddHPR=AddHPR+augment42}
	if (augment4==10)
		{INT=INT+augment42}
	if (augment4==11)
		{AddMATK=AddMATK+augment42}
	if (augment4==12)
		{AddMDEF=AddMDEF+augment42}
	if (augment4==13)
		{MEN=MEN+augment42}
	if (augment4==14)
		{AddMP=AddMP+augment42}
	if (augment4==15)
		{AddMPR=AddMPR+augment42}
	if (augment4==16)
		{AddPATK=AddPATK+augment42}
	if (augment4==17)
		{AddPDEF=AddPDEF+augment42}
	if (augment4==18)
		{STR=STR+augment42}
var augment5 = + d.gI("WAU5").value
var augment52 = + d.gI("AUG5").value
	if (augment5==2)
		{BuffACC=BuffACC+augment52}
	if (augment5==3)
		{CON=CON+augment52}
	if (augment5==4)
		{AddCP=AddCP+augment52}
	if (augment5==5)
		{AddCPR=AddCPR+augment52}
	if (augment5==6)
		{AddCRIT=AddCRIT+augment52}
	if (augment5==7)
		{BuffEVA=BuffEVA+augment52}
	if (augment5==8)
		{AddHP=AddHP+augment52}
	if (augment5==9)
		{AddHPR=AddHPR+augment52}
	if (augment5==10)
		{INT=INT+augment52}
	if (augment5==11)
		{AddMATK=AddMATK+augment52}
	if (augment5==12)
		{AddMDEF=AddMDEF+augment52}
	if (augment5==13)
		{MEN=MEN+augment52}
	if (augment5==14)
		{AddMP=AddMP+augment52}
	if (augment5==15)
		{AddMPR=AddMPR+augment52}
	if (augment5==16)
		{AddPATK=AddPATK+augment52}
	if (augment5==17)
		{AddPDEF=AddPDEF+augment52}
	if (augment5==18)
		{STR=STR+augment52}

//////////////////Enemy Targets
var TARGET=new Array(
new Array("Generic Player",LVL,"player",30,1.1,1.2,1.1,0.9,"Sword",0,80,379,"S","bu",244,1.085,1,0,300,1,0,0,0,0,0,1,0,1,0,0,1,0,false,0,0,0,"SR"),
new Array("Generic Monster",LVL,"monster",30,1.1,1.2,1.1,0.9,"Sword",0,80,379,"N","no SA",244,1,1,0,300,1,0,0,0,0,0,1,0,1,0,0,1,0,false,0,0,0,"SR"),
new Array("lv40 Temple Knight",40,"player",35,1.15,1.04,1.1,0.9,"Sword",0,80,379,"C","bu",165,1.085,1,19.1,394,1,73.5,0,-8,73.3,0,1,0,1,0,206,1,0,false,1.94731,0,0,"SR"),
new Array("lv40 Hawkeye",40,"player",34,1.14,1.65,1.05,0.95,"Bow",-3.75,120,293,"C","bu",341,1.085,1,182.8,301,1,31.8,0,12,0,0.2,1.05,0,1,56,0,1,0,false,0,0,1500,"LR"),
new Array("lv40 Prophet",40,"player",21,1.01,0.63,1.2,0.8,"Blunt",4.75,40,379,"C","bu",165,1.45,1,18.1,245,1.0526,38,0,-8,0,0,1,0,1,0,206,1,0,false,1,0,0,"SR"),
new Array("lv61 Temple Knight",61,"player",33,1.13,1.04,1.1,0.9,"Sword",0,80,379,"A","bu",244,1.085,1.04,50.4,483,1,346.4,0,-8,0,0,1,0,1,0,259,1,0,true,3,0.05,0,"SR"),
new Array("lv61 Hawkeye",61,"player",35,1.15,1.43,1.05,0.95,"YumiBow",-3.75,120,227,"A","bu",552,1.085,1.08,497.1,410,1,57.5,0,12,0,0.2,1.05,0,1,56,0,1,0,false,0,0,696.915,"LR"),
new Array("lv61 Prophet",61,"player",21,1.01,0.63,1.2,0.8,"Blunt",4.75,40,379,"A","bu",244,1.45,1,49.4,319,1.08,69.5,0,-8,0,0,1,0,1,0,259,1,0,false,1,0,0,"SR"),
new Array("lv80 Temple Knight",80,"player",33,1.13,1.12,1.1,0.9,"Sword",0,80,379,"S","bu",296,1.085,1.04,80.4,545,1.08,556.3,4,-8,84.3,0,1.04,0,1.3225,0,293,1.1,599,true,3,0.05,0,"SR"),
new Array("lv80 Hawkeye",80,"player",35,1.15,1.48,1.05,0.95,"Bow",-3.75,120,293,"S","bu",611,1.085,1.0816,998.6,461,1,79.6,4,12,88.1,0.2,1.13568,0,1.3225,56,0,1,0,false,0,0.05,1500,"LR"),
new Array("lv80 Prophet",80,"player",21,1.01,0.63,1.2,0.8,"Blunt",4.75,40,379,"S","bu",296,1.45,1.04,79.4,319,1.08,96.6,4,-8,0,0,1.04,0,1.3225,0,293,1,0,false,1,0.05,0,"SR"),
new Array("clone"),
0)

//Enemy Stats
var enemy = + d.gI("ENE").value
if (enemy!=11) {
	d.gI("LVO").disabled=false
	var ELVLOFF=+ d.gI("LVO").value
//Enemy Base Stats
	var ELVL=TARGET[enemy][1]+ELVLOFF
	var ELVLMOD=(ELVL+89)/100
	var targettype=TARGET[enemy][2]
	var EDEX=TARGET[enemy][3]
	var EDEXMOD=TARGET[enemy][4]
	var ESTRMOD=TARGET[enemy][5]
//Enemy Weapon
	var Eranddmg=TARGET[enemy][6]
	var Eminranddmg=TARGET[enemy][7]
	var EWpnType=TARGET[enemy][8]
	var EWpnAcc=TARGET[enemy][9]
	var EWpnCrt=TARGET[enemy][10]
	var EWpnSpd=TARGET[enemy][11]
	var Eweapongrade=TARGET[enemy][12]
	var Eweapon_sa=TARGET[enemy][13]
	var Ebowdelay=TARGET[enemy][35]
	var ERange=TARGET[enemy][36]
//Enemy P.Atk.
	var EWpnPATK=TARGET[enemy][14]
	var EMasteryPATK=TARGET[enemy][15]
	var EBuffPATK=TARGET[enemy][16]
	var EAddPATK=TARGET[enemy][17]
//Enemy P.Def.
	var Eapdef=TARGET[enemy][18]
	var EBuffPDEF=TARGET[enemy][19]
	var EAddPDEF=TARGET[enemy][20]
//Enemy Accuracy
	var EBuffACC=TARGET[enemy][21]
//Enemy Evasion
	var EBuffEVA=TARGET[enemy][22]
//Enemy Critical
	var Ebasecritical=EWpnCrt*EDEXMOD
	var EAddCRIT=TARGET[enemy][23]
	var Esubcritical=Ebasecritical*(TARGET[enemy][24])
//Enemy Atk. Spd.
	var EBuffASPD=TARGET[enemy][25]
	var EAddASPD=TARGET[enemy][26]
//Enemy Critical Damage
	var EBuffCRITDMG=TARGET[enemy][27]
	var EAddCRITDMG=TARGET[enemy][28]
	var EBuffCOMBATCRIT=1
	var EAddCOMBATCRIT=1
//Enemy Reflect Damage
	var Ebuffrd=TARGET[enemy][34]
	d.gI("EBUFFS").disabled=false
//Enemy Buffs
	var EBuffSBR=1
	var EBuffSD=TARGET[enemy][30]
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
		{EBuffPATK=EBuffPATK*1.15*1.05;EBuffPDEF=EBuffPDEF*1.0925;EBuffACC=EBuffACC+2;EBuffEVA=EBuffEVA-2;Esubcritical=Esubcritical+Ebasecritical*0.2;EBuffASPD=EBuffASPD*1.05;EBuffSBR=EBuffSBR*1.3;EBuffCRITDMG=EBuffCRITDMG*1.3}
	if (ebuffs=="1" && (enemy==7||enemy==10)||(ebuffs>=2 && ebuffs<=6 && enemy!=2 && enemy!=5 && enemy!=8))
		{EBuffPATK=EBuffPATK*1.242;EBuffPDEF=EBuffPDEF*1.058;EBuffACC=EBuffACC+4;EBuffEVA=EBuffEVA-4;Esubcritical=Esubcritical+Ebasecritical*0.3;EBuffASPD=EBuffASPD*1.4364;EBuffSBR=EBuffSBR*1.5;EBuffCRITDMG=EBuffCRITDMG*1.35}
	if ((ebuffs>=2 && ebuffs<=6 && (enemy==2||enemy==5||enemy==8)))
		{EBuffPATK=EBuffPATK*1.15;EBuffPDEF=EBuffPDEF*1.15;EBuffACC=EBuffACC+4;Esubcritical=Esubcritical+Ebasecritical*0.3;EBuffASPD=EBuffASPD*1.33;EBuffSBR=EBuffSBR*1.5;EBuffCRITDMG=EBuffCRITDMG*1.35}
	if (ebuffs=="3"||ebuffs=="5"||ebuffs=="6")
		{EBuffPATK=EBuffPATK*1.12;EBuffASPD=EBuffASPD*1.15;EBuffCRITDMG=EBuffCRITDMG*1.35}
	if (ebuffs=="4"||ebuffs=="5"||ebuffs=="6")
		{EBuffPDEF=EBuffPDEF*1.25;Esubcritical=Esubcritical+Ebasecritical}
	if (ebuffs=="6")
		{EBuffPATK=EBuffPATK*1.1*1.1;EBuffPDEF=EBuffPDEF*1.2;EBuffACC=EBuffACC+8;EBuffEVA=EBuffEVA+7;Esubcritical=Esubcritical+Ebasecritical*0.5;EBuffASPD=EBuffASPD*1.2;EBuffSBR=EBuffSBR/1.5*1.8;EBuffCRITDMG=EBuffCRITDMG*1.25*1.2;EBuffSD=EBuffSD*2;Ebuffrd=Ebuffrd+0.4}
//Enemy Debuffs
	if (d.gI("EDEPC").checked==true)
		{var bu=d.gI("EDEP").value;EBuffPATK=EBuffPATK*WEAKNESS[bu];EBuffPDEF=EBuffPDEF*WEAKNESSPDEF[bu]}
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
		{var bu=d.gI("ESBB").value;EBuffACC=EBuffACC+SANDBOMB[bu]}
	if (d.gI("ETRBC").checked==true)
		{var bu=d.gI("ETRB").value;Esubcritical=Esubcritical+(Ebasecritical*TRIBUNAL[bu]);EBuffCRITDMG=EBuffCRITDMG*TRIBUNAL3[bu]}
	if (d.gI("ETRBC").checked==true && Range=="SR")
		{BuffDAMAGE=BuffDAMAGE*TRIBUNAL2[bu]}
	if (d.gI("EDENC").checked==true)
		{var bu=d.gI("EDEN").value;EBuffASPD=EBuffASPD*DEASPD[bu]}
	if (d.gI("EJDGC").checked==true)
		{var bu=d.gI("EJDG").value;EBuffCRITDMG=EBuffCRITDMG*JUDGMENT[bu]}
	if (d.gI("EJDGC").checked==true && Range=="SR")
		{var bu=d.gI("EJDG").value;BuffDAMAGE=BuffDAMAGE*TRIBUNAL2[bu]}
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
		{var bu=d.gI("HEE").value;EBuffPDEF=EBuffPDEF*0.5;EBuffEVA=EBuffEVA-16;EBuffSBR=EBuffSBR*0.5}
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
	if (d.gI("ERTGC").checked==true && (WpnType=="Bow"||WpnType=="YumiBow"))
		{var bu=d.gI("ERTG").value;BuffDAMAGE=BuffDAMAGE*REALTARGET[bu]}
	else if (d.gI("ERTGC").checked==true && WpnType=="Crossbow")
		{var bu=d.gI("ERTG").value;BuffDAMAGE=BuffDAMAGE*REALTARGET2[bu]}
	if (d.gI("ERTGC").checked==true)
		{var bu=d.gI("ERTG").value;EBuffPATK=EBuffPATK*REALTARGETPATK[bu];EBuffPDEF=EBuffPDEF*REALTARGETPDEF[bu]}
	if (d.gI("EDMKC").checked==true)
		{var bu=d.gI("EDMK").value;EBuffPDEF=EBuffPDEF*DEATHMARK[bu]}
	if (d.gI("ESVXC").checked==true)
		{EBuffASPD=BuffASPD*0.7;}
	if (d.gI("ECRWC").checked==true)
		{BuffCRITDMG=1.3*BuffCRITDMG}
	if (d.gI("EHSCC").checked==true)
		{EBuffPDEF=BuffPDEF*0.7}
	if (d.gI("ESTGC").checked==true && Range=="SR")
		{var bu=d.gI("ESTG").value;BuffDAMAGE=BuffDAMAGE*STIGMA[bu]}
	if (d.gI("EAGG1C").checked==true)
		{var bu=d.gI("EAGG1").value;EBuffPDEF=EBuffPDEF*DEAGGRESSION[bu]}
	if (d.gI("EAGG2C").checked==true)
		{var bu=d.gI("EAGG2").value;EBuffPATK=EBuffPATK*DEAGGRESSION[bu]}
	if (d.gI("EHAC").checked==true)
		{var bu=d.gI("EHA").value;EBuffPDEF=EBuffPDEF*DEAGGRESSION[bu]}
	if (d.gI("EHA2C").checked==true)
		{var bu=d.gI("EHA2").value;EBuffPATK=EBuffPATK*DEAGGRESSION[bu]}
	if (d.gI("ESTSHC").checked==true)
		{var bu=d.gI("ESTSH").value;EBuffPDEF=EBuffPDEF*DESTUNSHOT[bu]}
	if (d.gI("ELSC").checked==true)
		{EBuffASPD=EBuffASPD*0.5}
	if (d.gI("ESLBC").checked==true)
		{var bu=d.gI("ESLB").value;EBuffPDEF=EBuffPDEF*DESTUNSHOT[bu]}
	if (d.gI("EVTMC").checked==true)
		{EBuffPDEF=BuffPDEF*0.77}
	if (d.gI("EDISC").checked==true)
		{EBuffPATK=EBuffPATK*0.6;}
	if (d.gI("EDISC").checked==true && targettype=="player")
		{Eranddmg=1.1;Eminranddmg=0.9;EWpnType="Fist";EWpnAcc=0;EWpnCrt=40;EWpnSpd=300;Eweapongrade="N";Eweapon_sa=0;Ebowdelay=0;ERange="S";EWpnPATK=4;EMasteryPATK=0;}
	if (d.gI("EENVC").checked==true)
		{EBuffASPD=EBuffASPD*0.77}
	if (d.gI("ESPTC").checked==true)
		{var bu=d.gI("ESPT").value;BuffCRITDMG=BuffCRITDMG*SPITE[bu]}
	if (d.gI("EXPWC").checked==true)
		{EBuffPDEF=EBuffPDEF*0.8;BuffCOMBATCRIT=BuffCOMBATCRIT*1.3}
	if (d.gI("EVMMC").checked==true)
		{EBuffPATK=EBuffPATK*0.5;EBuffASPD=EBuffASPD*0.5;EBuffACC=EBuffACC-12}
//Enemy final stats
	var Ecombatpatk=EWpnPATK*ESTRMOD*ELVLMOD*EMasteryPATK*EBuffPATK+EAddPATK
	if (((Eweapongrade=="S"||Eweapongrade=="A"||Eweapongrade=="S80") && Eweapon_sa!="no SA")||Eweapongrade=="H")
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
	var EShield=TARGET[enemy][29]
	var EAddSHIELDPDEF=TARGET[enemy][31]
	var Eshieldpdef=EShield*EBuffSD+Ecombatpdef+EAddSHIELDPDEF
	var Eblock360=TARGET[enemy][32]
	var EBuffSBR=EBuffSBR*TARGET[enemy][33]
	var EShieldBlockRate=EBaseShieldBlockRate*EBuffSBR*EDEXMOD
	if ((position==2||position==3) && block360==false)
		{EShieldBlockRate=0}
	if (EShieldBlockRate>=1)
		{EShieldBlockRate=1}
	var Eavgshieldpdef=Eshieldpdef*EShieldBlockRate+Ecombatpdef*(1-EShieldBlockRate)}
if (enemy==11)
	{var EWpnType=WpnType}
	
//Castle Benefaction
	if (d.gI("TWADC").checked==true)
		{DEX=DEX+1;MEN=MEN+1}
	if (d.gI("TWDIC").checked==true)
		{DEX=DEX+1;WIT=WIT+1}
	if (d.gI("TWGIC").checked==true)
		{STR=STR+1;MEN=MEN+1}
	if (d.gI("TWGLC").checked==true)
		{STR=STR+1;INT=INT+1}
	if (d.gI("TWGOC").checked==true)
		{DEX=DEX+1;INT=INT+1}
	if (d.gI("TWINC").checked==true)
		{CON=CON+1;INT=INT+1}
	if (d.gI("TWORC").checked==true)
		{CON=CON+1;MEN=MEN+1}
	if (d.gI("TWRUC").checked==true)
		{STR=STR+1;WIT=WIT+1}
	if (d.gI("TWSCC").checked==true)
		{CON=CON+1;WIT=WIT+1}

//Stat Modifiers
STRMOD=STRMODIFIER[STR]
DEXMOD=DEXMODIFIER[DEX]
CONMOD=CONMODIFIER[CON]
INTMOD=INTMODIFIER[INT]
WITMOD=WITMODIFIER[WIT]
MENMOD=MENMODIFIER[MEN]

//Calculations that must take place before buffs
var basecritical=WpnCrt*DEXMOD

//Buffs
//Accuracy
	if (d.gI("ACCTC").checked==true)
		{BuffACC=BuffACC+3}
//Accuracy Debuffs
	if (d.gI("DEAC").checked==true)
		{var bu=d.gI("DEA").value;BuffACC=BuffACC-DEACC[bu]}
//Acumen
	if (d.gI("ACUC").checked==true)
		{var bu=d.gI("ACU").value;BuffCAST=BuffCAST*ACUMEN[bu]}
//Advanced Block
	if (d.gI("ADBC").checked==true)
		{var bu=d.gI("ADB").value;BuffSD=BuffSD*ADVANCEDBLOCK[bu]}
	if (d.gI("ADBC").checked==true && d.gI("ADB").value==4)
		{BuffSBR=BuffSBR*1.3}
//Aegis Stance
	if (d.gI("ASTC").checked==true)
		{var bu=d.gI("AST").value;BuffSD=BuffSD*AEGISSTANCE[bu];block360=true}
//Agility
	if (d.gI("AGIC").checked==true)
		{var bu=d.gI("AGI").value;BuffEVA=BuffEVA+AGILITY[bu]}
	if (d.gI("AGIC").checked==true && (d.gI("AGI").value==10||d.gI("AGI").value==12))
		{AddSPEED=AddSPEED+33}
//Aggression
	if (d.gI("AGG1C").checked==true)
		{var bu=d.gI("AGG1").value;BuffPDEF=BuffPDEF*DEAGGRESSION[bu]}
	if (d.gI("AGG2C").checked==true)
		{var bu=d.gI("AGG2").value;BuffPATK=BuffPATK*DEAGGRESSION[bu]}
//Angelic Icon
	if (d.gI("ANIC").checked==true)
		{var bu=d.gI("ANI").value
		AddSPEED=AddSPEED+ANGELICSPEED[bu]
		BuffPDEF=BuffPDEF*ANGELICDEF[bu]
		BuffMDEF=BuffMDEF*ANGELICDEF[bu]}
	if (d.gI("ANIC").checked==true && (WpnType=="2hb"||WpnType=="Blunt"))
		{var bu=d.gI("ANI").value
		BuffACC=BuffACC+6
		BuffASPD=BuffASPD*ANGELICASPD[bu]
		BuffCRITDMG=BuffCRITDMG*ANGELICCRITDMG[bu]}
	if (d.gI("ANIC").checked==true && (WpnType=="2hs"||WpnType=="Sword"))
		{var bu=d.gI("ANI").value
		AddCRIT=AddCRIT+ANGELICCRIT[bu]
		BuffACC=BuffACC+6
		BuffASPD=BuffASPD*ANGELICASPD[bu]}
//Anti-Magic Armor
	if (d.gI("AMAC").checked==true)
		{AddMDEF=AddMDEF+5000}
//Appetite for Destruction
	if (d.gI("APTC").checked==true)
		{var bu=d.gI("APT").value;BuffPATK=BuffPATK*APPETITE[bu];BuffCRITDMG=BuffCRITDMG*APPETITE[bu];subcritical=subcritical+(basecritical*(APPETITE[bu]-1))}
//Arcane Agility
	if (d.gI("ARAC").checked==true)
		{var bu=d.gI("ARA").value;BuffCAST=BuffCAST*ARCANEAGI[bu]}
//Arcane Chaos
	if (d.gI("ARNC").checked==true)
		{AddMPR=AddMPR-24}
//Arcane Power
	if (d.gI("ARPC").checked==true)
		{var bu=d.gI("ARP").value;BuffMATK=BuffMATK*ARCANEPOWER[bu]}
//Arcane Wisdom
	if (d.gI("ARWC").checked==true)
		{BuffCAST=BuffCAST*0.9}
//Archer's Will
	if (d.gI("AWLC").checked==true && Range=="LR")
		{BuffACC=BuffACC+8}
//Armor Crush
	if (d.gI("ACC").checked==true)
		{BuffPDEF=0.70*BuffPDEF;BuffMDEF=0.70*BuffMDEF}
//Attack Speed Debuffs
	if (d.gI("DENC").checked==true)
		{var bu=d.gI("DEN").value;BuffASPD=BuffASPD*DEASPD[bu]
		if (bu=="4")
		{BuffCAST=BuffCAST*0.77;BuffSPEED=BuffSPEED*0.77}
		}
//Berserker Spirit
	if (d.gI("ZERKC").checked==true)
		{var bu=d.gI("ZERK").value;BuffPATK=BuffPATK*ZERK[bu];BuffPDEF=BuffPDEF*ZERKPDEF[bu];BuffMATK=BuffMATK*ZERKMATK[bu];BuffMDEF=BuffMDEF*ZERKMDEF[bu];BuffEVA=BuffEVA+ZERKEVA[bu];AddSPEED=AddSPEED+ZERKSPEED[bu];BuffASPD=BuffASPD*ZERK[bu];BuffCAST=BuffCAST*ZERK[bu]}
//Bleed
	if (d.gI("BLEDC").checked==true)
		{BuffSPEED=BuffSPEED*0.8}
//Bless Shield
	if (d.gI("BSDC").checked==true)
		{var bu=d.gI("BSD").value;BuffSBR=BuffSBR*BLESSSHIELD[bu]}
	if (d.gI("BSDC").checked==true && d.gI("BSD").value==10)
		{BuffSD=BuffSD*1.5}
//Bless the Body
	if (d.gI("BTB1C").checked==true)
		{var bu=d.gI("BTB1").value
		BuffHP=BuffHP*BTB[bu]
		AddPATK=AddPATK+BTB2[bu]}
	if (d.gI("BTB1C").checked==true && (d.gI("BTB1").value==19||d.gI("BTB1").value==50))
		{BuffMP=BuffMP*1.35}
//Bless the Soul
	if (d.gI("BTSC").checked==true)
		{var bu=d.gI("BTS").value;BuffMP=BuffMP*BTS[bu]}
	if (d.gI("BTSC").checked==true && (d.gI("BTS").value==7||d.gI("BTS").value==8))
		{BuffHP=BuffHP*1.35}
//Blessing of Prophecy
	if (d.gI("BOPC").checked==true && (race=="HF"||race=="EF"||race=="DF"||race=="OF"||race=="DW"||race=="KF")) 
		{weightlimit=weightlimit*1.25}
//Blessing of Seraphim
	if (d.gI("SERC").checked==true)
		{var bu=d.gI("SER").value;BuffMPR=BuffMPR*SERAPHIM[bu]}
//Blinding Blow
	if (d.gI("BLDC").checked==true)
		{BuffSPEED=BuffSPEED+40}
//Block Shield
	if (d.gI("BLKSC").checked==true)
		{BuffPDEF=0.90*BuffPDEF}
//Block Wind Walk
	if (d.gI("BWWC").checked==true)
		{BuffSPEED=BuffSPEED*0.9}
//Blood Pact
	if (d.gI("BLPC").checked==true)
		{BuffHP=BuffHP*1.1;AddHPR=AddHPR+10}
//Boost Morale
	if (d.gI("BMRC").checked==true && (WpnMAS=="Sword"||WpnMAS=="Blunt"||WpnMAS=="Duals"))
		{var bu=d.gI("BMR").value;BuffACC=BuffACC+BOOSTMORALEACC[bu];AddCRIT=AddCRIT+BOOSTMORALECRIT[bu];BuffCRITDMG=BuffCRITDMG*BOOSTMORALECD[bu]}
//Casting Spd. Debuffs
	if (d.gI("DECC").checked==true)
		{var bu=d.gI("DEC").value;BuffCAST=BuffCAST*ARCANEDIS[bu]}
//Chant of Protection
	if (d.gI("COPC").checked==true)
		{EBuffCRITDMG=EBuffCRITDMG*0.7}
//Children of Shilien
	if (d.gI("COSC").checked==true)
		{AddCAST=AddCAST+13;BuffMPR=BuffMPR*1.02}
//Counter Critical
	if (d.gI("CCRC").checked==true)
		{EBuffCRITDMG=EBuffCRITDMG*0.7}
	if (d.gI("CCRC").checked==true && d.gI("CCR").value==2)
		{BuffCRITDMG=BuffCRITDMG*2}
//Counter Dash
	if (d.gI("CTDC").checked==true)
		{AddSPEED=AddSPEED+40}
//Counter Rapid Shot
	if (d.gI("CTRSC").checked==true && WpnMAS=="Bow")
		{BuffASPD=BuffASPD*1.15}
//Critical Wound
	if (d.gI("CRWC").checked==true)
		{EBuffCRITDMG=1.3*EBuffCRITDMG}
//Curse Gloom
	if (d.gI("GLMC").checked==true)
		{BuffMDEF=0.77*BuffMDEF}
//Curse of Abyss
	if (d.gI("CBYC").checked==true)
		{BuffMATK=0.70*BuffMATK;BuffEVA=BuffEVA-6;BuffSPEED=BuffSPEED*0.9;BuffCAST=BuffCAST*0.8;BuffPDEF=BuffPDEF*0.7}
//Curse of Doom
	if (d.gI("CDMC").checked==true)
		{BuffPATK=0.83*BuffPATK}
//Curse of Shade
	if (d.gI("CSHC").checked==true)
		{var bu=d.gI("CSH").value;BuffPDEF=CURSEOFSHADE[bu]*BuffPDEF;BuffMDEF=CURSEOFSHADE[bu]*BuffMDEF}
//Dance of Berserker
	if (d.gI("DBZC").checked==true)
		{BuffPATK=BuffPATK*1.08;BuffASPD=BuffASPD*1.08;BuffMATK=BuffMATK*1.16;BuffCAST=BuffCAST*1.08;AddSPEED=AddSPEED+8;BuffPDEF=BuffPDEF*0.92;BuffMDEF=BuffMDEF*0.84;BuffEVA=BuffEVA-4}
//Dance of Bladestorm
	if (d.gI("DOBC").checked==true)
		{BuffMATK=BuffMATK*0.01}
	if (d.gI("DOBC").checked==true && (EWpnType=="Bow"||EWpnType=="YumiBow"))
		{EBuffDAMAGE=EBuffDAMAGE*0.01}
//Dance of Concentration
	if (d.gI("DCONC").checked==true)
		{BuffCAST=BuffCAST*1.3}
//Dance of Fire
	if (d.gI("DOFC").checked==true)
		{BuffCRITDMG=BuffCRITDMG*1.35}
//Dance of Fury
	if (d.gI("DFUC").checked==true)
		{BuffASPD=BuffASPD*1.15}
//Dance of Inspiration
	if (d.gI("DOIC").checked==true)
		{BuffACC=BuffACC+4}
//Dance of Mystic
	if (d.gI("DOMYC").checked==true)
		{BuffMATK=1.2*BuffMATK}
//Dance of Shadow
	if (d.gI("DSHC").checked==true)
		{BuffSPEED=BuffSPEED*0.5}
//Dance of Vampire
	if (d.gI("DOVC").checked==true)
		{BuffVR=BuffVR+0.08}
//Dance of Warrior
	if (d.gI("DWAC").checked==true)
		{var bu=d.gI("DWA").value;BuffPATK=BuffPATK*BLESSANGEL[bu]}
//Dark Vortex
	if (d.gI("DVC").checked==true)
		{AddMPR2=AddMPR2-12}
//Dash
	if (d.gI("DAS1C").checked==true)
		{var bu=d.gI("DAS1").value;AddSPEED=AddSPEED+DASH[bu]}
//Dead Eye
	if (d.gI("DEYC").checked==true && WpnMAS=="Bow")
		{var bu=d.gI("DEY").value;AddPATK=AddPATK+DEADEYEPATK[bu];BuffACC=BuffACC+DEADEYEACC[bu];BuffASPD=BuffASPD*0.8;BuffCRITDMG=BuffCRITDMG*1.2}
//Death Mark
	if (d.gI("DMKC").checked==true)
		{var bu=d.gI("DMK").value;BuffPDEF=BuffPDEF*DEATHMARK[bu];BuffMDEF=BuffMDEF*DEATHMARK[bu]}
//Death Whisper
	if (d.gI("DEWC").checked==true)
		{var bu=d.gI("DEW").value;BuffCRITDMG=BuffCRITDMG*DEATHWHISPER[bu]}
	if (d.gI("DEWC").checked==true && (d.gI("DEW").value==10||d.gI("DEW").value==11||d.gI("DEW").value==12))
		{subcritical=subcritical+(basecritical*0.3)}
//Decrease Weight
	if (d.gI("DCWC").checked==true)
		{var bu=d.gI("DCW").value;weightpenalty=weightpenalty+DECREASEWEIGHT[bu]}
//Deflect Arrow
	if (d.gI("DEA1C").checked==true && (EWpnType=="Bow"||EWpnType=="YumiBow"))
		{var bu=d.gI("DEA1").value;EBuffDAMAGE=EBuffDAMAGE*DEFLECTARROW[bu]}
	if (d.gI("DEA1C").checked==true && EWpnType=="Crossbow")
		{var bu=d.gI("DEA1").value;EBuffDAMAGE=EBuffDAMAGE*DEFLECTARROW2[bu]}
	if (d.gI("DEA1C").checked==true)
		{var bu=d.gI("DEA1").value;BuffSD=BuffSD*DEFLECTARROW3[bu]}
//Demonic Blade Dance
	if (d.gI("DBDC").checked==true)
		{var bu=d.gI("DBD").value;BuffPATK=BuffPATK*DEMONICBD[bu];BuffMATK=BuffMATK*DEMONICBD[bu]}
//Detect Weakness
	if (d.gI("DTWC").checked==true && targettype!="player")
		{var bu=d.gI("DTW").value;BuffDAMAGE=BuffDAMAGE*DETECT[bu]}
//Diamond Dust
	if (d.gI("DMDC").checked==true)
		{BuffSPEED=BuffSPEED*0.6}
//Divine Power
	if (d.gI("DVPC").checked==true)
		{var bu=d.gI("DVP").value;HPWR=HPWR+DIVINEPOWER[bu]}
//Divine Sacrifice
	if (d.gI("DSCC").checked==true)
		{BuffHPR=BuffHPR*0.9}
//Divine Transformation Sacrifice
	if (d.gI("DTRC").checked==true)
		{var bu=d.gI("DTR").value;
		if (bu=="1")
			{BuffPATK=BuffPATK*1.2}
		if (bu=="2")
			{BuffPDEF=BuffPDEF*1.3}
		if (bu=="3")
			{BuffEVA=BuffEVA+10}
		if (bu=="4")
			{BuffMATK=BuffMATK*1.2}
		if (bu=="5")
			{subcritical=subcritical+(basecritical*0.2);BuffCRITDMG=BuffCRITDMG*1.2}
		if (bu=="6")
			{AddSPEED=AddSPEED+10;BuffHP=BuffHP*1.1;BuffACC=BuffACC+2;BuffPDEF=BuffPDEF*1.1;BuffPATK=BuffPATK*1.1;BuffASPD=BuffASPD*1.1;subcritical=subcritical+(basecritical*0.1);BuffCRITDMG=BuffCRITDMG*1.1;BuffMDEF=BuffMDEF*1.1;BuffMATK=BuffMATK*1.1;BuffCAST=BuffCAST*1.1}
		}
//Dread Pool
	if (d.gI("DDPC").checked==true)
		{BuffSPEED=BuffSPEED*0.67}
//Dual Dagger Mastery
	if (d.gI("DDMC").checked==true && WpnType=="DualD")
		{AddPATK=AddPATK+87.5}
//Duelist Spirit
	if (d.gI("DUELC").checked==true && WpnType=="Duals")
		{var bu=d.gI("DUEL").value;BuffASPD=BuffASPD*DUELIST[bu]}
	if (d.gI("DUELC").checked==true && targettype=="player")
		{var bu=d.gI("DUEL").value;BuffDAMAGE=BuffDAMAGE*DUELISTPVP[bu]}
//Empower
	if (d.gI("EMPC").checked==true)
		{var bu=d.gI("EMP").value;BuffMATK=BuffMATK*EMPOWER[bu]}
	if (d.gI("EMPC").checked==true && (d.gI("EMP").value==8||d.gI("EMP").value==5))
		{BuffMDEF=BuffMDEF*1.3}
//Empowering Echo
	if (d.gI("EMEC").checked==true)
		{BuffMATK=BuffMATK*1.25}
//Enervation
	if (d.gI("ENVC").checked==true)
		{BuffSPEED=BuffSPEED*0.7;BuffASPD=BuffASPD*0.77;BuffCAST=BuffCAST*0.7}
//Enlightenment
	if (d.gI("ENHC").checked==true)
		{BuffMATK=BuffMATK*1.1;BuffCAST=BuffCAST*1.5;BuffHEAL=BuffHEAL*1.4}
	if (d.gI("ENNC").checked==true)
		{BuffMATK=BuffMATK*1.4;BuffCAST=BuffCAST*1.5;}
//Evade Shot
	if (d.gI("EVSC").checked==true)
		{var bu=d.gI("EVS").value;BuffEVA=BuffEVA+EVSHOT[bu]}
//Eva's Will
	if (d.gI("EWLC").checked==true)
		{var bu=d.gI("EWL").value;AddMDEF=AddMDEF+200;AddMDEF=AddMDEF+EVASWILL[bu];subcritical=subcritical+(basecritical*EVASWILLCRIT[bu])}
//Expose Weak Point
	if (d.gI("XPWC").checked==true)
		{BuffPDEF=BuffPDEF*0.8;EBuffCOMBATCRIT=EBuffCOMBATCRIT*1.3}
//Eye of Pa'agrio
	if (d.gI("EOPC").checked==true)
		{EBuffCRITDMG=EBuffCRITDMG*0.7;BuffACC=BuffACC+4}
//Exciting Adventure
	if (d.gI("EXAC").checked==true)
		{AddSPEED=AddSPEED+20;BuffEVA=BuffEVA+15}
//Fast Shot
	if (d.gI("FS1C").checked==true && WpnMAS=="Crossbow")
		{var fastshot1=d.gI("FS1").value;BuffASPD=BuffASPD*RAPIDSHOT[fastshot1]}
//Fighter's Will
	if (d.gI("FWLC").checked==true && Range=="SR")
		{AddPATK=AddPATK+100;BuffASPD=BuffASPD*1.1}
//Final Secret
	if (d.gI("FSCC").checked==true && targettype=="player")
		{BuffDAMAGE=BuffDAMAGE*1.3}
//Fire Armor
	if (d.gI("FRAC").checked==true)
		{var bu=d.gI("FRA").value;AddPDEF=AddPDEF+FIREARMORPDEF[bu];AddMDEF=AddMDEF+FIREARMORMDEF[bu]}
//Fire Vortex
	if (d.gI("FVC").checked==true)
		{BuffSPEED=BuffSPEED*0.9;BuffASPD=BuffASPD*0.7;BuffCAST=BuffCAST*0.9;AddMPR2=AddMPR2-12}
//Fist Fury
	if (d.gI("FFYC").checked==true)
		{BuffASPD=BuffASPD*1.25}
//Flame Icon
	if (d.gI("FLIC").checked==true)
		{BuffPDEF=BuffPDEF*1.5;BuffMDEF=BuffMDEF*1.5;BuffACC=BuffACC+6;AddSPEED=AddSPEED+30;BuffASPD=BuffASPD*1.3
		if (WpnMAS=="Sword")
			{AddCRIT=AddCRIT+100}
		if (WpnMAS=="Blunt")
			{BuffCRITDMG=BuffCRITDMG*2}
		}
//Focus
	if (d.gI("FCSC").checked==true)
		{var bu=d.gI("FCS").value;subcritical=subcritical+(basecritical*FOCUS[bu])}
	if (d.gI("FCSC").checked==true && (d.gI("FCS").value==10||d.gI("FCS").value==11||d.gI("FCS").value==13))
		{BuffCRITDMG=BuffCRITDMG*1.35}
//Focus Attack
	if (d.gI("FAC").checked==true && WpnType=="Polearm")
		{var bu=d.gI("FA").value;BuffACC=BuffACC+FOCUSATTACK[bu];BuffCRITDMG=BuffCRITDMG*FOCUSATTACKCD[bu]}
//Focus Dagger Skills
	if (d.gI("FAWC").checked==true && WpnMAS=="Dagger")
		{var bu=d.gI("FAW").value;
		if (bu==2||(bu>3 && bu<19))
			{if (position==1)
				{subcritical=subcritical+(basecritical*-0.3);BuffCRITDMG=BuffCRITDMG*0.7}
			if (position==2||position==4)
				{subcritical=subcritical+(basecritical*-0.3)}
			if (position==3||position==5)
				{subcritical=subcritical+(basecritical*-0.3);BuffCRITDMG=BuffCRITDMG*FOCUSDAGGERCDBACK[bu]}}
		if (bu==3||(bu>48 && bu<79))
			{if (position==1)
				{BuffCRITDMG=BuffCRITDMG*0.7}
			if (position==2||position==4)
				{BuffCRITDMG=BuffCRITDMG*FOCUSDAGGERCDSIDE[bu]}
			if (position==3||position==5)
				{BuffCRITDMG=BuffCRITDMG*FOCUSDAGGERCDBACK[bu]}}}
	if (d.gI("FPWC").checked==true && WpnMAS=="Dagger")
		{var bu=d.gI("FPW").value;
		if (bu==1||(bu>18 && bu<49))
			{if (position==1)
				{BuffCOMBATCRIT=BuffCOMBATCRIT*0.7}
			if (position==2||position==4)
				{BuffCOMBATCRIT=BuffCOMBATCRIT*FOCUSDAGGERCDSIDE[bu]}
			if (position==3||position==5)
				{BuffCOMBATCRIT=BuffCOMBATCRIT*FOCUSDAGGERCDBACK[bu]}}
		if (bu==2||(bu>3 && bu<19))
			{if (position==1)
				{subcritical=subcritical+(basecritical*-0.3);BuffCRITDMG=BuffCRITDMG*0.7}
			if (position==2||position==4)
				{subcritical=subcritical+(basecritical*-0.3)}
			if (position==3||position==5)
				{subcritical=subcritical+(basecritical*-0.3);BuffCRITDMG=BuffCRITDMG*FOCUSDAGGERCDBACK[bu]}}}
	if (d.gI("FTHC").checked==true && WpnMAS=="Dagger")
		{var bu=d.gI("FTH").value;
		if (bu==1||(bu>18 && bu<49))
			{if (position==1)
				{BuffCOMBATCRIT=BuffCOMBATCRIT*0.7}
			if (position==2||position==4)
				{BuffCOMBATCRIT=BuffCOMBATCRIT*FOCUSDAGGERCDSIDE[bu]}
			if (position==3||position==5)
				{BuffCOMBATCRIT=BuffCOMBATCRIT*FOCUSDAGGERCDBACK[bu]}}
		if (bu==3||(bu>48 && bu<79))
			{if (position==1)
				{BuffCRITDMG=BuffCRITDMG*0.7}
			if (position==2||position==4)
				{BuffCRITDMG=BuffCRITDMG*FOCUSDAGGERCDSIDE[bu]}
			if (position==3||position==5)
				{BuffCRITDMG=BuffCRITDMG*FOCUSDAGGERCDBACK[bu]}}}
//Frost Armor
	if (d.gI("FARC").checked==true)
		{BuffSPEED=BuffSPEED*0.7}
//Force Meditation
	if (d.gI("FMDC").checked==true)
		{BuffPDEF=BuffPDEF*0.2;AddHPR=AddHPR+60;AddMPR=AddMPR+10}
//Frenzy
	if (d.gI("FZY1C").checked==true)
		{var bu=d.gI("FZY1").value;BuffPATK60=BuffPATK60*FRENZYOTHER[bu];BuffPDEF=BuffPDEF*GUTS[bu]}
	if (d.gI("FZY1C").checked==true && (WpnType=="Sword"||WpnType=="Blunt"||WpnType=="Polearm"||WpnType=="2hs"||WpnType=="2hb"))
		{var bu=d.gI("FZY1").value;BuffPATK60=BuffPATK60*FRENZY[bu]}
	if (d.gI("FZY1C").checked==true && (WpnType=="2hs"||WpnType=="2hb"))
		{var bu=d.gI("FZY1").value
		BuffPATK60=BuffPATK60*FRENZY2HS[bu]
		BuffACC60=BuffACC60+FRENZY2HSACC[bu]}
//Furious Soul
	if (d.gI("FRS1C").checked==true)
		{var bu=d.gI("FRS1").value;BuffPDEF=BuffPDEF*0.8;subcritical=subcritical+(basecritical*FURIOUSSOUL[bu]);BuffCRITDMG=BuffCRITDMG*FURIOUSSOUL2[bu]}
//Ghost Walking
	if (d.gI("GWKC").checked==true)
		{AddSPEED=AddSPEED+33;BuffEVA=BuffEVA+15}
//Great Fury
	if (d.gI("GRTC").checked==true)
		{BuffASPD=BuffASPD*1.5}
//Greater Might/Shield
	if (d.gI("GRMC").checked==true)
		{var bu=d.gI("GRM").value;BuffPATK=BuffPATK*GREATERMIGHT[bu];BuffPDEF=BuffPDEF*GREATERSHIELD[bu]}
//Guard Stance
	if (d.gI("GSC").checked==true)
		{var bu=d.gI("GS").value;AddPDEF=AddPDEF+GUARDSTANCE[bu];BuffSBR=BuffSBR*1.5}
//Guidance
	if (d.gI("GUIDC").checked==true)
		{var bu=d.gI("GUID").value;BuffACC=BuffACC+GUIDANCE[bu]}
//Hard March
	if (d.gI("HDMC").checked==true)
		{AddSPEED=AddSPEED+20}
//Haste
	if (d.gI("HSTC").checked==true)
		{var bu=d.gI("HST").value;BuffASPD=BuffASPD*HASTE[bu]}
	if (d.gI("HSTC").checked==true && d.gI("HST").value==10)
		{BuffVR=BuffVR+0.09}
//Hate Aura
	if (d.gI("HAC").checked==true)
		{var bu=d.gI("HA").value;BuffPDEF=BuffPDEF*DEAGGRESSION[bu]}
	if (d.gI("HA2C").checked==true)
		{var bu=d.gI("HA2").value;BuffPATK=BuffPATK*DEAGGRESSION[bu]}
//Hawk Eye
	if (d.gI("HEC").checked==true)
		{var bu=d.gI("HE").value;BuffPDEF=0.90*BuffPDEF;BuffACC=BuffACC+HAWKEYE[bu]}
//Hell Roar
	if (d.gI("HRRC").checked==true)
		{BuffSPEED=BuffSPEED*0.67}
//Hell Scream
	if (d.gI("HSCC").checked==true)
		{BuffPDEF=BuffPDEF*0.7;BuffMDEF=BuffMDEF*0.7}
//Hero Debuffs
	if (d.gI("HEEC").checked==true) {
		var bu=d.gI("HEE").value;
		if (bu=="1")
			{BuffPDEF=BuffPDEF*0.5;AddMDEF=AddMDEF-50;BuffEVA=BuffEVA-16;BuffSBR=BuffSBR*0.5}
	}
	if (d.gI("HEDC").checked==true) {
		var bu=d.gI("HED").value;
		if (bu=="1")
			{AddSPEED=AddSPEED+66}
	}
//Hero Skills
	if (d.gI("HERC").checked==true) {
		var bu=d.gI("HER").value;
		if (bu=="1")
			{AddPATK=AddPATK+500;AddMATK=AddMATK+500;BuffPDEF=BuffPDEF*0.75;AddMDEF=AddMDEF-25;BuffACC=BuffACC+8;BuffEVA=BuffEVA-8;AddSPEED=AddSPEED+20;AddASPD=AddASPD+100;AddCAST=AddCAST+100}
		else if (bu=="2" && (Shield!=0 && ShieldSigil!=0))
			{AddPDEF=AddPDEF+5400;AddMDEF=AddMDEF+4050;AddSPEED=AddSPEED+5}
		else if (bu=="3")
			{AddPATK=AddPATK+250;AddPDEF=AddPDEF+500}
	}
//Hide
	if (d.gI("HIDC").checked==true)
		{BuffSPEED=BuffSPEED*0.7}
//Hot Springs Cholera
	if (d.gI("CHOLC").checked==true)
		{var bu=d.gI("CHOL").value;BuffACC=BuffACC+HSCHOLACC[bu];BuffEVA=BuffEVA+HSCHOLEVA[bu]}
//Hot Springs Malaria
	if (d.gI("MALC").checked==true)
		{var bu=d.gI("MAL").value;BuffCAST=BuffCAST*HSMALARIA[bu]}
//Hurricane Armor
	if (d.gI("HARC").checked==true)
		{BuffASPD=BuffASPD*0.77}
//Ice Vortex
	if (d.gI("IVC").checked==true)
		{BuffSPEED=BuffSPEED*0.7;BuffASPD=BuffASPD*0.9;BuffCAST=BuffCAST*0.9;AddMPR2=AddMPR2-12}
//Insane Crusher
	if (d.gI("INCC").checked==true)
		{BuffCP=0.1*BuffCP}
//Invocation
	if (d.gI("INVC").checked==true)
		{BuffPDEF=BuffPDEF*0.1}
//Judgment
	if (d.gI("JDGC").checked==true)
		{var bu=d.gI("JDG").value;BuffCRITDMG=BuffCRITDMG*JUDGMENT[bu];subcritical=subcritical-(basecritical*JUDGMENT3[bu])}
	if (d.gI("JDGC").checked==true && ERange=="SR")
		{var bu=d.gI("JDG").value;EBuffDAMAGE=EBuffDAMAGE*TRIBUNAL2[bu]}
//Light Vortex
	if (d.gI("LVORC").checked==true)
		{var bu=d.gI("LVOR").value;BuffACC=BuffACC-6;AddMPR2=AddMPR2-12}
//Lightning Strike
	if (d.gI("LSC").checked==true)
		{BuffSPEED=BuffSPEED*0.5;BuffASPD=BuffASPD*0.5;BuffCAST=BuffCAST*0.5}
//Lord of Vampire
	if (d.gI("LOVC").checked==true)
		{BuffVR=BuffVR+0.8}
//Magic Barrier
	if (d.gI("MB1C").checked==true)
		{var mb1=d.gI("MB1").value;BuffMDEF=BuffMDEF*MAGICBARRIER[mb1]}
	if (d.gI("MB1C").checked==true && (d.gI("MB1").value==16||d.gI("MB1").value==22))
		{BuffMATK=BuffMATK*1.75}
//Magic Impulse
	if (d.gI("MIMC").checked==true)
		{var bu=d.gI("MIM").value;BuffMATK=BuffMATK*MAGICIMPULSE[bu];BuffCAST=BuffCAST*1.15}
//Magical Backfire
	if (d.gI("MBKC").checked==true)
		{var bu=d.gI("MBK").value;BuffMPR=BuffMPR*MAGICALBACKFIRE[bu]}
//Magician's Will
	if (d.gI("MWLC").checked==true)
		{BuffMATK=BuffMATK*1.05;BuffCAST=BuffCAST*1.05}
//Majesty
	if (d.gI("MAJ1C").checked==true)
		{var maj1=d.gI("MAJ1").value;BuffPDEF=BuffPDEF*MAJESTY[maj1];BuffEVA=BuffEVA+MAJESTYEVA[maj1]}
//Mana Regeneration
	if (d.gI("MRGC").checked==true)
		{var manaregen=d.gI("MRG").value;AddMPR=AddMPR+MANAREGEN[manaregen]}
//Might
	if (d.gI("MT1C").checked==true)
		{var bu=d.gI("MT1").value;BuffPATK=BuffPATK*MIGHT[bu]}
	if (d.gI("MT1C").checked==true && (d.gI("MT1").value==13||d.gI("MT1").value==14||d.gI("MT1").value==15))
		{BuffPDEF=BuffPDEF*1.15}
//Over Hit
	if (d.gI("OVHC").checked==true)
			{BuffPATK=BuffPATK*1.5}
//Over the Body
	if (d.gI("OTBC").checked==true)
		{BuffHP=BuffHP*1.35;BuffHPR=BuffHPR*1.15;BuffPATK=BuffPATK*1.25;BuffPDEF=BuffPDEF*1.3;BuffASPD=BuffASPD*1.1;BuffSPEED=BuffSPEED*1.1}
//Pa'agrio's Fist
	if (d.gI("PAFC").checked==true)
		{AddCP=AddCP+800}
//Pain of Shilien
	if (d.gI("PSHC").checked==true)
		{var bu=d.gI("PSH").value;BuffCRITDMG=BuffCRITDMG*1.1;BuffCRITDMG=BuffCRITDMG*PAINSHIL[bu];BuffVR=BuffVR+PAINSHILVR[bu]}
//Parry Stance
	if (d.gI("PRYC").checked==true)
		{var bu=d.gI("PRY").value;BuffPDEF=PARRYSTANCE[bu]*BuffPDEF;BuffMDEF=PARRYSTANCE[bu]*BuffMDEF;BuffACC=BuffACC-4;BuffSPEED=BuffSPEED*0.9;BuffASPD=BuffASPD*0.8}
//P.Atk. Debuffs
	if (d.gI("DEPC").checked==true)
		{var bu=d.gI("DEP").value;BuffPATK=BuffPATK*WEAKNESS[bu];BuffSPEED=BuffSPEED*WEAKNESSSPD[bu];BuffPDEF=BuffPDEF*WEAKNESSPDEF[bu]}
//P.Def. Debuffs
	if (d.gI("DEDC").checked==true)
		{var depdef=d.gI("DED").value;BuffPDEF=BuffPDEF*HEX[depdef]}
//Physical Pose
	if (d.gI("PPSC").checked==true)
		{subcritical=subcritical+(basecritical*0.2)}
//Polearm Accuracy
	if (d.gI("PACC").checked==true && WpnMAS=="Polearm")
		{var poleacc=d.gI("PAC").value;BuffACC=BuffACC+POLEACC[poleacc]}
//Prahna
	if (d.gI("PRNC").checked==true)
		{var bu=d.gI("PRN").value;AddMDEF=AddMDEF+PRAHNAH[bu]}
//Pride of Kamael
	if (d.gI("PRDC").checked==true && (WpnMAS=="Rapier"||WpnMAS=="Ancient"||WpnMAS=="Crossbow"))
		{var bu=d.gI("PRD").value;BuffPATK=BuffPATK*PRIDEPATK[bu]}
	if (d.gI("PRDC").checked==true)
		{var bu=d.gI("PRD").value;BuffMATK=BuffMATK*PRIDEMATK[bu]}
//Prophecies
	var bu=d.gI("PRP").value
	if (d.gI("PRPC").checked==true)
		{BuffHP=BuffHP*PROPHECYHP[bu];
		BuffMP=BuffMP*PROPHECYMP[bu];
		BuffCP=BuffCP*PROPHECYCP[bu];
		BuffPATK=BuffPATK*PROPHECYPATK[bu];
		BuffMATK=BuffMATK*PROPHECYMATK[bu];
		BuffPDEF=BuffPDEF*PROPHECYPDEF[bu];
		BuffMDEF=BuffMDEF*PROPHECYMDEF[bu];
		BuffACC=BuffACC+PROPHECYACC[bu];
		subcritical=subcritical+(basecritical*PROPHECYCRIT[bu]);
		BuffSPEED=BuffSPEED*PROPHECYSPEED[bu];
		BuffASPD=BuffASPD*PROPHECYASPD[bu];
		BuffCAST=BuffCAST*PROPHECYCAST[bu];
		BuffHPR=BuffHPR*PROPHECYHPR[bu];
		BuffCPR=BuffCPR*PROPHECYCPR[bu];
		BuffMPR=BuffMPR*PROPHECYMPR[bu];
		BuffCRITDMG=BuffCRITDMG*PROPHECYCRITDMG[bu]
		BuffVR=BuffVR+PROPHECYVR[bu]}
	if (d.gI("PRPC").checked==true && bu==5 && AType=="R")
		{AddMPR=AddMPR+4}
	else if (d.gI("PRPC").checked==true && bu==5 && AType=="L"||AType=="H")
		{AddMPR=AddMPR+1.5}
//Protection Instinct
	if (d.gI("PINC").checked==true)
		{var bu=d.gI("PIN").value;AddPDEF=AddPDEF+PROTINSTINCT[bu];AddMDEF=AddMDEF+PROTINSTINCT2[bu]}
//Protection of Rune
	if (d.gI("PORC").checked==true)
		{BuffMDEF=BuffMDEF*1.15}
//Protection Power
	if (d.gI("PPWC").checked==true)
		{AddMDEF=AddMDEF+1000}
//Psycho Symphony
	if (d.gI("PSYC").checked==true)
		{var bu=d.gI("PSY").value;
		BuffSPEED=BuffSPEED*PSYCHO[bu];
		BuffASPD=BuffASPD*PSYCHO[bu];
		BuffCAST=BuffCAST*PSYCHO[bu];}
//Queen Buffs
	var queen=d.gI("QUEE").value
	if ((queen=="1"||queen=="2"||queen=="3") && d.gI("QUEEC").checked==true)
		{BuffPATK=CATBUFFS[queen]*BuffPATK;BuffACC=BuffACC+2}
	else if ((queen=="4"||queen=="5"||queen=="6") && d.gI("QUEEC").checked==true)
		{subcritical=subcritical+(basecritical*CATBUFFS[queen]);BuffCRITDMG=BuffCRITDMG*CATBUFFS2[queen]}
//Rage
	if (d.gI("RGE1C").checked==true)
		{var bu=d.gI("RGE1").value;BuffPATK=BuffPATK*1.2;BuffPDEF=BuffPDEF*0.8;BuffEVA=BuffEVA-3}
	if (d.gI("RGE1C").checked==true && (WpnType=="2hs"||WpnType=="2hb"))
		{var bu=d.gI("RGE1").value;BuffPATK=RAGE2HS[bu]*BuffPATK;BuffACC=BuffACC+RAGE2HSACC[bu];BuffPDEF=BuffPDEF*0.8}
	if (d.gI("RGE1C").checked==true && (WpnMAS=="Sword"||WpnMAS=="Blunt"||WpnMAS=="Polearm"))
		{var bu=d.gI("RGE1").value;BuffPATK=RAGE[bu]*BuffPATK;BuffPDEF=BuffPDEF*0.8}
//Rapid Fire
	if (d.gI("RPFC").checked==true && WpnMAS=="Bow")
		{var rapidfire=d.gI("RPF").value
		AddPATK=AddPATK+RAPIDFIRE[rapidfire];
		BuffASPD=BuffASPD*1.2}
//Rapid Shot
	if (d.gI("RPD1C").checked==true && WpnMAS=="Bow")
		{var rapid1=d.gI("RPD1").value;BuffASPD=BuffASPD*RAPIDSHOT[rapid1]}
//Real Target
	if (d.gI("RTGC").checked==true && (EWpnType=="Bow"||EWpnType=="YumiBow"))
		{var bu=d.gI("RTG").value;EBuffDAMAGE=EBuffDAMAGE*REALTARGET[bu]}
	else if (d.gI("RTGC").checked==true && EWpnType=="Crossbow")
		{var bu=d.gI("RTG").value;EBuffDAMAGE=EBuffDAMAGE*REALTARGET2[bu]}
	if (d.gI("RTGC").checked==true)
		{var bu=d.gI("RTG").value;BuffMATK=BuffMATK*REALTARGETMATK[bu];BuffMDEF=BuffMDEF*REALTARGETMDEF[bu];BuffPATK=BuffPATK*REALTARGETPATK[bu];BuffPDEF=BuffPDEF*REALTARGETPDEF[bu]}
//Regeneration
	if (d.gI("RGNC").checked==true)
		{var regeneration=d.gI("RGN").value;BuffHPR=BuffHPR*REGENERATION[regeneration]}
//Riposte Stance
	if (d.gI("RIPC").checked==true)
		{var riposte=d.gI("RIP").value;BuffACC=BuffACC-4;BuffSPEED=BuffSPEED*0.9;BuffASPD=BuffASPD*0.8;BuffRD=BuffRD+0.3}
//Sand Bomb
	if (d.gI("SBBC").checked==true)
		{var sandbomb=d.gI("SBB").value;BuffACC=BuffACC+SANDBOMB[sandbomb]}
//Seal of Despair
	if (d.gI("DERC").checked==true)
		{BuffACC=BuffACC-6;BuffPATK=BuffPATK*0.9;BuffASPD=BuffASPD*0.7;subcritical=subcritical+(basecritical*-0.3);BuffCRITDMG=BuffCRITDMG*0.7;BuffMDEF=0.70*BuffMDEF;BuffSPEED=BuffSPEED*0.8}
//Seal of Limit
	if (d.gI("SLLC").checked==true)
		{BuffHPR=BuffHPR*0.7;BuffCPR=BuffCPR*0.7;BuffMPR=BuffMPR*0.7}
//Seal of Scourge
	if (d.gI("SCRC").checked==true)
		{BuffHPR2=BuffHPR2*0}
//Seed of Revenge
	if (d.gI("SRVC").checked==true)
		{var bu=d.gI("SRV").value;AddPATK=AddPATK+100;AddPATK=AddPATK+SEEDOFREVENGE[bu];subcritical=subcritical+(basecritical*SEEDOFREVENGECRIT[bu]);BuffCRITDMG=BuffCRITDMG*SEEDOFREVENGECD[bu]}
//Sharpshooting
	if (d.gI("SHPC").checked==true && WpnMAS=="Crossbow")
		{var bu=d.gI("SHP").value;AddPATK=AddPATK+SHARPSHOOT[bu];BuffACC=BuffACC+SHARPSHOOTACC[bu];subcritical=subcritical+(basecritical*0.2)}
//Shield
	if (d.gI("SHD1C").checked==true)
		{var shield1=d.gI("SHD1").value;BuffPDEF=BuffPDEF*SHIELD[shield1]}
	if (d.gI("SHD1C").checked==true && (d.gI("SHD1").value==15||d.gI("SHD1").value==16||d.gI("SHD1").value==17))
		{BuffPATK=BuffPATK*1.15}
//Shield Fortress
	if (d.gI("SFC").checked==true && shield!="0")
		{var bu=d.gI("SF").value;AddSHIELDPDEF=AddSHIELDPDEF+SHIELDFORTRESS[bu]}
//Shield of Faith
	if (d.gI("SOFC").checked==true)
		{var bu=d.gI("SOF").value;AddPDEF=AddPDEF+SHIELDOFFAITHPDEF[bu];AddMDEF=AddMDEF+SHIELDOFFAITHMDEF[bu]}
//Shock Blast
	if (d.gI("SBC").checked==true)
		{var shockblast=d.gI("SB").value;BuffPDEF=0.70*BuffPDEF;BuffMDEF=0.70*BuffMDEF}
//Sigil Mastery
	if (d.gI("SGMC").checked==true && ShieldSigil>0 && (JOB=="BI"||JOB=="EE"||JOB=="SHE"||JOB=="OL"))
		{AddHEAL=AddHEAL+30;BuffMPR=BuffMPR*1.17}
	if (d.gI("SGMC").checked==true && ShieldSigil>0 && (JOB=="PP"||JOB=="WC"||JOB=="ELS"||JOB=="PS"||JOB=="WL"))
		{BuffMP=BuffMP*1.05;BuffMPR=BuffMPR*1.17}
	if (d.gI("SGMC").checked==true && ShieldSigil>0 && (JOB=="NE"||JOB=="SPS"|JOB=="SOR"||JOB=="SPH"))
		{BuffMATK=BuffMATK*1.05;BuffMPR=BuffMPR*1.17}
//Silent Move
	if (d.gI("SMC").checked==true)
		{var bu=d.gI("SM").value;BuffSPEED=BuffSPEED*SILENTMOVE[bu]}
//Sixth Sense
	if (d.gI("SXSC").checked==true)
		{BuffEVA30=BuffEVA30+15}
//Skin
	if (d.gI("SKNC").checked==true)
		{var bu=d.gI("SKN").value;BuffRD=BuffRD+SKIN[bu];BuffPDEF=BuffPDEF*SKINPDEF[bu]}
//Slow
	if (d.gI("DESC").checked==true)
		{var bu=d.gI("DES").value;BuffSPEED=BuffSPEED*SLOW[bu];BuffEVA=BuffEVA-SLOWEVA[bu];BuffASPD=BuffASPD*SLOWASPD[bu]}
//Snipe
	if (d.gI("SNIC").checked==true && WpnMAS=="Bow")
		{var bu=d.gI("SNI").value;AddPATK=AddPATK+SNIPE[bu];BuffACC=BuffACC+SNIPEACC[bu];subcritical=subcritical+(basecritical*0.2)}
	if (d.gI("SNIC").checked==true)
		{var bu=d.gI("SNI").value;BuffSPEED=BuffSPEED*SNIPESPD[bu]}
//Song of Earth
	if (d.gI("SOEC").checked==true)
		{BuffPDEF=1.25*BuffPDEF}
//Song of Hunter
	if (d.gI("SOHC").checked==true)
		{subcritical=subcritical+(basecritical*1)}
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
	if (d.gI("VITC").checked==true)
		{BuffHP=1.3*BuffHP}
//Song of Warding
	if (d.gI("WARDC").checked==true)
		{BuffMDEF=1.3*BuffMDEF}
//Song of Water
	if (d.gI("SWATC").checked==true)
		{var bu=d.gI("SWAT").value;BuffEVA=BuffEVA+WINDANGEL[bu]}
//Song of Wind
	if (d.gI("SWIC").checked==true)
		{AddSPEED=AddSPEED+20}
//Song of Windstorm
	if (d.gI("SOWC").checked==true && (EWpnType=="Bow"||EWpnType=="YumiBow"))
		{EBuffDAMAGE=EBuffDAMAGE*0.7}
//Sonic Move
	if (d.gI("SNCC").checked==true)
		{var bu=d.gI("SNC").value;AddSPEED=AddSPEED+SONICMOVE[bu]}
//Soul Barrier
	if (d.gI("SBRC").checked==true)
		{var bu=d.gI("SBR").value;AddPDEF=AddPDEF+SOULBARRIERPDEF[bu];BuffMDEF=BuffMDEF*2}
	if (d.gI("SBRC").checked==true && (EWpnType=="Bow"||EWpnType=="YumiBow"))
		{EBuffDAMAGE=EBuffDAMAGE*0.4}
//Soul Breaker
	if (d.gI("SLBC").checked==true)
		{var bu=d.gI("SLB").value;BuffPDEF=BuffPDEF*DESTUNSHOT[bu]}
	if (d.gI("SLB2C").checked==true)
		{var bu=d.gI("SLB2").value;BuffMDEF=BuffMDEF*DESTUNSHOT[bu]}
//Soul Cry
	if (d.gI("SL1C").checked==true)
		{var soul1=d.gI("SL1").value;AddPATK=AddPATK+SOULCRY[soul1]}
	if (d.gI("SL2C").checked==true)
		{var soul2=d.gI("SL2").value;AddPATK=AddPATK+SOULCRY[soul2]}
	if (d.gI("SL3C").checked==true)
		{var soul3=d.gI("SL3").value;AddPATK=AddPATK+SOULCRY[soul3]}
//Soul Guard
	if (d.gI("SGC").checked==true)
		{var sg=d.gI("SG").value;AddPDEF=AddPDEF+SOULGUARD[sg]}
//Soul Harmony
	if (d.gI("SLHC").checked==true)
		{AddMPR=AddMPR+200;BuffPDEF=BuffPDEF*0.1}
//Soul of Sagitarrius
	if (d.gI("SAGC").checked==true)
		{var sag=d.gI("SAG").value;BuffMP=BuffMP*SOULOFSAG[sag]}
//Soul Vortex
	if (d.gI("SVXC").checked==true)
		{BuffSPEED=BuffSPEED*0.8;BuffASPD=BuffASPD*0.7;BuffCAST=BuffCAST*0.7;AddMPR=AddMPR-12}
//Spirit of Phoenix
	if (d.gI("PNXC").checked==true)
		{var bu=d.gI("PNX").value;AddPDEF=AddPDEF+200;AddPDEF=AddPDEF+SPIRITOFPENIX[bu]}
//Spirit of Shilien
	if (d.gI("SPOSC").checked==true)
		{BuffPATK=BuffPATK*1.3;BuffMATK=BuffMATK*1.3;AddSPEED=AddSPEED+30;BuffASPD=BuffASPD*1.3;BuffVR=BuffVR+0.4
			if (WpnMAS=="Sword")
				{AddCRIT=AddCRIT+100}
			if (WpnMAS=="Blunt")
				{BuffCRITDMG=BuffCRITDMG*2}
		}
//Spite
		if (d.gI("SPTC").checked==true)
			{var bu=d.gI("SPT").value;EBuffCRITDMG=EBuffCRITDMG*SPITE[bu]}
//Stealth
	if (d.gI("STLC").checked==true)
		{var stealth=d.gI("STL").value
		BuffPATK=BuffPATK*0.55;
		BuffPDEF=BuffPDEF*STEALTH[stealth];
		BuffMDEF=BuffMDEF*STEALTH[stealth];
		BuffACC=BuffACC-12;
		BuffEVA=BuffEVA+STEALTHEVA[stealth]}
//Stigma of Shilien
	if (d.gI("STGC").checked==true && ERange=="SR")
		{var bu=d.gI("STG").value;EBuffDAMAGE=EBuffDAMAGE*STIGMA[bu]}
//Stunning Shot
	if (d.gI("STSHC").checked==true)
		{var bu=d.gI("STSH").value;BuffPDEF=BuffPDEF*DESTUNSHOT[bu]}
	if (d.gI("STSH2C").checked==true)
		{var bu=d.gI("STSH2").value;BuffMDEF=BuffMDEF*DESTUNSHOT[bu]}
//Sword Shield
	if (d.gI("SSHC").checked==true)
		{var bu=d.gI("SSH").value;AddPDEF=AddPDEF+SWORDSHIELD[bu];BuffSPEED=BuffSPEED*SWORDSHIELDSPD[bu]}
//Thrill Fight
	if (d.gI("TFC").checked==true)
		{var bu=d.gI("TF").value;BuffSPEED=BuffSPEED*THRILLFIGHTSPD[bu];BuffASPD=BuffASPD*THRILLFIGHT[bu]}
//Totem
	var totem1=d.gI("TTM1").value
	if (totem1=="1" && d.gI("TTM1C").checked==true)
		{BuffSPEED=BuffSPEED*0.7}
	if (totem1=="1" && d.gI("TTM1C").checked==true && WpnMAS=="Fist")
		{BuffPATK=1.2*BuffPATK;BuffCRITDMG=BuffCRITDMG*1.2}
	if (totem1=="3" && d.gI("TTM1C").checked==true)
		{BuffPATK60=1.1*BuffPATK60;BuffPATK30=1.3*BuffPATK30;AddCRIT60=AddCRIT60+100;AddCRIT30=AddCRIT30+200}
	if (totem1=="3" && d.gI("TTM1C").checked==true && WpnMAS=="Fist")
		{BuffACC=BuffACC+6}
	if (totem1=="4" && d.gI("TTM1C").checked==true && WpnMAS=="Fist")
		{AddCRIT=AddCRIT+100;BuffACC=BuffACC+6;BuffCRITDMG=BuffCRITDMG*1.3}
	if (totem1=="5" && d.gI("TTM1C").checked==true)
		{BuffMDEF=1.3*BuffMDEF;BuffPDEF=1.3*BuffPDEF}
	if (totem1=="5" && d.gI("TTM1C").checked==true && WpnMAS=="Fist")
		{BuffPATK=BuffPATK*1.3;BuffCRITDMG=BuffCRITDMG*1.1}	
	if (totem1=="6" && d.gI("TTM1C").checked==true && WpnMAS=="Fist")
		{BuffACC=BuffACC+6;BuffASPD=BuffASPD*1.2}
	if (totem1=="7" && d.gI("TTM1C").checked==true)
		{BuffSPEED=BuffSPEED*1.3;BuffEVA=BuffEVA+12}
	if (totem1=="7" && d.gI("TTM1C").checked==true && WpnMAS=="Fist")
		{BuffASPD=BuffASPD*1.3}
	if (totem1=="2" && d.gI("TTM1C").checked==true)
		{BuffSPEED=BuffSPEED*1.2}
	if (totem1=="2" && d.gI("TTM1C").checked==true && WpnMAS=="Fist")
		{BuffACC=BuffACC+3}
//Touch of Death
	if (d.gI("TODC").checked==true)
		{BuffCP=BuffCP*0.1}
//Transform Slow Attack
	if (slowattack==1 && WpnMAS=="Bow")
		{BuffASPD=BuffASPD*0.5}
	if (slowattack==1 && WpnMAS=="Crossbow")
		{BuffASPD=BuffASPD*0.79}
//Tribunal
	if (d.gI("TRBC").checked==true)
		{var bu=d.gI("TRB").value;subcritical=subcritical+(basecritical*TRIBUNAL[bu]);BuffCRITDMG=BuffCRITDMG*TRIBUNAL3[bu]}
	if (d.gI("TRBC").checked==true && ERange=="SR")
		{var bu=d.gI("TRB").value;EBuffDAMAGE=EBuffDAMAGE*TRIBUNAL2[bu]}
//True Berserker
	if (d.gI("TBKC").checked==true)
		{var trubsrskr=d.gI("TBK").value;BuffPDEF=BuffPDEF*0.9;BuffEVA=BuffEVA-TRUBSRKR4[trubsrskr];BuffACC=BuffACC+TRUBSRKR1[trubsrskr];BuffPATK=BuffPATK*TRUBSRKR2[trubsrskr];BuffASPD=BuffASPD*TRUBSRKR3[trubsrskr]}
//Ultimate Defense
	if (d.gI("UD1C").checked==true)
		{var bu=d.gI("UD1").value
		AddPDEF=AddPDEF+UDPDEF[bu]
		AddMDEF=AddMDEF+UDMDEF[bu]
		BuffSPEED=BuffSPEED*UDSPD[bu]}
//Ultimate Escape
	if (d.gI("UES1C").checked==true)
		{var ues1=d.gI("UES1").value;BuffEVA=BuffEVA+UES1[ues1];AddSPEED=AddSPEED+UES2[ues1]}
//Ultimate Evasion
	if (d.gI("UEC").checked==true)
		{var ue=d.gI("UE").value;BuffEVA=BuffEVA+UE[ue]}
//Vampiric Impulse
	if (d.gI("VIMC").checked==true)
		{var bu=d.gI("VIM").value;BuffVR=BuffVR+VAMPIMPULSE[bu]}
//Vampiric Mist
	if (d.gI("VMMC").checked==true)
		{BuffPATK=BuffPATK*0.5;BuffSPEED=BuffSPEED*0.5;BuffASPD=BuffASPD*0.5;BuffACC=BuffACC-12}
//Vampiric Rage
	if (d.gI("VRAC").checked==true)
		{var bu=d.gI("VRA").value;BuffVR=BuffVR+VAMPIRICRAGE[bu]}
	if (d.gI("VRAC").checked==true && d.gI("VRA").value==9)
		{BuffASPD=BuffASPD*1.33}
//Vengeance
	if (d.gI("VENC").checked==true)
		{var bu=d.gI("VEN").value;AddPDEF=AddPDEF+5400;AddMDEF=AddMDEF+4050;BuffSPEED=BuffSPEED*VENGEANCE[bu]}
//Vicious Stance
	if (d.gI("VSC").checked==true)
		{var ue=d.gI("VS").value;AddCRITDMG=AddCRITDMG+VICIOUSSTANCE[ue]}
//Violent Temper
	if (d.gI("VTMC").checked==true)
		{BuffPDEF=BuffPDEF*0.77;BuffCAST=BuffCAST*0.85}
//War Cry
	if (d.gI("WCY1C").checked==true)
		{var bu=d.gI("WCY1").value;BuffPATK=BuffPATK*WARCRY[bu]}
//Warsmith armor buffs
	if (d.gI("WSAC").checked==true && d.gI("WSA").value==1 && AType=="H")
		{BuffPDEF=BuffPDEF*1.1}
	else if (d.gI("WSAC").checked==true && d.gI("WSA").value==2 && AType=="L")
		{BuffPDEF=BuffPDEF*1.05;BuffEVA=BuffEVA+2}
	else if (d.gI("WSAC").checked==true && d.gI("WSA").value==3 && AType=="R")
		{BuffPDEF=BuffPDEF*1.05;AddMPR=AddMPR+2}
//Warsmith weapon buffs
	if (d.gI("WSWC").checked==true && d.gI("WSW").value==1 && (WpnMAS=="Sword"||WpnMAS=="Duals"||WpnMAS=="Dagger"||WpnMAS=="Polearm"||WpnMAS=="Ancient"||WpnMAS=="Rapier"))
		{BuffPATK=BuffPATK*1.05;subcritical=subcritical+(basecritical*0.2)}
	else if (d.gI("WSWC").checked==true && d.gI("WSW").value==2 && (WpnMAS=="Fist"||WpnMAS=="Blunt"))
		{BuffPATK=BuffPATK*1.05;}
	else if (d.gI("WSWC").checked==true && d.gI("WSW").value==3 && (WpnMAS=="Bow"||WpnMAS=="Crossbow"))
		{BuffPATK=BuffPATK*1.05;}
//Wind Riding
	if (d.gI("WDRC").checked==true)
		{AddSPEED=AddSPEED+50;BuffEVA=BuffEVA+20}
//Wind Vortex
	if (d.gI("WVC").checked==true)
		{var wv=d.gI("WV").value;BuffSPEED=BuffSPEED*0.9;BuffASPD=BuffASPD*0.9;BuffCAST=BuffCAST*0.7;AddMPR2=AddMPR2-12}
//Wind Walk
	if (d.gI("WWC").checked==true)
		{var bu=d.gI("WW").value;AddSPEED=AddSPEED+WINDWALK[bu];BuffEVA=BuffEVA+WINDWALK2[bu]}
//Zealot
	if (d.gI("ZLTC").checked==true)
		{var zealot=d.gI("ZLT").value
		AddSPEED=AddSPEED+ZEALOTSPEED[zealot]}
	if (d.gI("ZLTC").checked==true && (WpnType=="Fist"||WpnType=="2hb"||WpnType=="Blunt"))
		{var zealot=d.gI("ZLT").value
		BuffASPD=BuffASPD*ZEALOT[zealot]
		BuffACC=BuffACC+6
		BuffCRITDMG=BuffCRITDMG*ANGELICCRITDMG[zealot]}
	if (d.gI("ZLTC").checked==true && JOB=="DE" && (WpnType=="Polearm"||WpnType=="2hs"||WpnType=="Sword"))
		{var zealot=d.gI("ZLT").value
		AddCRIT=AddCRIT+ZEALOTCRIT[zealot]
		BuffASPD=BuffASPD*ZEALOT[zealot]
		BuffACC=BuffACC+6}

//Nuker Nerf
if (race=="HM"||race=="EM"||race=="OM"||race=="DM")
	{
	if (AType!="R")
	{BuffASPD=BuffASPD*0.8;BuffCAST=BuffCAST*0.5}
	else
	{BuffMPR=BuffMPR*1.2}
	if (WpnMAS=="Bow"||WpnType=="Polearm")
	{BuffACC=BuffACC-8;BuffCAST=BuffCAST*0.7}
	}
if (d.gI("LMO1C").checked==true && AType=="L"||d.gI("LMO2C").checked==true && AType=="L"||d.gI("LMO3C").checked==true && AType=="L")
	{BuffCAST=BuffCAST*1.9;BuffASPD=BuffASPD*1.25}
if (d.gI("LMSC").checked==true && AType=="L")
	{BuffCAST=BuffCAST*1.88;BuffASPD=BuffASPD*1.25}
if (d.gI("LMH1C").checked==true && AType=="L"||d.gI("LMH2C").checked==true && AType=="L")
	{BuffCAST=BuffCAST*1.91;BuffASPD=BuffASPD*1.25}

//Passives
//Weapon Mastery for Fighter Classes
	if (d.gI("WMFC").checked==true)
		{var wmf=d.gI("WMF").value;AddPATK=AddPATK+WMF[wmf]}
//Weapon Mastery for Mystic Classes
	if (d.gI("WMM1C").checked==true)
		{var wmm1=d.gI("WMM1").value
		AddPATK=AddPATK+WMMPATK[wmm1];
		AddMATK=AddMATK+WMMMATK[wmm1]}
	if (d.gI("WMM2C").checked==true)
		{var wmm2=d.gI("WMM2").value
		AddPATK=AddPATK+WMMPATK[wmm2];
		AddMATK=AddMATK+WMMMATK[wmm2]}
	if (d.gI("WMM3C").checked==true)
		{var wmm3=d.gI("WMM3").value
		AddPATK=AddPATK+WMMPATK[wmm3];
		AddMATK=AddMATK+WMMMATK[wmm3]}
//Sword/Blunt Mastery (Warrior)
	if (d.gI("WSBM1C").checked==true && (WpnMAS=="Blunt"||WpnMAS=="Sword"))
		{var bu=d.gI("WSBM1").value;AddPATK=AddPATK+MTYPE1[bu]}
	if (d.gI("WSBM2C").checked==true && (WpnMAS=="Blunt"||WpnMAS=="Sword"))
		{var bu=d.gI("WSBM2").value;AddPATK=AddPATK+MTYPE1[bu]}
//Blunt Mastery
	if (d.gI("BLM1C").checked==true && (WpnMAS=="Blunt"||WpnMAS=="Sword"))
		{var bu=d.gI("BLM1").value
		AddPATK=AddPATK+BLUNTM[bu];}
	if (d.gI("BLM2C").checked==true && (WpnMAS=="Blunt"||WpnMAS=="Sword"))
		{var bu=d.gI("BLM2").value
		AddPATK=AddPATK+BLUNTM[bu];
		AddCRITDMG=AddCRITDMG+BLUNTMCRITDAMAGE[bu]}
	if (d.gI("BLM2C").checked==true)
		{var bu=d.gI("BLM2").value
		AddSPEED=AddSPEED+BLUNTMSPEED[bu];AddASPD=AddASPD+BLUNTMASPD[bu]}
//Collector's Experience
	if (d.gI("CXPC").checked==true && (WpnMAS=="Blunt"||WpnMAS=="Sword"))
		{var bu=d.gI("CXP").value
		AddPATK=AddPATK+COLLECTORSEXP[bu];}
	if (d.gI("CXPC").checked==true)
		{var bu=d.gI("CXP").value
		BuffSBR=BuffSBR*COLLECTORSEXP2[bu];}
//Polearm Mastery
	if (d.gI("PLM1C").checked==true && WpnMAS=="Polearm")
		{var bu=d.gI("PLM1").value;AddPATK=AddPATK+POLEMASTERY[bu]}
	if (d.gI("PLM2C").checked==true && WpnMAS=="Polearm")
		{var bu=d.gI("PLM2").value;AddPATK=AddPATK+POLEMASTERY[bu]}
//Fist Mastery
	if (d.gI("FIM1C").checked==true && WpnMAS=="Fist")
		{var bu=d.gI("FIM1").value;AddPATK=AddPATK+FISTM[bu]}
	if (d.gI("FIM2C").checked==true && WpnMAS=="Fist")
		{var bu=d.gI("FIM2").value;AddPATK=AddPATK+FISTM[bu];BuffACC=BuffACC+FISTMACC[bu]}
//Sword/Blunt Mastery (Knight)
	if  (d.gI("KSBM1C").checked==true && (WpnMAS=="Sword"||WpnMAS=="Blunt"))
		{var bu=d.gI("KSBM1").value;AddPATK=AddPATK+KNIGHTMASTERY[bu]}
	if  (d.gI("KSBM2C").checked==true && (WpnMAS=="Sword"||WpnMAS=="Blunt"))
		{var bu=d.gI("KSBM2").value;AddPATK=AddPATK+KNIGHTMASTERY[bu];BuffASPD=BuffASPD*KNIGHTMASTERY2[bu]}
//Dagger Mastery
	if (d.gI("DGM1C").checked==true && WpnMAS=="Dagger")
		{var bu=d.gI("DGM1").value;AddPATK=AddPATK+DAGGERM[bu]}
	if (d.gI("DGM2C").checked==true && WpnMAS=="Dagger")
		{var bu=d.gI("DGM2").value;AddPATK=AddPATK+DAGGERM[bu];subcritical=subcritical+(basecritical*DAGGERM2[bu]);BuffCRITDMG=BuffCRITDMG*DAGGERM3[bu]}
//Rapier Mastery
	if (d.gI("RPM1C").checked==true && WpnMAS=="Rapier")
		{var bu=d.gI("RPM1").value;AddPATK=AddPATK+RAPIERM[bu]}
	if (d.gI("RPM2C").checked==true && WpnMAS=="Rapier")
		{var bu=d.gI("RPM2").value;AddPATK=AddPATK+RAPIERM[bu];BuffASPD=BuffASPD*KAMAELASPD[bu]}
//Bow Mastery
	if (d.gI("BOWM1C").checked==true && WpnMAS=="Bow")
		{var bu=d.gI("BOWM1").value;AddPATK=AddPATK+BOWM[bu]}
	if (d.gI("BOWM2C").checked==true && WpnMAS=="Bow")
		{var bu=d.gI("BOWM2").value;AddPATK=AddPATK+BOWM[bu];BuffASPD=BuffASPD*BOWM2[bu]}
//Crossbow Mastery
	if (d.gI("CBM1C").checked==true && WpnMAS=="Crossbow")
		{var bu=d.gI("CBM1").value;AddPATK=AddPATK+CROSSBOWM[bu]}
	if (d.gI("CBM2C").checked==true && WpnMAS=="Crossbow")
		{var bu=d.gI("CBM2").value;AddPATK=AddPATK+CROSSBOWM[bu];BuffASPD=BuffASPD*KAMAELASPD[bu]}
//Ancient Sword Mastery
	if (d.gI("ANM1C").checked==true && WpnMAS=="Ancient")
		{var bu=d.gI("ANM1").value;AddPATK=AddPATK+ANCIENTM[bu]}
	if (d.gI("ANM2C").checked==true && WpnMAS=="Ancient")
		{var bu=d.gI("ANM2").value;AddPATK=AddPATK+ANCIENTM[bu];BuffASPD=BuffASPD*KAMAELASPD[bu]}
//Dual Weapon Mastery
	if (d.gI("DUALMC").checked==true && WpnMAS=="Duals")
		{var bu=d.gI("DUALM").value;AddPATK=AddPATK+DUALM[bu];BuffASPD=BuffASPD*DUALMASPD[bu]}
//Two Handed Weapon Mastery
	if (d.gI("THM1C").checked==true && (WpnType=="2hs"||WpnType=="2hb"))
		{var bu=d.gI("THM1").value
		AddPATK=AddPATK+THM[bu];
		BuffACC=BuffACC+THMACC[bu]}
	if (d.gI("THM2C").checked==true && (WpnType=="2hs"||WpnType=="2hb"))
		{var bu=d.gI("THM2").value
		AddPATK=AddPATK+THM[bu];
		BuffACC=BuffACC+THMACC[bu]}
//Armor Mastery (Fighter)
	if (d.gI("AMFC").checked==true && AType=="L")
		{var amf=d.gI("AMF").value
		BuffEVA=BuffEVA+AMFEVA[amf]}
	if (d.gI("AMFC").checked==true)
		{var amf=d.gI("AMF").value
		AddPDEF=AddPDEF+AMF[amf];
		BuffMPR=BuffMPR*1.1}
//Armor Mastery (Mystic)
	if (d.gI("AMMC").checked==true)
		{var amm=d.gI("AMM").value;AddPDEF=AddPDEF+AMM[amm]}
//Heavy Armor Mastery (Knight)
	if (d.gI("HMK1C").checked==true && AType=="H")
		{var bu=d.gI("HMK1").value;AddPDEF=AddPDEF+HMK[bu]
		EBuffCRITDMG=EBuffCRITDMG*0.85}
	if (d.gI("HMK2C").checked==true && AType=="H")
		{var bu=d.gI("HMK2").value;AddPDEF=AddPDEF+HMK[bu];EBuffCRITDMG=EBuffCRITDMG*HMKCD[bu]}
//Heavy Armor Mastery (Warrior)
	if (d.gI("HMW1C").checked==true && AType=="H")
		{var bu=d.gI("HMW1").valueAddPDEF=AddPDEF+HMW[bu]}
	if (d.gI("HMW2C").checked==true && AType=="H")
		{var bu=d.gI("HMW2").value;AddPDEF=AddPDEF+HMW[bu];BuffHPR=BuffHPR*HMWHPR[bu]}
//Heavy Armor Mastery (Orc Mystic)
	if (d.gI("HMO1C").checked==true && AType=="H")
		{var bu=d.gI("HMO1").value;AddPDEF=AddPDEF+HMO[bu];BuffCAST=BuffCAST*HMOCAST[bu];BuffASPD=BuffASPD*HMOASPD[bu]}
	if (d.gI("HMO2C").checked==true && AType=="H")
		{var bu=d.gI("HMO2").value;AddPDEF=AddPDEF+HMO[bu];BuffCAST=BuffCAST*HMOCAST[bu];BuffASPD=BuffASPD*HMOASPD[bu]}
	if (d.gI("HMO3C").checked==true && AType=="H")
		{var bu=d.gI("HMO3").value;AddPDEF=AddPDEF+HMO[bu];BuffCAST=BuffCAST*HMOCAST[bu];BuffASPD=BuffASPD*HMOASPD[bu]}
//Heavy Armor Mastery (Prophet)
	if (d.gI("HMPC").checked==true && AType=="H")
		{var bu=d.gI("HMP").value;AddPDEF=AddPDEF+HMP[bu];BuffCAST=BuffCAST*HMPCAST[bu];BuffASPD=BuffASPD*HMPASPD[bu]}
//Light Armor Mastery (Warrior)
	if (d.gI("LMW1C").checked==true && AType=="L")
		{var bu=d.gI("LMW1").value
		AddPDEF=AddPDEF+LMW[bu]
		BuffEVA=BuffEVA+LMWEVA[bu]}
	if (d.gI("LMW2C").checked==true && AType=="L")
		{var bu=d.gI("LMW2").value
		AddPDEF=AddPDEF+LMW[bu]
		BuffEVA=BuffEVA+LMWEVA[bu]
		BuffHPR=BuffHPR*LMWHPR[bu]}
//Light Armor Mastery (Rogue)
	if (d.gI("LMR1C").checked==true && AType=="L")
		{var lmr1=d.gI("LMR1").value
		AddPDEF=AddPDEF+LMR[lmr1]
		BuffEVA=BuffEVA+LMREVA[lmr1]
		Ecombatcritical=Ecombatcritical*0.95
		EBuffCRITDMG=EBuffCRITDMG*0.95}
	if (d.gI("LMR2C").checked==true && AType=="L")
		{var lmr2=d.gI("LMR2").value
		AddPDEF=AddPDEF+LMR[lmr2]
		BuffEVA=BuffEVA+LMREVA[lmr2]
		Ecombatcritical=Ecombatcritical*0.95
		EBuffCRITDMG=EBuffCRITDMG*0.95}
//Light Armor Mastery (Kamael)
	if (d.gI("LMK1C").checked==true && AType=="L")
		{var bu=d.gI("LMK1").value
		AddPDEF=AddPDEF+LMK[bu]
		BuffEVA=BuffEVA+LMKEVA[bu]
		Ecombatcritical=Ecombatcritical*0.95
		EBuffCRITDMG=EBuffCRITDMG*0.95}
	if (d.gI("LMK2C").checked==true && AType=="L")
		{var bu=d.gI("LMK2").value
		AddPDEF=AddPDEF+LMK[bu]
		BuffEVA=BuffEVA+LMKEVA[bu]
		Ecombatcritical=Ecombatcritical*0.95
		EBuffCRITDMG=EBuffCRITDMG*0.95}
//Light Armor Mastery (Orc Mystic)
	if (d.gI("LMO1C").checked==true && AType=="L")
		{var bu=d.gI("LMO1").value;AddPDEF=AddPDEF+LMO[bu];BuffMPR=BuffMPR*LMOMPR[bu]}
	if (d.gI("LMO2C").checked==true && AType=="L")
		{var bu=d.gI("LMO2").value;AddPDEF=AddPDEF+LMO[bu];BuffMPR=BuffMPR*LMOMPR[bu]}
	if (d.gI("LMO3C").checked==true && AType=="L")
		{var bu=d.gI("LMO3").value;AddPDEF=AddPDEF+LMO[bu];BuffMPR=BuffMPR*LMOMPR[bu]}
//Light Armor Mastery (Healer)
	if (d.gI("LMH1C").checked==true && AType=="L")
		{var lmh1=d.gI("LMH1").value;AddPDEF=AddPDEF+LMH[lmh1];BuffMPR=BuffMPR*1.2}
	if (d.gI("LMH2C").checked==true && AType=="L")
		{var lmh2=d.gI("LMH2").value;AddPDEF=AddPDEF+LMH[lmh2];BuffMPR=BuffMPR*1.2}
//Light Armor Mastery (Summoner)
	if (d.gI("LMSC").checked==true && AType=="L")
		{var bu=d.gI("LMS").value;AddPDEF=AddPDEF+LMS[bu];BuffMPR=BuffMPR*LMSMPR[bu]}
//Robe Mastery (Nuker)
	if (d.gI("RMN1C").checked==true && AType=="R")
		{var bu=d.gI("RMN1").value;AddPDEF=AddPDEF+RMN[bu]}
	if (d.gI("RMN2C").checked==true && AType=="R")
		{var bu=d.gI("RMN2").value;AddPDEF=AddPDEF+RMN[bu];BuffMDEF=BuffMDEF*RMNMD[bu]}
	if (d.gI("RMN2C").checked==true && AType=="R" && movemode==1.5)
		{var bu=d.gI("RMN2").value;BuffMPR=BuffMPR*RMNMPR[bu]}
//Robe Mastery (Healer)
	if (d.gI("RMH1C").checked==true && AType=="R")
		{var bu=d.gI("RMH1").value;AddPDEF=AddPDEF+RMH[bu]}
	if (d.gI("RMH2C").checked==true && AType=="R")
		{var bu=d.gI("RMH2").value;AddPDEF=AddPDEF+RMH[bu];BuffMDEF=BuffMDEF*RMNMD[bu]}
	if (d.gI("RMH2C").checked==true && AType=="R" && movemode==1.5)
		{var bu=d.gI("RMH2").value;BuffMPR=BuffMPR*RMNMPR[bu]}
//Robe Mastery (Orc Mystic)
	if (d.gI("RMO1C").checked==true && AType=="R")
		{var bu=d.gI("RMO1").value;AddPDEF=AddPDEF+RMO[bu]}
	if (d.gI("RMO2C").checked==true && AType=="R")
		{var bu=d.gI("RMO2").value;AddPDEF=AddPDEF+RMO[bu]}
	if (d.gI("RMO3C").checked==true && AType=="R")
		{var bu=d.gI("RMO3").value;AddPDEF=AddPDEF+RMO[bu];BuffMDEF=BuffMDEF*RMOMDEF[bu]}
	if (d.gI("RMO3C").checked==true && AType=="R" && movemode==1.5)
		{var bu=d.gI("RMO3").value;BuffMPR=BuffMPR*RMOMPR[bu]}
//Magic Resistance
	if (d.gI("MR1C").checked==true)
		{var mr1=d.gI("MR1").value;AddMDEF=AddMDEF+MR[mr1]}
	if (d.gI("MR2C").checked==true)
		{var mr2=d.gI("MR2").value;AddMDEF=AddMDEF+MR[mr2]}
//Anti-Magic
	if (d.gI("AM1C").checked==true)
		{var am1=d.gI("AM1").value;AddMDEF=AddMDEF+AM[am1]}
	if (d.gI("AM2C").checked==true)
		{var am2=d.gI("AM2").value;AddMDEF=AddMDEF+AM[am2]}
	if (d.gI("AM3C").checked==true)
		{var am3=d.gI("AM3").value;AddMDEF=AddMDEF+AM[am3]}
//Magic Immunity
	if (d.gI("MI1C").checked==true)
		{var mi1=d.gI("MI1").value;AddMDEF=AddMDEF+MI[mi1]}
	if (d.gI("MI2C").checked==true)
		{var mi2=d.gI("MI2").value;AddMDEF=AddMDEF+MI[mi2]}
	if (d.gI("MI3C").checked==true)
		{var mi3=d.gI("MI3").value;AddMDEF=AddMDEF+MI[mi3]}
//Abyssal Power
	if (d.gI("ABPC").checked==true)
		{var bu=d.gI("ABP").value;BuffMATK=BuffMATK*ABYPOWER[bu]}
//Acrobatic Move
	if (d.gI("ACRM1C").checked==true && movemode=="0.7")
		{var bu=d.gI("ACRM1").value;combatevasion=combatevasion+ACROBATICMOVE[bu]}
	if (d.gI("ACRM2C").checked==true && movemode=="0.7")
		{var bu=d.gI("ACRM2").value;combatevasion=combatevasion+ACROBATICMOVE[bu]}
//Aegis
	if (d.gI("AGSC").checked==true)
		{block360=true}
//Agile Movement
	if (d.gI("AGM1C").checked==true && AType=="L")
		{var agilemovement1=d.gI("AGM1").value
		BuffACC=BuffACC+AGILEMOVEMENT[agilemovement1]
		AddSPEED=AddSPEED+AGILEMOVEMENTSPEED[agilemovement1]}
	if (d.gI("AGM2C").checked==true && AType=="L")
		{var agilemovement2=d.gI("AGM2").value
		BuffACC=BuffACC+AGILEMOVEMENT[agilemovement2]
		AddSPEED=AddSPEED+AGILEMOVEMENTSPEED[agilemovement2]}
//Arcane Lore
	if (d.gI("ARLC").checked==true)
		{var bu=d.gI("ARL").value;BuffMATK=BuffMATK*ARCANELORE[bu]}
//Archery
	if (d.gI("ARCC").checked==true && WpnMAS=="Bow")
		{var bu=d.gI("ARC").value;AddPATK=AddPATK+ARCHERY[bu]}
//Assassination
	if (d.gI("ASSC").checked==true && WpnMAS=="Dagger")
		{var bu=d.gI("ASS").value;AddPATK=AddPATK+ASSASSINATION[bu]}
//Boost Attack Speed
	if (d.gI("BOA1C").checked==true)
		{var boostaspd1=d.gI("BOA1").value;BuffASPD=BuffASPD*BOOSTASPD[boostaspd1]}
	if (d.gI("BOA2C").checked==true)
		{var boostaspd2=d.gI("BOA2").value;BuffASPD=BuffASPD*BOOSTASPD[boostaspd2]}
//Boost Evasion
	if (d.gI("BEV1C").checked==true)
		{var bu=d.gI("BEV1").value;BuffEVA=BuffEVA+BOOSTEVASION[bu]}
	if (d.gI("BEV2C").checked==true)
		{var bu=d.gI("BEV2").value;BuffEVA=BuffEVA+BOOSTEVASION[bu]}
//Boost HP
	if (d.gI("BHP1C").checked==true)
		{var bu=d.gI("BHP1").value
		AddHP=AddHP+BOOSTHP[bu]
		AddCP=AddCP+BOOSTHPCP[bu]}
	if (d.gI("BHP2C").checked==true)
		{var bu=d.gI("BHP2").value
		AddHP=AddHP+BOOSTHP[bu]
		AddCP=AddCP+BOOSTHPCP[bu]}
	if (d.gI("BHP3C").checked==true)
		{var bu=d.gI("BHP3").value
		AddHP=AddHP+BOOSTHP[bu]
		AddCP=AddCP+BOOSTHPCP[bu]
		BuffHPR=BuffHPR*BOOSTHPHPR[bu]
		BuffCPR=BuffCPR*BOOSTHPCPR[bu]}
//Boost Mana
	if (d.gI("BMP1C").checked==true)
		{var boostmp1=d.gI("BMP1").value;AddMP=AddMP+BOOSTMP[boostmp1]}
	if (d.gI("BMP2C").checked==true)
		{var boostmp2=d.gI("BMP2").value;AddMP=AddMP+BOOSTMP[boostmp2]}
//Clan Agility
	if (d.gI("CLAGC").checked==true)
		{var bu=d.gI("CLAG").value;BuffEVA=BuffEVA+CLANADDB[bu]}
//Clan Body
	if (d.gI("CLHPC").checked==true)
		{var clanhp=d.gI("CLHP").value;BuffHP=BuffHP*CLANMULTIPLY[clanhp]}
//Clan Clarity
	if (d.gI("CLMRC").checked==true)
		{var bu=d.gI("CLMR").value;BuffMPR=BuffMPR*CLANMULTIPLY[bu]}
//Clan Empower
	if (d.gI("CLEMC").checked==true)
		{var bu=d.gI("CLEM").value;BuffMATK=BuffMATK*1.06}
//Clan Guidance
	if (d.gI("CLGDC").checked==true)
		{var bu=d.gI("CLGD").value;BuffACC=BuffACC+CLANADDB[bu]}
//Clan Magic Protection
	if (d.gI("CLMDC").checked==true)
		{var clanmdef=d.gI("CLMD").value;BuffMDEF=BuffMDEF*CLANMULTIPLYB[clanmdef]}
//Clan March
	if (d.gI("CLSPC").checked==true)
		{var clanspeed=d.gI("CLSP").value;AddSPEED=AddSPEED+CLANADD[clanspeed]}
//Clan Might
	if (d.gI("CLPAC").checked==true)
		{var clanpatk=d.gI("CLPA").value;BuffPATK=BuffPATK*CLANMULTIPLY[clanpatk]}
//Clan Morale
	if (d.gI("CLCRC").checked==true)
		{var bu=d.gI("CLCR").value;BuffCPR=BuffCPR*CLANMULTIPLYB[bu]}
//Clan Regeneration
	if (d.gI("CLHRC").checked==true)
		{var bu=d.gI("CLHR").value;BuffHPR=BuffHPR*CLANMULTIPLY[bu]}
//Clan Shield
	if (d.gI("CLPDC").checked==true)
		{var clanpdef=d.gI("CLPD").value;BuffPDEF=BuffPDEF*CLANMULTIPLY[clanpdef]}
//Clan Shield Block
	if (d.gI("CLSBC").checked==true)
		{var bu=d.gI("CLSB").value;BuffSD=BuffSD*CLANMULTIPLYD[bu]}
//Clan Shield Defense
	if (d.gI("CLSDC").checked==true)
		{var bu=d.gI("CLSD").value;BuffSBR=BuffSBR*CLANMULTIPLYC[bu]}
//Clan Soul
	if (d.gI("CLMPC").checked==true)
		{var clanhp=d.gI("CLMP").value;BuffMP=BuffMP*CLANMULTIPLY[clanhp]}
//Clan Spirituality
	if (d.gI("CLCPC").checked==true)
		{var clancp=d.gI("CLCP").value;BuffCP=BuffCP*CLANMULTIPLYB[clancp]}
//Clear Mind
	if (d.gI("CLMC").checked==true && movemode==1)
		{var clearmind=d.gI("CLM").value;AddMPR=AddMPR+CLEARMINDWALK[clearmind]}
	if (d.gI("CLMC").checked==true && movemode==1.1)
		{var clearmind=d.gI("CLM").value;AddMPR=AddMPR+CLEARMINDSTAND[clearmind]}
//Critical Chance
	if (d.gI("CRC1C").checked==true)
		{var bu=d.gI("CRC1").value;subcritical=subcritical+(basecritical*CRITICALCHANCE[bu])}
	if (d.gI("CRC2C").checked==true)
		{var bu=d.gI("CRC2").value;subcritical=subcritical+(basecritical*CRITICALCHANCE[bu])}
	if (d.gI("CRC3C").checked==true)
		{var bu=d.gI("CRC3").value;subcritical=subcritical+(basecritical*CRITICALCHANCE[bu])}
//Critical Power
	if (d.gI("CRP1C").checked==true)
		{var bu=d.gI("CRP1").value;AddCRITDMG=AddCRITDMG+CRITICALPOWER[bu]}
	if (d.gI("CRP2C").checked==true)
		{var bu=d.gI("CRP2").value;AddCRITDMG=AddCRITDMG+CRITICALPOWER[bu]}
	if (d.gI("CRP3C").checked==true)
		{var bu=d.gI("CRP3").value;AddCRITDMG=AddCRITDMG+CRITICALPOWER[bu]}
//Critical Sense
	if (d.gI("CRSC").checked==true)
		{var bu=d.gI("CRS").value;subcritical=subcritical+(basecritical*CRITICALSENSE[bu]);AddCRITDMG=AddCRITDMG+CRITICALSENSE2[bu]}
//Emergent Ability - Attack
	if (d.gI("EAATC").checked==true && (WpnType=="Sword"||WpnType=="Polearm"||WpnType=="Blunt"))
		{var bu=d.gI("EAAT").value;AddPATK=AddPATK+EMERGENTATT1[bu]}
	else if (d.gI("EAATC").checked==true && (WpnType=="Duals"||WpnType=="Fist"))
		{var bu=d.gI("EAAT").value;AddPATK=AddPATK+EMERGENTATT2[bu]}
	else if (d.gI("EAATC").checked==true && (WpnType=="Dagger"||WpnType=="DualD"))
		{var bu=d.gI("EAAT").value;AddPATK=AddPATK+EMERGENTATT3[bu]}
	else if (d.gI("EAATC").checked==true && WpnMAS=="Bow")
		{var bu=d.gI("EAAT").value;AddPATK=AddPATK+EMERGENTATT4[bu]}
	else if (d.gI("EAATC").checked==true && WpnMAS=="Crossbow")
		{var bu=d.gI("EAAT").value;AddPATK=AddPATK+EMERGENTATT5[bu]}
	else if (d.gI("EAATC").checked==true && (WpnType=="2hs"||WpnType=="2hb"))
		{var bu=d.gI("EAAT").value;AddPATK=AddPATK+EMERGENTATT6[bu]}
	else if (d.gI("EAATC").checked==true && WpnMAS=="Rapier")
		{var bu=d.gI("EAAT").value;AddPATK=AddPATK+EMERGENTATT7[bu]}
	else if (d.gI("EAATC").checked==true && WpnMAS=="Ancient")
		{var bu=d.gI("EAAT").value;AddPATK=AddPATK+EMERGENTATT8[bu]}
//Emergent Ability - Defense
	if (d.gI("EADEC").checked==true && AType=="H")
		{var bu=d.gI("EADE").value;AddPDEF=AddPDEF+EMERGENTDEF1[bu]}
	else if (d.gI("EADEC").checked==true && AType=="L")
		{var bu=d.gI("EADE").value;AddPDEF=AddPDEF+EMERGENTDEF2[bu]}
	else if (d.gI("EADEC").checked==true && AType=="R")
		{var bu=d.gI("EADE").value;AddPDEF=AddPDEF+EMERGENTDEF3[bu]}
//Emergent Ability - Empower
	if (d.gI("EAEMC").checked==true)
		{var bu=d.gI("EAEM").value;AddMATK=AddMATK+EMERGENTEMP[bu]}
//Emergent Ability - Magic Defense
	if (d.gI("EAMDC").checked==true)
		{var bu=d.gI("EAMD").value;AddMDEF=AddMDEF+EMERGENTMD[bu]}
//Enchanter Ability - Boost Mana
	if (d.gI("EABMC").checked==true)
		{AddMP=AddMP+148.2}
//Enchanter Ability - Mana Recovery
	if (d.gI("EAMRC").checked==true)
		{BuffMPR=BuffMPR*1.1}
//Esprit
	if (d.gI("ESP1C").checked==true && movemode==0.7)
		{var esprit=d.gI("ESP1").value;AddHPR=AddHPR+ESPRITHP[esprit];AddMPR=AddMPR+ESPRITMP[esprit]}
	if (d.gI("ESP2C").checked==true && movemode==0.7)
		{var esprit=d.gI("ESP2").value;AddHPR=AddHPR+ESPRITHP[esprit];AddMPR=AddMPR+ESPRITMP[esprit]}
//Evasion Haste
	if (d.gI("EVHC").checked==true)
		{var bu=d.gI("EVHM").value;BuffASPD=BuffASPD*1.15}
//Expert Casting
	if (d.gI("XPTC").checked==true)
		{BuffCAST=BuffCAST*1.1}
//Fast HP Recovery
	if (d.gI("FHR1C").checked==true)
		{var fastcast1=d.gI("FHR1").value;AddHPR=AddHPR+(FASTHPRECOVERY[fastcast1]*movemode)}
	if (d.gI("FHR2C").checked==true)
		{var fastcast1=d.gI("FHR2").value;AddHPR=AddHPR+(FASTHPRECOVERY[fastcast1]*movemode)}
	if (d.gI("FHR3C").checked==true)
		{var fastcast1=d.gI("FHR3").value;AddHPR=AddHPR+(FASTHPRECOVERY[fastcast1]*movemode)}
	if (d.gI("FHR4C").checked==true)
		{var fastcast1=d.gI("FHR4").value;AddHPR=AddHPR+(FASTHPRECOVERY[fastcast1]*movemode)}
//Fast Mana Recovery
	if (d.gI("FMR1C").checked==true)
		{var fastcast1=d.gI("FMR1").value;AddMPR=AddMPR+(FASTMANARECOVERY[fastcast1]*movemode)}
	if (d.gI("FMR2C").checked==true)
		{var fastcast1=d.gI("FMR2").value;AddMPR=AddMPR+(FASTMANARECOVERY[fastcast1]*movemode)}
//Fast Recovery
	if (d.gI("FSRC").checked==true)
		{AddHPR=AddHPR+4;AddMPR=AddMPR+2;AddCPR=AddCPR+4}
//Fast Spell Casting
	if (d.gI("FSC1C").checked==true)
		{var fastcast1=d.gI("FSC1").value;BuffCAST=BuffCAST*FASTCAST[fastcast1]}
	if (d.gI("FSC2C").checked==true)
		{var fastcast2=d.gI("FSC2").value;BuffCAST=BuffCAST*FASTCAST[fastcast2]}
//Final Fortress
	if (d.gI("FFOC").checked==true)
		{var bu=d.gI("FFO").value;AddPDEF30=AddPDEF30+FINALFORTRESS[bu];AddSHIELDPDEF=AddSHIELDPDEF+FINALFORTSDEF[bu]}
//Final Frenzy
	if (d.gI("FFRC").checked==true)
		{var finalfrenzy=d.gI("FFR").value;AddPATK30=AddPATK30+FINALFRENZY[finalfrenzy]}
//Focus Mind
	if (d.gI("FCM1C").checked==true)
		{var fastcast1=d.gI("FCM1").value;AddMPR=AddMPR+(FOCUSMIND[fastcast1]*movemode)}
	if (d.gI("FCM2C").checked==true)
		{var fastcast1=d.gI("FCM2").value;AddMPR=AddMPR+(FOCUSMIND[fastcast1]*movemode)}
//Knight Ability - Boost HP
	if (d.gI("KAHPC").checked==true)
		{AddHP=AddHP+295.32}
//Knight Ability - Defense
	if (d.gI("KADEC").checked==true && d.gI("KADE").value==1)
		{BuffPDEF=BuffPDEF*1.24
		BuffMDEF=BuffMDEF*1.24}
	if (d.gI("KADEC").checked==true && d.gI("KADE").value==2)
		{var KADEpdef=1.24;var KADEmdef=1.24;var KADEduration=15;var KADEchance=0.02}
//Knight Ability - Resist Critical
	if (d.gI("KARCC").checked==true)
		{EBuffCRITDMG=EBuffCRITDMG*0.95}
//Knighthood
	if (d.gI("KNTC").checked==true && AType=="H")
		{var bu=d.gI("KNT").value;AddPDEF=AddPDEF+KNIGHTHOOD[bu]}
	if (d.gI("KNTC").checked==true)
		{var bu=d.gI("KNT").value;BuffSD=BuffSD*KNIGHTHOOD2[bu]}
//Master Ability - Attack
	if (d.gI("MAATC").checked==true && (WpnType=="Sword"||WpnType=="Polearm"||WpnType=="Blunt"))
		{AddPATK=AddPATK+22.9}
	else if (d.gI("MAATC").checked==true && (WpnType=="Duals"||WpnType=="Fist"))
		{AddPATK=AddPATK+27.9}
	else if (d.gI("MAATC").checked==true && (WpnType=="Dagger"||WpnType=="DualD"))
		{AddPATK=AddPATK+20.1}
	else if (d.gI("MAATC").checked==true && WpnMAS=="Bow")
		{AddPATK=AddPATK+59.2}
	else if (d.gI("MAATC").checked==true && WpnMAS=="Crossbow")
		{AddPATK=AddPATK+36.3}
	else if (d.gI("MAATC").checked==true && (WpnType=="2hs"||WpnType=="2hb"))
		{AddPATK=AddPATK+5}
	else if (d.gI("MAATC").checked==true && WpnMAS=="Rapier")
		{AddPATK=AddPATK+21.4}
	else if (d.gI("MAATC").checked==true && WpnMAS=="Ancient")
		{AddPATK=AddPATK+24.8}
//Master Ability - Casting
	if (d.gI("MACAC").checked==true)
		{AddCAST=AddCAST+11}
//Master Ability - Defense
	if (d.gI("MADEC").checked==true)
		{var bu=d.gI("MADE").value;
		if (AType=="H")
			{AddPDEF=AddPDEF+MASTERABILITYHVY[bu]}
		else if (AType=="L")
			{AddPDEF=AddPDEF+MASTERABILITYLGT[bu]}
		else if (AType=="R")
			{AddPDEF=AddPDEF+MASTERABILITYRB[bu]}
			}
//Master Ability - Empower
	if (d.gI("MAEMC").checked==true)
		{AddMATK=AddMATK+28.65}
//Master Ability - Focus
	if (d.gI("MAFOC").checked==true)
		{AddCRIT=AddCRIT+30}
//Master Ability - Magic Defense
	if (d.gI("MAMDC").checked==true)
		{var bu=d.gI("MAMD").value;AddMDEF=AddMDEF+MASTERABILITYMD[bu]}
//Master of Combat
	if (d.gI("MOCC").checked==true && (WpnMAS=="Sword"||WpnMAS=="Blunt"||WpnType=="Polearm"))
		{var bu=d.gI("MOC").value;AddPATK=AddPATK+MASTEROFCOMBAT[bu];BuffCP=BuffCP*1.05}
	if (d.gI("MOCC").checked==true && (WpnType=="Fist"||WpnType=="Duals"))
		{var bu=d.gI("MOC").value;AddPATK=AddPATK+MASTEROFCOMBAT2[bu];BuffCP=BuffCP*1.05}
//Necromancy
	if (d.gI("NECC").checked==true)
		{var bu=d.gI("NEC").value;BuffMATK=BuffMATK*ARCANELORE[bu]}
//Quick Step
	if (d.gI("QS1C").checked==true)
		{var quickstep1=d.gI("QS1").value;AddSPEED=AddSPEED+QUICKSTEP[quickstep1]}
	if (d.gI("QS2C").checked==true)
		{var quickstep2=d.gI("QS2").value;AddSPEED=AddSPEED+QUICKSTEP[quickstep2]}
//Quiver of Holding
	if (d.gI("QOHC").checked==true)
		{var quiverofholding=d.gI("QOH").value;weightlimit=weightlimit*QUIVEROFHOLDING[quiverofholding]}
//Residence Agility
	if (d.gI("RSAGC").checked==true)
		{BuffEVA=BuffEVA+4}
//Residence Body
	if (d.gI("RSHPC").checked==true)
		{AddHP=AddHP+222}
//Residence Clarity
	if (d.gI("RSMRC").checked==true)
		{AddMPR=AddMPR+0.47}
//Residence Empower
	if (d.gI("RSEMC").checked==true)
		{AddMATK=AddMATK+40.4}
//Residence Guidance
	if (d.gI("RSGDC").checked==true)
		{BuffACC=BuffACC+4}
//Residence Magic Protection
	if (d.gI("RSMDC").checked==true)
		{AddMDEF=AddMDEF+44}
//Residence March
	if (d.gI("RSSPC").checked==true)
		{AddSPEED=AddSPEED+6}
//Residence Might
	if (d.gI("RSPAC").checked==true)
		{AddPATK=AddPATK+34.6}
//Residence Morale
	if (d.gI("RSCRC").checked==true)
		{AddCPR=AddCPR+1.09}
//Residence Regeneration
	if (d.gI("RSHRC").checked==true)
		{AddHPR=AddHPR+1.09}
//Residence Shield
	if (d.gI("RSPDC").checked==true)
		{AddPDEF=AddPDEF+54.7}
//Residence Shield Block
	if (d.gI("RSSBC").checked==true)
		{BuffSBR=BuffSBR*1.2}
//Residence Shield Defense
	if (d.gI("RSSDC").checked==true)
		{AddSHIELDPDEF=AddSHIELDPDEF+225}
//Residence Soul
	if (d.gI("RSMPC").checked==true)
		{AddMP=AddMP+168}
//Residence Spirituality
	if (d.gI("RSCPC").checked==true)
		{AddCP=AddCP+444}
//Rogue Ability - Chance Critical
	if (d.gI("RACCC").checked==true && d.gI("RACC").value==1)
		{subcritical=subcritical+(basecritical*0.32)}
	var RACCcrit=0
	var RACCduration=0
	var RACCchance=0
	if (d.gI("RACCC").checked==true && d.gI("RACC").value==2)
		{RACCcrit=0.32;RACCduration=15;RACCchance=0.02}
//Rogue Ability - Evasion
	if (d.gI("RAEVC").checked==true)
		{BuffEVA=BuffEVA+4}
//Seal of Strife
	if (d.gI("SOSC").checked==true)
		{var bu=d.gI("SOS").value;BuffCP=BuffCP*SEALOFSTRIFE[bu]}
//Shadow Sense
	if (d.gI("SHSC").checked==true)
		{BuffACC=BuffACC+3}
//Shield Mastery
	if (d.gI("SDM1C").checked==true)
		{var bu=d.gI("SDM1").value;
		BuffSBR=BuffSBR*SHIELDMASTERY[bu]
		BuffSD=BuffSD*SHIELDMASTERY2[bu]
		}
	if (d.gI("SDM2C").checked==true)
		{var bu=d.gI("SDM2").value;
		BuffSBR=BuffSBR*SHIELDMASTERY[bu]
		BuffSD=BuffSD*SHIELDMASTERY2[bu]
		BuffPDEF=BuffPDEF*SHIELDMASTERY3[bu]
		AddSHIELDPDEF=AddSHIELDPDEF+SHIELDMASTERY4[bu]
		}
//Squad Skills
	if (d.gI("RSFSC").checked==true)
		{var bu=d.gI("RSFS").value;AddPATK=AddPATK+SQUADPATK[bu];AddCRIT=AddCRIT+SQUADCRIT[bu];AddCRITDMG=AddCRITDMG+SQUADCD[bu];AddPDEF=AddPDEF+SQUADPDEF[bu];AddMDEF=AddMDEF+SQUADMDEF[bu];BuffSBR=BuffSBR*SQUADSDEF[bu];BuffACC=BuffACC+SQUADACC[bu];BuffEVA=BuffEVA+SQUADACC[bu];AddSPEED=AddSPEED+SQUADSPEED[bu];AddHEAL=AddHEAL+SQUADHEAL[bu];BuffMP=BuffMP*SQUADMP[bu];AddMATK=AddMATK+SQUADMATK[bu]}
//Summon Lore
	if (d.gI("SMLC").checked==true && AType=="L")
		{var bu=d.gI("SML").value;AddPDEF=AddPDEF+SUMMONLORE[bu];BuffCAST=BuffCAST*SUMMONLORE2[bu]}
	if (d.gI("SMLC").checked==true && AType=="R")
		{var bu=d.gI("SML").value;AddPDEF=AddPDEF+SUMMONLORE3[bu];BuffCAST=BuffCAST*SUMMONLORE4[bu]}
//Summoner Ability - HP/MP
	if (d.gI("SAHMC").checked==true)
		{AddHP=AddHP+147.66
		AddMP=AddMP+74.1}
//Summoner Ability - Spirit
	if (d.gI("SASPC").checked==true && d.gI("SASP").value==1)
		{BuffPATK=BuffPATK*1.08;BuffMATK=BuffMATK*1.08;BuffASPD=BuffASPD*1.08;BuffCAST=BuffCAST*1.08}
//Vital Force
	if (d.gI("VTF1C").checked==true && movemode==1.5)
		{var fastcast1=d.gI("VTF1").value;AddHPR=AddHPR+VITALFORCEHP[fastcast1]*CONMOD;AddMPR=AddMPR+VITALFORCEMP[fastcast1]}
	if (d.gI("VTF2C").checked==true && movemode==1.5)
		{var fastcast1=d.gI("VTF2").value;AddHPR=AddHPR+VITALFORCEHP[fastcast1]*CONMOD;AddMPR=AddMPR+VITALFORCEMP[fastcast1]}
//Warrior Ability - Boost CP
	if (d.gI("WACPC").checked==true)
		{AddCP=AddCP+738.3}
//Warrior Ability - Haste
	if (d.gI("WAHSC").checked==true && d.gI("WAHS").value==1 && Range=="SR")
		{BuffASPD=BuffASPD*1.32}
//Weight Limit
	if (d.gI("WTL1C").checked==true)
		{var weightlimit1=d.gI("WTL1").value;weightlimit=weightlimit*WEIGHTLIMIT[weightlimit1]}
	if (d.gI("WTL2C").checked==true)
		{var weightlimit2=d.gI("WTL2").value;weightlimit=weightlimit*WEIGHTLIMIT[weightlimit2]}
	if (d.gI("WTL3C").checked==true)
		{var weightlimit3=d.gI("WTL3").value;weightlimit=weightlimit*WEIGHTLIMIT[weightlimit3]}

//Base Stat Display
d.gI("STR").innerHTML=STR
d.gI("CON").innerHTML=CON
d.gI("DEX").innerHTML=DEX
d.gI("INT").innerHTML=INT
d.gI("WIT").innerHTML=WIT
d.gI("MEN").innerHTML=MEN

//HP calculation
var hp=BaseHP*CONMOD*BuffHP+NECKLACEHP+AddHP
if (hp<1)
	{hp=1}
var hp2=Math.floor(hp)
var hp60=hp*.6
if (hp60<1)
	{hp60=0}
var hp602=Math.floor(hp60)
var hp30=hp*.3
if (hp30<1)
	{hp30=0}
var hp302=Math.floor(hp30)
if (d.gI("HP1").checked==true)
{d.gI("HP").innerHTML=(hp2)}
else if (d.gI("HP6").checked==true && hp602<=0)
{d.gI("HP").innerHTML=(hp602+"/"+hp2);alert("You have died. In a stat calculator. You lose the Internets.")}
else if (d.gI("HP6").checked==true && hp602>=1)
{d.gI("HP").innerHTML=(hp602+"/"+hp2)}
else if (d.gI("HP3").checked==true && hp302<=0)
{d.gI("HP").innerHTML=(hp302+"/"+hp2);alert("You have died. In a stat calculator. You lose the Internets.")}
else if (d.gI("HP3").checked==true && hp302>=1)
{d.gI("HP").innerHTML=(hp302+"/"+hp2)}

//CP calculation
var cp=BaseCP*CONMOD*BuffCP+AddCP
var cp2=Math.floor(cp)
d.gI("CP").innerHTML=cp2

//MP calculation
var mp=BaseMP*MENMOD*BuffMP+AddMP
var mp2=Math.floor(mp)
d.gI("MP").innerHTML=mp2

//P.Atk. calculation
var WpnPATK=WpnPATK+(weaponunderenchant*underPATK)+(weaponoverenchant*overPATK)
if (d.gI("WMM1C").checked==true||d.gI("WMM2C").checked==true||d.gI("WMM3C").checked==true)
	{MasteryPATK=1.45}
else if (d.gI("WMFC").checked==true)
	{MasteryPATK=1.085}
var patk=WpnPATK*STRMOD*LVLMOD*NECKLACEPATK*MasteryPATK*BuffPATK+AddPATK
var patk2=Math.floor(patk)
var patk60=WpnPATK*STRMOD*LVLMOD*NECKLACEPATK*MasteryPATK*BuffPATK*BuffPATK60+AddPATK+AddPATK60
var patk602=Math.floor(patk60)
var patk30=WpnPATK*STRMOD*LVLMOD*NECKLACEPATK*MasteryPATK*BuffPATK*BuffPATK60*BuffPATK30+AddPATK+AddPATK60+AddPATK30
var patk302=Math.floor(patk30)
if (d.gI("HP1").checked==true)
{d.gI("PATK").innerHTML=patk2;combatpatk=patk}
else if (d.gI("HP6").checked==true)
{d.gI("PATK").innerHTML=patk602;combatpatk=patk60}
else if (d.gI("HP3").checked==true)
{d.gI("PATK").innerHTML=patk302;combatpatk=patk30}

//M.Atk. calculation
var WpnMATK=WpnMATK+(weaponunderenchant*underMATK)+(weaponoverenchant*overMATK)
if (d.gI("WMM1C").checked==true||d.gI("WMM2C").checked==true||d.gI("WMM3C").checked==true)
	{MasteryMATK=WpnMATK*(INTMOD*INTMOD)*(LVLMOD*LVLMOD)*0.17*BuffMATK}
var matk=WpnMATK*(INTMOD*INTMOD)*(LVLMOD*LVLMOD)*NECKLACEMATK*BuffMATK+AddMATK+MasteryMATK
var matk2=Math.floor(matk)
d.gI("MATK").innerHTML=matk2
var combatmatk=matk

//P.Def. calculation
var Cloak=4
apdef=Cloak+Helmet+Upper+Lower+Glove+Boot+Und+ShieldSigil
pdef=apdef*LVLMOD*BuffPDEF+AddPDEF
pdef2=Math.floor(pdef)
pdef60=apdef*LVLMOD*BuffPDEF*BuffPDEF60+AddPDEF+AddPDEF60
pdef602=Math.floor(pdef60)
pdef30=apdef*LVLMOD*BuffPDEF*BuffPDEF60*BuffPDEF30+AddPDEF+AddPDEF60+AddPDEF30
pdef302=Math.floor(pdef30)
if (d.gI("HP1").checked==true)
{d.gI("PDEF").innerHTML=pdef2;shieldpdef=Shield*BuffSD+pdef+AddSHIELDPDEF;combatpdef=pdef}
else if (d.gI("HP6").checked==true)
{d.gI("PDEF").innerHTML=pdef602;shieldpdef=Shield*BuffSD+pdef60+AddSHIELDPDEF;combatpdef=pdef60}
else if (d.gI("HP3").checked==true)
{d.gI("PDEF").innerHTML=pdef302;shieldpdef=Shield*BuffSD+pdef30+AddSHIELDPDEF;combatpdef=pdef30}

//Shield P.Def. calculation
shieldpdef2=Math.floor(shieldpdef)
d.gI("SHDPDEF").innerHTML=shieldpdef2

//M.Def. calculation
jmdef=Ring1+Ring2+Earring1+Earring2+Necklace
mdef=jmdef*LVLMOD*MENMOD*BuffMDEF+AddMDEF
mdef2=Math.floor(mdef)
d.gI("MDEF").innerHTML=mdef2
mdef60=jmdef*LVLMOD*MENMOD*BuffMDEF*BuffMDEF60+AddMDEF+AddMDEF60
mdef602=Math.floor(mdef60)
mdef30=jmdef*LVLMOD*MENMOD*BuffMDEF*BuffMDEF60*BuffMDEF30+AddMDEF+AddMDEF60+AddMDEF30
mdef302=Math.floor(mdef30)
if (d.gI("HP1").checked==true)
{d.gI("MDEF").innerHTML=mdef2;shieldmdef=Shield*BuffSD+mdef+AddSHIELDPDEF;combatmdef=mdef}
else if (d.gI("HP6").checked==true)
{d.gI("MDEF").innerHTML=mdef602;shieldmdef=Shield*BuffSD+mdef60+AddSHIELDPDEF;combatmdef=mdef60}
else if (d.gI("HP3").checked==true)
{d.gI("MDEF").innerHTML=mdef302;shieldmdef=Shield*BuffSD+mdef30+AddSHIELDPDEF;combatmdef=mdef30}

//Shield M.Def. calculation
shieldmdef2=Math.floor(shieldmdef)
d.gI("SHDMDEF").innerHTML=shieldmdef2

//Accuracy Calculation
var Accuracy=(Math.sqrt(DEX)*6)+LVL+WpnAcc+RINGOFQUEENACC+RINGOFBAIUMACC+RINGOFCOREACC+OLYMPIADRINGACC+BuffACC
	if (LVL>69)
		{Accuracy=Accuracy+LVL-69}
	if (LVL>77)
		{Accuracy=Accuracy+LVL-77}
var Accuracy2=Math.floor(Accuracy)
var Accuracy60=Accuracy2+BuffACC60
var Accuracy602=Math.floor(Accuracy60)
var Accuracy30=Accuracy2+BuffACC30+BuffACC60
var Accuracy302=Math.floor(Accuracy30)
if (d.gI("HP1").checked==true)
{d.gI("ACCURACY").innerHTML=Accuracy2;combataccuracy=Accuracy}
else if (d.gI("HP6").checked==true)
{d.gI("ACCURACY").innerHTML=Accuracy602;combataccuracy=Accuracy60}
else if (d.gI("HP3").checked==true)
{d.gI("ACCURACY").innerHTML=Accuracy302;combataccuracy=Accuracy30}

//Evasion Calculation
var Evasion=(Math.sqrt(DEX)*6)+LVL+ShieldEvasion+BuffEVA
	if (LVL>69)
		{Evasion=Evasion+LVL-69}
	if (LVL>77)
		{Evasion=Evasion+LVL-77}
var Evasion2=Math.floor(Evasion)
var Evasion60=Evasion2+BuffEVA60
var Evasion602=Math.floor(Evasion60)
var Evasion30=Evasion2+BuffEVA30+BuffEVA60
var Evasion302=Math.floor(Evasion30)
if (d.gI("HP1").checked==true)
{d.gI("EVASION").innerHTML=Evasion2;combatevasion=Evasion+combatevasion}
else if (d.gI("HP6").checked==true)
{d.gI("EVASION").innerHTML=Evasion602;combatevasion=Evasion60+combatevasion}
else if (d.gI("HP3").checked==true)
{d.gI("EVASION").innerHTML=Evasion302;combatevasion=Evasion30+combatevasion}

//Critical calculation
var finalcritical=basecritical+AddCRIT+subcritical
if (finalcritical > 500)
	{finalcritical=500}
var finalcritical2=Math.floor(finalcritical)
var finalcritical60=basecritical+AddCRIT+subcritical+AddCRIT60
if (finalcritical60 > 500)
	{finalcritical60=500}
var finalcritical602=Math.floor(finalcritical60)
var finalcritical30=basecritical+AddCRIT+subcritical+AddCRIT60+AddCRIT30
if (finalcritical30 > 500)
	{finalcritical30=500}
var finalcritical302=Math.floor(finalcritical30)
if (d.gI("HP1").checked==true)
{d.gI("CRITICAL").innerHTML=finalcritical2;combatcritical=finalcritical}
else if (d.gI("HP6").checked==true)
{d.gI("CRITICAL").innerHTML=finalcritical602;combatcritical=finalcritical60}
else if (d.gI("HP3").checked==true)
{d.gI("CRITICAL").innerHTML=finalcritical302;combatcritical=finalcritical30}
var RACCsubcritical=basecritical*0.3
var RACCcombatcritical=combatcritical+(RACCsubcritical)
	if (RACCcombatcritical > 500)
		{RACCcombatcritical=500}

//Speed calculation
if (movemode==1)
{
var Speed=BaseWalk*DEXMOD*BuffSPEED+AddSPEED
var Speed2=Math.floor(Speed)
var Speed60=BaseWalk*DEXMOD*BuffSPEED*BuffSPEED60+AddSPEED+AddSPEED60
var Speed602=Math.floor(Speed60)
var Speed30=BaseWalk*DEXMOD*BuffSPEED*BuffSPEED60*BuffSPEED30+AddSPEED+AddSPEED60+AddSPEED30
var Speed302=Math.floor(Speed30)
}
else
{
var Speed=BaseRun*DEXMOD*BuffSPEED+AddSPEED
var Speed2=Math.floor(Speed)
var Speed60=BaseRun*DEXMOD*BuffSPEED*BuffSPEED60+AddSPEED+AddSPEED60
var Speed602=Math.floor(Speed60)
var Speed30=BaseRun*DEXMOD*BuffSPEED*BuffSPEED60*BuffSPEED30+AddSPEED+AddSPEED60+AddSPEED30
var Speed302=Math.floor(Speed30)
}
if (d.gI("HP1").checked==true)
	{d.gI("SPEED").innerHTML=Speed2;combatspeed=Speed}
else if (d.gI("HP6").checked==true)
	{d.gI("SPEED").innerHTML=Speed602;combatspeed=Speed60}
else if (d.gI("HP3").checked==true)
	{d.gI("SPEED").innerHTML=Speed302;combatspeed=Speed30}

//Atk. Spd. calculation
var atkspd=WpnSpd*DEXMOD*RINGOFBAIUMASPD*BuffASPD+AddASPD
if (atkspd>1500)
	{atkspd=1500}
var atkspd2=Math.floor(atkspd)
var atkspd60=WpnSpd*DEXMOD*RINGOFBAIUMASPD*BuffASPD*BuffASPD60+AddASPD
var atkspd602=Math.floor(atkspd60)
var atkspd30=WpnSpd*DEXMOD*RINGOFBAIUMASPD*BuffASPD*BuffASPD60*BuffASPD30+AddASPD
var atkspd302=Math.floor(atkspd30)
if (d.gI("HP1").checked==true)
	{d.gI("ATKSPD").innerHTML=atkspd2;combatatkspd=atkspd}
else if (d.gI("HP6").checked==true)
	{d.gI("ATKSPD").innerHTML=atkspd602;combatatkspd=atkspd60}
else if (d.gI("HP3").checked==true)
	{d.gI("ATKSPD").innerHTML=atkspd302;combatatkspd=atkspd30}

//Casting Spd. calculation
var castingspd=333*WITMOD*RINGOFBAIUMCAST*BuffCAST+AddCAST
var castingspd2=Math.floor(castingspd)
d.gI("CASTINGSPD").innerHTML=castingspd2

//Weight Limit
var weightlimit2=weightlimit*CONMOD
d.gI("WTL").innerHTML=Math.floor(weightlimit2)
var weight50=weightlimit2*0.5+weightpenalty
d.gI("WEIGHT50").innerHTML=Math.floor(weight50)

//HP Regen, CP Regen, MP Regen
var basehpregen
var basempregen
if (LVL>0 && LVL<11)
	{basehpregen=1.95+(LVL/20);basempregen=0.9;basecpregen=2}
if (LVL>10)
	{basehpregen=1.4+(LVL/10)}
if (LVL>10 && LVL<21)
	{basempregen=1.2;basecpregen=2.5}
if (LVL>20 && LVL<31)
	{basempregen=1.5;basecpregen=3.5}
if (LVL>30 && LVL<41)
	{basempregen=1.8;basecpregen=4.5}
if (LVL>40 && LVL<51)
	{basempregen=2.1;basecpregen=5.5}
if (LVL>50 && LVL<61)
	{basempregen=2.4;basecpregen=6.5}
if (LVL>60 && LVL<71)
	{basempregen=2.7;basecpregen=7.5}
if (LVL>70 && LVL<81)
	{basempregen=3;basecpregen=8.5}
if (LVL>80 && LVL<91)
	{basempregen=3;basecpregen=8.5}
var hpregen=(basehpregen*CONMOD*LVLMOD*BuffHPR*movemode+AddHPR)*BuffHPR2
var hpregen2=Math.floor(hpregen*10)/10
d.gI("HPREGEN").innerHTML=hpregen2
var cpregen=basecpregen*CONMOD*LVLMOD*BuffCPR*movemode+AddCPR
var cpregen2=Math.floor(cpregen*10)/10
d.gI("CPREGEN").innerHTML=cpregen2
var mpregen=(basempregen*MENMOD*LVLMOD*BuffMPR*movemode+AddMPR)*BuffMPR2+AddMPR2
var mpregen2=Math.floor(mpregen*10)/10
d.gI("MPREGEN").innerHTML=mpregen2

if (enemy==11)
	{d.gI("LVO").disabled=true
	var ELVL=LVL
	var ELVLMOD=LVLMOD
	var EDEXMOD=DEXMOD
	var targettype="player"
	var Eranddmg=randdmg
	var Eminranddmg=minranddmg
	var EWpnCrt=WpnCrt
	var Ebowdelay=bowdelay
	var Eweapongrade=weapongrade
	var Eweapon_sa=weapon_sa
	var EBuffCRITDMG=BuffCRITDMG*RINGOFBAIUMCRITDMG*RINGOFQUEENCRITDMG*OLYMPIADRINGCRITDMG
	var EAddCRITDMG=AddCRITDMG
	var Ecombatpatk=combatpatk*2
	if (((Eweapongrade=="S"||Eweapongrade=="A"||Eweapongrade=="S80") && Eweapon_sa!="no SA")||Eweapongrade=="H")
		{Ecombatpatk=Ecombatpatk*1.05}
	var Ecombatpdef=combatpdef
	var EAccuracy=Accuracy
	var EEvasion=Evasion
	var Ecombatcritical=combatcritical
	var Ecombatatkspd=combatatkspd
	var EWpnMAS=WpnMAS
	if (EWpnMAS=="Fist"||EWpnMAS=="Duals"||EWpnMAS=="DualD")
		{var Ecombatpatk=Ecombatpatk/2
		var Ecombatatkspd=Ecombatatkspd*2}
//Enemy Shield stats
	var EShield=Shield
	var EBuffSD=BuffSD
	var EAddSHIELDPDEF=AddSHIELDPDEF
	var Eshieldpdef=EShield*EBuffSD+Ecombatpdef+EAddSHIELDPDEF
	var Eblock360=block360
	var EBuffSBR=BuffSBR
	var EShieldBlockRate=BaseShieldBlockRate*EBuffSBR*EDEXMOD
	if ((position==2||position==3) && block360==false)
		{EShieldBlockRate=0}
	if (WpnMAS=="Bow")
		{EShieldBlockRate=EShieldBlockRate*3}
	if (EShieldBlockRate>=1)
		{EShieldBlockRate=1}
	var Eavgshieldpdef=Eshieldpdef*EShieldBlockRate+Ecombatpdef*(1-EShieldBlockRate)
//Enemy Reflect Damage
	var Ebuffrd=(BuffRD+FRINTEZZARD+VALAKASRD)
	if (WpnType=="Bow")
		{Ebuffrd=0}
	d.gI("EBUFFS").disabled=true}

////////////////////Damage Calculations
//Shield Block Rate
var ShieldBlockRate=BaseShieldBlockRate*DEXMOD*BuffSBR
if (EWpnType=="Bow"||EWpnType=="YumiBow")
	{ShieldBlockRate=ShieldBlockRate*3}
if ((position==4||position==5) && block360==false)
	{ShieldBlockRate=0}
if (ShieldBlockRate>=1)
	{ShieldBlockRate=1}
var shieldblockrate=Math.floor(ShieldBlockRate*100)+"%"
d.gI("SHDBLOCKRATE").innerHTML=shieldblockrate
var avgshieldpdef=shieldpdef*ShieldBlockRate+combatpdef*(1-ShieldBlockRate)
var avgshieldpdef2=Math.floor(avgshieldpdef)
d.gI("AVGSHIELDPDEF").innerHTML=avgshieldpdef2

if (d.gI("SS").checked==true)
	{combatpatk=combatpatk*2
	var sscost = + d.gI("SSC1").value}

if ((position==2||position==3) && Eblock360==false)
	{EShieldBlockRate=0}

//SA PVP Bonus
if (weapongrade=="A" && weapon_sa!="no SA" && targettype=="player")
	{combatpatk=combatpatk*1.025}
else if (weapongrade=="S" && weapon_sa!="no SA" && targettype=="player")
	{combatpatk=combatpatk*1.05}
else if (((weapon>=354 && weapon<=368)||weapon==446) && weapon_sa!="no SA" && targettype=="player")
	{combatpatk=combatpatk*1.075}
else if ((weapongrade=="S80"||weapongrade=="S84") && weapon_sa!="no SA" && targettype=="player")
	{combatpatk=combatpatk*1.1}
else if (weapongrade=="H" && targettype=="player")
	{combatpatk=combatpatk*1.1}

//Melee Damage Boost
if (Range=="SR" && WpnType!="Polearm")
	{combatpatk=combatpatk*1.1}
	
//Hits per second
if (WpnType=="Fist"||WpnMAS=="Duals"||WpnMAS=="DualD")
	{combatpatk=combatpatk/2
	combatatkspd=combatatkspd*2}
if (position>=1 && position <=3)
	{var hitspersecond=combatatkspd/500
		var bowdelay2
		if (WpnType=="Bow")
			{bowdelay2=(combatatkspd/1000)*(1500/bowdelay)}
		else if (WpnType=="YumiBow")
			{bowdelay2=(combatatkspd/1000)*(1500/(bowdelay*1.4166))}
		else if (WpnType=="Crossbow")
			{bowdelay2=(combatatkspd/1000)*(1500/bowdelay)}
		if (bowdelay2<hitspersecond) 
			{hitspersecond=bowdelay2}
		//Warrior Ability - Haste
		if (d.gI("WAHSC").checked==true && d.gI("WAHS").value==2 && Range=="SR")
			{var WAHSaspd=1.32;var WAHSduration=15;var WAHSchance=0.02
			var WAHScombatatkspd=combatatkspd*WAHSaspd
			//finds the average # of swings it takes to trigger the effect
			var WAHSavgswings=1/WAHSchance
			//finds the hps when the trigger is on
			var WAHShps=WAHScombatatkspd/500
				if (WAHShps>6 && (WpnMAS=="Fist"||WpnMAS=="Duals"||WpnMAS=="DualD"))
					{WAHShps=6}
				else if (WAHShps>3 && WpnMAS!="Fist" && WpnMAS!="Duals" && WpnMAS!="DualD")
					{WAHShps=3}
			//finds the # of extra hits over the duration
			var WAHSxhits=(WAHShps-hitspersecond)*15
			//average time to generate the trigger
			var WAHSavgswings2=WAHSavgswings/hitspersecond
			//total avg time per cycle
			var WAHScycle=WAHSavgswings2+WAHSduration
			//in 1 minute of swinging, the trigger happens this many times
			var WAHSpm=60/WAHScycle
			//so, for 1 second of swinging, this many extra swings occur
			var WAHSxhps=(WAHSpm/60)*WAHSxhits
			hitspersecond=hitspersecond+WAHSxhps}
	if (hitspersecond>6 && (WpnMAS=="Fist"||WpnMAS=="Duals"||WpnMAS=="DualD"))
		{hitspersecond=6}
	else if (hitspersecond>3 && WpnMAS!="Fist" && WpnMAS!="Duals" && WpnMAS!="DualD")
		{hitspersecond=3}
	var hitspersecond2=Math.floor(hitspersecond*100)/100
	d.gI("HITSPERSECOND").innerHTML=(hitspersecond2)}
else
	{var hitspersecond=0;var hitspersecond2=0;
	d.gI("HITSPERSECOND").innerHTML=("-")}
if ((position==1||position==4||position==5))
	{var Ehitspersecond=Ecombatatkspd/500
		if (EWpnType=="Bow")
			{Ehitspersecond=(Ecombatatkspd/1000)*(1500/Ebowdelay)}
		if (EWpnType=="YumiBow")
			{Ehitspersecond=(Ecombatatkspd/1000)*(1500/(Ebowdelay*1.4166))}
	var Ehitspersecond2=Math.floor(Ehitspersecond*100)/100
	d.gI("EHITSPERSECOND").innerHTML=(Ehitspersecond2)}
else
	{var Ehitspersecond=0;var Ehitspersecond2=0;
	d.gI("EHITSPERSECOND").innerHTML=("-")}
	//Knight Ability - Defense
	if (d.gI("KADEC").checked==true && d.gI("KADE").value==2)
		{
		//finds the average # of swings it takes to trigger the effect
		var KADEavgswings=1/KADEchance
		//finds the # of extra P.Def. over the duration
		var KADEpdef=(apdef*KADEpdef*LVLMOD*BuffPDEF+AddPDEF)-pdef
		var KADEmdef=(jmdef*KADEmdef*LVLMOD*MENMOD*BuffMDEF+AddMDEF)-mdef
		//average time to generate the trigger
		var KADEavgswings2=KADEavgswings/Ehitspersecond
		//total avg time per cycle
		var KADEcycle=KADEavgswings2+KADEduration
		//in 1 minute of swinging, the trigger happens this many times
		var KADEpm=60/KADEcycle
		//so, for 1 second of swinging, this much extra critical occurs
		var KADExpdef=(KADEpm*KADEduration*KADEpdef)/60
		var KADExmdef=(KADEpm*KADEduration*KADEmdef)/60
		combatpdef=(KADExpdef+combatpdef)
		}
	//Summoner Ability - Spirit
	if (d.gI("SASPC").checked==true && d.gI("SASP").value==2)
		{var SASPpwr=1.08;var SASPduration=15;var SASPchance=0.02
		var SASPcombatatkspd=combatatkspd*SASPpwr
		//finds the average # of swings it takes to trigger the effect
		var SASPavgswings=1/SASPchance
		//finds the hps when the trigger is on
		var SASPhps=SASPcombatatkspd/500
			if (SASPhps>6 && (WpnMAS=="Fist"||WpnMAS=="Duals"||WpnMAS=="DualD"))
				{SASPhps=6}
			else if (SASPhps>3 && WpnMAS!="Fist" && WpnMAS!="Duals" && WpnMAS!="DualD")
				{SASPhps=3}
		//finds the # of extra hits over the duration
		var SASPxhits=(SASPhps-hitspersecond)*15
		//finds the # of extra other stats over the duration
		var SASPpatk=(WpnPATK*STRMOD*LVLMOD*NECKLACEPATK*MasteryPATK*BuffPATK*SASPpwr+AddPATK)-patk
		var SASPmatk=(WpnMATK*(INTMOD*INTMOD)*(LVLMOD*LVLMOD)*NECKLACEMATK*BuffMATK*SASPpwr+AddMATK+MasteryMATK)-matk
		var SASPcastingspd=(333*WITMOD*RINGOFBAIUMCAST*BuffCAST*SASPpwr+AddCAST)-castingspd
		//average time to generate the trigger
		var SASPavgswings2=SASPavgswings/Ehitspersecond
		//total avg time per cycle
		var SASPcycle=SASPavgswings2+SASPduration
		//in 1 minute of swinging, the trigger happens this many times
		var SASPpm=60/SASPcycle
		//so, for 1 second of swinging, this many extra swings occur
		var SASPxpatk=(SASPpm*SASPduration*SASPpatk)/60
		combatpatk=combatpatk+SASPxpatk
		var SASPxmatk=(SASPpm*SASPduration*SASPmatk)/60
		combatmatk=combatmatk*SASPxmatk
		var SASPxcastingspd=(SASPpm*SASPduration*SASPcastingspd)/60
		var SASPxhps=(SASPpm/60)*SASPxhits
		hitspersecond=hitspersecond+SASPxhps
		}
	
//Base Damage
var basedmg=(combatpatk*70/Ecombatpdef)*BuffDAMAGE
var Ebasedmg=(Ecombatpatk*70/combatpdef)*EBuffDAMAGE

//Normal hit Min/Max Damage
if (position>=1 && position <=3)
	{var mindmg=(basedmg)*minranddmg
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
	{var Emindmg=(Ebasedmg)*minranddmg
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
if ((position==1 && ShieldBlockRate!=0)||((position==4||position==5) && block360==true && ShieldBlockRate!=0))
	{var Eshieldblockdmg=(Ecombatpatk*70/shieldpdef)*EBuffDAMAGE
	var Eshieldblockdmg2=Math.floor(Eshieldblockdmg)
	if (Eshieldblockdmg2==0) {Eshieldblockdmg2=1}}
else
	{var Eshieldblockdmg2=0;var Eshieldblockdmg=0}

//Shield Block Min/Max Damage
if ((position==1 && EShieldBlockRate!=0)||((position==2||position==3) && Eblock360==true && EShieldBlockRate!=0))
	{var shieldmindmg=(shieldblockdmg)*minranddmg
	var shieldmindmg2=Math.floor(shieldmindmg)
	if (shieldmindmg2==0) {shieldmindmg2=1}
	var shieldmaxdmg=(shieldblockdmg)*randdmg
	var shieldmaxdmg2=Math.floor(shieldmaxdmg)
	if (shieldmaxdmg2==0) {shieldmaxdmg2=1}
	d.gI("SHDDMGRNG").innerHTML=(shieldmindmg2+"-"+shieldmaxdmg2)}
else
	{var shieldmindmg2=0;var shieldmaxdmg2=0;var shieldmindmg=0;var shieldmaxdmg=0
	d.gI("SHDDMGRNG").innerHTML=("-")}


if ((position==1 && ShieldBlockRate!=0)||((position==4||position==5) && block360==true && ShieldBlockRate!=0))
	{var Eshieldmindmg=(Eshieldblockdmg)*minranddmg
	var Eshieldmindmg2=Math.floor(Eshieldmindmg)
	if (Eshieldmindmg2==0) {Eshieldmindmg2=1}
	var Eshieldmaxdmg=(Eshieldblockdmg)*randdmg
	var Eshieldmaxdmg2=Math.floor(Eshieldmaxdmg)
	if (Eshieldmaxdmg2==0) {Eshieldmaxdmg2=1}
	d.gI("ESHIELDDMGRNG").innerHTML=(Eshieldmindmg2+"-"+Eshieldmaxdmg2)}
else
	{var Eshieldmindmg2=0;var Eshieldmaxdmg2=0;var Eshieldmindmg=0;var Eshieldmaxdmg=0
	d.gI("ESHIELDDMGRNG").innerHTML=("-")}

//Critical Damage
if (position==2 && Range=="SR" && WpnType!="Polearm")
	{BuffCRITDMG=BuffCRITDMG*1.05}
else if (position==3 && Range=="SR" && WpnType!="Polearm")
	{BuffCRITDMG=BuffCRITDMG*1.2}
var critdmg=((basedmg/BuffDAMAGE)*2*BuffCRITDMG*RINGOFBAIUMCRITDMG*RINGOFQUEENCRITDMG*OLYMPIADRINGCRITDMG+(AddCRITDMG*70/Ecombatpdef))*BuffDAMAGE
var sbcritdmg=((shieldblockdmg/BuffDAMAGE)*2*BuffCRITDMG*RINGOFBAIUMCRITDMG*RINGOFQUEENCRITDMG*OLYMPIADRINGCRITDMG+(AddCRITDMG*70/Eshieldpdef))*BuffDAMAGE
if (position>=1 && position <=3)
	{var mincritdmg=critdmg*minranddmg
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
	{var minsbcritdmg=sbcritdmg*minranddmg
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
	var Emincritdmg=Ecritdmg*minranddmg
	var Emincritdmg2=Math.floor(Emincritdmg)
	if (Emincritdmg2==0) {Emincritdmg2=1}
	var Emaxcritdmg=Ecritdmg*randdmg
	var Emaxcritdmg2=Math.floor(Emaxcritdmg)
	if (Emaxcritdmg2==0) {Emaxcritdmg2=1}
	d.gI("ECRITDMG").innerHTML=(Emincritdmg2+"-"+Emaxcritdmg2)}
else
	{var Ecritdmg=0;var Emincritdmg=0;var Emincritdmg2=0;var Emaxcritdmg=0;var Emaxcritdmg2=0
	d.gI("ECRITDMG").innerHTML=("-")}
if ((position==1 && ShieldBlockRate!=0)||((position==4||position==5) && block360==true && ShieldBlockRate!=0))
	{var Esbcritdmg=Eshieldblockdmg*2*EBuffCRITDMG+(EAddCRITDMG*70/shieldpdef)
	var Eminsbcritdmg=Esbcritdmg*minranddmg
	var Eminsbcritdmg2=Math.floor(Eminsbcritdmg)
	if (Eminsbcritdmg2==0) {Eminsbcritdmg2=1}
	var Emaxsbcritdmg=Esbcritdmg*randdmg
	var Emaxsbcritdmg2=Math.floor(Emaxsbcritdmg)
	if (Emaxsbcritdmg2==0) {Emaxsbcritdmg2=1}
	d.gI("ESBCRITDMG").innerHTML=(Eminsbcritdmg2+"-"+Emaxsbcritdmg2)}
else
	{var Esbcritdmg=0;var Eminsbcritdmg=0;var Eminsbcritdmg2=0;var Emaxsbcritdmg=0;var Emaxsbcritdmg2=0
	d.gI("ESBCRITDMG").innerHTML=("-")}

//Critical hits
var POSMOD=1
if (position==2)
	{POSMOD=1.2}
else if (position==3)
	{POSMOD=1.4}
if (position==1||position==2||position==3)
	{var critchance=(combatcritical/10)*POSMOD*BuffCOMBATCRIT+AddCOMBATCRIT
	var RACCcritchance=(RACCcombatcritical/10)*POSMOD*BuffCOMBATCRIT+AddCOMBATCRIT
	if (critchance>=100)
		{critchance=100}
	if (RACCcritchance>=100)
		{RACCcritchance=100}}
else
	{var critchance2=0;var critchance=0;var RACCcritchance=0}
		//Rogue Ability - Critical Chance
		if (d.gI("RACCC").checked==true && d.gI("RACC").value==2)
			{
			//finds the average # of swings it takes to trigger the effect
			var RACCavgswings=1/RACCchance
			//finds the # of extra critical chance over the duration
			var RACCcritdiff=(RACCcritchance-critchance)
			//average time to generate the trigger
			var RACCavgswings2=RACCavgswings/hitspersecond
			//total avg time per cycle
			var RACCcycle=RACCavgswings2+RACCduration
			//in 1 minute of swinging, the trigger happens this many times
			var RACCpm=60/RACCcycle
			//in 1 minute, the avg amount of time affected
			var RACCspm=RACCpm*RACCduration
			//so, for 1 second of swinging, this much extra critical occurs
			var RACCxcrit=(RACCspm*RACCcritdiff)/60
			critchance=(RACCxcrit+critchance)
			}
	var critchance2=Math.floor(critchance*10)/10
	d.gI("CRITCHANCE").innerHTML=(critchance2+"%")
var EPOSMOD=1
if (position==4)
	{EPOSMOD=1.2}
else if (position==5)
	{EPOSMOD=1.4}
if (position==1||position==4||position==5)
	{var Ecritchance=(Ecombatcritical/10)*EPOSMOD*EBuffCOMBATCRIT+EAddCOMBATCRIT
	if (Ecritchance>=100)
		{Ecritchance=100}
	var Ecritchance2=Math.floor(Ecritchance*10)/10}
else
	{var Ecritchance2=0;var Ecritchance=0}
	d.gI("ECRITCHANCE").innerHTML=(Ecritchance2+"%")

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
if ((position==1||position==4||position==5))
	{var Eavgdmg=(Ebasedmg*(1-ShieldBlockRate)*(1-(Ecritchance/100))+Eshieldblockdmg*ShieldBlockRate*(1-(Ecritchance/100))+Ecritdmg*(1-ShieldBlockRate)*(Ecritchance/100)+Esbcritdmg*ShieldBlockRate*(Ecritchance/100))*Ehitspersecond*Ehitratio}
else
	{var Eavgdmg=0}

//Soulshot Efficiency
var weaponss=WEAPON[weapon][3]
if (WpnType=="Fist"||WpnMAS=="Duals"||WpnMAS=="DualD")
	{var sseff=sscost*weaponss*(hitspersecond/2)}
else
	{var sseff=sscost*weaponss*hitspersecond}
d.gI("SSC3").innerHTML=Math.floor(sseff)
if (WpnType=="Fist"||WpnMAS=="Duals"||WpnMAS=="DualD")
	{var sseff2=avgdmg/hitratio/sseff;
	var ssmiss=(hitratio-hitratio*hitratio)/2+1;
	sseff2=(sseff2/ssmiss)}
else
	{var sseff2=avgdmg/hitratio/sseff}
if (sseff2>20000)
	{d.gI("SSC5").innerHTML="-"}
else
	{d.gI("SSC5").innerHTML=Math.floor(sseff2*100)}

//Vampiric Rage
if (WpnMAS!="Bow")
	{var vr=avgdmg*(BuffVR+EARRINGOFANTHARASVR+EARRINGOFZAKENVR+OLYMPIADEARRINGVR)
	var vr2=Math.floor(vr*10)/10}
else
	{var vr2=0}
d.gI("VR").innerHTML=vr2

//Reflect Damage
var buffrd=(BuffRD+FRINTEZZARD+VALAKASRD)
if (EWpnType=="Bow"||EWpnType=="YumiBow")
	{buffrd=0}
var buffrd2=Math.floor(100*buffrd)
d.gI("RD").innerHTML=(buffrd2+"%")

var avgdmg2=(Eavgdmg*buffrd)+avgdmg
var avgdmg3=Math.floor(avgdmg2*10)/10
d.gI("AVGDMG").innerHTML=avgdmg3
var Eavgdmg2=(avgdmg*Ebuffrd)+Eavgdmg
	//Healer Ability - Heal
	if (d.gI("HAHLC").checked==true)
		{var HAHLduration=0;
		var HAHLeffect=150;
		var HAHLchance=0.02;
		//finds the average # of swings it takes to trigger the effect
		var HAHLavgswings=1/HAHLchance
		//average time to generate the trigger
		var HAHLavgswings2=HAHLavgswings/Ehitspersecond
		//total avg time per cycle
		var HAHLcycle=HAHLavgswings2+HAHLduration
		//in 1 minute of swinging, the trigger happens this many times
		var HAHLpm=60/HAHLcycle
		//so, for 1 second of swinging, this much extra critical occurs
		var HAHLxhp=(HAHLpm*HAHLeffect)/60
		Eavgdmg2=Eavgdmg2-HAHLxhp
		}

var Eavgdmg3=Math.floor(Eavgdmg2*10)/10
d.gI("EAVGDMG").innerHTML=Eavgdmg3

//Resurrection
if (trans=="DHEALER")
	{var resur=d.gI("RES5").value}
else if (trans=="HERETIC")
	{var resur=d.gI("RES6").value}
else if (JOB=="BI")
	{var resur=d.gI("RES2").value}
else if (JOB=="EE")
	{var resur=d.gI("RES3").value}
else
	{var resur=d.gI("RES4").value}
var baseres=RESURRECTION[resur]
var rescap=RESURRECTION[resur]+0.2
var resu=baseres*WITMOD
if (resu>rescap) {resu=rescap}
d.gI("RES11").innerHTML=Math.round(resu*100)+"%"
var mresur=d.gI("RES7").value
var basemres=MASSRES[mresur]
var mrescap=MASSRES[mresur]+0.2
var mresu=basemres*WITMOD
if (mresu>mrescap) {mresu=mrescap}
d.gI("RES12").innerHTML=Math.round(mresu*100)+"%"

//Heal Calc
var HTY=+d.gI("HLT").value
var HTYPE=(HEALTYPEARRAY[HTY])
var HSI=+d.gI(HTYPE).value
var HSLVL=0
	if (HTYPE=="BATTLEHEAL") {HPWR=HPWR+BATTLEHEAL[HSI];HSLVL=BATTLEHEALSLVL[HSI]}
	else if (HTYPE=="ANAKIMHEAL") {HPWR=HPWR+ANAKIMHEAL[HSI];HSLVL=ANAKIMHEALSLVL[HSI]}
	else if (HTYPE=="BENEDICTION") {HPWR=HPWR+BENEDICTION[HSI];HSLVL=BENEDICTIONSLVL[HSI]}
	else if (HTYPE=="DHBATTLE") {HPWR=HPWR+DHBATTLEHEAL[HSI];HSLVL=DHBATTLEHEALSLVL[HSI]}
	else if (HTYPE=="DHGROUP") {HPWR=HPWR+DHGROUPHEAL[HSI];HSLVL=DHGROUPHEALSLVL[HSI]}
	else if (HTYPE=="DHMAJOR") {HPWR=HPWR+DHMAJORHEAL[HSI];HSLVL=DHMAJORHEALSLVL[HSI]}
	else if (HTYPE=="DIVINEHEAL") {HPWR=HPWR+DIVINEHEAL[HSI];HSLVL=DIVINEHEALSLVL[HSI]}
	else if (HTYPE=="ELEMENTALHEAL") {HPWR=HPWR+ELEMENTALHEAL[HSI];HSLVL=ELEMENTALHEALSLVL[HSI]}
	else if (HTYPE=="GBATTLEHEAL") {HPWR=HPWR+GBATTLEHEAL[HSI];HSLVL=GBATTLEHEALSLVL[HSI]}
	else if (HTYPE=="GGROUPHEAL") {HPWR=HPWR+GGROUPHEAL[HSI];HSLVL=GGROUPHEALSLVL[HSI]}
	else if (HTYPE=="GHEAL") {HPWR=HPWR+GHEAL[HSI];HSLVL=GHEALSLVL[HSI]}
	else if (HTYPE=="GROUPHEAL") {HPWR=HPWR+GROUPHEAL[HSI];HSLVL=GROUPHEALSLVL[HSI]}
	else if (HTYPE=="HEAL") {HPWR=HPWR+HEAL[HSI];HSLVL=HEALSLVL[HSI]}
	else if (HTYPE=="HERETICBH") {HPWR=HPWR+HERETICBH[HSI];HSLVL=HERETICBHSLVL[HSI]}
	else if (HTYPE=="HERETICH") {HPWR=HPWR+HERETICH[HSI];HSLVL=HERETICHSLVL[HSI]}
	else if (HTYPE=="HOLYBLESSING") {HPWR=HPWR+HOLYBLESSING[HSI];HSLVL=HOLYBLESSINGSLVL[HSI]}
	else if (HTYPE=="LIGHTOFHEAL") {HPWR=HPWR+LIGHTOFHEAL[HSI];HSLVL=LIGHTOFHEALSLVL[HSI]}
	else if (HTYPE=="MHEAL") {HPWR=HPWR+MHEAL[HSI];HSLVL=MHEALSLVL[HSI]}
	else if (HTYPE=="SACRIFICE") {HPWR=HPWR+SACRIFICE[HSI];HSLVL=SACRIFICESLVL[HSI]}
	else if (HTYPE=="SELFHEAL") {HPWR=HPWR+SELFHEAL[HSI];HSLVL=SELFHEALSLVL[HSI]}
	else if (HTYPE=="VITALIZE") {HPWR=HPWR+VITALIZE[HSI];HSLVL=VITALIZESLVL[HSI]}
	else if (HTYPE=="MGROUPHEAL") {HPWR=HPWR+MGROUPHEAL[HSI];HSLVL=MGROUPHEALSLVL[HSI]}
var HMATKREQ=MATKREQHEALS[HSLVL]
var matktest=HMATKREQ-combatmatk
var spseffect=0
	if (d.gI("SPS").checked==true)
		{combatmatk=combatmatk*2
		spseffect=SPSEFFECT[HSLVL]*0.41
		if (matktest>0)
			{spseffect=spseffect-(matktest*0.48)
				if (spseffect<0) {spseffect=0}}
		d.gI("SPS").disabled=false;
		d.gI("BSPS").disabled=true;}
	else if (d.gI("BSPS").checked==true)
		{combatmatk=combatmatk*4
		spseffect=SPSEFFECT[HSLVL]
		if (matktest>0)
			{spseffect=spseffect-(matktest*0.48)
				if (spseffect<0) {spseffect=0}}
		d.gI("BSPS").disabled=false;
		d.gI("SPS").disabled=true;}
	else
		{d.gI("SPS").disabled=false;
		d.gI("BSPS").disabled=false;}
//Heal disable stuff that I'm too lazy to make a new function for:
	if (d.gI("HDRKC").checked==false)
		{d.gI("HDRK").disabled=true;}
	else
		{d.gI("HDRK").disabled=false;}
	if (d.gI("HCURSEC").checked==false)
		{d.gI("HCURSE").disabled=true;}
	else
		{d.gI("HCURSE").disabled=false;}
		
//Prayer
var hprayer=+d.gI("HPRAYER").value
var prayer=PRAYER[hprayer]
BuffHEAL=BuffHEAL*prayer
	if (d.gI("HANTHARAS").checked==true)
		{BuffHEAL=BuffHEAL*1.1}
	if (d.gI("HORFEN").checked==true)
		{BuffHEAL=BuffHEAL*1.06}
	if (d.gI("HZAKEN").checked==true)
		{BuffHEAL=BuffHEAL*1.1}
	if (d.gI("HDRKC").checked==true)
		{var bu=d.gI("HDRK").value;BuffHEAL=BuffHEAL*HEALARMOR[bu];AddHEAL=AddHEAL+HEALARMOR2[bu]}
	if (d.gI("HLIFE").checked==true)
		{BuffHEAL=BuffHEAL*1.3}
	if (d.gI("HANGEL").checked==true)
		{BuffHEAL=BuffHEAL*0.2}
	if (d.gI("HFLAME").checked==true)
		{BuffHEAL=BuffHEAL*0.2}
	if (d.gI("HSPIRIT").checked==true)
		{BuffHEAL=BuffHEAL*0.2}
	if (d.gI("TGTKM").checked==true)
		{BuffHEAL=BuffHEAL*0.95}
	if (d.gI("SNGPU").checked==true)
		{BuffHEAL=BuffHEAL*1.3}
	if (d.gI("HZEALOT").checked==true)
		{BuffHEAL=BuffHEAL*0.5}
	if (d.gI("HCRUSHER").checked==true)
		{BuffHEAL=BuffHEAL*0.7}
	if (d.gI("HCURSEC").checked==true)
		{var bu=d.gI("HCURSE").value;BuffHEAL=BuffHEAL*DISEASE[bu]}
	if (d.gI("HDEMON").checked==true)
		{BuffHEAL=BuffHEAL*0.5}
	if (d.gI("HDEATH").checked==true)
		{BuffHEAL=BuffHEAL*0.7}
	if (d.gI("HZERK").checked==true)
		{BuffHEAL=BuffHEAL*2}
	if (d.gI("HLRAB").checked==true)
		{BuffHEAL=BuffHEAL*1.06}
	if (d.gI("HPNX").checked==true)
		{BuffHEAL=BuffHEAL*1.3}
	if (d.gI("HEVA").checked==true)
		{BuffHEAL=BuffHEAL*1.3}
	if (d.gI("HDCUR").checked==true)
		{BuffHEAL=BuffHEAL*0.5}
var healpower=(((Math.sqrt(combatmatk))+HPWR+spseffect)*BuffHEAL)+AddHEAL
var healpower2=Math.floor(healpower)
d.gI("HEALAMOUNT").innerHTML=(healpower2)

//d.gI("TEST").innerHTML=(WpnPATK)
}