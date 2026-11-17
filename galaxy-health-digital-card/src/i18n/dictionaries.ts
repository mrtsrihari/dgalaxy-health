export type Lang = "en" | "ta";
export const LANGS: Lang[] = ["en", "ta"];

export const langPath: Record<Lang, string> = { en: "/", ta: "/ta" };

type Option = { value: string; label: string };
type Item = { title: string; desc: string };

export type Dictionary = {
  meta: { title: string; description: string };
  common: { optional: string; required: string };
  nav: {
    services: string; about: string; enquiry: string; join: string; location: string;
    menu: string; close: string; primary: string; skip: string;
  };
  lang: { label: string; switchTo: string };
  share: { button: string; copied: string; failed: string; title: string; text: string };
  hero: {
    eyebrow: string; designation: string; company: string; location: string; intro: string;
    photoAlt: string; chipArea: string; chipLang: string;
    call: string; whatsapp: string; saveContact: string; qr: string; share: string;
    scanTitle: string; scanHint: string; whatsappGreeting: string;
  };
  qr: {
    title: string; description: string; download: string; shareImage: string; copyLink: string;
    copied: string; close: string; loading: string; localNote: string; downloaded: string; shareFailed: string;
  };
  services: {
    eyebrow: string; title: string; intro: string; enquire: string; joinCta: string;
    items: { health: Item; family: Item; corporate: Item; agent: Item };
  };
  about: {
    eyebrow: string; title: string; paragraphs: string[];
    stepsTitle: string; steps: Item[];
    credTitle: string; credQualification: string; credRole: string; credArea: string; credLanguages: string;
    credAreaValue: string; credLanguagesValue: string;
  };
  form: {
    name: string; namePh: string; mobile: string; mobilePh: string; mobileHint: string; message: string;
    errorSummary: string; opening: string; privacy: string;
    successTitle: string; successBody: string; reopen: string; reset: string;
  };
  errors: {
    nameRequired: string; nameInvalid: string; mobileRequired: string; mobileInvalid: string;
    selectRequired: string; messageTooLong: string;
  };
  enquiry: {
    eyebrow: string; title: string; intro: string;
    interest: string; interestPh: string; interestOptions: Option[];
    messagePh: string; submit: string;
    nextTitle: string; nextSteps: string[];
  };
  agent: {
    eyebrow: string; title: string; intro: string;
    interest: string; interestPh: string; interestOptions: Option[];
    messagePh: string; submit: string; note: string;
    pointsTitle: string; points: string[];
  };
  wa: {
    enquiryHeading: string; agentHeading: string; name: string; mobile: string; interest: string;
    message: string; footer: string;
  };
  location: {
    eyebrow: string; title: string; intro: string; city: string; areaLabel: string; areaValue: string;
    addressLabel: string; addressPending: string; openMaps: string; mapTitle: string; callToMeet: string;
  };
  footer: {
    tagline: string; contactTitle: string; linksTitle: string; phone: string; whatsapp: string;
    disclaimerTitle: string; disclaimer: string; independence: string; rights: string;
  };
  floating: { label: string };
};

