var line=document.getElementById("line");
var sche=document.getElementById("table");
var object=[];
var color=["#e67e22","#8e44ad","#f1c40f","#2ecc71"]
var count=0;
var pointer;
var target;
//localStorage.clear()
 window.addEventListener("keyup",function(e){
  if(e.key=="Enter"||e.key=="ArrowRight")
    pointer+=1
  else if (e.key=="ArrowLeft")
  pointer-=1
  else return;
  if (pointer>=$("input").length) pointer=0
  else if (pointer==-1) pointer=$("input").length-1
    $("input").eq(pointer).focus()
   
 })
function addinput(){
  $("input").focus(function(){
    pointer=this.dataset.n
  })
}

loaddata()
document.getElementById("render").addEventListener("click",renderrow)

function update(){
  localStorage.setItem("user",JSON.stringify(object))
}
function loaddata(){
  object=JSON.parse(localStorage.getItem("user"))
  object=object?object:[]
  let i=-1;
  if (object!=[])
  for (i in object){
    renderrow(object[i].subject,object[i].room,object[i].day,object[i].begin,object[i].end)
  }
  count=$("input").length/5
}
function addsubject(string,place,pos){
  let run=$("#table").children().eq(place)
  let div=document.createElement("div")
  div.className="run"
  div.innerHTML=string
  run.append(div)
  setpos(place,pos);
  run.children().eq(run.children().length-1).removeClass("run")
}

function setpos(place,pos){
 if (pos==6||pos==11)$(".run").css({top:-$(".run").position().top+$(".table li").eq(place).children().eq(pos).position().top+25,left:60});
 else
  $(".run").css({top:-$(".run").position().top+$(".table li").eq(place).children().eq(pos).position().top+4,left:60})
}

function addcolor(){
  let j=0,day,begin,end;
  for (i in object){
    day=parseInt(object[i].day)-2;
    begin=parseInt(object[i].begin)
    end=parseInt(object[i].end)
    for (j=begin;j<=end;j++)
    {
      $(".table li").eq(day).children().eq(j).css("background-color",color[parseInt(day/2)])
    }
    addsubject(`<b>${object[i].subject}</b><br>${object[i].room}`,day,begin)
  }
}

function createtable(){
  for (let i=0;i<$("input").length;i++)
  if ($("input").eq(i).val()=="") return;
  rendertable();
    object=[]
    let i=0;
    for (i=0;i<$(".subject").length;i++)
    object.push({})
    for (i=0;i<$(".subject").length;i++){  
    object[i].subject=$(".subject").eq(i).val()
    object[i].day=$(".select").eq(i).val()
    object[i].begin=$(".begin").eq(i).val()
    object[i].end=$(".end").eq(i).val()
    object[i].room=$(".room").eq(i).val()
    }
    update()
    addcolor()
    $(".info").show();
    return false
}
$("#submit").click(createtable)
//  $("#submit").click()
function renderrow(subject="",room="",day="",begin="",end=""){
  if (typeof subject=="object") subject=""
  let ul=document.createElement("ul")
  ul.dataset.n=count;
  ul.innerHTML=`
  <li>
            <div>Môn học</div>
            <input data-n=${count*5+0} class="subject"  type="text" value="${subject}" > 
          </li>
          <li>
            <div>Phòng học:</div>
            <input data-n=${count*5+1} type="text" class="room" value=${room} >
          </li>
          <li>
            <div>Thứ:</div>
            <input data-n=${count*5+2} type="text" class="select" value=${day}>
          </li>
          <li>
            <div>Từ tiết:</div>
            <input data-n=${count*5+3} type="text" class="begin" value=${begin} >
          </li>
          <li>
            <div>Đến hết tiết:</div>
            <input data-n=${count*5+4} type="text" class="end" value=${end}>
          </li>
          <button data-n=${count} class="del">xóa</button>
  `;

  line.appendChild(ul)
  adddel()
  for(let i=count*5;i<=count*5+4;i++)
  $("input").eq(i).focus(function(){
    pointer=parseInt(this.dataset.n)
  })
  $("input").eq(count*5).focus()
  count+=1
}
 
function adddel(){
  $(".del").click(function(){
    let i=0;
    let target=parseInt($(this).attr("data-n"))
    $("#line ul").eq(target).remove()
    for ( i=target;i<$("#line ul").length;i++){
    $("#line ul button").eq(i).attr("data-n",i)
    }
    for ( i=target*5;i<$("#line ul").length*5-1;i++){
      $("input").eq(i).attr("data-n",i)
      }
    count=-1;
    
    object.splice(target,1)
    update()
    createtable()
  })
  $(".del").removeClass("del")
  
}

function rendertable(){
  sche.innerHTML=`<li>
  <div>Thứ 2</div>
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p class="more">6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p class="more">11</p>
  <p>12</p>
  <p>13</p>
  <p>14</p>
  </li>
  <li>
  <div>Thứ 3</div>
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p class="more">6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p class="more">11</p>
  <p>12</p>
  <p>13</p>
  <p>14</p>
  </li>
  <li>
  <div>Thứ 4</div>
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p class="more">6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p class="more">11</p>
  <p>12</p>
  <p>13</p>
  <p>14</p>
  </li>
  <li>
  <div>Thứ 5</div>
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p class="more">6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p class="more">11</p>
  <p>12</p>
  <p>13</p>
  <p>14</p>
  </li>
  <li>
  <div>Thứ 6</div>
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p class="more">6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p class="more">11</p>
  <p>12</p>
  <p>13</p>
  <p>14</p>
  </li>
  <li>
  <div>Thứ 7</div>
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p class="more">6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p class="more">11</p>
  <p>12</p>
  <p>13</p>
  <p>14</p>
  </li>
  <li>
  <div>CN</div>
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p class="more">6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p class="more">11</p>
  <p>12</p>
  <p>13</p>
  <p>14</p>
  </li>`;
  }