// 1. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს
// თუ ციფრი დადებითია ფუნქციამ უნდა დააბრუნოს "დადებითია", თუ
// არა "უარყოფითია"

// 2. დაწერეთ ფუნქცია რომელიც დააბრუნებს ყველა ციფრის ჯამს
// 1 დან 100 მდე

// 3. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს, ფუნქციამ უნდა
// დააბრუნოს ეს ციფრი კენტია თუ ლუწი

// 4. შექმენით ობიექტი car რომელსაც ექნება year და model.
// დაწერეთ ფუნქცია რომელსაც გადასცემთ ამ მანქანის ობიექტს
// და ფუნქციამ უნდა დააბრუნოს მანქანის ასაკი

// 5. დაწერეთ ფუნქცია რომელსაც გადავცემთ ციფრების მასივს,
// მაგალითად [1,4,88,99, 123]. ფუნქციამ უნდა იპოვოს და დააბრუნოს
// მასივის უდიდესი ციფრი

// 6. გააკეთეთ იგივე ოღონდ დააბრუნეთ უმცირესი ციფრი

// 7. დაწერეთ ფუნქცია რომელსაც გადასცემთ სიტყვას,
// ფუნქციამ უნდა დააბრუნოს ამ სიტყვის შებრუნებული ვერსია,
// მაგალითად თუ გადავცემთ someFn("ერთი"), უნდა დააბრუნოს "ითრე"

//1:
//function Numbers(number) {
//  if (number > 0) {
//    return "positive";
//  } else if (number < 0) {
//    return "negative";
//  }
//}
//
//let total = Numbers(76);
//console.log(total);

//2:
//function Calculate() {
//  let Num = 0;
//  for (let x = 1; x <= 100; x++) {
//    let numberStr = x.toString();
//    for (let y = 0; y < numberStr.length; y++) {
//      Num += parseInt(numberStr[y]);
//    }
//  }
//  return Num;
//}
//let total = Calculate();
//console.log(total);

//3:
//function Number(numbers) {
//  if (typeof numbers !== "number" || numbers < 1 || isNaN(numbers)) {
//    return;
//  }
//  if (numbers % 2 === 0) {
//    return "even";
//  } else {
//    return "odd";
//  }
//}
//console.log(Number(79));

//4:
//let car = {
//  year: 2012,
//  model: "BMW",
//  country: "Germany",
//};
//function getYearsCar(carsYear) {}
//let NowDays = new Date().getYears();
//
//let YearsCar = NowDays - carsYear.year;
//
//return YearsCar;
//
//let YearsCar = getYearsCar(car);

//გავიჭედე

//5:

//function LargNum(Nums) {
//  if (!Array.isArray(Nums) || Nums.length === 0) {
//    return "ERROR";
//  }
//  let buggestNum = Nums[0];
//  for (let x = 1; x < Nums.length; x++) {
//    if (Nums[x] > buggestNum) {
//      buggestNum = Nums[x];
//    }
//  }
//  return buggestNum;
//}
//let numbers = [1, 4, 88, 99, 123];
//let largest = LargNum(numbers);
//console.log(`The largest number in the array is: ${largest}`);

//6:

//function smallestNum(Nums) {
//  if (!Array.isArray(Nums) || Nums.length === 0) {
//    return "ERROR";
//  }
//  let smallestNumber = Nums[0];
//  for (let y = 1; y < Nums.length; y++) {
//    if (Nums[y] < smallestNumber) {
//      smallestNumber = Nums[y];
//    }
//  }
//  return smallestNumber;
//}
//let numbers = [1, 4, 88, 99, 123];
//let smallest = smallestNum(numbers);
//console.log(`The smallest number in the array is: ${smallest}`);
