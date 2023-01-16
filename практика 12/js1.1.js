let user1 = {
name: "Маша",
age: 30
}
let user2 = {
name: "Паша",
age: 20
}
let user3 = {
name: "Даша",
age: 25
}
let user4 = {
name: "Саша",
age: 40
}
let user5= {
name: "Вася",
age: 28
}
let user6 = {
name: "Коля",
age: 33
}
let userarr=[user1,user2,user3,user4,user5,user6];
for (let i=0; i<userarr.length;i++){
document.querySelector('.section1_box:nth-child('+(i+1)+')').innerHTML+="Имя: "+userarr[i].name+"; Возраст: "
+userarr[i].age+" лет;
}
