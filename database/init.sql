CREATE TABLE IF NOT EXISTS lokale (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nazwa VARCHAR(100) NOT NULL,
    miejscowosc VARCHAR(50) NOT NULL,
    cena_za_noc DECIMAL(10,2) NOT NULL,
    opis TEXT,
    metraz INT,
    lozka_pojedyncze INT DEFAULT 0,
    lozka_podwojne INT DEFAULT 0,
    parking BOOLEAN DEFAULT FALSE,
    zdjecie VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS klienci (
    id INT AUTO_INCREMENT PRIMARY KEY,
    imie VARCHAR(50) NOT NULL,
    nazwisko VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefon VARCHAR(15),
);

CREATE TABLE IF NOT EXISTS rezerwacje (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lokal_id INT NOT NULL,
    dzieci INT NOT NULL,
    dorosli INT NOT NULL,
    klient_id INT NOT NULL,
    data_od DATE NOT NULL,
    data_do DATE NOT NULL,
    
    FOREIGN KEY (lokal_id) REFERENCES lokale(id),
    FOREIGN KEY (klient_id) REFERENCES klienci(id)
);
