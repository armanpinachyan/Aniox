const API_URL = {
    INN: (value) => `https://dev.ainox.pro/api/dadata/?suggest=${value}`
}


const $ = (className) => document.querySelectorAll(className);
const $element = (className) => document.querySelector(className);


// ------------- ************* ---------------------- //
//                   ICONS
// ------------- ************* ---------------------- //

const icons = [
    {
        name: 'users',
        icon: '<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1161_4195)"> <g id="Group"> <path id="Vector" d="M8.57833 10.7856C10.7086 10.7856 12.4355 9.05867 12.4355 6.92843C12.4355 4.79819 10.7086 3.07129 8.57833 3.07129C6.44809 3.07129 4.72119 4.79819 4.72119 6.92843C4.72119 9.05867 6.44809 10.7856 8.57833 10.7856Z" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_2" d="M16.2928 23.6429H0.864258V21.9286C0.864258 19.8827 1.67701 17.9205 3.12372 16.4738C4.57043 15.0271 6.53259 14.2144 8.57854 14.2144C10.6245 14.2144 12.5867 15.0271 14.0334 16.4738C15.4801 17.9205 16.2928 19.8827 16.2928 21.9286V23.6429Z" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_3" d="M15.4355 3.07129C16.4585 3.07129 17.4396 3.47767 18.163 4.20102C18.8863 4.92437 19.2927 5.90545 19.2927 6.92843C19.2927 7.95141 18.8863 8.93249 18.163 9.65584C17.4396 10.3792 16.4585 10.7856 15.4355 10.7856" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_4" d="M18.1787 14.54C19.639 15.0956 20.8962 16.0814 21.7839 17.3671C22.6717 18.6527 23.1481 20.1777 23.1501 21.74V23.6429H20.5787" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> </g> </g> <defs> <clipPath id="clip0_1161_4195"> <rect width="24" height="24" fill="white" transform="translate(0.00732422 0.5)"/> </clipPath> </defs> </svg>'
    },
    {
        name: 'money-cash',
        icon: '<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1161_4203)"> <g id="Group"> <path id="Vector" d="M21.4357 1.35693H2.57854C1.63177 1.35693 0.864258 2.12445 0.864258 3.07122V13.3569C0.864258 14.3037 1.63177 15.0712 2.57854 15.0712H21.4357C22.3825 15.0712 23.15 14.3037 23.15 13.3569V3.07122C23.15 2.12445 22.3825 1.35693 21.4357 1.35693Z" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_2" d="M12.007 10.7854C13.4271 10.7854 14.5784 9.63417 14.5784 8.21401C14.5784 6.79385 13.4271 5.64258 12.007 5.64258C10.5868 5.64258 9.43555 6.79385 9.43555 8.21401C9.43555 9.63417 10.5868 10.7854 12.007 10.7854Z" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_3" d="M2.57861 19.3569H21.4358" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_4" d="M4.29297 23.6426H19.7215" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> </g> </g> <defs> <clipPath id="clip0_1161_4203"> <rect width="24" height="24" fill="white" transform="translate(0.00732422 0.5)"/> </clipPath> </defs> </svg>'
    },
    {
        name: 'shipping-box',
        icon: '<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1161_4212)"> <g id="Group"> <path id="Vector" d="M21.4357 1.35693H2.57854C1.63177 1.35693 0.864258 2.12445 0.864258 3.07122V21.9284C0.864258 22.8751 1.63177 23.6426 2.57854 23.6426H21.4357C22.3825 23.6426 23.15 22.8751 23.15 21.9284V3.07122C23.15 2.12445 22.3825 1.35693 21.4357 1.35693Z" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_2" d="M15.4358 1.35693V9.92836C15.4358 10.1557 15.3455 10.3737 15.1847 10.5345C15.024 10.6952 14.8059 10.7855 14.5786 10.7855H9.43576C9.20843 10.7855 8.99041 10.6952 8.82966 10.5345C8.66892 10.3737 8.57861 10.1557 8.57861 9.92836V1.35693" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_3" d="M14.5786 19.3569H18.8643" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> </g> </g> <defs> <clipPath id="clip0_1161_4212"> <rect width="24" height="24" fill="white" transform="translate(0.00732422 0.5)"/> </clipPath> </defs> </svg>'
    },
    {
        name: 'more-menu',
        icon: '<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1161_4220)"> <g id="Group"> <path id="Vector" d="M20.5788 15.0716C21.9989 15.0716 23.1502 13.9203 23.1502 12.5001C23.1502 11.08 21.9989 9.92871 20.5788 9.92871C19.1586 9.92871 18.0073 11.08 18.0073 12.5001C18.0073 13.9203 19.1586 15.0716 20.5788 15.0716Z" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_2" d="M12.007 15.0716C13.4271 15.0716 14.5784 13.9203 14.5784 12.5001C14.5784 11.08 13.4271 9.92871 12.007 9.92871C10.5868 9.92871 9.43555 11.08 9.43555 12.5001C9.43555 13.9203 10.5868 15.0716 12.007 15.0716Z" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_3" d="M3.43569 15.0716C4.85585 15.0716 6.00711 13.9203 6.00711 12.5001C6.00711 11.08 4.85585 9.92871 3.43569 9.92871C2.01553 9.92871 0.864258 11.08 0.864258 12.5001C0.864258 13.9203 2.01553 15.0716 3.43569 15.0716Z" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> </g> </g> <defs> <clipPath id="clip0_1161_4220"> <rect width="24" height="24" fill="white" transform="translate(0.00732422 0.5)"/> </clipPath> </defs> </svg>'
    },
    {
        name: 'help',
        icon: '<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="&#208;&#152;&#208;&#186;&#208;&#190;&#208;&#189;&#208;&#186;&#208;&#184; &#208;&#180;&#208;&#187;&#209;&#143; &#208;&#188;&#208;&#181;&#208;&#189;&#209;&#142;" clip-path="url(#clip0_1302_9398)"> <g id="Group"> <path id="Vector" d="M21.4282 3.07129L15.5825 8.917" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_2" d="M2.57129 3.07129L8.417 8.917" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_3" d="M2.57129 21.9282L8.417 16.0825" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_4" d="M21.4282 21.9282L15.5825 16.0825" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_5" d="M11.9998 23.6426C18.1538 23.6426 23.1426 18.6538 23.1426 12.4998C23.1426 6.34576 18.1538 1.35693 11.9998 1.35693C5.84576 1.35693 0.856934 6.34576 0.856934 12.4998C0.856934 18.6538 5.84576 23.6426 11.9998 23.6426Z" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_6" d="M12 17.5572C14.793 17.5572 17.0572 15.293 17.0572 12.5C17.0572 9.70703 14.793 7.44287 12 7.44287C9.20703 7.44287 6.94287 9.70703 6.94287 12.5C6.94287 15.293 9.20703 17.5572 12 17.5572Z" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> </g> </g> <defs> <clipPath id="clip0_1302_9398"> <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/> </clipPath> </defs> </svg>'
    },
    {
        name: 'user-profile',
        icon: '<svg id="menu-profile" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="&#208;&#152;&#208;&#186;&#208;&#190;&#208;&#189;&#208;&#186;&#208;&#184; &#208;&#180;&#208;&#187;&#209;&#143; &#208;&#188;&#208;&#181;&#208;&#189;&#209;&#142;" clip-path="url(#clip0_1161_4249)"> <g id="Group"> <path id="Vector" d="M11.9996 14.214C14.3665 14.214 16.2853 12.2952 16.2853 9.92829C16.2853 7.56136 14.3665 5.64258 11.9996 5.64258C9.63265 5.64258 7.71387 7.56136 7.71387 9.92829C7.71387 12.2952 9.63265 14.214 11.9996 14.214Z" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_2" d="M4.67969 20.9C5.44467 19.6443 6.51982 18.6066 7.80176 17.8864C9.0837 17.1663 10.5293 16.7881 11.9997 16.7881C13.47 16.7881 14.9157 17.1663 16.1976 17.8864C17.4796 18.6066 18.5547 19.6443 19.3197 20.9" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_3" d="M11.9998 23.6426C18.1538 23.6426 23.1426 18.6538 23.1426 12.4998C23.1426 6.34576 18.1538 1.35693 11.9998 1.35693C5.84576 1.35693 0.856934 6.34576 0.856934 12.4998C0.856934 18.6538 5.84576 23.6426 11.9998 23.6426Z" stroke="#222529" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/> </g> </g> <defs> <clipPath id="clip0_1161_4249"> <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/> </clipPath> </defs> </svg>'
    },
    {
        name: 'close',
        icon: '<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="12 px" clip-path="url(#clip0_812_8629)"> <g id="Group"> <path id="Vector" d="M11.5713 1.2086L0.428467 12.3515" stroke="#6E757C" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_2" d="M0.428467 1.2086L11.5713 12.3515" stroke="#6E757C" stroke-linecap="round" stroke-linejoin="round"/> </g> </g> <defs> <clipPath id="clip0_812_8629"> <rect width="12" height="12" fill="white" transform="translate(0 0.780029)"/> </clipPath> </defs> </svg>'
    },
    {
        name: 'link',
        icon: '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1185_438)"> <path d="M11.5716 6.85728V10.7144C11.5716 10.9418 11.4813 11.1598 11.3205 11.3205C11.1598 11.4813 10.9418 11.5716 10.7144 11.5716H1.28585C1.05853 11.5716 0.840508 11.4813 0.679762 11.3205C0.519017 11.1598 0.428711 10.9418 0.428711 10.7144V1.28585C0.428711 1.05853 0.519017 0.840508 0.679762 0.679762C0.840508 0.519017 1.05853 0.428711 1.28585 0.428711H5.143" stroke="#AEB5BC" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> <path d="M8.57178 0.428711H11.5718V3.42871" stroke="#AEB5BC" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> <path d="M11.5714 0.428711L6 6.00014" stroke="#AEB5BC" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> </g> <defs> <clipPath id="clip0_1185_438"> <rect width="12" height="12" fill="white"/> </clipPath> </defs> </svg>'
    },
    {
        name: 'all-open',
        icon: '<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="12 px" clip-path="url(#clip0_817_9302)"> <g id="Group"> <path id="Vector" d="M11.2142 1.20862H1.78561C1.31222 1.20862 0.928467 1.59237 0.928467 2.06576V11.4943C0.928467 11.9677 1.31222 12.3515 1.78561 12.3515H11.2142C11.6876 12.3515 12.0713 11.9677 12.0713 11.4943V2.06576C12.0713 1.59237 11.6876 1.20862 11.2142 1.20862Z" stroke="#353A3F" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_2" d="M0.928467 7.63721H3.92847C4.1558 7.63721 4.37381 7.72751 4.53456 7.88826C4.6953 8.049 4.78561 8.26702 4.78561 8.49435C4.78561 8.94901 4.96622 9.38504 5.28771 9.70653C5.6092 10.028 6.04524 10.2086 6.4999 10.2086C6.95455 10.2086 7.39059 10.028 7.71208 9.70653C8.03357 9.38504 8.21418 8.94901 8.21418 8.49435C8.21418 8.26702 8.30449 8.049 8.46523 7.88826C8.62598 7.72751 8.844 7.63721 9.07132 7.63721H12.0713" stroke="#353A3F" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> </g> </g> <defs> <clipPath id="clip0_817_9302"> <rect width="12" height="12" fill="white" transform="translate(0.5 0.780029)"/> </clipPath> </defs> </svg>'
    },
    {
        name: 'notification',
        icon: '<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="Interface Alert Alarm Bell 2" clip-path="url(#clip0_817_9299)"> <g id="Group"> <path id="Vector" d="M5.64282 12.1372H7.35711" stroke="white" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_2" d="M9.9285 5.7086C9.9285 4.79929 9.56728 3.92722 8.9243 3.28423C8.28131 2.64125 7.40924 2.28003 6.49993 2.28003C5.59062 2.28003 4.71855 2.64125 4.07556 3.28423C3.43258 3.92722 3.07136 4.79929 3.07136 5.7086V8.7086C3.07136 9.04959 2.9359 9.37662 2.69478 9.61774C2.45366 9.85886 2.12664 9.99432 1.78564 9.99432H11.2142C10.8732 9.99432 10.5462 9.85886 10.3051 9.61774C10.064 9.37662 9.9285 9.04959 9.9285 8.7086V5.7086Z" stroke="white" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_3" d="M0.928467 5.5972C0.928929 4.78132 1.1235 3.97726 1.4961 3.25143C1.8687 2.52561 2.40864 1.89884 3.07132 1.42291" stroke="white" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_4" d="M12.0713 5.5972C12.0709 4.78132 11.8763 3.97726 11.5037 3.25143C11.1311 2.52561 10.5911 1.89884 9.92847 1.42291" stroke="white" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> </g> </g> <defs> <clipPath id="clip0_817_9299"> <rect width="12" height="12" fill="white" transform="translate(0.5 0.780029)"/> </clipPath> </defs> </svg>'
    },
    {
        name: 'loading',
        icon: '<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="12 px" clip-path="url(#clip0_817_9296)"> <g id="Group"> <path id="Vector" d="M9 3.78005C9 4.5757 8.68393 5.33876 8.12132 5.90137C7.55871 6.46398 6.79565 6.78005 6 6.78005C5.20435 6.78005 4.44129 6.46398 3.87868 5.90137C3.31607 5.33876 3 4.5757 3 3.78005V1.20862H9V3.78005Z" stroke="#222529" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_2" d="M9 9.78003C9 8.98438 8.68393 8.22132 8.12132 7.65871C7.55871 7.0961 6.79565 6.78003 6 6.78003C5.20435 6.78003 4.44129 7.0961 3.87868 7.65871C3.31607 8.22132 3 8.98438 3 9.78003V12.3515H9V9.78003Z" stroke="#222529" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_3" d="M1.28564 1.20862H10.7142" stroke="#222529" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_4" d="M1.28564 12.3515H10.7142" stroke="#222529" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> </g> </g> <defs> <clipPath id="clip0_817_9296"> <rect width="12" height="12" fill="white" transform="translate(0 0.780029)"/> </clipPath> </defs> </svg>'
    },
    {
        name: 'view',
        icon: '<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="12 px" clip-path="url(#clip0_817_9293)"> <g id="Group"> <path id="Vector" d="M11.84 6.20573C11.9822 6.36323 12.0609 6.56785 12.0609 6.78001C12.0609 6.99217 11.9822 7.1968 11.84 7.3543C10.94 8.32287 8.89147 10.2086 6.50004 10.2086C4.10861 10.2086 2.06004 8.32287 1.16004 7.3543C1.01789 7.1968 0.939209 6.99217 0.939209 6.78001C0.939209 6.56785 1.01789 6.36323 1.16004 6.20573C2.06004 5.23715 4.10861 3.35144 6.50004 3.35144C8.89147 3.35144 10.94 5.23715 11.84 6.20573Z" stroke="#222529" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> <path id="Vector_2" d="M6.49993 8.49431C7.4467 8.49431 8.21422 7.72679 8.21422 6.78002C8.21422 5.83325 7.4467 5.06573 6.49993 5.06573C5.55316 5.06573 4.78564 5.83325 4.78564 6.78002C4.78564 7.72679 5.55316 8.49431 6.49993 8.49431Z" stroke="#222529" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> </g> </g> <defs> <clipPath id="clip0_817_9293"> <rect width="12" height="12" fill="white" transform="translate(0.5 0.780029)"/> </clipPath> </defs> </svg>'
    },
    {
        name: 'check',
        icon: '<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="12 px"> <path id="Vector" d="M0.428467 8.10858L2.76847 11.1172C2.84743 11.2197 2.9486 11.3031 3.06439 11.361C3.18019 11.4189 3.30759 11.4498 3.43704 11.4514C3.5644 11.4529 3.6905 11.426 3.80615 11.3726C3.9218 11.3192 4.0241 11.2407 4.10561 11.1429L11.5713 2.10858" stroke="white" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/> </g> </svg>'
    },
]


