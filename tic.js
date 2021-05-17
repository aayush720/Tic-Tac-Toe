
var z=9;
var a=[];
var p=[];
var m=[];
var flag=0;
var flags=0;
function fun(event,n)
{

if(!a.includes(n))
{
if(z%2!=0)
{
event.innerHTML='++';
p.push(n);
console.log("Plus");
}
else
{
event.innerHTML='--';
m.push(n);
console.log("minus");
}
a.push(n);
a.sort();
}

z-=1;
}

function show()
{

m.sort();
p.sort();
var a=m.toString();
var b=p.toString();
var r=a.replace(/,/g,'');
console.log(r);
var s=b.replace(/,/g,'');

console.log(s);
if(z<=0){
console.log(z);
if(/3\d*5\d*7/.test(r)||/1\d*4\d*7/.test(r)||/1\d*5\d*9/.test(r)||/2\d*5\d*8/.test(r)||/3\d*6\d*9/.test(r)||/123/.test(r)||/456/.test(r)||/789/.test(r))
{flag=1;
console.log("minusss");
}
if(/3\d*5\d*7/.test(s)||/1\d*4\d*7/.test(s)||/1\d*5\d*9/.test(s)||/2\d*5\d*8/.test(s)||/3\d*6\d*9/.test(s)||/123/.test(s)||/456/.test(s)||/789/.test(s))
{flags=1;
console.log("plusss");
}
if(flag==0&&flags==0||flag==1&flags==1)
    document.getElementById("demo").innerHTML="NO ONE WIN";
else if(flag==1)document.getElementById("demo").innerHTML="MINUS WIN";

else document.getElementById("demo").innerHTML="PLUS WIN";

}
else 
document.getElementById("demo").innerHTML="Please complete first";


}
