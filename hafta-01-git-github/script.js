// Bu dosyada sayfadaki küçük etkileşimleri hazırladım.

const bilgiButonu = document.getElementById("bilgiButonu");
const bilgiAlani = document.getElementById("bilgiAlani");

if (bilgiButonu && bilgiAlani) {
    const bilgiler = [
        "Git, dosyalardaki değişiklikleri takip etmeye yarar.",
        "Commit, projenin belirli bir aşamasını kayıt altına alır.",
        "GitHub, projeleri internet üzerinde saklamamızı sağlar."
    ];
    let sira = 0;

    bilgiButonu.addEventListener("click", function () {
        bilgiAlani.textContent = bilgiler[sira];
        sira = (sira + 1) % bilgiler.length;
    });
}

const iletisimFormu = document.getElementById("iletisimFormu");
const formSonucu = document.getElementById("formSonucu");

if (iletisimFormu && formSonucu) {
    iletisimFormu.addEventListener("submit", function (olay) {
        olay.preventDefault();
        const ad = document.getElementById("ad").value.trim();

        if (ad) {
            formSonucu.textContent = "Merhaba " + ad + "! Bu bir örnek formdur, mesaj gerçek bir adrese gönderilmedi.";
            iletisimFormu.reset();
        }
    });
}
