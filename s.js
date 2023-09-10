
class Main1{
    constructor(fnamem,lname,surname) {
        alert('ih');
        this.fnamem=fnamem;
        this.lname=lname;
        this.surname=surname;
    }
     name() {
      return(this.fnamem+ " "+this.lname+" "+this.surname);
    }

    }
 

function name1()
{
alert('hi ');
var a=document.getElementById('fname').value;
var a1=document.getElementById('lname').value;
var a2=document.getElementById('sname').value;
alert(a2);
var c=new Main1(a,a1,a2);
var d=c.name()
document.getElementById('d').innerHTML=d;
}