const en: Dictionary = {
  meta: {
    title: "M. Thirumalairaja · Galaxy Health Insurance, Salem",
    description:
      "Digital visiting card of M. Thirumalairaja, Business Development Manager, Galaxy Health Insurance, Salem. Call, WhatsApp or send an enquiry about health insurance in Tamil or English.",
  },
  common: { optional: "Optional", required: "Required" },
  nav: {
    services: "Services", about: "About", enquiry: "Enquiry", join: "Become an Advisor", location: "Location",
    menu: "Open menu", close: "Close menu", primary: "Primary", skip: "Skip to main content",
  },
  lang: { label: "Language", switchTo: "Switch language" },
  share: {
    button: "Share", copied: "Link copied", failed: "Couldn’t copy — please use the QR code",
    title: "M. Thirumalairaja · Galaxy Health Insurance",
    text: "Health insurance guidance in Salem — contact M. Thirumalairaja, Galaxy Health Insurance.",
  },
  hero: {
    eyebrow: "Digital visiting card",
    designation: "Business Development Manager",
    company: "Galaxy Health Insurance",
    location: "Salem, Tamil Nadu",
    intro:
      "Helping individuals, families and businesses in Salem understand and choose health insurance with clarity — explained in Tamil or English.",
    photoAlt: "Portrait of M. Thirumalairaja",
    chipArea: "Salem & nearby districts",
    chipLang: "Tamil · English",
    call: "Call Now",
    whatsapp: "WhatsApp",
    saveContact: "Save Contact",
    qr: "QR Code",
    share: "Share",
    scanTitle: "Scan to open on your phone",
    scanHint: "Point your camera at the code",
    whatsappGreeting:
      "Hello Mr. Thirumalairaja, I saw your digital visiting card and would like to know more about Galaxy Health Insurance.",
  },
  qr: {
    title: "Share this card",
    description: "Scan with any phone camera to open this digital visiting card.",
    download: "Download QR",
    shareImage: "Share QR",
    copyLink: "Copy link",
    copied: "Link copied",
    close: "Close",
    loading: "Generating QR code…",
    localNote: "You are viewing a local preview. After deployment, this code will point to the live website.",
    downloaded: "QR code downloaded",
    shareFailed: "Sharing isn’t available here — the QR image was downloaded instead.",
  },
  services: {
    eyebrow: "Services",
    title: "How I can help",
    intro: "Clear guidance on Galaxy Health Insurance products. Plan details are always explained as written in the official brochure and policy wording.",
    enquire: "Enquire",
    joinCta: "Register interest",
    items: {
      health: {
        title: "Health Insurance",
        desc: "Help choosing an individual health plan — features, waiting periods and exclusions explained before you apply.",
      },
      family: {
        title: "Family Health Protection",
        desc: "Guidance on covering your family under a suitable plan, comparing available options for members of different ages.",
      },
      corporate: {
        title: "Corporate Health Insurance",
        desc: "Group health insurance enquiries for employers, with support on requirements, documentation and the proposal process.",
      },
      agent: {
        title: "Insurance Agent Registration",
        desc: "Interested in becoming an insurance advisor? Learn about eligibility, the onboarding process and next steps.",
      },
    },
  },
  about: {
    eyebrow: "About",
    title: "Clear guidance, from first question to final paperwork",
    paragraphs: [
      "M. Thirumalairaja is a Business Development Manager with Galaxy Health Insurance, based in Salem. He works with individuals, families and businesses across Salem and the surrounding districts, helping them understand health insurance before they make a decision.",
      "With a postgraduate background in Computer Science, he brings a structured, patient approach — explaining policy features in plain language, checking eligibility and walking you through the documents needed, in Tamil or English.",
    ],
    stepsTitle: "What to expect",
    steps: [
      { title: "Understand your needs", desc: "A short conversation about who needs cover, your budget and the questions you already have." },
      { title: "Explain policy features", desc: "Coverage, sum insured options, waiting periods and exclusions — as stated in the official policy wording." },
      { title: "Eligibility & documents", desc: "Which details and documents are required, and how the proposal form is completed." },
      { title: "Next steps", desc: "Guidance through the application, and a familiar contact for your questions afterwards." },
    ],
    credTitle: "At a glance",
    credQualification: "Qualification",
    credRole: "Role",
    credArea: "Service area",
    credLanguages: "Languages",
    credAreaValue: "Salem & surrounding districts",
    credLanguagesValue: "Tamil, English",
  },
  form: {
    name: "Full name",
    namePh: "Your name",
    mobile: "Mobile number",
    mobilePh: "98765 43210",
    mobileHint: "10-digit Indian mobile number",
    message: "Message",
    errorSummary: "Please correct the highlighted fields.",
    opening: "Opening WhatsApp…",
    privacy: "Your details go straight into a WhatsApp message from your own phone. This website does not store them.",
    successTitle: "WhatsApp is ready",
    successBody: "Your message has been prepared in WhatsApp. Please tap Send there to deliver it — it is not sent until you do.",
    reopen: "Open WhatsApp again",
    reset: "Write a new message",
  },
  errors: {
    nameRequired: "Please enter your name.",
    nameInvalid: "Please enter at least 2 letters.",
    mobileRequired: "Please enter your mobile number.",
    mobileInvalid: "Enter a valid 10-digit mobile number starting with 6, 7, 8 or 9.",
    selectRequired: "Please choose an option.",
    messageTooLong: "Please keep the message under 500 characters.",
  },
  enquiry: {
    eyebrow: "Enquiry",
    title: "Send an enquiry",
    intro: "Share a few details and your enquiry opens in WhatsApp, ready to send.",
    interest: "Insurance interest",
    interestPh: "Select an option",
    interestOptions: [
      { value: "health", label: "Health Insurance" },
      { value: "family", label: "Family Health Protection" },
      { value: "corporate", label: "Corporate Health Insurance" },
      { value: "renewal", label: "Existing policy / renewal question" },
      { value: "other", label: "Something else" },
    ],
    messagePh: "E.g. family of four, looking for a plan that includes parents",
    submit: "Send via WhatsApp",
    nextTitle: "What happens next",
    nextSteps: [
      "WhatsApp opens with your details already written.",
      "Tap Send to deliver the message.",
      "You’ll receive a reply on WhatsApp or a call back.",
    ],
  },
  agent: {
    eyebrow: "Become an Advisor",
    title: "Interested in becoming an insurance advisor?",
    intro: "Register your interest and Thirumalairaja will explain eligibility, the onboarding process and what the role involves.",
    interest: "Which best describes you?",
    interestPh: "Select an option",
    interestOptions: [
      { value: "exploring", label: "New to insurance — exploring the role" },
      { value: "parttime", label: "Interested in a part-time role" },
      { value: "fulltime", label: "Interested in a full-time role" },
      { value: "experienced", label: "Experienced in insurance / financial services" },
    ],
    messagePh: "Your town, current occupation or any questions",
    submit: "Send interest via WhatsApp",
    note: "This form sends an enquiry only. Becoming an insurance agent follows the insurer’s official process, including eligibility checks, training and examination as per applicable regulations.",
    pointsTitle: "You’ll learn about",
    points: ["Eligibility requirements", "Training and certification steps", "Documents needed to apply", "How the advisor role works"],
  },
  wa: {
    enquiryHeading: "Insurance enquiry",
    agentHeading: "Advisor registration interest",
    name: "Name",
    mobile: "Mobile",
    interest: "Interest",
    message: "Message",
    footer: "Sent from the digital visiting card",
  },
  location: {
    eyebrow: "Location",
    title: "Based in Salem",
    intro: "Meeting customers across Salem and the surrounding districts.",
    city: "Salem, Tamil Nadu, India",
    areaLabel: "Service area",
    areaValue: "Salem and surrounding districts",
    addressLabel: "Office",
    addressPending: "Please call or WhatsApp to arrange a meeting.",
    openMaps: "Open in Google Maps",
    mapTitle: "Map of Salem, Tamil Nadu",
    callToMeet: "Call to arrange a meeting",
  },
  footer: {
    tagline: "Personal digital visiting card of M. Thirumalairaja, Business Development Manager.",
    contactTitle: "Contact",
    linksTitle: "Explore",
    phone: "Phone",
    whatsapp: "WhatsApp",
    disclaimerTitle: "Disclaimer",
    disclaimer:
      "Insurance is the subject matter of solicitation. For details on coverage, risk factors, terms, conditions and exclusions, please read the sales brochure and policy wording carefully before concluding a sale. Policy terms, premiums and claim decisions are governed by the insurer and the policy document.",
    independence:
      "This is a personal digital visiting card and not the official website of Galaxy Health Insurance. For official information, please refer to the insurer’s official channels.",
    rights: "All rights reserved.",
  },
  floating: { label: "Chat on WhatsApp" },
};

