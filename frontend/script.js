document.addEventListener('DOMContentLoaded', () => {
    const kontener = document.getElementById('lista-produktow');

    fetch('/api/lokale')
        .then(response => {
            if (!response.ok) {
                throw new Error('Błąd sieci!');
            }
            return response.json();
        })
        .then(data => {
            kontener.innerHTML = '';

            if (data.length === 0) {
                kontener.innerHTML = '<p>Brak produktów w bazie.</p>';
                return;
            }

            data.forEach(produkt => {
                const div = document.createElement('div');
                div.className = 'produkt';
                div.textContent = `${produkt.id}. ${produkt.nazwa}`;
                kontener.appendChild(div);
            });
        })
        .catch(error => {
            console.error('Błąd:', error);
            kontener.innerHTML = `<p style="color:red">Błąd pobierania danych: ${error.message}</p>`;
        });
});
