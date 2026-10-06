import { Brand, ComparisonFeature, Product } from '@/types';

export const BRANDS_DATA: Brand[] = [
  {
    id: 'norton',
    name: 'Norton',
    slug: 'norton',
    tagline: 'Industry-leading multi-layered cybersecurity & device security.',
    logoText: 'Norton Security',
    description: 'Norton provides comprehensive malware, ransomware, and identity theft protection with integrated cloud backup and VPN features.',
    rating: 4.8,
    reviewCount: 14250,
    startingPrice: 29.99,
    heroHeadline: 'Complete Peace of Mind for Your Digital Life with Norton Security',
    heroSubheadline: 'Protect your PCs, Macs, smartphones, and tablets against evolving online threats with multi-layer security software.',
    keyBenefits: [
      {
        title: 'Real-Time Threat Protection',
        description: 'Advanced security with antivirus helps defend against existing and emerging online threats to your devices.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Secure VPN Integration',
        description: 'Browse anonymously and securely with a no-log bank-grade encrypted Virtual Private Network.',
        icon: 'Lock'
      },
      {
        title: 'Password Manager',
        description: 'Easily generate, store, and manage your passwords, credit card information, and other credentials online.',
        icon: 'Key'
      },
      {
        title: 'PC Cloud Backup',
        description: 'Store important files and documents as a preventive measure against data loss due to hard drive failures or ransomware.',
        icon: 'Cloud'
      }
    ],
    products: [
      {
        id: 'norton-360-standard',
        brandId: 'norton',
        brandName: 'Norton',
        name: 'Norton 360 Standard',
        slug: 'norton-360-standard',
        shortDescription: 'Essential protection for 1 PC, Mac, smartphone or tablet.',
        fullDescription: 'Norton 360 Standard offers comprehensive malware protection for a single device, plus Secure VPN, SafeCam for PC, and 10GB Cloud Backup.',
        badge: 'Single Device',
        rating: 4.7,
        reviewCount: 3820,
        startingPrice: 29.99,
        osSupport: ['Windows', 'macOS', 'Android', 'iOS'],
        highlights: [
          'Protection for 1 PC, Mac, smartphone or tablet',
          'Antivirus, malware, ransomware & phishing protection',
          '10 GB PC Cloud Backup',
          'Secure VPN for 1 device',
          'Smart Firewall for PC or Firewall for Mac',
          'Password Manager included'
        ],
        plans: [
          {
            id: 'norton-std-1y-1d',
            name: 'Norton 360 Standard - 1 Year',
            tagline: 'Ideal for protecting your single primary device.',
            deviceCount: 1,
            deviceLabel: '1 Device',
            price: 29.99,
            originalPrice: 84.99,
            billingPeriod: '1 Year',
            features: [
              '1 PC, Mac, Smartphone or Tablet',
              'Real-Time Malware & Ransomware Protection',
              '10 GB Encrypted Cloud Backup (Windows)',
              'Secure VPN (1 Device)',
              'Smart Firewall & Password Manager',
              'SafeCam Web Protection for PC'
            ],
            osSupport: ['Windows', 'macOS', 'Android', 'iOS']
          },
          {
            id: 'norton-std-2y-1d',
            name: 'Norton 360 Standard - 2 Years',
            tagline: 'Extended 2-year protection savings.',
            deviceCount: 1,
            deviceLabel: '1 Device',
            price: 54.99,
            originalPrice: 169.99,
            billingPeriod: '2 Years',
            features: [
              '1 PC, Mac, Smartphone or Tablet',
              'Real-Time Malware & Ransomware Protection',
              '10 GB Encrypted Cloud Backup (Windows)',
              'Secure VPN (1 Device)',
              'Smart Firewall & Password Manager',
              'SafeCam Web Protection for PC',
              'Priority Digital License Activation'
            ],
            osSupport: ['Windows', 'macOS', 'Android', 'iOS']
          }
        ]
      },
      {
        id: 'norton-360-deluxe',
        brandId: 'norton',
        brandName: 'Norton',
        name: 'Norton 360 Deluxe',
        slug: 'norton-360-deluxe',
        shortDescription: 'Complete security suite for up to 5 devices with Parental Control.',
        fullDescription: 'Norton 360 Deluxe covers up to 5 devices with multi-layer defense, 50GB Cloud Backup, Secure VPN for 5 devices, SafeCam for PC, and robust Parental Control features.',
        badge: 'Most Popular Choice',
        rating: 4.9,
        reviewCount: 7890,
        startingPrice: 39.99,
        osSupport: ['Windows', 'macOS', 'Android', 'iOS'],
        highlights: [
          'Protection for up to 5 PCs, Macs, smartphones or tablets',
          '50 GB PC Cloud Backup included',
          'Secure VPN for up to 5 devices',
          'Parental Control & School Time management',
          'Dark Web Monitoring powered by LifeLock',
          'Privacy Monitor & SafeCam alert'
        ],
        plans: [
          {
            id: 'norton-dlx-1y-5d',
            name: 'Norton 360 Deluxe - 1 Year',
            tagline: 'Best value for families and multiple devices.',
            deviceCount: 5,
            deviceLabel: '5 Devices',
            price: 39.99,
            originalPrice: 104.99,
            billingPeriod: '1 Year',
            isPopular: true,
            features: [
              'Up to 5 PCs, Macs, Smartphones or Tablets',
              'Real-time Spyware, Antivirus & Malware Defense',
              '50 GB Encrypted PC Cloud Backup',
              'Secure VPN for up to 5 Devices',
              'Parental Controls & School Time Mode',
              'Dark Web Monitoring & SafeCam Protection'
            ],
            osSupport: ['Windows', 'macOS', 'Android', 'iOS']
          },
          {
            id: 'norton-dlx-2y-5d',
            name: 'Norton 360 Deluxe - 2 Years',
            tagline: 'Maximum multi-device 2-year value.',
            deviceCount: 5,
            deviceLabel: '5 Devices',
            price: 74.99,
            originalPrice: 209.99,
            billingPeriod: '2 Years',
            features: [
              'Up to 5 PCs, Macs, Smartphones or Tablets',
              'Real-time Spyware, Antivirus & Malware Defense',
              '50 GB Encrypted PC Cloud Backup',
              'Secure VPN for up to 5 Devices',
              'Parental Controls & School Time Mode',
              'Dark Web Monitoring & SafeCam Protection',
              'Dedicated Phone Support Line Included'
            ],
            osSupport: ['Windows', 'macOS', 'Android', 'iOS']
          }
        ]
      }
    ],
    faqs: [
      {
        question: 'How many devices can I protect with Norton?',
        answer: 'Depending on the plan you select, Norton covers 1 device (Standard plan) or up to 5 devices (Deluxe plan) across Windows, Mac, Android, and iOS.'
      },
      {
        question: 'What is included in Norton Digital Delivery?',
        answer: 'Upon purchasing through DIGIFORT, you will receive your official product activation key and step-by-step setup instructions sent directly to your email.'
      },
      {
        question: 'Does Norton include a VPN service?',
        answer: 'Yes, Norton 360 Standard and Deluxe plans include Norton Secure VPN with bank-grade encryption for all covered devices.'
      }
    ]
  },
  {
    id: 'mcafee',
    name: 'McAfee',
    slug: 'mcafee',
    tagline: 'All-in-one digital protection for identity, privacy & antivirus.',
    logoText: 'McAfee Protection',
    description: 'McAfee delivers powerful antivirus, personal identity protection, automated secure VPN, and web safety metrics for seamless family security.',
    rating: 4.7,
    reviewCount: 11800,
    startingPrice: 29.99,
    heroHeadline: 'Total Digital Security for You & Your Family with McAfee',
    heroSubheadline: 'Defend your personal data, bank details, and devices with smart real-time antivirus and automated identity protection.',
    keyBenefits: [
      {
        title: 'McAfee Protection Score',
        description: 'See how safe you are online and easily improve your security level with guided actions.',
        icon: 'Award'
      },
      {
        title: 'Unlimited Secure VPN',
        description: 'Automatically turns on when connecting to unsecure Wi-Fi networks to shield your personal data.',
        icon: 'Wifi'
      },
      {
        title: 'Identity Monitoring',
        description: 'Monitors up to 10 email addresses, SSN, and bank accounts on the dark web for unauthorized exposure.',
        icon: 'UserCheck'
      },
      {
        title: 'Cross-Platform Compatibility',
        description: 'Protect all your family Windows, Mac, Android, and iOS devices with a single central subscription.',
        icon: 'Monitor'
      }
    ],
    products: [
      {
        id: 'mcafee-total-protection-basic',
        brandId: 'mcafee',
        brandName: 'McAfee',
        name: 'McAfee Total Protection Basic',
        slug: 'mcafee-total-protection-basic',
        shortDescription: 'Essential online protection for 1 device.',
        fullDescription: 'McAfee Total Protection Basic delivers premium antivirus defense, firewall, password manager, and safe web browsing tools for 1 device.',
        badge: '1 Device Coverage',
        rating: 4.6,
        reviewCount: 2940,
        startingPrice: 29.99,
        osSupport: ['Windows', 'macOS', 'Android', 'iOS'],
        highlights: [
          'Coverage for 1 PC, Mac, Android, or iOS device',
          'Award-winning antivirus engine',
          'McAfee WebAdvisor malicious link blocker',
          'Password Manager with encrypted vault',
          'Multi-layered firewall defense'
        ],
        plans: [
          {
            id: 'mcafee-basic-1y-1d',
            name: 'McAfee Total Protection Basic - 1 Year',
            tagline: 'Single device essential security.',
            deviceCount: 1,
            deviceLabel: '1 Device',
            price: 29.99,
            originalPrice: 79.99,
            billingPeriod: '1 Year',
            features: [
              '1 Windows, Mac, Android, or iOS device',
              'Award-Winning Antivirus Engine',
              'Safe Web Browsing (McAfee WebAdvisor)',
              'Password Manager Included',
              '24/7 Digital Security Monitoring'
            ],
            osSupport: ['Windows', 'macOS', 'Android', 'iOS']
          }
        ]
      },
      {
        id: 'mcafee-total-protection-ultimate',
        brandId: 'mcafee',
        brandName: 'McAfee',
        name: 'McAfee Total Protection Ultimate',
        slug: 'mcafee-total-protection-ultimate',
        shortDescription: 'Premium multi-device security for up to 5 devices with Identity Theft Protection.',
        fullDescription: 'McAfee Total Protection Ultimate gives your family comprehensive device security, unlimited VPN, identity monitoring, and anti-phishing safeguards across 5 devices.',
        badge: 'Recommended Security',
        rating: 4.8,
        reviewCount: 5610,
        startingPrice: 44.99,
        osSupport: ['Windows', 'macOS', 'Android', 'iOS'],
        highlights: [
          'Protection for up to 5 devices',
          'Unlimited Secure VPN included',
          'Dark Web Identity Monitoring',
          'Protection Score feature',
          'Password Manager for all family members',
          'Parental Control & Web Filtering'
        ],
        plans: [
          {
            id: 'mcafee-ult-1y-5d',
            name: 'McAfee Total Protection Ultimate - 1 Year',
            tagline: 'Full protection suite for household devices.',
            deviceCount: 5,
            deviceLabel: '5 Devices',
            price: 44.99,
            originalPrice: 119.99,
            billingPeriod: '1 Year',
            isPopular: true,
            features: [
              'Up to 5 Devices (PC, Mac, iOS, Android)',
              'Unlimited Secure VPN Access',
              'Personal Identity Protection & Alerts',
              'McAfee Protection Score Assessment',
              'Password Manager & Encrypted Vault',
              'Anti-Phishing & Malicious Website Blocking'
            ],
            osSupport: ['Windows', 'macOS', 'Android', 'iOS']
          },
          {
            id: 'mcafee-ult-2y-5d',
            name: 'McAfee Total Protection Ultimate - 2 Years',
            tagline: '2 years of complete family defense.',
            deviceCount: 5,
            deviceLabel: '5 Devices',
            price: 84.99,
            originalPrice: 239.99,
            billingPeriod: '2 Years',
            features: [
              'Up to 5 Devices (PC, Mac, iOS, Android)',
              'Unlimited Secure VPN Access',
              'Personal Identity Protection & Alerts',
              'McAfee Protection Score Assessment',
              'Password Manager & Encrypted Vault',
              'Anti-Phishing & Malicious Website Blocking',
              'Priority Phone Setup Assistance'
            ],
            osSupport: ['Windows', 'macOS', 'Android', 'iOS']
          }
        ]
      }
    ],
    faqs: [
      {
        question: 'Does McAfee slow down system performance?',
        answer: 'No, McAfee is engineered for low system impact and background performance optimization so your applications run smoothly.'
      },
      {
        question: 'How do I activate my McAfee license?',
        answer: 'You will receive your 25-digit activation key via email instantly after checkout. Enter the code at the official activation URL provided in your confirmation email.'
      }
    ]
  },
  {
    id: 'bitdefender',
    name: 'Bitdefender',
    slug: 'bitdefender',
    tagline: 'Ultra-lightweight protection with unmatched malware detection scores.',
    logoText: 'Bitdefender Total Security',
    description: 'Bitdefender is renowned for achieving top independent lab scores in threat detection while maintaining minimal resource usage.',
    rating: 4.9,
    reviewCount: 16900,
    startingPrice: 34.99,
    heroHeadline: 'Ironclad Cybersecurity Without Slowing Down Your Devices',
    heroSubheadline: 'Experience multi-layered ransomware defense, autonomic scanning, and complete web protection for Windows, Mac, and mobile.',
    keyBenefits: [
      {
        title: 'Zero Performance Impact',
        description: 'Bitdefender Photon technology adapts to your hardware configuration to save system resources and battery life.',
        icon: 'Zap'
      },
      {
        title: 'Multi-Layer Ransomware Protection',
        description: 'Keeps your sensitive documents, financial files, and photos safe from malicious encrypting attacks.',
        icon: 'Lock'
      },
      {
        title: 'Bitdefender Autopilot',
        description: 'Acts as your digital security advisor, recommending optimal security actions based on system usage.',
        icon: 'Cpu'
      },
      {
        title: 'Safe Online Banking',
        description: 'Dedicated Safepay browser shields online shopping and banking transactions from spyware and keyloggers.',
        icon: 'CreditCard'
      }
    ],
    products: [
      {
        id: 'bitdefender-antivirus-plus',
        brandId: 'bitdefender',
        brandName: 'Bitdefender',
        name: 'Bitdefender Antivirus Plus',
        slug: 'bitdefender-antivirus-plus',
        shortDescription: 'Essential protection for Windows PCs against internet threats.',
        fullDescription: 'Bitdefender Antivirus Plus provides automated real-time defense against all PC malware, network threat prevention, and Bitdefender VPN (200MB/day).',
        badge: 'Windows PC Focus',
        rating: 4.8,
        reviewCount: 4210,
        startingPrice: 34.99,
        osSupport: ['Windows'],
        highlights: [
          'Protection for up to 3 Windows PCs',
          'Unbeatable malware detection engine',
          'Multi-Layer Ransomware defense',
          'Bitdefender VPN (200 MB daily limit per device)',
          'Safe online banking browser (Safepay)'
        ],
        plans: [
          {
            id: 'bitdefender-avp-1y-3d',
            name: 'Bitdefender Antivirus Plus - 1 Year',
            tagline: 'Ideal choice for Windows PC enthusiasts.',
            deviceCount: 3,
            deviceLabel: '3 PCs',
            price: 34.99,
            originalPrice: 59.99,
            billingPeriod: '1 Year',
            features: [
              'Up to 3 Windows PCs',
              'Real-Time Automated Threat Shield',
              'Safepay Dedicated Banking Browser',
              'Multi-Layer Ransomware Remediation',
              'Vulnerability Scanner & Wi-Fi Inspector',
              'Bitdefender VPN (200 MB/day)'
            ],
            osSupport: ['Windows']
          }
        ]
      },
      {
        id: 'bitdefender-total-security',
        brandId: 'bitdefender',
        brandName: 'Bitdefender',
        name: 'Bitdefender Total Security',
        slug: 'bitdefender-total-security',
        shortDescription: 'Complete security suite for Windows, macOS, Android, and iOS.',
        fullDescription: 'Bitdefender Total Security protects up to 5 devices across all operating systems without affecting device speed or battery runtime.',
        badge: 'Top Rated Security',
        rating: 4.95,
        reviewCount: 9120,
        startingPrice: 44.99,
        osSupport: ['Windows', 'macOS', 'Android', 'iOS'],
        highlights: [
          'Coverage for 5 devices across Windows, Mac, iOS, Android',
          'Comprehensive malware & zero-day exploit protection',
          'Device Optimizer & OneClick Speed Up',
          'Parental Control & Anti-Theft features',
          'Webcam & Microphone protection shields'
        ],
        plans: [
          {
            id: 'bitdefender-tot-1y-5d',
            name: 'Bitdefender Total Security - 1 Year',
            tagline: 'Ultimate cross-platform protection.',
            deviceCount: 5,
            deviceLabel: '5 Devices',
            price: 44.99,
            originalPrice: 99.99,
            billingPeriod: '1 Year',
            isPopular: true,
            features: [
              'Up to 5 Devices (Windows, Mac, Android, iOS)',
              'Autonomic Real-Time Threat Engine',
              'OneClick System Optimizer & Battery Saver',
              'Parental Control & Anti-Theft Tools',
              'Webcam & Microphone Privacy Shields',
              'Ransomware Remediation & File Shredder'
            ],
            osSupport: ['Windows', 'macOS', 'Android', 'iOS']
          },
          {
            id: 'bitdefender-tot-2y-5d',
            name: 'Bitdefender Total Security - 2 Years',
            tagline: 'Long-term peace of mind & value.',
            deviceCount: 5,
            deviceLabel: '5 Devices',
            price: 84.99,
            originalPrice: 189.99,
            billingPeriod: '2 Years',
            features: [
              'Up to 5 Devices (Windows, Mac, Android, iOS)',
              'Autonomic Real-Time Threat Engine',
              'OneClick System Optimizer & Battery Saver',
              'Parental Control & Anti-Theft Tools',
              'Webcam & Microphone Privacy Shields',
              'Ransomware Remediation & File Shredder',
              'Priority Technical Support'
            ],
            osSupport: ['Windows', 'macOS', 'Android', 'iOS']
          }
        ]
      }
    ],
    faqs: [
      {
        question: 'What makes Bitdefender Total Security different from Antivirus Plus?',
        answer: 'Bitdefender Antivirus Plus is tailored specifically for Windows PCs, whereas Total Security works across Windows, macOS, Android, and iOS devices with added device optimization tools.'
      },
      {
        question: 'Does Bitdefender require a heavy download?',
        answer: 'No, Bitdefender uses cloud-assisted threat analysis, making the local installer lightweight and quick to activate.'
      }
    ]
  },
  {
    id: 'webroot',
    name: 'Webroot',
    slug: 'webroot',
    tagline: 'Lightning-fast cloud security with zero disruption.',
    logoText: 'Webroot SecureAnywhere',
    description: 'Webroot SecureAnywhere offers cloud-based real-time threat protection that installs in seconds and scans in under 20 seconds.',
    rating: 4.6,
    reviewCount: 9400,
    startingPrice: 24.99,
    heroHeadline: 'Ultra-Fast, Cloud-Powered Antivirus for Instant Device Defense',
    heroSubheadline: 'Webroot installs in seconds, takes negligible disk space, and shields your systems without annoying slowdowns or heavy updates.',
    keyBenefits: [
      {
        title: 'Lightning-Fast Scans',
        description: 'System scans finish in under 20 seconds — up to 6x faster than standard traditional antivirus applications.',
        icon: 'Zap'
      },
      {
        title: 'Cloud-Based Intelligence',
        description: 'Analyzes threats in real time across millions of endpoints worldwide without clogging device storage.',
        icon: 'Cloud'
      },
      {
        title: 'Identity Shield',
        description: 'Blocks stolen passwords, credit card numbers, and private data from cybercriminals during web browsing.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Ransomware Rollback',
        description: 'Monitors suspicious files and automatically rolls back damaged files if malware attempts unauthorized changes.',
        icon: 'RotateCcw'
      }
    ],
    products: [
      {
        id: 'webroot-secureanywhere-antivirus',
        brandId: 'webroot',
        brandName: 'Webroot',
        name: 'Webroot SecureAnywhere AntiVirus',
        slug: 'webroot-secureanywhere-antivirus',
        shortDescription: 'Fast & lightweight protection for 1 PC or Mac.',
        fullDescription: 'Webroot SecureAnywhere AntiVirus protects your PC or Mac against malware, phishing schemes, identity theft, and ransomware with zero system drag.',
        badge: 'Lightweight Leader',
        rating: 4.6,
        reviewCount: 3100,
        startingPrice: 24.99,
        osSupport: ['Windows', 'macOS'],
        highlights: [
          'Coverage for 1 PC or Mac device',
          'System scan in under 20 seconds',
          'Real-time anti-phishing defense',
          'Identity Shield against keyloggers',
          'Ransomware protection & auto-remediation'
        ],
        plans: [
          {
            id: 'webroot-av-1y-1d',
            name: 'Webroot SecureAnywhere AntiVirus - 1 Year',
            tagline: 'Ultra-fast protection for 1 computer.',
            deviceCount: 1,
            deviceLabel: '1 PC or Mac',
            price: 24.99,
            originalPrice: 39.99,
            billingPeriod: '1 Year',
            features: [
              '1 Windows PC or macOS computer',
              'Scans in under 20 seconds',
              'Real-Time Cloud Security Intelligence',
              'Anti-Phishing & Web Threat Shield',
              'Identity Theft & Keylogger Safeguard'
            ],
            osSupport: ['Windows', 'macOS']
          }
        ]
      },
      {
        id: 'webroot-internet-security-plus',
        brandId: 'webroot',
        brandName: 'Webroot',
        name: 'Webroot Internet Security Plus',
        slug: 'webroot-internet-security-plus',
        shortDescription: 'Complete security for up to 3 PCs, Macs, or mobile devices with Password Manager.',
        fullDescription: 'Webroot Internet Security Plus adds mobile security for smartphones/tablets and an integrated password manager powered by LastPass.',
        badge: 'Best Multi-Device Value',
        rating: 4.7,
        reviewCount: 5200,
        startingPrice: 34.99,
        osSupport: ['Windows', 'macOS', 'Android', 'iOS'],
        highlights: [
          'Protection for up to 3 PCs, Macs, Android, or iOS devices',
          'Password Manager included',
          'Mobile threat defense for smartphones & tablets',
          'Lightning-fast cloud threat engine',
          'Automated background updates'
        ],
        plans: [
          {
            id: 'webroot-isp-1y-3d',
            name: 'Webroot Internet Security Plus - 1 Year',
            tagline: 'Multi-device defense for up to 3 devices.',
            deviceCount: 3,
            deviceLabel: '3 Devices',
            price: 34.99,
            originalPrice: 59.99,
            billingPeriod: '1 Year',
            isPopular: true,
            features: [
              'Up to 3 Devices (PC, Mac, Android, iOS)',
              'Integrated Password Manager',
              'Mobile Security & Tablet Threat Shield',
              'Ultra-Fast 20-Second Scans',
              'Real-Time Cloud Threat Analysis',
              'Ransomware Auto-Rollback Engine'
            ],
            osSupport: ['Windows', 'macOS', 'Android', 'iOS']
          },
          {
            id: 'webroot-isp-2y-3d',
            name: 'Webroot Internet Security Plus - 2 Years',
            tagline: '2 years of zero-disruption security.',
            deviceCount: 3,
            deviceLabel: '3 Devices',
            price: 64.99,
            originalPrice: 109.99,
            billingPeriod: '2 Years',
            features: [
              'Up to 3 Devices (PC, Mac, Android, iOS)',
              'Integrated Password Manager',
              'Mobile Security & Tablet Threat Shield',
              'Ultra-Fast 20-Second Scans',
              'Real-Time Cloud Threat Analysis',
              'Ransomware Auto-Rollback Engine',
              'Priority Digital Delivery'
            ],
            osSupport: ['Windows', 'macOS', 'Android', 'iOS']
          }
        ]
      }
    ],
    faqs: [
      {
        question: 'Why is Webroot so much faster than other antivirus programs?',
        answer: 'Webroot stores threat signatures in the cloud rather than downloading large database files to your device, resulting in tiny file size and lightning-fast scans.'
      },
      {
        question: 'Does Webroot work on mobile devices?',
        answer: 'Webroot Internet Security Plus includes protection for Android and iOS smartphones and tablets.'
      }
    ]
  }
];

