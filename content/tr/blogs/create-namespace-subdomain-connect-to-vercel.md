---
title: Ad Alanı Alt Alan Adı Nasıl Oluşturulur ve Vercel Uygulamasına Nasıl Bağlanılır
date: 2023-06-01
description: Burada, Ad Alanı Alt Alan Adının Nasıl Oluşturulacağını ve Vercel Uygulamasına Nasıl Bağlanılacağını öğreneceğiz
image: /blogs-img/blog3.jpg
alt: Ad Alanı Alt Alan Adı Nasıl Oluşturulur ve Vercel Uygulamasına Nasıl Bağlanılır
ogImage: /blogs-img/blog3.jpg
tags: ['nuxt', 'vercel', 'namecheap']
published: true
lang: 'tr'
---

### Giriş

Namecheap'te bir alt alan adı oluşturmak ve bunu Vercel üzerinde dağıtılmış bir uygulamaya bağlamak oldukça basit bir işlemdir. Bu blogda, Namecheap'te bir alt alan adı oluşturma ve bunu Vercel üzerinde dağıtılmış uygulamanıza nasıl bağlayacağınızı adım adım açıklayacağız.

### Adım 1: Namecheap'te bir alt alan adı oluşturun

İlk adım, Namecheap'te bir alt alan adı oluşturmaktır. Bunu yapmak için Namecheap hesabınıza giriş yapın ve alan adı kontrol panelinize gidin. "Gelişmiş DNS" sekmesine tıklayın ve ardından "Yeni Kayıt Ekle"yi tıklayın.

"Aşağıda" menüsünden "CNAME (Alias)" seçeneğini seçin. "Host" alanına, alt alan adınızın adını girin (örneğin, "app" yazarsanız, alt alan adınız "app.siteniz.com" olur). "Değer" alanına ise Vercel'deki dağıtılmış uygulamanızın URL'sini girin (örneğin, "yourapp.vercel.app").

### Adım 2: Alt alan adını doğrulayın

Alt alan adını oluşturduktan sonra, doğru şekilde ayarlandığından emin olmanız gerekecek. Bunu yapmak için, Vercel dağıtılmış uygulamanızın kontrol paneline gidin ve "Alan Adları" sekmesine tıklayın. "Alan Adı Ekle"ye tıklayın ve alt alan adınızın adını girin. Vercel, alt alan adını doğrulayacak ve doğru şekilde yapılandırıldığını onaylayacaktır.

### Adım 3: Alt alan adını Vercel dağıtılmış uygulamanıza ekleyin

Alt alan adınız doğrulandıktan sonra, bunu Vercel dağıtılmış uygulamanıza eklemeniz gerekecek. Bunu yapmak için, uygulamanızın kontrol paneline gidin ve "Ayarlar" sekmesine tıklayın. "Alan Adları"na tıklayın ve ardından "Alan Adı Ekle"yi seçin. Alt alan adınızın adını girin ve "Ekle"ye tıklayın.

### Adım 4: Alt alan adını Vercel'de doğrulayın

Alt alan adını Vercel dağıtılmış uygulamanıza ekledikten sonra, doğru şekilde yapılandırıldığından emin olmanız gerekecek. Bunu yapmak için, alt alan adına tıklayın ve "DNS Yapılandırmasını Doğrula"ya tıklayın. Vercel, alt alan adının doğru şekilde yapılandırıldığını kontrol edecek ve bunun Vercel dağıtılmış uygulamanıza bağlı olduğunu onaylayacaktır.

### Sonuç

Namecheap'teki bir alt alan adını Vercel dağıtılmış uygulamanıza bağlamak, birkaç adımda yapılabilen basit bir işlemdir. Bu blogda belirtilen adımları takip ederek, kolayca bir alt alan adı oluşturabilir ve bunu Vercel dağıtılmış uygulamanıza bağlayabilirsiniz. Alt alan adınızı hem Namecheap'te hem de Vercel'de doğrulamayı unutmayın, böylece doğru şekilde yapılandırıldığından emin olabilirsiniz. Herhangi bir sorunla karşılaşırsanız, Vercel destek ekibinden yardım alabilirsiniz.
