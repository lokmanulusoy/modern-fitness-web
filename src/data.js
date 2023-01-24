import { MdFitnessCenter } from "react-icons/md";
export const links = [
  {
    name: "Anasayfa",
    path: "/",
  },
  {
    name: "Hakkında",
    path: "/about",
  },
  {
    name: "Galeri",
    path: "/gallery",
  },
  {
    name: "Planlar",
    path: "/plans",
  },
  {
    name: "Eğitmenler",
    path: "/trainers",
  },
  {
    name: "İletişim",
    path: "/contact",
  },
];

export const programs = [
  {
    id: 1,
    icon: <MdFitnessCenter />,
    title: "Program Bir",
    info: " Bu programdan elde edeceğiniz fonksiyonel güç, atletik/fitness performanslarınızı, günlük yaşam aktivitelerinizi kolaylaştıracak ve fiziksel aktiviteden aldığınız keyfi artıracak.",
    path: "/programs/111",
  },
  {
    id: 2,
    icon: <MdFitnessCenter />,
    title: "Program İki",
    info: "Bu program, sürekli egzersiz yapmaya yeni başlayanların yanı sıra bir yaralanma veya egzersiz molasından sonra egzersize yeniden başlayanlar için idealdir. Bu program kondisyonunuzu geliştirmekle kalmayacak, kalıcı bir vücut kazanmanıza yardımcı olacaktır.",
    path: "/programs/222",
  },
  {
    id: 3,
    icon: <MdFitnessCenter />,
    title: "Program Üç",
    info: "Bu egzersizde performansınızı artırmak için kuvvet antrenmanı, kardiyo ve temel rutinlerin bir karışımını kullanacaksınız. Bu programdaki her antrenman, bu kıyaslama egzersizlerinden (veya bunların öğelerinden) bir veya daha fazlasını içerir. ",
    path: "/programs/333",
  },
  {
    id: 4,
    icon: <MdFitnessCenter />,
    title: "Program Dört",
    info: "Ana eğitim türleri kuvvet antrenmanı ve HIIT'tir, ancak bu program aynı zamanda fonksiyonel antrenman, plyometrics, Pilates, hem izolasyon hem de tüm vücut çalışması, temeller, denge ve koordinasyon, esneme, yoga ve toparlanma kardiyosunu içerir. ",
    path: "/programs/444",
  },
];

export const values = [
  {
    id: 1,
    icon: <MdFitnessCenter />,
    title: "Ders 1",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    id: 2,
    icon: <MdFitnessCenter />,
    title: "Ders 2",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    id: 3,
    icon: <MdFitnessCenter />,
    title: "Ders 3",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    id: 4,
    icon: <MdFitnessCenter />,
    title: "Ders 4",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "Ne sıklıkla egzersiz yapmalıyım?",
    answer: "Programda yazana göre 1 gün on 1 gün off şeklinde yapmalısınız.",
  },
  {
    id: 2,
    question: "Günün hangi saatinde çalışmak en iyisidir?",
    answer: "Sabah saatleri verim açısından en yüksek zamanlardır.",
  },
  {
    id: 3,
    question: "Antrenmanlarım ne kadar sürmeli?",
    answer: "Süre antrenmaların içeriğinde mevcut.",
  },
  {
    id: 4,
    question: "Antrenmanlarımdan önce ısınmam gerekiyor mu?",
    answer: "Evet. Isınmama durumunda kalıcı sakatlıklar meydana gelebilir.",
  },
  {
    id: 5,
    question:
      "Kuvvet antrenmanı mı, kardiyo mu yoksa ikisini birden mi yapmalıyım?",
    answer:
      "Kardiyo ve kuvvet antrenmanı tercihe göre seçilir.İkisini birden yapmak genellikle kilo vermek ve kas kazanmak için  uygundur.",
  },
  {
    id: 6,
    question: "Kuvvet antrenmanı için ağırlık kaldırmalı mıyım?",
    answer:
      "Kuvvet antrenmanları için hem vücut ağırlığı hemde fiziksel ağırlıklar kullanılabilir.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Diana Ayi",
    quote: "Çok başarılı bir şirket.Gelişimime faydası oldu.",
    job: "Öğrenci",
    avatar: require("./images/avatar1.jpg"),
  },
  {
    id: 2,
    name: "Daniel Vinyo",
    quote: "Sayelerinde 20 kilogram verdim.",
    job: "Yazılım Mühendisi",
    avatar: require("./images/avatar2.jpg"),
  },
  {
    id: 3,
    name: "Edem Quist",
    quote:
      "Zorlandığınız zamanlar oluyor.Ama başardığınızı görmeniz zorluklarla mücadelenizi taçlandırıyor.",
    job: "Üniversite Hocası",
    avatar: require("./images/avatar3.jpg"),
  },
  {
    id: 4,
    name: "Grace Lavoe",
    quote:
      "Gelişimimi sürdürmem açısından çok faydasını gördüm.Tavsiye ederim.",
    job: "Dijital Pazarlama Uzmanı",
    avatar: require("./images/avatar4.jpg"),
  },
  {
    id: 5,
    name: "Nana Yaa Dankwa",
    quote:
      "Beslenme ve antrenmanı yaptığınız sürece gerisini düşünmenize gerek yok.",
    job: "Eczacı",
    avatar: require("./images/avatar5.jpg"),
  },
];

