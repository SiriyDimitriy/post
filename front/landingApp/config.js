import React from 'react';
import priceConfig from './prices.js';

const metalTailConfig = {
    siteName: 'Крыши.НЕТ',
    header: "Металочерепиця \nта комплектуючі",
    subHeader: "Роздрібний та оптовий продаж всіх видів черепиці \nта комплектуючих.",
    motivationMessage: "Якщо у Вас ще немає металочерепиці, тоді Вам до нас!",
    logoImg: "/images/landing/landing-logo.jpg",
    mainImg: "/images/landing/roof-main.png",
    products: [{
        label: 'Металочерепиця \nмонтеррей',
        image: '/images/landing/production/monterrey.png',
        table: {
            'Повна ширина': '1 200мм',
            'Ефективна ширина': '1 100мм',
            'Довжина кроку хвилі': '350мм',
            'Висота поперечного штампу': '23мм',
            'Висота хвилі': '25мм',
            'Товщина металу': '0,4мм/ 0,45мм/ 0,5мм/ 0,52мм',
            'Макс. довжина листу': '12 000мм',
            'Мін. кут нахилу крівлі': '14 градусів',
        }
    }, {
        label: 'Металочерепиця \nдюна',
        image: '/images/landing/production/duna.png',
        table: {
            'Повна ширина': '1 200мм',
            'Ефективна ширина': '1 120мм',
            'Довжина кроку хвилі': '350мм',
            'Висота поперечного штампу': '20мм',
            'Висота хвилі': '25мм',
            'Товщина металу': '0,4мм/ 0,45мм/ 0,5мм/ 0,52мм',
            'Макс. довжина листу': '12 000мм',
            'Мін. кут нахилу крівлі': '14 градусів',
        }
    }],
    prices: priceConfig.metalTailPrice,
    colors: [{
        ral: "RAL 1003",
        color: "Жовтий",
        cover: "PE",
        hex: "#f9a800"
    }, {
        ral: "RAL 1015",
        color: "Бежевий",
        cover: "PE",
        hex: "#e6d2b5"
    }, {
        ral: "RAL 3005",
        color: "Гнила вишня",
        cover: "PE / Матовий / Кварцматовий",
        hex: "#59191f"
    }, {
        ral: "RAL 3009",
        color: "Оксид червоний",
        cover: "Матовий",
        hex: "#6d342d"
    }, {
        ral: "RAL 3011",
        color: "Коричнево-червоний",
        cover: "PE",
        hex: "#792423"
    }, {
        ral: "RAL 5005",
        color: "Сигнально синій",
        cover: "PE / Клаудматовий",
        hex: "#005387"
    }, {
        ral: "RAL 5010",
        color: "Горечавково синій",
        cover: "PE",
        hex: "#004f7c"
    }, {
        ral: "RAL 6005",
        color: "Зелений",
        cover: "PE / Матовий / Кварцматовий",
        hex: "#114232"
    }, {
        ral: "RAL 6020",
        color: "Хромово-зелений",
        cover: "Матовий / Клаудматовий",
        hex: "#37422f"
    }, {
        ral: "RAL 7016",
        color: "Антрацитово-сірий",
        cover: "Матовий",
        hex: "#383e42"
    }, {
        ral: "RAL 7024",
        color: "Графітовий-сірий",
        cover: "Матовий / Кварцматовий",
        hex: "#45494e"
    }, {
        ral: "RAL 8004",
        color: "Теракотовий",
        cover: "Матовий / Кварцматовий / Клаудматовий",
        hex: "#8d4931"
    }, {
        ral: "RAL 8015",
        color: "Каштаново-коричневий",
        cover: "Кварцматовий",
        hex: "#5e2f26"
    }, {
        ral: "RAL 8017",
        color: "Шоколадно-коричневий",
        cover: "РЕ / Матовий / Кварцматовий / Клаудматовий",
        hex: "#442f29"
    }, {
        ral: "RAL 8019",
        color: "Темно-коричневий",
        cover: "Матовий / Кварцматовий",
        hex: "#3d3635"
    }, {
        ral: "RAL 9003",
        color: "Сигнальний білий",
        cover: "PE",
        hex: "#ecece7"
    }, {
        ral: "RAL 9005",
        color: "Чорний янтар",
        cover: "Матовий / Кварцматовий / Клаудматовий",
        hex: "#0e0e10"
    }, {
        ral: "RAL 9006",
        color: "Срібло",
        cover: "PE",
        hex: "#a1a1a0"
    }, {
        ral: "RAL 9010",
        color: "Білий",
        cover: "PE",
        hex: "#f1ece1"
    },],
};

