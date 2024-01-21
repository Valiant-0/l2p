function equipselect(stringtoparse)
/*
string format
elementid1=value1;elementid2=value2;...elementidx=valuex;
*/
{
	var todo =stringtoparse.split(";");
	for (var a=0;a<todo.length;a++) {
		try {
			var idvalue=todo[a].split("=");
			d.gI(idvalue[0]).selectedIndex=idvalue[1];}
		catch(E) {}
	}
}

function modifystyles(stringtoparse)
/*
string format
elementid1=value1;elementid2=value2;...elementidx=valuex;
*/
{
	var todo =stringtoparse.split(";");
	for (var a=0;a<todo.length;a++) {
		try {
			var idvalue=todo[a].split("=");
			d.gI(idvalue[0]).style.display=idvalue[1];}
		catch(E) {}
	}
}

function boxgoaway() {
//toggle display for fieldsets
	if (d.gI("COMBATC").checked==false)
		{d.gI("COMBAT").style.display='none'}
	else if (d.gI("COMBATC").checked==true)
		{d.gI("COMBAT").style.display='block'}
	if (d.gI("HEALCALCC").checked==false)
		{d.gI("HEALFIELD").style.display='none'}
	else if (d.gI("HEALCALCC").checked==true)
		{d.gI("HEALFIELD").style.display='block'}
	if (d.gI("EDEBUFFSC").checked==false)
		{d.gI("EDEBUFFS").style.display='none'}
	else if (d.gI("EDEBUFFSC").checked==true)
		{d.gI("EDEBUFFS").style.display='block'}
	if (d.gI("ITEMSC").checked==false)
		{d.gI("ITEMS").style.display='none'}
	else if (d.gI("ITEMSC").checked==true)
		{d.gI("ITEMS").style.display='block'}
	if (d.gI("PASSIVESC").checked==false)
		{d.gI("PASSIVES").style.display='none'}
	else if (d.gI("PASSIVESC").checked==true)
		{d.gI("PASSIVES").style.display='block'}
	if (d.gI("BUFFSC").checked==false)
		{d.gI("BUFFS").style.display='none'}
	else if (d.gI("BUFFSC").checked==true)
		{d.gI("BUFFS").style.display='block'}
	if (d.gI("TOGGLESC").checked==false)
		{d.gI("TOGGLES").style.display='none'}
	else if (d.gI("TOGGLESC").checked==true)
		{d.gI("TOGGLES").style.display='block'}
	if (d.gI("DEBUFFSC").checked==false)
		{d.gI("DEBUFFS").style.display='none'}
	else if (d.gI("DEBUFFSC").checked==true)
		{d.gI("DEBUFFS").style.display='block'}
	if (d.gI("AUGSC").checked==false)
		{d.gI("AUGS1").style.display='none'
		d.gI("AUGS2").style.display='none'
		d.gI("AUGS3").style.display='none'
		d.gI("AUGS4").style.display='none'
		d.gI("AUGS5").style.display='none'}
	else if (d.gI("AUGSC").checked==true)
		{d.gI("AUGS1").style.display='block'
		d.gI("AUGS2").style.display='block'
		d.gI("AUGS3").style.display='block'
		d.gI("AUGS4").style.display='block'
		d.gI("AUGS5").style.display='block'}
	if (d.gI("SS").checked==false)
		{d.gI("SSC1").style.display='none'
		d.gI("SSC2").style.display='none'
		d.gI("SSC3").style.display='none'
		d.gI("SSC4").style.display='none'
		d.gI("SSC5").style.display='none'
		d.gI("SSC6").style.display='none'}
	if (d.gI("SS").checked==true)
		{d.gI("SSC1").style.display='block'
		d.gI("SSC2").style.display='block'
		d.gI("SSC3").style.display='block'
		d.gI("SSC4").style.display='block'
		d.gI("SSC5").style.display='block'
		d.gI("SSC6").style.display='block'}
	if (d.gI("CLASSSPECIFICC").checked==false)
		{d.gI("CLASSSPECIFIC").style.display='none'}
	else if (d.gI("CLASSSPECIFICC").checked==true)
		{d.gI("CLASSSPECIFIC").style.display='block'}
	if (d.gI("CLANSKILLC").checked==false)
		{d.gI("CLANSKILL").style.display='none'}
	else if (d.gI("CLANSKILLC").checked==true)
		{d.gI("CLANSKILL").style.display='block'}
	if (d.gI("SUBCLASSC").checked==false)
		{d.gI("SUBCLASS").style.display='none'}
	else if (d.gI("SUBCLASSC").checked==true)
		{d.gI("SUBCLASS").style.display='block'}
	if (d.gI("RESIDENCEC").checked==false)
		{d.gI("RESIDENCE").style.display='none'}
	else if (d.gI("RESIDENCEC").checked==true)
		{d.gI("RESIDENCE").style.display='block'}
	if (d.gI("BASICBUFFSC").checked==false)
		{d.gI("basic1").style.display='none'}
	else if (d.gI("BASICBUFFSC").checked==true)
		{d.gI("basic1").style.display='block'}
	if (d.gI("SELFBUFFSC").checked==false)
		{d.gI("self1").style.display='none'}
	else if (d.gI("SELFBUFFSC").checked==true)
		{d.gI("self1").style.display='block'}
	if (d.gI("NONBASICC").checked==false)
		{d.gI("nonb1").style.display='none'}
	else if (d.gI("NONBASICC").checked==true)
		{d.gI("nonb1").style.display='block'}
	if (d.gI("SONGDANCEC").checked==false)
		{d.gI("song1").style.display='none'}
	else if (d.gI("SONGDANCEC").checked==true)
		{d.gI("song1").style.display='block'}
}