function Request(url, option = {}){
    return fetch(url, option).then((res) => res.json());
}


function startConvertIcons(){
    $('.icon').forEach((item) => {
        item.outerHTML = icons.find((icon) => icon.name === item.dataset.name).icon
    })
}
startConvertIcons()

const event = new Event('change');

class ToolMasks {
    static numberMaskElements = $('.mask-phone');
    static maskOneKeyElements = $('.mask-one-key');
    static maskPhysicalElements = $('.mask-physical');
    static maskJurlitsaElements = $('.mask-jurlitsa');
    static maskOrgnElements = $('.mask-orgn');
    static maskOrgnipElements = $('.mask-orgnip');
    static maskSerialPassportElements = $('.mask-serial-passport');
    static maskBikElements = $('.mask-bik');
    static maskCheckingAccountElements = $('.mask-checking-account');

    constructor() {
    }


    static russianPhoneMask(){
        // this.numberMaskElements.forEach((item) => this.startMask(item, '(000)000-00-00'))
    }
    static maskOneKey(){
        this.maskOneKeyElements.forEach((item) => this.startMask(item,  '000 - 000'))
    }

    static maskPhysical(){
        this.maskPhysicalElements.forEach((item) => this.startMask(item,  '000000000000'))
    }

    static maskJurlitsa(){
        this.maskJurlitsaElements.forEach((item) => this.startMask(item,  '0000000000'))
    }

