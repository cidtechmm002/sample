import treatmentNose from "@/assets/treatment-nose.jpg";
import treatmentEyes from "@/assets/treatment-eyes.jpg";
import treatmentFace from "@/assets/treatment-face.jpg";
import treatmentBody from "@/assets/treatment-body.jpg";
import treatmentSkin from "@/assets/treatment-skin.jpg";
import treatmentLipo from "@/assets/treatment-lipo.jpg";

export const CLINIC = {
  name: "SMILE Plastic Surgery",
  tagline: "Elevating Beauty With Precision & Care",
  myanmar: "တိကျမှုနှင့် ဂရုစိုက်မှုဖြင့် အလှအပကို မြှင့်တင်ပါသည်",
  phone: "+95 9 123 456 789",
  email: "hello@smileplasticsurgery.mm",
  address: "No. 88, Pyay Road, Bahan Township, Yangon",
  hours: "Mon – Sat · 09:00 – 18:00",
};

export const STATS = [
  { value: "8+", label: "Years of Practice" },
  { value: "3,000+", label: "Procedures" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "12", label: "Board-Certified Specialists" },
];

export type Treatment = {
  slug: string;
  name: string;
  myanmar: string;
  category: "Face" | "Eyes" | "Nose" | "Body" | "Skin";
  image: string;
  duration: string;
  recovery: string;
  price: string;
  blurb: string;
  benefits: string[];
  procedure: string;
  faq: { q: string; a: string }[];
};

export const TREATMENTS: Treatment[] = [
  {
    slug: "rhinoplasty",
    name: "Rhinoplasty",
    myanmar: "နှာခေါင်းပြုပြင်ခြင်း",
    category: "Nose",
    image: treatmentNose,
    duration: "2 – 4 hrs",
    recovery: "7 – 14 days",
    price: "From $2,800",
    blurb: "Refining the nose to harmonize with your natural features.",
    benefits: [
      "Customized to facial proportions",
      "Improved breathing function",
      "Minimal-incision techniques",
      "Long-lasting natural results",
    ],
    procedure:
      "Performed under general anesthesia using closed or open techniques, depending on the desired outcome. Surgery typically lasts two to four hours with a discreet recovery suite stay.",
    faq: [
      { q: "When can I return to work?", a: "Most clients return after 10–14 days." },
      { q: "Is the result permanent?", a: "Yes — once healing completes, results are lifelong." },
    ],
  },
  {
    slug: "double-eyelid",
    name: "Double Eyelid",
    myanmar: "မျက်ခွံနှစ်ထပ်ပြုပြင်ခြင်း",
    category: "Eyes",
    image: treatmentEyes,
    duration: "45 – 90 min",
    recovery: "5 – 7 days",
    price: "From $1,200",
    blurb: "Soft, defined eyes through incisional or non-incisional methods.",
    benefits: ["Natural defined crease", "Brighter, more open look", "Minimal scarring", "Tailored fold height"],
    procedure: "Performed under local anesthesia with sedation. Discreet sutures are removed within a week.",
    faq: [
      { q: "Incision or non-incision?", a: "Our surgeon recommends the right method based on tissue analysis." },
      { q: "Is bruising visible?", a: "Mild bruising fades within 5–7 days." },
    ],
  },
  {
    slug: "face-contouring",
    name: "Face Contouring",
    myanmar: "မျက်နှာပုံစံပြုပြင်ခြင်း",
    category: "Face",
    image: treatmentFace,
    duration: "1 – 3 hrs",
    recovery: "10 – 21 days",
    price: "From $3,400",
    blurb: "Sculpted jawline and cheek architecture for refined elegance.",
    benefits: ["Slimmer V-line", "Defined cheekbones", "Symmetric proportions", "Lasting transformation"],
    procedure: "Combines bone contouring, buccal fat removal and fillers in a single session under general anesthesia.",
    faq: [
      { q: "Will it look natural?", a: "We design to preserve your individual character." },
      { q: "Can I eat normally after?", a: "Soft diet for 7 days, normal diet from day 14." },
    ],
  },
  {
    slug: "breast-surgery",
    name: "Breast Surgery",
    myanmar: "ရင်အလှပြုပြင်ခြင်း",
    category: "Body",
    image: treatmentBody,
    duration: "2 – 3 hrs",
    recovery: "14 – 21 days",
    price: "From $4,200",
    blurb: "Augmentation, lift and reshaping with motiva implants.",
    benefits: ["Premium ergonomic implants", "Sub-fascial placement", "Hidden incision", "Soft natural movement"],
    procedure: "Performed under general anesthesia with an overnight stay in our recovery suite.",
    faq: [
      { q: "How long do implants last?", a: "Modern implants are designed for lifetime use." },
      { q: "Scar visibility?", a: "Hidden in the inframammary fold, fades over 12 months." },
    ],
  },
  {
    slug: "liposuction",
    name: "Liposuction",
    myanmar: "အဆီစုပ်ထုတ်ခြင်း",
    category: "Body",
    image: treatmentLipo,
    duration: "1 – 4 hrs",
    recovery: "7 – 14 days",
    price: "From $2,600",
    blurb: "VASER ultrasound-assisted body sculpting for precise definition.",
    benefits: ["Smooth refined silhouette", "Skin tightening effect", "Minimal downtime", "Permanent fat removal"],
    procedure: "Tumescent VASER liposuction under twilight sedation, returning home the same day.",
    faq: [
      { q: "Is it permanent?", a: "Fat cells removed do not return with stable weight." },
      { q: "Compression garment?", a: "Worn for 4 weeks for optimal contour." },
    ],
  },
  {
    slug: "skin-rejuvenation",
    name: "Skin Rejuvenation",
    myanmar: "အသားအရေပြုပြင်ခြင်း",
    category: "Skin",
    image: treatmentSkin,
    duration: "30 – 60 min",
    recovery: "0 – 3 days",
    price: "From $480",
    blurb: "Laser, exosome and bio-stimulator protocols for luminous skin.",
    benefits: ["Radiant tone", "Reduced pores & lines", "Even pigment", "No surgical downtime"],
    procedure: "Customized in-clinic protocol combining laser, micro-needling and topical exosomes.",
    faq: [
      { q: "How many sessions?", a: "A series of 3–6 sessions for transformative results." },
      { q: "Maintenance?", a: "Quarterly touch-ups maintain the glow." },
    ],
  },
];

export const TIMELINE = [
  { year: "2015", title: "Graduation", detail: "Doctor of Medicine, University of Medicine 1, Yangon" },
  { year: "2017", title: "Fellowship", detail: "Plastic Surgery Fellowship, Seoul National University" },
  { year: "2018", title: "International Training", detail: "Advanced Aesthetic Surgery, JK Plastic Surgery, Korea" },
  { year: "2020", title: "Board Certification", detail: "Diplomate, International Society of Aesthetic Plastic Surgery" },
  { year: "2023", title: "SMILE Plastic Surgery", detail: "Founded the clinic with a vision of refined, ethical aesthetics" },
];

export const TESTIMONIALS = [
  { name: "Hnin Ei", role: "Yangon", quote: "The team treated me with such care. My results feel like a more confident version of me." },
  { name: "Phyu Phyu", role: "Mandalay", quote: "Truly the most professional clinic I have visited. Every detail was considered." },
  { name: "May Thu", role: "Singapore", quote: "Travelled from abroad — worth every mile. Natural, elegant outcome." },
  { name: "Su Lwin", role: "Bangkok", quote: "From consultation to recovery, the experience was unmatched." },
];
