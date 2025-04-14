---
title: Namecheap Alan Adınızı Vercel Dağıtılmış Uygulamasıyla Nasıl Bağlarsınız
date: 2023-03-01
description: Burada namecheap alan adınızı vercel'de dağıtılan uygulamaya nasıl bağlayacağınızı öğreneceksiniz.
image: /blogs-img/blog1.jpg
alt: Namecheap Alan Adınızı Vercel Dağıtılmış Uygulamasıyla Nasıl Bağlarsınız
ogImage: /blogs-img/blog1.jpg
tags: ['namecheap', 'vercel']
published: true
lang: 'tr'
---

### Giriş

Eğer Namecheap'tan bir alan adı satın aldıysanız ve bu alan adını Vercel uygulamanıza bağlamak istiyorsanız, takip etmeniz gereken birkaç adım bulunmaktadır. Bu blogda, Namecheap alan adınızı Vercel uygulamanıza nasıl bağlayacağınızı adım adım anlatacağız.

### Adım 1: Vercel Uygulamanıza özel bir alan adı ekleyin

İlk adım, özel alan adınızı Vercel uygulamanıza eklemektir. Bunu yapmak için Vercel hesabınıza giriş yapın ve uygulamanızın kontrol paneline gidin. "Ayarlar" sekmesine tıklayın ve ardından "Alan Adları" bölümüne geçin. "Alan Adı Ekle"ye tıklayın ve özel alan adınızı girin. Ardından "Ekle"ye tıklayın.

### Adım 2: Vercel'den DNS kayıtlarını alın

Özel alan adınızı Vercel uygulamanıza ekledikten sonra, Vercel'den DNS kayıtlarını almanız gerekecek. Bunu yapmak için, "Alan Adları" bölümüne geri dönün ve eklediğiniz özel alan adına tıklayın. Ardından "DNS Kayıtları"na tıklayın.

Vercel, Namecheap hesabınıza eklemeniz gereken A kaydı, CNAME kaydı ve TXT kaydını içeren bir liste gösterecektir.

### Adım 3: DNS kayıtlarını Namecheap'e ekleyin

Artık Vercel'den aldığınız DNS kayıtlarını Namecheap hesabınıza eklemeniz gerekiyor. Bunu yapmak için Namecheap hesabınıza giriş yapın ve alan adı kontrol panelinize gidin. "Gelişmiş DNS" seçeneğine tıklayın ve ardından "Yeni Kayıt Ekle"yi seçin.

Önce A kaydını ekleyin. "Tür" açılır menüsünden "A (Adres)" seçeneğini seçin. "Host" alanına "@" (tırnak işareti olmadan) yazın. "Değer" alanına ise Vercel DNS kayıtlarındaki IP adresini girin.

Sonraki adımda CNAME kaydını ekleyin. "Tür" açılır menüsünden "CNAME (Alias)" seçeneğini seçin. "Host" alanına "www" (tırnak işareti olmadan) yazın. "Değer" alanına ise Vercel DNS kayıtlarındaki değeri girin.

Son olarak, TXT kaydını ekleyin. "Tür" açılır menüsünden "TXT (Metin)" seçeneğini seçin. "Host" alanına "@" (tırnak işareti olmadan) yazın. "Değer" alanına ise Vercel DNS kayıtlarındaki değeri girin.

### Adım 4: DNS kayıtlarını doğrulayın

DNS kayıtlarını Namecheap hesabınıza ekledikten sonra, doğru bir şekilde ayarlandığından emin olmanız gerekecek. Bunu yapmak için, Vercel uygulamanıza geri dönün ve özel alan adınıza tıklayın. Ardından "DNS Yapılandırmasını Doğrula"ya tıklayın. Vercel, DNS kayıtlarının doğru şekilde yapılandırılıp yapılandırılmadığını kontrol edecektir.

DNS kayıtlarının yayılması biraz zaman alabilir, bu yüzden sabırlı olun. DNS kayıtları yayıldığında, Vercel doğrulamayı yapacak ve özel alan adınız Vercel uygulamanıza bağlanacaktır.

### Sonuç

Namecheap alan adınızı Vercel uygulamanıza bağlamak oldukça basit bir işlemdir. Bu blogda belirtilen adımları takip ederek, özel alan adınızı hızla bağlayabilirsiniz. DNS kayıtlarının yayılması biraz zaman alabilir, bu yüzden sabırlı olmayı unutmayın. Herhangi bir sorunla karşılaşırsanız, Vercel destek ekibi ile iletişime geçmekten çekinmeyin.
