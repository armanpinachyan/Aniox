

const uploadInput = document.getElementById('upload-file-step-input');
const uploadBlock = document.getElementById('uploading-file-step');
const dropCenter = document.querySelector('.files-drag-drop-center');

const upload_box = document.querySelector('.upload-box');
const upload_box_img = document.querySelector('.upload-box img')


uploadInput?.addEventListener('change', function (e){
    const files  = [...e.target.files];
    files.forEach((file) => startPrintHtml(file))
})


dropCenter?.addEventListener('dragover', function (e) {
    e.preventDefault()
})

dropCenter?.addEventListener('dragenter', function (){
    upload_box.classList.add(active)
})

upload_box_img.addEventListener('dragleave', () => upload_box.classList.remove(active))
upload_box_img.addEventListener('dragover', function (e) {
    e.preventDefault();
})
upload_box_img.addEventListener('drop', function (e){
    e.preventDefault();
    e.stopPropagation();
    const files = [...e.dataTransfer.files];
    upload_box.classList.remove(active);
    files.forEach((file) => startPrintHtml(file))
})

function startPrintHtml(file){
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const imageUrl = file.type !== 'application/pdf' ? reader.result : 'assets/images/pdef-image.svg';
        const RandomId = Math.floor(Math.random() * 100000) + '_aniox';
        uploadBlock.insertAdjacentHTML('beforeend',
            `
                   <div class="files-drag-drop-center-item" id="${RandomId}">
                        <div class="files-drag-drop-center-item-info">
                          <img src="${imageUrl}" alt="uesr-passport" class="file-image" onclick="openModalViewImage('${imageUrl}', '${RandomId}', '${file.type}', '${file.name}')">
                          <span>${file.name}</span>
                        </div>
                        <img class="fa-trash" src="assets/icons/remove-img-steps.svg" alt="trash">
                   </div>
                `)
        startRemoveItem()
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}


const viewBlockClose = document.querySelector('.view-image-content-image-information svg');
const viewBlock = document.querySelector('.view-image');

viewBlockClose.addEventListener('click', function (){
    viewBlock.classList.remove(active);
})

function openModalViewImage(image, id, type, name){
    if(type !== 'application/pdf'){
        viewBlock.classList.add(active);
        $element('.view-image-content-image').setAttribute('src', image)
        $element('.view-image svg').setAttribute('data-id', id);
        $element('.view-image-content-image-information-text').innerHTML = `
            <img src="assets/icons/trash-white.svg" alt="trash-white" class="view-image-content-image-information-remove">
            ${name}
        `;
        removeItemToModal(id);
        document.body.style.overflow = 'hidden';
    }
}

function startRemoveItem(){
    $('.files-drag-drop-center-item .fa-trash').forEach((item) => {
        item.addEventListener('click', function (){
            this.parentElement.remove();
        })
    })
}

function removeItemToModal(id){
    $element('.view-image-content-image-information-remove').addEventListener('click', function (){
        viewBlock.classList.remove(active);
        const _elem = document.getElementById(id);
        if(_elem){
            document.getElementById(id).remove()
        }
    })
}

$('.change-step').forEach((item) => {
    item.addEventListener('click', function (){
        const stepPage = this.dataset.step;
        console.log(stepPage)
        changeStepBlock(stepPage)
        setActiveList(+stepPage - 1, true);
    })
})

$element('.mobile-menu-board').addEventListener('click', function (){

    if(this.classList.contains(active)){
        this.classList.toggle(active)
        $element('.step-page-row-right').classList.remove(active)
        $element('.menu-back-fon').classList.remove(active);
        $element('.navbar').classList.remove(active);
    } else {
        this.classList.toggle(active)
        $element('.step-page-row-right').classList.add(active)
        $element('.menu-back-fon').classList.add(active);
        $element('.navbar').classList.add(active);
        profileDropdowns.forEach((item) => {
            item.classList.remove(active)
        })
    }


})

$element('.menu-back-fon').addEventListener('click', function (){
    $element('.mobile-menu-board').classList.remove(active);
    $element('.step-page-row-right').classList.remove(active);
    $element('.navbar').classList.remove(active)
})


