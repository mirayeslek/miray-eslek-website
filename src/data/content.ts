export const site = {
  name: "Miray Eslek",
  role: "Müzisyen & Sosyolog",
  tagline: "Müzisyen · Performans Sanatçısı · Araştırmacı",
  intro:
    "Klarinet, ses ve doğaçlama üzerinden müziği; sosyoloji ve yazı üzerinden şehri araştırır.",
  email: "mirayeslek@gmail.com",
  social: {
    instagram: "https://instagram.com/mirayeslek",
    facebook: "https://facebook.com/mirayeslek",
    linkedin: "https://linkedin.com/in/miray-eslek-198642201",
    ispo: "https://instagram.com/istanbulsoundpaintingorkestra",
    youtube: "https://www.youtube.com/watch?v=5pxOEkebV0w",
    dergipark: "https://dergipark.org.tr/tr/pub/@miray-eslek",
  },
  images: {
    poster: "/images/poster-cerkes-ridvan.jpg",
    hero: "/images/hero-sahne.jpg",
    bioImage: "/images/sokak-performans.jpg",
    afife: "/images/afife-odul.jpg",
    afifeTeam: "/images/afife-ekip.jpg",
    soundpainting: "/images/soundpainting-atolyetez.jpg",
  },
};

export const highlight = {
  year: "2025",
  award: "Yılın En Başarılı Sahne Müziği",
  ceremony: "28. Yapı Kredi Afife Tiyatro Ödülleri",
  work: "Aşk Yolunda İstanbul'da Neler Olmuş? Çerkes Rıdvan'ın Dolabı",
  workShort: "Çerkes Rıdvan'ın Dolabı",
  festival: "İstanbul Tiyatro Festivali",
  description:
    "Müzik ekibiyle Türkiye'nin en prestijli tiyatro ödüllerinden birinde sahne müziği dalında ödüle layık görüldü.",
};

export const artistStatement = {
  summary:
    "Klarnet, vokal, doğaçlama ve araştırma pratikleri üzerinden sesin, müziğin ve toplumsal deneyimin kesişiminde çalışan multidisipliner sanatçı.",
  homeThoughts: [
    "Ses, yaşadığımız dünyayı anlamanın yollarından biridir.",
    "Doğaçlama bir karşılaşma, iletişim ve birlikte düşünme biçimidir.",
  ],
  homeIntro: [
    "Klarnet, vokal ve doğaçlama pratiklerini araştırma ile performans arasında taşır; ses, gürültü ve dinleme üzerine çalışır.",
    "Sahne müziği, kolektif doğaçlama ve soundpainting atölyeleri aracılığıyla müziğin toplumsal boyutunu araştırır.",
  ],
};

export const featuredWorks = [
  {
    title: "Tiyatro & Sahne",
    description: "Sahne müziği ve tiyatro projeleri.",
    image: "/images/poster-cerkes-ridvan.jpg",
    href: "/isler/tiyatro",
  },
  {
    title: "Soundpainting",
    description: "Kolektif doğaçlama ve canlı kompozisyon.",
    image: "/images/sp-ihtimaller-afis.jpg",
    href: "/isler/soundpainting-ve-ihtimaller",
  },
  {
    title: "Performanslar",
    description: "Konser, duo ve sahne performansları.",
    image: "/images/hero-sahne.jpg",
    href: "/isler#performans",
  },
];

export type GundemItem = {
  label: string;
  title: string;
  detail: string;
  href?: string;
};

export const gundemItems: GundemItem[] = [
  {
    label: "Yaklaşan performans",
    title: "Silahşör Kızı Rabia Hanım",
    detail: "24–25 Ekim · Phebus Müzayede Evi",
    href: "/etkinlikler?tab=upcoming",
  },
  {
    label: "Yeni proje",
    title: "ÇAMUR",
    detail: "24 Ekim 2026 · 11:00 · Büyükyalı",
    href: "/etkinlikler?tab=current",
  },
  {
    label: "Son yayın",
    title: "Sephardic Songs",
    detail: "Dönem projesi · İTÜ MİAM · 2026",
    href: "/arastirma",
  },
];

export type MediaLink = {
  label: string;
  href: string;
};

export type MediaItem = {
  title: string;
  category: string;
  year: string;
  description?: string;
  href?: string;
  external?: string;
  links?: MediaLink[];
  image?: string;
  imagePosition?: string;
};