const gutterConfig = {
    siteName: 'Водосточки.НЕТ',
    header: "Водостічні системи та комплектуючі",
    subHeader: "Роздрібний та оптовий продаж всіх видів водостічних систем \nта комплектуючих.",
    motivationMessage: "Якщо у Вас ще немає водостічної системи, тоді Вам до нас!",
    mainImg: "/images/landing/roof-main.png",
    logoImg: "/images/landing/landing-logo.jpg",
    products: [{
        label: 'Металлочерепица \nмонтеррей',
        image: '/images/landing/production/monterrey.png',
        table: {
            'Повна ширина': '1 195мм',
            'Ефективна ширина': '1 100мм',
            'Довжина кроку хвилі': '350мм',
            'Висота поперечного штампу': '23мм',
            'Висота хвилі': '25мм',
            'Товщина металу': '0,4мм/ 0,45мм/ 0,5мм/ 0,52мм',
            'Макс. довжина листу': '12 000мм',
            'Мін. кут нахилу крівлі': '14 градусів',
        }
    }, {
        label: 'Металлочерепица \nдюна',
        image: '/images/landing/production/duna.png',
        table: {
            'Повна ширина': '1 200мм',
            'Ефективна ширина': '1 120мм',
            'Довжина кроку хвилі': '350мм',
            'Висота поперечного штампу': '20мм',
            'Висота хвилі': '25мм',
            'Товщина металу': '0,4мм/ 0,45мм/ 0,5мм/ 0,52мм',
            'Макс. довжина листу': '12 000мм',
            'Мін. кут нахилу крівлі': '14 градусів',
        }
    }],
    prices: priceConfig.wateringPrice,
    colors: [{
        ral: "RAL 1003",
        color: "Жовтий",
        cover: "PE",
        hex: "#f9a800"
    }, {
        ral: "RAL 1015",
        color: "Бежевий",
        cover: "PE",
        hex: "#e6d2b5"
    }, {
        ral: "RAL 3005",
        color: "Гнила вишня",
        cover: "PE / Матовий / Кварцматовий",
        hex: "#59191f"
    }, {
        ral: "RAL 3009",
        color: "Оксид червоний",
        cover: "Матовий",
        hex: "#6d342d"
    }, {
        ral: "RAL 3011",
        color: "Коричнево-червоний",
        cover: "PE",
        hex: "#792423"
    }, {
        ral: "RAL 5005",
        color: "Сигнально синій",
        cover: "PE / Клаудматовий",
        hex: "#005387"
    }, {
        ral: "RAL 5010",
        color: "Горечавково синій",
        cover: "PE",
        hex: "#004f7c"
    }, {
        ral: "RAL 6005",
        color: "Зелений",
        cover: "PE / Матовий / Кварцматовий",
        hex: "#114232"
    }, {
        ral: "RAL 6020",
        color: "Хромово-зелений",
        cover: "Матовий / Клаудматовий",
        hex: "#37422f"
    }, {
        ral: "RAL 7016",
        color: "Антрацитово-сірий",
        cover: "Матовий",
        hex: "#383e42"
    }, {
        ral: "RAL 7024",
        color: "Графітовий-сірий",
        cover: "Матовий / Кварцматовий",
        hex: "#45494e"
    }, {
        ral: "RAL 8004",
        color: "Теракотовий",
        cover: "Матовий / Кварцматовий / Клаудматовий",
        hex: "#8d4931"
    }, {
        ral: "RAL 8015",
        color: "Каштаново-коричневий",
        cover: "Кварцматовий",
        hex: "#5e2f26"
    }, {
        ral: "RAL 8017",
        color: "Шоколадно-коричневий",
        cover: "РЕ / Матовий / Кварцматовий / Клаудматовий",
        hex: "#442f29"
    }, {
        ral: "RAL 8019",
        color: "Темно-коричневий",
        cover: "Матовий / Кварцматовий",
        hex: "#3d3635"
    }, {
        ral: "RAL 9003",
        color: "Сигнальний білий",
        cover: "PE",
        hex: "#ecece7"
    }, {
        ral: "RAL 9005",
        color: "Чорний янтар",
        cover: "Матовий / Кварцматовий / Клаудматовий",
        hex: "#0e0e10"
    }, {
        ral: "RAL 9006",
        color: "Срібло",
        cover: "PE",
        hex: "#a1a1a0"
    }, {
        ral: "RAL 9010",
        color: "Білий",
        cover: "PE",
        hex: "#f1ece1"
    },],
};

const insulationConfig = {
    siteName: 'Утеплителя.НЕТ',
    header: "Утеплювачі та комплектуючі",
    subHeader: "Роздрібний та оптовий продаж всіх видів утеплювачів \nта комплектующих.",
    motivationMessage: "Якщо у Вас ще немає утеплювача, тоді Вам до нас!",
    mainImg: "/images/landing/roof-main.png",
    logoImg: "/images/landing/landing-logo.jpg",
    products: [{
        label: 'Металлочерепица \nмонтеррей',
        image: '/images/landing/production/monterrey.png',
        table: {
            'Повна ширина': '1 195мм',
            'Ефективна ширина': '1 100мм',
            'Довжина кроку хвилі': '350мм',
            'Висота поперечного штампу': '23мм',
            'Висота хвилі': '25мм',
            'Товщина металу': '0,4мм/ 0,45мм/ 0,5мм/ 0,52мм',
            'Макс. довжина листу': '12 000мм',
            'Мін. кут нахилу крівлі': '14 градусів',
        }
    }, {
        label: 'Металлочерепица \nдюна',
        image: '/images/landing/production/duna.png',
        table: {
            'Повна ширина': '1 200мм',
            'Ефективна ширина': '1 120мм',
            'Довжина кроку хвилі': '350мм',
            'Висота поперечного штампу': '20мм',
            'Висота хвилі': '25мм',
            'Товщина металу': '0,4мм/ 0,45мм/ 0,5мм/ 0,52мм',
            'Макс. довжина листу': '12 000мм',
            'Мін. кут нахилу крівлі': '14 градусів',
        }
    }],
    prices: [{
        product: "Китай SUTOR (Матовий поліестер (MPE), Глянцевий поліестер (PE))",
        price: "от 91грн/м.кв"
    }, {
        product: "Україна Метали та Полімери (Матовий поліестер (MPE), Глянцевий поліестер (PE))\n",
        price: "от 119грн/м.кв"
    }, {
        product: "Пд. Корея Dongbu Steel (Матовий поліестер (MPE), Глянцевий поліестер (PE))",
        price: "от 129грн/м.кв"
    }, {
        product: "Бельгія Arcelor Mittal (Матовий поліестер (MPE), Глянцевий поліестер (PE))\n",
        price: "от 129грн/м.кв"
    }, {
        product: "Німеччина Arcelor Mittal (Матовий поліестер (MPE), Глянцевий поліестер (PE))\n",
        price: "от 157грн/м.кв"
    }, {
        product: "Туреччина TATA Steel (Матовий поліестер (MPE), Глянцевий поліестер (PE))\n",
        price: "от 119грн/м.кв"
    }],
    colors: [{
        ral: "RAL 1003",
        color: "Жовтий",
        cover: "PE",
        hex: "#f9a800"
    }, {
        ral: "RAL 1015",
        color: "Бежевий",
        cover: "PE",
        hex: "#e6d2b5"
    }, {
        ral: "RAL 3005",
        color: "Гнила вишня",
        cover: "PE / Матовий / Кварцматовий",
        hex: "#59191f"
    }, {
        ral: "RAL 3009",
        color: "Оксид червоний",
        cover: "Матовий",
        hex: "#6d342d"
    }, {
        ral: "RAL 3011",
        color: "Коричнево-червоний",
        cover: "PE",
        hex: "#792423"
    }, {
        ral: "RAL 5005",
        color: "Сигнально синій",
        cover: "PE / Клаудматовий",
        hex: "#005387"
    }, {
        ral: "RAL 5010",
        color: "Горечавково синій",
        cover: "PE",
        hex: "#004f7c"
    }, {
        ral: "RAL 6005",
        color: "Зелений",
        cover: "PE / Матовий / Кварцматовий",
        hex: "#114232"
    }, {
        ral: "RAL 6020",
        color: "Хромово-зелений",
        cover: "Матовий / Клаудматовий",
        hex: "#37422f"
    }, {
        ral: "RAL 7016",
        color: "Антрацитово-сірий",
        cover: "Матовий",
        hex: "#383e42"
    }, {
        ral: "RAL 7024",
        color: "Графітовий-сірий",
        cover: "Матовий / Кварцматовий",
        hex: "#45494e"
    }, {
        ral: "RAL 8004",
        color: "Теракотовий",
        cover: "Матовий / Кварцматовий / Клаудматовий",
        hex: "#8d4931"
    }, {
        ral: "RAL 8015",
        color: "Каштаново-коричневий",
        cover: "Кварцматовий",
        hex: "#5e2f26"
    }, {
        ral: "RAL 8017",
        color: "Шоколадно-коричневий",
        cover: "РЕ / Матовий / Кварцматовий / Клаудматовий",
        hex: "#442f29"
    }, {
        ral: "RAL 8019",
        color: "Темно-коричневий",
        cover: "Матовий / Кварцматовий",
        hex: "#3d3635"
    }, {
        ral: "RAL 9003",
        color: "Сигнальний білий",
        cover: "PE",
        hex: "#ecece7"
    }, {
        ral: "RAL 9005",
        color: "Чорний янтар",
        cover: "Матовий / Кварцматовий / Клаудматовий",
        hex: "#0e0e10"
    }, {
        ral: "RAL 9006",
        color: "Срібло",
        cover: "PE",
        hex: "#a1a1a0"
    }, {
        ral: "RAL 9010",
        color: "Білий",
        cover: "PE",
        hex: "#f1ece1"
    },],
};

