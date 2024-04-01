// Task 1:

// Öz adınızı ekranda 5 dəfə çap edən proqram yazın.
// for(let i=0;i < 5; i++){
//   console.log("Lacin")
// }

// Task 2:

// Ədədləri 20dən geriyə yazdırın.
// for(let i=20;i>0;i--){
// console.log(i)
// }

// Task 3:
// ["Bakı","Gəncə","Sumqayıt"]
// 1
// arrayin elementlərini consolda göstərin.(hem for,hem for of istifadə edin)
// let city=["Baki","Gence","Sumqayit"]
// let txt=""
// for (let index = 0; index <city.length; index++) {
//     console.log(city)
//     break;
// }

// 2

// const city=["Baki","Gence","Sumqayit"]
// let txt=""
// for (const x of city) {
//     txt+=x+"/br"
//     console.log(city)
//     break;
// }

// Task 4:

// ["Bakı","Gəncə","Sumqayıt"]

// arrayin elementlərinin indeksini consolda göstərin.(hem for,hem for in istifadə edin)
// 1
// let city=["Baki","Gence","Sumqayit"]
// let txt=""
// for (let index = 0; index <city.length; index++) {
//     console.log(index)

// }
//    // 2
//     const city=["Baki","Gence","Sumqayit"]
//     let txt=""
//     for (const x of city) {
//         txt+=city[x]+"/br";
//         console.log(x)

//     }

// Task 5:
// [1,4,5,6,7,8,34,56,98]

// arrayin elementlərinin cəmini tapın.

// const elm=["1","4","5","6","7","8","34","56","98"]
// let sum=0
// for (let index = 1; index <elm.length; index++) {
//    sum=(elm[index]+elm[index-1])

// }
// console.log(sum)
// Task 6:

// 1-dən 50-yə qədər ədədləri consolda yazdırın.
// let num=""
// for(let i=1;i<51;i++){
//     console.log(i)
// }

// Task 7:

// 1-dən 50-yə qədər ədədlər 3-3 artıraraq yazdırı.

// for (let i = 1; i <51; i+=3){
//    console.log(i)

// }

// Task 8:

// 1-dən 50-yə qədər cüt ədədləri yazdırın.
// for(let i=2;i<51; i+=2){
//     console.log(i)
// }
// Task 9:

// 1-dən 50-yə qədər 8-ə bölünən ədədləri yazdırın.

// for(let i=1;i<51;i++){
// if(i%8==0){
//     console.log(`${i}`);
// }
// }

// Task 10:

// 1dən 100ə qədər rəqəmlərin cəmini tapan proqram yazın.

// let sum=0
// for(let i=1;i<100; i++){

//     sum+=i

// }
// console.log(sum)
// // Task 11:

// Daxil edilən ədədin faktorialını tapan proqram yazın.
// let num=Number(prompt("ededi daxil et"))
// let faktor=1
// for(let i=1;i<=num;i++){
//     faktor*=i
// }
// console.log(faktor)
// Task 12:

// 1-100 arasında rəqəmlərdən 3-ə bölünənlər üçün konsola Fizz, 5-ə bölünənlər üçün Buzz, hər ikisinə bölünənlər üçünsə FizzBuzz yazdırın.

// for(let i=1;i<100;i++){
//     if(i%3==0){
//         console.log(`${i} "Fizz"`)
//     }
//     else if(i%5==0){
//         console.log(`${i}"Buzz"`)
//     }
//     else if(i%15==0) {
//         console.log(`${i}"FizzBuzz"`)
//     }

// }

// Task 13:

// 3 rəqəmli Armstronq nömrələrini tapan JavaScript proqramı yazın.
// Qeyd: Üçrəqəmli Armstronq ədədi rəqəmlərinin kublarının cəmi həmin ədədin özünə bərabər olan tam ədəddir. Məsələn, 3**3 + 7**3 + 1**3 = 371, buna görə də 371 Armstronq nömrəsidir.
// let num=(prompt("Eded daxil edin"))
// let sum=0

// for(let i=0;i<num.length;i++){
//     sum+=num[i]**3

// }

// if(num==sum){
//     console.log("Yes")
// }else{
//     console.log("NO")
// }
// Task 14:

// Ədəddəki cüt və tək yerdə olan rəqəmləri ayrılıqda cəmləyirik. Bu cəmlərin hasilini tapın. Məsələn, 1243 ədədində tək yerdə duran 1 və 4ün cəmi və cüt yerdə duran 2 və 3ün cəmini tapıb bu cəmlərin hasilini ekrana yazdırın.

// let num=[1,2,4,3]
// let tek=0
// let cut=0
// for (let i = 0; i < 4; i++) {
//     if(i%2==0){
//         cut+=num[i]
//     }
//     else{
//         tek+=num[i]
//     }
// }
// console.log(tek*cut)

// Task 15:
// Bir array daxilindəki ədədlərin hasili əgər cüt ədəddirsə, həmin ədədlərin cəmini consolda göstərin. Yox əgər təkdirsə, consolda sıfır göstərin.
// let num = [5, 2];
// let sum = 1;
// let total = 0;
// for (let i = 0; i < num.length; i++) {
//   sum *= num[i];
// }

// if (sum % 2 == 0) {
//   for (let index = 0; index < num.length; index++) {
//     total += num[index];
    
//   }
//   console.log(`"cutdur" ${total}`);
// } else {
//   console.log("0");
// }