export const mediaSections = {
  video: [
    {
      title: "Miray Eslek: Klarinet",
      category: "Playlist",
      year: "—",
      description: "Klarinet çalışmaları arşivi.",
      links: [
        {
          label: "İzle",
          href: "https://www.youtube.com/playlist?list=PLW8CTujLc0vY",
        },
      ],
    },
    {
      title: "İstanbul Soundpainting Orkestra (İSPO)",
      category: "Playlist · Soundpainting",
      year: "—",
      description: "İSPO performans kayıtları.",
      links: [
        {
          label: "İzle",
          href: "https://www.youtube.com/playlist?list=PLgA3752jY2GHiXoFxVWcXPvEBlx34JmVI",
        },
      ],
    },
    {
      title: "Soundpainting Lab Ensemble",
      category: "Playlist · Soundpainting",
      year: "—",
      description: "Soundpainting Lab Ensemble kayıtları.",
      links: [
        {
          label: "İzle",
          href: "https://www.youtube.com/playlist?list=PLenY_3IQCJA4",
        },
      ],
    },
    {
      title: "Soundpainting Think Tank 2022",
      category: "Playlist · Soundpainting",
      year: "2022",
      description: "Soundpainting Think Tank 2022 kayıtları.",
      links: [
        {
          label: "İzle",
          href: "https://www.youtube.com/playlist?list=PLRaQkKT4gZ-0",
        },
      ],
    },
    {
      title: "İstanbul Soundpainting Orchestra — Ç.A.K. Full Concert",
      category: "Soundpainting",
      year: "2016",
      links: [
        {
          label: "İzle",
          href: "https://www.youtube.com/watch?v=Ysckk5LTztE",
        },
      ],
    },
    {
      title: "İstanbul Soundpainting Orchestra — GitarLive",
      category: "Soundpainting · Kolaj",
      year: "2019",
      links: [
        {
          label: "İzle",
          href: "https://www.youtube.com/watch?v=5pxOEkebV0w",
        },
      ],
    },
    {
      title: "See Waves In Series",
      category: "MIAM Improvisation Ensemble",
      year: "2020",
      description: "Miray Eslek with MIAM Improvisation Ensemble",
      links: [
        {
          label: "İzle",
          href: "https://www.youtube.com/watch?v=IRWQ82KKfr0",
        },
      ],
    },
    {
      title: "Unexpected Duet",
      category: "MIAM Improvisation Ensemble",
      year: "2020",
      description: "Ceyda Atay & Miray Eslek",
      links: [
        {
          label: "İzle",
          href: "https://www.youtube.com/watch?v=6dWXdJ4aC30",
        },
      ],
    },
    {
      title: "Vida",
      category: "MIAM Improvisation Ensemble",
      year: "2021",
      description: "Miray Eslek with MIAM Improvisation Ensemble",
      links: [
        {
          label: "İzle",
          href: "https://www.youtube.com/watch?v=WBepx1vaqkU",
        },
      ],
    },
    {
      title: "Soundmap",
      category: "Soundpainting Lab Ensemble",
      year: "2021",
      links: [
        {
          label: "İzle",
          href: "https://www.youtube.com/watch?v=jMxi6p4ySFo",
        },
      ],
    },
    {
      title: "Soundsurfing — Premier Version",
      category: "Soundpainting Lab Ensemble",
      year: "2021",
      links: [
        {
          label: "İzle",
          href: "https://www.youtube.com/watch?v=Iv7604okdUg",
        },
      ],
    },
    {
      title: "The Colors Behind The Mask (A Party of Life's Passing)",
      category: "Soundpainting Lab Ensemble",
      year: "2021",
      links: [
        {
          label: "İzle",
          href: "https://www.youtube.com/watch?v=hGHRkygdM2Y",
        },
      ],
    },
    {
      title: "Soundpainting Think Tank",
      category: "Soundpainting",
      year: "2022",
      links: [
        {
          label: "İzle",
          href: "https://www.youtube.com/watch?v=sdU8KqEAZuE",
        },
      ],
    },
    {
      title: "Waves",
      category: "MIAM Improvisation Ensemble",
      year: "2024",
      links: [
        {
          label: "İzle",
          href: "https://www.youtube.com/watch?v=zTNWzmSFYzk",
        },
      ],
    },
    {
      title: "Histanbul_Deng-i",
      category: "Duo",
      year: "2025",
      description: "Jehat Hekimoğlu & Miray Eslek",
      links: [
        {
          label: "İzle",
          href: "https://www.youtube.com/watch?v=su0z223SE38",
        },
      ],
    },
    {
      title: "Efe Rezenesi V2",
      category: "Ses tasarımı",
      year: "2026",
      description: "Çiçek Anıtları Arşivi · Ayşegül Altunok Zilkovski",
      links: [
        {
          label: "İzle",
          href: "https://www.youtube.com/watch?v=84O5JhWf1rY",
        },
      ],
    },
  ] as MediaItem[],
  photo: [
    {
      title: "Portre — Klarinet",
      category: "Sanatçı fotoğrafı",
      year: "—",
      image: "/images/portre-klarnet.jpg",
    },
    {
      title: "Portre — Mozaik",
      category: "Sanatçı fotoğrafı",
      year: "—",
      image: "/images/portre-mozaik-renkli.jpg",
    },
    {
      title: "Portre — Mozaik (siyah-beyaz)",
      category: "Sanatçı fotoğrafı",
      year: "—",
      image: "/images/portre-mozaik-sb.jpg",
      imagePosition: "28% 42%",
    },
    {
      title: "Sahne",
      category: "Performans",
      year: "—",
      image: "/images/hero-sahne.jpg",
    },
    {
      title: "Afife Tiyatro Ödülleri",
      category: "Ödül töreni",
      year: "2025",
      image: "/images/afife-odul.jpg",
    },
  ] as MediaItem[],
  audio: [
    {
      title: "Miray Eslek: Klarinet",
      category: "Playlist",
      year: "—",
      description: "Klarinet çalışmaları Spotify arşivi.",
      links: [
        {
          label: "Dinle",
          href: "https://open.spotify.com/playlist/1eyxcwGoDKET3SovyywJxv",
        },
      ],
    },
    {
      title: "Miray Eslek ile Gürültü ve Müzik",
      category: "Podcast · Psikoloji Sohbetleri",
      year: "2020",
      links: [
        {
          label: "Dinle",
          href: "https://open.spotify.com/episode/3nEtrUU007Dn5btx3qmhjD",
        },
      ],
    },
    {
      title: "This Fire (Live)",
      category: "Duo",
      year: "2023",
      description: "Nihâl & Miray Eslek (klarinet)",
      links: [
        {
          label: "Dinle",
          href: "https://open.spotify.com/intl-tr/track/3ZRXIzVq4he5zGvw00ep3m",
        },
        {
          label: "İzle",
          href: "https://www.youtube.com/watch?v=7iDvZIMfzK0",
        },
      ],
    },
    {
      title: "Şenkop ft. Miray Eslek — Mayıs Ayı Gelende",
      category: "İşbirliği",
      year: "2025",
      links: [
        {
          label: "Dinle",
          href: "https://open.spotify.com/intl-tr/track/45UsM8eGtPBRQM9kjlLyvu",
        },
        {
          label: "İzle",
          href: "https://www.youtube.com/watch?v=K4hXJEjards",
        },
      ],
    },
    {
      title: "Çamur",
      category: "Klarinet & performans",
      year: "2026",
      description: "Cemâl Acet",
      links: [
        {
          label: "Dinle",
          href: "https://open.spotify.com/intl-tr/track/4kffQK25pwmWl1d24eftZy",
        },
        {
          label: "İzle",
          href: "https://www.youtube.com/watch?v=Lxw5YjDnIcI",
        },
      ],
    },
  ] as MediaItem[],
  press: [] as MediaItem[],
};