    static maskOrgn(){
        this.maskOrgnElements.forEach((item) => this.startMask(item,  '0000000000000'))
    }

    static maskOrgnip(){
        this.maskOrgnipElements.forEach((item) => this.startMask(item,  '000000000000000'))
    }


    static maskSerialPassport(){
        this.maskSerialPassportElements.forEach((item) => this.startMask(item,  '00 00'))
    }

    static maskBik(){
        this.maskBikElements.forEach((item) => this.startMask(item,  '000000000'))
    }

    static maskCheckingAccount(){
        this.maskCheckingAccountElements.forEach((item) => this.startMask(item,  '00000000000000000000'))
    }

    static startMask(item, mask){
        return IMask(item, { mask: mask })
    }

}

ToolMasks.russianPhoneMask()
ToolMasks.maskOneKey()
ToolMasks.maskPhysical()
ToolMasks.maskJurlitsa()
ToolMasks.maskOrgn()
ToolMasks.maskOrgnip()
ToolMasks.maskSerialPassport()
ToolMasks.maskBik()
ToolMasks.maskCheckingAccount()



// ------------- ************* ---------------------- //
//                  CONSTANTS
// ------------- ************* ---------------------- //

const { inputLink, active, none, btnLoading, disabled, show, selected } = {
    inputLink: '.input-link',
    active: 'active',
    none: 'd-none',
    btnLoading: 'btn-loading',
    disabled: 'disabled',
    show: 'show',
    selected: 'selected'
}


