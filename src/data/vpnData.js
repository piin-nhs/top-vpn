// Database of the Top VPN Services of 2026
export const vpnData = [
  {
    id: "expressvpn",
    rank: 1,
    name: "ExpressVPN",
    logoIcon: "ShieldCheck",
    logoColor: "#E22828",
    score: 9.8,
    stars: 5,
    tagline: "Ultra-fast speeds & premium security audits",
    isBestChoice: true,
    speed: 980,
    servers: 3200,
    countries: 105,
    price: 6.67,
    isFastest: true,
    isStreaming: true,
    isBudget: false,
    verdict: "ExpressVPN remains the premier choice in 2026. Powered by its proprietary Lightway protocol, it offers maximum speeds, unparalleled geo-unblocking capabilities, and has successfully passed multiple independent audits of its RAM-only server infrastructure.",
    features: [
      "Lightway protocol with custom codebase",
      "RAM-only servers (no local log storage)",
      "Best-in-class 24/7 customer support",
      "8 simultaneous device connections",
      "Located in British Virgin Islands",
      "Military-grade AES-256-GCM encryption"
    ],
    devices: "8 Devices",
    link: "https://expressvpn.com"
  },
  {
    id: "nordvpn",
    rank: 2,
    name: "NordVPN",
    logoIcon: "Lock",
    logoColor: "#4682B4",
    score: 9.6,
    stars: 5,
    tagline: "Double-hop encryption & threat protection",
    isBestChoice: false,
    speed: 950,
    servers: 6400,
    countries: 111,
    price: 3.39,
    isFastest: true,
    isStreaming: true,
    isBudget: false,
    verdict: "NordVPN represents the pinnacle of security value. Its custom NordLynx protocol delivers blazing fast performance, while unique features like Threat Protection and Double VPN ensure hackers and trackers can never access your traffic.",
    features: [
      "Blazing fast NordLynx protocol",
      "Double VPN server hopping",
      "Dedicated IP address options",
      "10 simultaneous device connections",
      "Located in Panama (no data retention laws)",
      "Built-in Dark Web vulnerability monitor"
    ],
    devices: "10 Devices",
    link: "https://nordvpn.com"
  },
  {
    id: "surfshark",
    rank: 3,
    name: "Surfshark",
    logoIcon: "Flame",
    logoColor: "#00BFFF",
    score: 9.4,
    stars: 4.5,
    tagline: "Unlimited simultaneous device connections",
    isBestChoice: false,
    speed: 920,
    servers: 3200,
    countries: 100,
    price: 2.19,
    isFastest: false,
    isStreaming: true,
    isBudget: true,
    verdict: "Surfshark is the perfect choice for families or users with many devices. Offering unlimited connections and powerful ad blocking under its CleanWeb suite, it is the best overall budget-friendly premium VPN available.",
    features: [
      "Unlimited simultaneous connections",
      "CleanWeb 2.0 ad & cookie pop-up blocker",
      "Bypasser split-tunneling configuration",
      "NoBorders mode for bypass in restricted regions",
      "MultiHop (Double VPN) server routes",
      "Located in the Netherlands"
    ],
    devices: "Unlimited",
    link: "https://surfshark.com"
  },
  {
    id: "protonvpn",
    rank: 4,
    name: "Proton VPN",
    logoIcon: "KeyRound",
    logoColor: "#7B68EE",
    score: 9.3,
    stars: 4.5,
    tagline: "Swiss privacy protection & open-source code",
    isBestChoice: false,
    speed: 890,
    servers: 4400,
    countries: 91,
    price: 4.99,
    isFastest: false,
    isStreaming: true,
    isBudget: false,
    verdict: "Proton VPN is built for absolute privacy advocates. Headquartered in Switzerland under strict Swiss data protection regulations, its entire application suite is 100% open-source, publically audited, and highly trusted.",
    features: [
      "100% Open Source and audited apps",
      "Swiss jurisdiction (outside 14-eyes alliance)",
      "NetShield DNS ad and malware filter",
      "Secure Core double-hop physical servers",
      "VPN Accelerator increases speeds by up to 400%",
      "Up to 10 device connections simultaneously"
    ],
    devices: "10 Devices",
    link: "https://protonvpn.com"
  },
  {
    id: "cyberghost",
    rank: 5,
    name: "CyberGhost",
    logoIcon: "Smile",
    logoColor: "#FFD700",
    score: 9.1,
    stars: 4,
    tagline: "Specialized servers for easy streaming",
    isBestChoice: false,
    speed: 870,
    servers: 9000,
    countries: 100,
    price: 2.03,
    isFastest: false,
    isStreaming: true,
    isBudget: true,
    verdict: "CyberGhost provides specialized server profiles for quick streaming, torrenting, and gaming configurations. With a massive global server count and an extended 45-day money-back guarantee, it's the perfect VPN for beginners.",
    features: [
      "Massive network of 9,000+ servers",
      "Optimized profiles for Netflix, Hulu, Disney+",
      "NoSpy servers owned directly by CyberGhost",
      "7 simultaneous device connections",
      "Located in Romania (strict privacy policy)",
      "Extended 45-day money-back guarantee"
    ],
    devices: "7 Devices",
    link: "https://cyberghostvpn.com"
  }
];