export const worksSections = [
  {
    id: "tiyatro",
    title: "Tiyatro & Sahne",
    description:
      "Tiyatro ve sahne projelerinde müzik tasarımı ve performans.",
    image: "/images/poster-cerkes-ridvan.jpg",
    href: "/isler/tiyatro",
  },
  {
    id: "performans",
    title: "Performanslar",
    description: "Konser, duo ve sahne performansları.",
    image: "/images/hero-sahne.jpg",
  },
  {
    id: "soundpainting",
    title: "Soundpainting ve İhtimaller",
    description:
      "Canlı kompozisyon, atölye ve performans sanatları buluşması.",
    image: "/images/sp-ihtimaller-afis.jpg",
    href: "/isler/soundpainting-ve-ihtimaller",
  },
  {
    id: "sen-hangi-istanbulsun",
    title: "Sen Hangi İstanbul'sun?",
    description:
      "İstanbul'un gündelik anlarından doğan fotoğraf serisi.",
    image: "/images/istanbul-agac.jpg",
    href: "/isler/sen-hangi-istanbulsun",
  },
];

export const istanbulProject = {
  title: "Sen Hangi İstanbul'sun?",
  instagram: "https://instagram.com/sen_hangi_istanbulsun_",
  instagramHandle: "@sen_hangi_istanbulsun_",
  credit:
    "Bu metin, 2025–2026 eğitim ve öğretim yılı içerisinde, Kadir Has Üniversitesi Görsel İletişim Tasarımı Bölümü mezuniyet projesi kapsamında Kadınlar Dünyası dergisinde yayımlanmıştır.",
  intro: [
    "Bu proje, İstanbul'un farklı yerlerinde çekilmiş fotoğraflardan oluşuyor: denizin dalgası, uçan bir martı, güneşe yüzü dönen bir kedi, yapraklar, ağaçlar, boğazın suları, havadaki bulutlar, gökkuşağı, yağmur, dolunay gibi gündelik hayatımızda karşılaştığımız her bir an gibi.",
    "Şehrin içinde küçük karşılaşmalardan doğan bu fikir, yaklaşık 3 yıl önce Beşiktaş–Kadıköy vapuruna binerken aklıma geldi. O gün, kişisel Instagram hesabımda ilk kez şu soruyu sordum: \"Sen hangi İstanbul'sun?\". O günden bugüne İstanbul'la kurduğum bağ; bazen mutluluk, bazen durağanlık, bazen de tarif edemediğim bir his oldu. Ama ne olursa olsun, bu şehirden kopamadığımı fark ettim.",
    "Geçtiğimiz günlerde, Kadir Has Üniversitesi Görsel İletişim Tasarımı Bölümü mezuniyet projesi kapsamında Kadınlar Dünyası dergisi üzerine çalışan Esin ile konuşurken, bu projeyi de paylaşmak istedim.",
    "Şimdilik kendi içimden geçen bir İstanbul hâlini paylaşıyorum. Dilerim zamanla, \"Sen hangi İstanbul'sun?\" daha kolektif bir üretim alanına dönüşür. Şehri; kendimize bir ev ve bir arkadaş kılabileceğimiz günlere…",
  ],
  photos: [
    {
      src: "/images/istanbul-agac.jpg",
      title: "Acıbadem'de, gölgesinde bir ağaç",
      location: "Acıbadem",
    },
    {
      src: "/images/istanbul-patika.jpg",
      title: "Güneşle parıldayanlar ve patika bir yol",
      location: "Hacıosman Korusu",
    },
    {
      src: "/images/istanbul-bulut.jpg",
      title: "Yüzü güneşte ve aklı bulutlarda olan bir gün",
      location: "İstanbul",
    },
  ],
};