// ------------- ************* ---------------------- //
//                  CONSTANTS
// ------------- ************* ---------------------- //





// ------------- ************* ---------------------- //
//           LINK INPUTS FUNCTIONS
// ------------- ************* ---------------------- //

const regLink = new RegExp('https://|http://', 'g');

$(inputLink).forEach((item) => {
    item.addEventListener('input', function (){
        this.value = this.value.replace(regLink, '')
    })
})



// ------------- ************* ---------------------- //
//           OPEN CLOSE INPUTS
// ------------- ************* ---------------------- //

const defaultInputs = $('.def-fields .def-fields-input');

defaultInputs.forEach((item) => {

    if(item.getAttribute(disabled) !== null){
        item.parentElement.classList.add(`${disabled}-active`)
    }

    item.addEventListener('focus', function (){
        checkItems();
        // this.parentElement.classList.remove(disabled);
        this.parentElement.classList.add(active);
    })

    item.addEventListener('blur', checkItems)
    checkItems()
})

$('.def-fields-icon-edit').forEach((item) => {
    item.addEventListener('click', function (){
        this.parentElement.classList.remove(disabled)
        this.parentElement.querySelector('.filed-phone-input')?.removeAttribute(disabled);
        this.parentElement.querySelector('.filed-phone-country-code')?.removeAttribute(disabled);
        this.parentElement.querySelector('.filed-phone-countries')?.classList.remove(disabled)
        this.previousElementSibling.removeAttribute(disabled)
    })
})



