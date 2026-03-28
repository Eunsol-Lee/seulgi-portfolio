export const languages = {
  ko: '한국어',
  en: 'English',
} as const;

export const defaultLang = 'ko' as const;

export type Lang = keyof typeof languages;

export const ui = {
  ko: {
    // Site
    'site.title': '이슬기 — 제품 디자이너',
    'site.description': '이슬기 포트폴리오. 화장품, 패키지, 제품 디자인.',

    // Nav
    'nav.logo': '이슬기',
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.blog': 'Journal',
    'nav.lang': 'EN',

    // Hero
    'hero.eyebrow': 'Product Designer',
    'hero.name': '이슬기',
    'hero.tagline': '당신이 만지는 모든 순간을 디자인합니다',

    // Sections
    'section.work': 'Selected Work',
    'section.about': 'About',
    'section.contact': 'Contact',
    'section.journal': 'Journal',

    // About
    'about.heading.em': '제품의 감각을',
    'about.heading.rest': '디자인합니다',
    'about.bio.1': '10년 가까이 화장품과 제품의 형태를 만들어왔습니다. 스킨케어 용기의 곡면, 향수 병의 무게감, 립스틱 케이스가 열릴 때의 소리까지 — 손이 닿는 모든 순간을 디자인합니다.',
    'about.bio.2': '아모레퍼시픽과 코스랩 스튜디오를 거치며 50개 이상의 제품을 론칭했고, 현재는 서울을 기반으로 국내외 뷰티 브랜드와 협업하고 있습니다.',
    'about.bio.3': '좋은 제품 디자인은 보는 것이 아니라 느끼는 것이라 믿습니다.',
    'about.skills.heading': 'Skills',
    'about.skill.1': 'Product Design',
    'about.skill.2': 'Package Design',
    'about.skill.3': 'Cosmetics Design',
    'about.skill.4': 'Material & Finish',
    'about.skill.5': 'Rhino / Keyshot / Adobe CC',
    'about.experience.heading': 'Experience',
    'about.exp.1.year': '2023–현재',
    'about.exp.1.role': '독립 디자이너',
    'about.exp.2.year': '2019–2023',
    'about.exp.2.role': 'Senior Designer @ 코스랩 스튜디오',
    'about.exp.3.year': '2016–2019',
    'about.exp.3.role': 'Product Designer @ 아모레퍼시픽',

    // Contact
    'contact.heading': '함께 만들어요',

    // Footer
    'footer.cta.line1': '프로젝트가 있으신가요?',
    'footer.cta.line2': '이야기를 나눠요',
    'footer.copy': '© 2025 이슬기',
    'footer.location': '서울, 대한민국',

    // Project shared
    'project.back': '← 작업 목록으로',
    'project.all': 'All Work',
    'project.label.client': 'Client',
    'project.label.year': 'Year',
    'project.label.role': 'Role',
    'project.label.scope': 'Scope',

    // Blog shared
    'blog.viewAll': '모두 보기 →',
    'blog.back': '← Journal',
    'blog.readTime': '5분 읽기',
  },

  en: {
    // Site
    'site.title': 'Seulgi Lee — Product Designer',
    'site.description': 'Seulgi Lee portfolio. Cosmetics, packaging, and product design.',

    // Nav
    'nav.logo': 'Seulgi Lee',
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.blog': 'Journal',
    'nav.lang': 'KR',

    // Hero
    'hero.eyebrow': 'Product Designer',
    'hero.name': 'Seulgi Lee',
    'hero.tagline': 'Designing every moment your hand touches',

    // Sections
    'section.work': 'Selected Work',
    'section.about': 'About',
    'section.contact': 'Contact',
    'section.journal': 'Journal',

    // About
    'about.heading.em': 'Designing the',
    'about.heading.rest': 'Sense of Product',
    'about.bio.1': 'For nearly a decade, I\'ve been shaping the physical form of cosmetics and products. The curve of a skincare bottle, the weight of a perfume vessel, the sound a lipstick case makes when it opens — I design every moment your hand touches.',
    'about.bio.2': 'Having launched over 50 products through Amorepacific and CosLab Studio, I now collaborate with beauty brands domestically and internationally from my Seoul studio.',
    'about.bio.3': 'I believe good product design is not something you see — it\'s something you feel.',
    'about.skills.heading': 'Skills',
    'about.skill.1': 'Product Design',
    'about.skill.2': 'Package Design',
    'about.skill.3': 'Cosmetics Design',
    'about.skill.4': 'Material & Finish',
    'about.skill.5': 'Rhino / Keyshot / Adobe CC',
    'about.experience.heading': 'Experience',
    'about.exp.1.year': '2023–Present',
    'about.exp.1.role': 'Independent Designer',
    'about.exp.2.year': '2019–2023',
    'about.exp.2.role': 'Senior Designer @ CosLab Studio',
    'about.exp.3.year': '2016–2019',
    'about.exp.3.role': 'Product Designer @ Amorepacific',

    // Contact
    'contact.heading': 'Let\'s Create Together',

    // Footer
    'footer.cta.line1': 'Have a project in mind?',
    'footer.cta.line2': 'Let\'s talk',
    'footer.copy': '© 2025 Seulgi Lee',
    'footer.location': 'Seoul, Korea',

    // Project shared
    'project.back': '← All Work',
    'project.all': 'All Work',
    'project.label.client': 'Client',
    'project.label.year': 'Year',
    'project.label.role': 'Role',
    'project.label.scope': 'Scope',

    // Blog shared
    'blog.viewAll': 'View All →',
    'blog.back': '← Journal',
    'blog.readTime': '5 min read',
  },
} as const;

export type UIKey = keyof typeof ui.ko;
