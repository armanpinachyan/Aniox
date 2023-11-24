

const buttons = document.querySelectorAll('.history-of-dialogues .buttons .btn-status')
const btn_gray = $element(".history-of-dialogues .btn-gray")
const wrappers = $element(".wrappers")

function  addDisabled (){
buttons.forEach(btn =>{
  btn.classList.add('disabled')
  btn.classList.remove('active')
})
}


buttons.forEach(btn =>{
  btn.addEventListener('click', ()=>{
     addDisabled()
    btn.classList.remove('disabled')
    btn.classList.add('active')
  })
})

//  filter

buttons.forEach(btn =>{
  btn.addEventListener('click', function ()  {
    const tabName = this.dataset.type;
    const getType = tabName === 'all' ? '' : `[data-type="${tabName}"]`;
    $('.wrapper-ticket-message').forEach((item) => item.classList.add('close'))
    $(`.wrapper-ticket-message${getType}`).forEach((item) => item.classList.remove('close'))

  })
})




window.addEventListener('scroll', ()=>{
  const scrollTop = window.scrollY;
  if(scrollTop > 60){
    $element('.got-a-message').classList.add('active')
    $element('.ticket-message .navbar').classList.remove('actives')
  $element('.ticket-message-description').classList.remove('actives')
  }
  else if(scrollTop === 0){
    $element('.got-a-message').classList.remove('active')
    $element('.ticket-message .navbar').classList.add('actives')
    $element('.ticket-message-description').classList.add('actives')
  }
})


  btn_gray.addEventListener('click', startValidation)


function startValidation(){
  btn_gray.classList.add('loading-file-btn')
  setTimeout(() =>{
    btn_gray.classList.remove('loading-file-btn')
    wrappers.insertAdjacentHTML('beforeend', ` 
           <a href="ticket.html">
        <div class="wrapper wrapper-ticket-message" data-type="no-read">
          <div class="buttons-wrapper">
            <button class="btn-status no-read ">
              <i class="icon" data-name="notification"></i>
              Не прочитано
            </button>
            <span>
              <img src="assets/icons/check-mark.svg" alt="chek-mark">
              CS-999999999
            </span>
          </div>
          <h4 class="wrapper-title">
            Как я могу оформить договор и платить вам еще больше денег если у меня миллион подписчиков?
          </h4>

          <p class="wrapper-subtitle">Обновлено 21 мая 2023 г. в 10:11</p>
        </div>
      </a>
      <a href="ticket.html">
        <div class="wrapper wrapper-ticket-message" data-type="wait">
          <div class="buttons-wrapper">
            <button class="btn-status wait ">
              <i class="icon" data-name="loading"></i>
              Ожидает ответ
            </button>
            <span>
              <img src="assets/icons/check-mark.svg" alt="chek-mark">
              CS-999999999
            </span>
          </div>
            <h4 class="wrapper-title-min">Настройка интеграции с сайтом</h4>
          <p class="wrapper-subtitle-min">Обновлено 21 мая 2023 г. в 10:11</p>
        </div>
      </a>
      <a href="ticket.html">
        <div class="wrapper wrapper-ticket-message" data-type="read-it">
          <div class="buttons-wrapper">
            <button class="btn-status read-it ">
              <i class="icon" data-name="view"></i>
              Прочитано
            </button>
            <span>
              <img src="assets/icons/check-mark.svg" alt="chek-mark">
              CS-999999999
            </span>
          </div>
            <h4 class="wrapper-title-min">Не работает отправка уведомлений о том, что я не читаю инструкции</h4>
          <p class="wrapper-subtitle-min">Обновлено 21 мая 2023 г. в 10:11</p>
        </div>
      </a>
      <a href="ticket.html">
        <div class="wrapper wrapper-ticket-message" data-type="closed">
          <div class="buttons-wrapper">
            <button class="btn-status closed ">
              <i class="icon" data-name="check"></i>
              Закрыто
            </button>
            <span>
              <img src="assets/icons/check-mark.svg" alt="chek-mark">
              CS-999999999
            </span>
          </div>
            <h4 class="wrapper-title-min">Настройка интеграции с сайтом</h4>
          <p class="wrapper-subtitle-min">Обновлено 21 мая 2023 г. в 10:11</p>
        </div>
      </a>
  `)
    startConvertIcons()
  },1500)

}

