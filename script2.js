 // 2.вивести тільки парні числа з масиву, вивести в зворотньому порядку
 let arr = [1, 2, 3, 4, 5, 6];
 let newArr = arr.reverse();
 for(var i = 0 ; i < newArr.length; i++)
 {
     if((newArr[i] % 2) === 0)
     {
   console.log(newArr[i]);
     }}
