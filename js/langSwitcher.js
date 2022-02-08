var arrLang = {
    'ru': {
        //HEADER
        'about': 'О нас',
        'services': 'Сферы Деятельности',
        'partners': 'Партнеры',
        'contact': 'Контакты',

        //HERO SECTION
        'hero': 'Премиальные продукты из родины заснеженных вершин и уникальных историй.',

        //ABOUT SECTION
        'aboutHead':'О нас',
        'azius':'AZIUS - мультипроектная компания, базирующаяся в г. Бишкек, Кыргызстан. Компания производит переработанные сельскохозяйственные продукты премиального качества, материалы для горной промышленности и ведет проекты жилищного строительства.',
        'awards':'Одна из главных ценностей компании - бескомпромиссная верность высокому качеству. Вся продукция отвечает международным стандартам и пригодна для использования и эксплуатации в любой точке планеты.',
        'madeInKg':'“Made in Kyrgyzstan” - основной вектор развития и приоритета в компании. Нами движет желание возродить былую славу кыргызских предприятий и создать премиальный имидж страны.',
        'smile':'С самого первого дня компания придерживается стратегии социально ответственного бизнеса. Мы верим, что бизнесы должно способствовать экономическому и этическому развитию общества.',

        //SERVICES 
        'servHead':'Наша продукция',
        'woodHead':'Материалы для горной промышленности',
        'woodParagraf':'Лесоматериалы и металлические крепи, пригодные для горнорудной и гражданской строительной деятельности. ',

        'foodsHead':'Продукты питания',
        'foodsParagraf':'Премиальные продукты питания, включая мед, джемы, натуральные соки прямого отжима, ферментированные молочные продукты',

        'consultHead':'Жилищное строительство',
        'consultParagraf':'Разработка и осуществление проектов жилищных строений.',

        //MODALS
        'timber':'Лесоматериалы',


        'honeyHead':'МЁД “AZIUS”',
        'nature':'Уникальный. Сырой. Натуральный',
        'premium':'“Azius” - премиальный натуральный мёд, собранный на горных склонах Центральной Азии. Благодаря нашей приверженности ценностям исключительного качества, мы создали первоклассный продукт, объединивший в себе уникальность и лечебные свойства высокогорных медоносных растений.',

        'key':'value',
        'key':'value',
        'key':'value',
        'key':'value',
        'key':'value',
        'key':'value',
    },

    'en': {
        // HEADER
        'about': 'About Us',
        'services': 'Areas of Activity',
        'partners': 'Our partners',
        'contact': 'Contacts',

        //HERO SECTION
        'hero': 'Premium products from the homeland of snow-capped peaks and unique stories.',

        //ABOUT SECTION
        'aboutHead':'About Us',
        'azius':'AZIUS is a multiproject company based in Bishkek, Kyrgyzstan. The company produces processed agricultural premium quality products, materials for the mining industry and leads housing projects.',
        'awards':'One of the main values of the company is an uncompromising commitment to high quality. All products meet international standards and are suitable for use and operation anywhere in the world.',
        'madeInKg':'“Made in Kyrgyzstan” is the main vector of development and priority in the company. We are driven by the desire to revive the former glory of Kyrgyz enterprises and create a premium image of the country.',
        'smile':'From the very first day, the company has adhered to the strategy of socially responsible business. We believe that businesses should contribute to the economic and ethical development of society.',
        
        //SERVICES 
        'servHead':'Our products',
        'woodHead':'Mining materials',
        'woodParagraf':'Timber and metal lining suitable for mining and civil construction activities.',

        'foodsHead':'Foods',
        'foodsParagraf':'Premium food products including honey, jams, natural juices, fermented dairy products',

        'consultHead':'Housing construction',
        'consultParagraf':'Development and implementation of housing projects.',

        //MODALS

        'timber':'Timber',

        'honeyHead':'Honey "AZIUS"',
        'nature':'Unique. Raw. Natural',
        'premium':'“Azius” is a premium brand of natural honey collected on the foothills of Central Asia. Committed to values of exceptional quality we created a first-class product that blends the uniqueness and medicinal features of mountain honey plants. ',
        'key':'value',
        'key':'value',
        'key':'value',
        'key':'value',

    },
}

$(function () {
    $('.translate').click(function () {
        var lang = $(this).attr('id');

        $('.lang').each(function (index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});