const defaultInputsTag = $('.def-fields .def-fields-text-body');


defaultInputsTag.forEach((item) => {
    const inputElement = item.parentElement.querySelector('input');

    inputElement.value = item.innerText

    item.addEventListener('input', (e) => {
        const val = e.target.innerText;
        if(val === ''){
            item.parentElement.classList.remove('no-active');
            item.parentElement.classList.remove(active)
        } else {
            inputElement.value = e.target.innerText;
        }
    })

    item.addEventListener('focus', function (){
        this.parentElement.classList.add(active)
    })

    item.addEventListener('blur', checkItemsTag);
    checkItemsTag()
})



$('.def-fields-text-icon-edit').forEach((item) => {
    item.addEventListener('click', function (){
        this.parentElement.classList.remove(disabled);
        this.parentElement.classList.add('no-active');
        this.parentElement.querySelector('.def-fields-text-body').setAttribute('contenteditable', 'true')
    })
})

function checkItemsTag(){
    defaultInputsTag.forEach((defInputs) => {
        if(defInputs.innerHTML === ''){
            defInputs.parentElement.classList.remove(active);
        } else {
            defInputs.parentElement.classList.add(active);
            // defInputs.parentElement.classList.add(disabled);
        }
    })
}


function checkItems(){
    defaultInputs.forEach((defInputs) => {
        if(defInputs.value === ''){
            defInputs.parentElement.classList.remove(active);
        } else {
            defInputs.parentElement.classList.add(active);
            // defInputs.parentElement.classList.add(disabled);
        }
    })
}


