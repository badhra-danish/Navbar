const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.loginlink');
const registerlink = document.querySelector('.registerlink');
const btnlogin = document.querySelector('.btnlogin');
const iconclose = document.querySelector('.closeicon');




loginlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

registerlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnlogin.addEventListener('click', ()=> {
    wrapper.classList.add('active-pop');
});

iconclose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-pop');
});