export const methodologySteps = [
  {
    id: "speed",
    step: "01",
    title: "Speed & Performance",
    icon: "Zap",
    summary: "Real-time network speed drop benchmarks across international server locations.",
    details: "Our speed testing involves running automated scripts that measure download speeds, upload speeds, and latency fluctuations. We run tests three times daily from multiple test environments (US, UK, Germany, and Singapore) using high-bandwidth fiber connections. A premium score requires maintaining 85%+ of original non-VPN speeds."
  },
  {
    id: "security",
    step: "02",
    title: "Security & Leak Tests",
    icon: "ShieldAlert",
    summary: "Deep inspections for IP address, DNS, and WebRTC leak vulnerabilities.",
    details: "We audit the core protocol security of each VPN. This includes looking for DNS leaks, WebRTC leaks, and IPv6 leaks under standard and disrupted connections. We test kill switches by forcing network failures during active downloads, ensuring all internet traffic is instantly blocked without disclosing user IPs."
  },
  {
    id: "privacy",
    step: "03",
    title: "Privacy & No-Logs",
    icon: "EyeOff",
    summary: "Verification of RAM-only server setups and third-party audit integrity.",
    details: "We verify whether the VPN provider employs RAM-only servers, which prevent data from being written to hard drives. We also read court documents and legal disclosures to verify no-logs track records. A high rating requires independent audits by top firms like PwC, Deloitte, or Cure53."
  },
  {
    id: "value",
    step: "04",
    title: "Value & Transparency",
    icon: "Coins",
    summary: "Fair pricing, money-back guarantees, and support responsiveness.",
    details: "We assess the pricing structure of long-term subscriptions against feature offerings. We investigate refund experiences to ensure the money-back guarantee is easy to claim. Customer support is tested with technical questions (e.g. configuring routers) to check response speed and accuracy."
  }
];

export const faqsList = [
  {
    question: "Why is a VPN necessary in 2026?",
    answer: "In 2026, ISPs, advertising networks, and data brokers use sophisticated profiling techniques. A VPN encrypts your traffic and masks your IP address, which prevents local spying on public networks and lets you securely stream your favorite home library catalogs while traveling globally."
  },
  {
    question: "How does a VPN impact my connection speeds?",
    answer: "A VPN routes your traffic through an encrypted server tunnel, which naturally introduces a minor speed reduction of about 5% to 15%. Modern protocols like WireGuard, Lightway, or NordLynx minimize this overhead, making the speed drop imperceptible for 4K streaming and high-speed gaming."
  },
  {
    question: "Can I use a free VPN service?",
    answer: "While some reputable services offer basic free tiers (e.g. Proton VPN), most free VPNs monetize your data, sell logs, limit server locations, and restrict bandwidth speed. For reliable security, RAM-only servers, and streaming access, a certified and audited premium VPN is recommended."
  },
  {
    question: "What is a RAM-only server network?",
    answer: "Unlike traditional hard-disk servers, RAM-only servers operate entirely in volatile memory (RAM). This means the server lacks the physical capacity to store log files, and all cryptographic keys and software configurations are wiped immediately upon any power cycle or system reboot."
  }
];
