
import { Language, Service, Translations } from './types';

export const LANGUAGES = [
  { code: Language.EN, name: 'English' },
  { code: Language.RU, name: 'Русский' },
  { code: Language.KZ, name: 'Қазақша' },
  { code: Language.ZH, name: '中文' },
];

export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  SERVICE_DETAIL: '/services/:serviceId',
};

export const SERVICES_DATA: Service[] = [
  {
    id: 'sea',
    emoji: '🚢',
    image: 'https://picsum.photos/seed/sea-logistics/800/600',
    title: {
      [Language.EN]: 'Sea Container Transportation',
      [Language.RU]: 'Морские контейнерные перевозки',
      [Language.KZ]: 'Теңіз контейнерлік тасымалдары',
      [Language.ZH]: '海运集装箱运输',
    },
    brief: {
      [Language.EN]: 'Global sea freight solutions for any cargo size. Reliable, cost-effective, and efficient.',
      [Language.RU]: 'Глобальные морские перевозки для грузов любого размера. Надежно, выгодно и эффективно.',
      [Language.KZ]: 'Кез-келген көлемдегі жүктерге арналған жаһандық теңіз тасымалдары. Сенімді, үнемді және тиімді.',
      [Language.ZH]: '适用于任何货物尺寸的全球海运解决方案。 可靠、经济、高效。',
    },
    description: {
      [Language.EN]: 'We provide a full range of sea freight services. We handle everything from booking to final delivery, ensuring your cargo reaches its destination safely and on time. We partner with major shipping lines like OOCL, MSC, and Hapag Lloyd.',
      [Language.RU]: 'Мы предоставляем полный спектр услуг по морским перевозкам. Мы занимаемся всем, от бронирования до конечной доставки, гарантируя, что ваш груз прибудет в пункт назначения в целости и сохранности и в срок. Мы сотрудничаем с крупными судоходными линиями, такими как OOCL, MSC и Hapag Lloyd.',
      [Language.KZ]: 'Біз теңіз тасымалдары бойынша қызметтердің толық спектрін ұсынамыз. Біз брондаудан бастап соңғы жеткізуге дейінгі барлық процесті қадағалаймыз, сіздің жүгіңіздің межелі жерге қауіпсіз және уақытында жетуін қамтамасыз етеміз. Біз OOCL, MSC және Hapag Lloyd сияқты ірі кеме желілерімен серіктеспіз.',
      [Language.ZH]: '我们提供全方位的海运服务。 我们处理从预订到最终交付的所有事宜，确保您的货物安全准时到达目的地。 我们与 OOCL、MSC 和 Hapag Lloyd 等主要航运公司合作。',
    },
    features: {
      [Language.EN]: ['Full Container Load (FCL)', 'Less than Container Load (LCL)', 'Customs Clearance', 'Real-time Tracking', 'Global Network'],
      [Language.RU]: ['Полная загрузка контейнера (FCL)', 'Частичная загрузка контейнера (LCL)', 'Таможенное оформление', 'Отслеживание в реальном времени', 'Глобальная сеть'],
      [Language.KZ]: ['Толық контейнерлік жүктеме (FCL)', 'Жартылай контейнерлік жүктеме (LCL)', 'Кедендік ресімдеу', 'Нақты уақыттағы бақылау', 'Жаһандық желі'],
      [Language.ZH]: ['整箱货 (FCL)', '拼箱货 (LCL)', '清关', '实时跟踪', '全球网络'],
    },
    details: {
        [Language.EN]: [{title: "Technical Specs", content: "We utilize standard 20ft and 40ft containers, as well as specialized equipment for oversized or refrigerated cargo. Our partners include OOCL, MSC, Hapag Lloyd, CMA CGM, Hyundai, and FESCO."}],
        [Language.RU]: [{title: "Технические детали", content: "Мы используем стандартные 20- и 40-футовые контейнеры, а также специализированное оборудование для негабаритных или рефрижераторных грузов. Среди наших партнеров OOCL, MSC, Hapag Lloyd, CMA CGM, Hyundai и FESCO."}],
        [Language.KZ]: [{title: "Техникалық сипаттамалар", content: "Біз стандартты 20 және 40 футтық контейнерлерді, сондай-ақ ірі габаритті немесе салқындатылған жүктерге арналған мамандандырылған жабдықты пайдаланамыз. Біздің серіктестеріміздің қатарында OOCL, MSC, Hapag Lloyd, CMA CGM, Hyundai және FESCO бар."}],
        [Language.ZH]: [{title: "技术规格", content: "我们使用标准的 20 英尺和 40 英尺集装箱，以及用于超大或冷藏货物的专用设备。我们的合作伙伴包括 OOCL、MSC、赫伯罗特、达飞海运、现代和 FESCO。"}],
    }
  },
  {
    id: 'rail',
    emoji: '🚂',
    image: 'https://picsum.photos/seed/rail-logistics/800/600',
    title: {
      [Language.EN]: 'Railway Transportation',
      [Language.RU]: 'Железнодорожные перевозки',
      [Language.KZ]: 'Теміржол тасымалдары',
      [Language.ZH]: '铁路运输',
    },
    brief: {
      [Language.EN]: 'Efficient and sustainable rail logistics across Asia and Europe. Ideal for bulk and long-distance cargo.',
      [Language.RU]: 'Эффективная и устойчивая железнодорожная логистика по Азии и Европе. Идеально для крупных партий и дальних перевозок.',
      [Language.KZ]: 'Азия мен Еуропа бойынша тиімді және тұрақты теміржол логистикасы. Ірі партиялар мен ұзақ қашықтыққа тасымалдау үшін өте қолайлы.',
      [Language.ZH]: '高效、可持续的亚欧铁路物流。 是散货和长途货物的理想选择。',
    },
    description: {
      [Language.EN]: 'Our railway transportation services offer a reliable alternative to sea and air freight. We provide end-to-end solutions, including container and wagon load services, connecting key economic hubs.',
      [Language.RU]: 'Наши услуги по железнодорожным перевозкам предлагают надежную альтернативу морским и воздушным перевозкам. Мы предоставляем комплексные решения, включая контейнерные и повагонные отправки, соединяя ключевые экономические центры.',
      [Language.KZ]: 'Біздің теміржол тасымалдау қызметтеріміз теңіз және әуе тасымалдарына сенімді балама ұсынады. Біз негізгі экономикалық хабтарды байланыстыра отырып, контейнерлік және вагондық жөнелтулерді қоса алғанда, кешенді шешімдерді ұсынамыз.',
      [Language.ZH]: '我们的铁路运输服务为海运和空运提供了可靠的替代方案。 我们提供端到端解决方案，包括集装箱和货车装载服务，连接主要经济中心。',
    },
    features: {
      [Language.EN]: ['Container Trains', 'Wagon Groupage', 'Trans-Eurasian Routes', 'Door-to-Door Delivery', 'Terminal Handling'],
      [Language.RU]: ['Контейнерные поезда', 'Сборные вагонные отправки', 'Трансевразийские маршруты', 'Доставка от двери до двери', 'Терминальная обработка'],
      [Language.KZ]: ['Контейнерлік пойыздар', 'Құрама вагондық жөнелтімдер', 'Трансеуразиялық бағыттар', 'Есіктен есікке дейін жеткізу', 'Терминалдық өңдеу'],
      [Language.ZH]: ['集装箱列车', '货车拼箱', '横贯欧亚大陆路线', '门到门送货', '码头处理'],
    },
     details: {
        [Language.EN]: [{title: "Technical Specs", content: "We operate with a fleet of fitting platforms and covered wagons with capacities from 82 to 120 cubic meters. Our network ensures seamless transit across multiple borders."}],
        [Language.RU]: [{title: "Технические детали", content: "Мы оперируем парком фитинговых платформ и крытых вагонов объемом от 82 до 120 кубических метров. Наша сеть обеспечивает беспрепятственный транзит через множество границ."}],
        [Language.KZ]: [{title: "Техникалық сипаттамалар", content: "Біз көлемі 82-ден 120 текше метрге дейінгі фитингтік платформалар мен жабық вагондар паркімен жұмыс істейміз. Біздің желі бірнеше шекара арқылы кедергісіз транзитті қамтамасыз етеді."}],
        [Language.ZH]: [{title: "技术规格", content: "我们拥有一支由容量从 82 到 120 立方米不等的配件平台和棚车组成的车队。我们的网络确保无缝跨境运输。"}],
    }
  },
  {
    id: 'auto',
    emoji: '🚛',
    image: 'https://picsum.photos/seed/auto-logistics/800/600',
    title: {
      [Language.EN]: 'Road Transportation',
      [Language.RU]: 'Автомобильные перевозки',
      [Language.KZ]: 'Автомобиль көлігімен тасымалдау',
      [Language.ZH]: '公路运输',
    },
    brief: {
      [Language.EN]: 'Flexible and fast road freight for domestic and international deliveries. Last-mile solutions guaranteed.',
      [Language.RU]: 'Гибкие и быстрые автомобильные перевозки для внутренних и международных доставок. Гарантированные решения «последней мили».',
      [Language.KZ]: 'Ішкі және халықаралық жеткізулерге арналған икемді және жылдам автомобиль тасымалдары. «Соңғы миль» шешімдеріне кепілдік беріледі.',
      [Language.ZH]: '灵活、快速的国内和国际公路货运。 保证最后一英里解决方案。',
    },
    description: {
      [Language.EN]: 'With a modern fleet and an extensive network of partners, we offer comprehensive road transportation services. From a single pallet to a full truckload, we deliver with precision and care.',
      [Language.RU]: 'Имея современный автопарк и обширную сеть партнеров, мы предлагаем комплексные услуги по автомобильным перевозкам. От одного поддона до полной загрузки грузовика — мы доставляем с точностью и заботой.',
      [Language.KZ]: 'Заманауи автопарк пен серіктестердің кең желісіне ие бола отырып, біз автомобиль тасымалдары бойынша кешенді қызметтерді ұсынамыз. Бір паллеттен бастап толық жүк көлігіне дейін біз дәлдікпен және ұқыптылықпен жеткіземіз.',
      [Language.ZH]: '凭借现代化的车队和广泛的合作伙伴网络，我们提供全面的公路运输服务。 从单个托盘到整车，我们都精确、细致地交付。',
    },
    features: {
      [Language.EN]: ['Full Truckload (FTL)', 'Less than Truckload (LTL)', 'Express Delivery', 'Temperature Controlled', 'Hazardous Goods'],
      [Language.RU]: ['Полная загрузка (FTL)', 'Частичная загрузка (LTL)', 'Экспресс-доставка', 'Температурный режим', 'Опасные грузы'],
      [Language.KZ]: ['Толық жүктеме (FTL)', 'Жартылай жүктеме (LTL)', 'Жедел жеткізу', 'Температуралық режим', 'Қауіпті жүктер'],
      [Language.ZH]: ['整车运输 (FTL)', '零担运输 (LTL)', '快递', '温控', '危险品'],
    },
     details: {
        [Language.EN]: [{title: "Our Fleet", content: "Our diverse fleet includes standard semi-trailers, refrigerated trucks, and specialized vehicles for any type of cargo. We ensure maximum flexibility and reliability for your supply chain."}],
        [Language.RU]: [{title: "Наш автопарк", content: "Наш разнообразный автопарк включает стандартные полуприцепы, рефрижераторы и специализированные транспортные средства для любого типа груза. Мы обеспечиваем максимальную гибкость и надежность для вашей цепочки поставок."}],
        [Language.KZ]: [{title: "Біздің автопарк", content: "Біздің әртараптандырылған автопаркіміз стандартты жартылай тіркемелерді, рефрижераторларды және кез келген жүк түріне арналған мамандандырылған көлік құралдарын қамтиды. Біз сіздің жеткізу тізбегіңіз үшін максималды икемділік пен сенімділікті қамтамасыз етеміз."}],
        [Language.ZH]: [{title: "我们的车队", content: "我们多样化的车队包括标准半挂车、冷藏车和适用于任何类型货物的特种车辆。我们确保为您的供应链提供最大的灵活性和可靠性。"}],
    }
  },
  {
    id: 'warehouse',
    emoji: '🏭',
    image: 'https://picsum.photos/seed/warehouse-logistics/800/600',
    title: {
      [Language.EN]: 'Warehouse Services',
      [Language.RU]: 'Складские услуги',
      [Language.KZ]: 'Қойма қызметтері',
      [Language.ZH]: '仓储服务',
    },
    brief: {
      [Language.EN]: 'Secure and modern warehousing solutions. Storage, consolidation, and value-added services.',
      [Language.RU]: 'Безопасные и современные складские решения. Хранение, консолидация и дополнительные услуги.',
      [Language.KZ]: 'Қауіпсіз және заманауи қойма шешімдері. Сақтау, шоғырландыру және қосымша қызметтер.',
      [Language.ZH]: '安全、现代的仓储解决方案。 存储、整合和增值服务。',
    },
    description: {
      [Language.EN]: 'Our strategically located warehouses are equipped to handle all your storage needs. We offer flexible solutions for short-term and long-term storage, inventory management, and distribution.',
      [Language.RU]: 'Наши стратегически расположенные склады оборудованы для удовлетворения всех ваших потребностей в хранении. Мы предлагаем гибкие решения для краткосрочного и долгосрочного хранения, управления запасами и дистрибуции.',
      [Language.KZ]: 'Біздің стратегиялық орналасқан қоймаларымыз сіздің барлық сақтау қажеттіліктеріңізді қанағаттандыру үшін жабдықталған. Біз қысқа мерзімді және ұзақ мерзімді сақтау, тауарлық-материалдық құндылықтарды басқару және тарату үшін икемді шешімдерді ұсынамыз.',
      [Language.ZH]: '我们地理位置优越的仓库能够满足您的所有存储需求。 我们为短期和长期存储、库存管理和分销提供灵活的解决方案。',
    },
    features: {
      [Language.EN]: ['Short & Long Term Storage', 'Inventory Management', 'Order Fulfillment', 'Cross-docking', 'Value-added Services'],
      [Language.RU]: ['Краткосрочное и долгосрочное хранение', 'Управление запасами', 'Комплектация заказов', 'Кросс-докинг', 'Дополнительные услуги'],
      [Language.KZ]: ['Қысқа және ұзақ мерзімді сақтау', 'Тауарлық-материалдық құндылықтарды басқару', 'Тапсырыстарды жинақтау', 'Кросс-докинг', 'Қосымша қызметтер'],
      [Language.ZH]: ['短期和长期存储', '库存管理', '订单履行', '越库', '增值服务'],
    },
    details: {
        [Language.EN]: [{title: "Facilities", content: "Our warehouses are equipped with modern security systems, climate control, and advanced inventory management software to ensure the safety and integrity of your goods."}],
        [Language.RU]: [{title: "Оборудование", content: "Наши склады оснащены современными системами безопасности, климат-контролем и передовым программным обеспечением для управления запасами, чтобы обеспечить сохранность и целостность ваших товаров."}],
        [Language.KZ]: [{title: "Жабдықтар", content: "Біздің қоймалар тауарларыңыздың қауіпсіздігі мен тұтастығын қамтамасыз ету үшін заманауи қауіпсіздік жүйелерімен, климат-бақылаумен және озық тауарлық-материалдық құндылықтарды басқару бағдарламалық жасақтамасымен жабдықталған."}],
        [Language.ZH]: [{title: "设施", content: "我们的仓库配备了现代化的安全系统、气候控制和先进的库存管理软件，以确保您货物的安全和完好。"}],
    }
  },
];


