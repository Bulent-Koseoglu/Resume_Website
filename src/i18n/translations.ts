export type Language = 'en' | 'tr';

export interface Translations {
  // Navbar
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    education: string;
    contact: string;
  };

  // Hero
  hero: {
    pretitle: string;
    name: string;
    subtitle: string;
    description: string;
    viewProjects: string;
    downloadCV: string;
    contactMe: string;
    connectWith: string;
  };

  // About
  about: {
    title: string;
    subtitle: string;
    terminalFile: string;
    terminalCmd: string;
    terminalComment: string;
    fieldName: string;
    fieldRole: string;
    fieldUniversity: string;
    fieldLocation: string;
    fieldInterests: string;
    interest1: string;
    interest2: string;
    interest3: string;
    interest4: string;
    fieldStatus: string;
    statusValue: string;
    paragraph: string;
    highlightVRTitle: string;
    highlightVRDesc: string;
    highlightEmbeddedTitle: string;
    highlightEmbeddedDesc: string;
    highlightArchTitle: string;
    highlightArchDesc: string;
    highlightProtoTitle: string;
    highlightProtoDesc: string;
  };

  // Skills
  skills: {
    title: string;
    subtitle: string;
    catProgramming: string;
    catFrameworks: string;
    catTools: string;
    catTopics: string;
  };

  // Projects
  projects: {
    title: string;
    subtitle: string;
    coreFeatures: string;
    details: string;
    moreFeatures: string;
    overview: string;
    keyHighlights: string;
    techUsed: string;
    githubRepo: string;
    liveDemo: string;
    // Project 1 - VR Boxing
    p1Title: string;
    p1Desc: string;
    p1Detail: string;
    p1F1: string;
    p1F2: string;
    p1F3: string;
    p1F4: string;
    p1F5: string;
    // Project 2 - Automatic Digger
    p2Title: string;
    p2Desc: string;
    p2Detail: string;
    p2F1: string;
    p2F2: string;
    p2F3: string;
    p2F4: string;
    p2F5: string;
    // Project 3 - Gym System
    p3Title: string;
    p3Desc: string;
    p3Detail: string;
    p3F1: string;
    p3F2: string;
    p3F3: string;
    p3F4: string;
    p3F5: string;
    // Project 4 - Nessy Burger
    p4Title: string;
    p4Desc: string;
    p4Detail: string;
    p4F1: string;
    p4F2: string;
    p4F3: string;
    p4F4: string;
  };

  // Education
  education: {
    title: string;
    subtitle: string;
    degree: string;
    university: string;
    dateRange: string;
    description: string;
    expectedGrad: string;
    relevantCourses: string;
    courses: string[];
    achieveLabel: string;
    achieveTitle: string;
    achieveSubtitle: string;
    achieveDesc: string;
    langEN: string;
    langTR: string;
  };

  // CV Download
  cv: {
    title: string;
    description: string;
    button: string;
  };

  // Contact
  contact: {
    title: string;
    subtitle: string;
    intro: string;
    email: string;
    linkedin: string;
    github: string;
    phone: string;
    location: string;
    locationValue: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formNamePlaceholder: string;
    formEmailPlaceholder: string;
    formMessagePlaceholder: string;
    sendMessage: string;
    messageSentTitle: string;
    messageSentDesc: string;
    copyEmail: string;
  };

  // Footer
  footer: {
    copyright: string;
    builtWith: string;
    quickLinks: string;
  };
}