// ------------- ************* ---------------------- //
//             OPEN CLOSE NAVBAR PROFILE BAR
// ------------- ************* ---------------------- //

const profileDropdowns = $('.profile-dropdowns');

profileDropdowns.forEach((item) => {
    const backFonMenu = $element('.menu-back-fon');

    if(!backFonMenu){
        document.body.insertAdjacentHTML('beforeend','<div class="menu-back-fon"></div>');
        $element('.menu-back-fon').addEventListener('click', closeOpenedMenu)
    }

    item.addEventListener('click', function (){
        if (this.classList.contains(active)){
            this.classList.remove(active);
            document.body.classList.remove('menu-active');
            $element('.menu-back-fon').classList.remove(active);
        } else {
            profileDropdowns.forEach((dropdown) => dropdown.classList.remove(active));
            this.classList.add(active);
            document.body.classList.add('menu-active');
            $element('.menu-back-fon').classList.add(active);
            $element('.step-page-row-right')?.classList.remove(active);
            $element('.mobile-menu-board')?.classList.remove(active);
        }
    })
})


$('.navbar-item').forEach((item) => {
    item.addEventListener('click', closeOpenedMenu)
})

const filedPhoneCountries = $('.filed-phone-countries');

function closeOpenedMenu(){
    profileDropdowns.forEach((item) => item.classList.contains(active) && item.classList.remove(active) );
    $element('.menu-back-fon').classList.remove(active);
    document.body.classList.remove('menu-active');
}

const navbar = $element('.navbar');
window.addEventListener('scroll', function (){
    if(window.scrollY > 10){
        navbar.classList.add('fixed')
    } else {
        navbar.classList.remove('fixed')
    }
})

// OPEN CLOSE MOBILE MENU
$('.mobile-menu-item').forEach((item) => {
    item.addEventListener('click', function (){
        const id = this.dataset.toggle;
        if(id){
            this.classList.toggle(active)
            document.getElementById(id).classList.toggle(show)
        } else{
            console.error('Есть проблема с атрибутом toggle')
        }
    })
})

const disabledInputs = document.querySelectorAll('.filed-phone.disabled');

disabledInputs.forEach((item) => {
    changeDisabledInputPhone(true, item)
})


function changeDisabledInputPhone(status, item){
    if(status){
        item.querySelector('.filed-phone-input').setAttribute(disabled, 'true');
        item.querySelector('.filed-phone-country-code').setAttribute(disabled, 'true');
        item.querySelector('.filed-phone-countries').classList.add(disabled);
    } else {
        item.querySelector('.filed-phone-input').removeAttribute(disabled);
        item.querySelector('.filed-phone-country-code').removeAttribute(disabled);
        item.querySelector('.filed-phone-countries').classList.remove(disabled);
        item.classList.add(disabled);
    }
}

// ------------- ************* ---------------------- //
//             CLOSE ALERT
// ------------- ************* ---------------------- //


$('.alert svg').forEach((alert) => {
    alert.addEventListener('click', function (){
        this.parentElement.classList.add(none)
    })
})
// ------------- ************* ---------------------- //
//             EMAIL VALIDATION
// ------------- ************* ---------------------- //

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};



// ------------- ************* ---------------------- //
//              DEFAULT SELECT
// ------------- ************* ---------------------- //