const sofitConfig = {
    siteName: 'Софита.НЕТ',
    header: "Софит и комплектуючих",
    subHeader: "Роздрібний та оптовий продаж всіх видів софіту \nта комплектуючих.",
    motivationMessage: "Якщо у Вас ще немає софіту, тоді Вам до нас!",
    mainImg: "/images/landing/soffit-main.png",
    logoImg: "/images/landing/landing-logo.jpg",
    products: [{
        label: 'Софіт',
        image: '/images/landing/production/sofit_not_perf.png',
        table: {
            'Ширина панелі': '300мм',
            'Довжина панелі': '3000мм',
        }
    }, {
        label: 'Софіт \nперфорований',
        image: '/images/landing/production/sofit_perf.png',
        table: {
            'Ширина панелі': '300мм',
            'Довжинв панелі': '3000мм',
        }
    }],
    prices: priceConfig.sofitPrice,
    colors: [{
        ral: "RAL 1015",
        color: "Бежевий",
        cover: "PE",
        hex: "#e6d2b5"
    }, {
        ral: "RAL 3005",
        color: "Гнила вишня",
        cover: "PE / Матовий / Кварцматовий",
        hex: "#59191f"
    }, {
        ral: "RAL 7024",
        color: "Графітовий-сірий",
        cover: "Матовий / Кварцматовий",
        hex: "#45494e"
    }, {
        ral: "RAL 8017",
        color: "Шоколадно-коричневий",
        cover: "РЕ / Матовий / Кварцматовий / Клаудматовий",
        hex: "#442f29"
    }, {
        ral: "RAL 8019",
        color: "Темно-коричневий",
        cover: "Матовий / Кварцматовий",
        hex: "#3d3635"
    }, {
        ral: "RAL 9003",
        color: "Сигнальний білий",
        cover: "PE",
        hex: "#ecece7"
    }, {
        ral: "RAL 9005",
        color: "Чорний янтар",
        cover: "Матовий / Кварцматовий / Клаудматовий",
        hex: "#0e0e10"
    }, {
        ral: "3D",
        color: "Дерево",
        // cover: "PE",
        // hex: "#f1ece1",
        img: '/images/landing/wood_cover.jpg'
    },],
};

