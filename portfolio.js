function removeCL()
{
    document.querySelector('.about').classList.remove   ('red');
    document.querySelector('.skills').classList.remove  ('red');
    document.querySelector('.projects').classList.remove('red');
    document.querySelector('.resume').classList.remove  ('red');
    document.querySelector('.contact').classList.remove ('red');
}
function render(page)
{
    fetch(page+'.html')
        .then(res => res.text())
        .then(html => document.querySelector('.below').innerHTML = html);
    removeCL();
    document.querySelector('.'+page).classList.add('red');
}