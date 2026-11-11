# Konu

**1. Hafta – Git ve GitHub**

Bu hafta Git ve GitHub'ın ne işe yaradığını araştırdım. Sonra da küçük bir HTML, CSS ve JavaScript projesi hazırlayıp GitHub'a ekledim.

## Araştırma

### 1. Git nedir?

Git, projedeki dosyalarda yaptığımız değişiklikleri kaydetmek ve geçmişe dönmek için kullanılan bir sürüm kontrol sistemidir. Yanlışlıkla bir şeyi bozduğumuzda eski bir commit'e bakabiliriz.

### 2. GitHub nedir?

GitHub, Git ile takip edilen projeleri internet üzerinden saklamaya ve paylaşmaya yarayan bir platformdur. Ekip olarak çalışırken de kullanılır.

### 3. Git ile GitHub arasındaki fark nedir?

Git bilgisayarımızda da çalışabilen bir araçtır. GitHub ise Git projelerini internette tuttuğumuz bir hizmettir. Git kullanmak için GitHub hesabı zorunlu değildir.

### 4. Repository (repo) nedir?

Repo, projemizin dosyalarının ve değişiklik geçmişinin tutulduğu depodur. Bilgisayarımızdaki depoya yerel repo, GitHub'dakine uzak repo denebilir.

### 5. Commit nedir?

Commit, projede yaptığımız değişiklikleri bir mesajla birlikte kayıt altına almaktır. Örneğin `Add homepage` mesajı ana sayfanın eklendiğini anlatır.

### 6. Branch nedir?

Branch, ana çalışmayı bozmadan farklı bir dalda geliştirme yapmamızı sağlar. Yeni bir özellik denemek için kullanılabilir.

### 7. Merge nedir?

Merge, farklı dallarda yapılan değişiklikleri birleştirme işlemidir.

### 8. Clone nedir?

Clone, GitHub'daki bir repoyu bilgisayarımıza kopyalamaktır. Dosyalarla beraber Git geçmişini de alır.

### 9. Pull nedir?

Pull, uzaktaki depoda yapılan son değişiklikleri kendi bilgisayarımıza getirmeye yarar.

### 10. Push nedir?

Push, kendi bilgisayarımızdaki commit'leri uzak depoya göndermek için kullanılır.

### 11. .gitignore dosyasının amacı nedir?

`.gitignore`, Git'in takip etmesini istemediğimiz dosya ve klasörleri belirtir. Örneğin geçici dosyalar veya `node_modules` klasörü bu dosyaya yazılabilir. Parola ve gizli bilgiler ise hiçbir zaman repoya yüklenmemelidir.

### Git ve GitHub neden kullanılıyor?

Bir web projesinde bazen çok fazla dosya değişiyor. Git sayesinde hangi dosyanın ne zaman değiştiğini görebiliyoruz. GitHub da projemizin yedeğini ve paylaşılabilir bir adresini sağlıyor.

**Avantajları:** Eski sürümleri saklama, ekip çalışması, değişiklikleri görme ve kodu paylaşma.

**Dezavantajları:** Başta komutları karıştırmak mümkün. Merge sırasında çakışmalar çıkabiliyor. Ayrıca public bir repoya yanlışlıkla gizli dosya yüklememeye dikkat etmek gerekiyor.

**Alternatifler:** Sürüm kontrolü için SVN ve Mercurial; Git depolarını barındırmak için GitLab ve Bitbucket gibi hizmetler kullanılabilir.

**Sektörde kullanımı:** Şirketler yeni özellikler geliştirirken branch açıp değişiklikleri commit'ler halinde saklayabiliyor. Kod incelemesinden sonra değişiklikler ana dala eklenebiliyor.

## Sektörde Kullanımı

Açık kaynak üç web projesini incelemek için ayrı bir dosya hazırladım:

[İncelediğim projeler ve notlarım](SEKTOR-ARASTIRMASI.md)

## İncelediğim Projeler

1. Django Local Library – Python ve Django ile hazırlanmış örnek kütüphane sitesi.
2. Next.js Learn – Next.js öğretmek için hazırlanmış web uygulaması örnekleri.
3. astro.build – Astro ile yapılmış gerçek bir web sitesi.

Ayrıntılı bilgiler [sektör araştırması](SEKTOR-ARASTIRMASI.md) dosyasında.

## Yaptığım Uygulama

HTML, CSS ve JavaScript ile basit bir tanıtım sitesi hazırladım.

- `index.html`: Ana sayfa.
- `style.css`: Sayfanın renkleri ve düzeni.
- `script.js`: Butona tıklayınca Git ile ilgili bilgi gösterme ve form denemesi.
- `iletisim.html`: Örnek iletişim sayfası. Form gerçek e-posta göndermez.

**Çalıştırma:** Dosyaları bilgisayara indirip `index.html` dosyasını tarayıcıda açmak yeterli. Ek kurulum gerekmiyor.

## Karşılaştığım Problemler

Git ile GitHub aynı şey gibi görünebiliyor. Bu yüzden önce aralarındaki farkı öğrendim. Commit mesajlarının da `deneme` veya `son` gibi belirsiz kelimeler yerine yapılan işi açıklaması gerektiğini gördüm.

## Öğrendiklerim

Bu çalışmada repo, commit, branch ve GitHub kavramlarını daha iyi anladım. Ayrıca küçük bir web sitesinin dosyalarını ayrı ayrı geliştirip her aşamasını kaydetmenin neden yararlı olduğunu gördüm.

## Kaynaklar

- [Git Resmî Dokümanları](https://git-scm.com/docs)
- [GitHub Docs](https://docs.github.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [İncelediğim GitHub Projeleri](SEKTOR-ARASTIRMASI.md)
