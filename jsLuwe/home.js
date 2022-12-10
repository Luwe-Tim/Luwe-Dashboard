const btnContainer = document.getElementById('nav')
const btns = btnContainer.getElementsByClassName('sidebar-item')
const contentContainer = document.querySelector('.content')
const home = document.querySelector('.content #home')
const list = document.querySelector('.content #list-pedagang')
const deskripsi = document.querySelector('.content #deskripsi-dagang')



for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click',function(e){
        let current = document.getElementsByClassName('active');
        home.style.display = "block"
        if(current.length > 0){
            current[0].className = current[0].className.replace(" active","");
            this.className += " active";
        }
        if(e.target.id == 'home'){
            list.style.display = 'none'
            deskripsi.style.display = 'none'
        }else if(e.target.id == 'list'){
            home.style.display = "none"
            list.style.display = 'block'
            deskripsi.style.display = 'none'
        }else if(e.target.id =='deskripsi'){
            home.style.display = "none"
            list.style.display = 'none'
            deskripsi.style.display = 'block'
        }
        window.scroll(0,0)
        e.preventDefault()
    })
    
}

const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Agst',
    'Sept',
    'Oct',
    'Nov',
    'Des',
];

const data = {
labels: labels,
datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
}]
};

const config = {
type: 'line',
data: data,
options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
  
const salam = document.querySelector('.greet h1')
document.body.style.display = 'none'
window.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault()
    const url = link+'/api'
    const myToken = localStorage.getItem("token") 
    const options  = {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${myToken}`
        }
    };
    console.log(myToken);
    if(myToken){
        fetch(url, options).then(response => response.json()).then(data =>  salam.innerHTML = `<h1>${data.message}</h1>`);
        document.body.style.display ='block';
        salam.innerHTML = `<h1>${data.message}</h1>`
    }else{
        window.location.href = 'login.html'
    }

}); 
const logOut = () =>{
    localStorage.removeItem('token');
    window.location.href = 'login.html'
} 

const tableList = document.getElementById('body-pedagang')
const buttonHapus = document.querySelector('.modal-footer button')

buttonHapus.addEventListener('click', () => {
    tableList.parentNode.removeChild(tableList)
})