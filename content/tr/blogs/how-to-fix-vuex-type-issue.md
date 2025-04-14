---
title: Vuex tipi sorunu nasıl düzeltilir
date: 2023-01-09
description: Son vue projesinde vuex tipinin düzgün çalışmadığını görüyoruz. Bu tip sorununu düzelteceğiz ve vuex tipini çalışır hale getireceğiz.
image: /blogs-img/blog6.jpg
alt: Vuex tipi sorunu nasıl düzeltilir
ogImage: /blogs-img/blog6.jpg
tags: ['vue', 'vuex']
published: true
lang: 'tr'
---

### Giriş

Son zamanlarda bir Vue projemizde Vuex'i eklemeye çalıştığımızda, tip hatası aldık ve Vuex tipi bulunamadı hatası ile karşılaştık. Bu hatayı kolayca çözebiliriz.

### Hata nasıl düzeltilir

1. Projenizin kök dizininde bir `vuex.d.ts` dosyası oluşturun.
2. Bu kodu o dosyaya yapıştırın:

```ts
declare module 'vuex' {
  export * from 'vuex/types/index.d.ts'
  export * from 'vuex/types/helpers.d.ts'
  export * from 'vuex/types/logger.d.ts'
  export * from 'vuex/types/vue.d.ts'
}
```

3. Hepsi bu kadar. Artık her şey yolunda olmalı.