export const soundpaintingProject = {
  title: "Soundpainting ve İhtimaller",
  subtitle: "Performans Sanatları Buluşması",
  instagram: "https://instagram.com/soundpainting_ve_ihtimaller",
  instagramHandle: "@soundpainting_ve_ihtimaller",
  email: "mirayeslek@gmail.com",
  intro: [
    "Soundpainting ve İhtimaller Atölyesi, performans sanatlarıyla ilgilenen katılımcılar için Soundpainting (canlı kompozisyon) işaret dili aracılığıyla anda üretilen ve kolektif bir performans deneyimi pratiğidir. Atölyeler, klarinetist ve müzik eğitmeni Miray Eslek tarafından düzenlenir.",
    "Soundpainting, müzik ve diğer performans sanatlarında kullanılan disiplinlerarası bir işaret dilidir. Performansı yöneten Soundpainter, işaretler aracılığıyla katılımcılardan ses, hareket, hikâye, karakter, ritim, tavır ya da farklı performatif fikirler üretmelerini ister ve bunları anlık olarak ortak bir kompozisyonda bir araya getirir.",
  ],
  sections: [
    {
      title: "Atölye yapısı",
      paragraphs: [
        "Çalışma, Soundpainting Seviye 1 işaret dili üzerine uygulamalı bir giriş niteliğindedir. Katılımcılar Soundpainting'in temel cümle yapılarını deneyimlerken müzik, dans, tiyatro, hareket, anlatı ve görsel sanatlar gibi farklı performans alanlarına yönelik örneklerle çalışırlar.",
        "2 saat süren bu çalışmada katılımcılar Soundpainting'in temel işaretleriyle tanışarak sesi, hareketi ve performatif öğeleri birlikte düşünmeyi ve uygulamayı deneyimler. Atölye akustik olarak yürütülür; müzisyenlerin enstrümanlarını getirmeleri tavsiye edilir. Her seviyeden katılımcıya açıktır ve herhangi bir ön koşul gerektirmez.",
      ],
    },
    {
      title: "Öğrenme alanları",
      paragraphs: [
        "Katılımcılar performans üretiminde yaratıcılık, doğaçlama, birlikte üretme ve eşlik etme becerilerini geliştirir. Farklı disiplinlerin bir araya geldiği ortak üretim süreçleri sayesinde sahne kurma, performansı biçimlendirme, güven ilişkisi geliştirme ve kolektif düşünme deneyimi kazanırlar.",
      ],
    },
    {
      title: "Kimler için?",
      paragraphs: [
        "Atölye; müzik, tiyatro, dans, hareket ve diğer performans sanatlarına ilgi duyan sanatçılar, öğrenciler, eğitmenler, akademisyenler ve yaratıcı üretim süreçlerine merak duyan herkes için tasarlanmıştır.",
        "İçerik, çocuklar, gençler ve yetişkinlerle çalışılabilecek esneklikte kurgulanır; uygulamalar katılımcı grubunun yaşına, deneyimine ve ihtiyaçlarına göre uyarlanır.",
      ],
    },
  ],
  playlists: [
    {
      title: "İstanbul Soundpainting Orkestra (İSPO)",
      href: "https://www.youtube.com/playlist?list=PLgA3752jY2GHiXoFxVWcXPvEBlx34JmVI",
    },
    {
      title: "Soundpainting Lab Ensemble",
      href: "https://www.youtube.com/playlist?list=PLenY_3IQCJA4",
    },
    {
      title: "Soundpainting Think Tank 2022",
      href: "https://www.youtube.com/playlist?list=PLRaQkKT4gZ-0",
    },
  ],
  images: [
    "/images/sp-ihtimaller-afis.jpg",
    "/images/sp-ihtimaller-1.jpg",
    "/images/sp-ihtimaller-2.jpg",
    "/images/sp-ihtimaller-3.jpg",
  ],
};

