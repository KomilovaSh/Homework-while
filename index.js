// Case1
// let m=+prompt("m ni kiriting:");
// switch(m){
//     case 1:
//         document.writeln('Dushanba');
//         break;
//     case 2:
//         document.writeln('Seshanba');
//         break;
//     case 3:
//         document.writeln('Chorshanba');
//         break;
//     case 4:
//         document.writeln('Payshanba');
//         break;
//     case 5:
//         document.writeln('Juma');
//         break;
//     case 6:
//         document.writeln('Shanba');
//         break;
//     case 7:
//         document.writeln('Yakshanba');
//         break;
//     default:
//         document.writeln('Bunday kun yoq');
//         break;
// }


// Case2
// let k=+prompt("k sonni kiriting:");
// switch (k){
//     case 1:
//         document.writeln("1-yomon");
//         break;
//     case 2:
//         document.writeln("2-qoniqarsiz");
//         break;
//     case 3:
//         document.writeln("3-qoniqarli");
//         break;
//     case 4:
//         document.writeln("4-yaxshi");
//         break;
//     case 5:
//         document.writeln("a'lo");
//         break;
//     default:
//         document.writeln("Xato!");
//         break;
// }


// Case3
// let m=+prompt("Oy raqamini kiriting:");
// switch (m) {
//     case 1:
//     case 2:
//     case 12:
//         document.writeln("Qish");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         document.writeln("Bahor");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         document.writeln("Yoz");
//         break;
//     case 9:
//     case 10:
//     case 11:
//         document.writeln("Kuz");
//     default:
//         document.writeln("Bunday oy yo'q");
//         break;
// }


// Case 4
// let m=+prompt("Oy raqamini kiriting:");
// switch (m) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         document.writeln(" 31 kundan iborat");
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         document.writeln("30 kundan iborat");
//         break;
//     case 2:
//         document.writeln(" 29 yoki 28 kundan iborat");
//         break;
//     default:
//         document.writeln("Bunday raqamli oy yo'q!");
//         break;
// }


// Case 5
// let a=+prompt("a sonni kiriting:");
// let b=+prompt("b sonni kiriting:");
// let n=+prompt(" ni kiriting:");
// let d;
//  switch(n) {
//     case 1:
//         d=a+b;
//         document.writeln("Yeg'indisi:"+d);
//         break;
//     case 2:
//         d=a-b;
//         document.writeln("Ayirmasi:"+d);
//         break;
//     case 3:
//         d=a*b;
//         document.writeln(" Ko'paytmasi: "+d);
//         break;
//     case 4:
//         d=a/b;
//         document.writeln("Bo'linmasi:"+d);
//         break;
//     default:
//         document.writeln("Xato kiritdingiz:");
//         break;
//  }



// Case 6
// let k=+prompt("Kesmaning uzunligini kiriting:");
// switch (k) {
//     case 1:
//         a=a/10;
//         document.writeln(a+"metr");
//         break;
//     case 2:
//         a=a*1000;
//         document.writeln(a+"metr");
//         break;
//     case 3:
//         a=a/1000;
//         document.writeln(a+"metr");
//         break;
//     case 4:
//         document.writeln(a+"metr");
//         break;
//     case 5:
//         a=a/100;
//         document.writeln(a+"metr");
//         break;
//     default:
//         document.writeln("Xato kiritdingiz!");
//         break;
// }


// Case 7
// let k=+prompt("Jismning og'irligini kiriting:");
// switch (k) {
//     case 1:
//         document.writeln(a+"kilogramm");
//         break;
//     case 2:
//         a=a/10000;
//         document.writeln(a+"kilogramm");
//         break;
//     case 3:
//         a=a/1000;
//         document.writeln(a+"kilogramm");
//         break;
//     case 4:
//         a=a*1000;
//         document.writeln(a+"kilogramm");
//         break;
//     case 5:
//         a=a*100;
//         document.writeln(a+"kilogramm");
//         break;
//     default:
//         document.writeln("Xato kiritdingiz!");
//         break;
// }


// Case 8
// let k=+prompt("Oyning no'merini kiriting:");
// let a=+prompt("Sanani kiriting:");
// if (a==1) {
//     k--;
//     switch (k) {
//         case 1:
//         case 3:
//         case 4:
//         case 6:
//         case 8:
//         case 9:
//         case 11:
//             a=31;
//             break;
//         case 2:
//             a=28;
//             break;
//         case 5:
//         case 7:
//         case 10:
//             a=30;
//             break;
//     }
// }
// else 
// a--;
// switch (k) {
//     case 1:
//         if(a>0 & a<=31)
//         document.writeln("Yanvarning"+a+"kuni");
//         break;
//     case 2:
//         if(a>0 & a<=28)
//         document.writeln("Fevralning"+a+"kuni");
//         break;
//     case 3:
//         if(a>0 & a<=31)
//         document.writeln("Martning "+a+" kuni");
//         break;
//     case 4:
//         if(a>0 & a<=30)
//         document.writeln("Aprelning "+a+" kuni");
//         break; 
//     case 5:
//         if(a>0 & a<=31)
//         document.writeln("Mayning "+a+" kuni");
//         break;  
//     case 6:
//         if(a>0 & a<=30)
//         document.writeln("Iyunning "+a+" kuni");
//         break;
//     case 7:
//         if(a>0 & a<=31)
//         document.writeln("Iyulning"+a+"kuni");
//         break;
//     case 8:
//         if(a>0 & a<=31)
//         document.writeln("Avgustning"+a+"kuni");
//         break;
//     case 9:
//         if(a>0 & a<=30)
//         document.writeln("Sentabrning"+a+"kuni");
//         break;
//     case 10:
//         if(a>0 & a<=31)
//         document.writeln("Oktabrning"+a+"kuni");
//         break;
//     case 11:
//         if(a>0 & a<=30)
//         document.writeln("Noyabrning"+a+"kuni");
//         break;
//     case 12:
//         if(a>0 & a<=31)
//         document.writeln("Dekabrning"+a+"kuni");
//         break;
//     default:
//         document.writeln("Xato kiritdingiz!");
//         break;
// }