const profnastilConfig = {
    siteName: 'Профнастила.НЕТ',
    header: "Профнастил \nта комплектуючі",
    subHeader: "Роздрібний та оптовий продаж всіх видів профнастила \nта комплектуючих.",
    motivationMessage: "Якщо у Вас ще немає профнастилу, тоді Вам до нас!",
    mainImg: "/images/landing/decking-main.png",
    logoImg: "/images/landing/landing-logo.jpg",
    products:
        {
            'ПС-7': {
                'Повна ширина': '1 230мм',
                'Ефективна ширина': '1 190мм',
                'Висота хвилі': '7мм',
                'Товщина металу': '0,4мм/ 0,45мм/ 0,5мм/ 0,52мм',
                'Макс. довжина листу': '12 000мм',
                'Мін. кут нахилу крівлі': '14 градусів',
            },
            'ПС-8': {
                'Повна ширина': '1 225мм',
                'Ефективна ширина': '1 175мм',
                'Висота хвилі': '8мм',
                'Товщина металу': '0,4мм/ 0,45мм/ 0,5мм/ 0,52мм',
                'Макс. довжина листу': '12 000мм',
                'Мін. кут нахилу крівлі': '14 градусів',
            },
            'ПС-10': {
                'Повна ширина': '1 205мм',
                'Ефективна ширина': '1 165мм',
                'Висота хвилі': '10мм',
                'Товщина металу': '0,4мм/ 0,45мм/ 0,5мм/ 0,52мм',
                'Макс. довжина листу': '12 000мм',
                'Мін. кут нахилу крівлі': '14 градусів',
            },
            'ПС-12': {
                'Повна ширина': '1 180мм',
                'Ефективна ширина': '1 120мм',
                'Висота хвилі': '12мм',
                'Товщина металу': '0,4мм/ 0,45мм/ 0,5мм/ 0,52мм',
                'Макс. довжина листу': '12 000мм',
                'Мін. кут нахилу крівлі': '14 градусів',
            },
            'ПС-15': {
                'Повна ширина': '1 180мм',
                'Ефективна ширина': '1 130мм',
                'Висота хвилі': '15мм',
                'Товщина металу': '0,4мм/ 0,45мм/ 0,5мм/ 0,52мм',
                'Макс. довжина листу': '12 000мм',
                'Мін. кут нахилу крівлі': '14 градусів',
            },
            'ПС-20': {
                'Повна ширина': '1 150мм',
                'Ефективна ширина': '1 090мм',
                'Висота хвилі': '20мм',
                'Товщина металу': '0,4мм/ 0,45мм/ 0,5мм/ 0,52мм',
                'Макс. довжина листу': '12 000мм',
                'Мін. кут нахилу крівлі': '14 градусів',
            },
            'ПС-35': {
                'Повна ширина': '1 110мм',
                'Ефективна ширина': '1 045мм',
                'Висота хвилі': '35мм',
                'Товщина металу': '0,4мм/ 0,45мм/ 0,5мм/ 0,52мм',
                'Макс. довжина листу': '12 000мм',
                'Мін. кут нахилу крівлі': '14 градусів',
            },
            'ПС-57': {
                'Повна ширина': '1 035мм',
                'Ефективна ширина': '992мм',
                'Висота хвилі': '57мм',
                'Товщина металу': '0,4мм/ 0,45мм/ 0,5мм/ 0,52мм',
                'Макс. довжина листу': '12 000мм',
                'Мін. кут нахилу крівлі': '14 градусів',
            }
        },
    slider: [
        <div className="item" data-value="1"><img width={300} height={300}
                                                  src={'images/landing/production/dw-7.png'}/></div>,
        <div className="item" data-value="2"><img width={300} height={300}
                                                  src={'images/landing/production/dw-8.png'}/></div>,
        <div className="item" data-value="3"><img width={300} height={300}
                                                  src={'images/landing/production/dw-10.png'}/></div>,
        <div className="item" data-value="4"><img width={300} height={300}
                                                  src={'images/landing/production/dw-12.png'}/></div>,
        <div className="item" data-value="5"><img width={300} height={300}
                                                  src={'images/landing/production/dw-15.png'}/></div>,
        <div className="item" data-value="6"><img width={300} height={300}
                                                  src={'images/landing/production/dw-20.png'}/></div>,
        <div className="item" data-value="7"><img width={300} height={300}
                                                  src={'images/landing/production/dw-35.png'}/></div>,
        <div className="item" data-value="8"><img width={300} height={300}
                                                  src={'images/landing/production/dw-57.png'}/></div>,
    ],
    prices: priceConfig.profnastilPrice,
    colors: [{
        ral: "RAL 1003",
        color: "Жовтий",
        cover: "PE",
        hex: "#f9a800"
    }, {
        ral: "RAL 1015",
        color: "Бежевий",
        cover: "PE",
        hex: "#e6d2b5"
    }, {
        ral: "RAL 3005",
        color: "Гнила вишня",
        cover: "PE / Матовий / Кварцматовий",
        hex: "#59191f"
    }, {
        ral: "RAL 3009",
        color: "Оксид червоний",
        cover: "Матовий",
        hex: "#6d342d"
    }, {
        ral: "RAL 3011",
        color: "Коричнево-червоний",
        cover: "PE",
        hex: "#792423"
    }, {
        ral: "RAL 5005",
        color: "Сигнально синій",
        cover: "PE / Клаудматовий",
        hex: "#005387"
    }, {
        ral: "RAL 5010",
        color: "Горечавково синій",
        cover: "PE",
        hex: "#004f7c"
    }, {
        ral: "RAL 6005",
        color: "Зелений",
        cover: "PE / Матовий / Кварцматовий",
        hex: "#114232"
    }, {
        ral: "RAL 6020",
        color: "Хромово-зелений",
        cover: "Матовий / Клаудматовий",
        hex: "#37422f"
    }, {
        ral: "RAL 7016",
        color: "Антрацитово-сірий",
        cover: "Матовий",
        hex: "#383e42"
    }, {
        ral: "RAL 7024",
        color: "Графітовий-сірий",
        cover: "Матовий / Кварцматовий",
        hex: "#45494e"
    }, {
        ral: "RAL 8004",
        color: "Теракотовий",
        cover: "Матовий / Кварцматовий / Клаудматовий",
        hex: "#8d4931"
    }, {
        ral: "RAL 8015",
        color: "Каштаново-коричневий",
        cover: "Кварцматовий",
        hex: "#5e2f26"
    }, {
        ral: "RAL 8017",
        color: "Шоколадно-коричневий",
        cover: "РЕ / Матовий / Кварцматовий / Клаудматовий",
        hex: "#442f29"
    }, {
        ral: "RAL 8019",
        color: "Темно-коричневий",
        cover: "Матовий / Кварцматовий",
        hex: "#3d3635"
    }, {
        ral: "RAL 9003",
        color: "Сигнальний білий",
        cover: "PE",
        hex: "#ecece7"
    }, {
        ral: "RAL 9005",
        color: "Чорний янтар",
        cover: "Матовий / Кварцматовий / Клаудматовий",
        hex: "#0e0e10"
    }, {
        ral: "RAL 9006",
        color: "Срібло",
        cover: "PE",
        hex: "#a1a1a0"
    }, {
        ral: "RAL 9010",
        color: "Білий",
        cover: "PE",
        hex: "#f1ece1"
    }, {
        ral: "RAL WOOD",
        color: "Дерево",
        cover: "PE",
        // hex: "#f1ece1",
        img: '/images/landing/wood_cover.jpg'
    },],
};

