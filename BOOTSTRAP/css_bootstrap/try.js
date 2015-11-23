function colors() {
	var val1,val2,val3,val4;
	var t=document.getElementsByClassName('ele1');
	var u=document.getElementsByClassName('ele2');
	var v=document.getElementsByClassName('ele3');
	var w=document.getElementsByClassName('ele5');

	var value = Math.floor((Math.random() * 4) + 1);
	val1=value;
	//var last =setcookie("last",value);
			for(var i=0; i<u.length; i++) { 
  			u[i].style.background="#4a2390";
			}
			for(var i=0; i<v.length; i++) { 
  			v[i].style.background="#4a2390";
			}
			for(var i=0; i<w.length; i++) { 
  			w[i].style.background="#4a2390";
			}

		switch(value) {
			case 1 :
			for(var i=0; i<t.length; i++) { 
  			t[i].style.background="#4a2390";
			}
			for(var i=0; i<u.length; i++) { 
  			u[i].style.background="limegreen";
			}
			for(var i=0; i<v.length; i++) { 
  			v[i].style.background="#9fff91";
			}
			for(var i=0; i<w.length; i++) { 
  			w[i].style.background="#145";
			}
			break;
			case 2 :
			for(var i=0; i<t.length; i++) { 
  			t[i].style.background="limegreen";
			}
			for(var i=0; i<u.length; i++) { 
  			u[i].style.background="#4a2390";
			}
			for(var i=0; i<v.length; i++) { 
  			v[i].style.background="#9fff91";
			}
			for(var i=0; i<w.length; i++) { 
  			w[i].style.background="#145";
			}
			break;
			case 3 :
			for(var i=0; i<t.length; i++) { 
  			t[i].style.background="#9fff91";
			}
			for(var i=0; i<u.length; i++) { 
  			u[i].style.background="limegreen";
			}
			for(var i=0; i<v.length; i++) { 
  			v[i].style.background="#4a2390";
			}
			for(var i=0; i<w.length; i++) { 
  			w[i].style.background="#145";
			}
			default :
			for(var i=0; i<t.length; i++) { 
  			t[i].style.background="#145";
			}
			for(var i=0; i<u.length; i++) { 
  			u[i].style.background="limegreen";
			}
			for(var i=0; i<v.length; i++) { 
  			v[i].style.background="#9fff91";
			}
			for(var i=0; i<w.length; i++) { 
  			w[i].style.background="#4a2390";
			}
		


	}

	



		
	/*
	if(value>2){
		for(var i=0; i<t.length; i++) { 
  			t[i].style.background="green";
			}
	}

	else
	{
for(var i=0; i<t.length; i++) { 
  			t[i].style.background="pink";
			}
}
*/
}