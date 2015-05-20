var flag=0,a,b,c;
function calculate(value) 
{
if(flag==0)
{
b=parseInt(value);
a=f1.t1.value;
document.f1.t1.value='';
flag=1;
}
else
{
c=f1.t1.value;
document.f1.t1.value='';
if(b==1)
{
var d=parseFloat(a)+parseFloat(c);
document.f1.t1.value=d;
}
else if(b==2)
{
var d=parseFloat(a)-parseFloat(c);
document.f1.t1.value=d;

}
else if(b==3)
{
var d=parseFloat(a)*parseFloat(c);
document.f1.t1.value=d;
}
else
{
if(parseFloat(c)==0)
	window.alert("ILLEGAL EXPRESSION");
var d=parseFloat(a)/parseFloat(c);
document.f1.t1.value=d;
}
flag=0;
}
}
