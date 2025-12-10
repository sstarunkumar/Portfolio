
/*
fetch('projects.html')
        .then(res => res.text())
        .then(html => document.querySelector('.below').innerHTML = html);
*/
function render(page)
{
    fetch(page+'.html')
        .then(res => res.text())
        .then(html => document.querySelector('.below').innerHTML = html);
    removeCL();
    document.querySelector('.'+page).classList.add('red');
}
function removeCL()
{
    document.querySelector('.about').classList.remove   ('red');
    document.querySelector('.skills').classList.remove  ('red');
    document.querySelector('.projects').classList.remove('red');
    document.querySelector('.resume').classList.remove  ('red');
    document.querySelector('.contact').classList.remove ('red');
}
function getMessage()
{
    let contact = document.querySelector('.userContact').value;
    let message = document.querySelector('.userMessage').value;
    if(contact === "" || message === "" )
    {
        alert('no empty fields');
        return;
    }
    alert('thanks for your inputs, your message will soon be reviewed..!')
    console.log(contact+" "+message);
}