$element('.view-image-bg').addEventListener('click', function (){
    this.parentElement.classList.remove(active);
    document.body.style.overflow = null;
})


const menuList = $('.menu-list-with-content');
function setActiveList(count, success){
    menuList.forEach((element, index) => {
        if(success){
            element.classList.remove(active);
            element.classList.remove('no-active');
            if(index === count){
                element.classList.add(active)
            } else if(index > count){
                element.classList.add('no-active')
            }
        }
    })
}

function changeStepBlock(stepPage){
    $('.steps-block').forEach((stepBlock) => stepBlock.classList.add(none));
    $element(`.steps-block[data-step="${stepPage}"]`)?.classList.remove(none);
}

menuList.forEach((item, index) => {
    item.addEventListener('click', function (){
        if(!this.classList.contains(active) && !this.classList.contains('no-active') && index < 3){
            // setActiveList(index, true);
            changeStepBlock(index + 1);
        }

        if(this.classList.contains('form-title')){
            // setActiveList(index, false);
            changeStepBlock(index + 1);
        }
    })
})


const titleSteps = $('.menu-list-with-content.form-title');

titleSteps.forEach((item) => {
    item.addEventListener('click', function (e){
        e.preventDefault();
        titleSteps.forEach((_it) => _it.classList.remove(active));
        this.classList.add(active);
    })
})


const errorForInn = $element('#error-for-inn');
const errorForInnCount = $element('#error-for-inn-count');

$element('.def-fields-input.mask-physical')?.addEventListener('keyup', function (){
    const val = this.value;
    const maskCount = 12;

    if(val.length < maskCount){
        errorForInn.classList.remove(none);
        errorForInnCount.innerText = `+${maskCount - val.length}`;
        $element('.def-fields.for-inn').classList.remove('mb-15');
    } else if(val.length === maskCount){
        errorForInn.classList.add(none);
        $element('.def-fields.for-inn').classList.add('mb-15');
    }
})

//  -------------------------- FOR STEP 1 -------------------
//
// -----------------------------------------------------------

const numberInputStep2 = $element('.steps-block2 .filed-phone .def-fields-icon-edit');
const step1StandardExplanation2 = $element('.step1-standard-explanation2');



const getSMSButton = $element('.get-sms');
const smsCodeInput = $element('.sms-code-input');
const confirmSmsCode = $element('.confirm-sms-code');
const btnTime = $element('.btn-time');

getSMSButton.addEventListener('click', function (){
    step1StandardExplanation2.classList.remove(none);
    smsCodeInput.classList.remove(none);
    getSMSButton.classList.add(none);
    btnTime.classList.remove(none);

    disabledInputs.forEach((item) => {
        changeDisabledInputPhone(false, item)
    })

    startTimingBtb(btnTime, () => {

        btnTime.classList.remove(disabled);
        btnTime.removeAttribute(disabled);

    })

})

btnTime.addEventListener('click', function (){
    startTimingBtb(btnTime, () => {

        btnTime.classList.remove(disabled);
        btnTime.removeAttribute(disabled);
    })
})

let int
function startTimingBtb(btn, callBack){
    clearInterval(int);
    let min = 3;
    let sec = 59;
    int = setInterval(() => {
        sec--;
        if(sec === 0){
            sec = 59;
            min--;
        }

        btn.innerText = `Повторить отправку ${min}:${sec}`;

        if(min === 0 && sec ===  1){
            clearInterval(int);
            callBack()
            btn.innerText = `Повторить отправку`;
        }
    }, 1000)
}



numberInputStep2?.addEventListener('click', function (){
    step1StandardExplanation2.classList.add(none);
    smsCodeInput.classList.add(none);
    getSMSButton.classList.remove(none);
    confirmSmsCode.classList.add(none);

    btnTime.classList.add(disabled);
    btnTime.classList.add(none);
    btnTime?.setAttribute(disabled, 'true');
})

$element('.sms-code-input input').addEventListener('input', function (){
    if(this.value.length === 9){
        confirmSmsCode.classList.remove(none);
        confirmSmsCode.classList.remove(disabled);
        confirmSmsCode.removeAttribute(disabled);

        btnTime.classList.add(none);

    } else {
        confirmSmsCode.classList.add(disabled);
        confirmSmsCode.setAttribute(disabled, 'true');
        btnTime.classList.remove(none);
    }
})