export const COMPARISON_FEATURES: ComparisonFeature[] = [
  {
    id: 'startingPrice',
    name: 'Starting Price (1 Year)',
    category: 'Core Security',
    tooltip: 'Lowest entry price for 1-year coverage',
    brandValues: {
      norton: '$29.99 / yr',
      mcafee: '$29.99 / yr',
      bitdefender: '$34.99 / yr',
      webroot: '$24.99 / yr'
    }
  },
  {
    id: 'deviceCount',
    name: 'Supported Devices',
    category: 'Core Security',
    tooltip: 'Number of devices protected under popular plan',
    brandValues: {
      norton: 'Up to 5 Devices',
      mcafee: 'Up to 5 Devices',
      bitdefender: 'Up to 5 Devices',
      webroot: 'Up to 3 Devices'
    }
  },
  {
    id: 'winSupport',
    name: 'Windows Support',
    category: 'Core Security',
    brandValues: {
      norton: true,
      mcafee: true,
      bitdefender: true,
      webroot: true
    }
  },
  {
    id: 'macSupport',
    name: 'macOS Support',
    category: 'Core Security',
    brandValues: {
      norton: true,
      mcafee: true,
      bitdefender: true,
      webroot: true
    }
  },
  {
    id: 'mobileSupport',
    name: 'Android & iOS Support',
    category: 'Core Security',
    brandValues: {
      norton: true,
      mcafee: true,
      bitdefender: true,
      webroot: true
    }
  },
  {
    id: 'realtimeProtection',
    name: 'Real-Time Malware Shield',
    category: 'Advanced Protection',
    brandValues: {
      norton: true,
      mcafee: true,
      bitdefender: true,
      webroot: true
    }
  },
  {
    id: 'ransomwareProtection',
    name: 'Ransomware Remediation',
    category: 'Advanced Protection',
    brandValues: {
      norton: true,
      mcafee: true,
      bitdefender: true,
      webroot: true
    }
  },
  {
    id: 'webProtection',
    name: 'Anti-Phishing & Safe Web',
    category: 'Advanced Protection',
    brandValues: {
      norton: true,
      mcafee: true,
      bitdefender: true,
      webroot: true
    }
  },
  {
    id: 'vpnIncluded',
    name: 'Encrypted VPN Included',
    category: 'Privacy & Identity',
    brandValues: {
      norton: 'Unlimited (360 Deluxe)',
      mcafee: 'Unlimited (Ultimate)',
      bitdefender: '200 MB / day per device',
      webroot: 'Add-on option'
    }
  },
  {
    id: 'identityProtection',
    name: 'Identity Theft Monitoring',
    category: 'Privacy & Identity',
    brandValues: {
      norton: 'Dark Web Monitoring',
      mcafee: 'Dark Web & Identity Score',
      bitdefender: 'Digital Identity Monitor',
      webroot: 'Identity Shield'
    }
  },
  {
    id: 'passwordManager',
    name: 'Password Manager',
    category: 'Privacy & Identity',
    brandValues: {
      norton: true,
      mcafee: true,
      bitdefender: true,
      webroot: true
    }
  },
  {
    id: 'cloudBackup',
    name: 'Encrypted Cloud Backup',
    category: 'Performance & Extras',
    brandValues: {
      norton: '50 GB (Deluxe)',
      mcafee: 'Not Included',
      bitdefender: 'Not Included',
      webroot: 'Not Included'
    }
  },
  {
    id: 'parentalControls',
    name: 'Parental Controls',
    category: 'Performance & Extras',
    brandValues: {
      norton: true,
      mcafee: true,
      bitdefender: true,
      webroot: false
    }
  },
  {
    id: 'scanSpeed',
    name: 'Scan Performance',
    category: 'Performance & Extras',
    brandValues: {
      norton: 'Fast Background Scan',
      mcafee: 'Smart Background Engine',
      bitdefender: 'Photon Autopilot Engine',
      webroot: 'Ultra-Fast < 20 seconds'
    }
  },
  {
    id: 'digitalDelivery',
    name: 'Instant Digital License',
    category: 'Support & Delivery',
    brandValues: {
      norton: true,
      mcafee: true,
      bitdefender: true,
      webroot: true
    }
  },
  {
    id: 'phoneSupport',
    name: 'Phone & Helpdesk Support',
    category: 'Support & Delivery',
    brandValues: {
      norton: '24/7 Phone & Online Support',
      mcafee: '24/7 Phone & Web Support',
      bitdefender: '24/7 Expert Help',
      webroot: '24/7 Support Desk'
    }
  }
];

// Helper functions
export function getAllBrands(): Brand[] {
  return BRANDS_DATA;
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return BRANDS_DATA.find((b) => b.slug.toLowerCase() === slug.toLowerCase());
}

export function getAllProducts(): Product[] {
  return BRANDS_DATA.flatMap((b) => b.products);
}

export function getProductBySlug(slug: string): Product | undefined {
  return getAllProducts().find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}

export function getFeaturedPlans() {
  const featured: { brand: Brand; product: Product; plan: Product['plans'][0] }[] = [];
  BRANDS_DATA.forEach((brand) => {
    brand.products.forEach((product) => {
      product.plans.forEach((plan) => {
        if (plan.isPopular || featured.length < 4) {
          featured.push({ brand, product, plan });
        }
      });
    });
  });
  return featured;
}
