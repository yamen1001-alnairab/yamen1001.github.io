/**
 * AL NAIRAB BUILDING CLEANING
 * النيرب لتنظيف المباني
 * Main JavaScript
 */

var i18n = {
  ar: {
    dir: 'rtl',
    opDir: 'ltr',
    title: 'النيرب لتنظيف المباني | Al Nairab Building Cleaning',
    description: 'شركة النيرب لتنظيف المباني - خبرة 30 عاماً في الإمارات. تنظيف مكاتب، فنادق، مستشفيات، واجهات زجاجية، موكيت، رخام، تأجير معدات.',
    keywords: 'النيرب, تنظيف مباني, شركة تنظيف, ابوظبي, الامارات, alnairab, cleaning, building cleaning, abu dhabi, UAE',
    ogTitle: 'النيرب لتنظيف المباني | Al Nairab Building Cleaning',
    ogDesc: 'خبرة 30 عاماً في تنظيف المباني بأحدث المعدات والكوادر المتخصصة في أبوظبي',

    'nav-logo': '◆ النيرب <span>للتنظيف</span>',
    'nav-services': 'خدماتنا',
    'nav-about': 'من نحن',
    'nav-process': 'طريقة عملنا',
    'nav-contact': 'تواصل معنا',
    'lang-toggle': 'EN',
    'lang-toggle-title': 'Switch to English',

    'mobile-services': 'خدماتنا',
    'mobile-about': 'من نحن',
    'mobile-process': 'طريقة عملنا',
    'mobile-contact': 'تواصل معنا',

    'hero-badge': 'خبرة تجاوزت 30 عاماً في الإمارات',
    'hero-sub': 'AL NAIRAB BUILDING CLEANING · WORLD CLEAN',
    'hero-title': 'النيرب لتنظيف المباني',
    'hero-desc': 'تكنولوجيا عالم التنظيف — نقدم أعلى معايير النظافة بأحدث المعدات وأفضل الكوادر المتخصصة',
    'hero-btn-quote': 'احصل على عرض سعر',
    'hero-btn-services': 'اكتشف خدماتنا',
    'stat-years-label': 'سنة خبرة',
    'stat-projects-label': 'مشروع منجز',
    'stat-satisfaction-label': 'رضا العملاء',

    'services-tag': 'خدماتنا',
    'services-title': 'حلول تنظيف شاملة لكل بيئة',
    'services-subtitle': 'نغطي جميع احتياجاتك من التنظيف بأحدث التقنيات والمعدات المتطورة',
    'service-1-title': 'تنظيف المباني والمكاتب',
    'service-1-desc': 'خدمات تنظيف شاملة للمكاتب والمباني التجارية والسكنية بعقود يومية وشهرية وسنوية',
    'service-2-title': 'تنظيف المراكز والأسواق',
    'service-2-desc': 'تنظيف المولات والأسواق التجارية والمحلات بأحدث ماكينات الجلي والتلميع',
    'service-3-title': 'الفنادق والمستشفيات',
    'service-3-desc': 'تنظيف وتعقيم المستشفيات والفنادق وفق أعلى معايير الصحة والسلامة',
    'service-4-title': 'تنظيف الزجاج',
    'service-4-desc': 'تنظيف الواجهات الزجاجية داخلياً وخارجياً للأبراج والمباني والمستشفيات',
    'service-5-title': 'التنظيف الجاف والمسح',
    'service-5-desc': 'شفط الغبار وتلميعه بمعدات خاصة، مع تعطير وتعقيم الأرضيات بتقنية متقدمة',
    'service-6-title': 'تنظيف الموكيت والسجاد',
    'service-6-desc': 'غسيل الموكيت والسجاد وكراسي المطاعم بالشامبو وأحدث الماكينات مع التعطير والحماية',
    'service-7-title': 'جلي وتلميع الرخام',
    'service-7-desc': 'معالجة الرخام والبلاط والحجر من الرطوبة والتملح وصقل الجدران والحوائط',
    'service-8-title': 'معدات التنظيف الثقيلة',
    'service-8-desc': 'تأجير آلات التنظيف الصناعية للمصانع والمستودعات والمرافق الكبيرة بأحدث التقنيات',

    'clients-label': 'من بين عملائنا',
    'client-1': 'قصر أبوظبي',
    'client-2': 'قصر الإمارات',
    'client-3': 'كارفور',
    'client-4': 'مجمع ديني',
    'client-5': 'مجمع رياضي',
    'client-6': 'فندق الشاطئ',

    'about-tag': 'من نحن',
    'about-title': 'رواد تنظيف المباني في الإمارات',
    'about-text': 'شركة النيرب لتنظيف المباني تأسست منذ أكثر من 30 عاماً وتقدم خدمات تنظيف احترافية بالطريقة العلمية المتطورة.',
    'about-feature-1': 'كوادر متدربة ومتخصصة',
    'about-feature-2': 'معدات حديثة وعالمية',
    'about-feature-3': 'مواد تنظيف عالية الجودة',
    'about-feature-4': 'عقود سنوية وشهرية ويومية',
    'about-feature-5': 'تغطية شاملة في أبوظبي',
    'about-feature-6': 'تعقيم وتعطير وحماية',
    'about-location': 'أبوظبي، الإمارات — ص.ب 43709',
    'about-cta': 'تواصل معنا الآن',
    'about-exp-label': 'عاماً من الخبرة',
    'about-projects-label': 'مشروع',
    'about-staff-label': 'موظف متخصص',
    'about-satisfaction-label': 'رضا العملاء',

    'process-tag': 'طريقة عملنا',
    'process-title': 'أربع خطوات نحو النظافة المثالية',
    'step-1-title': 'التواصل والتقييم',
    'step-1-desc': 'نستقبل طلبك ونرسل فريق متخصص لمعاينة الموقع وتحديد احتياجاته الدقيقة',
    'step-2-title': 'تقديم العرض',
    'step-2-desc': 'نقدم عرض سعر شامل ومفصل يناسب ميزانيتك مع خيارات متعددة للعقود',
    'step-3-title': 'التنفيذ الاحترافي',
    'step-3-desc': 'يبدأ فريقنا المتخصص بالعمل باستخدام أحدث المعدات والمواد عالية الجودة',
    'step-4-title': 'الضمان والمتابعة',
    'step-4-desc': 'نضمن رضاك الكامل ونتابع معك بشكل دوري لضمان استمرار أعلى معايير النظافة',

    'contact-tag': 'تواصل معنا',
    'contact-title': 'نحن هنا لخدمتك',
    'contact-subtitle': 'تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر خاص يناسب احتياجاتك',
    'contact-phone-label': 'هاتف',
    'contact-mobile-label': 'جوال / واتساب',
    'contact-email-label': 'بريد إلكتروني',
    'contact-address-label': 'العنوان',
    'contact-address-value': 'ص.ب 43709 — أبوظبي، الإمارات',

    'form-heading': 'أرسل لنا رسالة',
    'form-name-label': 'الاسم الكامل *',
    'form-name-placeholder': 'اكتب اسمك الكامل',
    'form-phone-label': 'رقم الهاتف *',
    'form-phone-placeholder': '+971 5X XXX XXXX',
    'form-email-label': 'البريد الإلكتروني',
    'form-email-placeholder': 'example@email.com',
    'form-service-label': 'نوع الخدمة المطلوبة',
    'form-service-default': 'اختر الخدمة...',
    'form-service-opt1': 'تنظيف مباني وشركات',
    'form-service-opt2': 'تنظيف مراكز تجارية',
    'form-service-opt3': 'تنظيف فنادق ومستشفيات',
    'form-service-opt4': 'تنظيف زجاج وواجهات',
    'form-service-opt5': 'جلي وتلميع الرخام',
    'form-service-opt6': 'تنظيف موكيت وسجاد',
    'form-service-opt7': 'تأجير معدات تنظيف',
    'form-service-opt8': 'خدمة أخرى',
    'form-message-label': 'رسالتك',
    'form-message-placeholder': 'اكتب رسالتك أو تفاصيل طلبك هنا...',
    'form-submit': 'إرسال الطلب ✦',
    'form-success-title': 'تم استلام طلبك بنجاح!',
    'form-success-desc': 'سنتواصل معك قريباً إن شاء الله',
    'success-wa-note': 'تم فتح واتساب للتواصل المباشر — إن لم يفتح تلقائياً',

    'footer-sub': 'تكنولوجيا عالم التنظيف',
    'footer-desc': 'شركة النيرب لتنظيف المباني — خبرة 30 عاماً في تقديم خدمات التنظيف الاحترافية في أبوظبي والإمارات',
    'footer-links-title': 'روابط سريعة',
    'footer-links-1': 'خدماتنا',
    'footer-links-2': 'من نحن',
    'footer-links-3': 'طريقة عملنا',
    'footer-links-4': 'تواصل معنا',
    'footer-services-title': 'خدماتنا',
    'footer-services-1': 'تنظيف المباني',
    'footer-services-2': 'تنظيف الزجاج',
    'footer-services-3': 'جلي الرخام',
    'footer-services-4': 'تأجير المعدات',
    'footer-contact-title': 'تواصل معنا',
    'footer-contact-address': 'أبوظبي، الإمارات',
    'footer-bottom': '© 2024 شركة النيرب لتنظيف المباني — أبوظبي، الإمارات العربية المتحدة · جميع الحقوق محفوظة',

    'whatsapp-label': 'واتساب',
    'scroll-label': 'العودة للأعلى',
    'alert-message': 'يرجى إدخال الاسم ورقم الهاتف على الأقل.',
    'error-message': 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى أو التواصل عبر الهاتف.',
    'success-title': 'تم استلام طلبك بنجاح!',
    'success-desc': 'سنتواصل معك قريباً إن شاء الله'
  },
  en: {
    dir: 'ltr',
    opDir: 'rtl',
    title: 'Al Nairab Building Cleaning | Cleaning Company UAE',
    description: 'Al Nairab Building Cleaning - 30 years of experience in UAE. Office, hotel, hospital, glass facade, carpet, marble cleaning, equipment rental.',
    keywords: 'alnairab, building cleaning, cleaning company, abu dhabi, UAE, al nairab',
    ogTitle: 'Al Nairab Building Cleaning',
    ogDesc: '30 years of building cleaning experience with latest equipment and specialized teams in Abu Dhabi',

    'nav-logo': '◆ Al Nairab <span>Cleaning</span>',
    'nav-services': 'Services',
    'nav-about': 'About Us',
    'nav-process': 'Process',
    'nav-contact': 'Contact',
    'lang-toggle': 'عربي',
    'lang-toggle-title': 'Switch to Arabic',

    'mobile-services': 'Services',
    'mobile-about': 'About Us',
    'mobile-process': 'Process',
    'mobile-contact': 'Contact',

    'hero-badge': 'Over 30 Years of Experience in UAE',
    'hero-sub': 'AL NAIRAB BUILDING CLEANING · WORLD CLEAN',
    'hero-title': 'Al Nairab Building Cleaning',
    'hero-desc': 'World-class cleaning technology — delivering the highest standards of cleanliness with cutting-edge equipment and expert teams',
    'hero-btn-quote': 'Get a Quote',
    'hero-btn-services': 'Our Services',
    'stat-years-label': 'Years Experience',
    'stat-projects-label': 'Projects Completed',
    'stat-satisfaction-label': 'Client Satisfaction',

    'services-tag': 'Our Services',
    'services-title': 'Comprehensive Cleaning Solutions',
    'services-subtitle': 'We cover all your cleaning needs with the latest technology and advanced equipment',
    'service-1-title': 'Building & Office Cleaning',
    'service-1-desc': 'Comprehensive cleaning for offices, commercial and residential buildings with daily, monthly and yearly contracts',
    'service-2-title': 'Mall & Retail Cleaning',
    'service-2-desc': 'Cleaning malls, commercial markets and shops using the latest scrubbing and polishing machines',
    'service-3-title': 'Hotels & Hospitals',
    'service-3-desc': 'Cleaning and sanitization of hospitals and hotels according to the highest health and safety standards',
    'service-4-title': 'Glass Cleaning',
    'service-4-desc': 'Interior and exterior glass facade cleaning for towers, buildings and hospitals',
    'service-5-title': 'Dry Cleaning & Dusting',
    'service-5-desc': 'Dust vacuuming and polishing with specialized equipment, advanced floor deodorizing and sanitization technology',
    'service-6-title': 'Carpet & Upholstery',
    'service-6-desc': 'Shampoo cleaning of carpets, rugs and restaurant chairs with the latest machines, plus deodorizing and protection',
    'service-7-title': 'Marble Grinding & Polishing',
    'service-7-desc': 'Treatment of marble, tiles and stone from moisture and salt efflorescence, plus wall and partition polishing',
    'service-8-title': 'Heavy Cleaning Equipment',
    'service-8-desc': 'Rental of industrial cleaning machines for factories, warehouses and large facilities with the latest technology',

    'clients-label': 'Among Our Clients',
    'client-1': 'Qasr Abu Dhabi',
    'client-2': 'Emirates Palace',
    'client-3': 'Carrefour',
    'client-4': 'Religious Complex',
    'client-5': 'Sports Complex',
    'client-6': 'Beach Hotel',

    'about-tag': 'About Us',
    'about-title': 'Pioneers of Building Cleaning in the UAE',
    'about-text': 'Al Nairab Building Cleaning was established over 30 years ago, providing professional cleaning services using advanced scientific methods.',
    'about-feature-1': 'Trained & Specialized Staff',
    'about-feature-2': 'Modern & International Equipment',
    'about-feature-3': 'High-Quality Cleaning Materials',
    'about-feature-4': 'Annual, Monthly & Daily Contracts',
    'about-feature-5': 'Full Coverage in Abu Dhabi',
    'about-feature-6': 'Sanitization, Deodorizing & Protection',
    'about-location': 'Abu Dhabi, UAE — P.O. Box 43709',
    'about-cta': 'Contact Us Now',
    'about-exp-label': 'Years of Experience',
    'about-projects-label': 'Projects',
    'about-staff-label': 'Specialized Staff',
    'about-satisfaction-label': 'Client Satisfaction',

    'process-tag': 'Our Process',
    'process-title': 'Four Steps to Perfect Cleanliness',
    'step-1-title': 'Contact & Assessment',
    'step-1-desc': 'We receive your request and send a specialized team to inspect the site and determine its precise needs',
    'step-2-title': 'Submit Proposal',
    'step-2-desc': 'We provide a comprehensive and detailed quote that fits your budget with multiple contract options',
    'step-3-title': 'Professional Execution',
    'step-3-desc': 'Our specialized team begins work using the latest equipment and high-quality materials',
    'step-4-title': 'Guarantee & Follow-up',
    'step-4-desc': 'We guarantee your complete satisfaction and follow up regularly to ensure continued highest cleanliness standards',

    'contact-tag': 'Contact Us',
    'contact-title': 'We Are Here to Serve You',
    'contact-subtitle': 'Contact us today for a free consultation and a special quote tailored to your needs',
    'contact-phone-label': 'Phone',
    'contact-mobile-label': 'Mobile / WhatsApp',
    'contact-email-label': 'Email',
    'contact-address-label': 'Address',
    'contact-address-value': 'P.O. Box 43709 — Abu Dhabi, UAE',

    'form-heading': 'Send Us a Message',
    'form-name-label': 'Full Name *',
    'form-name-placeholder': 'Enter your full name',
    'form-phone-label': 'Phone Number *',
    'form-phone-placeholder': '+971 5X XXX XXXX',
    'form-email-label': 'Email',
    'form-email-placeholder': 'example@email.com',
    'form-service-label': 'Service Required',
    'form-service-default': 'Select a service...',
    'form-service-opt1': 'Building & Office Cleaning',
    'form-service-opt2': 'Mall & Retail Cleaning',
    'form-service-opt3': 'Hotel & Hospital Cleaning',
    'form-service-opt4': 'Glass & Facade Cleaning',
    'form-service-opt5': 'Marble Grinding & Polishing',
    'form-service-opt6': 'Carpet & Upholstery Cleaning',
    'form-service-opt7': 'Equipment Rental',
    'form-service-opt8': 'Other Service',
    'form-message-label': 'Your Message',
    'form-message-placeholder': 'Write your message or request details here...',
    'form-submit': 'Submit Request ✦',
    'form-success-title': 'Your request has been received!',
    'form-success-desc': 'We will contact you soon',
    'success-wa-note': 'WhatsApp opened for direct contact — click here if it did not open automatically',

    'footer-sub': 'World Cleaning Technology',
    'footer-desc': 'Al Nairab Building Cleaning — 30 years of experience providing professional cleaning services in Abu Dhabi and the UAE',
    'footer-links-title': 'Quick Links',
    'footer-links-1': 'Services',
    'footer-links-2': 'About Us',
    'footer-links-3': 'Our Process',
    'footer-links-4': 'Contact Us',
    'footer-services-title': 'Our Services',
    'footer-services-1': 'Building Cleaning',
    'footer-services-2': 'Glass Cleaning',
    'footer-services-3': 'Marble Polishing',
    'footer-services-4': 'Equipment Rental',
    'footer-contact-title': 'Contact Us',
    'footer-contact-address': 'Abu Dhabi, UAE',
    'footer-bottom': '© 2024 Al Nairab Building Cleaning — Abu Dhabi, UAE · All Rights Reserved',

    'whatsapp-label': 'WhatsApp',
    'scroll-label': 'Back to top',
    'alert-message': 'Please enter your name and phone number.',
    'error-message': 'Submission error. Please try again or contact us by phone.',
    'success-title': 'Your request has been received!',
    'success-desc': 'We will contact you soon'
  }
};

