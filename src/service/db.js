


const region = [
    {
        id: 1,
        name: "Tashkent",
    },
    {
        id: 2,
        name: "Andijan Region",
    },
    {
        id: 3,
        name: "Bukhara Region",
    },
    {
        id: 4,
        name: "Fergana Region",
    },
    {
        id: 5,
        name: "Jizzakh Region",
    },
    {
        id: 6,
        name: "Namangan Region",
    },
    {
        id: 7,
        name: "Navoiy Region",
    },
    {
        id: 8,
        name: "Qashqadaryo Region",
    },
    {
        id: 9,
        name: "Samarqand Region",
    },
    {
        id: 10,
        name: "Sirdaryo Region",
    },
    {
        id: 11,
        name: "Surxondaryo Region",
    },
    {
        id: 12,
        name: "Tashkent Region",
    },
    {
        id: 13,
        name: "Xorazm Region",
    },
    {
        id: 14,
        name: "Republic of Karakalpakstan",
    },
  
];


const products = [
    {
        id: 1,
        name: "Ласка",
        category: "Бакалея",
        price: "14 000",
        status: "ACTIVE",
        count: "100",
        description: "Масло произведено из отборных созревших семян с использованием натуральных способов очистки.Инновационная технология бережной очистки: многоступенчатый процесс натуральной очистки удаляет вредные вещества, но сохраняет природную пользу",
        img: "https://images.uzum.uz/cjip2qsjvf2hn7fe7kng/original.jpg"
    },
    {
        id: 2,
        name: "Tanho",
        category: "Бакалея",
        price: "18 000",
        status: "ACTIVE",
        count: "120",
        description: "Томатная паста Tanho 3318, 520 г",
        img: "https://images.uzum.uz/cgpavbnhj8j9g69circ0/original.jpg"
    },
    {
        id: 3,
        name: "Alpen Gold Max Fun",
        category: "Шоколад",
        price: "18 000",
        status: "ACTIVE",
        count: "28",
        description: "Alpen Gold - Твой Момент Радости! Шоколад Alpen Gold появился на российском рынке в 1992 году, и его история - это история успеха. Высокое качество, яркая упаковка, интересные сочетания шоколада и ингредиентов приносят радость и удовольствие всем потребителям, позволяя одерживать все новые и новые победы на российском рынке шоколада",
        img: "https://images.uzum.uz/cfvk9onhj8j9g698q3vg/original.jpg"
    },
    {
        id: 4,
        name: "Raffaello",
        category: "Шоколад",
        price: "50 000",
        status: "ACTIVE",
        count: "0",
        description: "Уникальный рецепт Raffaello - это гармония ингредиентов, отобранных с особой заботой: сладкий белый миндаль и отборный кокосовый орех с тропических островов, придают непередаваемую нежность вкусу. Raffaello - истинное удовольствие",
        img: "https://images.uzum.uz/cet6dh0v1htd23akftd0/original.jpg"
    },
    {
        id: 5,
        name: "Oila tanlovi Кения",
        category: "Чай",
        price: "6 000",
        status: "ACTIVE",
        count: "2502",
        description: "Черный кенийский чай Oila Tanlovi в гранулах — точно понравится любителям чая! Черный чай Oila Tanlovi сочетает в себе лучшие свойства высокогорных чаев: экологичность и высокое содержание полезных веществ. ",
        img: "https://images.uzum.uz/cjrcuhrk9fq13g457dq0/t_product_240_high.jpg"
    },
    {
        id: 6,
        name: "Azercay Xalca",
        category: "Чай",
        price: "49 000",
        status: "ACTIVE",
        count: "5",
        description: "Чай Azercay Xalca с чабрецом 100 гр, железная банка.",
        img: "https://images.uzum.uz/ce8vn0ov1htd23ait270/original.jpg"
    },
    {
        id: 7,
        name: "Flash Up Energy",
        category: "Напитки",
        price: "5 000",
        status: "ACTIVE",
        count: "0",
        description: "Напиток тонизирующий (энергетический) Flash Up Energy с кофеином и таурином. Освежающий и насыщенный со вкусом ягод зарядит чистой энергией и ярким вкусом. В составе этого безалкогольного напитка всё тот же дерзкий микс из кофеина, таурина, витаминов B3, B5, B6, B9, бета-каротина, подобранных таким образом, чтобы снять усталость и стимулировать физическую активность.",
        img: "https://images.uzum.uz/cdf6l3rb3ho5lmur8tfg/original.jpg"
    },
    {
        id: 8,
        name: "Adrenaline Rush",
        category: "Напитки",
        price: "7 000",
        status: "ACTIVE",
        count: "0",
        description: "Не рекомендуется употребление детьми в возрасте до 18 лет, при беременности и кормлении грудью, а также лицам, страдающими повышенной нервной возбудимостью, бессонницей, артериальной гипертензией. Чрезмерное употребление вредит здоровью",
        img: "https://images.uzum.uz/ciai2un5d7kom1tie7tg/original.jpg"
    },
    {
        id: 9,
        name: "Капуста",
        category: "Фрукты и овощи",
        price: "5 000",
        status: "ACTIVE",
        count: "1000",
        description: "Капуста",
        img: "https://i.ibb.co/Pxz4KBR/png-clipart-green-cauliflower-cauliflower-cruciferous-vegetables-broccoli-fruit-cauliflower-leaf-veg.png"
    },
    {
        id: 10,
        name: "Лук репчатый",
        category: "Фрукты и овощи",
        price: "2 500",
        status: "ACTIVE",
        count: "2000",
        description: "Лук репчатый",
        img: "https://i.ibb.co/zh2MHnJ/gratis-png-cebolla-amarilla-vegetal-mandi-vegetal.png"
    },
    {
        id: 11,
        name: "Морковь желтая",
        category: "Фрукты и овощи",
        price: "1 500",
        status: "ACTIVE",
        count: "1000",
        description: "Морковь желтая",
        img: "https://i.ibb.co/9gzWhbs/medium-1675276083740122000013-00002.png"
    },
    {
        id: 12,
        name: "Киви Иран",
        category: "Фрукты и овощи",
        price: "5 500",
        status: "ACTIVE",
        count: "0",
        description: "Киви Иран",
        img: "https://i.ibb.co/ns9B06C/gratis-png-kiwi.png"
    },
    {
        id: 13,
        name: "Апельсин Африка",
        category: "Фрукты и овощи",
        price: "15 500",
        status: "ACTIVE",
        count: "5000",
        description: "Апельсин Африка",
        img: "https://i.ibb.co/dB8yrdb/gratis-png-naranja.png"
    },
    {
        id: 14,
        name: "Семечки соленые Джинн",
        category: "Сухофрукты",
        price: "19 000",
        status: "ACTIVE",
        count: "420",
        description: "По-настоящему жареные, отборные семечки подсолнечника Джинн Premium приправлены морской солью. Соль морских глубин наполняет организм важными микроэлементами. Кроме того, в семечках содержатся: витамин Е и В, полезные жирные аминокислоты, глютамин и аргинин, беатин, железо, цинк, магний и селен. ",
        img: "https://images.uzum.uz/cdp37jgl08kcldtnnvpg/original.jpg"
    },
    {
        id: 15,
        name: "Финики Date Bam",
        category: "Сухофрукты",
        price: "20 000",
        status: "ACTIVE",
        count: "1660",
        description: "Финики ― плоды финиковой пальмы, высокого дерева семейства пальм, с длинными (до 6 метров) крупными листьями. Финики ― сочные ягоды, крупные, овальные или шарообразной формы янтарно-красного цвета.Финики— удивительный плод, которому во многих странах приписывают свойства укреплять здоровье и продлевать жизнь.  ",
        img: "https://images.uzum.uz/cg3d3sfg49devoa9uj80/original.jpg"
    },
    {
        id: 16,
        name: "Бегемотик Бонди",
        category: "Снеки",
        price: "12 000",
        status: "ACTIVE",
        count: "993",
        description: "Вкусное и полезное печенье для самых маленьких.Печенье с нежной структурой, обогащенное кальцием.Разработано совместно с НИИ питания РАМН.",
        img: "https://images.uzum.uz/ce7f3i0v1htd23aipia0/original.jpg"
    },
    {
        id: 17,
        name: "Печенье Яшкино",
        category: "Снеки",
        price: "7 000",
        status: "ACTIVE",
        count: "75",
        description: "Классическое сахарное печенье.Рассыпчатое печенье со вкусом пломбира.Не содержит красителей.",
        img: "https://images.uzum.uz/cg8ognvhj8j9g69a0b1g/original.jpg"
    },
    {
        id: 18,
        name: "Печенье Delice",
        category: "Снеки",
        price: "31 000",
        status: "ACTIVE",
        count: "0",
        description: "Делис - полезное печенье из овсяных хлопьев. Его любят взрослые и дети. Не содержит ГМО. Халяль Печенье в индивидуальное упаковке. Удобно брать с собой в школу, на работу, делиться с друзьями, покупать на детские праздники.",
        img: "https://images.uzum.uz/ckjbgnjk9fq8lb3av9h0/original.jpg"
    },
    {
        id: 19,
        name: "MAKFA",
        category: "Бакалея",
        price: "60 000",
        status: "ACTIVE",
        count: "36",
        description: "Натуральный продукт, приготовленный по классической рецептуре макаронного теста: пшеничная мука высокого качества и чистейшая вода. Благодаря пшенице твердых сортов макароны Makfa прекрасно сохраняют форму и вкусовые свойства при варке. Разнообразие размеров, форм и форматов – это кулинарный простор для искушенных гурманов и затейливых хозяек.",
        img: "https://images.uzum.uz/cca41v6ha888i5ellhh0/original.jpg"
    },
    {
        id: 20,
        name: "Tahno",
        category: "Бакалея",
        price: "7 000",
        status: "ACTIVE",
        count: "153",
        description: "Макароны Federici вы сможете использовать как самостоятельное блюдо или добавлять в супы или салаты. Для приготовления данного продукта достаточно высыпать содержимое упаковки в кипящую воду и варить 4 минуты на умеренном огне.",
        img: "https://images.uzum.uz/cd3e4l35a95unf126l60/original.jpg"
    },
];





export {
    region,
    products
};