const additionalElementsConfig = {
    siteName: 'Доборных.НЕТ',
    header: "Доборні елементи та комплектуючі",
    subHeader: "Роздрібний та оптовий продаж всіх видів доборних елементів \nта комплектуючих.",
    motivationMessage: "Якщо у Вас ще немає доборних елементів, тоді Вам до нас!",
    mainImg: "/images/landing/roof-main.png",
    logoImg: "/images/landing/landing-logo.jpg",
    // products: [{
    //     label: 'Металлочерепица \nмонтеррей',
    //     image: '/images/landing/production/monterrey.png',
    //     table: {
    //         'Повна ширина': '1 195мм',
    //         'Ефективна ширина': '1 100мм',
    //         'Довжина кроку хвилі': '350мм',
    //         'Висота поперечного штампу': '23мм',
    //         'Висота хвилі': '25мм',
    //         'Товщина металу': '0,4мм/ 0,45мм/ 0,5мм/ 0,52мм',
    //         'Макс. довжина листу': '12 000мм',
    //         'Мін. кут нахилу крівлі': '14 градусів',
    //     }
    // }, {
    //     label: 'Металлочерепица \nдюна',
    //     image: '/images/landing/production/duna.png',
    //     table: {
    //         'Повна ширина': '1 200мм',
    //         'Ефективна ширина': '1 120мм',
    //         'Довжина кроку хвилі': '350мм',
    //         'Висота поперечного штампу': '20мм',
    //         'Висота хвилі': '25мм',
    //         'Товщина металу': '0,4мм/ 0,45мм/ 0,5мм/ 0,52мм',
    //         'Макс. довжина листу': '12 000мм',
    //         'Мін. кут нахилу крівлі': '14 градусів',
    //     }
    // }],
    slider: [
        <div className="item" data-value="1"><img width={300} height={300}
                                                  src={'images/landing/production/additional_1.png'}/></div>,
        <div className="item" data-value="2"><img width={300} height={300}
                                                  src={'images/landing/production/additional_2.png'}/></div>,
        <div className="item" data-value="3"><img width={300} height={300}
                                                  src={'images/landing/production/additional_3.png'}/></div>,
        <div className="item" data-value="4"><img width={300} height={300}
                                                  src={'images/landing/production/additional_4.png'}/></div>,
        <div className="item" data-value="5"><img width={300} height={300}
                                                  src={'images/landing/production/additional_5.png'}/></div>,
        <div className="item" data-value="6"><img width={300} height={300}
                                                  src={'images/landing/production/additional_6.png'}/></div>,
        <div className="item" data-value="7"><img width={300} height={300}
                                                  src={'images/landing/production/additional_7.png'}/></div>,
        <div className="item" data-value="8"><img width={300} height={300}
                                                  src={'images/landing/production/additional_8.png'}/></div>,
    ],
    prices: priceConfig.additionalElementsPrice,
    colors: [{
        ral: "RAL 1003",
        color: "Жовтий",
        cover: "PE",
        hex: "#f9a800"
    }, {
        ral: "RAL 1015",
        color: "Бежевий",
        cover: "PE",
        hex: "#e6d2b5"
    }, {
        ral: "RAL 3005",
        color: "Гнила вишня",
        cover: "PE / Матовий / Кварцматовий",
        hex: "#59191f"
    }, {
        ral: "RAL 3009",
        color: "Оксид червоний",
        cover: "Матовий",
        hex: "#6d342d"
    }, {
        ral: "RAL 3011",
        color: "Коричнево-червоний",
        cover: "PE",
        hex: "#792423"
    }, {
        ral: "RAL 5005",
        color: "Сигнально синій",
        cover: "PE / Клаудматовий",
        hex: "#005387"
    }, {
        ral: "RAL 5010",
        color: "Горечавково синій",
        cover: "PE",
        hex: "#004f7c"
    }, {
        ral: "RAL 6005",
        color: "Зелений",
        cover: "PE / Матовий / Кварцматовий",
        hex: "#114232"
    }, {
        ral: "RAL 6020",
        color: "Хромово-зелений",
        cover: "Матовий / Клаудматовий",
        hex: "#37422f"
    }, {
        ral: "RAL 7016",
        color: "Антрацитово-сірий",
        cover: "Матовий",
        hex: "#383e42"
    }, {
        ral: "RAL 7024",
        color: "Графітовий-сірий",
        cover: "Матовий / Кварцматовий",
        hex: "#45494e"
    }, {
        ral: "RAL 8004",
        color: "Теракотовий",
        cover: "Матовий / Кварцматовий / Клаудматовий",
        hex: "#8d4931"
    }, {
        ral: "RAL 8015",
        color: "Каштаново-коричневий",
        cover: "Кварцматовий",
        hex: "#5e2f26"
    }, {
        ral: "RAL 8017",
        color: "Шоколадно-коричневий",
        cover: "РЕ / Матовий / Кварцматовий / Клаудматовий",
        hex: "#442f29"
    }, {
        ral: "RAL 8019",
        color: "Темно-коричневий",
        cover: "Матовий / Кварцматовий",
        hex: "#3d3635"
    }, {
        ral: "RAL 9003",
        color: "Сигнальний білий",
        cover: "PE",
        hex: "#ecece7"
    }, {
        ral: "RAL 9005",
        color: "Чорний янтар",
        cover: "Матовий / Кварцматовий / Клаудматовий",
        hex: "#0e0e10"
    }, {
        ral: "RAL 9006",
        color: "Срібло",
        cover: "PE",
        hex: "#a1a1a0"
    }, {
        ral: "RAL 9010",
        color: "Білий",
        cover: "PE",
        hex: "#f1ece1"
    },],
};

