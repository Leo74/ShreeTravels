/* =====================================================================
   Shree Travels — bilingual content (English + Marathi)
   ---------------------------------------------------------------------
   - I18N  : static UI strings, applied to elements via data-i18n="key"
   - DATA  : dynamic card content (services, fleet, gallery, packages,
             reviews) rendered by main.js. Each item carries both langs.
   - CONFIG: editable business details (phone, socials, address, etc.)
   Replace the placeholder values below with the real ones before launch.
   ===================================================================== */

const CONFIG = {
  phone: "+91 98765 43210",        // shown on the site
  phoneHref: "+919876543210",      // used for tel: links (no spaces)
  whatsapp: "919876543210",        // used for wa.me links (country code, no +)
  email: "bookings@shreetravels.example",
  // Social links — replace # with the real profile URLs
  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    youtube: "#"
  },
  // Google Maps embed src — replace with the real embed for the shop.
  mapEmbed: "https://www.google.com/maps?q=Kolhapur,Maharashtra&output=embed"
};

const I18N = {
  en: {
    lang_name: "मराठी",                       // label shown on toggle = the OTHER language
    page_title: "Shree Travels — Cabs, Buses & Tour Packages in Kolhapur",

    topbar_offer: "Now booking Tirupati, Ooty, Shimla & more — call us today!",
    brand_tagline: "Kolhapur • Since 2008",

    nav_home: "Home",
    nav_services: "Services",
    nav_fleet: "Fleet",
    nav_destinations: "Destinations",
    nav_packages: "Packages",
    nav_reviews: "Reviews",
    nav_contact: "Contact",
    btn_book: "Book Now",

    hero_badge: "Kolhapur's Trusted Travel Partner",
    hero_title: "Explore India with Comfort & Care",
    hero_sub: "From local Kolhapur sightseeing to Tirupati, Ooty, Shimla and beyond — Shree Travels gets you there safely in well-maintained buses and cars.",
    hero_cta1: "Request a Callback",
    hero_cta2: "View Packages",
    hero_point1: "24×7 Support",
    hero_point2: "Experienced Drivers",
    hero_point3: "Sanitised Vehicles",
    hero_scroll: "Scroll to explore",

    quick_title: "Get a Free Callback",
    quick_sub: "Share your details — we'll call you back.",

    stat1_label: "Years of Service",
    stat2_label: "Happy Travellers",
    stat3_label: "Destinations Covered",
    stat4_label: "Vehicles in Fleet",

    services_kicker: "What We Offer",
    services_title: "Our Travel Services",
    services_sub: "Complete travel solutions for tourists, families, pilgrims and groups.",

    fleet_kicker: "Our Fleet",
    fleet_title: "Buses & Cars for Every Trip",
    fleet_sub: "Well-maintained, sanitised vehicles with trained, courteous drivers.",
    tab_buses: "Buses",
    tab_cars: "Cars & Vans",
    label_seats: "Seats",
    label_enquire: "Enquire",

    gallery_kicker: "Where We Travel",
    gallery_title: "Popular Destinations",
    gallery_sub: "Photos and videos from our trips across India. Tap any card to view.",
    filter_all: "All",
    filter_photos: "Photos",
    filter_videos: "Videos",
    video_badge: "Video",

    pkg_kicker: "Tour Packages",
    pkg_title: "Popular Tour Packages",
    pkg_sub: "Ready-made itineraries — or tell us yours and we'll customise it.",
    label_duration: "Duration",
    label_from: "From",
    label_highlights: "Highlights",
    btn_enquire_now: "Enquire Now",
    badge_popular: "Popular",
    badge_bestseller: "Bestseller",
    pkg_note: "*Indicative fare per person; varies with season, route and group size.",

    why_kicker: "Why Shree Travels",
    why_title: "Travel With Complete Peace of Mind",
    why_sub: "Sixteen years of happy journeys across India — here's what you can count on.",

    rev_kicker: "Testimonials",
    rev_title: "What Our Travellers Say",
    rev_sub: "Real experiences from families and groups we've travelled with.",

    contact_kicker: "Get in Touch",
    contact_title: "Contact & Callback",
    contact_sub: "Have a question or ready to book? Call us or request a callback and our team will reach out.",
    info_address_label: "Visit Us",
    info_address: "Shop No. 5, Station Road, Near CBS, Kolhapur, Maharashtra 416001",
    info_phone_label: "Call / WhatsApp",
    info_email_label: "Email",
    info_hours_label: "Office Hours",
    info_hours: "Mon–Sun: 8:00 AM – 9:00 PM",

    form_title: "Request a Callback",
    form_name: "Your Name",
    form_phone: "Phone Number",
    form_email: "Email (optional)",
    form_destination: "Destination / Service",
    form_dest_ph: "Select…",
    form_date: "Preferred Travel Date",
    form_people: "No. of Travellers",
    form_message: "Message (optional)",
    form_submit: "Request Callback",
    form_or: "or",
    form_whatsapp: "Chat on WhatsApp",
    form_success: "Thank you! Your callback request has been noted. Our team will call you shortly.",
    form_err_name: "Please enter your name.",
    form_err_phone: "Please enter a valid 10-digit mobile number.",
    map_title: "Find Us in Kolhapur",

    footer_about: "Shree Travels is a Kolhapur-based travel agency offering local cabs, buses and outstation tour packages across India since 2008.",
    footer_links: "Quick Links",
    footer_contact: "Contact",
    footer_follow: "Follow Us",
    footer_news_title: "Travel Offers",
    footer_news_sub: "Get seasonal deals and new packages in your inbox.",
    footer_news_ph: "Your email address",
    footer_subscribe: "Subscribe",
    footer_news_done: "Subscribed! Watch your inbox for offers.",
    footer_rights: "© 2026 Shree Travels. All rights reserved.",
    footer_disclaimer: "Demo website — photos, videos, prices and details are placeholders. Replace them before going live.",

    wa_tooltip: "Chat with us",
    wa_default: "Hello Shree Travels! I'd like to enquire about a trip.",
    top_aria: "Back to top",
    lang_aria: "Switch language",
    menu_aria: "Toggle menu"
  },

  mr: {
    lang_name: "English",
    page_title: "श्री ट्रॅव्हल्स — कोल्हापुरातील कॅब, बस व टूर पॅकेजेस",

    topbar_offer: "तिरुपती, उटी, शिमला आणि बरेच काही — आजच बुकिंग करा! आम्हाला कॉल करा.",
    brand_tagline: "कोल्हापूर • २००८ पासून",

    nav_home: "मुख्यपृष्ठ",
    nav_services: "सेवा",
    nav_fleet: "वाहनताफा",
    nav_destinations: "ठिकाणे",
    nav_packages: "पॅकेजेस",
    nav_reviews: "अभिप्राय",
    nav_contact: "संपर्क",
    btn_book: "आत्ताच बुक करा",

    hero_badge: "कोल्हापूरचा विश्वासू प्रवास साथीदार",
    hero_title: "आराम आणि काळजीसह भारत फिरा",
    hero_sub: "कोल्हापुरातील स्थानिक स्थलदर्शनापासून ते तिरुपती, उटी, शिमला आणि त्यापुढेही — श्री ट्रॅव्हल्स तुम्हाला सुस्थितीतील बस व कारमधून सुरक्षित पोहोचवते.",
    hero_cta1: "कॉलबॅकची विनंती करा",
    hero_cta2: "पॅकेजेस पहा",
    hero_point1: "२४×७ सहाय्य",
    hero_point2: "अनुभवी चालक",
    hero_point3: "स्वच्छ वाहने",
    hero_scroll: "अधिक पाहण्यासाठी स्क्रोल करा",

    quick_title: "मोफत कॉलबॅक मिळवा",
    quick_sub: "तुमची माहिती द्या — आम्ही तुम्हाला परत कॉल करू.",

    stat1_label: "सेवेची वर्षे",
    stat2_label: "समाधानी प्रवासी",
    stat3_label: "प्रवासी ठिकाणे",
    stat4_label: "ताफ्यातील वाहने",

    services_kicker: "आम्ही काय देतो",
    services_title: "आमच्या प्रवास सेवा",
    services_sub: "पर्यटक, कुटुंबे, भाविक आणि गटांसाठी संपूर्ण प्रवास सेवा.",

    fleet_kicker: "आमचा ताफा",
    fleet_title: "प्रत्येक सहलीसाठी बस आणि कार",
    fleet_sub: "प्रशिक्षित व सौजन्यशील चालकांसह सुस्थितीतील, स्वच्छ वाहने.",
    tab_buses: "बस",
    tab_cars: "कार व व्हॅन",
    label_seats: "आसने",
    label_enquire: "चौकशी करा",

    gallery_kicker: "आम्ही कुठे जातो",
    gallery_title: "लोकप्रिय ठिकाणे",
    gallery_sub: "भारतभरातील आमच्या सहलींचे फोटो व व्हिडिओ. पाहण्यासाठी कोणत्याही कार्डवर क्लिक करा.",
    filter_all: "सर्व",
    filter_photos: "फोटो",
    filter_videos: "व्हिडिओ",
    video_badge: "व्हिडिओ",

    pkg_kicker: "टूर पॅकेजेस",
    pkg_title: "लोकप्रिय टूर पॅकेजेस",
    pkg_sub: "तयार सहली — किंवा तुमची कल्पना सांगा, आम्ही ती सानुकूल करू.",
    label_duration: "कालावधी",
    label_from: "पासून",
    label_highlights: "ठळक वैशिष्ट्ये",
    btn_enquire_now: "आत्ताच चौकशी करा",
    badge_popular: "लोकप्रिय",
    badge_bestseller: "बेस्टसेलर",
    pkg_note: "*प्रति व्यक्ती अंदाजे दर; हंगाम, मार्ग व गटसंख्येनुसार बदलू शकतो.",

    why_kicker: "श्री ट्रॅव्हल्स का?",
    why_title: "पूर्ण निश्चिंत मनाने प्रवास करा",
    why_sub: "भारतभर सोळा वर्षांचा आनंददायी प्रवास — तुम्ही यावर विश्वास ठेवू शकता.",

    rev_kicker: "अभिप्राय",
    rev_title: "आमचे प्रवासी काय म्हणतात",
    rev_sub: "आमच्यासोबत प्रवास केलेल्या कुटुंबांचे व गटांचे खरे अनुभव.",

    contact_kicker: "संपर्कात राहा",
    contact_title: "संपर्क व कॉलबॅक",
    contact_sub: "प्रश्न आहे किंवा बुकिंगसाठी तयार आहात? आम्हाला कॉल करा किंवा कॉलबॅकची विनंती करा, आमची टीम संपर्क करेल.",
    info_address_label: "आमच्याकडे या",
    info_address: "दुकान क्र. ५, स्टेशन रोड, सीबीएस जवळ, कोल्हापूर, महाराष्ट्र ४१६००१",
    info_phone_label: "कॉल / व्हॉट्सअ‍ॅप",
    info_email_label: "ईमेल",
    info_hours_label: "कार्यालयीन वेळ",
    info_hours: "सोम–रवि: सकाळी ८:०० – रात्री ९:००",

    form_title: "कॉलबॅकची विनंती करा",
    form_name: "तुमचे नाव",
    form_phone: "फोन नंबर",
    form_email: "ईमेल (ऐच्छिक)",
    form_destination: "ठिकाण / सेवा",
    form_dest_ph: "निवडा…",
    form_date: "प्रवासाची तारीख",
    form_people: "प्रवाशांची संख्या",
    form_message: "संदेश (ऐच्छिक)",
    form_submit: "कॉलबॅकची विनंती करा",
    form_or: "किंवा",
    form_whatsapp: "व्हॉट्सअ‍ॅपवर चॅट करा",
    form_success: "धन्यवाद! तुमची कॉलबॅक विनंती नोंदवली आहे. आमची टीम लवकरच तुम्हाला कॉल करेल.",
    form_err_name: "कृपया तुमचे नाव टाका.",
    form_err_phone: "कृपया वैध १० अंकी मोबाइल नंबर टाका.",
    map_title: "कोल्हापुरात आम्हाला शोधा",

    footer_about: "श्री ट्रॅव्हल्स ही कोल्हापूरस्थित प्रवास संस्था आहे, जी २००८ पासून स्थानिक कॅब, बस आणि भारतभर बाहेरगावी टूर पॅकेजेस देते.",
    footer_links: "जलद दुवे",
    footer_contact: "संपर्क",
    footer_follow: "आम्हाला फॉलो करा",
    footer_news_title: "प्रवास ऑफर्स",
    footer_news_sub: "हंगामी ऑफर्स व नवीन पॅकेजेस तुमच्या इनबॉक्समध्ये मिळवा.",
    footer_news_ph: "तुमचा ईमेल पत्ता",
    footer_subscribe: "सबस्क्राइब करा",
    footer_news_done: "सबस्क्राइब झाले! ऑफर्ससाठी तुमचा इनबॉक्स पाहा.",
    footer_rights: "© २०२६ श्री ट्रॅव्हल्स. सर्व हक्क राखीव.",
    footer_disclaimer: "डेमो वेबसाइट — फोटो, व्हिडिओ, दर व माहिती प्लेसहोल्डर आहेत. लाइव्ह करण्यापूर्वी ते बदला.",

    wa_tooltip: "आमच्याशी चॅट करा",
    wa_default: "नमस्कार श्री ट्रॅव्हल्स! मला सहलीबद्दल चौकशी करायची आहे.",
    top_aria: "वर जा",
    lang_aria: "भाषा बदला",
    menu_aria: "मेनू"
  }
};