export const TRANSLATIONS: Translations = {
  [Language.EN]: {
    header: {
      services: 'Services',
      contact: 'Contact Us',
      logoAlt: 'NewLS Kazakhstan Logo',
    },
    footer: {
      slogan: 'We are confident that we will find effective solutions for your business!',
      services: 'Services',
      contactInfo: 'Contact Info',
      address: 'Almaty, Kazakhstan',
      phone: '+7 727 123 45 67',
      email: 'info@newls.kz',
      rights: 'NewLS Kazakhstan. All rights reserved.',
    },
    home: {
      heroTitle: 'The recognized leader of the logistics services market in Kazakhstan',
      heroSubtitle: 'Providing comprehensive and reliable logistics solutions worldwide.',
      heroButton: 'Explore Services',
      advantagesTitle: 'Our Advantages',
      advantages: [
        { title: 'Great Opportunities', text: 'Wide network of partners and routes.' },
        { title: 'Great Experience', text: 'Years of successful projects and satisfied clients.' },
        { title: 'Main Advantage', text: 'Customized solutions for your unique needs.' },
        { title: 'Minimum Time', text: 'Optimized logistics to reduce delivery times.' },
      ],
      partnersTitle: 'Our Trusted Partners',
      stats: [
        { label: 'Years of experience' },
        { label: 'Satisfied customers' },
        { label: 'Countries covered' },
        { label: 'Support availability' },
      ],
      ctaTitle: 'Ready to optimize your logistics?',
      ctaButton: 'Get a Free Consultation',
      servicesTitle: 'Our Core Services',
      allServicesButton: 'View All Services'
    },
    services: {
      title: 'Our Services',
      pageTitle: 'All Logistics Services',
      learnMore: 'Learn More',
      contactForDetails: 'Contact for details',
      featuresTitle: 'Key Features'
    },
    contactModal: {
      title: 'Contact Us for a Consultation',
      name: 'Your Name',
      namePlaceholder: 'John Doe',
      email: 'Your Email',
      emailPlaceholder: 'email@example.com',
      message: 'Your Message',
      messagePlaceholder: 'Tell us about your logistics needs...',
      submit: 'Send Request',
      submitting: 'Sending...',
      success: 'Thank you! Your request has been sent.',
      error: 'An error occurred. Please try again.',
    },
    breadcrumbs: {
      home: 'Home',
      services: 'Services',
    }
  },
  [Language.RU]: {
    header: {
      services: 'Услуги',
      contact: 'Связаться с нами',
      logoAlt: 'Логотип NewLS Kazakhstan',
    },
    footer: {
      slogan: 'Мы уверены, что найдем эффективные решения для вашего бизнеса!',
      services: 'Услуги',
      contactInfo: 'Контактная информация',
      address: 'Алматы, Казахстан',
      phone: '+7 727 123 45 67',
      email: 'info@newls.kz',
      rights: 'NewLS Kazakhstan. Все права защищены.',
    },
    home: {
      heroTitle: 'Признанный лидер рынка логистических услуг в Казахстане',
      heroSubtitle: 'Предоставление комплексных и надежных логистических решений по всему миру.',
      heroButton: 'Наши Услуги',
      advantagesTitle: 'Наши преимущества',
      advantages: [
        { title: 'Большие возможности', text: 'Широкая сеть партнеров и маршрутов.' },
        { title: 'Большой опыт', text: 'Годы успешных проектов и довольных клиентов.' },
        { title: 'Главное преимущество', text: 'Индивидуальные решения для ваших уникальных потребностей.' },
        { title: 'Минимум времени', text: 'Оптимизированная логистика для сокращения сроков доставки.' },
      ],
      partnersTitle: 'Наши надежные партнеры',
      stats: [
        { label: 'Лет опыта' },
        { label: 'Довольных клиентов' },
        { label: 'Стран охвата' },
        { label: 'Поддержка' },
      ],
      ctaTitle: 'Готовы оптимизировать вашу логистику?',
      ctaButton: 'Получить бесплатную консультацию',
      servicesTitle: 'Наши ключевые услуги',
      allServicesButton: 'Посмотреть все услуги'
    },
    services: {
      title: 'Наши Услуги',
      pageTitle: 'Все логистические услуги',
      learnMore: 'Узнать больше',
      contactForDetails: 'Связаться для деталей',
      featuresTitle: 'Ключевые особенности'
    },
    contactModal: {
      title: 'Свяжитесь с нами для консультации',
      name: 'Ваше имя',
      namePlaceholder: 'Иван Иванов',
      email: 'Ваш Email',
      emailPlaceholder: 'email@example.com',
      message: 'Ваше сообщение',
      messagePlaceholder: 'Расскажите о ваших потребностях в логистике...',
      submit: 'Отправить запрос',
      submitting: 'Отправка...',
      success: 'Спасибо! Ваш запрос отправлен.',
      error: 'Произошла ошибка. Пожалуйста, попробуйте еще раз.',
    },
    breadcrumbs: {
      home: 'Главная',
      services: 'Услуги',
    }
  },
  [Language.KZ]: {
    header: {
      services: 'Қызметтер',
      contact: 'Бізбен хабарласыңыз',
      logoAlt: 'NewLS Kazakhstan логотипі',
    },
    footer: {
      slogan: 'Біз сіздің бизнесіңіз үшін тиімді шешімдер табатынымызға сенімдіміз!',
      services: 'Қызметтер',
      contactInfo: 'Байланыс ақпараты',
      address: 'Алматы, Қазақстан',
      phone: '+7 727 123 45 67',
      email: 'info@newls.kz',
      rights: 'NewLS Kazakhstan. Барлық құқықтар қорғалған.',
    },
    home: {
      heroTitle: 'Қазақстандағы логистикалық қызметтер нарығының танылған көшбасшысы',
      heroSubtitle: 'Дүние жүзі бойынша кешенді және сенімді логистикалық шешімдерді ұсыну.',
      heroButton: 'Қызметтерді зерттеу',
      advantagesTitle: 'Біздің артықшылықтарымыз',
      advantages: [
        { title: 'Керемет мүмкіндіктер', text: 'Серіктестер мен маршруттардың кең желісі.' },
        { title: 'Үлкен тәжірибе', text: 'Жылдар бойы сәтті жобалар мен риза клиенттер.' },
        { title: 'Басты артықшылық', text: 'Сіздің бірегей қажеттіліктеріңізге арналған жеке шешімдер.' },
        { title: 'Минималды уақыт', text: 'Жеткізу уақытын қысқарту үшін оңтайландырылған логистика.' },
      ],
      partnersTitle: 'Біздің сенімді серіктестеріміз',
      stats: [
        { label: 'Жылдық тәжірибе' },
        { label: 'Риза клиенттер' },
        { label: 'Қамтылған елдер' },
        { label: 'Қолдау көрсету' },
      ],
      ctaTitle: 'Логистикаңызды оңтайландыруға дайынсыз ба?',
      ctaButton: 'Тегін кеңес алу',
      servicesTitle: 'Біздің негізгі қызметтеріміз',
      allServicesButton: 'Барлық қызметтерді қарау'
    },
    services: {
      title: 'Біздің қызметтер',
      pageTitle: 'Барлық логистикалық қызметтер',
      learnMore: 'Көбірек білу',
      contactForDetails: 'Толығырақ білу үшін хабарласыңыз',
      featuresTitle: 'Негізгі ерекшеліктер'
    },
    contactModal: {
      title: 'Кеңес алу үшін бізбен хабарласыңыз',
      name: 'Сіздің атыңыз',
      namePlaceholder: 'Жандос Ахметов',
      email: 'Сіздің Email',
      emailPlaceholder: 'email@example.com',
      message: 'Сіздің хабарламаңыз',
      messagePlaceholder: 'Логистикалық қажеттіліктеріңіз туралы айтып беріңіз...',
      submit: 'Сұраныс жіберу',
      submitting: 'Жіберуде...',
      success: 'Рахмет! Сіздің сұранысыңыз жіберілді.',
      error: 'Қате пайда болды. Қайталап көріңіз.',
    },
    breadcrumbs: {
      home: 'Басты бет',
      services: 'Қызметтер',
    }
  },
  [Language.ZH]: {
    header: {
      services: '服务',
      contact: '联系我们',
      logoAlt: 'NewLS Kazakhstan 标志',
    },
    footer: {
      slogan: '我们有信心为您的业务找到有效的解决方案！',
      services: '服务',
      contactInfo: '联系信息',
      address: '阿拉木图, 哈萨克斯坦',
      phone: '+7 727 123 45 67',
      email: 'info@newls.kz',
      rights: 'NewLS Kazakhstan. 版权所有。',
    },
    home: {
      heroTitle: '哈萨克斯坦物流服务市场的公认领导者',
      heroSubtitle: '在全球范围内提供全面可靠的物流解决方案。',
      heroButton: '浏览服务',
      advantagesTitle: '我们的优势',
      advantages: [
        { title: '巨大机遇', text: '广泛的合作伙伴和路线网络。' },
        { title: '丰富经验', text: '多年的成功项目和满意的客户。' },
        { title: '主要优势', text: '根据您的独特需求量身定制解决方案。' },
        { title: '最短时间', text: '优化的物流以缩短交货时间。' },
      ],
      partnersTitle: '我们信赖的合作伙伴',
      stats: [
        { label: '年经验' },
        { label: '满意的客户' },
        { label: '覆盖国家' },
        { label: '支持服务' },
      ],
      ctaTitle: '准备好优化您的物流了吗？',
      ctaButton: '获取免费咨询',
      servicesTitle: '我们的核心服务',
      allServicesButton: '查看所有服务'
    },
    services: {
      title: '我们的服务',
      pageTitle: '所有物流服务',
      learnMore: '了解更多',
      contactForDetails: '联系我们获取详情',
      featuresTitle: '主要特点'
    },
    contactModal: {
      title: '联系我们进行咨询',
      name: '您的姓名',
      namePlaceholder: '张伟',
      email: '您的电子邮件',
      emailPlaceholder: 'email@example.com',
      message: '您的留言',
      messagePlaceholder: '告诉我们您的物流需求...',
      submit: '发送请求',
      submitting: '发送中...',
      success: '谢谢！您的请求已发送。',
      error: '发生错误。请再试一次。',
    },
    breadcrumbs: {
      home: '主页',
      services: '服务',
    }
  },
};
