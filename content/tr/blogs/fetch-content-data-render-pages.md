---
title: Nuxt İçerik Verilerini Doğru Şekilde Nasıl Alırsınız ve Nuxt Sayfalarında Nasıl İşlersiniz
date: 2023-08-01
description: Burada Nuxt İçerik Verilerinin Nasıl Doğru Şekilde Alınacağını ve Nuxt Sayfalarında Nasıl İşleneceğini Öğreneceğiz
image: /blogs-img/blog4.jpg
alt: Nuxt İçerik Verilerini Doğru Şekilde Nasıl Alırsınız ve Nuxt Sayfalarında Nasıl İşlersiniz
ogImage: /blogs-img/blog4.jpg
tags: ['nuxt', 'nuxt-content']
published: true
lang: 'tr'
---

### Giriş

Nuxt.js, Vue.js uygulamaları oluşturmak için popüler bir açık kaynaklı framework'tür. Nuxt 3'ün piyasaya sürülmesiyle birlikte, geliştiricilere geliştirme sürecini kolaylaştıran yeni özellikler ve iyileştirmeler sunulmuştur. Bu özelliklerden biri de Nuxt Content v2'dir, bu özellik sayesinde içeriklerinizi basit ve verimli bir şekilde oluşturabilir ve yönetebilirsiniz. Bu blog yazısında, Nuxt Content v2'yi Nuxt 3 ile nasıl bağlayacağınızı adım adım göstereceğiz.

### Adım 1: Gerekli bağımlılıkları yükleyin

İlk adım, Nuxt Content v2 için gerekli bağımlılıkları yüklemektir. Bunu yapmak için aşağıdaki komutu çalıştırın:

```js
npm install @nuxt/content@next
```

### Adım 2: Nuxt Content v2'yi yapılandırın

Bağımlılıklar yüklendikten sonra, Nuxt 3 projenizde Nuxt Content v2'yi yapılandırmanız gerekir. Bunu yapmak için, projenizin kök dizininde `nuxt.config.js` adlı yeni bir dosya oluşturun ve aşağıdaki kodu ekleyin:

```js
export default {
  // Nuxt Content modülünü etkinleştirin
  modules: ['@nuxt/content'],
}
```

Yukarıdaki kodda, Nuxt Content modülünü etkinleştirdik ve içeriğinizin saklanacağı dizini belirledik.

### Adım 3: İçerik dosyalarını oluşturun

Nuxt Content v2 yapılandırıldıktan sonra, belirtilen dizinde içerik dosyaları oluşturabilirsiniz. Varsayılan olarak, Nuxt Content v2 Markdown ve YAML dosya formatlarını destekler. `content` dizininde aşağıdaki yapıyı kullanarak yeni bir dosya oluşturabilirsiniz:

---

## title: 'Merhaba, dünya!'

# Nuxt Content v2'ye Hoş Geldiniz

Bu, Nuxt Content v2 kullanarak oluşturulmuş bir Markdown dosyasının örneğidir.

Yukarıdaki kodda, başlık ve örnek içerikle bir Markdown dosyası oluşturduk.

### Adım 4: İçeriği bir sayfada görüntüleme

Şimdi içerik dosyalarını oluşturduğumuza göre, içeriği bir sayfada görüntüleyebiliriz. Bunu yapmak için, `components` dizininde aşağıdaki kodu içeren yeni bir Vue bileşeni oluşturun:

```vue
<script setup lang="ts">
const { path } = useRoute()
const articles = await queryContent(path).findOne()
</script>

<template>
  <main>
    <div>
      <ContentRenderer :value="articles">
        <template #empty>
          <p>İçerik bulunamadı.</p>
        </template>
      </ContentRenderer>
    </div>
  </main>
</template>
```
