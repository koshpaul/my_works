function sleep() {
  return 0;
}

function sec()
{
  var currenttr_id = $("#addChargeOnButton").parent().parent().attr("id");
  var alcinput;
  
  if (currenttr_id==undefined)
  	{
  		alcinput=$("#query_inn");
  	}
  	else
  	{
  		alcinput=$("#"+currenttr_id+" .TDstatus1 input");
  	}

  alcinput.attr('maxlength',200);
  var alccode = alcinput.val();
  if (((alccode.indexOf('{')>=0) && (alccode.indexOf('}')>=0)) || ((alccode.indexOf('Х')>=0) && (alccode.indexOf('Ъ')>=0)))
    {
      if (alccode.indexOf('Х')>=0)
        {
        	var tmpcode;
			var tmpchar;
        	var i;
        	tmpcode='';
        	for (i = 0; i < alccode.length; i++) 
        	  {
        	  	tmpchar=alccode.substr(i,1);
        	  	switch (alccode.substr(i,1))
        	  	  {
        	  	  	case 'Й': tmpchar='Q';break;
        	  	  	case 'Ц': tmpchar='W';break;
        	  	  	case 'у': tmpchar='E';break;
        	  	  	case 'К': tmpchar='R';break;
        	  	  	case 'Е': tmpchar='T';break;
        	  	  	case 'Н': tmpchar='Y';break;
        	  	  	case 'Г': tmpchar='U';break;
        	  	  	case 'Ш': tmpchar='I';break;
        	  	  	case 'Щ': tmpchar='O';break;
        	  	  	case 'З': tmpchar='P';break;
        	  	  	case 'Ф': tmpchar='A';break;
        	  	  	case 'Ы': tmpchar='S';break;
        	  	  	case 'В': tmpchar='D';break;
        	  	  	case 'А': tmpchar='F';break;
        	  	  	case 'П': tmpchar='G';break;
        	  	  	case 'Р': tmpchar='H';break;
        	  	  	case 'О': tmpchar='J';break;
        	  	  	case 'Л': tmpchar='K';break;
        	  	  	case 'Д': tmpchar='L';break;
        	  	  	case 'Я': tmpchar='Z';break;
        	  	  	case 'Ч': tmpchar='X';break;
        	  	  	case 'С': tmpchar='C';break;
        	  	  	case 'М': tmpchar='V';break;
        	  	  	case 'И': tmpchar='B';break;
        	  	  	case 'Т': tmpchar='N';break;
					case 'Ь': tmpchar='M';break;
					case 'Х': tmpchar='{';break;
					case 'Ъ': tmpchar='}';break;
					default:;
        	  	  }
        	  	 tmpcode=tmpcode+tmpchar;


        	  }
        	  alccode=tmpcode;

        }
      var new36code = alccode.substr(alccode.lastIndexOf('{')+1,alccode.lastIndexOf('}')-alccode.lastIndexOf('{')-1);
      if (new36code.length==68)
	{
		//alert(new36code.length);
		var nc=0;
		var itogo=new BigNumber(0);
		new36code=new36code.substr(7,12);
		var k=new36code.length;


       	for (i = 0; i < new36code.length; i++) 
       	  {
       	  	switch (new36code.substr(i,1))
       	  		{
       	  			case '0': nc=0;break;
       	  			case '1': nc=1;break;
       	  			case '2': nc=2;break;
       	  			case '3': nc=3;break;
       	  			case '4': nc=4;break;
       	  			case '5': nc=5;break;
       	  			case '6': nc=6;break;
       	  			case '7': nc=7;break;
       	  			case '8': nc=8;break;
       	  			case '9': nc=9;break;
       	  			case 'A': nc=10;break;
       	  			case 'B': nc=11;break;
       	  			case 'C': nc=12;break;
       	  			case 'D': nc=13;break;
       	  			case 'E': nc=14;break;
       	  			case 'F': nc=15;break;
       	  			case 'G': nc=16;break;
       	  			case 'H': nc=17;break;
       	  			case 'I': nc=18;break;
       	  			case 'J': nc=19;break;
       	  			case 'K': nc=20;break;
       	  			case 'L': nc=21;break;
       	  			case 'M': nc=22;break;
       	  			case 'N': nc=23;break;
       	  			case 'O': nc=24;break;
       	  			case 'P': nc=25;break;
       	  			case 'Q': nc=26;break;
       	  			case 'R': nc=27;break;
       	  			case 'S': nc=28;break;
       	  			case 'T': nc=29;break;
       	  			case 'U': nc=30;break;
       	  			case 'V': nc=31;break;
       	  			case 'W': nc=32;break;
       	  			case 'X': nc=33;break;
       	  			case 'Y': nc=34;break;
       	  			case 'Z': nc=35;break;
       	  			default:;
       	  		}
       	  	k--;
       	  	
       	  	itogo=itogo.plus(new BigNumber(36).toPower(k).times(nc));
       	  
       	  }
        	 var itogotxt=String(itogo);
        	 while (itogotxt.length<19)
        	 	{
        	 		itogotxt='0'+itogotxt;
        	 	}
        	  alcinput.val(itogotxt);
        	



	}
    }

    	
} 

setInterval(sec, 100);

