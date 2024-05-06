/*function mostraClassifica(event){
    const button = event.currentTarget;
    button.removeEventListener('click', mostraClassifica);

    const classifica = document.querySelector('#classificaNascosta');
    classifica.classList.remove('hidden');
    button.remove();
}

const button = document.querySelector('#mostraClassifica');
button.addEventListener('click', mostraClassifica);*/




//CLASSIFICA PILOTI
function getClassificaPiloti() {
    fetch('http://ergast.com/api/f1/current/driverStandings.json')
        .then(response => response.json())
        .then(data => {
            const classificaPilota = document.getElementById('classificaPilota');
            classificaPilota.innerHTML = '';

            const piloti = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            piloti.forEach((pilota, index) => {
                const boxClassifica = document.createElement('div');
                boxClassifica.classList.add('boxClassifica');

                const numeroClassifica = document.createElement('div');
                numeroClassifica.classList.add('numeroClassifica');
                numeroClassifica.textContent = index + 1;

                const infoPilota = document.createElement('div');
                infoPilota.classList.add('infoPilota');

                const nomePilota = document.createElement('div');
                nomePilota.classList.add('nomePilota');
                nomePilota.textContent = pilota.Driver.givenName;

                const cognomePilota = document.createElement('div');
                cognomePilota.classList.add('cognomePilota');
                cognomePilota.textContent = pilota.Driver.familyName;

                const squadraPilota = document.createElement('div');
                squadraPilota.classList.add('squadraPilota');
                squadraPilota.textContent = pilota.Constructors[0].name;

                const puntiPilota = document.createElement('div');
                puntiPilota.classList.add('puntiPilota');

                const stilePuntiPilota = document.createElement('div');
                stilePuntiPilota.classList.add('stilePuntiPilota');
                stilePuntiPilota.textContent = pilota.points;
                let color;
                switch (pilota.Constructors[0].name.toLowerCase()) {
                    case 'red bull':
                        color = document.createElement('div');
                        color.classList.add('redbull');
                        break;
                    case 'ferrari':
                        color = document.createElement('div');
                        color.classList.add('ferrari');
                        break;
                    case 'mclaren':
                        color = document.createElement('div');
                        color.classList.add('mclaren');
                        break;
                    case 'mercedes':
                        color = document.createElement('div');
                        color.classList.add('mercedes');
                        break;
                    case 'aston martin':
                        color = document.createElement('div');
                        color.classList.add('aston');
                        break;
                    case 'rb f1 team':
                        color = document.createElement('div');
                        color.classList.add('rb');
                        break;
                    case 'haas f1 team':
                        color = document.createElement('div');
                        color.classList.add('haas');
                        break;
                    case 'Alpine F1 Team':
                        color = document.createElement('div');
                        color.classList.add('alpine');
                        break;
                    case 'Williams':
                        color = document.createElement('div');
                        color.classList.add('williams');
                        break;
                    case 'Sauber':
                        color = document.createElement('div');
                        color.classList.add('sauber');
                        break;
                    default:
                        break;
                }

                boxClassifica.appendChild(infoPilota);
                infoPilota.appendChild(numeroClassifica);
                infoPilota.appendChild(color);
                infoPilota.appendChild(nomePilota);
                infoPilota.appendChild(cognomePilota);
                infoPilota.appendChild(squadraPilota);
                boxClassifica.appendChild(puntiPilota);
                puntiPilota.appendChild(stilePuntiPilota);
                classificaPilota.appendChild(boxClassifica);
            });
        })
        .catch(error => {
            console.error('Si è verificato un errore:', error);
        });
}

// Chiama la funzione per ottenere i dati della classifica dei piloti
getClassificaPiloti();