const ta: Dictionary = {
  meta: {
    title: "M. Thirumalairaja · கேலக்ஸி ஹெல்த் இன்சூரன்ஸ், சேலம்",
    description:
      "கேலக்ஸி ஹெல்த் இன்சூரன்ஸ், சேலம் — வணிக மேம்பாட்டு மேலாளர் M. Thirumalairaja அவர்களின் டிஜிட்டல் விசிட்டிங் கார்டு. மருத்துவக் காப்பீடு பற்றி அழைக்க, வாட்ஸ்அப் செய்ய அல்லது விசாரணை அனுப்ப.",
  },
  common: { optional: "விருப்பத்தேர்வு", required: "கட்டாயம்" },
  nav: {
    services: "சேவைகள்", about: "அறிமுகம்", enquiry: "விசாரணை", join: "ஆலோசகராக இணைய", location: "இருப்பிடம்",
    menu: "மெனுவைத் திற", close: "மெனுவை மூடு", primary: "முதன்மை", skip: "முதன்மை உள்ளடக்கத்திற்குச் செல்ல",
  },
  lang: { label: "மொழி", switchTo: "மொழியை மாற்று" },
  share: {
    button: "பகிர", copied: "இணைப்பு நகலெடுக்கப்பட்டது", failed: "நகலெடுக்க இயலவில்லை — QR குறியீட்டைப் பயன்படுத்தவும்",
    title: "M. Thirumalairaja · கேலக்ஸி ஹெல்த் இன்சூரன்ஸ்",
    text: "சேலத்தில் மருத்துவக் காப்பீட்டு வழிகாட்டல் — M. Thirumalairaja, கேலக்ஸி ஹெல்த் இன்சூரன்ஸ்.",
  },
  hero: {
    eyebrow: "டிஜிட்டல் விசிட்டிங் கார்டு",
    designation: "வணிக மேம்பாட்டு மேலாளர்",
    company: "கேலக்ஸி ஹெல்த் இன்சூரன்ஸ்",
    location: "சேலம், தமிழ்நாடு",
    intro:
      "சேலம் பகுதியில் உள்ள தனிநபர்கள், குடும்பங்கள் மற்றும் நிறுவனங்கள் மருத்துவக் காப்பீட்டைத் தெளிவாகப் புரிந்து தேர்ந்தெடுக்க உதவுதல் — தமிழிலும் ஆங்கிலத்திலும்.",
    photoAlt: "M. Thirumalairaja அவர்களின் புகைப்படம்",
    chipArea: "சேலம் & அருகிலுள்ள மாவட்டங்கள்",
    chipLang: "தமிழ் · English",
    call: "அழைக்க",
    whatsapp: "வாட்ஸ்அப்",
    saveContact: "தொடர்பைச் சேமிக்க",
    qr: "QR குறியீடு",
    share: "பகிர",
    scanTitle: "உங்கள் மொபைலில் திறக்க ஸ்கேன் செய்யவும்",
    scanHint: "கேமராவை குறியீட்டை நோக்கிக் காட்டவும்",
    whatsappGreeting:
      "வணக்கம் திரு. Thirumalairaja அவர்களே, உங்கள் டிஜிட்டல் விசிட்டிங் கார்டைப் பார்த்தேன். கேலக்ஸி ஹெல்த் இன்சூரன்ஸ் பற்றி மேலும் அறிய விரும்புகிறேன்.",
  },
  qr: {
    title: "இந்தக் கார்டைப் பகிரவும்",
    description: "இந்த டிஜிட்டல் விசிட்டிங் கார்டைத் திறக்க எந்த மொபைல் கேமராவிலும் ஸ்கேன் செய்யவும்.",
    download: "QR பதிவிறக்கம்",
    shareImage: "QR பகிர",
    copyLink: "இணைப்பை நகலெடு",
    copied: "இணைப்பு நகலெடுக்கப்பட்டது",
    close: "மூடு",
    loading: "QR குறியீடு உருவாக்கப்படுகிறது…",
    localNote: "இது உள்ளூர் முன்னோட்டம். வெளியிட்ட பிறகு, இந்தக் குறியீடு நேரடி இணையதளத்தைக் காட்டும்.",
    downloaded: "QR குறியீடு பதிவிறக்கப்பட்டது",
    shareFailed: "இங்கு பகிர இயலவில்லை — அதற்குப் பதிலாக QR படம் பதிவிறக்கப்பட்டது.",
  },
  services: {
    eyebrow: "சேவைகள்",
    title: "நான் எவ்வாறு உதவ முடியும்",
    intro: "கேலக்ஸி ஹெல்த் இன்சூரன்ஸ் திட்டங்கள் குறித்த தெளிவான வழிகாட்டல். திட்ட விவரங்கள் அதிகாரப்பூர்வ கையேடு மற்றும் பாலிசி ஆவணத்தில் உள்ளபடியே விளக்கப்படும்.",
    enquire: "விசாரிக்க",
    joinCta: "ஆர்வத்தைப் பதிவு செய்ய",
    items: {
      health: {
        title: "மருத்துவக் காப்பீடு",
        desc: "தனிநபர் மருத்துவக் காப்பீட்டுத் திட்டத்தைத் தேர்வு செய்ய உதவி — விண்ணப்பிக்கும் முன் அம்சங்கள், காத்திருப்பு காலம், விலக்குகள் விளக்கப்படும்.",
      },
      family: {
        title: "குடும்ப மருத்துவப் பாதுகாப்பு",
        desc: "உங்கள் குடும்பத்தினருக்குப் பொருத்தமான திட்டத்தைத் தேர்வு செய்ய வழிகாட்டல் — வெவ்வேறு வயதினருக்கான வாய்ப்புகளை ஒப்பிட்டுப் பார்க்கலாம்.",
      },
      corporate: {
        title: "நிறுவன மருத்துவக் காப்பீடு",
        desc: "நிறுவனங்களுக்கான குழு மருத்துவக் காப்பீட்டு விசாரணைகள் — தேவைகள், ஆவணங்கள் மற்றும் முன்மொழிவு நடைமுறையில் உதவி.",
      },
      agent: {
        title: "காப்பீட்டு முகவர் பதிவு",
        desc: "காப்பீட்டு ஆலோசகராக விரும்புகிறீர்களா? தகுதி, இணைவு நடைமுறை மற்றும் அடுத்த படிகளைத் தெரிந்துகொள்ளுங்கள்.",
      },
    },
  },
  about: {
    eyebrow: "அறிமுகம்",
    title: "முதல் கேள்வி முதல் இறுதி ஆவணம் வரை தெளிவான வழிகாட்டல்",
    paragraphs: [
      "M. Thirumalairaja, சேலத்தைச் சேர்ந்த கேலக்ஸி ஹெல்த் இன்சூரன்ஸ் நிறுவனத்தின் வணிக மேம்பாட்டு மேலாளர். சேலம் மற்றும் அருகிலுள்ள மாவட்டங்களில் உள்ள தனிநபர்கள், குடும்பங்கள் மற்றும் நிறுவனங்கள் முடிவெடுக்கும் முன் மருத்துவக் காப்பீட்டைப் புரிந்துகொள்ள உதவுகிறார்.",
      "கணினி அறிவியலில் முதுநிலை ஆய்வுப் பட்டம் (M.Phil) பெற்ற இவர், பாலிசி அம்சங்களை எளிய மொழியில் விளக்குதல், தகுதியைச் சரிபார்த்தல், தேவையான ஆவணங்களை வழிநடத்துதல் என ஒழுங்கான, பொறுமையான அணுகுமுறையைப் பின்பற்றுகிறார் — தமிழிலும் ஆங்கிலத்திலும்.",
    ],
    stepsTitle: "நீங்கள் எதிர்பார்க்கலாம்",
    steps: [
      { title: "உங்கள் தேவையைப் புரிந்துகொள்ளுதல்", desc: "யாருக்குக் காப்பீடு தேவை, உங்கள் பட்ஜெட், உங்கள் கேள்விகள் பற்றிய சிறு உரையாடல்." },
      { title: "பாலிசி அம்சங்களை விளக்குதல்", desc: "காப்பீட்டுப் பாதுகாப்பு, காப்பீட்டுத் தொகை, காத்திருப்பு காலம், விலக்குகள் — அதிகாரப்பூர்வ பாலிசி ஆவணத்தில் உள்ளபடி." },
      { title: "தகுதி & ஆவணங்கள்", desc: "என்ன விவரங்கள், ஆவணங்கள் தேவை, முன்மொழிவுப் படிவத்தை எப்படி நிரப்புவது." },
      { title: "அடுத்த படிகள்", desc: "விண்ணப்ப நடைமுறையில் வழிகாட்டல், பின்னரும் உங்கள் கேள்விகளுக்கு அறிமுகமான தொடர்பு." },
    ],
    credTitle: "ஒரு பார்வையில்",
    credQualification: "கல்வித் தகுதி",
    credRole: "பதவி",
    credArea: "சேவைப் பகுதி",
    credLanguages: "மொழிகள்",
    credAreaValue: "சேலம் & அருகிலுள்ள மாவட்டங்கள்",
    credLanguagesValue: "தமிழ், ஆங்கிலம்",
  },
  form: {
    name: "முழுப் பெயர்",
    namePh: "உங்கள் பெயர்",
    mobile: "மொபைல் எண்",
    mobilePh: "98765 43210",
    mobileHint: "10 இலக்க இந்திய மொபைல் எண்",
    message: "செய்தி",
    errorSummary: "குறிக்கப்பட்ட புலங்களைச் சரிசெய்யவும்.",
    opening: "வாட்ஸ்அப் திறக்கப்படுகிறது…",
    privacy: "உங்கள் விவரங்கள் உங்கள் சொந்த மொபைலிலிருந்து வாட்ஸ்அப் செய்தியாக மட்டுமே செல்லும். இந்த இணையதளம் அவற்றைச் சேமிப்பதில்லை.",
    successTitle: "வாட்ஸ்அப் தயார்",
    successBody: "உங்கள் செய்தி வாட்ஸ்அப்பில் தயாராக உள்ளது. அனுப்ப அங்கு Send பொத்தானை அழுத்தவும் — நீங்கள் அழுத்தும் வரை அது அனுப்பப்படாது.",
    reopen: "வாட்ஸ்அப்பை மீண்டும் திற",
    reset: "புதிய செய்தி எழுத",
  },
  errors: {
    nameRequired: "உங்கள் பெயரை உள்ளிடவும்.",
    nameInvalid: "குறைந்தது 2 எழுத்துகளை உள்ளிடவும்.",
    mobileRequired: "உங்கள் மொபைல் எண்ணை உள்ளிடவும்.",
    mobileInvalid: "6, 7, 8 அல்லது 9 இல் தொடங்கும் சரியான 10 இலக்க மொபைல் எண்ணை உள்ளிடவும்.",
    selectRequired: "ஒரு விருப்பத்தைத் தேர்ந்தெடுக்கவும்.",
    messageTooLong: "செய்தியை 500 எழுத்துகளுக்குள் வைக்கவும்.",
  },
  enquiry: {
    eyebrow: "விசாரணை",
    title: "விசாரணை அனுப்புங்கள்",
    intro: "சில விவரங்களைப் பகிருங்கள் — உங்கள் விசாரணை அனுப்பத் தயாராக வாட்ஸ்அப்பில் திறக்கும்.",
    interest: "காப்பீட்டு ஆர்வம்",
    interestPh: "ஒன்றைத் தேர்ந்தெடுக்கவும்",
    interestOptions: [
      { value: "health", label: "மருத்துவக் காப்பீடு" },
      { value: "family", label: "குடும்ப மருத்துவப் பாதுகாப்பு" },
      { value: "corporate", label: "நிறுவன மருத்துவக் காப்பீடு" },
      { value: "renewal", label: "தற்போதைய பாலிசி / புதுப்பித்தல் கேள்வி" },
      { value: "other", label: "வேறு ஏதேனும்" },
    ],
    messagePh: "எ.கா. நான்கு பேர் கொண்ட குடும்பம், பெற்றோரையும் சேர்க்க விரும்புகிறேன்",
    submit: "வாட்ஸ்அப் மூலம் அனுப்ப",
    nextTitle: "அடுத்து என்ன நடக்கும்",
    nextSteps: [
      "உங்கள் விவரங்களுடன் வாட்ஸ்அப் திறக்கும்.",
      "செய்தியை அனுப்ப Send அழுத்தவும்.",
      "வாட்ஸ்அப்பில் பதில் அல்லது திரும்ப அழைப்பு வரும்.",
    ],
  },
  agent: {
    eyebrow: "ஆலோசகராக இணைய",
    title: "காப்பீட்டு ஆலோசகராக விரும்புகிறீர்களா?",
    intro: "உங்கள் ஆர்வத்தைப் பதிவு செய்யுங்கள் — தகுதி, இணைவு நடைமுறை மற்றும் பணியின் தன்மை பற்றி Thirumalairaja விளக்குவார்.",
    interest: "உங்களுக்கு எது பொருந்தும்?",
    interestPh: "ஒன்றைத் தேர்ந்தெடுக்கவும்",
    interestOptions: [
      { value: "exploring", label: "காப்பீட்டுத் துறைக்குப் புதியவர் — தெரிந்துகொள்ள விரும்புகிறேன்" },
      { value: "parttime", label: "பகுதி நேரப் பணியில் ஆர்வம்" },
      { value: "fulltime", label: "முழு நேரப் பணியில் ஆர்வம்" },
      { value: "experienced", label: "காப்பீடு / நிதிச் சேவைகளில் அனுபவம் உள்ளவர்" },
    ],
    messagePh: "உங்கள் ஊர், தற்போதைய பணி அல்லது ஏதேனும் கேள்விகள்",
    submit: "வாட்ஸ்அப் மூலம் ஆர்வத்தை அனுப்ப",
    note: "இந்தப் படிவம் விசாரணையை மட்டுமே அனுப்புகிறது. காப்பீட்டு முகவராக ஆவது, பொருந்தும் விதிமுறைகளின்படி தகுதிச் சரிபார்ப்பு, பயிற்சி மற்றும் தேர்வு உள்ளிட்ட காப்பீட்டு நிறுவனத்தின் அதிகாரப்பூர்வ நடைமுறையைப் பின்பற்றும்.",
    pointsTitle: "நீங்கள் தெரிந்துகொள்வது",
    points: ["தகுதி நிபந்தனைகள்", "பயிற்சி மற்றும் சான்றிதழ் படிகள்", "விண்ணப்பிக்கத் தேவையான ஆவணங்கள்", "ஆலோசகர் பணி எவ்வாறு செயல்படுகிறது"],
  },
  wa: {
    enquiryHeading: "காப்பீட்டு விசாரணை",
    agentHeading: "ஆலோசகர் பதிவு ஆர்வம்",
    name: "பெயர்",
    mobile: "மொபைல்",
    interest: "ஆர்வம்",
    message: "செய்தி",
    footer: "டிஜிட்டல் விசிட்டிங் கார்டு மூலம் அனுப்பப்பட்டது",
  },
  location: {
    eyebrow: "இருப்பிடம்",
    title: "சேலத்தில் இருந்து சேவை",
    intro: "சேலம் மற்றும் அருகிலுள்ள மாவட்டங்களில் வாடிக்கையாளர்களைச் சந்திக்கிறார்.",
    city: "சேலம், தமிழ்நாடு, இந்தியா",
    areaLabel: "சேவைப் பகுதி",
    areaValue: "சேலம் மற்றும் அருகிலுள்ள மாவட்டங்கள்",
    addressLabel: "அலுவலகம்",
    addressPending: "சந்திப்பை ஏற்பாடு செய்ய அழைக்கவும் அல்லது வாட்ஸ்அப் செய்யவும்.",
    openMaps: "Google Maps-இல் திற",
    mapTitle: "சேலம், தமிழ்நாடு வரைபடம்",
    callToMeet: "சந்திப்புக்கு அழைக்க",
  },
  footer: {
    tagline: "வணிக மேம்பாட்டு மேலாளர் M. Thirumalairaja அவர்களின் தனிப்பட்ட டிஜிட்டல் விசிட்டிங் கார்டு.",
    contactTitle: "தொடர்புக்கு",
    linksTitle: "பக்கங்கள்",
    phone: "தொலைபேசி",
    whatsapp: "வாட்ஸ்அப்",
    disclaimerTitle: "பொறுப்புத் துறப்பு",
    disclaimer:
      "காப்பீடு என்பது விற்பனை வேண்டுகோளுக்குரிய பொருள். காப்பீட்டுப் பாதுகாப்பு, அபாயக் காரணிகள், விதிமுறைகள், நிபந்தனைகள் மற்றும் விலக்குகள் குறித்த விவரங்களுக்கு, விற்பனையை முடிக்கும் முன் விற்பனைக் கையேடு மற்றும் பாலிசி ஆவணத்தைக் கவனமாகப் படிக்கவும். பாலிசி விதிமுறைகள், பிரீமியம் மற்றும் க்ளெய்ம் முடிவுகள் காப்பீட்டு நிறுவனம் மற்றும் பாலிசி ஆவணத்தின்படியே அமையும்.",
    independence:
      "இது ஒரு தனிப்பட்ட டிஜிட்டல் விசிட்டிங் கார்டு; கேலக்ஸி ஹெல்த் இன்சூரன்ஸ் நிறுவனத்தின் அதிகாரப்பூர்வ இணையதளம் அல்ல. அதிகாரப்பூர்வ தகவல்களுக்கு, காப்பீட்டு நிறுவனத்தின் அதிகாரப்பூர்வ வழிகளைப் பார்க்கவும்.",
    rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
  },
  floating: { label: "வாட்ஸ்அப்பில் உரையாட" },
};

export const dictionaries: Record<Lang, Dictionary> = { en, ta };

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}
