//1-misol. 1,3,5,9 - arrayda , ularni funksiya orqali yig'indisini chiqarish
let misol1 = [1, 3, 5, 9];

function yigindi(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

console.log(yigindi(misol1));

//2-misol. turli xil sonlar berilgan, manfiydan tashqari hammasi qo'shilsin.
let numbers = [1, -5, 16, 0, 2];

function numbersSum(arr) {
  let gathered = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      gathered += arr[i];
    }
  }

  return gathered;
}

console.log(numbersSum(numbers));

//3-misol barcha raqamlar yaxlitlangan va musbatga o'girilgan bo'lsin!
let nums = [3.02, -3.65, 5, -9];

function normalizeNumbers(arr) {
  let natija = [];

  for (let i = 0; i < arr.length; i++) {
    natija.push(Math.round(Math.abs(arr[i])));
  }

  return natija;
}

console.log(normalizeNumbers(nums));

//Goodbye World!!!