export const cerkesRidvanProject = {
  title: "Çerkes Rıdvan'ın Dolabı",
  fullTitle: "Aşk Yolunda İstanbul'da Neler Olmuş? Çerkes Rıdvan'ın Dolabı",
  basedOn: "Reşad Ekrem Koçu'dan",
  festival: "İstanbul Tiyatro Festivali · Dolkun Production · Bahçe Galata",
  year: "2025–2026",
  role: "Müzisyen · klarinet",
  musicDirector: "Gökçe \"CheChe\" Gürçay",
  musicians: ["Volkan İncüvez", "Miray Eslek", "Özlem Kaya", "Gökçe \"CheChe\" Gürçay"],
  award: {
    title: "Yılın En Başarılı Sahne Müziği",
    ceremony: "28. Yapı Kredi Afife Tiyatro Ödülleri",
  },
  intro: [
    "2025–2026 sanat sezonunda İstanbul Tiyatro Festivali'nde sahnelenen Aşk Yolunda İstanbul'da Neler Olmuş? Çerkes Rıdvan'ın Dolabı oyununun müzisyen ekibinde yer aldı.",
    "Oyunun müzik direktörü Gökçe \"CheChe\" Gürçay, Özlem Kaya ve Volkan İncüvez ile birlikte, 28. Yapı Kredi Afife Tiyatro Ödülleri'nde Yılın En Başarılı Sahne Müziği ödülünü aldı.",
  ],
  credits: [
    { label: "Anlatıcı", value: "Cem Zeynel Kılıç" },
    { label: "Yapımcılar", value: "Yağmur Dolkun, Tülin Özen" },
    { label: "Metni uyarlayan", value: "Lara Lakay" },
    { label: "Müzik direktörü", value: "Gökçe \"CheChe\" Gürçay" },
    {
      label: "Müzisyenler",
      value: "Volkan İncüvez, Miray Eslek, Özlem Kaya, Gökçe \"CheChe\" Gürçay",
    },
  ],
  images: [
    {
      src: "/images/poster-cerkes-ridvan.jpg",
      alt: "Çerkes Rıdvan'ın Dolabı afişi",
      wide: true,
    },
    {
      src: "/images/afife-odul.jpg",
      alt: "Afife Tiyatro Ödülleri",
    },
    {
      src: "/images/afife-ekip.jpg",
      alt: "Afife ödül töreni — müzik ekibi",
      wide: true,
      objectFit: "contain" as const,
    },
  ],
};