const foldedRoofConfig = {
    siteName: 'Фальца.НЕТ',
    header: "Фальцева крівля та комплектуючі",
    subHeader: "Роздрібний та оптовий продаж всіх видів фальцевї крівли \nта комплектуючих.",
    motivationMessage: "Якщо у Вас ще немає фальцевої покрівлі, тоді Вам до нас!",
    mainImg: "/images/landing/folded-roof-main.png",
    logoImg: "/images/landing/landing-logo.jpg",
    products: [{
        label: 'Фальц з ребрами \nжорсткості',
        image: '/images/landing/production/folded_roof.png',
        table: {
            'Повна ширина': '560мм',
            'Ефективна ширина': '516мм',
            'Висота хвилі': '26мм',
            'Товщина металу': '0,4мм/ 0,45мм/ 0,5мм/ 0,52мм',
            'Макс. довжина листу': '12 000мм',
            'Мін. кут нахилу крівлі': '14 градусів',
        }
    }, {
        label: 'Фальц \nплоский',
        image: '/images/landing/production/folded_roof_flat.png',
        table: {
            'Повна ширина': '560мм',
            'Ефективна ширина': '516мм',
            'Висота хвилі': '26мм',
            'Товщина металу': '0,4мм/ 0,45мм/ 0,5мм/ 0,52мм',
            'Макс. довжина листу': '12 000мм',
            'Мін. кут нахилу крівлі': '14 градусів',
        }
    }],
    prices: priceConfig.foldedRoofPrice,
    colors: [{
        ral: "RAL 1003",
        color: "Жовтий",
        cover: "PE",
        hex: "#f9a800"
    }, {
        ral: "RAL 1015",
        color: "Бежевий",
        cover: "PE",
        hex: "#e6d2b5"
    }, {
        ral: "RAL 3005",
        color: "Гнила вишня",
        cover: "PE / Матовий / Кварцматовий",
        hex: "#59191f"
    }, {
        ral: "RAL 3009",
        color: "Оксид червоний",
        cover: "Матовий",
        hex: "#6d342d"
    }, {
        ral: "RAL 3011",
        color: "Коричнево-червоний",
        cover: "PE",
        hex: "#792423"
    }, {
        ral: "RAL 5005",
        color: "Сигнально синій",
        cover: "PE / Клаудматовий",
        hex: "#005387"
    }, {
        ral: "RAL 5010",
        color: "Горечавково синій",
        cover: "PE",
        hex: "#004f7c"
    }, {
        ral: "RAL 6005",
        color: "Зелений",
        cover: "PE / Матовий / Кварцматовий",
        hex: "#114232"
    }, {
        ral: "RAL 6020",
        color: "Хромово-зелений",
        cover: "Матовий / Клаудматовий",
        hex: "#37422f"
    }, {
        ral: "RAL 7016",
        color: "Антрацитово-сірий",
        cover: "Матовий",
        hex: "#383e42"
    }, {
        ral: "RAL 7024",
        color: "Графітовий-сірий",
        cover: "Матовий / Кварцматовий",
        hex: "#45494e"
    }, {
        ral: "RAL 8004",
        color: "Теракотовий",
        cover: "Матовий / Кварцматовий / Клаудматовий",
        hex: "#8d4931"
    }, {
        ral: "RAL 8015",
        color: "Каштаново-коричневий",
        cover: "Кварцматовий",
        hex: "#5e2f26"
    }, {
        ral: "RAL 8017",
        color: "Шоколадно-коричневий",
        cover: "РЕ / Матовий / Кварцматовий / Клаудматовий",
        hex: "#442f29"
    }, {
        ral: "RAL 8019",
        color: "Темно-коричневий",
        cover: "Матовий / Кварцматовий",
        hex: "#3d3635"
    }, {
        ral: "RAL 9003",
        color: "Сигнальний білий",
        cover: "PE",
        hex: "#ecece7"
    }, {
        ral: "RAL 9005",
        color: "Чорний янтар",
        cover: "Матовий / Кварцматовий / Клаудматовий",
        hex: "#0e0e10"
    }, {
        ral: "RAL 9006",
        color: "Срібло",
        cover: "PE",
        hex: "#a1a1a0"
    }, {
        ral: "RAL 9010",
        color: "Білий",
        cover: "PE",
        hex: "#f1ece1"
    },],
};

