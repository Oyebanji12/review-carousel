var reviews=[
    {
        id:2,
        name:'gabby',
        job: 'model',
        img:'img/daniel-norin-lBhhnhndpE0-unsplash.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse saepe hic provident sed nam cupiditate quo explicabo, eligendi blanditiis doloremque?',
    },
    {
        id:2,
        name:'joseph',
        job: 'engineer',
        img:'img/matheus-ferrero-W7b3eDUb_2I-unsplash.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse saepe hic provident sed nam cupiditate quo explicabo, eligendi blanditiis doloremque?',
    },
    {
        id:2,
        name:'esther',
        job: 'chef',
        img:'img/moamen-ali-UkfaWMKbBgk-unsplash.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse saepe hic provident sed nam cupiditate quo explicabo, eligendi blanditiis doloremque?',
    },
    {
        id:4,
        name:'solomon',
        job: 'fashionista',
        img:'img/jonathan-zerger-KW426lBOXHs-unsplash.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse saepe hic provident sed nam cupiditate quo explicabo, eligendi blanditiis doloremque?',
    },

];

var img=document.getElementById('person-img')
var author= document.querySelector('.author')
var job= document.querySelector('.job')
var info=document.querySelector('.info')


var prevBtn=document.querySelector('.prev-btn');
var nextBtn=document.querySelector('.next-btn');
var randomBtn=document.querySelector('.random-button');


var currentItem=0

window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
})

function showPerson(currentItem) {
    var item=reviews[currentItem];

    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
    
}

nextBtn.addEventListener('click', function () {
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem=0
    }
    showPerson(currentItem);

    
})

prevBtn.addEventListener('click', function () {
    currentItem--;
    if(currentItem < 0){
        currentItem= reviews.length-1;
    
    }
    showPerson(currentItem)
    
})



randomBtn.addEventListener('click', function () {
    currentItem=Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);

    
})