export const bio = {
  intro:
    "Miray Eslek, klarnet, vokal, doğaçlama ve araştırma pratikleri üzerinden sesin, müziğin ve toplumsal deneyimin kesişiminde çalışan multidisipliner bir sanatçıdır.",
  paragraphs: [
    "İstanbul'da doğdu; müzikle birlikte büyüdü. 2005'te İstanbul Üniversitesi Devlet Konservatuvarı Yarı Zamanlı Klarnet Bölümü'ne kabul edildi, 2014'te mezun oldu. 2016'da Mimar Sinan Güzel Sanatlar Üniversitesi Sosyoloji Bölümü'nde lisansını, 2019'da aynı bölümde yüksek lisansını tamamladı. 2026'da İstanbul Teknik Üniversitesi Müzik İleri Araştırmalar Merkezi'nde (İTÜ MİAM) müzik yüksek lisansını; icracılık, performans ve doğaçlama alanlarına odaklanan çalışmalarıyla bitirdi.",
    "Klarinet ve ses onun için yalnızca enstrüman değil; dinlemenin, düşünmenin ve bir arada üretmenin yollarıdır. 2010'dan beri İstanbul Klarnet Derneği üyesidir; klasik müzik çalışmalarına İstanbul Klarnet Korosu ile devam eder. 2015'ten bu yana soundpainting üzerine çalışmalarını Walter Thompson Soundpainting Think Tank, Soundpainting Lab Ensemble, İstanbul Soundpainting Orkestra ve MIAM Improvisation Ensemble ile klarnet ve vokal alanında sürdürür. Yaratıcılık, doğaçlama ve performansla birlikte Soundpainting ve İhtimaller serisini düzenler.",
    "Akademik çalışmalarını müzik sosyolojisi alanında, özellikle gürültü ve müzik ilişkisi üzerine sürdürür. Hakan Kurşun'un mentörlüğünde yürüttüğü müzik üretim ve analizi derslerini \"Her Güne Bir Melodi\" projesine dönüştürerek yüz gün boyunca her gün yeni bir müzik tasarımı üretti.",
    "2025–2026 sanat sezonunda, İstanbul'da Aşk Yolunda Neler Olmuş: Çerkes Rıdvan'ın Dolabı oyununun müzisyen ekibinde yer aldı; oyunun müzik direktörü Gökçe \"CheChe\" Gürçay, Özlem Kaya ve Volkan İncüvez ile birlikte 28. Yapı Kredi Afife Tiyatro Ödülleri'nde Yılın En Başarılı Sahne Müziği ödülünü aldı. Nisan 2026 itibarıyla Cemâl Acet'in yönettiği Çamur'un müzik tasarımlarını klarnet icrası ve sahne performansıyla sürdürür.",
  ],
};

export type EventItem = {
  date: string;
  month?: string;
  title: string;
  venue: string;
  role: string;
  category: "konser" | "atolye" | "tiyatro" | "panel";
  image?: string;
  description?: string;
  external?: string;
};

const camurEvent = {
  date: "2026",
  month: "Eki",
  title: "ÇAMUR",
  venue: "Büyükyalı · Raife Cebeci Anaokulu",
  role: "Performans · müzik",
  category: "tiyatro" as const,
  image: "/images/camur-afis.jpg",
  description:
    "Seans: 24 Ekim 2026 Cumartesi 11:00. Bedenin taşıdığı hikâyeler, sesin görünmeyen katmanları ve temasın dönüştürücü gücüyle kurulan performatif bir alan.",
  external: "https://tiyatrolar.com.tr/tiyatro/camur",
};