const sidingConfig = {
    siteName: 'Сайдинга.НЕТ',
    header: "Металевий сайдинг та комплектуючі",
    subHeader: "Роздрібний та оптовий продаж всіх видів металевого сайдингу \nта комплектуючих.",
    motivationMessage: "Якщо у Вас ще немає металевого сайдингу, тоді Вам до нас!",
    mainImg: "/images/landing/metal-siding-main.png",
    logoImg: "/images/landing/landing-logo.jpg",
    products: [{
        label: 'Фальш \nбрус',
        image: '/images/landing/production/false_beam.png',
        table: {
            'Повна ширина': '370мм',
            'Ефективна ширина': '345мм',
            'Висота хвилі': '31,5мм',
            'Товщина металу': '0,4мм/ 0,45мм/ 0,5мм/ 0,52мм',
        }
    }, {
        label: 'Евро \nдоска',
        image: '/images/landing/production/euro_board.png',
        table: {
            'Повна ширина': '370мм',
            'Ефективна ширина': '345мм',
            'Висота хвилі': '16,5мм',
            'Товщина металу': '0,4мм/ 0,45мм/ 0,5мм/ 0,52мм',
        }
    }],
    prices: priceConfig.sidingPrice,
    colors: [{
        ral: "RAL 1003",
        color: "Жовтий",
        cover: "PE",
        hex: "#f9a800"
    }, {
        ral: "RAL 1015",
        color: "Бежевий",
        cover: "PE",
        hex: "#e6d2b5"
    }, {
        ral: "RAL 3005",
        color: "Гнила вишня",
        cover: "PE / Матовий / Кварцматовий",
        hex: "#59191f"
    }, {
        ral: "RAL 3009",
        color: "Оксид червоний",
        cover: "Матовий",
        hex: "#6d342d"
    }, {
        ral: "RAL 3011",
        color: "Коричнево-червоний",
        cover: "PE",
        hex: "#792423"
    }, {
        ral: "RAL 5005",
        color: "Сигнально синій",
        cover: "PE / Клаудматовий",
        hex: "#005387"
    }, {
        ral: "RAL 5010",
        color: "Горечавково синій",
        cover: "PE",
        hex: "#004f7c"
    }, {
        ral: "RAL 6005",
        color: "Зелений",
        cover: "PE / Матовий / Кварцматовий",
        hex: "#114232"
    }, {
        ral: "RAL 6020",
        color: "Хромово-зелений",
        cover: "Матовий / Клаудматовий",
        hex: "#37422f"
    }, {
        ral: "RAL 7016",
        color: "Антрацитово-сірий",
        cover: "Матовий",
        hex: "#383e42"
    }, {
        ral: "RAL 7024",
        color: "Графітовий-сірий",
        cover: "Матовий / Кварцматовий",
        hex: "#45494e"
    }, {
        ral: "RAL 8004",
        color: "Теракотовий",
        cover: "Матовий / Кварцматовий / Клаудматовий",
        hex: "#8d4931"
    }, {
        ral: "RAL 8015",
        color: "Каштаново-коричневий",
        cover: "Кварцматовий",
        hex: "#5e2f26"
    }, {
        ral: "RAL 8017",
        color: "Шоколадно-коричневий",
        cover: "РЕ / Матовий / Кварцматовий / Клаудматовий",
        hex: "#442f29"
    }, {
        ral: "RAL 8019",
        color: "Темно-коричневий",
        cover: "Матовий / Кварцматовий",
        hex: "#3d3635"
    }, {
        ral: "RAL 9003",
        color: "Сигнальний білий",
        cover: "PE",
        hex: "#ecece7"
    }, {
        ral: "RAL 9005",
        color: "Чорний янтар",
        cover: "Матовий / Кварцматовий / Клаудматовий",
        hex: "#0e0e10"
    }, {
        ral: "RAL 9006",
        color: "Срібло",
        cover: "PE",
        hex: "#a1a1a0"
    }, {
        ral: "RAL 9010",
        color: "Білий",
        cover: "PE",
        hex: "#f1ece1"
    }, {
        ral: "3D",
        color: "Дерево",
        // cover: "PE",
        // hex: "#f1ece1",
        img: '/images/landing/wood_cover.jpg'
    },],
};

const fenceConfig = {
    siteName: 'Евроштакетника.НЕТ',
    header: "Евроштакетник",
    subHeader: "Роздрібний та оптовий продаж всіх видів евроштакетника \nта комплектуючих.",
    motivationMessage: "Якщо у Вас ще немає забору, тоді Вам до нас!",
    mainImg: "/images/landing/fence-main.png",
    logoImg: "/images/landing/landing-logo.jpg",
    products: [{
        label: 'Напівкруглий \nштакетник',
        image: '/images/landing/production/semicircle_fence.png',
        table: {
            'Повна ширина': '115мм',
            'Висота хвилі': '20мм',
            'Товщина металу': '0,4мм/ 0,45мм/ 0,5мм/ 0,52мм',
        }
    }, {
        label: 'Трапецивидний \nштакетник',
        image: '/images/landing/production/trapezoidal_fence.png',
        table: {
            'Повна ширина': '115мм',
            'Висота хвилі': '20мм',
            'Товщина металу': '0,4мм/ 0,45мм/ 0,5мм/ 0,52мм',
        }
    }],
    prices: priceConfig.fencePrice,
    colors: [{
        ral: "RAL 1003",
        color: "Жовтий",
        cover: "PE",
        hex: "#f9a800"
    }, {
        ral: "RAL 1015",
        color: "Бежевий",
        cover: "PE",
        hex: "#e6d2b5"
    }, {
        ral: "RAL 3005",
        color: "Гнила вишня",
        cover: "PE / Матовий / Кварцматовий",
        hex: "#59191f"
    }, {
        ral: "RAL 3009",
        color: "Оксид червоний",
        cover: "Матовий",
        hex: "#6d342d"
    }, {
        ral: "RAL 3011",
        color: "Коричнево-червоний",
        cover: "PE",
        hex: "#792423"
    }, {
        ral: "RAL 5005",
        color: "Сигнально синій",
        cover: "PE / Клаудматовий",
        hex: "#005387"
    }, {
        ral: "RAL 5010",
        color: "Горечавково синій",
        cover: "PE",
        hex: "#004f7c"
    }, {
        ral: "RAL 6005",
        color: "Зелений",
        cover: "PE / Матовий / Кварцматовий",
        hex: "#114232"
    }, {
        ral: "RAL 6020",
        color: "Хромово-зелений",
        cover: "Матовий / Клаудматовий",
        hex: "#37422f"
    }, {
        ral: "RAL 7016",
        color: "Антрацитово-сірий",
        cover: "Матовий",
        hex: "#383e42"
    }, {
        ral: "RAL 7024",
        color: "Графітовий-сірий",
        cover: "Матовий / Кварцматовий",
        hex: "#45494e"
    }, {
        ral: "RAL 8004",
        color: "Теракотовий",
        cover: "Матовий / Кварцматовий / Клаудматовий",
        hex: "#8d4931"
    }, {
        ral: "RAL 8015",
        color: "Каштаново-коричневий",
        cover: "Кварцматовий",
        hex: "#5e2f26"
    }, {
        ral: "RAL 8017",
        color: "Шоколадно-коричневий",
        cover: "РЕ / Матовий / Кварцматовий / Клаудматовий",
        hex: "#442f29"
    }, {
        ral: "RAL 8019",
        color: "Темно-коричневий",
        cover: "Матовий / Кварцматовий",
        hex: "#3d3635"
    }, {
        ral: "RAL 9003",
        color: "Сигнальний білий",
        cover: "PE",
        hex: "#ecece7"
    }, {
        ral: "RAL 9005",
        color: "Чорний янтар",
        cover: "Матовий / Кварцматовий / Клаудматовий",
        hex: "#0e0e10"
    }, {
        ral: "RAL 9006",
        color: "Срібло",
        cover: "PE",
        hex: "#a1a1a0"
    }, {
        ral: "RAL 9010",
        color: "Білий",
        cover: "PE",
        hex: "#f1ece1"
    }, {
        ral: "3D",
        color: "Дерево",
        // cover: "PE",
        // hex: "#f1ece1",
        img: '/images/landing/wood_cover.jpg'
    },],
};

