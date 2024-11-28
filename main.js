//1
let num1 = +prompt(`
  Berilgan ikkita sonning har biri musbat ekanligini aniqlang.
Sonni kiriting:`);
num2 = +prompt(`Son2 ni kiritng:`);
if (num1 > 0 && num2 > 0) {
  alert(`true`);
} else {
  alert(`true`);
}
//2
let num3 =
  +prompt(`Uchta son berilgan. Ulardan hech bo'lmaganda bittasi manfiy bo'lishi mumkinmi?
  Sonni kiriting:`);
num4 = +prompt(`Son2 ni kiritng:`);
$num4 = +prompt(`Son3 ni kiritng:`);
if (num3 < 0 || num4 < 0 || $num4 < 0) {
  alert(`true`);
} else {
  alert(`false`);
}
//3
let num5 = +prompt(`Berilgan son juft va musbatmi?
  Sonni kiriting:`);
if (num5 > 0 && num5 % 2 === 0) {
  alert(`true`);
} else {
  alert(`false`);
}
//4
let num7 =
  +prompt(`4.Ikki sonning yig'indisi ularning ko'paytmasidan katta ekanligini tekshiring.
  Sonni kiriting:`);
num8 = +prompt(`Son2 ni kiritng:`);
if (num7 + num8 > num7 * num8) {
  alert(`true`);
} else {
  alert(`false`);
}
//5
let num9 =
  +prompt(`5.Berilgan son 100 dan katta va 999 dan kichik ekanligini aniqlang.
  Sonni kiriting:`);
if (num9 > 100 && num9 < 999) {
  alert(`true`);
} else {
  alert(`false`);
}

//6
let num11 = +prompt(`6.Uchta sonning yig'indisi musbat ekanligini tekshiring.
  Sonni kiriting:`);
num12 = +prompt(`Son2 ni kiritng:`);
$num11 = +prompt(`Son3 ni kiritng:`);
if (num11 + num12 + $num11 > 0) {
  alert(`true`);
} else {
  alert(`false`);
}
//7
let num13 = +prompt(
  `Berilgan ikkita sonning biri 0 bo'lmasligini tekshiring.Sonni kiriting:`
);
num14 = +prompt(`Son2 ni kiritng:`);
if (num13 !== 0 && num14 !== 0) {
  alert(`true`);
} else {
  alert(`false`);
}
//8
let num15 =
  +prompt(`Ikki sonning ko'paytmasi musbat va ularning ayirmasi manfiy ekanligini aniqlang.
Sonni kiriting:`);
num16 = +prompt(`Son2 ni kiritng:`);
if (num15 * num16 > 0 && num15 - num16 < 0) {
  alert(`true`);
} else {
  alert(`false`);
}
//9
let num17 = +prompt(`Berilgan son ikki xonali musbat sonmi?
  Sonni kiriting:`);
if (num17 >= 10 && num17 <= 99) {
  alert(`true`);
} else {
  alert(`false`);
}
//10
let num19 = +prompt(`Berilgan son juft va 5 ga karrali ekanligini tekshiring.
  Sonni kiriting:`);
if (num19 % 2 == 0 && num19 % 5 == 0) {
  alert(`true`);
} else {
  alert(`false`);
}
//11
let num21 =
  +prompt(`11.Uchta sonning hech bo'lmaganda ikkitasi teng ekanligini aniqlang.
  Sonni kiriting:`);
num22 = +prompt(`Son2 ni kiritng:`);
$num22 = +prompt(`Son3 ni kiritng:`);
if (num21 == num22 || num21 == $num22 || num22 == $num22) {
  alert(`true`);
} else {
  alert(`false`);
}
//12
let num23 = prompt(
  `Xato ekan. Berilgan son 7 ga bo'linadi va 3 ga bo'linmaydimi?`
);
//13
let num25 =
  +prompt(`13.Ikkita sonning biri 0 yoki ikkalasi ham manfiy ekanligini tekshiring.
  Sonni kiriting:`);
num26 = +prompt(`Son2 ni kiritng:`);
if (num25 == 0 || num26 == 0 || (num25 < 0 && num26 < 0)) {
  alert(`true`);
} else {
  alert(`false`);
}

//14
let num27 = +prompt(`1-son`);
let num28 = +prompt(`1-son`);
let $num27 = +prompt(`1-son`);
let max;
if (num27 > num28) {
  max = son27;
} else {
  max = son28;
}
if ($num27 > max) {
  max = $num27;
}
if (max > 0) {
  alert(true);
} else {
  alert(false);
}
//15
let num29 = +prompt(`15.Berilgan son 10 va 20 orasida emasligini aniqlang.
  Sonni kiriting:`);
