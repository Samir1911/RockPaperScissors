var c=document.querySelector("#close");
var r=document.querySelector("#rules");
var btn=document.querySelector("#btn");
var cont=document.querySelector("#container");
var score=0;
c.addEventListener("click",function(){
  r.style.display="none";
})
btn.addEventListener("click",function(){
    r.style.display="grid";
})
var pick=document.querySelectorAll("#RPS .outer");

play();
function play(){
  var pick=document.querySelectorAll("#RPS .outer");
  pick[0].style.background= "hsl(230, 94%, 68%)";
  pick[0].style.boxShadow="0 -7px 3px hsl(230, 72%, 52%) inset";
  pick[1].style.background= "hsl(40, 100%, 66%)";
  pick[1].style.boxShadow="0 -7px 3px hsl(40, 100%, 48%) inset";
  pick[2].style.background= "hsl(349, 81%, 60%)";
  pick[2].style.boxShadow="0 -7px 3px rgb(201, 10, 10) inset";
pick.forEach(p=>{
  p.addEventListener("click",function(){
    let t;
    if(p==pick[0])
      t=0;
    if(p==pick[1])
      t=1
    if(p==pick[2])
      t=2
    let s=Math.round(Math.random()*2);
    while(s==t){
      s=Math.round(Math.random()*2);
    }
    let b=pick[s].style.background;
    let bs=pick[s].style.boxShadow;
    let img=p.lastElementChild.firstElementChild.src;
    cont.innerHTML=`<div id="gamestart">
        <p id="h1">YOU PICKED</p>
        <div class="outer" id="yp">
          <span id="yps"><span><span></span></span></span>
          <div class="inner"> <img src=${img} alt="image you picked"></div>
        </div>

        <div id="win">
          <p>YOU WIN</p>
          <button>PLAY AGAIN</button>
        </div>

        <p id="h2">THE HOUSE PICKED</p>
        <div class="outer" id=hp>
          <span id="hps"><span><span></span></span></span>
          <div class="inner"> <img src="" ></div>
        </div>
      </div>`
    
    var d=document.querySelectorAll("#gamestart .outer");
    bgs=["hsl(230, 94%, 68%)","hsl(40, 100%, 66%)","hsl(349, 81%, 60%)"];
    bss=["hsl(230, 72%, 52%)","hsl(40, 100%, 48%)","hsl(349, 81%, 60%)"];
    d[0].style.background=bgs[t];
    g="0 -7px 3px "+bss[t]+" inset";
    console.log(g);
    d[0].style.boxShadow=g;
    let imgs=["images/icon-paper.svg","images/icon-scissors.svg","images/icon-rock.svg"]
    
    var yps=document.querySelector("#yps");
    var hps=document.querySelector("#hps");
    var bo=document.querySelector("#score b");
    var wp=document.querySelector("#win p");
    hps.style.display="none";
    yps.style.display="none";
    setTimeout(computer,1000);
    function computer(){
      d[1].style.background=b;
      d[1].style.boxShadow=bs;
      d[1].lastElementChild.style.background="white";
      d[1].lastElementChild.style.boxShadow="0 7px 3px  black inset";
      d[1].lastElementChild.firstElementChild.src=imgs[s];
      if((t==0 && s==1) || (t==1 && s==2) || (t==2 && s==0)){
        wp.innerText="YOU LOSE";
      }
      else{
        wp.innerText="YOU WIN";
      }
      document.querySelector("#win").style.display="flex";
      if(wp.innerText=="YOU LOSE"){
        hps.style.display="grid"; 
        document.querySelector("#yp").style.zIndex="3";
        if(d[0].clientWidth==130)
          hps.style.borderWidth="20px";
        else{
          hps.style.borderWidth="55px";
        }
        if(score)
          score--;
      }
      else{
        yps.style.display="grid";
        document.querySelector("#hp").style.zIndex="3";
        if(d[0].clientWidth==130)
          yps.style.borderWidth="20px";
        else{
          yps.style.borderWidth="55px";
        }
        score++;
      }
      bo.innerText=score;
    }
    
    var btn=document.querySelector("#win button");
    btn.addEventListener("click",function(){
      cont.innerHTML=`<div id="RPS">
        <div class="outer">
          <div class="inner"> <img src="images/icon-paper.svg" alt="paper.svg"></div>
        </div>
        <div class="outer">
          <div class="inner"><img src="images/icon-scissors.svg" alt="scissors.svg"></div>
        </div>
        <div class="outer out3">
          <div class="inner"><img src="images/icon-rock.svg" alt="rock.svg"></div>
        </div>
      </div>`;
      play();
    })
  })
  
})
}