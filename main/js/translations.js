var app = angular.module('at', ['pascalprecht.translate']);

app.config(function($translateProvider) {
    $translateProvider.translations('en', {
        navAbout: 'About',
        navWorks: 'Public works',
        navServices: 'My services',
        navTranslate: 'Translate',
        aboutMe: 'About me',
        aboutMeMain: 'Hi, my name is Maxim and I`m beginner in front-end development, beginner in Linux System administration and Open Source Entusiast. Sorry for my bad English :)',
        aboutMePaypal: 'Feel free to help me via PayPal',
        aboutMeBitcoin: 'Or send me some Bitcoins',
        aboutMeCurrentlyInDev: 'Currently working on',
        aboutMeSocial: 'Also, feel free to contact me in social media',
        works: 'My works',
        worksGBT: '',
        worksTESmc: '',
        worksReanimatorMCC: '',
        worksTGJ: '',
        worksMe: '',
        services: 'Services',
        BUTTON_LANG_EN: 'English',
        BUTTON_LANG_RU: 'Russian'
    });
    $translateProvider.translations('ru', {
        navAbout: 'Обо мне',
        navWorks: 'Проекты',
        navServices: 'Публичные сервисы',
        navTranslate: 'Перевод',
        aboutMe: 'Кто я О_o',
        aboutMeMain: 'Привет, меня зовут Максим и я, так уж исторически сложилось, втянулся в веб-разработку и в администрирование Linux-систем. Фанатик свободного программного обеспечения, упорок, студент.',
        aboutMePaypal: 'Поддержать на PayPal',
        aboutMeBitcoin: 'Или на Bitcoin',
        aboutMeCurrentlyInDev: 'В данный момент в разработке:',
        aboutMeSocial: 'Если у вас есть для меня работа - пишите мне в ЛС. Список, где я хотя-бы иногда бываю - внизу. Но лучше на почту.',
        works: 'Что я когда-либо делал',
        worksGBT: '',
        worksTESmc: '',
        worksReanimatorMCC: '',
        worksTGJ: '',
        worksMe: '',
        services: 'Сервисы для свободного пользования (разрабатываемые, разработанные...)',
        BUTTON_LANG_EN: 'Английский',
        BUTTON_LANG_RU: 'Русский'
    });
    $translateProvider.preferredLanguage('en');
});

app.controller('Ctrl', function($scope, $translate) {
    $scope.changeLanguage = function(key) {
        $translate.use(key);
    };
});
