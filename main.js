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
