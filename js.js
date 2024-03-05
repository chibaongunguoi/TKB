var line=document.getElementById("line");
var sche=document.getElementById("table");
var object=[];
var color=["#e67e22","#8e44ad","#f1c40f","#2ecc71"]

function addsubject(string,place,pos){
  let target=$("#table").children().eq(place)
  let div=document.createElement("div")
  div.className="run"
  div.innerHTML=string
  target.append(div)
  setpos(place,pos);
  target.children().eq(target.children().length-1).removeClass("run")
  
}
function setpos(place,pos){
  $(".run").css({top:-$(".run").position().top
  +$(".table li").eq(place).children().eq(pos).position().top+4+parseInt(pos/6)*20,left:"50px"})
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


document.getElementById("render").addEventListener("click",function(){
    let ul=document.createElement("ul")
    ul.innerHTML=`
    <li>
              <div>Môn học</div>
              <input class="subject" type="text" />
            </li>
            <li>
              <div>Phòng học:</div>
              <input type="text" class="room" />
            </li>
            <li>
              <div>Thứ:</div>
              <select class="select">
                <option value="0">Thứ 2</option>
                <option value="1">Thứ 3</option>
                <option value="2">Thứ 4</option>
                <option value="3">Thứ 5</option>
                <option value="4">Thứ 6</option>
                <option value="5">Thứ 7</option>
                <option value="6">Chủ nhật</option>
              </select>
            </li>
            <li>
              <div>Từ tiết:</div>
              <input type="text" class="begin" />
            </li>
            <li>
              <div>Đến tiết:</div>
              <input type="text" class="end" />
            </li>
    `;
    line.appendChild(ul)
})
function addcolor(){
  let j=0,day,begin,end;
  for (i in object){
    day=parseInt(object[i].day)
    begin=parseInt(object[i].begin)
    end=parseInt(object[i].end)
    for (j=begin;j<=end;j++)
    {
      $(".table li").eq(day).children().eq(j).css("background-color",color[parseInt(day/2)])
    }
    addsubject(`${object[i].subject}<br>${object[i].room}`,day,begin)
  }
}
$("form").submit(function(){
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
    addcolor()
    return false
})
$("#submit").click(function(){
    $("form").submit();
})
$("form").submit();