$('.def-select select').forEach((select) => {
    let optionItems = '';
    select.parentElement.insertAdjacentHTML('beforeend',
        `
        <div class="def-select-header">
            <span class="def-select-header-title">${select.dataset.title}</span>
            <span class="def-select-header-selected-name"></span>
            <img src="assets/icons/down.svg" alt="down icon">
        </div>
    `)
    select.querySelectorAll('option').forEach((option) => {
        optionItems += `
            <div class="def-select-body-item ${!option.dataset.subtitle ? 'no-subtitle' : ''}" data-value="${option.value}" data-title="${option.innerText}">
              <p class="def-select-body-item-title">${option.innerText}</p>
              ${option.dataset.subtitle ? `<p class="def-select-body-item-subtitle">${option.dataset.subtitle}</p>` : ''}
            </div>
        `;

        if(option.getAttribute('selected') !== null){
            option.parentElement.parentElement.classList.add(selected);
            option.parentElement.parentElement.classList.remove(active);
            option.parentElement.parentElement.querySelector('.def-select-header-selected-name').innerText = option.innerText
            // option.parentElement.parentElement.querySelector('.def-select-header-title').innerText = this.dataset.title;
            option.parentElement.parentElement.querySelectorAll(`select option`).forEach((option) => {
                option.removeAttribute(selected)
            })
            option.parentElement.parentElement.querySelector(`select option[value="${option.value}"]`).setAttribute(selected, 'true')
        }
    })
    select.parentElement.insertAdjacentHTML('beforeend',
        `
        <div class="def-select-body">
            ${optionItems}
        </div>
    `)

    select.dispatchEvent(event)
})

//
$('.def-select .def-select-header').forEach((select) => {
    select.addEventListener('click', function (){
        this.parentElement.classList.toggle(active)
    })
})

$('.def-select-content').forEach((item) => {
    item.addEventListener('click', function (){
        this.parentElement.classList.remove(active)
    })
})

$('.def-select-body-item').forEach((item) => {
    item.addEventListener('click', function (){
        this.parentElement.parentElement.classList.add(selected);
        this.parentElement.parentElement.classList.remove(active);
        this.parentElement.parentElement.querySelector('.def-select-header-selected-name').innerText = this.dataset.title;
        // option.parentElement.parentElement.querySelector('.def-select-header-title').innerText = this.dataset.title;
        this.parentElement.parentElement.querySelectorAll(`select option`).forEach((option) => {
            option.removeAttribute(selected)
        })
        const opt = `select option[value="${this.dataset.value}"]`;
        this.parentElement.parentElement.querySelector(opt).setAttribute(selected, 'true');
        $element(opt).parentElement.dispatchEvent(event)
    })
})

$('.def-select select option').forEach((option) => {
    if(option.getAttribute(selected) !== null){
        // option.parentElement.parentElement.classList.add(selected);
        option.parentElement.parentElement.classList.remove(active);
        option.parentElement.parentElement.querySelector('.def-select-header-selected-name').innerText = option.innerText;
        option.parentElement.parentElement.querySelectorAll(`select option`).forEach((option) => {
            option.removeAttribute(selected)
        })
        if(this.dataset?.value){
            option.parentElement.parentElement.querySelector(`select option[value="${this.dataset.value}"]`).setAttribute(selected, 'true')
        }
        option.parentElement.dispatchEvent(event)
    }
})


// ------------- ************* ---------------------- //
//              FOR DELETE BTN
// ------------- ************* ---------------------- //

const del_account = $element('.btn-delete-account')
const modal_delete_account = $element('.modal-delete-account')
const closed_modal = $element('.modal-delete-account .modal-form .modal-buttons .close-modal')
const delete_btn = $element('.modal-delete-account .modal-form .modal-buttons .btn-delete')

del_account?.addEventListener('click', ()=>{
    modal_delete_account.classList.add('active')
})

closed_modal?.addEventListener('click', ()=>{
    modal_delete_account.classList.remove('active')
})

delete_btn?.addEventListener('click', ()=>{
    modal_delete_account.classList.remove('active')
})

// ------------- ************* ---------------------- //
//              FOR LOADING FILE BTN
// ------------- ************* ---------------------- //

// function startLoadingBtn(){
//     $('.loading-file-btn').forEach((btn) => {
//
//     })
// }


 $element('.modal-delete-account-body')?.addEventListener('click', ()=>{
     modal_delete_account.classList.remove('active')
 })

