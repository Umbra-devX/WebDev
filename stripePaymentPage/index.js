// hello, this part is for the nav button.

document.querySelector('.navMenu_btn').addEventListener('click', ()=>{
    let colNav = document.querySelector('.navBarMobile');
    colNav.style.display = 'flex';
});
document.getElementById('mobileNav_xBtn').addEventListener('click', ()=>{
    document.querySelector('.navBarMobile').style.display = 'none';
})