if (num29 < 10 && num29 > 20) {
  alert(`true`);
} else {
  alert(`false`);
}

//16
let num31 =
  +prompt(`16.Ikkita sonning yig'indisi manfiy yoki ularning ko'paytmasi musbat ekanligini tekshiring.
  Sonni kiriting:`);
num32 = +prompt(`Son2 ni kiritng:`);
if (num31 + num32 < 0 || num31 * num32 > 0) {
  alert(`true`);
} else {
  alert(`false`);
}
//17
let num33 = +prompt(`17.Uchta sonning eng kichigi juft ekanligini aniqlang.
Sonni kiriting:`);
num34 = +prompt(`Son2 ni kiritng:`);
$num34 = +prompt(`Son3 ni kiritng:`);
let minNum;
if (num33 < num34) {
  minNum = num33;
} else {
  minNum = num34;
}
if ($num34 < minNum) {
  minNum = $num34;
}
if (minNum % 2 == 0) {
  alert(true);
} else {
  alert(false);
}
//18
let num35 =
  +prompt(`18.Berilgan sonning oxirgi raqami 5 yoki 0 ekanligini tekshiring. 
O'tilmagan dars:`);
//19
let num37 =
  +prompt(`19.Ikki sonning biri musbat va ikkinchisi manfiy ekanligini aniqlang.
  Sonni kiriting:`);
num38 = +prompt(`Son2 ni kiritng:`);
if (num37 > 0 && num38 < 0) {
  alert(`son1 musbat Son2 manfiy`);
} else if (num37 < 0 && num38 > 0) {
  alert(`son1 manfiy, son2 musbat`);
} else {
  alert(`false`);
}
//20
let num39 =
  +prompt(`20.Uchta sonning hech bo'lmaganda bittasi juft ekanligini tekshiring.
  Sonni kiriting:`);
num40 = +prompt(`Son2 ni kiritng:`);
num41 = +prompt(`Son3 ni kiritng:`);
if (num39 % 2 == 0 || num40 % 2 == 0 || num41 % 2 == 0) {
  alert(`true`);
} else {
  alert(`false`);
}
//22
let num41 =
  +prompt(`22.Berilgan ikki sonning biri ikkinchisiga karrali ekanligini tekshiring.
  Sonni kiriting:`);
num42 = +prompt(`Son2 ni kiritng:`);
if (num41 % num42 == 0) {
  alert(`true`);
} else {
  alert(`false`);
}
//23
let num45 =
  +prompt(`23.Uchta sonning yig'indisi 0 yoki ko'paytmasi manfiy ekanligini aniqlang.
  Sonni kiriting:`);
num46 = +prompt(`Son2 ni kiritng:`);
num47 = +prompt(`Son3 ni kiritng:`);
if (num45 + num46 + num47 == 0 || num45 * num46 * num47 < 0) {
  alert(`true`);
} else {
  alert(`false`);
}
//25
let num49 =
  +prompt(`25.Ikki sonning biri toq va ikkinchisi juft ekanligini aniqlang.
  Sonni kiriting:`);
num50 = +prompt(`Son2 ni kiritng:`);
if (num49 % 2 == 0 && num50 % 2 == 1) {
  alert(`son1 juft, son2 toq`);
} else if (num49 % 2 == 1 && num50 % 2 == 0) {
  alert(`son1 toq, son2 juft`);
} else {
  alert(`false`);
}
//26
let num51 = +prompt(`26.Berilgan son musbat va uch xonali emasligini aniqlang.
Sonni kiriting:`);
if (num51 > 0 && num51 <= 99) {
  alert(`true`);
} else {
  alert(`false`);
}
//27
let num53 =
  +prompt(`27.Uchta sonning yig'indisi 100 dan katta yoki ko'paytmasi manfiy ekanligini tekshiring.
Son1 ni kitiring`);
let num54 = +prompt(`Son2 ni kirting:`);
let $num54 = +prompt(`Son3 ni kirting:`);
if (num53 + num54 + $num54 > 100 || num53 * num54 * $num54 < 0) {
  alert(`true`);
} else {
  alert(`false`);
}
//28
let num55 =
  +prompt(`28.Ikki sonning biri 10 dan katta va ikkinchisi 0 dan kichik ekanligini aniqlang.
Son1 ni kiriting:`);
let num56 = +prompt(`Son 2 ni kiiriting`);
if (num55 > 10 && num56 < 0) {
  alert(`Son1 10dan katta son2 0dan kichik`);
} else if (num56 > 10 && num55 < 0) {
  alert(`Son2 10dan katta son1 0dan kichik`);
} else {
  alert(`mos emas`);
}
//29
let num57 = +prompt(`29.Berilgan son toq va musbatmi?
Sonni kiritng:`);
if (num57 > 0) {
  alert(`Musbat son`);
} else {
  alert(`Manfiy son`);
}
//30
let num59 =
  +prompt(`30.Ikki sonning hech bo'lmaganda bittasi musbat ekanligini tekshiring.
  Son1 ni kiriting`);