export const events = {
  upcoming: [
    {
      date: "2026",
      month: "Eki",
      title: "Silahşör Kızı Rabia Hanım",
      venue: "Phebus Müzayede Evi · Asmalımescit",
      role: "Müzisyen · klarinet",
      category: "tiyatro" as const,
      image: "/images/poster-rabia-hanim.jpg",
      description:
        "Kafes Arkası Günahkarları serisi · Reşad Ekrem Koçu'dan uyarlama; geçen yıl Çerkes Rıdvan'ın Dolabı ile başlayan serinin devamı. Phebus Müzayede Evi'nde prömiyer 24–25 Ekim. Müzik ekibinde Miray Eslek.",
      external: "https://www.instagram.com/p/DeSRRw-Rt6m/",
    },
  ] satisfies EventItem[],
  current: [camurEvent],
  past: [
    {
      date: "2026",
      month: "May",
      title: "Sınırsız Sesler",
      venue: "Kot 1 Kolektif",
      role: "Soundpainting atölyesi · Nidal Aras ile",
      category: "atolye" as const,
      description:
        "Soundpainting nedir, çeşitli gruplarla nasıl çalışılır ve doğaçlama pratiğine nasıl entegre edilir sorularına odaklanan atölye.",
    },
    {
      date: "2026",
      month: "Mar",
      title: "Soundpainting ve İhtimaller",
      venue: "Kocaeli Üniversitesi GSF Müzik Bölümü",
      role: "Atölye yürütücüsü",
      category: "atolye" as const,
      image: "/images/soundpainting-kou.jpg",
      description:
        "Öğrencilerle kolektif doğaçlama, dinleme ve senkronize melodi geliştirme üzerine buluşma.",
    },
    {
      date: "2025",
      title: "Çerkes Rıdvan'ın Dolabı",
      venue: "İstanbul Tiyatro Festivali · Dolkun Production · Bahçe Galata",
      role: "Sahne müziği · Afife ödülü",
      category: "tiyatro" as const,
      image: "/images/poster-cerkes-ridvan.jpg",
      description:
        "Gökçe Gürçay müzik direktörlüğündeki ekip, 28. Yapı Kredi Afife Tiyatro Ödülleri'nde Yılın En Başarılı Sahne Müziği ödülünü kazandı.",
    },
    {
      date: "2025",
      month: "Ağu",
      title: "Ayaküstü Konser",
      venue: "Müze Gazhane · İklim Müzesi önü",
      role: "Klarinet · Cem Mazlum ile duo",
      category: "konser" as const,
      image: "/images/ayakustu-konser.jpg",
      description:
        "1 klarnet 1 perküsyon formatında, doğaçlama ve melodinin buluştuğu açık hava konseri.",
    },
    {
      date: "2025",
      month: "Ağu",
      title: "Tico Band",
      venue: "Müze Gazhane",
      role: "Klarinet · loop station",
      category: "konser" as const,
      image: "/images/tico-poster.jpg",
      description:
        "Klarnet ve loop station ile klarnet–ud duo performansı; İklim Müzesi önünde gerçekleşen ilk konser.",
    },
    {
      date: "2025",
      title: "29. İstanbul Tiyatro Festivali",
      venue: "Zorlu PSM",
      role: "Klarinet · KeKeÇa & DANS+1",
      category: "tiyatro" as const,
      image: "/images/festival-kekeca.jpg",
      description:
        "Türkiye Down Sendromu Derneği DANS+1 ekibi ve KeKeÇa'nın beden perküsyonu performansına klarnet eşlik etti.",
    },
    {
      date: "2025",
      title: "MANG JAM",
      venue: "Mang School · Komünite Social",
      role: "Sahne performansı",
      category: "konser" as const,
      image: "/images/mang-jam.jpg",
      description:
        "Çeşitli sanatçılarla bir araya gelinen kolektif doğaçlama ve performans buluşması.",
    },
    {
      date: "2025",
      month: "Eki",
      title: "Soundpainting ve İhtimaller",
      venue: "Studioo.Flow · Beşiktaş",
      role: "Atölye yürütücüsü",
      category: "atolye" as const,
      image: "/images/soundpainting-ihtimaller-5.jpg",
      description:
        "Soundpainting işaret dili seviye 1, uygulamalar ve denemeler üzerine performans sanatları buluşması.",
    },
    {
      date: "2024",
      month: "Kas",
      title: "Beyoğlu'nda Ses ve Gürültüleri \"Şimdide Düşlemek\"",
      venue: "Tokatlıyan İş Hanı · Buluştur Beyoğlu",
      role: "Konuşmacı",
      category: "panel" as const,
      image: "/images/bulustur-beyoglu.jpg",
      description:
        "Açık Kapılar konuşma dizisi kapsamında Beyoğlu'nun sesleri ve gürültüleri üzerine sunum.",
    },
    {
      date: "2024",
      month: "Ağu",
      title: "Soundpainting ve İhtimaller 3",
      venue: "Çıplak Ayaklar Kumpanyası",
      role: "Atölye yürütücüsü",
      category: "atolye" as const,
      image: "/images/soundpainting-bahce.jpg",
    },
    {
      date: "2024",
      month: "Eki",
      title: "Soundpainting Buluşmaları",
      venue: "Atölye Tez · Üsküdar",
      role: "Atölye yürütücüsü · İSPO",
      category: "atolye" as const,
      image: "/images/soundpainting-atolyetez.jpg",
      description:
        "12 haftalık seri: müzik, hareket ve hikâyelerin buluştuğu doğaçlama odaklı atölye programı.",
    },
    {
      date: "2023",
      title: "Her Güne Bir Melodi",
      venue: "İTÜ MİAM",
      role: "100 günlük klarinet serisi",
      category: "konser" as const,
      image: "/images/portre-klarnet.jpg",
      description:
        "Hakan Kurşun'un önerisiyle başlayan, her gün bir melodi üreten 100 günlük kişisel proje.",
    },
    {
      date: "2023",
      title: "This Fire",
      venue: "İTÜ MİAM Stüdyoları",
      role: "Klarinet · Nihal ile canlı kayıt",
      category: "konser" as const,
      image: "/images/this-fire.jpg",
      description:
        "Nihal ile kaydedilen canlı performans; havada ilerleyen klarnet melodileri.",
    },
    {
      date: "2019",
      title: "GitarLive",
      venue: "İstanbul",
      role: "Klarinet & vokal",
      category: "konser" as const,
      image: "/images/gitarlive-tres.jpg",
    },
    {
      date: "2019",
      title: "SGKM Konseri",
      venue: "Koç Üniversitesi",
      role: "Performans",
      category: "konser" as const,
      image: "/images/ispo-sgkm.jpg",
    },
    {
      date: "2016",
      title: "İSPO Konseri",
      venue: "60m² Taksim",
      role: "Klarinet & vokal",
      category: "konser" as const,
    },
    {
      date: "2012",
      title: "EcoFest İstanbul",
      venue: "İstanbul",
      role: "İSPO performansı",
      category: "konser" as const,
    },
  ] satisfies EventItem[],
};

