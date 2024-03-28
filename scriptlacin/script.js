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

for(let i=1;i<100;i++){
    if(i%3==0){
        console.log(`${i} "Fizz"`)
    }
    else if(i%5==0){
        console.log(`${i}"Buzz"`)
    }
    else if(i%15==0) {
        console.log(`${i}"FizzBuzz"`)
    }
    

// }



// Task 13:

// 3 rəqəmli Armstronq nömrələrini tapan JavaScript proqramı yazın.
// Qeyd: Üçrəqəmli Armstronq ədədi rəqəmlərinin kublarının cəmi həmin ədədin özünə bərabər olan tam ədəddir. Məsələn, 3**3 + 7**3 + 1**3 = 371, buna görə də 371 Armstronq nömrəsidir.
let num=(prompt("Eded daxil edin"))
let sum=0

for(let i=0;i<num.length;i++){
    sum+=num[i]**3
   
}

if(num==sum){
    console.log("Yes")
}else{
    console.log("NO")
}
// Task 14:

// Ədəddəki cüt və tək yerdə olan rəqəmləri ayrılıqda cəmləyirik. Bu cəmlərin hasilini tapın. Məsələn, 1243 ədədində tək yerdə duran 1 və 4ün cəmi və cüt yerdə duran 2 və 3ün cəmini tapıb bu cəmlərin hasilini ekrana yazdırın.

// Task 15:
// Bir array daxilindəki ədədlərin hasili əgər cüt ədəddirsə, həmin ədədlərin cəmini consolda göstərin. Yox əgər təkdirsə, consolda sıfır göstərin.


// Task 16:
// Bir arraydə bütün ədədlər cütdürsə consoleda true, təkdirsə false yazın.

// Task 17:
// Daxil edilən arraydə ədədlərin ədədi ortasını tapın. Tam ədədə yuvarlaqlaşdırın.

// Task 18:

// İki dəyişən təyin edin. Biri hər hansı söz, digəri isə hərf olsun. Həmin hərf o sözün içində varsa consoleda true, yoxdursa false yazılsın.


// Task: 19
// İki dəyişən təyin edin. Biri hər hansı söz, digəri isə hərf olsun. Həmin hərfin o sözün içində neçə dəfə olduğunu consoleda yazdırın.

// Task: 20

// Bir dəyişən təyin edin.Bu dəyişən sizin sözünüz olacaq. O sözün içində neçə sait olduğunu consoleda yazdırın.