function equipmentgrade(setbonus,setjewelry)
{
//Set Bonus Auto-Select
var fullset=d.gI("FULLSET").value
if (setbonus && fullset=="Draconic")
	{equipselect("HLMG=2;UPRG=2;GLVG=2;BOOG=2;HLMS=1;UPRS=1;BOOS=1;GLVS=1");}
else if (setbonus && fullset=="Elegia_Hvy")
	{equipselect("SHDG=0;HLMG=0;UPRG=0;LWRG=0;GLVG=0;BOOG=0;SHD84=1;HLM84=2;UPR84=1;LWR84=1;BOO84=1;GLV84=1");}
else if (setbonus && fullset=="Elegia_Lgt")
	{equipselect("HLMG=0;UPRG=0;LWRG=0;GLVG=0;BOOG=0;HLM84=3;UPR84=2;LWR84=2;BOO84=2;GLV84=3");}
else if (setbonus && fullset=="Elegia_Rb")
	{equipselect("HLMG=0;UPRG=0;LWRG=0;GLVG=0;BOOG=0;HLM84=1;UPR84=3;LWR84=3;BOO84=3;GLV84=2");}
else if (setbonus && fullset=="Vesper_Hvy")
	{equipselect("SHDG=0;HLMG=0;UPRG=0;LWRG=0;GLVG=0;BOOG=0;SHD84=3;HLM84=6;UPR84=4;LWR84=4;BOO84=4;GLV84=4");}
else if (setbonus && fullset=="Vesper_Hvy_MW")
	{equipselect("SHDG=0;HLMG=0;UPRG=0;LWRG=0;GLVG=0;BOOG=0;SHD84=3;HLM84=7;UPR84=5;LWR84=5;BOO84=5;GLV84=5");}
else if (setbonus && fullset=="Vesper_Lgt")
	{equipselect("HLMG=0;UPRG=0;LWRG=0;GLVG=0;BOOG=0;HLM84=8;UPR84=6;LWR84=6;BOO84=6;GLV84=8");}
else if (setbonus && fullset=="Vesper_Lgt_MW")
	{equipselect("HLMG=0;UPRG=0;LWRG=0;GLVG=0;BOOG=0;HLM84=9;UPR84=7;LWR84=7;BOO84=7;GLV84=9");}
else if (setbonus && fullset=="Vesper_Rb")
	{equipselect("HLMG=0;UPRG=0;LWRG=0;GLVG=0;BOOG=0;HLM84=4;UPR84=14;LWR84=14;BOO84=14;GLV84=6");}
else if (setbonus && fullset=="Vesper_Rb_MW")
	{equipselect("HLMG=0;UPRG=0;LWRG=0;GLVG=0;BOOG=0;HLM84=5;UPR84=15;LWR84=15;BOO84=15;GLV84=7");}
else if (setbonus && fullset=="Vesper_Noble_Hvy")
	{equipselect("SHDG=0;HLMG=0;UPRG=0;LWRG=0;GLVG=0;BOOG=0;SHD84=3;HLM84=12;UPR84=8;LWR84=8;BOO84=8;GLV84=10");}
else if (setbonus && fullset=="Vesper_Noble_Hvy_MW")
	{equipselect("SHDG=0;HLMG=0;UPRG=0;LWRG=0;GLVG=0;BOOG=0;SHD84=3;HLM84=13;UPR84=9;LWR84=9;BOO84=9;GLV84=11");}
else if (setbonus && fullset=="Vesper_Noble_Lgt")
	{equipselect("HLMG=0;UPRG=0;LWRG=0;GLVG=0;BOOG=0;HLM84=14;UPR84=10;LWR84=10;BOO84=10;GLV84=14");}
else if (setbonus && fullset=="Vesper_Noble_Lgt_MW")
	{equipselect("HLMG=0;UPRG=0;LWRG=0;GLVG=0;BOOG=0;HLM84=15;UPR84=11;LWR84=11;BOO84=11;GLV84=15");}
else if (setbonus && fullset=="Vesper_Noble_Rb")
	{equipselect("HLMG=0;UPRG=0;LWRG=0;GLVG=0;BOOG=0;HLM84=10;UPR84=12;LWR84=12;BOO84=12;GLV84=12");}
else if (setbonus && fullset=="Vesper_Noble_Rb_MW")
	{equipselect("HLMG=0;UPRG=0;LWRG=0;GLVG=0;BOOG=0;HLM84=11;UPR84=13;LWR84=13;BOO84=13;GLV84=13");}
else if (setbonus && fullset=="Vorpal_Hvy")
	{equipselect("SHDG=0;HLMG=0;UPRG=0;LWRG=0;GLVG=0;BOOG=0;SHD84=5;HLM84=17;UPR84=16;LWR84=16;BOO84=16;GLV84=16");}
else if (setbonus && fullset=="Vorpal_Lgt")
	{equipselect("HLMG=0;UPRG=0;LWRG=0;GLVG=0;BOOG=0;HLM84=18;UPR84=17;LWR84=17;BOO84=17;GLV84=18");}
else if (setbonus && fullset=="Vorpal_Rb")
	{equipselect("HLMG=0;UPRG=0;LWRG=0;GLVG=0;BOOG=0;HLM84=16;UPR84=18;LWR84=18;BOO84=18;GLV84=17");}
else if (setbonus && fullset=="Moirai_Hvy")
	{equipselect("SHDG=1;HLMG=1;UPRG=1;LWRG=1;GLVG=1;BOOG=1;SHD80=1;HLM80=3;UPR80=1;LWR80=1;BOO80=1;GLV80=1");}
else if (setbonus && fullset=="Moirai_Hvy_MW")
	{equipselect("SHDG=1;HLMG=1;UPRG=1;LWRG=1;GLVG=1;BOOG=1;SHD80=1;HLM80=4;UPR80=2;LWR80=2;BOO80=2;GLV80=2");}
else if (setbonus && fullset=="Moirai_Lgt")
	{equipselect("HLMG=1;UPRG=1;LWRG=1;GLVG=1;BOOG=1;HLM80=5;UPR80=3;LWR80=3;BOO80=3;GLV80=5");}
else if (setbonus && fullset=="Moirai_Lgt_MW")
	{equipselect("HLMG=1;UPRG=1;LWRG=1;GLVG=1;BOOG=1;HLM80=6;UPR80=4;LWR80=4;BOO80=4;GLV80=6");}
else if (setbonus && fullset=="Moirai_Rb")
	{equipselect("HLMG=1;UPRG=1;LWRG=1;GLVG=1;BOOG=1;HLM80=1;UPR80=5;LWR80=5;BOO80=5;GLV80=3");}
else if (setbonus && fullset=="Moirai_Rb_MW")
	{equipselect("HLMG=1;UPRG=1;LWRG=1;GLVG=1;BOOG=1;HLM80=2;UPR80=6;LWR80=6;BOO80=6;GLV80=4");}
else if (setbonus && fullset=="Dynasty_Heavy")
	{equipselect("SHDG=2;HLMG=2;UPRG=2;LWRG=2;GLVG=2;BOOG=2;SHDS=2;HLMS=4;UPRS=2;LWRS=1;BOOS=2;GLVS=2");}
else if (setbonus && fullset=="Dynasty_Heavy2")
	{equipselect("SHDG=2;HLMG=2;UPRG=2;LWRG=2;GLVG=2;BOOG=2;SHDS=2;HLMS=4;UPRS=8;LWRS=1;BOOS=2;GLVS=2");}
else if (setbonus && fullset=="Dynasty_Heavy3")
	{equipselect("SHDG=2;HLMG=2;UPRG=2;LWRG=2;GLVG=2;BOOG=2;SHDS=3;HLMS=5;UPRS=3;LWRS=2;BOOS=3;GLVS=3");}
else if (setbonus && fullset=="Dynasty_Heavy4")
	{equipselect("SHDG=2;HLMG=2;UPRG=2;LWRG=2;GLVG=2;BOOG=2;SHDS=3;HLMS=5;UPRS=9;LWRS=2;BOOS=3;GLVS=3");}
else if (setbonus && fullset=="Dynasty_Light")
	{equipselect("HLMG=2;UPRG=2;LWRG=2;GLVG=2;BOOG=2;HLMS=6;UPRS=4;LWRS=3;BOOS=4;GLVS=6");}
else if (setbonus && fullset=="Dynasty_Light2")	
	{equipselect("HLMG=2;UPRG=2;LWRG=2;GLVG=2;BOOG=2;HLMS=6;UPRS=10;LWRS=3;BOOS=4;GLVS=6");}
else if (setbonus && fullset=="Dynasty_Light3")
	{equipselect("HLMG=2;UPRG=2;LWRG=2;GLVG=2;BOOG=2;HLMS=7;UPRS=5;LWRS=4;BOOS=5;GLVS=7");}
else if (setbonus && fullset=="Dynasty_Light4")	
	{equipselect("HLMG=2;UPRG=2;LWRG=2;GLVG=2;BOOG=2;HLMS=7;UPRS=11;LWRS=4;BOOS=5;GLVS=7");}
else if (setbonus && fullset=="Dynasty_Robe")
	{equipselect("HLMG=2;UPRG=2;LWRG=2;GLVG=2;BOOG=2;HLMS=2;UPRS=6;LWRS=5;BOOS=6;GLVS=4");}
else if (setbonus && fullset=="Dynasty_Robe2")
	{equipselect("HLMG=2;UPRG=2;LWRG=2;GLVG=2;BOOG=2;HLMS=2;UPRS=12;LWRS=5;BOOS=6;GLVS=4");}
else if (setbonus && fullset=="Dynasty_Robe3")
	{equipselect("HLMG=2;UPRG=2;LWRG=2;GLVG=2;BOOG=2;HLMS=3;UPRS=7;LWRS=6;BOOS=7;GLVS=5");}
else if (setbonus && fullset=="Dynasty_Robe4")
	{equipselect("HLMG=2;UPRG=2;LWRG=2;GLVG=2;BOOG=2;HLMS=3;UPRS=13;LWRS=6;BOOS=7;GLVS=5");}
else if (setbonus && fullset=="Imperial_Crusader")
	{equipselect("SHDG=2;HLMG=2;UPRG=2;LWRG=2;GLVG=2;BOOG=2;SHDS=5;HLMS=8;UPRS=14;LWRS=7;BOOS=8;GLVS=8");}
else if (setbonus && fullset=="Major_Arcana")
	{equipselect("HLMG=2;UPRG=2;GLVG=2;BOOG=2;HLMS=9;UPRS=15;BOOS=9;GLVS=9");}
else if (setbonus && fullset=="Apella_Heavy")
	{equipselect("HLMG=3;UPRG=3;GLVG=3;BOOG=3;HLMA=2;UPRA=3;BOOA=3;GLVA=1");}
else if (setbonus && fullset=="Apella_Light")
	{equipselect("HLMG=3;UPRG=3;GLVG=3;BOOG=3;HLMA=3;UPRA=1;BOOA=1;GLVA=2");}
else if (setbonus && fullset=="Apella_Robe")
	{equipselect("HLMG=3;UPRG=3;GLVG=3;BOOG=3;HLMA=1;UPRA=2;BOOA=2;GLVA=3");}
else if (setbonus && fullset=="Dark_Crystal_Heavy")
	{equipselect("SHDG=3;HLMG=3;UPRG=3;LWRG=3;GLVG=3;BOOG=3;SHDA=1;HLMA=4;UPRA=6;LWRA=1;BOOA=5;GLVA=4");}
else if (setbonus && fullset=="Dark_Crystal_Light")
	{equipselect("HLMG=3;UPRG=3;LWRG=3;GLVG=3;BOOG=3;HLMA=4;UPRA=5;LWRA=2;BOOA=5;GLVA=4");}
else if (setbonus && fullset=="Dark_Crystal_Robe")
	{equipselect("HLMG=3;UPRG=3;GLVG=3;BOOG=3;HLMA=4;UPRA=7;BOOA=5;GLVA=4");}
else if (setbonus && fullset=="Majestic_Heavy")
	{equipselect("HLMG=3;UPRG=3;GLVG=3;BOOG=3;HLMA=6;UPRA=9;BOOA=6;GLVA=6");}
else if (setbonus && fullset=="Majestic_Light")
	{equipselect("HLMG=3;UPRG=3;GLVG=3;BOOG=3;HLMA=6;UPRA=8;BOOA=6;GLVA=6");}
else if (setbonus && fullset=="Majestic_Robe")
	{equipselect("HLMG=3;UPRG=3;GLVG=3;BOOG=3;HLMA=6;UPRA=10;BOOA=6;GLVA=6");}
else if (setbonus && fullset=="Nightmare_Heavy")
	{equipselect("SHDG=3;HLMG=3;UPRG=3;GLVG=3;BOOG=3;SHDA=2;HLMA=5;UPRA=4;BOOA=4;GLVA=5");}
else if (setbonus && fullset=="Nightmare_Light")
	{equipselect("SHDG=3;HLMG=3;UPRG=3;GLVG=3;BOOG=3;SHDA=2;HLMA=5;UPRA=11;BOOA=4;GLVA=5");}
else if (setbonus && fullset=="Nightmare_Robe")
	{equipselect("SHDG=3;HLMG=3;UPRG=3;GLVG=3;BOOG=3;SHDA=2;HLMA=5;UPRA=12;BOOA=4;GLVA=5");}
else if (setbonus && fullset=="Tallum_Heavy")
	{equipselect("HLMG=3;UPRG=3;GLVG=3;BOOG=3;HLMA=7;UPRA=14;BOOA=7;GLVA=7");}
else if (setbonus && fullset=="Tallum_Light")
	{equipselect("HLMG=3;UPRG=3;GLVG=3;BOOG=3;HLMA=7;UPRA=13;BOOA=7;GLVA=7");}
else if (setbonus && fullset=="Tallum_Robe")
	{equipselect("HLMG=3;UPRG=3;LWRG=3;GLVG=3;BOOG=3;HLMA=7;UPRA=15;LWRA=3;BOOA=7;GLVA=7");}
else if (setbonus && fullset=="Avadon_Heavy")
	{equipselect("SHDG=4;HLMG=4;UPRG=4;LWRG=4;GLVG=4;BOOG=4;SHDB=1;HLMB=1;UPRB=1;LWRB=1;BOOB=1;GLVB=1");}
else if (setbonus && fullset=="Avadon_Light")
	{equipselect("HLMG=4;UPRG=4;GLVG=4;BOOG=4;HLMB=1;UPRB=2;BOOB=1;GLVB=1");}
else if (setbonus && fullset=="Avadon_Robe")
	{equipselect("HLMG=4;UPRG=4;GLVG=4;BOOG=4;HLMB=1;UPRB=3;BOOB=1;GLVB=1");}
else if (setbonus && fullset=="Blue_Wolf_Heavy")
	{equipselect("HLMG=4;UPRG=4;LWRG=4;GLVG=4;BOOG=4;HLMB=2;UPRB=4;LWRB=2;BOOB=2;GLVB=2");}
else if (setbonus && fullset=="Blue_Wolf_Light")
	{equipselect("HLMG=4;UPRG=4;GLVG=4;BOOG=4;HLMB=2;UPRB=5;BOOB=2;GLVB=2");}
else if (setbonus && fullset=="Blue_Wolf_Robe")
	{equipselect("HLMG=4;UPRG=4;LWRG=4;GLVG=4;BOOG=4;HLMB=2;UPRB=6;LWRB=3;BOOB=2;GLVB=2");}
else if (setbonus && fullset=="Doom_Heavy")
	{equipselect("SHDG=4;HLMG=4;UPRG=4;GLVG=4;BOOG=4;SHDB=2;HLMB=3;UPRB=7;BOOB=3;GLVB=3");}
else if (setbonus && fullset=="Doom_Light")
	{equipselect("HLMG=4;UPRG=4;GLVG=4;BOOG=4;HLMB=3;UPRB=8;BOOB=3;GLVB=3");}
else if (setbonus && fullset=="Doom_Robe")
	{equipselect("HLMG=4;UPRG=4;LWRG=4;GLVG=4;BOOG=4;HLMB=3;UPRB=9;LWRB=4;BOOB=3;GLVB=3");}
else if (setbonus && fullset=="Zubei_Heavy")
	{equipselect("SHDG=4;HLMG=4;UPRG=4;LWRG=4;GLVG=4;BOOG=4;SHDB=3;HLMB=4;UPRB=11;LWRB=6;BOOB=4;GLVB=4");}
else if (setbonus && fullset=="Zubei_Light")
	{equipselect("HLMG=4;UPRG=4;LWRG=4;GLVG=4;BOOG=4;HLMB=4;UPRB=12;LWRB=7;BOOB=4;GLVB=4");}
else if (setbonus && fullset=="Zubei_Robe")
	{equipselect("HLMG=4;UPRG=4;LWRG=4;GLVG=4;BOOG=4;HLMB=4;UPRB=10;LWRB=5;BOOB=4;GLVB=4");}
else if (setbonus && fullset=="Chain_Mail")
	{equipselect("SHDG=5;HLMG=5;UPRG=5;LWRG=5;SHDC=1;HLMC=1;UPRC=1;LWRC=1");}
else if (setbonus && fullset=="Composite")
	{equipselect("SHDG=5;HLMG=5;UPRG=5;SHDC=2;HLMC=2;UPRC=2");}
else if (setbonus && fullset=="Full_Plate")
	{equipselect("SHDG=5;HLMG=5;UPRG=5;SHDC=5;HLMC=3;UPRC=7");}
else if (setbonus && fullset=="Mithril_Light")
	{equipselect("UPRG=5;LWRG=5;BOOG=5;UPRC=9;LWRC=8;BOOC=11");}
else if (setbonus && fullset=="Plated_Leather")
	{equipselect("UPRG=5;LWRG=5;BOOG=5;UPRC=10;LWRC=6;BOOC=12");}
else if (setbonus && fullset=="Theca")
	{equipselect("UPRG=5;LWRG=5;BOOG=5;UPRC=13;LWRC=9;BOOC=14");}
else if (setbonus && fullset=="Drake")
	{equipselect("UPRG=5;BOOG=5;UPRC=5;BOOC=7");}
else if (setbonus && fullset=="Karmian")
	{equipselect("UPRG=5;LWRG=5;GLVG=5;UPRC=8;LWRC=5;GLVC=8");}
else if (setbonus && fullset=="Demon")
	{equipselect("UPRG=5;LWRG=5;GLVG=5;UPRC=3;LWRC=2;GLVC=2");}
else if (setbonus && fullset=="Divine")
	{equipselect("UPRG=5;LWRG=5;GLVG=5;UPRC=4;LWRC=3;GLVC=3");}
else if (setbonus && fullset=="CL_Oath_Heavy")
	{equipselect("HLMG=6;UPRG=6;BOOG=6;GLVG=6;HLMD=5;UPRD=5;BOOD=7;GLVD=2");}
else if (setbonus && fullset=="CL_Oath_Light")
	{equipselect("HLMG=6;UPRG=6;BOOG=6;GLVG=6;HLMD=6;UPRD=4;BOOD=6;GLVD=3");}
else if (setbonus && fullset=="CL_Oath_Robe")
	{equipselect("HLMG=6;UPRG=6;BOOG=6;GLVG=6;HLMD=4;UPRD=3;BOOD=8;GLVD=4");}
else if (setbonus && fullset=="Mithril_Heavy")
	{equipselect("SHDG=6;HLMG=6;UPRG=6;LWRG=6;SHDD=4;HLMD=7;UPRD=14;LWRD=11");}
else if (setbonus && fullset=="Brigandine")
	{equipselect("SHDG=6;HLMG=6;UPRG=6;LWRG=6;SHDD=2;HLMD=2;UPRD=2;LWRD=1");}
else if (setbonus && fullset=="Reinforced_Leather")
	{equipselect("UPRG=6;LWRG=6;BOOG=6;UPRD=18;LWRD=17;BOOD=14");}
else if (setbonus && fullset=="Manticore")
	{equipselect("UPRG=6;LWRG=6;BOOG=6;UPRD=12;LWRD=9;BOOD=12");}
else if (setbonus && fullset=="Knowledge")
	{equipselect("UPRG=6;LWRG=6;GLVG=6;UPRD=23;LWRD=19;GLVD=8");}
else if (setbonus && fullset=="Elven_Mithril")
	{equipselect("UPRG=6;LWRG=6;GLVG=6;UPRD=15;LWRD=13;GLVD=5");}
else if (setbonus && fullset=="Devotion")
	{equipselect("HLMG=7;UPRG=7;LWRG=7;HLMN=4;UPRN=14;LWRN=14");}
else if (setbonus && fullset=="Wooden")
	{equipselect("HLMG=7;UPRG=7;LWRG=7;HLMN=5;UPRN=16;LWRN=16");}
var fullmdef=d.gI("FULLMDEF").value
if (setjewelry && fullmdef=="Unsealed_Tateossian")
	{equipselect("NCKG=2;EAR1G=2;EAR2G=2;RNG1G=2;RNG2G=2;NCKS=4;EAR1S=4;EAR2S=4;RNG1S=4;RNG2S=4");}
else if (setjewelry && fullmdef=="Frintezza")
	{equipselect("NCKG=3;NCKA=1");}
else if (setjewelry && fullmdef=="Ant_Queen")
	{equipselect("RNG2G=4;RNG2B=4");}
else if (setjewelry && fullmdef=="Zaken")
	{equipselect("EAR2G=2;EAR2S=5;");}
else if (setjewelry && fullmdef=="Baium")
	{equipselect("RNG1G=2;RNG1S=2");}
else if (setjewelry && fullmdef=="Antharas")
	{equipselect("EAR1G=2;EAR1S=2;");}
else if (setjewelry && fullmdef=="Orfen")
	{equipselect("EAR1G=3;EAR1A=1;");}
else if (setjewelry && fullmdef=="Valakas")
	{equipselect("NCKG=2;NCKS=2");}
else if (setjewelry && fullmdef=="Core")
	{equipselect("RNG1G=3;RNG1A=4");}
else if (setjewelry && fullmdef=="Elegia")
	{equipselect("NCKG=0;EAR1G=0;EAR2G=0;RNG1G=0;RNG2G=0;NCK84=1;EAR184=1;EAR284=1;RNG184=1;RNG284=1");}
else if (setjewelry && fullmdef=="Vorpal")
	{equipselect("NCKG=0;EAR1G=0;EAR2G=0;RNG1G=0;RNG2G=0;NCK84=3;EAR184=3;EAR284=3;RNG184=3;RNG284=3");}
else if (setjewelry && fullmdef=="Vesper")
	{equipselect("NCKG=0;EAR1G=0;EAR2G=0;RNG1G=0;RNG2G=0;NCK84=2;EAR184=2;EAR284=2;RNG184=2;RNG284=2");}
else if (setjewelry && fullmdef=="Moirai")
	{equipselect("NCKG=1;EAR1G=1;EAR2G=1;RNG1G=1;RNG2G=1;NCK80=1;EAR180=1;EAR280=1;RNG180=1;RNG280=1");}
else if (setjewelry && fullmdef=="Dynasty")
	{equipselect("NCKG=2;EAR1G=2;EAR2G=2;RNG1G=2;RNG2G=2;NCKS=1;EAR1S=1;EAR2S=1;RNG1S=1;RNG2S=1");}
else if (setjewelry && fullmdef=="Unsealed_Majestic")
	{equipselect("NCKG=3;EAR1G=3;EAR2G=3;RNG1G=3;RNG2G=3;NCKA=2;EAR1A=2;EAR2A=2;RNG1A=1;RNG2A=1");}
else if (setjewelry && fullmdef=="Black_Ore")
	{equipselect("NCKG=4;EAR1G=4;EAR2G=4;RNG1G=4;RNG2G=4;NCKB=2;EAR1B=2;EAR2B=2;RNG1B=2;RNG2B=2");}
else if (setjewelry && fullmdef=="Top_C")
	{equipselect("NCKG=5;EAR1G=5;EAR2G=5;RNG1G=5;RNG2G=5;NCKC=2;EAR1C=4;EAR2C=4;RNG1C=3;RNG2C=3");}
else if (setjewelry && fullmdef=="Top_Lux")
	{equipselect("NCKG=5;EAR1G=5;EAR2G=5;RNG1G=5;RNG2G=5;NCKC=3;EAR1C=1;EAR2C=1;RNG1C=2;RNG2C=2");}
else if (setjewelry && fullmdef=="Top_D")
	{equipselect("NCKG=6;EAR1G=6;EAR2G=6;RNG1G=6;RNG2G=6;NCKD=4;EAR1D=3;EAR2D=3;RNG1D=4;RNG2D=4");}
else if (setjewelry && fullmdef=="Elven")
	{equipselect("NCKG=6;EAR1G=6;EAR2G=6;RNG1G=6;RNG2G=6;NCKD=1;EAR1D=1;EAR2D=1;RNG1D=2;RNG2D=2");}
else if (setjewelry && fullmdef=="Top_Non")
	{equipselect("NCKG=7;EAR1G=7;EAR2G=7;RNG1G=7;RNG2G=7;NCKN=1;EAR1N=3;EAR2N=3;RNG1N=1;RNG2N=1");}

//Weapon hide/unhide stuff
var weapongrade=d.gI("WPNG").value
weapongrade=GRADE[weapongrade]
if (weapongrade=="S")
	{modifystyles("WPN84=none;WPN80=none;WPNS=block;WPNA=none;WPNB=none;WPNC=none;WPNH=none;WPND=none;WPNN=none")}
else if (weapongrade=="A")
	{modifystyles("WPN84=none;WPN80=none;WPNS=none;WPNA=block;WPNB=none;WPNC=none;WPNH=none;WPND=none;WPNN=none")}
else if (weapongrade=="B")
	{modifystyles("WPN84=none;WPN80=none;WPNS=none;WPNA=none;WPNB=block;WPNC=none;WPNH=none;WPND=none;WPNN=none")}
else if (weapongrade=="C")
	{modifystyles("WPN84=none;WPN80=none;WPNS=none;WPNA=none;WPNB=none;WPNC=block;WPNH=none;WPND=none;WPNN=none")}
else if (weapongrade=="D")
	{modifystyles("WPN84=none;WPN80=none;WPNS=none;WPNA=none;WPNB=none;WPNC=none;WPNH=none;WPND=block;WPNN=none")}
else if (weapongrade=="N")
	{modifystyles("WPN84=none;WPN80=none;WPNS=none;WPNA=none;WPNB=none;WPNC=none;WPNH=none;WPND=none;WPNN=block")}
else if (weapongrade=="H")
	{modifystyles("WPN84=none;WPN80=none;WPNS=none;WPNA=none;WPNB=none;WPNC=none;WPNH=block;WPND=none;WPNN=none")}
else if (weapongrade=="S80")
	{modifystyles("WPN84=none;WPN80=block;WPNS=none;WPNA=none;WPNB=none;WPNC=none;WPNH=none;WPND=none;WPNN=none")}
else if (weapongrade=="S84")
	{modifystyles("WPN84=block;WPN80=none;WPNS=none;WPNA=none;WPNB=none;WPNC=none;WPNH=none;WPND=none;WPNN=none")}

if (weapongrade=="S"||weapongrade=="S80"||weapongrade=="S84"||weapongrade=="A")
	{d.gI("WPVPC").disabled=true;}
else
	{d.gI("WPVPC").disabled=true;
	d.gI("WPVPC").checked=false;}

//Shield hide/unhide stuff
var shieldgrade=d.gI("SHDG").value
shieldgrade=GRADE[shieldgrade]
if (shieldgrade=="S")
	{modifystyles("SHD84=none;SHD80=none;SHDS=block;SHDA=none;SHDB=none;SHDC=none;SHDD=none;SHDN=none")}
else if (shieldgrade=="A")
	{modifystyles("SHD84=none;SHD80=none;SHDS=none;SHDA=block;SHDB=none;SHDC=none;SHDD=none;SHDN=none")}
else if (shieldgrade=="B")
	{modifystyles("SHD84=none;SHD80=none;SHDS=none;SHDA=none;SHDB=block;SHDC=none;SHDD=none;SHDN=none")}
else if (shieldgrade=="C")
	{modifystyles("SHD84=none;SHD80=none;SHDS=none;SHDA=none;SHDB=none;SHDC=block;SHDD=none;SHDN=none")}
else if (shieldgrade=="D")
	{modifystyles("SHD84=none;SHD80=none;SHDS=none;SHDA=none;SHDB=none;SHDC=none;SHDD=block;SHDN=none")}
else if (shieldgrade=="N")
	{modifystyles("SHD84=none;SHD80=none;SHDS=none;SHDA=none;SHDB=none;SHDC=none;SHDD=none;SHDN=block")}
else if (shieldgrade=="S80")
	{modifystyles("SHD84=none;SHD80=block;SHDS=none;SHDA=none;SHDB=none;SHDC=none;SHDD=none;SHDN=none")}
else if (shieldgrade=="S84")
	{modifystyles("SHD84=block;SHD80=none;SHDS=none;SHDA=none;SHDB=none;SHDC=none;SHDD=none;SHDN=none")}

//Helmet hide/unhide stuff
var helmetgrade=d.gI("HLMG").value
helmetgrade=GRADE[helmetgrade]
if (helmetgrade=="S")
	{modifystyles("HLM84=none;HLM80=none;HLMS=block;HLMA=none;HLMB=none;HLMC=none;HLMD=none;HLMN=none")}
else if (helmetgrade=="A")
	{modifystyles("HLM84=none;HLM80=none;HLMS=none;HLMA=block;HLMB=none;HLMC=none;HLMD=none;HLMN=none")}
else if (helmetgrade=="B")
	{modifystyles("HLM84=none;HLM80=none;HLMS=none;HLMA=none;HLMB=block;HLMC=none;HLMD=none;HLMN=none")}
else if (helmetgrade=="C")
	{modifystyles("HLM84=none;HLM80=none;HLMS=none;HLMA=none;HLMB=none;HLMC=block;HLMD=none;HLMN=none")}
else if (helmetgrade=="D")
	{modifystyles("HLM84=none;HLM80=none;HLMS=none;HLMA=none;HLMB=none;HLMC=none;HLMD=block;HLMN=none")}
else if (helmetgrade=="N")
	{modifystyles("HLM84=none;HLM80=none;HLMS=none;HLMA=none;HLMB=none;HLMC=none;HLMD=none;HLMN=block")}
else if (helmetgrade=="S80")
	{modifystyles("HLM84=none;HLM80=block;HLMS=none;HLMA=none;HLMB=none;HLMC=none;HLMD=none;HLMN=none")}
else if (helmetgrade=="S84")
	{modifystyles("HLM84=block;HLM80=none;HLMS=none;HLMA=none;HLMB=none;HLMC=none;HLMD=none;HLMN=none")}

//Body (Lower) hide/unhide stuff
var lowergrade=d.gI("LWRG").value
lowergrade=GRADE[lowergrade]
if (lowergrade=="S")
	{modifystyles("LWR84=none;LWR80=none;LWRS=block;LWRA=none;LWRB=none;LWRC=none;LWRD=none;LWRN=none")}
else if (lowergrade=="A")
	{modifystyles("LWR84=none;LWR80=none;LWRS=none;LWRA=block;LWRB=none;LWRC=none;LWRD=none;LWRN=none")}
else if (lowergrade=="B")
	{modifystyles("LWR84=none;LWR80=none;LWRS=none;LWRA=none;LWRB=block;LWRC=none;LWRD=none;LWRN=none")}
else if (lowergrade=="C")
	{modifystyles("LWR84=none;LWR80=none;LWRS=none;LWRA=none;LWRB=none;LWRC=block;LWRD=none;LWRN=none")}
else if (lowergrade=="D")
	{modifystyles("LWR84=none;LWR80=none;LWRS=none;LWRA=none;LWRB=none;LWRC=none;LWRD=block;LWRN=none")}
else if (lowergrade=="N")
	{modifystyles("LWR84=none;LWR80=none;LWRS=none;LWRA=none;LWRB=none;LWRC=none;LWRD=none;LWRN=block")}
else if (lowergrade=="S80")
	{modifystyles("LWR84=none;LWR80=block;LWRS=none;LWRA=none;LWRB=none;LWRC=none;LWRD=none;LWRN=none")}
else if (lowergrade=="S84")
	{modifystyles("LWR84=block;LWR80=none;LWRS=none;LWRA=none;LWRB=none;LWRC=none;LWRD=none;LWRN=none")}

//Body (Upper) hide/unhide stuff
var uppergrade=d.gI("UPRG").value
uppergrade=GRADE[uppergrade]
if (uppergrade=="S")
	{modifystyles("UPR84=none;UPR80=none;UPRS=block;UPRA=none;UPRB=none;UPRC=none;UPRD=none;UPRN=none")}
else if (uppergrade=="A")
	{modifystyles("UPR84=none;UPR80=none;UPRS=none;UPRA=block;UPRB=none;UPRC=none;UPRD=none;UPRN=none")}
else if (uppergrade=="B")
	{modifystyles("UPR84=none;UPR80=none;UPRS=none;UPRA=none;UPRB=block;UPRC=none;UPRD=none;UPRN=none")}
else if (uppergrade=="C")
	{modifystyles("UPR84=none;UPR80=none;UPRS=none;UPRA=none;UPRB=none;UPRC=block;UPRD=none;UPRN=none")}
else if (uppergrade=="D")
	{modifystyles("UPR84=none;UPR80=none;UPRS=none;UPRA=none;UPRB=none;UPRC=none;UPRD=block;UPRN=none")}
else if (uppergrade=="N")
	{modifystyles("UPR84=none;UPR80=none;UPRS=none;UPRA=none;UPRB=none;UPRC=none;UPRD=none;UPRN=block")}
else if (uppergrade=="S80")
	{modifystyles("UPR84=none;UPR80=block;UPRS=none;UPRA=none;UPRB=none;UPRC=none;UPRD=none;UPRN=none")}
else if (uppergrade=="S84")
	{modifystyles("UPR84=block;UPR80=none;UPRS=none;UPRA=none;UPRB=none;UPRC=none;UPRD=none;UPRN=none")}

//Glove hide/unhide stuff
var glovegrade=d.gI("GLVG").value
glovegrade=GRADE[glovegrade]
if (glovegrade=="S")
	{modifystyles("GLV84=none;GLV80=none;GLVS=block;GLVA=none;GLVB=none;GLVC=none;GLVD=none;GLVN=none")}
else if (glovegrade=="A")
	{modifystyles("GLV84=none;GLV80=none;GLVS=none;GLVA=block;GLVB=none;GLVC=none;GLVD=none;GLVN=none")}
else if (glovegrade=="B")
	{modifystyles("GLV84=none;GLV80=none;GLVS=none;GLVA=none;GLVB=block;GLVC=none;GLVD=none;GLVN=none")}
else if (glovegrade=="C")
	{modifystyles("GLV84=none;GLV80=none;GLVS=none;GLVA=none;GLVB=none;GLVC=block;GLVD=none;GLVN=none")}
else if (glovegrade=="D")
	{modifystyles("GLV84=none;GLV80=none;GLVS=none;GLVA=none;GLVB=none;GLVC=none;GLVD=block;GLVN=none")}
else if (glovegrade=="N")
	{modifystyles("GLV84=none;GLV80=none;GLVS=none;GLVA=none;GLVB=none;GLVC=none;GLVD=none;GLVN=block")}
else if (glovegrade=="S80")
	{modifystyles("GLV84=none;GLV80=block;GLVS=none;GLVA=none;GLVB=none;GLVC=none;GLVD=none;GLVN=none")}
else if (glovegrade=="S84")
	{modifystyles("GLV84=block;GLV80=none;GLVS=none;GLVA=none;GLVB=none;GLVC=none;GLVD=none;GLVN=none")}

//Boot hide/unhide stuff
var bootgrade=d.gI("BOOG").value
bootgrade=GRADE[bootgrade]
if (bootgrade=="S")
	{modifystyles("BOO84=none;BOO80=none;BOOS=block;BOOA=none;BOOB=none;BOOC=none;BOOD=none;BOON=none")}
else if (bootgrade=="A")
	{modifystyles("BOO84=none;BOO80=none;BOOS=none;BOOA=block;BOOB=none;BOOC=none;BOOD=none;BOON=none")}
else if (bootgrade=="B")
	{modifystyles("BOO84=none;BOO80=none;BOOS=none;BOOA=none;BOOB=block;BOOC=none;BOOD=none;BOON=none")}
else if (bootgrade=="C")
	{modifystyles("BOO84=none;BOO80=none;BOOS=none;BOOA=none;BOOB=none;BOOC=block;BOOD=none;BOON=none")}
else if (bootgrade=="D")
	{modifystyles("BOO84=none;BOO80=none;BOOS=none;BOOA=none;BOOB=none;BOOC=none;BOOD=block;BOON=none")}
else if (bootgrade=="N")
	{modifystyles("BOO84=none;BOO80=none;BOOS=none;BOOA=none;BOOB=none;BOOC=none;BOOD=none;BOON=block")}
else if (bootgrade=="S80")
	{modifystyles("BOO84=none;BOO80=block;BOOS=none;BOOA=none;BOOB=none;BOOC=none;BOOD=none;BOON=none")}
else if (bootgrade=="S84")
	{modifystyles("BOO84=block;BOO80=none;BOOS=none;BOOA=none;BOOB=none;BOOC=none;BOOD=none;BOON=none")}
	
//Underwear hide/unhide stuff
var undgrade=d.gI("UNDG").value
undgrade=GRADE[undgrade]
if (undgrade=="S")
	{modifystyles("UND84=none;UND80=none;UNDS=block;UNDA=none;UNDB=none;UNDC=none;UNDD=none;UNDN=none")}
else if (undgrade=="A")
	{modifystyles("UND84=none;UND80=none;UNDS=none;UNDA=block;UNDB=none;UNDC=none;UNDD=none;UNDN=none")}
else if (undgrade=="B")
	{modifystyles("UND84=none;UND80=none;UNDS=none;UNDA=none;UNDB=block;UNDC=none;UNDD=none;UNDN=none")}
else if (undgrade=="C")
	{modifystyles("UND84=none;UND80=none;UNDS=none;UNDA=none;UNDB=none;UNDC=block;UNDD=none;UNDN=none")}
else if (undgrade=="D")
	{modifystyles("UND84=none;UND80=none;UNDS=none;UNDA=none;UNDB=none;UNDC=none;UNDD=block;UNDN=none")}
else if (undgrade=="N")
	{modifystyles("UND84=none;UND80=none;UNDS=none;UNDA=none;UNDB=none;UNDC=none;UNDD=none;UNDN=block")}
else if (undgrade=="S80")
	{modifystyles("UND84=none;UND80=block;UNDS=none;UNDA=none;UNDB=none;UNDC=none;UNDD=none;UNDN=none")}
else if (undgrade=="S84")
	{modifystyles("UND84=block;UND80=none;UNDS=none;UNDA=none;UNDB=none;UNDC=none;UNDD=none;UNDN=none")}

//Necklace hide/unhide stuff
var necklacegrade=d.gI("NCKG").value
necklacegrade=GRADE[necklacegrade]
if (necklacegrade=="S")
	{modifystyles("NCK84=none;NCK80=none;NCKS=block;NCKA=none;NCKB=none;NCKC=none;NCKD=none;NCKN=none")}
else if (necklacegrade=="A")
	{modifystyles("NCK84=none;NCK80=none;NCKS=none;NCKA=block;NCKB=none;NCKC=none;NCKD=none;NCKN=none")}
else if (necklacegrade=="B")
	{modifystyles("NCK84=none;NCK80=none;NCKS=none;NCKA=none;NCKB=block;NCKC=none;NCKD=none;NCKN=none")}
else if (necklacegrade=="C")
	{modifystyles("NCK84=none;NCK80=none;NCKS=none;NCKA=none;NCKB=none;NCKC=block;NCKD=none;NCKN=none")}
else if (necklacegrade=="D")
	{modifystyles("NCK84=none;NCK80=none;NCKS=none;NCKA=none;NCKB=none;NCKC=none;NCKD=block;NCKN=none")}
else if (necklacegrade=="N")
	{modifystyles("NCK84=none;NCK80=none;NCKS=none;NCKA=none;NCKB=none;NCKC=none;NCKD=none;NCKN=block")}
else if (necklacegrade=="S80")
	{modifystyles("NCK84=none;NCK80=block;NCKS=none;NCKA=none;NCKB=none;NCKC=none;NCKD=none;NCKN=none")}
else if (necklacegrade=="S84")
	{modifystyles("NCK84=block;NCK80=none;NCKS=none;NCKA=none;NCKB=none;NCKC=none;NCKD=none;NCKN=none")}

//Earring1 hide/unhide stuff
var earring1grade=d.gI("EAR1G").value
earring1grade=GRADE[earring1grade]
if (earring1grade=="S")
	{modifystyles("EAR184=none;EAR180=none;EAR1S=block;EAR1A=none;EAR1B=none;EAR1C=none;EAR1D=none;EAR1N=none")}
else if (earring1grade=="A")
	{modifystyles("EAR184=none;EAR180=none;EAR1S=none;EAR1A=block;EAR1B=none;EAR1C=none;EAR1D=none;EAR1N=none")}
else if (earring1grade=="B")
	{modifystyles("EAR184=none;EAR180=none;EAR1S=none;EAR1A=none;EAR1B=block;EAR1C=none;EAR1D=none;EAR1N=none")}
else if (earring1grade=="C")
	{modifystyles("EAR184=none;EAR180=none;EAR1S=none;EAR1A=none;EAR1B=none;EAR1C=block;EAR1D=none;EAR1N=none")}
else if (earring1grade=="D")
	{modifystyles("EAR184=none;EAR180=none;EAR1S=none;EAR1A=none;EAR1B=none;EAR1C=none;EAR1D=block;EAR1N=none")}
else if (earring1grade=="N")
	{modifystyles("EAR184=none;EAR180=none;EAR1S=none;EAR1A=none;EAR1B=none;EAR1C=none;EAR1D=none;EAR1N=block")}
else if (earring1grade=="S80")
	{modifystyles("EAR184=none;EAR180=block;EAR1S=none;EAR1A=none;EAR1B=none;EAR1C=none;EAR1D=none;EAR1N=none")}
else if (earring1grade=="S84")
	{modifystyles("EAR184=block;EAR180=none;EAR1S=none;EAR1A=none;EAR1B=none;EAR1C=none;EAR1D=none;EAR1N=none")}

//Earring2 hide/unhide stuff
var earring2grade=d.gI("EAR2G").value
earring2grade=GRADE[earring2grade]
if (earring2grade=="S")
	{modifystyles("EAR284=none;EAR280=none;EAR2S=block;EAR2A=none;EAR2B=none;EAR2C=none;EAR2D=none;EAR2N=none")}
else if (earring2grade=="A")
	{modifystyles("EAR284=none;EAR280=none;EAR2S=none;EAR2A=block;EAR2B=none;EAR2C=none;EAR2D=none;EAR2N=none")}
else if (earring2grade=="B")
	{modifystyles("EAR284=none;EAR280=none;EAR2S=none;EAR2A=none;EAR2B=block;EAR2C=none;EAR2D=none;EAR2N=none")}
else if (earring2grade=="C")
	{modifystyles("EAR284=none;EAR280=none;EAR2S=none;EAR2A=none;EAR2B=none;EAR2C=block;EAR2D=none;EAR2N=none")}
else if (earring2grade=="D")
	{modifystyles("EAR284=none;EAR280=none;EAR2S=none;EAR2A=none;EAR2B=none;EAR2C=none;EAR2D=block;EAR2N=none")}
else if (earring2grade=="N")
	{modifystyles("EAR284=none;EAR280=none;EAR2S=none;EAR2A=none;EAR2B=none;EAR2C=none;EAR2D=none;EAR2N=block")}
else if (earring2grade=="S80")
	{modifystyles("EAR284=none;EAR280=block;EAR2S=none;EAR2A=none;EAR2B=none;EAR2C=none;EAR2D=none;EAR2N=none")}
else if (earring2grade=="S84")
	{modifystyles("EAR284=block;EAR280=none;EAR2S=none;EAR2A=none;EAR2B=none;EAR2C=none;EAR2D=none;EAR2N=none")}

//Ring1 hide/unhide stuff
var ring1grade=d.gI("RNG1G").value
ring1grade=GRADE[ring1grade]
if (ring1grade=="S")
	{modifystyles("RNG184=none;RNG180=none;RNG1S=block;RNG1A=none;RNG1B=none;RNG1C=none;RNG1D=none;RNG1N=none")}
else if (ring1grade=="A")
	{modifystyles("RNG184=none;RNG180=none;RNG1S=none;RNG1A=block;RNG1B=none;RNG1C=none;RNG1D=none;RNG1N=none")}
else if (ring1grade=="B")
	{modifystyles("RNG184=none;RNG180=none;RNG1S=none;RNG1A=none;RNG1B=block;RNG1C=none;RNG1D=none;RNG1N=none")}
else if (ring1grade=="C")
	{modifystyles("RNG184=none;RNG180=none;RNG1S=none;RNG1A=none;RNG1B=none;RNG1C=block;RNG1D=none;RNG1N=none")}
else if (ring1grade=="D")
	{modifystyles("RNG184=none;RNG180=none;RNG1S=none;RNG1A=none;RNG1B=none;RNG1C=none;RNG1D=block;RNG1N=none")}
else if (ring1grade=="N")
	{modifystyles("RNG184=none;RNG180=none;RNG1S=none;RNG1A=none;RNG1B=none;RNG1C=none;RNG1D=none;RNG1N=block")}
else if (ring1grade=="S80")
	{modifystyles("RNG184=none;RNG180=block;RNG1S=none;RNG1A=none;RNG1B=none;RNG1C=none;RNG1D=none;RNG1N=none")}
else if (ring1grade=="S84")
	{modifystyles("RNG184=block;RNG180=none;RNG1S=none;RNG1A=none;RNG1B=none;RNG1C=none;RNG1D=none;RNG1N=none")}

//Ring2 hide/unhide stuff
var ring2grade=d.gI("RNG2G").value
ring2grade=GRADE[ring2grade]
if (ring2grade=="S")
	{modifystyles("RNG284=none;RNG280=none;RNG2S=block;RNG2A=none;RNG2B=none;RNG2C=none;RNG2D=none;RNG2N=none")}
else if (ring2grade=="A")
	{modifystyles("RNG284=none;RNG280=none;RNG2S=none;RNG2A=block;RNG2B=none;RNG2C=none;RNG2D=none;RNG2N=none")}
else if (ring2grade=="B")
	{modifystyles("RNG284=none;RNG280=none;RNG2S=none;RNG2A=none;RNG2B=block;RNG2C=none;RNG2D=none;RNG2N=none")}
else if (ring2grade=="C")
	{modifystyles("RNG284=none;RNG280=none;RNG2S=none;RNG2A=none;RNG2B=none;RNG2C=block;RNG2D=none;RNG2N=none")}
else if (ring2grade=="D")
	{modifystyles("RNG284=none;RNG280=none;RNG2S=none;RNG2A=none;RNG2B=none;RNG2C=none;RNG2D=block;RNG2N=none")}
else if (ring2grade=="N")
	{modifystyles("RNG284=none;RNG280=none;RNG2S=none;RNG2A=none;RNG2B=none;RNG2C=none;RNG2D=none;RNG2N=block")}
else if (ring2grade=="S80")
	{modifystyles("RNG284=none;RNG280=block;RNG2S=none;RNG2A=none;RNG2B=none;RNG2C=none;RNG2D=none;RNG2N=none")}
else if (ring2grade=="S84")
	{modifystyles("RNG284=block;RNG280=none;RNG2S=none;RNG2A=none;RNG2B=none;RNG2C=none;RNG2D=none;RNG2N=none")}
}