/* ---------- dynamic card data (both languages inline) ---------- */
const DATA = {
  services: [
    { icon: "cab",     en: { t: "Local Cabs",            d: "City rides, station & airport pickups and full-day cab hire across Kolhapur." },
                       mr: { t: "स्थानिक कॅब",           d: "कोल्हापूरभर शहरातील प्रवास, स्टेशन व विमानतळ पिकअप आणि पूर्ण दिवस कॅब भाड्याने." } },
    { icon: "bus",     en: { t: "Sightseeing Buses",     d: "Local sightseeing and darshan trips around Kolhapur in comfortable buses." },
                       mr: { t: "स्थानिक सहल बस",        d: "कोल्हापूर परिसरातील स्थलदर्शन व दर्शन सहली आरामदायी बसमधून." } },
    { icon: "road",    en: { t: "Outstation Trips",      d: "Comfortable long-route travel to any city or state across India." },
                       mr: { t: "बाहेरगावी सहली",        d: "भारतातील कोणत्याही शहरात किंवा राज्यात आरामदायी लांब पल्ल्याचा प्रवास." } },
    { icon: "temple",  en: { t: "Pilgrimage Tours",      d: "Devotional tours to Tirupati, Pandharpur, Shirdi, Rameshwaram and more." },
                       mr: { t: "तीर्थयात्रा",           d: "तिरुपती, पंढरपूर, शिर्डी, रामेश्वरम आणि इतर तीर्थक्षेत्रांच्या भक्तिमय सहली." } },
    { icon: "group",   en: { t: "Group & Corporate",     d: "Weddings, school trips, office outings and large group bookings." },
                       mr: { t: "गट व कॉर्पोरेट",         d: "लग्नसमारंभ, शालेय सहली, ऑफिस आउटिंग आणि मोठ्या गटांचे बुकिंग." } },
    { icon: "transfer",en: { t: "Airport & Rail Transfers", d: "Punctual pickups and drops to airports and railway stations, day or night." },
                       mr: { t: "विमानतळ व रेल्वे पिकअप", d: "विमानतळ व रेल्वे स्थानकांवर वेळेवर पिकअप आणि ड्रॉप, दिवस असो वा रात्र." } }
  ],

  buses: [
    { img: "assets/img/bus-ac-sleeper.svg",  seats: "30+2",
      en: { t: "AC Sleeper Coach",   f: ["AC", "Sleeper Berths", "Charging Points", "Music System"] },
      mr: { t: "एसी स्लीपर कोच",     f: ["एसी", "स्लीपर बर्थ", "चार्जिंग पॉइंट्स", "म्युझिक सिस्टिम"] } },
    { img: "assets/img/bus-semi-sleeper.svg", seats: "40+2",
      en: { t: "Semi-Sleeper Bus",   f: ["Pushback Seats", "AC", "LCD Screen", "Curtains"] },
      mr: { t: "सेमी-स्लीपर बस",     f: ["पुशबॅक सीट्स", "एसी", "एलसीडी स्क्रीन", "पडदे"] } },
    { img: "assets/img/bus-mini.svg",         seats: "20",
      en: { t: "Mini Bus",           f: ["AC", "Compact", "City-Friendly", "GPS Tracked"] },
      mr: { t: "मिनी बस",            f: ["एसी", "छोटी", "शहरासाठी योग्य", "जीपीएस ट्रॅक्ड"] } },
    { img: "assets/img/bus-luxury.svg",       seats: "45",
      en: { t: "Luxury Volvo Coach", f: ["Volvo", "Wi-Fi", "Recliner Seats", "Ample Luggage"] },
      mr: { t: "लक्झरी व्होल्वो कोच", f: ["व्होल्वो", "वाय-फाय", "रिक्लायनर सीट्स", "भरपूर सामान जागा"] } }
  ],

  cars: [
    { img: "assets/img/car-sedan.svg", seats: "4",
      en: { t: "Sedan (Dzire / Etios)", f: ["AC", "Comfortable", "Economical", "GPS Tracked"] },
      mr: { t: "सेदान (डिझायर / इटिओस)", f: ["एसी", "आरामदायी", "किफायतशीर", "जीपीएस ट्रॅक्ड"] } },
    { img: "assets/img/car-suv.svg", seats: "6–7",
      en: { t: "SUV (Innova Crysta)", f: ["AC", "Spacious", "Premium", "Ample Luggage"] },
      mr: { t: "एसयूव्ही (इनोव्हा क्रिस्टा)", f: ["एसी", "प्रशस्त", "प्रीमियम", "भरपूर सामान जागा"] } },
    { img: "assets/img/car-tempo.svg", seats: "12–14",
      en: { t: "Tempo Traveller", f: ["AC", "Group Travel", "Pushback Seats", "Luggage Space"] },
      mr: { t: "टेम्पो ट्रॅव्हलर", f: ["एसी", "गट प्रवास", "पुशबॅक सीट्स", "सामानासाठी जागा"] } }
  ],

  gallery: [
    { img: "assets/img/dest-tirupati.svg",    type: "photo",
      en: { t: "Tirupati",     s: "Balaji Darshan Tours" }, mr: { t: "तिरुपती",     s: "बालाजी दर्शन सहली" } },
    { img: "assets/img/dest-southindia.svg",  type: "photo",
      en: { t: "South India",  s: "Temple Circuit" },       mr: { t: "दक्षिण भारत", s: "मंदिर परिक्रमा" } },
    { img: "assets/img/dest-bangalore.svg",   type: "photo",
      en: { t: "Bangalore",    s: "City & Mysore" },        mr: { t: "बंगळुरू",     s: "शहर व म्हैसूर" } },
    { img: "assets/img/dest-ooty.svg",        type: "photo",
      en: { t: "Ooty",         s: "Nilgiri Hills" },        mr: { t: "उटी",         s: "निलगिरी टेकड्या" } },
    { img: "assets/img/dest-northindia.svg",  type: "photo",
      en: { t: "North India",  s: "Golden Triangle" },      mr: { t: "उत्तर भारत",  s: "गोल्डन ट्रँगल" } },
    { img: "assets/img/dest-shimla.svg",      type: "photo",
      en: { t: "Shimla",       s: "Snow Getaways" },        mr: { t: "शिमला",       s: "बर्फाळ सहली" } },
    { img: "assets/img/video-tirupati.svg",   type: "video",
      en: { t: "Tirupati Yatra", s: "On the road to Balaji" }, mr: { t: "तिरुपती यात्रा", s: "बालाजीच्या वाटेवर" } },
    { img: "assets/img/video-ooty.svg",       type: "video",
      en: { t: "Ooty Hills Tour", s: "Through the Nilgiris" }, mr: { t: "उटी हिल्स टूर", s: "निलगिरीच्या वाटेवर" } },
    { img: "assets/img/video-shimla.svg",     type: "video",
      en: { t: "Shimla Snow Trip", s: "Winter wonderland" }, mr: { t: "शिमला बर्फ सहल", s: "बर्फाची सफर" } }
  ],

  packages: [
    { img: "assets/img/dest-tirupati.svg", price: "₹6,999", dest: "Tirupati", badge: "popular",
      en: { t: "Tirupati Balaji Darshan", dur: "3 Days / 2 Nights",
            h: ["Balaji Darshan assistance", "Padmavati Temple", "AC hotel stay", "Pickup from Kolhapur"] },
      mr: { t: "तिरुपती बालाजी दर्शन", dur: "३ दिवस / २ रात्री",
            h: ["बालाजी दर्शन सहाय्य", "पद्मावती मंदिर", "एसी हॉटेल निवास", "कोल्हापूरहून पिकअप"] } },
    { img: "assets/img/dest-southindia.svg", price: "₹18,999", dest: "South India", badge: "",
      en: { t: "South India Temple Tour", dur: "7 Days / 6 Nights",
            h: ["Rameshwaram", "Madurai Meenakshi", "Kanyakumari", "Trivandrum"] },
      mr: { t: "दक्षिण भारत मंदिर सहल", dur: "७ दिवस / ६ रात्री",
            h: ["रामेश्वरम", "मदुराई मीनाक्षी", "कन्याकुमारी", "त्रिवेंद्रम"] } },
    { img: "assets/img/dest-ooty.svg", price: "₹14,499", dest: "Ooty", badge: "bestseller",
      en: { t: "Ooty – Coorg Hill Special", dur: "5 Days / 4 Nights",
            h: ["Ooty toy train", "Coorg coffee estates", "Botanical Garden", "Waterfalls"] },
      mr: { t: "उटी – कूर्ग हिल स्पेशल", dur: "५ दिवस / ४ रात्री",
            h: ["उटी टॉय ट्रेन", "कूर्ग कॉफी मळे", "बॉटनिकल गार्डन", "धबधबे"] } },
    { img: "assets/img/dest-bangalore.svg", price: "₹11,999", dest: "Bangalore", badge: "",
      en: { t: "Bangalore – Mysore Getaway", dur: "4 Days / 3 Nights",
            h: ["Mysore Palace", "Brindavan Gardens", "City tour", "Chamundi Hills"] },
      mr: { t: "बंगळुरू – म्हैसूर सहल", dur: "४ दिवस / ३ रात्री",
            h: ["म्हैसूर पॅलेस", "वृंदावन गार्डन", "शहर सहल", "चामुंडी टेकडी"] } },
    { img: "assets/img/dest-northindia.svg", price: "₹21,999", dest: "North India", badge: "popular",
      en: { t: "North India Golden Triangle", dur: "6 Days / 5 Nights",
            h: ["Delhi sightseeing", "Taj Mahal, Agra", "Jaipur forts", "Local markets"] },
      mr: { t: "उत्तर भारत गोल्डन ट्रँगल", dur: "६ दिवस / ५ रात्री",
            h: ["दिल्ली दर्शन", "ताजमहाल, आग्रा", "जयपूर किल्ले", "स्थानिक बाजारपेठा"] } },
    { img: "assets/img/dest-shimla.svg", price: "₹19,499", dest: "Shimla", badge: "",
      en: { t: "Shimla – Manali Snow Escape", dur: "6 Days / 5 Nights",
            h: ["Mall Road, Shimla", "Solang Valley", "Rohtang (permit-based)", "Snow points"] },
      mr: { t: "शिमला – मनाली बर्फ सहल", dur: "६ दिवस / ५ रात्री",
            h: ["मॉल रोड, शिमला", "सोलंग व्हॅली", "रोहतांग (परवानगीनुसार)", "बर्फ पॉइंट्स"] } }
  ],

  why: [
    { icon: "driver",  en: { t: "Experienced Drivers", d: "Trained, verified and courteous drivers who know the routes." },
                       mr: { t: "अनुभवी चालक",         d: "प्रशिक्षित, पडताळणी केलेले व सौजन्यशील चालक ज्यांना मार्ग माहीत आहेत." } },
    { icon: "shield",  en: { t: "Well-Maintained Fleet", d: "Regularly serviced, clean and reliable vehicles." },
                       mr: { t: "सुस्थितीतील ताफा",     d: "नियमित सर्व्हिस केलेली, स्वच्छ व विश्वासार्ह वाहने." } },
    { icon: "rupee",   en: { t: "Transparent Pricing", d: "Clear, upfront fares with no hidden charges." },
                       mr: { t: "पारदर्शक दर",          d: "स्पष्ट व आगाऊ दर, कोणतेही छुपे शुल्क नाही." } },
    { icon: "clock",   en: { t: "24×7 Support",        d: "Reach us any time before and during your trip." },
                       mr: { t: "२४×७ सहाय्य",          d: "सहलीपूर्वी व दरम्यान कधीही आमच्याशी संपर्क साधा." } },
    { icon: "map",     en: { t: "Custom Itineraries",  d: "Trips planned exactly the way you want them." },
                       mr: { t: "सानुकूल सहली",         d: "तुम्हाला हवं अगदी तसं नियोजन केलेल्या सहली." } },
    { icon: "leaf",    en: { t: "Safe & Sanitised",    d: "Sanitised vehicles and a safety-first approach to driving." },
                       mr: { t: "सुरक्षित व स्वच्छ",    d: "स्वच्छ वाहने आणि सुरक्षिततेला प्राधान्य देणारी वाहतूक." } }
  ],

  reviews: [
    { en: { q: "We booked the Tirupati package for our family. Clean bus, polite driver and everything on time. Highly recommended!", n: "Suresh Patil", c: "Kolhapur" },
      mr: { q: "आम्ही कुटुंबासाठी तिरुपती पॅकेज बुक केलं. स्वच्छ बस, सौजन्यशील चालक आणि सर्व काही वेळेवर. नक्की सुचवेन!", n: "सुरेश पाटील", c: "कोल्हापूर" } },
    { en: { q: "Our Ooty trip was wonderful. The car was comfortable and the driver knew all the best spots.", n: "Priya Deshmukh", c: "Sangli" },
      mr: { q: "आमची उटी सहल अप्रतिम होती. कार आरामदायी होती आणि चालकाला सर्व उत्तम ठिकाणे माहीत होती.", n: "प्रिया देशमुख", c: "सांगली" } },
    { en: { q: "Booked a mini bus for a family wedding. Great service at a fair price. Will definitely book again.", n: "Imran Shaikh", c: "Ichalkaranji" },
      mr: { q: "कौटुंबिक लग्नासाठी मिनी बस बुक केली. वाजवी दरात उत्तम सेवा. नक्कीच पुन्हा बुक करेन.", n: "इम्रान शेख", c: "इचलकरंजी" } }
  ]
};