//  -------------------------- FOR STEP 2 -------------------
//
// -----------------------------------------------------------

const innFiled = $element('.filed-inn');
const nameInnBody = $element('.name-inn-body');

innFiled.addEventListener('input', function (){
    const val = this.value;

    if(val.length > 0){
        Request(API_URL.INN).then((res) => {
            console.log(res)
            nameInnBody.classList.add(active);
            nameInnBody.innerHTML = '';
            const _res = res.suggestions;
            if(_res.length){
                _res.forEach((item) => {
                    nameInnBody.insertAdjacentHTML('beforeend', `
                        <div class="name-inn-body-item" data-name="${item.value}">
                            <span class="name-inn-body-item-name">${item.value}</span>
                            <span class="name-inn-body-item-inn">${item.data.inn}</span>
                        </div>
                    `)
                })
                clickNameInnBodyItem(_res);
            }
        })
    } else {
        nameInnBody.innerHTML = '';
        nameInnBody.classList.remove(active)
    }

})


function clickNameInnBodyItem(_res){
    const items = $('.name-inn-body-item');
    items.forEach((_item) => {
        _item.addEventListener('click', function (){
            const name = this.dataset.name;
            if(name){
                const objSelected = _res.find((obj) => obj.value = name);

                $element('.def-fields-input.filed-inn').value = '';
                $element('.def-fields-input.filed-inn').value = '';
                nameInnBody.classList.remove(active);
                $element('.add-info-inn').classList.remove(none)

                const defFieldsInn = $element('.def-fields-inn');
                const defFieldsOgrnip = $element('.def-fields-name');

                defFieldsInn.classList.add(active);
                defFieldsInn.querySelector('input').value = objSelected.data.inn;

                defFieldsOgrnip.classList.add(active);
                defFieldsOgrnip.querySelector('input').value = objSelected.value;
            }
        })
    })
}




//  -------------------------- FOR STEP 3 -------------------
//
// -----------------------------------------------------------

const transliterate = function(text) {

    text = text
        .replace(/\u0401/g, 'YO')
        .replace(/\u0419/g, 'I')
        .replace(/\u0426/g, 'TS')
        .replace(/\u0423/g, 'U')
        .replace(/\u041A/g, 'K')
        .replace(/\u0415/g, 'E')
        .replace(/\u041D/g, 'N')
        .replace(/\u0413/g, 'G')
        .replace(/\u0428/g, 'SH')
        .replace(/\u0429/g, 'SCH')
        .replace(/\u0417/g, 'Z')
        .replace(/\u0425/g, 'H')
        .replace(/\u042A/g, '')
        .replace(/\u0451/g, 'yo')
        .replace(/\u0439/g, 'i')
        .replace(/\u0446/g, 'ts')
        .replace(/\u0443/g, 'u')
        .replace(/\u043A/g, 'k')
        .replace(/\u0435/g, 'e')
        .replace(/\u043D/g, 'n')
        .replace(/\u0433/g, 'g')
        .replace(/\u0448/g, 'sh')
        .replace(/\u0449/g, 'sch')
        .replace(/\u0437/g, 'z')
        .replace(/\u0445/g, 'h')
        .replace(/\u044A/g, "'")
        .replace(/\u0424/g, 'F')
        .replace(/\u042B/g, 'I')
        .replace(/\u0412/g, 'V')
        .replace(/\u0410/g, 'a')
        .replace(/\u041F/g, 'P')
        .replace(/\u0420/g, 'R')
        .replace(/\u041E/g, 'O')
        .replace(/\u041B/g, 'L')
        .replace(/\u0414/g, 'D')
        .replace(/\u0416/g, 'ZH')
        .replace(/\u042D/g, 'E')
        .replace(/\u0444/g, 'f')
        .replace(/\u044B/g, 'i')
        .replace(/\u0432/g, 'v')
        .replace(/\u0430/g, 'a')
        .replace(/\u043F/g, 'p')
        .replace(/\u0440/g, 'r')
        .replace(/\u043E/g, 'o')
        .replace(/\u043B/g, 'l')
        .replace(/\u0434/g, 'd')
        .replace(/\u0436/g, 'zh')
        .replace(/\u044D/g, 'e')
        .replace(/\u042F/g, 'Ya')
        .replace(/\u0427/g, 'CH')
        .replace(/\u0421/g, 'S')
        .replace(/\u041C/g, 'M')
        .replace(/\u0418/g, 'I')
        .replace(/\u0422/g, 'T')
        .replace(/\u042C/g, "'")
        .replace(/\u0411/g, 'B')
        .replace(/\u042E/g, 'YU')
        .replace(/\u044F/g, 'ya')
        .replace(/\u0447/g, 'ch')
        .replace(/\u0441/g, 's')
        .replace(/\u043C/g, 'm')
        .replace(/\u0438/g, 'i')
        .replace(/\u0442/g, 't')
        .replace(/\u044C/g, "'")
        .replace(/\u0431/g, 'b')
        .replace(/\u044E/g, 'yu');

    return text;
};
//

