
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === "henry.holder" && password === "warroom1") {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('dashboard').classList.remove('hidden');
        loadMap();
        loadChart();
        loadNews();
    } else {
        document.getElementById('login-error').innerText = "Incorrect credentials.";
    }
}

function loadMap() {
    var map = L.map('map').setView([51.5, -0.09], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(map);
    L.marker([51.5, -0.09]).addTo(map).bindPopup("London – Status: Stable");
    L.marker([32.0853, 34.7818]).addTo(map).bindPopup("Tel Aviv – Status: Alert");
}

function loadChart() {
    const ctx = document.getElementById('riskChart');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [{
                label: 'Global Risk Level',
                data: [2, 3, 4, 6, 5],
                borderColor: 'red',
                fill: false
            }]
        }
    });
}

function loadNews() {
    const newsFeed = document.getElementById('newsFeed');
    const headlines = [
        "Israel launches strikes on Iranian positions...",
        "US moves carrier group closer to Taiwan...",
        "Russia increases drone strikes in eastern Ukraine...",
        "NATO calls emergency meeting on eastern threats..."
    ];
    headlines.forEach(headline => {
        const li = document.createElement('li');
        li.textContent = headline;
        newsFeed.appendChild(li);
    });
}

function sendAlert() {
    alert("SMS Alert Triggered (This is a placeholder function)");
}