$('.field-name-surname').forEach((item) => {

    item.addEventListener('keyup', function (){
        const val = this.value;
        const valArr = val.split(' ');
        const parent = this.parentElement;

        if(val.length){
            if(valArr.length <= 1){
                errorBlockNameAndSurname(true, 'Имя, фамилия, отчество должны быть заполнены');

            } else if(valArr.length < 2){
                errorBlockNameAndSurname(true, 'Фамилия отсутствует');
            } else if(valArr.length < 3){
                errorBlockNameAndSurname(true, 'Отсутствует отчество');
            } else {
                errorBlockNameAndSurname(false, '');
                parent.classList.remove('open-clue');
            }
        }


        if(val === ''){
            errorBlockNameAndSurname(false, '');
            parent.classList.remove('open-clue')
        } else {
            Request(`https://dev.ainox.pro/api/dadata/?fio=${valArr[valArr.length - 1]}`, ).then(({suggestions}) => {
                parent.classList.add('open-clue');
                parent.querySelector('.def-fields-clue').innerHTML = '';
                suggestions.forEach((suggestion) => {
                    parent.querySelector('.def-fields-clue').insertAdjacentHTML('beforeend', `
                        <span class="def-fields-clue-item">${suggestion.value}</span>
                    `)
                });
                startClickFieldsClue(valArr[valArr.length - 1])
            })
        }



    })
})

startClickFieldsClue()
function startClickFieldsClue(value){
    const defFieldsClueItem = $('.def-fields-clue-item');

    defFieldsClueItem.forEach((item) => {
        item.addEventListener('click', function (){
            const text = this.innerText;
            const parent = this.parentElement.parentElement;
            const inpValue = parent.querySelector('input').value;
            const reg = new RegExp(value, 'g');

            parent.querySelector('input').value = inpValue.replace(reg, text);
            parent.classList.remove('open-clue')
        })
    })
}



function errorBlockNameAndSurname(status, text){
    $('.error-user-name-surname').forEach((item) => {
        if(status){
            item.classList.remove(none);
            item.innerText = text;
        } else {
            item.classList.add(none);
            item.innerText = '';
        }
    })
}


const numberIsoCode = Object.keys(data);
const numberMasks = Object.values(data);


const countryData = window.intlTelInputGlobals.getCountryData();
const defFieldsPhone = document.querySelectorAll(".def-fields-phone");
const url = 'https://ipapi.co/json';

Request(url).then((res) => {
    defFieldsPhone.forEach((item) => {
        const iti = window.intlTelInput(item, {
            initialCountry: "auto",
            // onlyCountries: ["ru", "am", "by", "kz", "uz"],
            geoIpLookup: callback => callback(res?.country_code),
            utilsScript: './js/util.min.js' // just for formatting/placeholders etc
        });

        const mask = IMask(item, { mask: data[res?.country_code.toUpperCase()] });

        // listen to the telephone input for changes
        item.addEventListener('countrychange', function (e, countryData){

            setTimeout(() => {
                const selectedCountryData = iti.getSelectedCountryData();
                const placeholder = item.getAttribute('placeholder');

                if(placeholder){
                    mask.updateOptions({ mask: placeholder.replace(/[0-9]/g, '0') });
                }
            }, 100)
        });

        item.addEventListener('focus', function (){
            checkItems();
            // this.parentElement.classList.remove(disabled);
            this.parentElement.parentElement.classList.add(active);

        });

    })

})


function switchTelInputBackFon(status){
    if(status){
        $element('.menu-back-fon-tel').classList.add(active)
    } else {
        $element('.menu-back-fon-tel').classList.remove(active)
    }
}


filedPhoneCountries.forEach((item) => {
    item.addEventListener('click', function (){
        if(!item.classList.contains('disabled')){
            if(this.classList.contains(active)){
                this.classList.remove(active);
                switchTelInputBackFon(false)
            } else {
                this.classList.add(active);
                switchTelInputBackFon(true)
            }
        }
    })
})

$('.filed-phone').forEach((item) => {
    if(!$('.menu-back-fon-tel').length){
        document.body.insertAdjacentHTML('beforeend', '<div class="menu-back-fon-tel"></div>');
    }


    item.addEventListener('click', function (){
        this.classList.add(active);
    })
})

$element('.menu-back-fon-tel')?.addEventListener('click', function (){
    filedPhoneCountries.forEach((item) => {
        item.classList.contains(active) && item.classList.remove(active)
    });
    $element('.menu-back-fon-tel').classList.remove(active);
})