const addressSiteShop = $element('.address-site-shop');
//
//
// addressSiteShopInp.addEventListener('input', function (){
//     console.log(this.innerText)
// })


//
const inpShopName = $element('.shop-name');
const addressSiteShopName = $element('.address-site-shop-name');

inpShopName.addEventListener('input', function (){
    if(this.value !== ''){
        addressSiteShopName.innerText = transliterate(this.value).replace(/ /g, '-');
        addressSiteShop.classList.add(active);
        addressSiteShop.classList.add(disabled);
        addressSiteShop.querySelector('.address-site-shop-name').setAttribute('contenteditable', 'false')
        addressSiteShop.querySelector('input').value = this.value;
    } else {
        addressSiteShopName.innerText = '';
        addressSiteShop.classList.remove(active);
        addressSiteShop.classList.remove(disabled);
        addressSiteShop.querySelector('.address-site-shop-name').setAttribute('contenteditable', 'false')
        addressSiteShop.querySelector('input').value = '';
    }
})

const errorMessageAddressSite = $element('#error-message-address-site');
const cyrillicPattern = /^[\u0400-\u04FF]+$/;

addressSiteShopName.addEventListener('keydown', function (e){
    const symbol = e.key;

    const symbolCheck = /^[a-z]$/i.test(symbol);

    const check = !symbolCheck &&
        !/^[0-9]$/i.test(symbol) &&
        !/^[-]$/i.test(symbol) &&
        symbol !== 'Backspace' &&
        symbol !== 'Delete' &&
        symbol !== 'ArrowLeft' &&
        symbol !== 'ArrowRight';

    if(check){
        e.preventDefault();
        e.stopPropagation();
        errorMessageAddressSite.classList.remove(none)
        errorMessageAddressSite.innerText = 'Пожалуйста, заполняйте только латинские буквы';
    } else {
        errorMessageAddressSite.classList.add(none)
        errorMessageAddressSite.innerText = '';
    }
})


const startStep = $element('.change-step[data-step="2"]');

startStep.addEventListener('click', function (){
    $element('.alert.success').style.display = 'none';
})




const priceProducts = $element('.price-products');

IMask(
    priceProducts,
    {
        mask: 'num',
        blocks: {
            num: {
                // nested masks are available!
                mask: Number,
                thousandsSeparator: ' '
            }
        }
    }
)


addressSiteShop.classList.remove(active);




$element('.inn-for-tech-select').addEventListener('change', function (){
    const elem = $element('.inn-for-tech');

    if(this.value === 'Технический специалист'){
        elem.classList.remove(none)
    } else {
        elem.classList.add(none)
    }
})



// const changeStepsStart = $('.change-steps-start');
// const stepsStart = $('.steps-start');
//
// changeStepsStart.forEach((item) => {
//     item.addEventListener('click', function (){
//         const indexStep = +this.dataset.stepsstart;
//
//         $('.steps-block').forEach((_item) => _item.classList.add(none))
//
//         stepsStart.forEach((_stepsStart) => {
//             _stepsStart.classList.add(none);
//         })
//         stepsStart[indexStep].classList.remove(none)
//
//         // $('.steps-start')[indexStep].classList.remove()
//     })
// })
//
//









// set it's initial value




