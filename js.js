var line=document.getElementById("line")
var object=[];
var color=["#e67e22","#8e44ad","#f1c40f","#2ecc71"]
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
    end=parseInt(object[i].day)
    $(".table2 div").eq(day).children().eq(begin-1).text(object[i].subject)
    $(".table2 div").eq(day).children().eq(begin-1).css("font-weight", "bold")
    $(".table2 div").eq(day).children().eq(begin-1).css("font-size", "13px")
    $(".table2 div").eq(day).children().eq(begin).text(object[i].room)
    $(".table2 div").eq(day).children().eq(begin).css("font-size", "13px")
    for (j=parseInt(object[i].begin);j<=parseInt(object[i].end);j++)
    {
      
      $(".table li").eq(day).children().eq(j).css("background-color",color[parseInt(day/2)])
    }
  }
}
$("form").submit(function(){
    console.log($(".subject").length)
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
console.log(object)
    return false
})
$("#submit").click(function(){
    $("form").submit();
})
$("form").submit();