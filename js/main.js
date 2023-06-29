const firstName = prompt(" inserisci il tuo nome ");
const secondName = prompt(" inserisci il tuo cognome ");
const prefItem = prompt(" inserisci una preferenza (es colore, animale, ecc..) ");
const età = prompt(" inserisci la tua età ");

const numero  =  21 + parseInt(età)

const password =  (firstName + secondName + prefItem + numero)

document.getElementById("benvenutoUtente").innerHTML = `Benvenuto ${firstName} ${secondName}`
document.getElementById("result").innerHTML = `${password}`




const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Hai copiato la password ma forse è il caso che non la usi!', 'warning')
  })
}