const wateringConfig = {
    siteName: 'Водостока.НЕТ',
    header: "Водостічні системи",
    subHeader: "Роздрібний та оптовий продаж водостічних \nсистем.",
    motivationMessage: "Якщо у Вас ще немає водостічної системи, тоді Вам до нас!",
    mainImg: "/images/landing/watering.png",
    logoImg: "/images/landing/landing-logo.jpg",
    products: [{
        label: 'Полукруглый \nштакетник',
        image: '/images/landing/production/semicircle_fence.png',
        table: {
            'Повна ширина': '115мм',
            'Висота хвилі': '20мм',
            'Товщина металу': '0,4мм/ 0,45мм/ 0,5мм/ 0,52мм',
        }
    }, {
        label: 'Трапецивидный \nштакетник',
        image: '/images/landing/production/trapezoidal_fence.png',
        table: {
            'Повна ширина': '115мм',
            'Висота хвилі': '20мм',
            'Товщина металу': '0,4мм/ 0,45мм/ 0,5мм/ 0,52мм',
        }
    }],
    prices: [{
        product: "Китай SUTOR (Матовий поліестер (MPE), Глянцевий поліестер (PE))",
        price: "от 33грн/м.п."
    }, {
        product: "Україна (Матовий поліестер (MPE), Глянцевий поліестер (PE))\n",
        price: "от 39грн/м.п."
    }, {
        product: "Пд. Корея Dongbu Steel (Матовий поліестер (MPE), Глянцевий поліестер (PE))",
        price: "от 36грн/м.п."
    }, {
        product: "Бельгія Arcelor Mittal (Матовий поліестер (MPE), Глянцевий поліестер (PE))\n",
        price: "от 49грн/м.п."
    }, {
        product: "Німеччина Arcelor Mittal (Матовий поліестер (MPE), Глянцевий поліестер (PE))\n",
        price: "от 60грн/м.п."
    }, {
        product: "3D Дерево",
        price: "от 34грн/м.п."
    }],
    colors: [{
        ral: "RAL 1003",
        color: "Жовтий",
        cover: "PE",
        hex: "#f9a800"
    }, {
        ral: "RAL 1015",
        color: "Бежевий",
        cover: "PE",
        hex: "#e6d2b5"
    }, {
        ral: "RAL 3005",
        color: "Гнила вишня",
        cover: "PE / Матовий / Кварцматовий",
        hex: "#59191f"
    }, {
        ral: "RAL 3009",
        color: "Оксид червоний",
        cover: "Матовий",
        hex: "#6d342d"
    }, {
        ral: "RAL 3011",
        color: "Коричнево-червоний",
        cover: "PE",
        hex: "#792423"
    }, {
        ral: "RAL 5005",
        color: "Сигнально синій",
        cover: "PE / Клаудматовий",
        hex: "#005387"
    }, {
        ral: "RAL 5010",
        color: "Горечавково синій",
        cover: "PE",
        hex: "#004f7c"
    }, {
        ral: "RAL 6005",
        color: "Зелений",
        cover: "PE / Матовий / Кварцматовий",
        hex: "#114232"
    }, {
        ral: "RAL 6020",
        color: "Хромово-зелений",
        cover: "Матовий / Клаудматовий",
        hex: "#37422f"
    }, {
        ral: "RAL 7016",
        color: "Антрацитово-сірий",
        cover: "Матовий",
        hex: "#383e42"
    }, {
        ral: "RAL 7024",
        color: "Графітовий-сірий",
        cover: "Матовий / Кварцматовий",
        hex: "#45494e"
    }, {
        ral: "RAL 8004",
        color: "Теракотовий",
        cover: "Матовий / Кварцматовий / Клаудматовий",
        hex: "#8d4931"
    }, {
        ral: "RAL 8015",
        color: "Каштаново-коричневий",
        cover: "Кварцматовий",
        hex: "#5e2f26"
    }, {
        ral: "RAL 8017",
        color: "Шоколадно-коричневий",
        cover: "РЕ / Матовий / Кварцматовий / Клаудматовий",
        hex: "#442f29"
    }, {
        ral: "RAL 8019",
        color: "Темно-коричневий",
        cover: "Матовий / Кварцматовий",
        hex: "#3d3635"
    }, {
        ral: "RAL 9003",
        color: "Сигнальний білий",
        cover: "PE",
        hex: "#ecece7"
    }, {
        ral: "RAL 9005",
        color: "Чорний янтар",
        cover: "Матовий / Кварцматовий / Клаудматовий",
        hex: "#0e0e10"
    }, {
        ral: "RAL 9006",
        color: "Срібло",
        cover: "PE",
        hex: "#a1a1a0"
    }, {
        ral: "RAL 9010",
        color: "Білий",
        cover: "PE",
        hex: "#f1ece1"
    }, {
        ral: "3D",
        color: "Дерево",
        // cover: "PE",
        // hex: "#f1ece1",
        img: '/images/landing/wood_cover.jpg'
    },],
};

const mapping = {
    metalTail: metalTailConfig,
    sofit: sofitConfig,
    gutter: gutterConfig,
    insulation: insulationConfig,
    profnastil: profnastilConfig,
    foldedRoof: foldedRoofConfig,
    fence: fenceConfig,
    additionalElements: additionalElementsConfig,
    siding: sidingConfig,
    watering: wateringConfig,
};

export const getConfig = (landingMode) => mapping[landingMode];
