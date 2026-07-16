---
layout: post
title: "GitHub'da Claude Skill Örnekleri Paylaşan Repolar"
author: Furkan
date: 2026-07-16
categories: Yapay Zeka
---

Claude'un "Skills" (yetenek) sistemi, Claude'a belirli görevleri tekrarlanabilir şekilde nasıl yapacağını öğreten talimat, script ve kaynak klasörleri üzerine kurulu. Kendi skill'ini yazmak isteyenler için GitHub'da hem resmi hem de topluluk kaynaklı örnek koleksiyonları bulunuyor. İşte göz atmaya değer birkaç repo ve içlerinden dikkat çeken örnekler.

### anthropics/skills — Resmi örnek koleksiyonu

Anthropic'in kendi deposu, skill sisteminin neler yapabileceğini göstermek için hazırlanmış. Kategoriler yaratıcı/tasarım işlerinden (görsel, müzik) teknik görevlere (web uygulaması test etme, MCP sunucusu üretme) ve kurumsal iş akışlarına (iletişim, marka dili) kadar uzanıyor. Öne çıkan örnekler:

- **pdf, docx, pptx, xlsx** — Claude'un doküman oluşturma/düzenleme yeteneklerini üreten, gerçek üründe kullanılan skill'ler.
- **mcp-builder** — Claude'un dış araçlarla konuşmasını sağlayan özel MCP sunucuları inşa etmeyi öğretiyor.
- **artifacts-builder** — React, Tailwind CSS ve shadcn/ui ile karmaşık, etkileşimli claude.ai artifact'ları oluşturmayı anlatıyor.
- **skill-creator** — Kendi skill'inizi sıfırdan yazmak için başlangıç noktası; bir nevi "skill yazmak için skill".

Repo, Claude Code'a plugin marketplace olarak da eklenebiliyor (`/plugin marketplace add anthropics/skills`).

### obra/superpowers — Geliştirici iş akışları için 20'den fazla skill

Topluluk tarafından en çok referans verilen koleksiyonlardan biri. Yazılım geliştirme sürecinin hemen her adımı için ayrı bir skill barındırıyor:

- **test-driven-development** — RED-GREEN-REFACTOR döngüsüyle önce test yaz, sonra kodla yaklaşımı.
- **systematic-debugging** — Dört aşamalı kök neden analizi: yeniden üret, izole et, tanımla, doğrula.
- **using-git-worktrees** — Birden fazla özellik üzerinde bağlam değiştirmeden paralel çalışmayı öğretiyor.
- **requesting-code-review / receiving-code-review** — PR açmadan önce hazırlık ve gelen geri bildirimleri işleme süreçleri.
- **writing-plans / executing-plans** — Karmaşık işler için detaylı uygulama planı yazma ve bunu kontrol noktalarıyla adım adım yürütme.

### Topluluk "awesome" listeleri

`awesome-claude-skills` başlığı altında birden fazla kişi (travisvn, ComposioHQ, karanb192, mingrath gibi) küratörlüğünü yaptığı listeler tutuyor. Bunlar genelde anthropics/skills ve obra/superpowers gibi kaynaklardaki skill'leri kategorilere ayırıp (doküman işleme, test, güvenlik, veri analizi, yazı/araştırma vb.) tek bir yerden erişilebilir hale getiriyor. Yeni başlayanlar için iyi bir keşif noktası, çünkü her skill için kısa açıklama, kullanım senaryosu ve kaynak repo linkiyle birlikte listeleniyor.

Kendi skill'inizi yazmak isterseniz en pratik yol, `anthropics/skills` içindeki **template-skill** klasörünü kopyalayıp bir `SKILL.md` dosyasında `name` ve `description` alanlarını doldurmak — geri kalanı, Claude'un o görevi nasıl tamamlayacağına dair adım adım talimat.

### Kaynaklar

- [anthropics/skills](https://github.com/anthropics/skills)
- [obra/superpowers](https://github.com/obra/superpowers)
- [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills)
- [travisvn/awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills)
