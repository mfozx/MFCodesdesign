---
layout: post
title: "AI Kullanım İpucu: Rol Tabanlı Prompt Yazma"
author: Furkan
date: 2026-07-16
categories: Yapay Zeka
---

Yapay zeka araçlarından aldığınız cevapların kalitesi, büyük ölçüde nasıl soru sorduğunuza bağlı. Bugünkü ipucu basit ama etkisi büyük: **rol tabanlı prompt yazma**.

### Fikir nedir?

Bir isteği doğrudan yazmak yerine, önce yapay zekaya hangi "rolde" cevap vermesini istediğinizi söylüyorsunuz. Örneğin:

- "Bana kod optimizasyonunu anlat" yerine → "Sen 10 yıllık deneyimli bir backend mühendisisin, bana kod optimizasyonunu bu bakış açısıyla anlat."
- "Bu metni sadeleştir" yerine → "Sen bir editörsün, bu metni lise öğrencilerinin anlayabileceği şekilde sadeleştir."

Rol tanımı, modelin hangi kelime dağarcığını, hangi detay seviyesini ve hangi örnekleri seçeceğini doğrudan etkiliyor. Aynı soruyu "üniversite birinci sınıf öğrencisine anlat" diye sormakla "sektörde 10 yıllık uzmana anlat" diye sormak, tamamen farklı iki cevap üretiyor.

### Neden işe yarıyor?

Rol tanımı üç şeyi aynı anda netleştiriyor: cevabın tonu, cevabın hedef kitlesi ve modelin "hangi bilgiye öncelik vereceği". Bu üçü net olmadan verilen promptlarda model genelde ortalama, herkese hitap eden ama kimseye tam oturmayan bir cevap üretiyor.

### Nasıl uygularsınız?

1. Promptun ilk cümlesinde modelin rolünü tanımlayın ("Sen bir ... sin/sın").
2. Hedef kitleyi belirtin (yaş, meslek, bilgi seviyesi).
3. İstediğiniz çıktının formatını ekleyin (madde madde, kısa paragraf, kod bloğu vb.).

Bu üç adımı eklemek, aynı soruyu tekrar tekrar farklı şekillerde sormaktan çok daha hızlı sonuç veriyor.

### Kaynaklar

- [En İyi 10 Prompt Yazma Teknikleri - 2026 Yapay Zeka Rehberi](https://numofor.com/2026/05/23/numofor-com-prompt-yazma-teknikleri-2026/)
- [Yapay Zeka ile Fısıldaşmak: Kusursuz "Prompt" Yazma Sanatı](https://zonguldakbilisim.wordpress.com/2026/01/30/yapay-zeka-ile-fisildasmak-kusursuz-prompt-yazma-sanati/)
