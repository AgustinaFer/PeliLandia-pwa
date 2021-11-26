'use strict';

let deferredInstallPrompt = null;
const installButton = document.getElementById('install-btn');
installButton.addEventListener('click', installPWA);


window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);


function saveBeforeInstallPromptEvent(evt) {
  
  deferredInstallPrompt = evt;
  installButton.removeAttribute('hidden');
}



function installPWA(evt) {
  // para instalar , no funca :(
  deferredInstallPrompt.prompt();
  
  evt.srcElement.setAttribute('hidden', true);
  
  deferredInstallPrompt.userChoice
    .then((choice) => {
      if (choice.outcome === 'accepted') {
        console.log('acá debería instalar', choice);
      } else {
        console.log('rechazó', choice);
      }
      deferredInstallPrompt = null;
    });
}


window.addEventListener('appinstalled', logAppInstalled);


function logAppInstalled(evt) {
  
  console.log('Aplicación instalada.', evt);
}