const en: Translations = {
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    education: 'Education',
    contact: 'Contact',
  },
  hero: {
    pretitle: 'Hello, World! I am',
    name: 'Bülent Köseoğlu',
    subtitle: 'Computer Engineering Senior & VR/Embedded Systems Developer',
    description: 'Senior Computer Engineering student at Yaşar University, building physics-based VR simulations, embedded control systems, and scalable web platforms.',
    viewProjects: 'View Projects',
    downloadCV: 'Download CV',
    contactMe: 'Contact Me',
    connectWith: 'Connect with me:',
  },
  about: {
    title: 'About Me',
    subtitle: 'A brief overview of my focus areas and what drives my work in technology.',
    terminalFile: 'developer_profile.json',
    terminalCmd: 'cat student.json',
    terminalComment: '// Personal Information',
    fieldName: '"name"',
    fieldRole: '"role"',
    fieldUniversity: '"university"',
    fieldLocation: '"location"',
    fieldInterests: '"interests"',
    interest1: 'VR/AR Development',
    interest2: 'Embedded Systems',
    interest3: 'Computer Networks',
    interest4: 'Game Development',
    fieldStatus: '"status"',
    statusValue: 'Seeking Internship & Entry-Level Opportunities',
    paragraph: 'I am a senior Computer Engineering student at Yaşar University with hands-on experience in VR simulation development using Unity 6 and OpenXR, embedded systems with Arduino and AVR C, and web-based application architecture. I build projects that combine software engineering fundamentals with emerging technologies — from physics-based VR boxing simulations to autonomous soil processing machines.',
    highlightVRTitle: 'VR/AR Development',
    highlightVRDesc: 'Building immersive simulations with Unity 6, OpenXR, XR Interaction Toolkit, and NavMesh AI.',
    highlightEmbeddedTitle: 'Embedded Systems',
    highlightEmbeddedDesc: 'Arduino Uno, AVR C firmware, sensor integration, real-time control systems.',
    highlightArchTitle: 'Software Architecture',
    highlightArchDesc: 'OOP design patterns (Observer, Singleton, FSM), scalable web platforms, clean code.',
    highlightProtoTitle: 'Rapid Prototyping',
    highlightProtoDesc: 'Game Jam experience: shipped a complete mobile game in 48 hours on Itch.io.',
  },
  skills: {
    title: 'Technical Skills',
    subtitle: 'Core competencies covering low-level systems, immersive experiences, and software architecture.',
    catProgramming: 'Programming Languages',
    catFrameworks: 'Frameworks & Platforms',
    catTools: 'Tools & Methodologies',
    catTopics: 'Engineering Topics',
  },
  projects: {
    title: 'Featured Projects',
    subtitle: 'A curated collection of my work spanning VR development, embedded systems, web platforms, and game jams.',
    coreFeatures: 'Core Features',
    details: 'Details',
    moreFeatures: 'more features',
    overview: 'Overview',
    keyHighlights: 'Key Highlights & Features',
    techUsed: 'Technologies Used',
    githubRepo: 'GitHub Repo',
    liveDemo: 'Live Demo',
    p1Title: 'VR Boxing: Advanced Combat System',
    p1Desc: 'A physics-based VR boxing simulation optimized for Meta Quest and Valve Index platforms using Unity 6 and OpenXR.',
    p1Detail: 'Developed a physics-based VR boxing simulation optimized for Meta Quest and Valve Index platforms using Unity 6 and OpenXR. Engineered a "PunchDetector" system utilizing vector analysis and velocity tracking algorithms to automatically classify punch types such as Jab, Hook, and Uppercut. Integrated NavMesh and Finite State Machines (FSM) to create an advanced opponent AI capable of distance control, aggressive engagement, and evasion maneuvers. Utilized Continuous Collision Detection (CCD) and ConfigurableJoint components to ensure realistic physics interactions and prevent clipping during high-velocity impacts. Established a decoupled system architecture using Observer and Singleton patterns for synchronized real-time HUD updates, scoring, and spatial audio-visual effects.',
    p1F1: 'Physics-based VR boxing simulation for Meta Quest & Valve Index',
    p1F2: 'PunchDetector system using vector analysis & velocity tracking to classify Jab, Hook, Uppercut',
    p1F3: 'Advanced opponent AI with NavMesh and Finite State Machines (FSM)',
    p1F4: 'Continuous Collision Detection (CCD) & ConfigurableJoint for realistic physics',
    p1F5: 'Decoupled architecture using Observer & Singleton patterns for real-time HUD, scoring, and spatial audio',
    p2Title: 'Automatic Digger/Tilling Machine',
    p2Desc: 'A fully autonomous soil tilling mechanism based on Arduino Uno, aimed at minimizing manual labor in small-scale farming and hobby gardens.',
    p2Detail: 'Designed and developed a fully autonomous soil tilling mechanism based on Arduino Uno, aimed at minimizing manual labor in small-scale farming and hobby gardens. Implemented a closed-loop control system that monitors soil depth in real-time using an HC-SR04 ultrasonic sensor and dynamically adjusts the blade angle via a servomotor. Developed low-level firmware using AVR C, utilizing Timer1 overflow interrupts for high-precision depth measurement and external interrupts for system state management. Integrated safety protocols including obstacle detection via mechanical switches, triggering immediate system halts and multi-modal alerts (Buzzer/LED) upon detecting hard debris. Validated system performance in the WOKWI simulation environment through field-emulation scenarios, achieving a depth maintenance accuracy of ±1 cm.',
    p2F1: 'Closed-loop control with HC-SR04 ultrasonic sensor for real-time soil depth monitoring',
    p2F2: 'Dynamic blade angle adjustment via servomotor',
    p2F3: 'Low-level AVR C firmware with Timer1 overflow interrupts for high-precision measurement',
    p2F4: 'Safety protocols: obstacle detection via mechanical switches, buzzer/LED alerts',
    p2F5: 'Validated in WOKWI simulation with ±1 cm depth accuracy',
    p3Title: 'Online Gym Management System',
    p3Desc: 'A web-based gym automation platform providing digital management for members, trainers, and administrators.',
    p3Detail: 'Architected a web-based gym automation platform providing digital management for members, trainers, and administrators. Applied core OOP principles to build a scalable user management module where distinct roles are inherited from a centralized user structure. Developed a dynamic content infrastructure allowing trainers to manage personalized workout plans, exercise sets, and schedules, while enabling member progress tracking. Integrated an intelligent scheduling system for trainer availability and a direct messaging module to facilitate trainer-member communication.',
    p3F1: 'Scalable user management with role-based inheritance (Member, Trainer, Admin)',
    p3F2: 'Dynamic content infrastructure for personalized workout plans & exercise schedules',
    p3F3: 'Member progress tracking system',
    p3F4: 'Intelligent scheduling system for trainer availability',
    p3F5: 'Direct messaging module for trainer-member communication',
    p4Title: 'Nessy Burger – Game Jam Project',
    p4Desc: 'A mobile game developed and published on Itch.io within 48 hours for the Yaşar University Mobile Game Jam.',
    p4Detail: 'Developed and published a mobile game on Itch.io within 48 hours for the Yaşar University Mobile Game Jam. This project demonstrates rapid prototyping skills, teamwork under time pressure, and the ability to deliver a fully functional game product within extreme time constraints using Unity and C#.',
    p4F1: 'Developed and published within 48-hour Game Jam deadline',
    p4F2: 'Mobile-optimized game for Itch.io platform',
    p4F3: 'Created during Yaşar University Mobile Game Jam',
    p4F4: 'Full game loop with scoring and progression',
  },
  education: {
    title: 'Education',
    subtitle: 'My academic history, relevant coursework, and learning journey in computer engineering.',
    degree: 'Bachelor of Science in Computer Engineering',
    university: 'Yaşar University, Izmir, Turkey',
    dateRange: 'Sept 2022 - July 2026',
    description: 'Senior student focusing on software development, embedded systems, VR/AR applications, computer networks, and object-oriented architecture design.',
    expectedGrad: 'Expected Graduation: July 2026',
    relevantCourses: 'Relevant Courses',
    courses: ['Computer Networks', 'Distributed Systems', 'Object-Oriented Programming', 'Data Structures', 'Database Systems', 'AR/VR Development', 'Embedded Systems', 'Microprocessors (AVR C)'],
    achieveLabel: 'Languages & Achievements',
    achieveTitle: 'Languages & Technical Focus',
    achieveSubtitle: 'Self-Directed Study & Game Jams',
    achieveDesc: 'Active explorer of virtual reality development using Unity 6, embedded systems with Arduino and AVR C, autonomous machine control, and physics-based VR simulations. Published a mobile game during the Yaşar University Game Jam (48h).',
    langEN: '🇬🇧 English – B2 Level',
    langTR: '🇹🇷 Turkish – Native',
  },
  cv: {
    title: 'Looking for the full story?',
    description: 'Download my complete CV in PDF format to view my detailed academic history, technical projects, certifications, and course work.',
    button: 'Download My CV',
  },
  contact: {
    title: 'Get In Touch',
    subtitle: 'Feel free to contact me for internship opportunities, software projects, or collaboration.',
    intro: 'I am open to discussions regarding software development roles, networking research, VR engineering, or general system administration internship opportunities. I will get back to you as quickly as possible.',
    email: 'Email',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    phone: 'Phone',
    location: 'Location',
    locationValue: 'Izmir, Turkey',
    formName: 'Full Name',
    formEmail: 'Email Address',
    formMessage: 'Your Message',
    formNamePlaceholder: 'John Doe',
    formEmailPlaceholder: 'johndoe@example.com',
    formMessagePlaceholder: 'I am interested in discussing internship or project collaboration...',
    sendMessage: 'Send Message',
    messageSentTitle: 'Message Sent!',
    messageSentDesc: 'Thank you for reaching out. I will get back to you shortly.',
    copyEmail: 'Copy email to clipboard',
  },
  footer: {
    copyright: '© 2026 Bülent Köseoğlu. All rights reserved.',
    builtWith: 'Built with React, TypeScript & Vite',
    quickLinks: 'Quick Links',
  },
};

