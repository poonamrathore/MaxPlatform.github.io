var a=0;
var id;
var card=9;
let menuIcon = document.querySelector('#hamburger-btn');
let menu = document.querySelector('#sidebar');
function showCardView(){
  let maingrid = document.querySelector('#main-grid');
  maingrid.classList.add('slds-gutters');
 document.getElementById('table-header').style.display="none";
    for(let x=1;x<=card;x++){
        let cardView = document.querySelector('#card'+x);
        cardView.classList.add("slds-large-size_4-of-12");
        let cardElement1= document.querySelector('#card'+x+'-element1');
        cardElement1.classList.remove("slds-large-size_1-of-12");
        cardElement1.classList.add('slds-large-size_12-of-12');
        document.querySelector('#card'+x+'-element2').classList.remove("slds-large-size_3-of-12");
        document.querySelector('#card'+x+'-element9').style.display="block";
        for(let y=3;y<6;y++){
            console.log(x+" "+y);
            let cardElement = document.querySelector('#card'+x+'-element'+y);
            cardElement.classList.remove("slds-large-size_2-of-12");
            cardElement.classList.remove("mobile-screen");
            cardElement.classList.add('slds-large-size_12-of-12');
        }
        for(let y=6;y<9;y++){
          document.querySelector('#card'+x+'-element'+y).style.display="none";
        }
    }
  console.log('entereed in function ');
}
function showTableView(){
    for(let x=1;x<8;x++)
    {
        var cardView = document.querySelector('#card'+x);
        cardView.classList.remove("slds-large-size_3-of-12");
    }
  console.log('entereed in function ');
}
function showSideBar(){
  let hamburgermenu=document.querySelector('.side-bar');
  if(hamburgermenu.style.display==='none'){
    hamburgermenu.style.display='block';
    id= setInterval(slide,8);
  }else{
    hamburgermenu.style.display='none';
  }
}
function slide(){
  if(a==200){
    clearInterval(id);
  }else{
    a=a+8;
    let hamburgermenu=document.querySelector('.side-bar');
    hamburgermenu.style.width=a+'px';
  }
}