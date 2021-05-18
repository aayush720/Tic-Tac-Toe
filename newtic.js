var z=9;
var a=[];
var p=[];
var m=[];
var flag=0;
var flags=0;
function fun(event,n)
{
if(!a.includes(n)){
if(z%2!=0)
{
event.innerHTML='++';
p.push(n);   //here only ++
p.sort();
var b=p.toString();
var s=b.replace(/,/g,'');
console.log("Plus");
if(/3\d*5\d*7/.test(s)||/1\d*4\d*7/.test(s)||/1\d*5\d*9/.test(s)||/2\d*5\d*8/.test(s)||/3\d*6\d*9/.test(s)||/123/.test(s)||/456/.test(s)||/789/.test(s))
{flags=1;
console.log("plusss");
document.getElementById("demo").innerHTML="Hurray ,PLUS USER WIN";
exit(1);

}
}
else
{
event.innerHTML='--';
m.push(n);    //here only --
m.sort();
var ab=m.toString();
var r=ab.replace(/,/g,'');
console.log("minus");
if(/3\d*5\d*7/.test(r)||/1\d*4\d*7/.test(r)||/1\d*5\d*9/.test(r)||/2\d*5\d*8/.test(r)||/3\d*6\d*9/.test(r)||/123/.test(r)||/456/.test(r)||/789/.test(r))
{flag=1;
console.log("minusss");
document.getElementById("demo").innerHTML="urray, MINUS USER WIN ";
exit(1);
}
}
a.push(n);  a.sort();//for all value write here
z-=1;
}
else 
{document.getElementById("demo").innerHTML="OOPS! Already Filled  ";
}


if(z<=0)
	document.getElementById("demo").innerHTML="OOPS No ONE WIN";
}