document.addEventListener('DOMContentLoaded', function () {

  // ─── DOM ELEMENTS ─────────────────────────────────
  var navbar = document.getElementById('navbar');
  var menuBtn = document.getElementById('menuBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  var mobileLinks = document.querySelectorAll('.mobile-link');
  var scrollTopBtn = document.getElementById('scrollTop');
  var navLinks = document.querySelectorAll('#nav-links a');
  var langToggle = document.getElementById('langToggle');
  var contactForm = document.getElementById('contactForm');
  var formEl = document.getElementById('mainContactForm');
  var formSuccess = document.getElementById('formSuccess');
  var revealElements = document.querySelectorAll('.reveal');
  var counters = document.querySelectorAll('.counter');

  var currentLang = 'ar';

  // ─── I18N: APPLY TRANSLATIONS ────────────────────
  function applyTranslations(lang) {
    currentLang = lang;
    var t = i18n[lang];

    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
    document.title = t.title;

    // Meta tags
    var descMeta = document.querySelector('meta[name="description"]');
    var kwMeta = document.querySelector('meta[name="keywords"]');
    var ogTitleMeta = document.querySelector('meta[property="og:title"]');
    var ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (descMeta) descMeta.setAttribute('content', t.description);
    if (kwMeta) kwMeta.setAttribute('content', t.keywords);
    if (ogTitleMeta) ogTitleMeta.setAttribute('content', t.ogTitle);
    if (ogDescMeta) ogDescMeta.setAttribute('content', t.ogDesc);

    // Elements with data-i18n
    var els = document.querySelectorAll('[data-i18n]');
    els.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key]) {
        if (t[key].indexOf('<') !== -1) {
          el.innerHTML = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });

    // Placeholders
    var placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) el.setAttribute('placeholder', t[key]);
    });

    // ARIA labels
    var ariaEls = document.querySelectorAll('[data-i18n-aria]');
    ariaEls.forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (t[key]) el.setAttribute('aria-label', t[key]);
    });

    // Title attributes
    var titleEls = document.querySelectorAll('[data-i18n-title]');
    titleEls.forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      if (t[key]) el.setAttribute('title', t[key]);
    });
  }

  // ─── MOBILE MENU ──────────────────────────────────
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      menuBtn.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ─── NAVBAR SCROLL EFFECT ─────────────────────────
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (window.scrollY > 600) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }

    updateActiveNav();
  });

  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ─── ACTIVE NAV LINK ──────────────────────────────
  function updateActiveNav() {
    var sections = document.querySelectorAll('section[id]');
    var scrollY = window.pageYOffset;

    sections.forEach(function (section) {
      var sectionHeight = section.offsetHeight;
      var sectionTop = section.offsetTop - 100;
      var sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // ─── SCROLL REVEAL (Intersection Observer) ────────
  if ('IntersectionObserver' in window) {
    var observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };

    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, index) {
        if (entry.isIntersecting) {
          setTimeout(function () {
            entry.target.classList.add('visible');
          }, index * 100);
          revealObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ─── COUNTER ANIMATION ────────────────────────────
  if ('IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var counter = entry.target;
          var target = parseInt(counter.getAttribute('data-target'), 10);
          animateCounter(counter, target);
          counterObserver.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (counter) {
      counterObserver.observe(counter);
    });
  } else {
    counters.forEach(function (counter) {
      counter.textContent = counter.getAttribute('data-target');
    });
  }

  function animateCounter(el, target) {
    var duration = 2000;
    var start = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var current = Math.floor(progress * target);
      el.textContent = current;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(step);
  }

  // ─── FORM HANDLING ────────────────────────────────
  window.handleSubmit = function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value.trim();
    var phone = document.getElementById('phone').value.trim();

    if (!name || !phone) {
      alert(i18n[currentLang]['alert-message']);
      return false;
    }

    var service = document.getElementById('service').value;
    var msg = document.getElementById('message').value.trim();
    var email = document.getElementById('email').value.trim();

    // Show success
    formEl.style.display = 'none';
    formSuccess.style.display = 'block';

    // Build WhatsApp message
    var waMsg = '';
    if (currentLang === 'ar') {
      waMsg = 'استفسار جديد من موقع النيرب\n\n';
      waMsg += 'الاسم: ' + name + '\n';
      waMsg += 'الهاتف: ' + phone + '\n';
      if (email) waMsg += 'البريد: ' + email + '\n';
      if (service) waMsg += 'الخدمة: ' + service + '\n';
      if (msg) waMsg += 'الرسالة: ' + msg + '\n';
    } else {
      waMsg = 'New Inquiry from Al Nairab Website\n\n';
      waMsg += 'Name: ' + name + '\n';
      waMsg += 'Phone: ' + phone + '\n';
      if (email) waMsg += 'Email: ' + email + '\n';
      if (service) waMsg += 'Service: ' + service + '\n';
      if (msg) waMsg += 'Message: ' + msg + '\n';
    }

    // Open WhatsApp
    window.open('https://wa.me/971506870087?text=' + encodeURIComponent(waMsg), '_blank');

    // Reset form after delay
    setTimeout(function () {
      formEl.reset();
      formEl.style.display = 'block';
      formSuccess.style.display = 'none';
    }, 8000);

    return false;
  };

  // ─── LANGUAGE TOGGLE ─────────────────────────────
  langToggle.addEventListener('click', function () {
    if (currentLang === 'ar') {
      applyTranslations('en');
    } else {
      applyTranslations('ar');
    }
  });

  // ─── SMOOTH SCROLL FOR ALL ANCHOR LINKS ───────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
