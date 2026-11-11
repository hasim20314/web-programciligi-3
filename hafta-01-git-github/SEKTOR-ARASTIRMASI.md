# Sektör Araştırması – Açık Kaynak Web Projeleri

**İnceleme tarihi: 5 Kasım 2026**

GitHub üzerinden üç açık kaynak web projesine baktım. Aşağıdaki commit sayıları yaklaşık değerlerdir; yeni güncellemeler geldikçe değişebilir. Katkı sağlayan kişi sayıları da zaman içinde değişir. GitHub sayfası sayı vermediğinde kesin sayı uydurmak yerine bağlantısını bıraktım.

## 1. Django Local Library

- **Proje adı:** Django Local Library
- **GitHub adresi:** https://github.com/mdn/django-locallibrary-tutorial
- **Programlama dili:** Python (ayrıca HTML)
- **Framework:** Django
- **Amacı:** Küçük bir kütüphanenin kitap ve yazar bilgilerini gösterebildiği örnek bir web uygulaması hazırlamak.
- **Yaklaşık commit sayısı:** 175 civarı (5 Kasım 2026 incelemesi).
- **Contributor sayısı:** Güncel kesin rakam GitHub'ın Contributors ekranından kontrol edilmeli: https://github.com/mdn/django-locallibrary-tutorial/graphs/contributors
- **Klasör yapısı:** `catalog` klasöründe uygulamayla ilgili dosyalar, `locallibrary` klasöründe proje ayarları, `templates` içinde HTML şablonları var. `manage.py` ve `requirements.txt` de ana klasörde.
- **README yapısı:** Projenin ne işe yaradığını, özelliklerini ve yerel bilgisayarda çalıştırmak için gereken komutları anlatıyor.

**Dikkatimi çeken:** Python projesinde web sayfası kodları, ayar dosyaları ve HTML şablonları ayrı klasörlerde tutulmuş.

## 2. Next.js Learn

- **Proje adı:** Next.js Learn
- **GitHub adresi:** https://github.com/vercel/next-learn
- **Programlama dili:** JavaScript ve TypeScript
- **Framework:** Next.js (React tabanlı)
- **Amacı:** Next.js öğrenmek isteyenlere örnek web uygulamaları ve başlangıç dosyaları sağlamak.
- **Yaklaşık commit sayısı:** 225 civarı (GitHub'da görülen geçmiş).
- **Contributor sayısı:** Güncel kesin rakam GitHub'ın Contributors ekranından kontrol edilmeli: https://github.com/vercel/next-learn/graphs/contributors
- **Klasör yapısı:** `basics`, `dashboard` ve `seo` adında farklı örnekleri içeren klasörler bulunuyor. Ana klasörde `package.json` ve `README.md` gibi dosyalar var.
- **README yapısı:** Next.js eğitimlerinin hangi örneklerini içerdiğini açıklıyor ve ilgili ders bağlantılarını veriyor.

**Dikkatimi çeken:** Tek repo içinde farklı seviyelerde örnek projelerin ayrı klasörlerde tutulması.

## 3. astro.build

- **Proje adı:** Astro'nun resmî web sitesi
- **GitHub adresi:** https://github.com/withastro/astro.build
- **Programlama dili:** TypeScript / JavaScript, Astro bileşenleri ve MDX
- **Framework:** Astro
- **Amacı:** Astro hakkında bilgi veren, blog ve içerik sayfaları içeren resmî web sitesini geliştirmek.
- **Yaklaşık commit sayısı:** 3.800 civarı (5 Kasım 2026 incelemesi).
- **Contributor sayısı:** Güncel kesin rakam GitHub'ın Contributors ekranından kontrol edilmeli: https://github.com/withastro/astro.build/graphs/contributors
- **Klasör yapısı:** `src` içinde sayfa ve kaynak kodları, `public` içinde herkese açık dosyalar, `scripts` içinde yardımcı betikler bulunuyor. `astro.config.mjs` proje ayarlarını içeriyor.
- **README yapısı:** Siteyle ilgili içeriklerin (tema, blog, entegrasyon) nasıl güncellendiğini ve katkıda bulunurken nelere dikkat edilmesi gerektiğini anlatıyor.

**Dikkatimi çeken:** Gerçek bir web sitesinin kaynak kodlarının herkese açık olması ve çok sayıda değişikliğin commit geçmişinde tutulması.

## Kısa Değerlendirme

Bu üç projede kullanılan teknolojiler farklı olsa da hepsinde düzenli klasör yapısı, README ve commit geçmişi var. Kendi hazırladığım küçük sitede de dosyaları ayrı tutmaya ve açıklayıcı commit mesajları yazmaya çalıştım.

## Kaynaklar

- https://github.com/mdn/django-locallibrary-tutorial
- https://github.com/vercel/next-learn
- https://github.com/withastro/astro.build