// Task 16:
// Bir arraydə bütün ədədlər cütdürsə consoleda true, təkdirsə false yazın.
//  function evenOrOdd(arr) {
//     let sum =0
//     for (let i= 0; i < arr.length; i++) {
//         sum=arr[i] 
//     }
//    if(sum%2==0){
//        console.log(true) 
//    }
// else{console.log(false)}
//  }
//  evenOrOdd([4,2,6,5])
// Task 17:
// Daxil edilən arraydə ədədlərin ədədi ortasını tapın. Tam ədədə yuvarlaqlaşdırın.

// function numAverage(){
// let num =[2,4,6,7];
// let sum=0
// let med=0
// for (let i = 0; i< num.length; i++) {
//     med++
//    sum+=num[i]
// }
// let average = parseInt(sum/ med)
// console.log(average);
// }
// numAverage()


// Task 18:

// İki dəyişən təyin edin. Biri hər hansı söz, digəri isə hərf olsun. Həmin hərf o sözün içində varsa consoleda true, yoxdursa false yazılsın.



// Task: 19
// İki dəyişən təyin edin. Biri hər hansı söz, digəri isə hərf olsun. Həmin hərfin o sözün içində neçə dəfə olduğunu consoleda yazdırın.

// Task: 20

// Bir dəyişən təyin edin.Bu dəyişən sizin sözünüz olacaq. O sözün içində neçə sait olduğunu consoleda yazdırın.

// TASKS:
// 1. Bir reqem daxil edirsiniz ve hemin reqeme uygun olan ayin adini qaytarir, meselen 5 daxil olunsa function "May" return etmelidir, eger 12-den boyuk ve ya menfi olan bir deyer daxil olunsa invalid input return etmelidir.

// var a = Number(window.prompt("Please Enter Number!"))

// var b = "";

// switch (a) {
//     case 1: b = "January";
//         break;
//     case 2: b = "February";
//         break;
//     case 3: b = "March";
//         break;
//     case 4: b = "April";
//         break;
//     case 5: b = "May";
//         break;
//     case 6: b = "June";
//         break;
//     case 7: b = "July";
//         break;
//     case 8: b = "August";
//         break;
//     case 9: b = "September";
//         break;
//     case 10: b = "October";
//         break;
//     case 11: b = "November";
//         break;
//     case 12: b = "December";
//         break;
//     default: alert("invalid input")
// }
// console.log(b)

// 2. Prompt-dan 2 dəyər qəbul edirsiniz. biri bir simvoldur, biri isə bir rəqəm və nəticədə həmin rəqəm sayı qədər simvol-u ekrana çap etməlidir. Məsələn, inputlar: b ve 5 daxil olunubsa, nəticə bbbbb olmalıdır.

// var a = prompt("Simvol");
// var b = parseInt(prompt("Rəqəm"));
// var c = ""
// for (var i = 0; i < b; i++) {
//     c += a;
// }
// console.log(c);

// 3. Daxil olunmuş ədədin mərtəbələrinin cəmini qaytaran alqoritm yazın. Məsələn: 125 daxil olunarsa, nəticə 1+2+5=>8 qaytarmalıdır.
// let num=prompt("bir eded daxil et")
// let sum=0;
// for(let i=0;i<num.length;i++){
//     sum+=Number(num[i])
// }
// console.log(sum)

// 4. Bir alqoritm yazın, bir ədəd qəbul edir ve hemin ədədin perfect number olub-olmamasini yoxlayir. Perfect number - ededin ozunden bashqa butun bolenlerinin cemin ededin ozune beraberdir-se o zaman eded perfect number hesab olunur. Meselen 6 -->  1+2+3 =  6, demeli 6 perfect number-dir. (perfect numbers - 6, 28, 496, 8128, and 33550336)

// var num = parseInt(prompt("Bir eded daxil et"));
// var sum = 0;
// for (var i = 1; i < num; i++) {
//     if (num % i === 0) {
//         sum += i;
//     }
// }
// if (sum === num) {
//     console.log( ` ${num} "This is Perfect Number." `);
// }
// else {
//     console.log(`${num} " This is not Perfect Number."`);
// }

// 5. Daxil olunan ədədin polindrome olub-olmamasını yoxlayan alqoritm yazın. Polindrome ədədlər soldan-sağa və sağdan-sola eyni olan ədədlərdir. Məsələn: 121, 4554, 12321 etc. Əgər polindrome-dursa true çap olunsun, əks halda isə false.
// let num = prompt("Bir eded daxil et");
// let Palindrome = true;
// let length = num.length;
// for (let i = 0; i < length / 2; i++) {
//     if (num[i] !== num[length - 1 - i]) {
//         Palindrome = false;
//         break;
//     }
// }

// if (Palindrome) {
//     console.log(`${num} "palindromdur."`);
// } else {
//     console.log(`${num} "  palindrome deyil."`);

// }

// 6. Listdəki sadə ədədlərin ədədi ortasını qaytaran bir alqoritm yazın. Məsələn: [3,7,9,4,24,25,8]; bu listdəki sadə ədədlərin ədədi ortasını hesablayıb qaytarılmalıdır.

// 7. Listdəki ən böyük və ən kiçik element-lərin ədədi ortasını tapıb qaytaran alqoritm yazın. Math objectindən istifadə edə bilməzsiniz. Məsələn: [4,2,7,9,3,12,46,32,19]; => min: 2, max: 46 => ededi ortasi (46+2)/2 => 24 qaytarmalıdır.