export const publications = [
  {
    year: "2026",
    title:
      "Sephardic Songs: An Investigation of Music as a Cultural, Emotional, and Nostalgic Heritage",
    type: "Dönem Projesi",
    venue: "İTÜ MİAM",
  },
  {
    year: "2019",
    title: "Sesin Yolculuğunda Gürültünün Yeri ve Toplumsallığı",
    type: "Yüksek Lisans Tezi",
    venue: "MSGSÜ",
  },
  {
    year: "2018",
    title: "20. yy Postmodern Müzik Anlayışından 21. yy Gürültü Kavramına",
    type: "Bildiri",
    venue: "VIII. Uluslararası H.A.S. Sempozyumu",
  },
  {
    year: "2017",
    title:
      "Patrick Süskind'in Kontrabas Tiyatro Metninde Müzik, Gürültü ve Toplumsal Cinsiyet Çalışmaları",
    type: "Akademik Makale",
    venue: "Online Journal of Music Sciences",
    link: "https://dergipark.org.tr/tr/pub/@miray-eslek",
  },
];

export const talks = [
  {
    year: "2026",
    title: "The İstanbul Encyclopedia and Music: The City, Noises and Possibilities",
    venue: "Kadir Has Üniversitesi",
    type: "Ders & Atölye",
  },
  {
    year: "2024",
    title: "Beyoğlu'nda Ses ve Gürültüleri \"Şimdide Düşlemek\"",
    venue: "Buluştur Beyoğlu · Tokatlıyan İş Hanı",
    type: "Konuşma",
  },
  {
    year: "2019",
    title: "Sesin Yolculuğunda Gürültünün Yeri ve Toplumsallığı",
    venue: "MSGSÜ Müzikoloji Bölümü",
    type: "Konuşma",
  },
  {
    year: "2017",
    title: "Dünya Radyo Günü Projesi",
    venue: "UNESCO",
    type: "Proje",
  },
];

export const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/biyografi", label: "Biyografi" },
  { href: "/isler", label: "Çalışmalar" },
  { href: "/etkinlikler", label: "Etkinlikler" },
  { href: "/arastirma", label: "Araştırma" },
  { href: "/medya", label: "Medya" },
  { href: "/iletisim", label: "İletişim" },
];
