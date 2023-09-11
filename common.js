function signup()
{
    var name=document.getElementById('name').value;
    var number=document.getElementById('number').value;
    var mail=document.getElementById('mail').value;
    var p=document.getElementById('p');
    var password=document.getElementById('pass').value;
    var pass1=document.getElementById('pass1').value;
    p.style.color='red';

    if(pass!==pass1)
    {
        if(pass==' ' || pass1=='')
        {
            p.innerText='password cant be empty';

        }
        else{
            document.getElementById('pass').value=" ";
            document.getElementById('pass1').value=" ";
           
            p.innerText='password and reenter password must be same';
        }
       
        
    }
    localStorage.setItem('name',name);
    localStorage.setItem('mail',mail);
    localStorage.setItem('pass',pass);
    localStorage.setItem('number',number);


}
function login()
{
    var name=document.getElementById('loginmail').value;
    var pass=document.getElementById('loginpass').value;
    var mail1=localStorage.getItem('mail');
    var pass1=localStorage.getItem('pass');
    var p=document.getElementById('invalid');
    p.style.color='red';
    if(name===mail1)
    {
        if(pass===pass1)
        {
            open('task3.html');
        }
        else{
            p.innerText='password was wrong please check it';
        }
    }
    else{
        p.innerText='mail was wrong please check it';

       }
    
}