let num60 = +prompt(`son2 ni kkiktiyng:`);
let $num60 = +prompt(`son3 ni kkiktiyng:`);
if (num59 < 0 || num60 < 0 || $num60 < 0) {
  alert(`true`);
} else {
  alert(`mos emas`);
}
//31
let num61 =
  +prompt(`31.Berilgan son juft va 4 ga karrali, lekin 8 ga karrali emasligini aniqlang.
Sonni kiriting`);
if (num61 % 2 == 0 && num61 % 4 == 0 && nuum61 % 8 != 0) {
  alert(`true`);
} else {
  `false`;
}
//32
let num63 =
  +prompt(`32.Uchta sonning faqat bittasi manfiy ekanligini tekshiring.
  Son1 ni kiriting:`);
let num64 = +prompt(`son2 ni kkiktiyng:`);
let num65 = +prompt(`son3 ni kkiktiyng:`);
if (
  (num63 > 0 && num64 > 0 && num65 < 0) ||
  (num63 > 0 && num64 < 0 && num65 > 0) ||
  (num63 < 0 && num64 > 0 && num65 > 0)
) {
  alert(`true`);
} else {
  alert(`mos emas`);
}

//34
let num67 =
  +prompt(`34.Ikkita sonning yig'indisi ularning farqidan katta ekanligini aniqlang.
Son1 ni kiriting:`);
num68 = +prompt(`son2 ni kiriting`);
if (num67 + num68 > (num67 - num68 || num68 - num67)) {
  alert(true);
} else {
  false;
}
//35
let num69 =
  +prompt(`35.Berilgan son 0 dan katta va 1000 dan kichik ekanligini tekshiring.
  Son kiriting:`);
if (num69 > 0 && num69 < 1000) {
  alert(`true`);
} else {
  alert("false");
}
//36
let num71 = +prompt(
  `36.Ikki sonning biri juft va ularning ko'paytmasi 20 dan katta ekanligini aniqlang
  1-son:`
);
let num72 = +prompt(`2-son`);
if ((num71 % 2 == 0 || num72 % 2 == 0) && num71 * num72 > 20) {
  alert(`son qanoatlandi`);
} else `son qanoatlantirilmadi`;
//37
let num73 =
  +prompt(`37.Uchta sonning hech bo'lmaganda bittasi 10 ga bo'linadi ekanligini tekshiring.
    1-son:`);

let num74 = +prompt(`2-son`);
let $num74 = +prompt(`3-son`);
if (num73 % 10 == 0 || num74 % 10 == 0 || $num74 % 10 == 0) {
  alert(`10ga bo'linadigan son mavjud`);
}
//38
let num75 = +prompt(`38.Berilgan son 4 ga karrali va toq emasligini aniqlang.
    kiriting:`);
if (num75 % 4 == 0 && num75 % 2 == 0) {
  alert(`kiritilgan son juft va 4ga karrali`);
}
//39
let num77 =
  +prompt(`39.Uchta sonning ikkitasining yig'indisi uchinchisidan katta ekanligini tekshiring.
birinchi sonni kiriting`);
let num78 = +prompt(`2-son:`);
let $num79 = +prompt(`3-son:`);
if (
  num77 + num78 > $num79 &&
  num77 + $num79 > num78 &&
  $num79 + num78 > num77
) {
  alert(`shart bajarildi`);
} else `noto'g'ri`;
//40
let num79 =
  +prompt(`40.Ikki sonning biri musbat, biri manfiy va ularning ko'paytmasi musbat ekanligini tekshiring.
1-sonni kiriting:`);
let num80 = +prompt(`2-sonni kiriting:`);
let res40 = num79 * num80;
if (((num79 < 0 && num80 > 0) || (num79 > 1 && num80 < 0)) && res40 > 0) {
  alert(`sonlar ko'paymasi musbat`);
} else {
  alert(`mos emas`);
}
