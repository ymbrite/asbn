---
title: Nuxt3 Projesinde TailwindCSS Intellisense Nasıl Düzeltilir
date: 2023-01-26
description: Nuxt3 projesinde tailwind css intellisense düzgün çalışmıyor gibi görünüyor. Bu blogda bu sorunu düzeltmek için bir geçici çözüm paylaşacağım.
image: /blogs-img/blog2.jpg
alt: Nuxt 3 projesinde tailwind intellisense nasıl düzeltilir
ogImage: /blogs-img/blog2.jpg
tags: ['nuxt', 'tailwindcss']
published: true
lang: 'tr'
---

### Sorunlar

Bir Nuxt3 ve TailwindCSS projem vardı. VsCode'da açılmıştı. Fakat problem şuydu, projemde tailwind intellisense düzgün çalışmıyordu. VsCode tailwind eklentisini yeniden yüklemeyi denedim ama sorun çözülmedi. Daha sonra biraz araştırma yaparak bir [çözüm](https://github.com/tailwindlabs/tailwindcss-intellisense/issues/663#issuecomment-1316788128) buldum ve bugün burada paylaşıyorum.

### Neden Çalışmıyor

Nuxt projemizde bir `.nuxt` dizini var. Nuxt, Vue uygulamanızı geliştirme sırasında `.nuxt/` dizinini kullanır. Eğer dikkatlice bakarsak, `.nuxt/tailwind.config.cjs` adında bir dosya da vardır. Bu nedenle tailwind, aynı projede iki farklı konfigürasyon dosyası bulur: biri kök dizininde, diğeri ise `.nuxt` dizinindedir.

### Olası Çözüm

Bir çözüm, projenizde bu uzantıya `.nuxt` dizinini dışlamasını söylemektir. `.nuxt` dizinini çalışma alanınızdan dışlamak için şu adımları izleyin:

- Projenizin kök dizininde `/.vscode` adında bir klasör oluşturun.
- `.vscode` klasörünün içine bir `settings.json` dosyası ekleyin.
- Aşağıdaki kodu `settings.json` dosyasına kopyalayın:

```json
// /.vscode/settings.json
{
  "tailwindCSS.files.exclude": [
    "**/.git/**",
    "**/node_modules/**",
    "**/.hg/**",
    "**/.svn/**",
    "**/.nuxt/**"
  ]
}
```