export const plans = [
  {
    id: 1,
    name: "Gümüş Paket",
    desc: "Bu paket, sürekli yardıma ihtiyaç duyan yeni başlayanlar için mükemmeldir.",
    price: 29.99,
    features: [
      { feature: "İlk Özellik", available: true },
      { feature: "İkinci Özellik", available: true },
      { feature: "Üçüncü Özellik", available: true },
      { feature: "Dördüncü Özellik", available: true },
      { feature: "Beşinci Özellik", available: true },
      { feature: "Beşinci Özellik Plus", available: false },
      { feature: "Altıncı Özellik", available: false },
      { feature: "Yedinci Özellik", available: false },
      { feature: "Yedinci Özellik Plus", available: false },
      { feature: "Sekizinci Özellik", available: false },
      { feature: "Dokuzuncu Özellik", available: false },
      { feature: "Onuncu Özellik", available: false },
      { feature: "Onbirinci Özellik", available: false },
    ],
  },
  {
    id: 2,
    name: "Altın Paket",
    desc: "Bu, ne yaptığını bilen yeni başlayanlar için mükemmel bir pakettir.",
    price: 49.99,
    features: [
      { feature: "İlk Özellik", available: true },
      { feature: "İkinci Özellik", available: true },
      { feature: "Üçüncü Özellik", available: true },
      { feature: "Dördüncü Özellik", available: true },
      { feature: "Beşinci Özellik", available: true },
      { feature: "Beşinci Özellik Plus", available: true },
      { feature: "Altıncı Özellik", available: true },
      { feature: "Yedinci Özellik", available: true },
      { feature: "Yedinci Özellik Plus", available: false },
      { feature: "Sekizinci Özellik", available: false },
      { feature: "Dokuzuncu Özellik", available: false },
      { feature: "Onuncu Özellik", available: false },
      { feature: "Onbirinci Özellik", available: false },
    ],
  },
  {
    id: 3,
    name: "Platinum Paket",
    desc: "Bu paket, eve çalışan meşgul insanlar için mükemmeldir.",
    price: 89.99,
    features: [
      { feature: "İlk Özellik", available: true },
      { feature: "İkinci Özellik", available: true },
      { feature: "Üçüncü Özellik", available: true },
      { feature: "Dördüncü Özellik", available: true },
      { feature: "Beşinci Özellik", available: true },
      { feature: "Beşinci Özellik Plus", available: true },
      { feature: "Altıncı Özellik", available: true },
      { feature: "Yedinci Özellik", available: true },
      { feature: "Yedinci Özellik Plus", available: true },
      { feature: "Sekizinci Özellik", available: true },
      { feature: "Dokuzuncu Özellik", available: true },
      { feature: "Onuncu Özellik", available: true },
      { feature: "Onbirinci Özellik", available: true },
    ],
  },
];

const Trainer1 = require("./images/trainer1.jpg");
const Trainer2 = require("./images/trainer2.jpg");
const Trainer3 = require("./images/trainer3.jpg");
const Trainer4 = require("./images/trainer4.jpg");
const Trainer5 = require("./images/trainer5.jpg");
const Trainer6 = require("./images/trainer6.jpg");

export const trainers = [
  {
    id: 1,
    image: Trainer1,
    name: "John Doe",
    job: "Aerobik Hareketler Antrenörü",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 2,
    image: Trainer2,
    name: "Daniel vinyo",
    job: "Hız Antrenörü",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 3,
    image: Trainer3,
    name: "Edem Quist",
    job: "Esneklik Antrenörü",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 4,
    image: Trainer4,
    name: "Shatta Wale",
    job: "Vücut Antrenörü",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 5,
    image: Trainer5,
    name: "Diana Ayi",
    job: "Devre Antrenörü",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 6,
    image: Trainer6,
    name: "Wayne Carter",
    job: "Fiziksel Hafıza Eğitmeni",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
];