// Case 9
// let k=+prompt("Oyning no'merini kiriting:");
// let a=+prompt("Sanani kiriting:");
// switch (k) {
//     case 1:
//         if (a>0 & a+1<=31)
//         document.writeln("Yanvarning"+(a+1)+"-kuni");
//         else {
//             if (a=1==32)
//             document.writeln("fevralning 1-kuni");
//         }
//         break;
//     case 2:
//         if (a>0 & a+1<28) 
//         document.writeln("Fevralning"+(a+1)+"kuni");
//         else {
//             if (a=1==29) 
//             document.writeln("martning 1-kuni");
//         }
//         break;
//     case 3:
//         if (a>0 & a+1<=31)
//         document.writeln("Martning"+(a+1)+"kuni");
//         else {
//             if (a+1==32)
//             document.writeln("Aprelning 1-kuni");
//         }
//         break;
//     case 4:
//         if (a>0 & a+1<=30)
//         document.writeln("Aprilning"+(a+1)+"-kuni");
//         else {
//             if (a+1==31)
//             document.writeln("Mayning 1-kuni");
//         }
//         break;
//     case 5:
//         if (a>0 & a+1<=31)
//         document.writeln("Mayning "+(a+1)+" -kuni");
//         else {
//             if (a+1==31)
//             document.writeln("Iyunning 1-kuni");
//         }
//         break;
//     case 6:
//         if (a>0 & a+1<=30)
//         document.writeln("Iyunning "+(a+1)+"-kuni");
//         else {
//             if (a+1==31)
//             document.writeln("Iyunning 1-kuni");
//         }
//         break;
//     case 7:
//         if (a>0 & a+1<=31)
//         document.writeln("Iyulning"+(a+1)+"-kuni");
//         else {
//             if (a+1==32)
//             document.writeln("Avgustning 1-kuni");

//         }
//         break;
//     case 8:
//         if (a>0 & a+1<=31)
//         document.writeln("Avgustning"+(a+1)+"-kuni");
//         else {
//             if (a+1==32)
//             document.writeln("Sentabrning 1-kuni");
//         }
//         break;
//     case 9:
//         if (a>0 & a+1<=30)
//         document.writeln("Sentabrning"+(a+1)+"-kuni");
//         else {
//             if (a+1==31)
//             document.writeln("Oktabrning 1-kuni");
//         }
//         break;
//     case 10:
//         if (a>0 & a+1<=31)
//         document.writeln("Oktabrning"+(a+1)+"-kuni");
//         else {
//             if (a+1==32)
//             document.writeln("Noyabrning 1-kuni");
//         }
//         break;
//     case 11:
//         if (a>0 & a+1<=30)
//         document.writeln("Noyabrning"+(a+1)+"-kuni");
//         else {
//             if (a+1==31)
//             document.writeln("Dekabrning 1-kuni");
//         }
//         break;
//     case 12:
//         if (a>0 & a+1<=31)
//         document.writeln("Dekabrning"+(a+1)+"-kuni");
//         else {
//             if (a+1==32)
//             document.writeln("Yanvarning 1-kuni");
//         }
//         break;
//     default:
//         document.writeln("Xato kiritdingiz!");
//         break;
//      }
    


// Case 10
// let k=+prompt("Robotning boshlang'ich holatini kiriting:");
// let n=+prompt("Komandda bering:");
// k=(k+n)%4;
// switch (k) {

//     case 1:
//         document.writeln("Shimolga qarab turibdi");
//         break;
//     case 2:
//         document.writeln(" Sharqga qarab turibdi");
//         break;
//     case 3:
//         document.writeln(" Janubga qarab turibdi");
//         break;
//     case 0:
//         document.writeln(" G'arbga qarab turibdi");
//         break;
// }


// To'rtburchak 
let a = +prompt("1-tomoni uzunligini kiriting: ");
let b = +prompt("2-tomoni uzunligini kiriting: ");
let S = a * b;
let p = 2 * (a + b);
let c = p;
if (S > p) {
    c = S;
}
document.write(c);




//  While 1
// let a=+prompt("A sonni kiriting:");
// let b=+prompt("B sonni kiriting:");
// if (a<b){
//     document.writeln(" A kesma B kesmadan katta bo'lsin");
// }
// while (a>=b) {
//     c-=b;
// }
// document.writeln(c);

// While 2
// let a=+prompt("A sonni kiriting:");
// let b=+prompt("B sonni kiriting:");
// let counter=0;
// if (a<b) {
//     document.writeln("A kesma B kesmadan katta bo'lsin");
// }
// while (a>=b) {
//     a -=b;
//     counter++;
// }
// document.writeln("B ni "+counter+" marta joylashtirish mumkin");


// While 3
// let c = 0;
//     N = +prompt("A kesmani uzunligini kiriting:");
//     K = +prompt("B kesmani uzunligini kiriting:");
//     if (N <= K) {
//         document.writeln("A kesma B kesmadan katta bo'lishi kerak");
//     } 
// q = N;
// while (q >= K) {
//     q -= K;
//     c++;
// };
// document.writeln("Butun qismi: "+c+" qoldiq qismi: "+q);


// While 4