function classskills()
{
//Racial Stats
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
var trans="none"
	if (d.gI("TRNSC").checked==true)
		{
		trans2=d.gI("TRNS").value;
		trans=TRANSFORMATION[trans2]
		}

//Buff Hide/Unhide stuff
if (JOB=="HE"||JOB=="SR"||JOB=="PR")
	{
	d.gI("SAGC").style.display = 'block'
	d.gI("SAG").style.display = 'block'
	d.gI("ARCC").style.display = 'block'
	d.gI("ARC").style.display = 'block'
	}
else
	{
	d.gI("SAGC").checked=false
	d.gI("SAGC").style.display = 'none'
	d.gI("SAG").style.display = 'none'
	d.gI("ARCC").checked=false
	d.gI("ARCC").style.display = 'none'
	d.gI("ARC").style.display = 'none'
	}
if (JOB=="OR"||JOB=="DE")
	{
	d.gI("FZY1C").style.display = 'block'
	d.gI("FZY1").style.display = 'block'
	d.gI("RGE1C").style.display = 'block'
	d.gI("RGE1").style.display = 'block'
	}
else
	{
	d.gI("FZY1C").checked=false
	d.gI("FZY1C").style.display = 'none'
	d.gI("FZY1").style.display = 'none'
	d.gI("RGE1C").checked=false
	d.gI("RGE1C").style.display = 'none'
	d.gI("RGE1").style.display = 'none'
	}
if ((JOB=="WA"||JOB=="WD"||JOB=="GL")||trans=="DWARRIOR")
	{
	d.gI("WCY1C").style.display = 'block'
	d.gI("WCY1").style.display = 'block'
	}
else
	{
	d.gI("WCY1C").checked=false
	d.gI("WCY1C").style.display = 'none'
	d.gI("WCY1").style.display = 'none'
	}
if (trans=="INFERNO")
	{
	d.gI("FRAC").style.display = 'block'
	d.gI("FRA").style.display = 'block'
	}
else
	{
	d.gI("FRAC").checked=false
	d.gI("FRAC").style.display = 'none'
	d.gI("FRA").style.display = 'none'
	}
if (JOB=="HK"||JOB=="PA"||JOB=="DA")
	{
	d.gI("MAJ1C").style.display = 'block'
	d.gI("MAJ1").style.display = 'block'
	}
else
	{
	d.gI("MAJ1C").checked=false
	d.gI("MAJ1C").style.display = 'none'
	d.gI("MAJ1").style.display = 'none'
	}
if (JOB=="HE")
	{
	d.gI("HEC").style.display = 'block'
	d.gI("HE").style.display = 'block'
	}
else
	{
	d.gI("HEC").checked=false
	d.gI("HEC").style.display = 'none'
	d.gI("HE").style.display = 'none'
	}
if (JOB=="TH")
	{
	d.gI("EXAC").style.display = 'block'
	d.gI("EXA").style.display = 'block'
	}
else
	{
	d.gI("EXAC").checked=false
	d.gI("EXAC").style.display = 'none'
	d.gI("EXA").style.display = 'none'
	}
if (JOB=="PW")
	{
	d.gI("WDRC").style.display = 'block'
	d.gI("WDR").style.display = 'block'
	}
else
	{
	d.gI("WDRC").checked=false
	d.gI("WDRC").style.display = 'none'
	d.gI("WDR").style.display = 'none'
	}
if (JOB=="AW")
	{
	d.gI("GWKC").style.display = 'block'
	d.gI("GWK").style.display = 'block'
	}
else
	{
	d.gI("GWKC").checked=false
	d.gI("GWKC").style.display = 'none'
	d.gI("GWK").style.display = 'none'
	}
if (JOB=="PW"||JOB=="TH"||JOB=="AW"||JOB=="BH")
	{
	d.gI("DDMC").style.display = 'block'
	d.gI("DDM").style.display = 'block'
	}
else
	{
	d.gI("DDMC").checked=false
	d.gI("DDMC").style.display = 'none'
	d.gI("DDM").style.display = 'none'
	}
if (JOB=="SBF"||JOB=="SBM"||JOB=="INF"||JOB=="INM")
	{
	d.gI("XPTC").style.display = 'block'
	d.gI("XPT").style.display = 'block'
	}
else
	{
	d.gI("XPTC").checked=false
	d.gI("XPTC").style.display = 'none'
	d.gI("XPT").style.display = 'none'
	}
if (JOB=="SPH")
	{
	d.gI("EMEC").style.display = 'block'
	d.gI("EME").style.display = 'block'
	}
else
	{
	d.gI("EMEC").checked=false
	d.gI("EMEC").style.display = 'none'
	d.gI("EME").style.display = 'none'
	}
if (JOB=="BH")
	{
	d.gI("CXPC").style.display = 'block'
	d.gI("CXP").style.display = 'block'
	}
else
	{
	d.gI("CXPC").checked=false
	d.gI("CXPC").style.display = 'none'
	d.gI("CXP").style.display = 'none'
	}
if (JOB=="BI" && trans!="INQUISITOR")
	{
	d.gI("DVPC").style.display = 'block'
	d.gI("DVP").style.display = 'block'
	}
else
	{
	d.gI("DVPC").checked=false
	d.gI("DVPC").style.display = 'none'
	d.gI("DVP").style.display = 'none'
	}
if (JOB=="SBF"||JOB=="SBM")
	{
	d.gI("ABPC").style.display = 'block'
	d.gI("ABP").style.display = 'block'
	}
else
	{
	d.gI("ABPC").checked=false
	d.gI("ABPC").style.display = 'none'
	d.gI("ABP").style.display = 'none'
	}
if (JOB=="HE"||JOB=="TH"||JOB=="SR"||JOB=="PW"||JOB=="PR"||JOB=="AW"||JOB=="EFS"||JOB=="RO"||JOB=="AS")
	{
	d.gI("UEC").style.display = 'block'
	d.gI("UE").style.display = 'block'
	}
else
	{
	d.gI("UEC").checked=false
	d.gI("UEC").style.display = 'none'
	d.gI("UE").style.display = 'none'
	}
if (JOB=="HE"||JOB=="TH"||JOB=="SR"||JOB=="PW"||JOB=="PR"||JOB=="AW"||JOB=="GL"||JOB=="WD"||JOB=="DE")
	{
	d.gI("VSC").style.display = 'block'
	d.gI("VS").style.display = 'block'
	}
else
	{
	d.gI("VSC").checked=false
	d.gI("VSC").style.display = 'none'
	d.gI("VS").style.display = 'none'
	}
if (JOB=="SR"||JOB=="PR")
	{
	d.gI("EVSC").style.display = 'block'
	d.gI("EVS").style.display = 'block'
	}
else
	{
	d.gI("EVSC").checked=false
	d.gI("EVSC").style.display = 'none'
	d.gI("EVS").style.display = 'none'
	}
if (JOB=="DA")
	{
	d.gI("SRVC").style.display = 'block'
	d.gI("SRV").style.display = 'block'
	}
else
	{
	d.gI("SRVC").checked=false
	d.gI("SRVC").style.display = 'none'
	d.gI("SRV").style.display = 'none'
	}
if ((JOB=="HE"||JOB=="RO"||JOB=="TH")||trans=="ONYX")
	{
	d.gI("DAS1C").style.display = 'block'
	d.gI("DAS1").style.display = 'block'
	}
else
	{
	d.gI("DAS1C").checked=false
	d.gI("DAS1C").style.display = 'none'
	d.gI("DAS1").style.display = 'none'
	}
if (JOB=="PW"||JOB=="AW")
	{
	d.gI("BLDC").style.display = 'block'
	d.gI("BLD").style.display = 'block'
	}
else
	{
	d.gI("BLDC").checked=false
	d.gI("BLDC").style.display = 'none'
	d.gI("BLD").style.display = 'none'
	}
if (JOB=="DE")
	{
	d.gI("OTBC").style.display = 'block'
	d.gI("OTB").style.display = 'block'
	}
else
	{
	d.gI("OTBC").checked=false
	d.gI("OTBC").style.display = 'none'
	d.gI("OTB").style.display = 'none'
	}
if (JOB=="TH"||JOB=="PW"||JOB=="AW"||JOB=="HE"||JOB=="SR"||JOB=="PR")
	{
	d.gI("RPD1C").style.display = 'block'
	d.gI("RPD1").style.display = 'block'
	}
else
	{
	d.gI("RPD1C").checked=false
	d.gI("RPD1C").style.display = 'none'
	d.gI("RPD1").style.display = 'none'
	}
if (JOB=="WRD"||JOB=="SBF"||JOB=="ARB")
	{
	d.gI("FS1C").style.display = 'block'
	d.gI("FS1").style.display = 'block'
	}
else
	{
	d.gI("FS1C").checked=false
	d.gI("FS1C").style.display = 'none'
	d.gI("FS1").style.display = 'none'
	}
if (JOB=="TH"||JOB=="DA"||JOB=="PA"||JOB=="TK"||JOB=="SK"||JOB=="SW"||JOB=="BD"||JOB=="PW"||JOB=="AW"||JOB=="ARB"||JOB=="SBF"||JOB=="SBM")
	{
	d.gI("SXSC").style.display = 'block'
	d.gI("SXS").style.display = 'block'
	}
else
	{
	d.gI("SXSC").checked=false
	d.gI("SXSC").style.display = 'none'
	d.gI("SXS").style.display = 'none'
	}
if (JOB=="GL")
	{
	d.gI("DUELC").style.display = 'block'
	d.gI("DUEL").style.display = 'block'
	}
else
	{
	d.gI("DUELC").checked=false
	d.gI("DUELC").style.display = 'none'
	d.gI("DUEL").style.display = 'none'
	}
if (JOB=="WD")
	{
	d.gI("TFC").style.display = 'block'
	d.gI("TF").style.display = 'block'
	}
else
	{
	d.gI("TFC").checked=false
	d.gI("TFC").style.display = 'none'
	d.gI("TF").style.display = 'none'
	}
if (trans=="GOLEMARMOR")
	{
	d.gI("OVHC").style.display = 'block'
	d.gI("OVH").style.display = 'block'
	}
else
	{
	d.gI("OVHC").checked=false
	d.gI("OVHC").style.display = 'none'
	d.gI("OVH").style.display = 'none'
	}
if (JOB=="PA"||JOB=="DA"||JOB=="TK"||JOB=="SK")
	{
	d.gI("SFC").style.display = 'block'
	d.gI("SF").style.display = 'block'
	}
else
	{
	d.gI("SFC").checked=false
	d.gI("SFC").style.display = 'none'
	d.gI("SF").style.display = 'none'
	}
if (JOB=="PA")
	{
	d.gI("PNXC").style.display = 'block'
	d.gI("PNX").style.display = 'block'
	}
else
	{
	d.gI("PNXC").checked=false
	d.gI("PNXC").style.display = 'none'
	d.gI("PNX").style.display = 'none'
	}
if (JOB=="TK")
	{
	d.gI("EWLC").style.display = 'block'
	d.gI("EWL").style.display = 'block'
	}
else
	{
	d.gI("EWLC").checked=false
	d.gI("EWLC").style.display = 'none'
	d.gI("EWL").style.display = 'none'
	}
if (JOB=="SK")
	{
	d.gI("PSHC").style.display = 'block'
	d.gI("PSH").style.display = 'block'
	}
else
	{
	d.gI("PSHC").checked=false
	d.gI("PSHC").style.display = 'none'
	d.gI("PSH").style.display = 'none'
	}
if ((JOB=="HK"||JOB=="EK"||JOB=="SW"||JOB=="PK"||JOB=="BD"||JOB=="PA"||JOB=="DA"||JOB=="TK"||JOB=="SK")||trans=="DKNIGHT"||trans=="DEMONPRINCE"||trans=="OELMAHUM")
	{
	d.gI("UD1C").style.display = 'block'
	d.gI("UD1").style.display = 'block'
	}
else
	{
	d.gI("UD1C").checked=false
	d.gI("UD1C").style.display = 'none'
	d.gI("UD1").style.display = 'none'
	}
if (JOB=="HK"||JOB=="EK"||JOB=="PK")
	{
	d.gI("FCM1C").style.display = 'block'
	d.gI("FCM1").style.display = 'block'
	d.gI("FCM2C").checked=false
	d.gI("FCM2C").style.display = 'none'
	d.gI("FCM2").style.display = 'none'
	}
else if (JOB=="PA"||JOB=="DA"||JOB=="TK"||JOB=="SK"||JOB=="SW"||JOB=="BD")
	{
	d.gI("FCM2C").style.display = 'block'
	d.gI("FCM2").style.display = 'block'
	d.gI("FCM1C").checked=false
	d.gI("FCM1C").style.display = 'none'
	d.gI("FCM1").style.display = 'none'
	}
else
	{
	d.gI("FCM1C").checked=false
	d.gI("FCM1C").style.display = 'none'
	d.gI("FCM1").style.display = 'none'
	d.gI("FCM2C").checked=false
	d.gI("FCM2C").style.display = 'none'
	d.gI("FCM2").style.display = 'none'
	}
if (JOB=="PR")
	{
	d.gI("DEYC").style.display = 'block'
	d.gI("DEY").style.display = 'block'
	}
else
	{
	d.gI("DEYC").checked=false
	d.gI("DEYC").style.display = 'none'
	d.gI("DEY").style.display = 'none'
	}
if (JOB=="MO"||JOB=="TY")
	{
	d.gI("TTM1C").style.display = 'block'
	d.gI("TTM1").style.display = 'block'
	}
else
	{
	d.gI("TTM1C").checked=false
	d.gI("TTM1C").style.display = 'none'
	d.gI("TTM1").style.display = 'none'
	}
if (JOB=="HE")
	{
	d.gI("SNIC").style.display = 'block'
	d.gI("SNI").style.display = 'block'
	}
else
	{
	d.gI("SNIC").checked=false
	d.gI("SNIC").style.display = 'none'
	d.gI("SNI").style.display = 'none'
	}
if (JOB=="OL"||JOB=="SOR"||JOB=="SPS"||JOB=="NE"||JOB=="SPH")
	{
	d.gI("ARPC").style.display = 'block'
	d.gI("ARP").style.display = 'block'
	}
else
	{
	d.gI("ARPC").checked=false
	d.gI("ARPC").style.display = 'none'
	d.gI("ARP").style.display = 'none'
	}
if (JOB=="TY")
	{
	d.gI("FMDC").style.display = 'block'
	d.gI("FMD").style.display = 'block'
	}
else
	{
	d.gI("FMDC").checked=false
	d.gI("FMDC").style.display = 'none'
	d.gI("FMD").style.display = 'none'
	}
if (JOB=="GL")
	{
	d.gI("SNCC").style.display = 'block'
	d.gI("SNC").style.display = 'block'
	}
else
	{
	d.gI("SNCC").checked=false
	d.gI("SNCC").style.display = 'none'
	d.gI("SNC").style.display = 'none'
	}
if (JOB=="OM")
	{
	d.gI("SL1C").style.display = 'block'
	d.gI("SL1").style.display = 'block'
	d.gI("SL2C").checked=false
	d.gI("SL2C").style.display = 'none'
	d.gI("SL2").style.display = 'none'
	d.gI("SL3C").checked=false
	d.gI("SL3C").style.display = 'none'
	d.gI("SL3").style.display = 'none'
	}
else if (JOB=="OS")
	{
	d.gI("SL2C").style.display = 'block'
	d.gI("SL2").style.display = 'block'
	d.gI("SL1C").checked=false
	d.gI("SL1C").style.display = 'none'
	d.gI("SL1").style.display = 'none'
	d.gI("SL3C").checked=false
	d.gI("SL3C").style.display = 'none'
	d.gI("SL3").style.display = 'none'
	}
else if (JOB=="OL"||JOB=="WC")
	{
	d.gI("SL3C").style.display = 'block'
	d.gI("SL3").style.display = 'block'
	d.gI("SL1C").checked=false
	d.gI("SL1C").style.display = 'none'
	d.gI("SL1").style.display = 'none'
	d.gI("SL2C").checked=false
	d.gI("SL2C").style.display = 'none'
	d.gI("SL2").style.display = 'none'
	}
else
	{
	d.gI("SL1C").checked=false
	d.gI("SL1C").style.display = 'none'
	d.gI("SL1").style.display = 'none'
	d.gI("SL2C").checked=false
	d.gI("SL2C").style.display = 'none'
	d.gI("SL2").style.display = 'none'
	d.gI("SL3C").checked=false
	d.gI("SL3C").style.display = 'none'
	d.gI("SL3").style.display = 'none'
	}
if (JOB=="SK"||JOB=="TK")
	{
	d.gI("GSC").style.display = 'block'
	d.gI("GS").style.display = 'block'
	d.gI("AGSC").style.display = 'block'
	d.gI("AGS").style.display = 'block'
	}
else
	{
	d.gI("GSC").checked=false
	d.gI("GSC").style.display = 'none'
	d.gI("GS").style.display = 'none'
	d.gI("AGSC").checked=false
	d.gI("AGSC").style.display = 'none'
	d.gI("AGS").style.display = 'none'
	}
if (JOB=="OL")
	{
	d.gI("SGC").style.display = 'block'
	d.gI("SG").style.display = 'block'
	}
else
	{
	d.gI("SGC").checked=false
	d.gI("SGC").style.display = 'none'
	d.gI("SG").style.display = 'none'
	}
if (JOB=="TY"||JOB=="GL"||JOB=="WD"||JOB=="DE"||JOB=="BH"||JOB=="WS"||JOB=="BKR")
	{
	d.gI("FSCC").style.display = 'block'
	d.gI("FSC").style.display = 'block'
	}
else
	{
	d.gI("FSCC").checked=false
	d.gI("FSCC").style.display = 'none'
	d.gI("FSC").style.display = 'none'
	}
if (JOB=="DE"||JOB=="TY")
	{
	d.gI("ZLTC").style.display = 'block'
	d.gI("ZLT").style.display = 'block'
	}
else
	{
	d.gI("ZLTC").checked=false
	d.gI("ZLTC").style.display = 'none'
	d.gI("ZLT").style.display = 'none'
	}
if (JOB=="ARB"||JOB=="SBF"||JOB=="INF"||JOB=="BKR"||JOB=="INM"||JOB=="SBM")
	{
	d.gI("CRSC").style.display = 'block'
	d.gI("CRS").style.display = 'block'
	}
else
	{
	d.gI("CRSC").checked=false
	d.gI("CRSC").style.display = 'none'
	d.gI("CRS").style.display = 'none'
	}
if (JOB=="WA"||JOB=="GL"||JOB=="WD"||JOB=="RO"||JOB=="TH"||JOB=="HE"||JOB=="EFS"||JOB=="PW"||JOB=="SR"||JOB=="AS"||JOB=="PR"||JOB=="AW"||JOB=="OR"||JOB=="DE")
	{
	d.gI("ACCTC").style.display = 'block'
	d.gI("ACCT").style.display = 'block'
	}
else
	{
	d.gI("ACCTC").checked=false
	d.gI("ACCTC").style.display = 'none'
	d.gI("ACCT").style.display = 'none'
	}
if (JOB=="BH"||JOB=="WS"||JOB=="DE"||JOB=="WD")
	{
	d.gI("PACC").style.display = 'block'
	d.gI("PAC").style.display = 'block'
	}
else
	{
	d.gI("PACC").checked=false
	d.gI("PACC").style.display = 'none'
	d.gI("PAC").style.display = 'none'
	}
if (JOB=="WD")
	{
	d.gI("FAC").style.display = 'block'
	d.gI("FA").style.display = 'block'
	}
else
	{
	d.gI("FAC").checked=false
	d.gI("FAC").style.display = 'none'
	d.gI("FA").style.display = 'none'
	}
if (JOB=="PW"||JOB=="AW"||JOB=="TH")
	{
	d.gI("SMC").style.display = 'block'
	d.gI("SM").style.display = 'block'
	d.gI("HIDC").style.display = 'block'
	d.gI("HID").style.display = 'block'
	}
else
	{
	d.gI("SMC").checked=false
	d.gI("SMC").style.display = 'none'
	d.gI("SM").style.display = 'none'
	d.gI("HIDC").checked=false
	d.gI("HIDC").style.display = 'none'
	d.gI("HID").style.display = 'none'
	}
if (JOB=="TH"||trans=="BOMBER")
	{
	d.gI("STLC").style.display = 'block'
	d.gI("STL").style.display = 'block'
	}
else
	{
	d.gI("STLC").checked=false
	d.gI("STLC").style.display = 'none'
	d.gI("STL").style.display = 'none'
	}
if (JOB=="SBF"||JOB=="SBM"||JOB=="NE"||JOB=="SPS"|JOB=="SOR"||JOB=="SPH")
	{
	d.gI("ENNC").style.display = 'block'
	d.gI("ENN").style.display = 'block'
	}
else
	{
	d.gI("ENNC").checked=false
	d.gI("ENNC").style.display = 'none'
	d.gI("ENN").style.display = 'none'
	}
if ((JOB=="BI"||JOB=="PP"||JOB=="EE"||JOB=="SHE"||JOB=="WC"||JOB=="OL") && trans!="INQUISITOR")
	{
	d.gI("ENHC").style.display = 'block'
	d.gI("ENH").style.display = 'block'
	}
else
	{
	d.gI("ENHC").checked=false
	d.gI("ENHC").style.display = 'none'
	d.gI("ENH").style.display = 'none'
	}
if (JOB=="TY")
	{
	d.gI("FFYC").style.display = 'block'
	d.gI("FFY").style.display = 'block'
	}
else
	{
	d.gI("FFYC").checked=false
	d.gI("FFYC").style.display = 'none'
	d.gI("FFY").style.display = 'none'
	}
if (JOB=="WL"||JOB=="ELS"||JOB=="PS")
	{
	d.gI("ARAC").style.display = 'block'
	d.gI("ARA").style.display = 'block'
	}
else
	{
	d.gI("ARAC").checked=false
	d.gI("ARAC").style.display = 'none'
	d.gI("ARA").style.display = 'none'
	}
if (JOB=="WC"||JOB=="SHE"||JOB=="BI"||JOB=="EE"||JOB=="PP")
	{
	d.gI("ARWC").style.display = 'block'
	d.gI("ARW").style.display = 'block'
	}
else
	{
	d.gI("ARWC").checked=false
	d.gI("ARWC").style.display = 'none'
	d.gI("ARW").style.display = 'none'
	}
if (JOB=="SR")
	{
	d.gI("RPFC").style.display = 'block'
	d.gI("RPF").style.display = 'block'
	}
else
	{
	d.gI("RPFC").checked=false
	d.gI("RPFC").style.display = 'none'
	d.gI("RPF").style.display = 'none'
	}
if (JOB=="WD"||JOB=="WS"||JOB=="BH"||JOB=="DE")
	{
	d.gI("PRYC").style.display = 'block'
	d.gI("PRY").style.display = 'block'
	}
else
	{
	d.gI("PRYC").checked=false
	d.gI("PRYC").style.display = 'none'
	d.gI("PRY").style.display = 'none'
	}
if (JOB=="TY"||JOB=="GL"||JOB=="WS"||JOB=="BH")
	{
	d.gI("RIPC").style.display = 'block'
	d.gI("RIP").style.display = 'block'
	}
else
	{
	d.gI("RIPC").checked=false
	d.gI("RIPC").style.display = 'none'
	d.gI("RIP").style.display = 'none'
	}
if (JOB=="TH")
	{
	d.gI("EVHC").style.display = 'block'
	d.gI("EVH").style.display = 'block'
	}
else
	{
	d.gI("EVHC").checked=false
	d.gI("EVHC").style.display = 'none'
	d.gI("EVH").style.display = 'none'
	}
if (race=="KF"||race=="KM")
	{
	d.gI("FSRC").style.display = 'block'
	d.gI("FSR").style.display = 'block'
	}
else
	{
	d.gI("FSRC").checked=false
	d.gI("FSRC").style.display = 'none'
	d.gI("FSR").style.display = 'none'
	}
if (JOB=="PA")
	{
	d.gI("ANIC").style.display = 'block'
	d.gI("ANI").style.display = 'block'
	}
else
	{
	d.gI("ANIC").checked=false
	d.gI("ANIC").style.display = 'none'
	d.gI("ANI").style.display = 'none'
	}
if (JOB=="PA")
	{
	d.gI("ASTC").style.display = 'block'
	d.gI("AST").style.display = 'block'
	}
else
	{
	d.gI("ASTC").checked=false
	d.gI("ASTC").style.display = 'none'
	d.gI("AST").style.display = 'none'
	}
if (JOB=="AW")
	{
	d.gI("FAWC").style.display = 'block'
	d.gI("FAW").style.display = 'block'
	d.gI("FPWC").checked=false
	d.gI("FPWC").style.display = 'none'
	d.gI("FPW").style.display = 'none'
	d.gI("FTHC").checked=false
	d.gI("FTHC").style.display = 'none'
	d.gI("FTH").style.display = 'none'
	}
else if (JOB=="PW")
	{
	d.gI("FAWC").checked=false
	d.gI("FAWC").style.display = 'none'
	d.gI("FAW").style.display = 'none'
	d.gI("FPWC").style.display = 'block'
	d.gI("FPW").style.display = 'block'
	d.gI("FTHC").checked=false
	d.gI("FTHC").style.display = 'none'
	d.gI("FTH").style.display = 'none'
	}
else if (JOB=="TH")
	{
	d.gI("FAWC").checked=false
	d.gI("FAWC").style.display = 'none'
	d.gI("FAW").style.display = 'none'
	d.gI("FPWC").checked=false
	d.gI("FPWC").style.display = 'none'
	d.gI("FPW").style.display = 'none'
	d.gI("FTHC").style.display = 'block'
	d.gI("FTH").style.display = 'block'
	}
else
	{
	d.gI("FAWC").checked=false
	d.gI("FAWC").style.display = 'none'
	d.gI("FAW").style.display = 'none'
	d.gI("FPWC").checked=false
	d.gI("FPWC").style.display = 'none'
	d.gI("FPW").style.display = 'none'
	d.gI("FTHC").checked=false
	d.gI("FTHC").style.display = 'none'
	d.gI("FTH").style.display = 'none'
	}

//Passive Hide/Unhide Stuff
if (race=="HF"||race=="EF"||race=="DF"||race=="OF"||race=="DW"||race=="KM"||race=="KF")
	{
	d.gI("WMFC").style.display = 'block'
	d.gI("WMF").style.display = 'block'
	d.gI("AMFC").style.display = 'block'
	d.gI("AMF").style.display = 'block'
	d.gI("FWLC").style.display = 'block'
	d.gI("FWL").style.display = 'block'
	d.gI("AWLC").style.display = 'block'
	d.gI("AWL").style.display = 'block'
	}
else
	{
	d.gI("WMFC").checked=false
	d.gI("WMFC").style.display = 'none'
	d.gI("WMF").style.display = 'none'
	d.gI("AMFC").checked=false
	d.gI("AMFC").style.display = 'none'
	d.gI("AMF").style.display = 'none'
	d.gI("FWLC").checked=false
	d.gI("FWLC").style.display = 'none'
	d.gI("FWL").style.display = 'none'
	d.gI("AWLC").checked=false
	d.gI("AWLC").style.display = 'none'
	d.gI("AWL").style.display = 'none'
	}
if (JOB=="HM"||JOB=="EM"||JOB=="DM"||JOB=="OM")
	{
	d.gI("WMM1C").style.display = 'block'
	d.gI("WMM1").style.display = 'block'
	d.gI("WMM2C").checked=false
	d.gI("WMM2C").style.display = 'none'
	d.gI("WMM2").style.display = 'none'
	d.gI("WMM3C").checked=false
	d.gI("WMM3C").style.display = 'none'
	d.gI("WMM3").style.display = 'none'
	d.gI("AM1C").style.display = 'block'
	d.gI("AM1").style.display = 'block'
	d.gI("AM2C").checked=false
	d.gI("AM2C").style.display = 'none'
	d.gI("AM2").style.display = 'none'
	d.gI("AM3C").checked=false
	d.gI("AM3C").style.display = 'none'
	d.gI("AM3").style.display = 'none'
	d.gI("MWLC").checked=false
	d.gI("MWLC").style.display = 'none'
	d.gI("MWL").style.display = 'none'
	d.gI("SGMC").checked=false
	d.gI("SGMC").style.display = 'none'
	d.gI("SGM").style.display = 'none'
	}
else if (JOB=="WI"||JOB=="CL"||JOB=="EW"||JOB=="EO"||JOB=="DW"||JOB=="SO"||JOB=="OS")
	{
	d.gI("WMM2C").style.display = 'block'
	d.gI("WMM2").style.display = 'block'
	d.gI("WMM1C").checked=false
	d.gI("WMM1C").style.display = 'none'
	d.gI("WMM1").style.display = 'none'
	d.gI("WMM3C").checked=false
	d.gI("WMM3C").style.display = 'none'
	d.gI("WMM3").style.display = 'none'
	d.gI("AM2C").style.display = 'block'
	d.gI("AM2").style.display = 'block'
	d.gI("AM1C").checked=false
	d.gI("AM1C").style.display = 'none'
	d.gI("AM1").style.display = 'none'
	d.gI("AM3C").checked=false
	d.gI("AM3C").style.display = 'none'
	d.gI("AM3").style.display = 'none'
	d.gI("MWLC").checked=false
	d.gI("MWLC").style.display = 'none'
	d.gI("MWL").style.display = 'none'
	}
else if (JOB=="SOR"||JOB=="NE"||JOB=="WL"||JOB=="PP"||JOB=="BI"||JOB=="SPS"||JOB=="ELS"||JOB=="EE"||JOB=="SPH"||JOB=="PS"||JOB=="WC"||JOB=="SHE"||JOB=="OL")
	{
	d.gI("WMM3C").style.display = 'block'
	d.gI("WMM3").style.display = 'block'
	d.gI("WMM1C").checked=false
	d.gI("WMM1C").style.display = 'none'
	d.gI("WMM1").style.display = 'none'
	d.gI("WMM2C").checked=false
	d.gI("WMM2C").style.display = 'none'
	d.gI("WMM2").style.display = 'none'
	d.gI("AM3C").style.display = 'block'
	d.gI("AM3").style.display = 'block'
	d.gI("AM1C").checked=false
	d.gI("AM1C").style.display = 'none'
	d.gI("AM1").style.display = 'none'
	d.gI("AM2C").checked=false
	d.gI("AM2C").style.display = 'none'
	d.gI("AM2").style.display = 'none'
	d.gI("MWLC").style.display = 'block'
	d.gI("MWL").style.display = 'block'
	d.gI("SGMC").style.display = 'block'
	d.gI("SGM").style.display = 'block'
	}
else
	{
	d.gI("WMM1C").checked=false
	d.gI("WMM1C").style.display = 'none'
	d.gI("WMM1").style.display = 'none'
	d.gI("WMM2C").checked=false
	d.gI("WMM2C").style.display = 'none'
	d.gI("WMM2").style.display = 'none'
	d.gI("WMM3C").checked=false
	d.gI("WMM3C").style.display = 'none'
	d.gI("WMM3").style.display = 'none'
	d.gI("AM1C").checked=false
	d.gI("AM1C").style.display = 'none'
	d.gI("AM1").style.display = 'none'
	d.gI("AM2C").checked=false
	d.gI("AM2C").style.display = 'none'
	d.gI("AM2").style.display = 'none'
	d.gI("AM3C").checked=false
	d.gI("AM3C").style.display = 'none'
	d.gI("AM3").style.display = 'none'
	d.gI("MWLC").checked=false
	d.gI("MWLC").style.display = 'none'
	d.gI("MWL").style.display = 'none'
	d.gI("SGMC").checked=false
	d.gI("SGMC").style.display = 'none'
	d.gI("SGM").style.display = 'none'
	}
if (JOB=="KSM"||JOB=="KSF")
	{
	d.gI("MI1C").style.display = 'block'
	d.gI("MI1").style.display = 'block'
	d.gI("MI2C").checked=false
	d.gI("MI2C").style.display = 'none'
	d.gI("MI2").style.display = 'none'
	d.gI("MI3C").checked=false
	d.gI("MI3C").style.display = 'none'
	d.gI("MI3").style.display = 'none'
	}
else if (JOB=="TRP"||JOB=="WRD")
	{
	d.gI("MI2C").style.display = 'block'
	d.gI("MI2").style.display = 'block'
	d.gI("MI1C").checked=false
	d.gI("MI1C").style.display = 'none'
	d.gI("MI1").style.display = 'none'
	d.gI("MI3C").checked=false
	d.gI("MI3C").style.display = 'none'
	d.gI("MI3").style.display = 'none'
	}
else if (JOB=="BKR"||JOB=="SBM"||JOB=="INM"||JOB=="SBF"||JOB=="ARB"||JOB=="INF")
	{
	d.gI("MI3C").style.display = 'block'
	d.gI("MI3").style.display = 'block'
	d.gI("MI1C").checked=false
	d.gI("MI1C").style.display = 'none'
	d.gI("MI1").style.display = 'none'
	d.gI("MI2C").checked=false
	d.gI("MI2C").style.display = 'none'
	d.gI("MI2").style.display = 'none'
	}
else
	{
	d.gI("MI1C").checked=false
	d.gI("MI1C").style.display = 'none'
	d.gI("MI1").style.display = 'none'
	d.gI("MI2C").checked=false
	d.gI("MI2C").style.display = 'none'
	d.gI("MI2").style.display = 'none'
	d.gI("MI3C").checked=false
	d.gI("MI3C").style.display = 'none'
	d.gI("MI3").style.display = 'none'
	}
if (JOB=="WI"||JOB=="CL"||JOB=="EW"||JOB=="EO"||JOB=="DW"||JOB=="SO"||JOB=="OS")
	{
	d.gI("BMP1C").style.display = 'block'
	d.gI("BMP1").style.display = 'block'
	d.gI("BMP2C").checked=false
	d.gI("BMP2C").style.display = 'none'
	d.gI("BMP2").style.display = 'none'
	d.gI("FSC1C").style.display = 'block'
	d.gI("FSC1").style.display = 'block'
	d.gI("FSC2C").checked=false
	d.gI("FSC2C").style.display = 'none'
	d.gI("FSC2").style.display = 'none'
	d.gI("FHR3C").style.display = 'block'
	d.gI("FHR3").style.display = 'block'
	d.gI("FHR4C").checked=false
	d.gI("FHR4C").style.display = 'none'
	d.gI("FHR4").style.display = 'none'
	d.gI("FMR1C").style.display = 'block'
	d.gI("FMR1").style.display = 'block'
	d.gI("FMR2C").checked=false
	d.gI("FMR2C").style.display = 'none'
	d.gI("FMR2").style.display = 'none'
	}
else if (JOB=="SOR"||JOB=="NE"||JOB=="WL"||JOB=="PP"||JOB=="BI"||JOB=="SPS"||JOB=="ELS"||JOB=="EE"||JOB=="SPH"||JOB=="PS"||JOB=="WC"||JOB=="SHE"||JOB=="OL")
	{
	d.gI("BMP2C").style.display = 'block'
	d.gI("BMP2").style.display = 'block'
	d.gI("BMP1C").checked=false
	d.gI("BMP1C").style.display = 'none'
	d.gI("BMP1").style.display = 'none'
	d.gI("FSC2C").style.display = 'block'
	d.gI("FSC2").style.display = 'block'
	d.gI("FSC1C").checked=false
	d.gI("FSC1C").style.display = 'none'
	d.gI("FSC1").style.display = 'none'
	d.gI("FHR4C").style.display = 'block'
	d.gI("FHR4").style.display = 'block'
	d.gI("FHR3C").checked=false
	d.gI("FHR3C").style.display = 'none'
	d.gI("FHR3").style.display = 'none'
	d.gI("FMR2C").style.display = 'block'
	d.gI("FMR2").style.display = 'block'
	d.gI("FMR1C").checked=false
	d.gI("FMR1C").style.display = 'none'
	d.gI("FMR1").style.display = 'none'
	}
else
	{
	d.gI("BMP1C").checked=false
	d.gI("BMP1C").style.display = 'none'
	d.gI("BMP1").style.display = 'none'
	d.gI("BMP2C").checked=false
	d.gI("BMP2C").style.display = 'none'
	d.gI("BMP2").style.display = 'none'
	d.gI("FSC1C").checked=false
	d.gI("FSC1C").style.display = 'none'
	d.gI("FSC1").style.display = 'none'
	d.gI("FSC2C").checked=false
	d.gI("FSC2C").style.display = 'none'
	d.gI("FSC2").style.display = 'none'
	d.gI("FHR3C").checked=false
	d.gI("FHR3C").style.display = 'none'
	d.gI("FHR3").style.display = 'none'
	d.gI("FHR4C").checked=false
	d.gI("FHR4C").style.display = 'none'
	d.gI("FHR4").style.display = 'none'
	d.gI("FMR1C").checked=false
	d.gI("FMR1C").style.display = 'none'
	d.gI("FMR1").style.display = 'none'
	d.gI("FMR2C").checked=false
	d.gI("FMR2C").style.display = 'none'
	d.gI("FMR2").style.display = 'none'
	}
if (race=="HM"||race=="EM"||race=="DM")
	{
	d.gI("AMMC").style.display = 'block'
	d.gI("AMM").style.display = 'block'
	}
else
	{
	d.gI("AMMC").checked=false
	d.gI("AMMC").style.display = 'none'
	d.gI("AMM").style.display = 'none'
	}
if (race=="DM")
	{
	d.gI("COSC").style.display = 'block'
	d.gI("COS").style.display = 'block'
	}
else
	{
	d.gI("COSC").checked=false
	d.gI("COSC").style.display = 'none'
	d.gI("COS").style.display = 'none'
	}
if (JOB=="WA"||JOB=="OR"||JOB=="WD")
	{
	d.gI("WSBM1C").style.display = 'block'
	d.gI("WSBM1").style.display = 'block'
	d.gI("WSBM2C").checked=false
	d.gI("WSBM2C").style.display = 'none'
	d.gI("WSBM2").style.display = 'none'
	}
else if (JOB=="GL"||JOB=="DE")
	{
	d.gI("WSBM2C").style.display = 'block'
	d.gI("WSBM2").style.display = 'block'
	d.gI("WSBM1C").checked=false
	d.gI("WSBM1C").style.display = 'none'
	d.gI("WSBM1").style.display = 'none'
	}
else
	{
	d.gI("WSBM1C").checked=false
	d.gI("WSBM1C").style.display = 'none'
	d.gI("WSBM1").style.display = 'none'
	d.gI("WSBM2C").checked=false
	d.gI("WSBM2C").style.display = 'none'
	d.gI("WSBM2").style.display = 'none'
	}
if (JOB=="AR"||JOB=="SC")
	{
	d.gI("BLM1C").style.display = 'block'
	d.gI("BLM1").style.display = 'block'
	d.gI("BLM2C").checked=false
	d.gI("BLM2C").style.display = 'none'
	d.gI("BLM2").style.display = 'none'
	}
else if (JOB=="WS"||JOB=="BH")
	{
	d.gI("BLM2C").style.display = 'block'
	d.gI("BLM2").style.display = 'block'
	d.gI("BLM1C").checked=false
	d.gI("BLM1C").style.display = 'none'
	d.gI("BLM1").style.display = 'none'
	}
else
	{
	d.gI("BLM1C").checked=false
	d.gI("BLM1C").style.display = 'none'
	d.gI("BLM1").style.display = 'none'
	d.gI("BLM2C").checked=false
	d.gI("BLM2C").style.display = 'none'
	d.gI("BLM2").style.display = 'none'
	}
if (JOB=="DO")
	{
	d.gI("WTL1C").style.display = 'block'
	d.gI("WTL1").style.display = 'block'
	d.gI("WTL2C").checked=false
	d.gI("WTL2C").style.display = 'none'
	d.gI("WTL2").style.display = 'none'
	d.gI("WTL3C").checked=false
	d.gI("WTL3C").style.display = 'none'
	d.gI("WTL3").style.display = 'none'
	}
else if (JOB=="AR"||JOB=="SC")
	{
	d.gI("WTL2C").style.display = 'block'
	d.gI("WTL2").style.display = 'block'
	d.gI("WTL1C").checked=false
	d.gI("WTL1C").style.display = 'none'
	d.gI("WTL1").style.display = 'none'
	d.gI("WTL3C").checked=false
	d.gI("WTL3C").style.display = 'none'
	d.gI("WTL3").style.display = 'none'
	}
else if (JOB=="WS"||JOB=="BH")
	{
	d.gI("WTL3C").style.display = 'block'
	d.gI("WTL3").style.display = 'block'
	d.gI("WTL1C").checked=false
	d.gI("WTL1C").style.display = 'none'
	d.gI("WTL1").style.display = 'none'
	d.gI("WTL2C").checked=false
	d.gI("WTL2C").style.display = 'none'
	d.gI("WTL2").style.display = 'none'
	}
else
	{
	d.gI("WTL1C").checked=false
	d.gI("WTL1C").style.display = 'none'
	d.gI("WTL1").style.display = 'none'
	d.gI("WTL2C").checked=false
	d.gI("WTL2C").style.display = 'none'
	d.gI("WTL2").style.display = 'none'
	d.gI("WTL3C").checked=false
	d.gI("WTL3C").style.display = 'none'
	d.gI("WTL3").style.display = 'none'
	}
if (JOB=="AR"||JOB=="WA"||JOB=="GL"||JOB=="OR"||JOB=="SC")
	{
	d.gI("PLM1C").style.display = 'block'
	d.gI("PLM1").style.display = 'block'
	d.gI("PLM2C").checked=false
	d.gI("PLM2C").style.display = 'none'
	d.gI("PLM2").style.display = 'none'
	}
else if (JOB=="WS"||JOB=="BH"||JOB=="WD"||JOB=="DE")
	{
	d.gI("PLM2C").style.display = 'block'
	d.gI("PLM2").style.display = 'block'
	d.gI("PLM1C").checked=false
	d.gI("PLM1C").style.display = 'none'
	d.gI("PLM1").style.display = 'none'
	}
else
	{
	d.gI("PLM1C").checked=false
	d.gI("PLM1C").style.display = 'none'
	d.gI("PLM1").style.display = 'none'
	d.gI("PLM2C").checked=false
	d.gI("PLM2C").style.display = 'none'
	d.gI("PLM2").style.display = 'none'
	}
if (JOB=="MO")
	{
	d.gI("FIM1C").style.display = 'block'
	d.gI("FIM1").style.display = 'block'
	d.gI("FIM2C").checked=false
	d.gI("FIM2C").style.display = 'none'
	d.gI("FIM2").style.display = 'none'
	}
else if (JOB=="TY")
	{
	d.gI("FIM2C").style.display = 'block'
	d.gI("FIM2").style.display = 'block'
	d.gI("FIM1C").checked=false
	d.gI("FIM1C").style.display = 'none'
	d.gI("FIM1").style.display = 'none'
	}
else
	{
	d.gI("FIM1C").checked=false
	d.gI("FIM1C").style.display = 'none'
	d.gI("FIM1").style.display = 'none'
	d.gI("FIM2C").checked=false
	d.gI("FIM2C").style.display = 'none'
	d.gI("FIM2").style.display = 'none'
	}
if (JOB=="EK"||JOB=="HK"||JOB=="PK")
	{
	d.gI("MR1C").style.display = 'block'
	d.gI("MR1").style.display = 'block'
	d.gI("MR2C").checked=false
	d.gI("MR2C").style.display = 'none'
	d.gI("MR2").style.display = 'none'
	}
else if (JOB=="DA"||JOB=="PA"||JOB=="TK"||JOB=="SW"||JOB=="SK"||JOB=="BD")
	{
	d.gI("MR2C").style.display = 'block'
	d.gI("MR2").style.display = 'block'
	d.gI("MR1C").checked=false
	d.gI("MR1C").style.display = 'none'
	d.gI("MR1").style.display = 'none'
	}
else
	{
	d.gI("MR1C").checked=false
	d.gI("MR1C").style.display = 'none'
	d.gI("MR1").style.display = 'none'
	d.gI("MR2C").checked=false
	d.gI("MR2C").style.display = 'none'
	d.gI("MR2").style.display = 'none'
	}
if (JOB=="EK"||JOB=="HK"||JOB=="PK"||JOB=="BD"||JOB=="SW"||JOB=="DA"||JOB=="PA"||JOB=="TK"||JOB=="SK")
	{
	d.gI("HMK1C").style.display = 'block'
	d.gI("HMK1").style.display = 'block'
	d.gI("HMK2C").checked=false
	d.gI("HMK2C").style.display = 'none'
	d.gI("HMK2").style.display = 'none'
	}
else
	{
	d.gI("HMK1C").checked=false
	d.gI("HMK1C").style.display = 'none'
	d.gI("HMK1").style.display = 'none'
	d.gI("HMK2C").checked=false
	d.gI("HMK2C").style.display = 'none'
	d.gI("HMK2").style.display = 'none'
	}
if (JOB=="EK"||JOB=="HK"||JOB=="PK"||JOB=="BD"||JOB=="SW"||JOB=="DA"||JOB=="PA"||JOB=="TK"||JOB=="SK")
	{
	d.gI("DEA1C").style.display = 'block'
	d.gI("DEA1").style.display = 'block'
	}
else
	{
	d.gI("DEA1C").checked=false
	d.gI("DEA1C").style.display = 'none'
	d.gI("DEA1").style.display = 'none'
	}
if (JOB=="EK"||JOB=="HK"||JOB=="PK"||JOB=="BD")
	{
	d.gI("KSBM1C").style.display = 'block'
	d.gI("KSBM1").style.display = 'block'
	d.gI("KSBM2C").checked=false
	d.gI("KSBM2C").style.display = 'none'
	d.gI("KSBM2").style.display = 'none'
	}
else if (JOB=="DA"||JOB=="PA"||JOB=="TK"||JOB=="SK"||JOB=="SW")
	{
	d.gI("KSBM2C").style.display = 'block'
	d.gI("KSBM2").style.display = 'block'
	d.gI("KSBM1C").checked=false
	d.gI("KSBM1C").style.display = 'none'
	d.gI("KSBM1").style.display = 'none'
	}
else
	{
	d.gI("KSBM1C").checked=false
	d.gI("KSBM1C").style.display = 'none'
	d.gI("KSBM1").style.display = 'none'
	d.gI("KSBM2C").checked=false
	d.gI("KSBM2C").style.display = 'none'
	d.gI("KSBM2").style.display = 'none'
	}
if (JOB=="EK"||JOB=="HK"||JOB=="PK"||JOB=="BD"||JOB=="SW")
	{
	d.gI("SDM1C").style.display = 'block'
	d.gI("SDM1").style.display = 'block'
	d.gI("SDM2C").checked=false
	d.gI("SDM2C").style.display = 'none'
	d.gI("SDM2").style.display = 'none'
	}
else if (JOB=="DA"||JOB=="PA"||JOB=="TK"||JOB=="SK")
	{
	d.gI("SDM2C").style.display = 'block'
	d.gI("SDM2").style.display = 'block'
	d.gI("SDM1C").checked=false
	d.gI("SDM1C").style.display = 'none'
	d.gI("SDM1").style.display = 'none'
	}
else
	{
	d.gI("SDM1C").checked=false
	d.gI("SDM1C").style.display = 'none'
	d.gI("SDM1").style.display = 'none'
	d.gI("SDM2C").checked=false
	d.gI("SDM2C").style.display = 'none'
	d.gI("SDM2").style.display = 'none'
	}
if (JOB=="EFS"||JOB=="SR"||JOB=="HE"||JOB=="RO"||JOB=="PR"||JOB=="AS")
	{
	d.gI("BEV1C").style.display = 'block'
	d.gI("BEV1").style.display = 'block'
	d.gI("BEV2C").checked=false
	d.gI("BEV2C").style.display = 'none'
	d.gI("BEV2").style.display = 'none'
	}
else if (JOB=="PW"||JOB=="TH"||JOB=="AW")
	{
	d.gI("BEV2C").style.display = 'block'
	d.gI("BEV2").style.display = 'block'
	d.gI("BEV1C").checked=false
	d.gI("BEV1C").style.display = 'none'
	d.gI("BEV1").style.display = 'none'
	}
else
	{
	d.gI("BEV1C").checked=false
	d.gI("BEV1C").style.display = 'none'
	d.gI("BEV1").style.display = 'none'
	d.gI("BEV2C").checked=false
	d.gI("BEV2C").style.display = 'none'
	d.gI("BEV2").style.display = 'none'
	}
if (JOB=="EFS"||JOB=="SR"||JOB=="HE"||JOB=="RO"||JOB=="PR"||JOB=="AS"||JOB=="SC")
	{
	d.gI("DGM1C").style.display = 'block'
	d.gI("DGM1").style.display = 'block'
	d.gI("DGM2C").checked=false
	d.gI("DGM2C").style.display = 'none'
	d.gI("DGM2").style.display = 'none'
	}
else if (JOB=="PW"||JOB=="TH"||JOB=="AW"||JOB=="BH")
	{
	d.gI("DGM2C").style.display = 'block'
	d.gI("DGM2").style.display = 'block'
	d.gI("DGM1C").checked=false
	d.gI("DGM1C").style.display = 'none'
	d.gI("DGM1").style.display = 'none'
	}
else
	{
	d.gI("DGM1C").checked=false
	d.gI("DGM1C").style.display = 'none'
	d.gI("DGM1").style.display = 'none'
	d.gI("DGM2C").checked=false
	d.gI("DGM2C").style.display = 'none'
	d.gI("DGM2").style.display = 'none'
	}
if (JOB=="PW"||JOB=="EFS"||JOB=="TH"||JOB=="RO"||JOB=="AW"||JOB=="AS")
	{
	d.gI("BOWM1C").style.display = 'block'
	d.gI("BOWM1").style.display = 'block'
	d.gI("BOWM2C").checked=false
	d.gI("BOWM2C").style.display = 'none'
	d.gI("BOWM2").style.display = 'none'
	}
else if (JOB=="SR"||JOB=="HE"||JOB=="PR")
	{
	d.gI("BOWM2C").style.display = 'block'
	d.gI("BOWM2").style.display = 'block'
	d.gI("BOWM1C").checked=false
	d.gI("BOWM1C").style.display = 'none'
	d.gI("BOWM1").style.display = 'none'
	}
else
	{
	d.gI("BOWM1C").checked=false
	d.gI("BOWM1C").style.display = 'none'
	d.gI("BOWM1").style.display = 'none'
	d.gI("BOWM2C").checked=false
	d.gI("BOWM2C").style.display = 'none'
	d.gI("BOWM2").style.display = 'none'
	}
if (JOB=="WRD"||JOB=="SBF"||JOB=="INF")
	{
	d.gI("CBM1C").style.display = 'block'
	d.gI("CBM1").style.display = 'block'
	d.gI("CBM2C").checked=false
	d.gI("CBM2C").style.display = 'none'
	d.gI("CBM2").style.display = 'none'
	}
else if (JOB=="ARB")
	{
	d.gI("CBM2C").style.display = 'block'
	d.gI("CBM2").style.display = 'block'
	d.gI("CBM1C").checked=false
	d.gI("CBM1C").style.display = 'none'
	d.gI("CBM1").style.display = 'none'
	}
else
	{
	d.gI("CBM1C").checked=false
	d.gI("CBM1C").style.display = 'none'
	d.gI("CBM1").style.display = 'none'
	d.gI("CBM2C").checked=false
	d.gI("CBM2C").style.display = 'none'
	d.gI("CBM2").style.display = 'none'
	}
if (JOB=="TRP"||JOB=="SBM")
	{
	d.gI("ANM1C").style.display = 'block'
	d.gI("ANM1").style.display = 'block'
	d.gI("ANM2C").checked=false
	d.gI("ANM2C").style.display = 'none'
	d.gI("ANM2").style.display = 'none'
	}
else if (JOB=="BKR")
	{
	d.gI("ANM2C").style.display = 'block'
	d.gI("ANM2").style.display = 'block'
	d.gI("ANM1C").checked=false
	d.gI("ANM1C").style.display = 'none'
	d.gI("ANM1").style.display = 'none'
	}
else
	{
	d.gI("ANM1C").checked=false
	d.gI("ANM1C").style.display = 'none'
	d.gI("ANM1").style.display = 'none'
	d.gI("ANM2C").checked=false
	d.gI("ANM2C").style.display = 'none'
	d.gI("ANM2").style.display = 'none'
	}
if (JOB=="WRD"||JOB=="TRP"||JOB=="ARB"||JOB=="BKR")
	{
	d.gI("RPM1C").style.display = 'block'
	d.gI("RPM1").style.display = 'block'
	d.gI("RPM2C").checked=false
	d.gI("RPM2C").style.display = 'none'
	d.gI("RPM2").style.display = 'none'
	}
else if (JOB=="SBM"||JOB=="INM"||JOB=="SBF"||JOB=="INF")
	{
	d.gI("RPM2C").style.display = 'block'
	d.gI("RPM2").style.display = 'block'
	d.gI("RPM1C").checked=false
	d.gI("RPM1C").style.display = 'none'
	d.gI("RPM1").style.display = 'none'
	}
else
	{
	d.gI("RPM1C").checked=false
	d.gI("RPM1C").style.display = 'none'
	d.gI("RPM1").style.display = 'none'
	d.gI("RPM2C").checked=false
	d.gI("RPM2C").style.display = 'none'
	d.gI("RPM2").style.display = 'none'
	}
if (JOB=="EFS"||JOB=="RO"||JOB=="AS")
	{
	d.gI("QS1C").style.display = 'block'
	d.gI("QS1").style.display = 'block'
	d.gI("QS2C").checked=false
	d.gI("QS2C").style.display = 'none'
	d.gI("QS2").style.display = 'none'
	}
else if (JOB=="SR"||JOB=="HE"||JOB=="PR"||JOB=="PW"||JOB=="TH"||JOB=="AW")
	{
	d.gI("QS2C").style.display = 'block'
	d.gI("QS2").style.display = 'block'
	d.gI("QS1C").checked=false
	d.gI("QS1C").style.display = 'none'
	d.gI("QS1").style.display = 'none'
	}
else
	{
	d.gI("QS1C").checked=false
	d.gI("QS1C").style.display = 'none'
	d.gI("QS1").style.display = 'none'
	d.gI("QS2C").checked=false
	d.gI("QS2C").style.display = 'none'
	d.gI("QS2").style.display = 'none'
	}
if (JOB=="BD"||JOB=="GL")
	{
	d.gI("DUALMC").style.display = 'block'
	d.gI("DUALM").style.display = 'block'
	}
else
	{
	d.gI("DUALMC").checked=false
	d.gI("DUALMC").style.display = 'none'
	d.gI("DUALM").style.display = 'none'
	}
if (JOB=="OR")
	{
	d.gI("THM1C").style.display = 'block'
	d.gI("THM1").style.display = 'block'
	d.gI("THM2C").checked=false
	d.gI("THM2C").style.display = 'none'
	d.gI("THM2").style.display = 'none'
	}
else if (JOB=="DE")
	{
	d.gI("THM2C").style.display = 'block'
	d.gI("THM2").style.display = 'block'
	d.gI("THM1C").checked=false
	d.gI("THM1C").style.display = 'none'
	d.gI("THM1").style.display = 'none'
	}
else
	{
	d.gI("THM1C").checked=false
	d.gI("THM1C").style.display = 'none'
	d.gI("THM1").style.display = 'none'
	d.gI("THM2C").checked=false
	d.gI("THM2C").style.display = 'none'
	d.gI("THM2").style.display = 'none'
	}
if (JOB=="WA"||JOB=="GL"||JOB=="OR"||JOB=="AR"||JOB=="SC")
	{
	d.gI("BHP1C").style.display = 'block'
	d.gI("BHP1").style.display = 'block'
	d.gI("BHP2C").checked=false
	d.gI("BHP2C").style.display = 'none'
	d.gI("BHP2").style.display = 'none'
	d.gI("BHP3C").checked=false
	d.gI("BHP3C").style.display = 'none'
	d.gI("BHP3").style.display = 'none'
	}
else if (JOB=="PP"||JOB=="OL"||JOB=="WC")
	{
	d.gI("BHP2C").style.display = 'block'
	d.gI("BHP2").style.display = 'block'
	d.gI("BHP1C").checked=false
	d.gI("BHP1C").style.display = 'none'
	d.gI("BHP1").style.display = 'none'
	d.gI("BHP3C").checked=false
	d.gI("BHP3C").style.display = 'none'
	d.gI("BHP3").style.display = 'none'
	}
else if (JOB=="WD"||JOB=="DE"||JOB=="BH"||JOB=="WS")
	{
	d.gI("BHP3C").style.display = 'block'
	d.gI("BHP3").style.display = 'block'
	d.gI("BHP1C").checked=false
	d.gI("BHP1C").style.display = 'none'
	d.gI("BHP1").style.display = 'none'
	d.gI("BHP2C").checked=false
	d.gI("BHP2C").style.display = 'none'
	d.gI("BHP2").style.display = 'none'
	}
else
	{
	d.gI("BHP1C").checked=false
	d.gI("BHP1C").style.display = 'none'
	d.gI("BHP1").style.display = 'none'
	d.gI("BHP2C").checked=false
	d.gI("BHP2C").style.display = 'none'
	d.gI("BHP2").style.display = 'none'
	d.gI("BHP3C").checked=false
	d.gI("BHP3C").style.display = 'none'
	d.gI("BHP3").style.display = 'none'
	}
if (JOB=="WD"||JOB=="GL")
	{
	d.gI("FFRC").style.display = 'block'
	d.gI("FFR").style.display = 'block'
	}
else
	{
	d.gI("FFRC").checked=false
	d.gI("FFRC").style.display = 'none'
	d.gI("FFR").style.display = 'none'
	}
if (JOB=="WD"||JOB=="GL"||JOB=="WA")
	{
	d.gI("DTWC").style.display = 'block'
	d.gI("DTW").style.display = 'block'
	}
else
	{
	d.gI("DTWC").checked=false
	d.gI("DTWC").style.display = 'none'
	d.gI("DTW").style.display = 'none'
	}
if (JOB=="DA"||JOB=="PA"||JOB=="TK"||JOB=="SK")
	{
	d.gI("FFOC").style.display = 'block'
	d.gI("FFO").style.display = 'block'
	}
else
	{
	d.gI("FFOC").checked=false
	d.gI("FFOC").style.display = 'none'
	d.gI("FFO").style.display = 'none'
	}
if (race=="DF")
	{
	d.gI("SHSC").style.display = 'block'
	d.gI("SHS").style.display = 'block'
	}
else
	{
	d.gI("SHSC").checked=false
	d.gI("SHSC").style.display = 'none'
	d.gI("SHS").style.display = 'none'
	}
if (JOB=="MO")
	{
	d.gI("AGM1C").style.display = 'block'
	d.gI("AGM1").style.display = 'block'
	d.gI("AGM2C").checked=false
	d.gI("AGM2C").style.display = 'none'
	d.gI("AGM2").style.display = 'none'
	}
else if (JOB=="TY")
	{
	d.gI("AGM2C").style.display = 'block'
	d.gI("AGM2").style.display = 'block'
	d.gI("AGM1C").checked=false
	d.gI("AGM1C").style.display = 'none'
	d.gI("AGM1").style.display = 'none'
	}
else
	{
	d.gI("AGM1C").checked=false
	d.gI("AGM1C").style.display = 'none'
	d.gI("AGM1").style.display = 'none'
	d.gI("AGM2C").checked=false
	d.gI("AGM2C").style.display = 'none'
	d.gI("AGM2").style.display = 'none'
	}
if (JOB=="EFS"||JOB=="SR"||JOB=="HE"||JOB=="RO")
	{
	d.gI("CRC1C").style.display = 'block'
	d.gI("CRC1").style.display = 'block'
	d.gI("CRC2C").checked=false
	d.gI("CRC2C").style.display = 'none'
	d.gI("CRC2").style.display = 'none'
	d.gI("CRC3C").checked=false
	d.gI("CRC3C").style.display = 'none'
	d.gI("CRC3").style.display = 'none'
	}
else if (JOB=="TH")
	{
	d.gI("CRC2C").style.display = 'block'
	d.gI("CRC2").style.display = 'block'
	d.gI("CRC1C").checked=false
	d.gI("CRC1C").style.display = 'none'
	d.gI("CRC1").style.display = 'none'
	d.gI("CRC3C").checked=false
	d.gI("CRC3C").style.display = 'none'
	d.gI("CRC3").style.display = 'none'
	}
else if (JOB=="PW")
	{
	d.gI("CRC3C").style.display = 'block'
	d.gI("CRC3").style.display = 'block'
	d.gI("CRC1C").checked=false
	d.gI("CRC1C").style.display = 'none'
	d.gI("CRC1").style.display = 'none'
	d.gI("CRC2C").checked=false
	d.gI("CRC2C").style.display = 'none'
	d.gI("CRC2").style.display = 'none'
	}
else
	{
	d.gI("CRC1C").checked=false
	d.gI("CRC1C").style.display = 'none'
	d.gI("CRC1").style.display = 'none'
	d.gI("CRC2C").checked=false
	d.gI("CRC2C").style.display = 'none'
	d.gI("CRC2").style.display = 'none'
	d.gI("CRC3C").checked=false
	d.gI("CRC3C").style.display = 'none'
	d.gI("CRC3").style.display = 'none'
	}
if (JOB=="MO"||JOB=="HE"||JOB=="RO")
	{
	d.gI("BOA1C").style.display = 'block'
	d.gI("BOA1").style.display = 'block'
	d.gI("BOA2C").checked=false
	d.gI("BOA2C").style.display = 'none'
	d.gI("BOA2").style.display = 'none'
	}
else if (JOB=="TY"||JOB=="TH")
	{
	d.gI("BOA2C").style.display = 'block'
	d.gI("BOA2").style.display = 'block'
	d.gI("BOA1C").checked=false
	d.gI("BOA1C").style.display = 'none'
	d.gI("BOA1").style.display = 'none'
	}
else
	{
	d.gI("BOA1C").checked=false
	d.gI("BOA1C").style.display = 'none'
	d.gI("BOA1").style.display = 'none'
	d.gI("BOA2C").checked=false
	d.gI("BOA2C").style.display = 'none'
	d.gI("BOA2").style.display = 'none'
	}
if (JOB=="OM")
	{
	d.gI("HMO1C").style.display = 'block'
	d.gI("HMO1").style.display = 'block'
	d.gI("HMO2C").checked=false
	d.gI("HMO2C").style.display = 'none'
	d.gI("HMO2").style.display = 'none'
	d.gI("HMO3C").checked=false
	d.gI("HMO3C").style.display = 'none'
	d.gI("HMO3").style.display = 'none'
	d.gI("LMO1C").style.display = 'block'
	d.gI("LMO1").style.display = 'block'
	d.gI("LMO3C").checked=false
	d.gI("LMO3C").style.display = 'none'
	d.gI("LMO3").style.display = 'none'
	d.gI("LMO2C").checked=false
	d.gI("LMO2C").style.display = 'none'
	d.gI("LMO2").style.display = 'none'
	d.gI("RMO1C").style.display = 'block'
	d.gI("RMO1").style.display = 'block'
	d.gI("RMO2C").checked=false
	d.gI("RMO2C").style.display = 'none'
	d.gI("RMO2").style.display = 'none'
	d.gI("RMO3C").checked=false
	d.gI("RMO3C").style.display = 'none'
	d.gI("RMO3").style.display = 'none'
	}
else if (JOB=="OS")
	{
	d.gI("HMO2C").style.display = 'block'
	d.gI("HMO2").style.display = 'block'
	d.gI("HMO3C").checked=false
	d.gI("HMO3C").style.display = 'none'
	d.gI("HMO3").style.display = 'none'
	d.gI("HMO1C").checked=false
	d.gI("HMO1C").style.display = 'none'
	d.gI("HMO1").style.display = 'none'
	d.gI("LMO2C").style.display = 'block'
	d.gI("LMO2").style.display = 'block'
	d.gI("LMO1C").checked=false
	d.gI("LMO1C").style.display = 'none'
	d.gI("LMO1").style.display = 'none'
	d.gI("LMO3C").checked=false
	d.gI("LMO3C").style.display = 'none'
	d.gI("LMO3").style.display = 'none'
	d.gI("RMO2C").style.display = 'block'
	d.gI("RMO2").style.display = 'block'
	d.gI("RMO1C").checked=false
	d.gI("RMO1C").style.display = 'none'
	d.gI("RMO1").style.display = 'none'
	d.gI("RMO3C").checked=false
	d.gI("RMO3C").style.display = 'none'
	d.gI("RMO3").style.display = 'none'
	}
else if (JOB=="WC"||JOB=="OL")
	{
	d.gI("HMO3C").style.display = 'block'
	d.gI("HMO3").style.display = 'block'
	d.gI("HMO2C").checked=false
	d.gI("HMO2C").style.display = 'none'
	d.gI("HMO2").style.display = 'none'
	d.gI("HMO1C").checked=false
	d.gI("HMO1C").style.display = 'none'
	d.gI("HMO1").style.display = 'none'
	d.gI("LMO3C").style.display = 'block'
	d.gI("LMO3").style.display = 'block'
	d.gI("LMO1C").checked=false
	d.gI("LMO1C").style.display = 'none'
	d.gI("LMO1").style.display = 'none'
	d.gI("LMO2C").checked=false
	d.gI("LMO2C").style.display = 'none'
	d.gI("LMO2").style.display = 'none'
	d.gI("RMO3C").style.display = 'block'
	d.gI("RMO3").style.display = 'block'
	d.gI("RMO2C").checked=false
	d.gI("RMO2C").style.display = 'none'
	d.gI("RMO2").style.display = 'none'
	d.gI("RMO1C").checked=false
	d.gI("RMO1C").style.display = 'none'
	d.gI("RMO1").style.display = 'none'
	}
else
	{
	d.gI("HMO1C").checked=false
	d.gI("HMO1C").style.display = 'none'
	d.gI("HMO1").style.display = 'none'
	d.gI("HMO2C").checked=false
	d.gI("HMO2C").style.display = 'none'
	d.gI("HMO2").style.display = 'none'
	d.gI("HMO3C").checked=false
	d.gI("HMO3C").style.display = 'none'
	d.gI("HMO3").style.display = 'none'
	d.gI("LMO1C").checked=false
	d.gI("LMO1C").style.display = 'none'
	d.gI("LMO1").style.display = 'none'
	d.gI("LMO2C").checked=false
	d.gI("LMO2C").style.display = 'none'
	d.gI("LMO2").style.display = 'none'
	d.gI("LMO3C").checked=false
	d.gI("LMO3C").style.display = 'none'
	d.gI("LMO3").style.display = 'none'
	d.gI("RMO1C").checked=false
	d.gI("RMO1C").style.display = 'none'
	d.gI("RMO1").style.display = 'none'
	d.gI("RMO2C").checked=false
	d.gI("RMO2C").style.display = 'none'
	d.gI("RMO2").style.display = 'none'
	d.gI("RMO3C").checked=false
	d.gI("RMO3C").style.display = 'none'
	d.gI("RMO3").style.display = 'none'
	}
if (JOB=="PP")
	{
	d.gI("HMPC").style.display = 'block'
	d.gI("HMP").style.display = 'block'
	}
else
	{
	d.gI("HMPC").checked=false
	d.gI("HMPC").style.display = 'none'
	d.gI("HMP").style.display = 'none'
	}
if (JOB=="WA"||JOB=="OR"||JOB=="AR"||JOB=="SC")
	{
	d.gI("HMW1C").style.display = 'block'
	d.gI("HMW1").style.display = 'block'
	d.gI("HMW2C").checked=false
	d.gI("HMW2C").style.display = 'none'
	d.gI("HMW2").style.display = 'none'
	d.gI("LMW1C").style.display = 'block'
	d.gI("LMW1").style.display = 'block'
	d.gI("LMW2C").checked=false
	d.gI("LMW2C").style.display = 'none'
	d.gI("LMW2").style.display = 'none'
	d.gI("FHR1C").style.display = 'block'
	d.gI("FHR1").style.display = 'block'
	d.gI("FHR2C").checked=false
	d.gI("FHR2C").style.display = 'none'
	d.gI("FHR2").style.display = 'none'
	}
else if (JOB=="WD"||JOB=="GL"||JOB=="DE"||JOB=="WS"||JOB=="BH")
	{
	d.gI("HMW2C").style.display = 'block'
	d.gI("HMW2").style.display = 'block'
	d.gI("HMW1C").checked=false
	d.gI("HMW1C").style.display = 'none'
	d.gI("HMW1").style.display = 'none'
	d.gI("LMW2C").style.display = 'block'
	d.gI("LMW2").style.display = 'block'
	d.gI("LMW1C").checked=false
	d.gI("LMW1C").style.display = 'none'
	d.gI("LMW1").style.display = 'none'
	d.gI("FHR2C").style.display = 'block'
	d.gI("FHR2").style.display = 'block'
	d.gI("FHR1C").checked=false
	d.gI("FHR1C").style.display = 'none'
	d.gI("FHR1").style.display = 'none'
	}
else
	{
	d.gI("HMW1C").checked=false
	d.gI("HMW1C").style.display = 'none'
	d.gI("HMW1").style.display = 'none'
	d.gI("HMW2C").checked=false
	d.gI("HMW2C").style.display = 'none'
	d.gI("HMW2").style.display = 'none'
	d.gI("LMW1C").checked=false
	d.gI("LMW1C").style.display = 'none'
	d.gI("LMW1").style.display = 'none'
	d.gI("LMW2C").checked=false
	d.gI("LMW2C").style.display = 'none'
	d.gI("LMW2").style.display = 'none'
	d.gI("FHR1C").checked=false
	d.gI("FHR1C").style.display = 'none'
	d.gI("FHR1").style.display = 'none'
	d.gI("FHR2C").checked=false
	d.gI("FHR2C").style.display = 'none'
	d.gI("FHR2").style.display = 'none'
	}
if (JOB=="EFS"||JOB=="RO"||JOB=="AS"||JOB=="MO")
	{
	d.gI("LMR1C").style.display = 'block'
	d.gI("LMR1").style.display = 'block'
	d.gI("LMR2C").checked=false
	d.gI("LMR2C").style.display = 'none'
	d.gI("LMR2").style.display = 'none'
	}
else if (JOB=="PW"||JOB=="SR"||JOB=="TH"||JOB=="HE"||JOB=="AW"||JOB=="PR"||JOB=="TY")
	{
	d.gI("LMR2C").style.display = 'block'
	d.gI("LMR2").style.display = 'block'
	d.gI("LMR1C").checked=false
	d.gI("LMR1C").style.display = 'none'
	d.gI("LMR1").style.display = 'none'
	}
else
	{
	d.gI("LMR1C").checked=false
	d.gI("LMR1C").style.display = 'none'
	d.gI("LMR1").style.display = 'none'
	d.gI("LMR2C").checked=false
	d.gI("LMR2C").style.display = 'none'
	d.gI("LMR2").style.display = 'none'
	}
if (JOB=="TRP"||JOB=="WRD")
	{
	d.gI("LMK1C").style.display = 'block'
	d.gI("LMK1").style.display = 'block'
	d.gI("LMK2C").checked=false
	d.gI("LMK2C").style.display = 'none'
	d.gI("LMK2").style.display = 'none'
	}
else if (JOB=="BKR"||JOB=="SBM"||JOB=="INM"||JOB=="SBF"||JOB=="ARB"||JOB=="INF")
	{
	d.gI("LMK2C").style.display = 'block'
	d.gI("LMK2").style.display = 'block'
	d.gI("LMK1C").checked=false
	d.gI("LMK1C").style.display = 'none'
	d.gI("LMK1").style.display = 'none'
	}
else
	{
	d.gI("LMK1C").checked=false
	d.gI("LMK1C").style.display = 'none'
	d.gI("LMK1").style.display = 'none'
	d.gI("LMK2C").checked=false
	d.gI("LMK2C").style.display = 'none'
	d.gI("LMK2").style.display = 'none'
	}
if (JOB=="EFS"||JOB=="RO"||JOB=="AS")
	{
	d.gI("ACRM1C").style.display = 'block'
	d.gI("ACRM1").style.display = 'block'
	d.gI("ACRM2C").checked=false
	d.gI("ACRM2C").style.display = 'none'
	d.gI("ACRM2").style.display = 'none'
	}
else if (JOB=="PW"||JOB=="SR"||JOB=="TH"||JOB=="HE"||JOB=="AW"||JOB=="PR")
	{
	d.gI("ACRM2C").style.display = 'block'
	d.gI("ACRM2").style.display = 'block'
	d.gI("ACRM1C").checked=false
	d.gI("ACRM1C").style.display = 'none'
	d.gI("ACRM1").style.display = 'none'
	}
else
	{
	d.gI("ACRM1C").checked=false
	d.gI("ACRM1C").style.display = 'none'
	d.gI("ACRM1").style.display = 'none'
	d.gI("ACRM2C").checked=false
	d.gI("ACRM2C").style.display = 'none'
	d.gI("ACRM2").style.display = 'none'
	}
if (JOB=="CL"||JOB=="EO"||JOB=="SO")
	{
	d.gI("LMH1C").style.display = 'block'
	d.gI("LMH1").style.display = 'block'
	d.gI("LMH2C").checked=false
	d.gI("LMH2C").style.display = 'none'
	d.gI("LMH2").style.display = 'none'
	d.gI("RMH1C").style.display = 'block'
	d.gI("RMH1").style.display = 'block'
	d.gI("RMH2C").checked=false
	d.gI("RMH2C").style.display = 'none'
	d.gI("RMH2").style.display = 'none'
	}
else if (JOB=="PP"||JOB=="BI"||JOB=="EE"||JOB=="SHE")
	{
	d.gI("LMH2C").style.display = 'block'
	d.gI("LMH2").style.display = 'block'
	d.gI("LMH1C").checked=false
	d.gI("LMH1C").style.display = 'none'
	d.gI("LMH1").style.display = 'none'
	d.gI("RMH2C").style.display = 'block'
	d.gI("RMH2").style.display = 'block'
	d.gI("RMH1C").checked=false
	d.gI("RMH1C").style.display = 'none'
	d.gI("RMH1").style.display = 'none'
	}
else
	{
	d.gI("LMH1C").checked=false
	d.gI("LMH1C").style.display = 'none'
	d.gI("LMH1").style.display = 'none'
	d.gI("LMH2C").checked=false
	d.gI("LMH2C").style.display = 'none'
	d.gI("LMH2").style.display = 'none'
	d.gI("RMH1C").checked=false
	d.gI("RMH1C").style.display = 'none'
	d.gI("RMH1").style.display = 'none'
	d.gI("RMH2C").checked=false
	d.gI("RMH2C").style.display = 'none'
	d.gI("RMH2").style.display = 'none'
	}
if (JOB=="ELS"||JOB=="PS"||JOB=="WL")
	{
	d.gI("LMSC").style.display = 'block'
	d.gI("LMS").style.display = 'block'
	}
else
	{
	d.gI("LMSC").checked=false
	d.gI("LMSC").style.display = 'none'
	d.gI("LMS").style.display = 'none'
	}
if (JOB=="WI"||JOB=="DW"||JOB=="EW")
	{
	d.gI("RMN1C").style.display = 'block'
	d.gI("RMN1").style.display = 'block'
	d.gI("RMN2C").checked=false
	d.gI("RMN2C").style.display = 'none'
	d.gI("RMN2").style.display = 'none'
	}
else if (JOB=="NE"||JOB=="WL"||JOB=="SOR"||JOB=="SPH"||JOB=="PS"||JOB=="SPS"||JOB=="ELS")
	{
	d.gI("RMN2C").style.display = 'block'
	d.gI("RMN2").style.display = 'block'
	d.gI("RMN1C").checked=false
	d.gI("RMN1C").style.display = 'none'
	d.gI("RMN1").style.display = 'none'
	}
else
	{
	d.gI("RMN1C").checked=false
	d.gI("RMN1C").style.display = 'none'
	d.gI("RMN1").style.display = 'none'
	d.gI("RMN2C").checked=false
	d.gI("RMN2C").style.display = 'none'
	d.gI("RMN2").style.display = 'none'
	}
if (JOB=="HE")
	{
	d.gI("QOHC").style.display = 'block'
	d.gI("QOH").style.display = 'block'
	}
else
	{
	d.gI("QOHC").checked=false
	d.gI("QOHC").style.display = 'none'
	d.gI("QOH").style.display = 'none'
	}
if (JOB=="SPS")
	{
	d.gI("MRGC").style.display = 'block'
	d.gI("MRG").style.display = 'block'
	}
else
	{
	d.gI("MRGC").checked=false
	d.gI("MRGC").style.display = 'none'
	d.gI("MRG").style.display = 'none'
	}
if (JOB=="SOR"||JOB=="SPH"||JOB=="SPS")
	{
	d.gI("CLMC").style.display = 'block'
	d.gI("CLM").style.display = 'block'
	}
else
	{
	d.gI("CLMC").checked=false
	d.gI("CLMC").style.display = 'none'
	d.gI("CLM").style.display = 'none'
	}
if (JOB=="PW"||JOB=="SR"||JOB=="TH"||JOB=="HE"||JOB=="AW"||JOB=="PR")
	{
	d.gI("ESP2C").style.display = 'block'
	d.gI("ESP2").style.display = 'block'
	d.gI("ESP1C").checked=false
	d.gI("ESP1C").style.display = 'none'
	d.gI("ESP1").style.display = 'none'
	}
else if (JOB=="EFS"||JOB=="AS"||JOB=="RO")
	{
	d.gI("ESP1C").style.display = 'block'
	d.gI("ESP1").style.display = 'block'
	d.gI("ESP2C").checked=false
	d.gI("ESP2C").style.display = 'none'
	d.gI("ESP2").style.display = 'none'
	}
else
	{
	d.gI("ESP2C").checked=false
	d.gI("ESP2C").style.display = 'none'
	d.gI("ESP2").style.display = 'none'
	d.gI("ESP1C").checked=false
	d.gI("ESP1C").style.display = 'none'
	d.gI("ESP1").style.display = 'none'
	}
if (JOB=="WA"||JOB=="RO"||JOB=="OR"||JOB=="SC"||JOB=="AR")
	{
	d.gI("VTF1C").style.display = 'block'
	d.gI("VTF1").style.display = 'block'
	d.gI("VTF2C").checked=false
	d.gI("VTF2C").style.display = 'none'
	d.gI("VTF2").style.display = 'none'
	}
else if (JOB=="GL"||JOB=="WD"||JOB=="TH"||JOB=="HE"||JOB=="DE"||JOB=="BH"||JOB=="WS")
	{
	d.gI("VTF2C").style.display = 'block'
	d.gI("VTF2").style.display = 'block'
	d.gI("VTF1C").checked=false
	d.gI("VTF1C").style.display = 'none'
	d.gI("VTF1").style.display = 'none'
	}
else
	{
	d.gI("VTF2C").checked=false
	d.gI("VTF2C").style.display = 'none'
	d.gI("VTF2").style.display = 'none'
	d.gI("VTF1C").checked=false
	d.gI("VTF1C").style.display = 'none'
	d.gI("VTF1").style.display = 'none'
	}
if (JOB=="PR"||JOB=="HE"||JOB=="RO"||JOB=="AS")
	{
	d.gI("CRP1C").style.display = 'block'
	d.gI("CRP1").style.display = 'block'
	d.gI("CRP2C").checked=false
	d.gI("CRP2C").style.display = 'none'
	d.gI("CRP2").style.display = 'none'
	d.gI("CRP3C").checked=false
	d.gI("CRP3C").style.display = 'none'
	d.gI("CRP3").style.display = 'none'
	}
else if (JOB=="TH")
	{
	d.gI("CRP2C").style.display = 'block'
	d.gI("CRP2").style.display = 'block'
	d.gI("CRP1C").checked=false
	d.gI("CRP1C").style.display = 'none'
	d.gI("CRP1").style.display = 'none'
	d.gI("CRP3C").checked=false
	d.gI("CRP3C").style.display = 'none'
	d.gI("CRP3").style.display = 'none'
	}
else if (JOB=="AW")
	{
	d.gI("CRP3C").style.display = 'block'
	d.gI("CRP3").style.display = 'block'
	d.gI("CRP2C").checked=false
	d.gI("CRP2C").style.display = 'none'
	d.gI("CRP2").style.display = 'none'
	d.gI("CRP1C").checked=false
	d.gI("CRP1C").style.display = 'none'
	d.gI("CRP1").style.display = 'none'
	}
else
	{
	d.gI("CRP1C").checked=false
	d.gI("CRP1C").style.display = 'none'
	d.gI("CRP1").style.display = 'none'
	d.gI("CRP2C").checked=false
	d.gI("CRP2C").style.display = 'none'
	d.gI("CRP2").style.display = 'none'
	d.gI("CRP3C").checked=false
	d.gI("CRP3C").style.display = 'none'
	d.gI("CRP3").style.display = 'none'
	}
if (trans=="DHEALER")
	{
	d.gI("RES1").style.display = 'block'
	d.gI("RES2").style.display = 'none'
	d.gI("RES3").style.display = 'none'
	d.gI("RES4").style.display = 'none'
	d.gI("RES5").style.display = 'block'
	d.gI("RES6").style.display = 'none'
	d.gI("RES0").style.display = 'none'
	d.gI("HEALCALC").style.display = 'block'
	d.gI("HEALCALC").style.display = 'block'
	}
else if (trans=="HERETIC")
	{
	d.gI("RES1").style.display = 'block'
	d.gI("RES2").style.display = 'none'
	d.gI("RES3").style.display = 'none'
	d.gI("RES4").style.display = 'none'
	d.gI("RES5").style.display = 'none'
	d.gI("RES6").style.display = 'block'
	d.gI("RES0").style.display = 'none'
	d.gI("HEALCALC").style.display = 'block'
	d.gI("HEALCALC").style.display = 'block'
	}
else if (JOB=="BI")
	{
	d.gI("RES1").style.display = 'block'
	d.gI("RES2").style.display = 'block'
	d.gI("RES3").style.display = 'none'
	d.gI("RES4").style.display = 'none'
	d.gI("RES5").style.display = 'none'
	d.gI("RES6").style.display = 'none'
	d.gI("RES0").style.display = 'block'
	d.gI("HEALCALC").style.display = 'block'
	d.gI("HEALCALC").style.display = 'block'
	}
else if (JOB=="EE")
	{
	d.gI("RES1").style.display = 'block'
	d.gI("RES2").style.display = 'none'
	d.gI("RES3").style.display = 'block'
	d.gI("RES4").style.display = 'none'
	d.gI("RES5").style.display = 'none'
	d.gI("RES6").style.display = 'none'
	d.gI("RES0").style.display = 'none'
	d.gI("HEALCALC").style.display = 'block'
	d.gI("HEALCALC").style.display = 'block'
	}
else if (JOB=="SHE"||JOB=="PP"||JOB=="SO"||JOB=="EO"||JOB=="CL")
	{
	d.gI("RES1").style.display = 'block'
	d.gI("RES2").style.display = 'none'
	d.gI("RES3").style.display = 'none'
	d.gI("RES4").style.display = 'block'
	d.gI("RES5").style.display = 'none'
	d.gI("RES6").style.display = 'none'
	d.gI("RES0").style.display = 'none'
	d.gI("HEALCALC").style.display = 'block'
	d.gI("HEALCALC").style.display = 'block'
	}
else
	{
	d.gI("RES1").style.display = 'none'
	d.gI("RES2").style.display = 'none'
	d.gI("RES3").style.display = 'none'
	d.gI("RES4").style.display = 'none'
	d.gI("RES5").style.display = 'none'
	d.gI("RES6").style.display = 'none'
	d.gI("RES0").style.display = 'none'
	d.gI("HEALCALC").style.display = 'block'
	d.gI("HEALCALC").style.display = 'block'
	}
if (JOB=="PA"||JOB=="DA"||JOB=="TK"||JOB=="SK")
	{
	d.gI("KNTC").style.display = 'block'
	d.gI("KNT").style.display = 'block'
	}
else
	{
	d.gI("KNTC").checked=false
	d.gI("KNTC").style.display = 'none'
	d.gI("KNT").style.display = 'none'
	}
if (JOB=="GL"||JOB=="WD"||JOB=="BH"||JOB=="WS"||JOB=="TY"||JOB=="DE")
	{
	d.gI("MOCC").style.display = 'block'
	d.gI("MOC").style.display = 'block'
	}
else
	{
	d.gI("MOCC").checked=false
	d.gI("MOCC").style.display = 'none'
	d.gI("MOC").style.display = 'none'
	}
if (JOB=="AW"||JOB=="TH"||JOB=="PW")
	{
	d.gI("ASSC").style.display = 'block'
	d.gI("ASS").style.display = 'block'
	}
else
	{
	d.gI("ASSC").checked=false
	d.gI("ASSC").style.display = 'none'
	d.gI("ASS").style.display = 'none'
	}
if (JOB=="NE")
	{
	d.gI("NECC").style.display = 'block'
	d.gI("NEC").style.display = 'block'
	}
else
	{
	d.gI("NECC").checked=false
	d.gI("NECC").style.display = 'none'
	d.gI("NEC").style.display = 'none'
	}
if (JOB=="SOR"||JOB=="SPH"||JOB=="SPS")
	{
	d.gI("ARLC").style.display = 'block'
	d.gI("ARL").style.display = 'block'
	}
else
	{
	d.gI("ARLC").checked=false
	d.gI("ARLC").style.display = 'none'
	d.gI("ARL").style.display = 'none'
	}
if (JOB=="PS"||JOB=="WL"||JOB=="ELS")
	{
	d.gI("SMLC").style.display = 'block'
	d.gI("SML").style.display = 'block'
	}
else
	{
	d.gI("SMLC").checked=false
	d.gI("SMLC").style.display = 'none'
	d.gI("SML").style.display = 'none'
	}
if (JOB=="BI"||JOB=="SHE"||JOB=="EE")
	{
	d.gI("INVC").style.display = 'block'
	d.gI("INV").style.display = 'block'
	}
else
	{
	d.gI("INVC").checked=false
	d.gI("INVC").style.display = 'none'
	d.gI("INV").style.display = 'none'
	}
if (JOB=="WRD"||JOB=="TRP"||JOB=="SBF"||JOB=="SBM"||JOB=="INM"||JOB=="INF"||JOB=="BKR"||JOB=="ARB")
	{
	d.gI("HDMC").style.display = 'block'
	d.gI("HDM").style.display = 'block'
	}
else
	{
	d.gI("HDMC").checked=false
	d.gI("HDMC").style.display = 'none'
	d.gI("HDM").style.display = 'none'
	}
if (JOB=="DA"||JOB=="PA"||JOB=="TK"||JOB=="SK")
	{
	d.gI("VENC").style.display = 'block'
	d.gI("VEN").style.display = 'block'
	d.gI("AMAC").style.display = 'block'
	d.gI("AMA").style.display = 'block'
	}
else
	{
	d.gI("VENC").checked=false
	d.gI("VENC").style.display = 'none'
	d.gI("VEN").style.display = 'none'
	d.gI("AMAC").checked=false
	d.gI("AMAC").style.display = 'none'
	d.gI("AMA").style.display = 'none'
	}
if (JOB=="DA"||JOB=="PA"||JOB=="TK"||JOB=="SK")
	{
	d.gI("BMRC").style.display = 'block'
	d.gI("BMR").style.display = 'block'
	}
else
	{
	d.gI("BMRC").checked=false
	d.gI("BMRC").style.display = 'none'
	d.gI("BMR").style.display = 'none'
	}
if (JOB=="TRP"||JOB=="BKR"||JOB=="SBM"||JOB=="INM")
	{
	d.gI("SSHC").style.display = 'block'
	d.gI("SSH").style.display = 'block'
	}
else
	{
	d.gI("SSHC").checked=false
	d.gI("SSHC").style.display = 'none'
	d.gI("SSH").style.display = 'none'
	}
if (JOB=="WRD"||JOB=="SBF"||JOB=="INF"||JOB=="ARB")
	{
	d.gI("UES1C").style.display = 'block'
	d.gI("UES1").style.display = 'block'
	}
else
	{
	d.gI("UES1C").checked=false
	d.gI("UES1C").style.display = 'none'
	d.gI("UES1").style.display = 'none'
	}
if (JOB=="ARB"||JOB=="BKR")
	{
	d.gI("SBRC").style.display = 'block'
	d.gI("SBR").style.display = 'block'
	}
else
	{
	d.gI("SBRC").checked=false
	d.gI("SBRC").style.display = 'none'
	d.gI("SBR").style.display = 'none'
	}
if (JOB=="ARB")
	{
	d.gI("SHPC").style.display = 'block'
	d.gI("SHP").style.display = 'block'
	d.gI("PRNC").style.display = 'block'
	d.gI("PRN").style.display = 'block'
	}
else
	{
	d.gI("SHPC").checked=false
	d.gI("SHPC").style.display = 'none'
	d.gI("SHP").style.display = 'none'
	d.gI("PRNC").checked=false
	d.gI("PRNC").style.display = 'none'
	d.gI("PRN").style.display = 'none'
	}
if (race=="KM"||race=="KF")
	{
	d.gI("PRDC").style.display = 'block'
	d.gI("PRD").style.display = 'block'
	}
else
	{
	d.gI("PRDC").checked=false
	d.gI("PRDC").style.display = 'none'
	d.gI("PRD").style.display = 'none'
	}
if (JOB=="BKR")
	{
	d.gI("TBKC").style.display = 'block'
	d.gI("TBK").style.display = 'block'
	d.gI("BLPC").style.display = 'block'
	d.gI("BLP").style.display = 'block'
	}
else
	{
	d.gI("TBKC").checked=false
	d.gI("TBKC").style.display = 'none'
	d.gI("TBK").style.display = 'none'
	d.gI("BLPC").checked=false
	d.gI("BLPC").style.display = 'none'
	d.gI("BLP").style.display = 'none'
	}
if (JOB=="TRP"||JOB=="SBM"||JOB=="INM"||JOB=="WRD"||JOB=="SBF"||JOB=="ARB"||JOB=="INF"||JOB=="BKR")
	{
	d.gI("FRS1C").style.display = 'block'
	d.gI("FRS1").style.display = 'block'
	}
else
	{
	d.gI("FRS1C").checked=false
	d.gI("FRS1C").style.display = 'none'
	d.gI("FRS1").style.display = 'none'
	}
}

//Heal Hide/Unhide Stuff
function healskills()
{
var HTY=d.gI("HLT").value
var HTYPE=HEALTYPEARRAY[HTY]
for (i=0;i<22;i++)
	{
	d.gI(HEALTYPEARRAY[i]).style.display = 'none'
	}
for (i=0;i<22;i++)
	{
	if (HTY==i)
	d.gI(HTYPE).style.display = 'block'
	}
}