const tr: Translations = {
  nav: {
    home: 'Ana Sayfa',
    about: 'Hakkımda',
    skills: 'Yetenekler',
    projects: 'Projeler',
    education: 'Eğitim',
    contact: 'İletişim',
  },
  hero: {
    pretitle: 'Merhaba, Dünya! Ben',
    name: 'Bülent Köseoğlu',
    subtitle: 'Bilgisayar Mühendisliği Son Sınıf & VR/Gömülü Sistem Geliştirici',
    description: 'Yaşar Üniversitesi Bilgisayar Mühendisliği son sınıf öğrencisi. Fizik tabanlı VR simülasyonları, gömülü kontrol sistemleri ve ölçeklenebilir web platformları geliştiriyorum.',
    viewProjects: 'Projeleri Gör',
    downloadCV: 'CV İndir',
    contactMe: 'İletişime Geç',
    connectWith: 'Bana ulaşın:',
  },
  about: {
    title: 'Hakkımda',
    subtitle: 'Odak alanlarıma ve teknoloji tutkuma kısa bir bakış.',
    terminalFile: 'gelistirici_profili.json',
    terminalCmd: 'cat ogrenci.json',
    terminalComment: '// Kişisel Bilgiler',
    fieldName: '"isim"',
    fieldRole: '"rol"',
    fieldUniversity: '"üniversite"',
    fieldLocation: '"konum"',
    fieldInterests: '"ilgi_alanlari"',
    interest1: 'VR/AR Geliştirme',
    interest2: 'Gömülü Sistemler',
    interest3: 'Bilgisayar Ağları',
    interest4: 'Oyun Geliştirme',
    fieldStatus: '"durum"',
    statusValue: 'Staj & Giriş Seviyesi Fırsatlar Arıyor',
    paragraph: 'Yaşar Üniversitesi Bilgisayar Mühendisliği son sınıf öğrencisiyim. Unity 6 ve OpenXR ile VR simülasyonu geliştirme, Arduino ve AVR C ile gömülü sistemler ve web tabanlı uygulama mimarisi konularında uygulamalı deneyimim var. Fizik tabanlı VR boks simülasyonlarından otonom toprak işleme makinelerine kadar yazılım mühendisliği temellerini yeni teknolojilerle birleştiren projeler geliştiriyorum.',
    highlightVRTitle: 'VR/AR Geliştirme',
    highlightVRDesc: 'Unity 6, OpenXR, XR Interaction Toolkit ve NavMesh AI ile sürükleyici simülasyonlar geliştirme.',
    highlightEmbeddedTitle: 'Gömülü Sistemler',
    highlightEmbeddedDesc: 'Arduino Uno, AVR C firmware, sensör entegrasyonu, gerçek zamanlı kontrol sistemleri.',
    highlightArchTitle: 'Yazılım Mimarisi',
    highlightArchDesc: 'OOP tasarım kalıpları (Observer, Singleton, FSM), ölçeklenebilir web platformları, temiz kod.',
    highlightProtoTitle: 'Hızlı Prototipleme',
    highlightProtoDesc: 'Game Jam deneyimi: 48 saatte Itch.io\'da komple bir mobil oyun yayınladım.',
  },
  skills: {
    title: 'Teknik Yetenekler',
    subtitle: 'Düşük seviye sistemler, sürükleyici deneyimler ve yazılım mimarisini kapsayan temel yetkinlikler.',
    catProgramming: 'Programlama Dilleri',
    catFrameworks: 'Framework & Platformlar',
    catTools: 'Araçlar & Metodolojiler',
    catTopics: 'Mühendislik Konuları',
  },
  projects: {
    title: 'Öne Çıkan Projeler',
    subtitle: 'VR geliştirme, gömülü sistemler, web platformları ve game jam\'leri kapsayan çalışmalarımdan bir seçki.',
    coreFeatures: 'Temel Özellikler',
    details: 'Detaylar',
    moreFeatures: 'özellik daha',
    overview: 'Genel Bakış',
    keyHighlights: 'Önemli Noktalar & Özellikler',
    techUsed: 'Kullanılan Teknolojiler',
    githubRepo: 'GitHub Repo',
    liveDemo: 'Canlı Demo',
    p1Title: 'VR Boks: Gelişmiş Dövüş Sistemi',
    p1Desc: 'Unity 6 ve OpenXR kullanılarak Meta Quest ve Valve Index platformları için optimize edilmiş fizik tabanlı VR boks simülasyonu.',
    p1Detail: 'Unity 6 ve OpenXR kullanılarak Meta Quest ve Valve Index platformları için optimize edilmiş fizik tabanlı bir VR boks simülasyonu geliştirdim. Jab, Hook ve Uppercut gibi yumruk türlerini otomatik olarak sınıflandırmak için vektör analizi ve hız takip algoritmaları kullanan bir "PunchDetector" sistemi tasarladım. Mesafe kontrolü, agresif angajman ve kaçınma manevraları yapabilen gelişmiş bir rakip yapay zekası oluşturmak için NavMesh ve Sonlu Durum Makineleri (FSM) entegre ettim. Yüksek hızlı darbelerde gerçekçi fizik etkileşimleri sağlamak için Sürekli Çarpışma Algılama (CCD) ve ConfigurableJoint bileşenlerini kullandım. Gerçek zamanlı HUD güncellemeleri, puanlama ve uzamsal ses-görsel efektler için Observer ve Singleton kalıplarını kullanarak ayrıştırılmış bir sistem mimarisi kurdum.',
    p1F1: 'Meta Quest & Valve Index için fizik tabanlı VR boks simülasyonu',
    p1F2: 'Jab, Hook, Uppercut sınıflandırması için vektör analizi & hız takibi ile PunchDetector sistemi',
    p1F3: 'NavMesh ve Sonlu Durum Makineleri (FSM) ile gelişmiş rakip yapay zekası',
    p1F4: 'Gerçekçi fizik için Sürekli Çarpışma Algılama (CCD) & ConfigurableJoint',
    p1F5: 'Gerçek zamanlı HUD, puanlama ve uzamsal ses için Observer & Singleton kalıplarıyla ayrıştırılmış mimari',
    p2Title: 'Otomatik Kazıcı/Toprak İşleme Makinesi',
    p2Desc: 'Küçük ölçekli tarım ve hobi bahçelerinde el emeğini en aza indirmeyi amaçlayan, Arduino Uno tabanlı tam otonom toprak işleme mekanizması.',
    p2Detail: 'Küçük ölçekli tarım ve hobi bahçelerinde el emeğini en aza indirmeyi amaçlayan, Arduino Uno tabanlı tam otonom bir toprak işleme mekanizması tasarlayıp geliştirdim. HC-SR04 ultrasonik sensör kullanarak toprak derinliğini gerçek zamanlı izleyen ve servomotor aracılığıyla bıçak açısını dinamik olarak ayarlayan kapalı döngü kontrol sistemi uyguladım. Yüksek hassasiyetli derinlik ölçümü için Timer1 taşma kesmeleri ve sistem durum yönetimi için harici kesmeler kullanan AVR C ile düşük seviye firmware geliştirdim. Mekanik anahtarlar aracılığıyla engel algılama, sert enkaz algılandığında anlık sistem durdurma ve çok modlu uyarılar (Buzzer/LED) dahil güvenlik protokolleri entegre ettim. WOKWI simülasyon ortamında saha emülasyonu senaryoları ile sistem performansını doğruladım, ±1 cm derinlik bakım doğruluğu elde ettim.',
    p2F1: 'Gerçek zamanlı toprak derinliği izleme için HC-SR04 ultrasonik sensörlü kapalı döngü kontrol',
    p2F2: 'Servomotor ile dinamik bıçak açısı ayarı',
    p2F3: 'Yüksek hassasiyetli ölçüm için Timer1 taşma kesmeleri ile düşük seviye AVR C firmware',
    p2F4: 'Güvenlik protokolleri: mekanik anahtarlarla engel algılama, buzzer/LED uyarıları',
    p2F5: 'WOKWI simülasyonunda ±1 cm derinlik doğruluğu ile doğrulanmış',
    p3Title: 'Online Spor Salonu Yönetim Sistemi',
    p3Desc: 'Üyeler, eğitmenler ve yöneticiler için dijital yönetim sağlayan web tabanlı spor salonu otomasyon platformu.',
    p3Detail: 'Üyeler, eğitmenler ve yöneticiler için dijital yönetim sağlayan web tabanlı bir spor salonu otomasyon platformu tasarladım. Farklı rollerin merkezi bir kullanıcı yapısından miras alındığı ölçeklenebilir bir kullanıcı yönetim modülü oluşturmak için temel OOP prensiplerini uyguladım. Eğitmenlerin kişiselleştirilmiş egzersiz planlarını, egzersiz setlerini ve programlarını yönetmesine olanak tanıyan, aynı zamanda üye ilerleme takibini mümkün kılan dinamik bir içerik altyapısı geliştirdim. Eğitmen müsaitliği için akıllı bir programlama sistemi ve eğitmen-üye iletişimini kolaylaştıran doğrudan mesajlaşma modülü entegre ettim.',
    p3F1: 'Rol tabanlı kalıtımla ölçeklenebilir kullanıcı yönetimi (Üye, Eğitmen, Yönetici)',
    p3F2: 'Kişiselleştirilmiş antrenman planları & egzersiz programları için dinamik içerik altyapısı',
    p3F3: 'Üye ilerleme takip sistemi',
    p3F4: 'Eğitmen müsaitliği için akıllı programlama sistemi',
    p3F5: 'Eğitmen-üye iletişimi için doğrudan mesajlaşma modülü',
    p4Title: 'Nessy Burger – Game Jam Projesi',
    p4Desc: 'Yaşar Üniversitesi Mobil Oyun Game Jam\'i için 48 saat içinde geliştirilerek Itch.io\'da yayınlanan mobil oyun.',
    p4Detail: 'Yaşar Üniversitesi Mobil Oyun Game Jam\'i kapsamında 48 saat içinde bir mobil oyun geliştirip Itch.io\'da yayınladım. Bu proje, hızlı prototipleme becerilerimi, zaman baskısı altında takım çalışmasını ve Unity ile C# kullanarak aşırı zaman kısıtlamalarında tam işlevsel bir oyun ürünü sunma yeteneğimi göstermektedir.',
    p4F1: '48 saatlik Game Jam süresi içinde geliştirilip yayınlandı',
    p4F2: 'Itch.io platformu için mobil optimize oyun',
    p4F3: 'Yaşar Üniversitesi Mobil Oyun Game Jam\'inde oluşturuldu',
    p4F4: 'Puanlama ve ilerleme sistemiyle tam oyun döngüsü',
  },
  education: {
    title: 'Eğitim',
    subtitle: 'Akademik geçmişim, ilgili derslerim ve bilgisayar mühendisliğindeki öğrenim yolculuğum.',
    degree: 'Bilgisayar Mühendisliği Lisans',
    university: 'Yaşar Üniversitesi, İzmir, Türkiye',
    dateRange: 'Eyl 2022 - Tem 2026',
    description: 'Yazılım geliştirme, gömülü sistemler, VR/AR uygulamaları, bilgisayar ağları ve nesne yönelimli mimari tasarımına odaklanan son sınıf öğrencisi.',
    expectedGrad: 'Beklenen Mezuniyet: Temmuz 2026',
    relevantCourses: 'İlgili Dersler',
    courses: ['Bilgisayar Ağları', 'Dağıtık Sistemler', 'Nesne Yönelimli Programlama', 'Veri Yapıları', 'Veritabanı Sistemleri', 'AR/VR Geliştirme', 'Gömülü Sistemler', 'Mikroişlemciler (AVR C)'],
    achieveLabel: 'Diller & Başarılar',
    achieveTitle: 'Diller & Teknik Odak',
    achieveSubtitle: 'Bireysel Çalışma & Game Jam\'ler',
    achieveDesc: 'Unity 6 ile sanal gerçeklik geliştirme, Arduino ve AVR C ile gömülü sistemler, otonom makine kontrolü ve fizik tabanlı VR simülasyonları alanlarında aktif bir araştırmacı. Yaşar Üniversitesi Game Jam\'inde (48 saat) bir mobil oyun yayınladım.',
    langEN: '🇬🇧 İngilizce – B2 Seviye',
    langTR: '🇹🇷 Türkçe – Ana Dil',
  },
  cv: {
    title: 'Tam hikayeyi mi arıyorsunuz?',
    description: 'Detaylı akademik geçmişimi, teknik projelerimi, sertifikalarımı ve ders çalışmalarımı görüntülemek için CV\'mi PDF formatında indirin.',
    button: 'CV\'mi İndir',
  },
  contact: {
    title: 'İletişime Geçin',
    subtitle: 'Staj fırsatları, yazılım projeleri veya iş birliği için benimle iletişime geçmekten çekinmeyin.',
    intro: 'Yazılım geliştirme rolleri, ağ araştırması, VR mühendisliği veya genel sistem yönetimi staj fırsatları hakkında görüşmelere açığım. Size en kısa sürede dönüş yapacağım.',
    email: 'E-posta',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    phone: 'Telefon',
    location: 'Konum',
    locationValue: 'İzmir, Türkiye',
    formName: 'Ad Soyad',
    formEmail: 'E-posta Adresi',
    formMessage: 'Mesajınız',
    formNamePlaceholder: 'Adınızı girin',
    formEmailPlaceholder: 'ornek@email.com',
    formMessagePlaceholder: 'Staj veya proje iş birliği hakkında görüşmek istiyorum...',
    sendMessage: 'Mesaj Gönder',
    messageSentTitle: 'Mesaj Gönderildi!',
    messageSentDesc: 'İletişime geçtiğiniz için teşekkürler. En kısa sürede size dönüş yapacağım.',
    copyEmail: 'E-postayı panoya kopyala',
  },
  footer: {
    copyright: '© 2026 Bülent Köseoğlu. Tüm hakları saklıdır.',
    builtWith: 'React, TypeScript & Vite ile geliştirildi',
    quickLinks: 'Hızlı Bağlantılar',
  },
};

export const translations: Record<Language, Translations> = { en, tr };
