


window.addEventListener('scroll', ()=>{
  const scrollTop = window.scrollY;
  if(scrollTop > 60){
    $element('.got-a-message').classList.add('active')
    $element('.ticket-message .navbar').classList.remove('actives')
    $element('.trial-container').classList.remove('active')
  }
  else if(scrollTop === 0){
    $element('.got-a-message').classList.remove('active')
    $element('.ticket-message .navbar').classList.add('actives')
    $element('.trial-container').classList.add('active')
  }
})

