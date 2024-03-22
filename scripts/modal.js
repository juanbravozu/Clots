let analytics;

window.addEventListener('load', () => {

    var firebaseConfig = {
        apiKey: "AIzaSyCLis90T-CIt7XxAmOBtJssTMW9sz8nXAY",
        authDomain: "clots-bcba9.firebaseapp.com",
        projectId: "clots-bcba9",
        storageBucket: "clots-bcba9.appspot.com",
        messagingSenderId: "772255009524",
        appId: "1:772255009524:web:9a4a0c0f669c219e546ca1",
        measurementId: "G-R8HFD50P5V"
    };
      // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    analytics = firebase.analytics();

    const modal = document.querySelector('.modal div');
    const state = document.getElementById('state');
    const city = document.getElementById('city');
    const sendBtn = modal.querySelector('button');
    let dataJson = {};

    fetch('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json')
    .then(raw => raw.json())
    .then(data => {
        data.forEach((stateInfo, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.innerHTML = stateInfo.departamento;
            state.appendChild(option);
        });
        dataJson = data;
    });

    state.addEventListener('change', (e) => {
        city.innerHTML = '<option value="">Selecciona una ciudad</option>';
        if(e.target.value) {
            city.disabled = false;
            dataJson[e.target.value].ciudades.forEach((cityInfo, index) => {
                const option = document.createElement('option');
                option.value = cityInfo;
                option.innerHTML = cityInfo;
                city.appendChild(option);
            });
        } else {
            city.disabled = true;
        }
    });

    city.addEventListener('change', (e) => {
        if(e.target.value) {
            sendBtn.disabled = false;
        } else {
            sendBtn.disabled = true;
        }
    });

    sendBtn.addEventListener('click', () => {
        let userInfo = {};
        if(state.value && city.value) {
            userInfo.departamento = state.value;
            userInfo.ciudad = city.value;
            db.collection('respuestas').add(userInfo);
            window.location.href = './tienda.html';
        }        
    });
});