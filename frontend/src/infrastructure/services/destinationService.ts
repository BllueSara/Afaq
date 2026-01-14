import { Destination } from '@/domain/entities/Destination';
import { Region } from '@/domain/entities/Region';
import { Language } from '@/domain/entities/Language';
import dareahImage from '@/assets/dareah.jpeg';
import ulaImage from '@/assets/ula.jpeg';
import albaladImage from '@/assets/albalad.jpeg';
import rjalalmaImage from '@/assets/rjalalma3.jpeg';

// Mock data - في المستقبل سيتم استبدالها بـ API calls
const destinationsData: Record<string, Destination> = {
  '1': {
    id: '1',
    title: 'حي الطريف',
    region: Region.NAJD,
    location: 'الدرعية، الرياض',
    imageUrl: dareahImage,
    heroImageUrl: dareahImage,
    heroSubtitle: 'مسقط رأس الدولة السعودية الأولى. شاهد عظمة البناء بالطين حيث بدأت قصة وطن، والتي تم ترميمها بدقة ليشهدها العالم.',
    quote: 'إرث محفور في الطين، يهمس بقصص الصمود والوحدة عبر القرون.',
    description:
      'تجول في الممرات المتعرجة حيث يهمس التاريخ من الجدران. حي الطريف ليس مجرد أطلال؛ إنه الذاكرة الحية لنشأة أمة، تم ترميمه بدقة المتاحف. كل زاوية تكشف فصلاً من تراث المملكة الغني.',
    timeline: [
      {
        year: '1446',
        title: 'التأسيس',
        description: 'مانع المريدي يصل من الشرق ويؤسس الدرعية، واضعاً اللبنات الأولى لما سيصبح عاصمة هائلة.',
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuA4xfXaEZ9FHr6ZHzCutSws4c2iT_togaaWMvf0JrObDr_BPS4E12TrEC_147a3i_B_1XaVDHmIwrlEYBR3hDc-uCLmtx49NOGk0MZHu05ncYA95i-rqFjZ1qwlgOcj6Ilxr6EV0zaOoNJRwkkhfCPnfHC6GqGhIHuTmrgSjQu5HNB2rzY5r7LmwMqO9FCsfVvxuzASzXpZkGNK7Awk13Uu1ZobTxg-Sd-tNC8f_DHzT9RJ63R3hyoHItlDHS-Ykl0gA45UiffYUQ',
      },
      {
        year: '1727',
        title: 'تأسيس الدولة',
        description: 'الإمام محمد بن سعود يؤسس الدولة السعودية الأولى، وتصبح الدرعية عاصمتها ومركزاً للثقافة والتجارة.',
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuA7J3PsfDiUK2qvz4O6mJj1woh4QrDhLSlUJTOqCY7-GqKKBHEkkEpQEy-fHMyN-51UUgRzjJHjQ6wevcgtXt2QAE1tOQECHtC2AZA3b9z2jKpkunZgIG1bOKvxRYthAbleTIi7sF3vqMygHbl6I4kG94xHuHcHwpxvQoegYiFQ39LLMrkHXC8MJIuTQojr2Fiy95iGKs6iQGkRqp3ovI0Mk7fuwZxmvqTqqMrqcLFXo7D_2turUs-cs1iH2wn3TnG68B1Nb14OLQ',
      },
      {
        year: '2010',
        title: 'تراث اليونسكو',
        description: 'حي الطريف يُسجل كموقع تراث عالمي لليونسكو، تقديراً لقيمته العالمية الاستثنائية.',
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDSLD6a4IqIMFqM1eUhj7CNtLGGajkdmWCc78wl3spjUFHZJH_8FKYtUaXAj_GACnSaoetPxsZN8gqqhGiT6PHnsFNQOllzSrEDLdhX6fCoo8uKk7M5uX9_fo6N3aRsDhJV24TXFzNR7xsngaI1I6Q6xnV_QvjmAPLG4o-2Sbexc0lvGiX6auZzqy7MmhzBbADaJwoosNKiFUeRIk8djI78spf2PlKSSpViVAYsgF4x7UnmS8uxMkpesZc2wFv7ms-h1AaS9UygVg',
      },
    ],
    nearbyPlaces: [
      {
        id: '1',
        name: 'مطعم تكية',
        type: 'restaurant',
        distance: '0.4 كم',
        description: 'مأكولات سعودية بلمسة عصرية.',
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDsm-pCnaNK3Lnq4Fm9FzvRHhRfPy_8egR9GRSxO-70mwZSRfMvXjgyVYCmnn9mja6AtDPsS-1hrQZlIi5TuaucKh0yX9kxPT-wS_gzpxUwXUrXRHkOKEOOcH1GWFhLyXPwXjXXQpfML0q3x5LkaRUpBWC5Q_YNmFPhvuvR_wfcnqyFmbJl_-w1rx8vGoIlLktZ-dKSC4m0B1J9sdsfc_g6Zb-9nrtd7MvGANmuzNOb1nP_pOcwV0bykH0XC4UVa4Ir4HEpHidCLg',
        rating: 4.5,
        reviewCount: 128,
      },
      {
        id: '2',
        name: 'مطل البجيري',
        type: 'restaurant',
        distance: '0.2 كم',
        description: 'تجارب طعام عالمية مع إطلالات على حي الطريف.',
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCcYIfsJ0C1oL919iM6NLfA3QqplZOQBoU98pzi6OQnrncZe5HrCRMBBY5F3P7GU1y3SYrzq90jYn4BxDzjLTTVZtr-4Yrwrp-ryAWdYJ1Qb-9oL8YxPzlnZDg0l4IWu6jGSl3a-gzZ6jDO7hwq_DWiec8566JtoIlK4WDR151YEkpE1kYwpUwFgzxMtNm8oSExE39gN30FTkLITi7hRDUDqqImumeUlxKjgQKhZE3yPB1JGchuC8IKp-PBD1Hfs_6KlOuOrnRXCw',
        rating: 5.0,
        reviewCount: 520,
      },
      {
        id: '3',
        name: 'متحف الدرعية',
        type: 'museum',
        distance: '0.1 كم',
        description: 'معارض تفاعلية تعرض تاريخ آل سعود.',
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBh0Hyy3GneC0RnQbNSLKejmg_2KxFKJN0L6_eh7U2mDCrGAOKrIo88xFC-ZTh-KaUgKzX5cGEtbNsBCzCsRN-W4UuOcXvO71T3bGh18PcxEIAEh8TPG-gTbZ05AbukSdhd9dIn_4xA5SH1B-x8vE6UCG0qxbkQbYQZ9TExU82x0wG-T2HgOu64JNCEQymdiQd6nCDbQGpVu0azIrJfdPTgmSBbLzHxoVymS4MOV0TPDdz_KXj-g-ji9sYbkXzntax3GMSDt-QTCQ',
        rating: 4.0,
        reviewCount: 89,
      },
    ],
    workingHours: [
      { day: 'الأحد - الأربعاء', hours: '10:00 صباحاً - 12:00 منتصف الليل' },
      { day: 'الخميس', hours: '10:00 صباحاً - 01:00 صباحاً' },
      { day: 'الجمعة - السبت', hours: '10:00 صباحاً - 01:00 صباحاً', isHighlighted: true },
    ],
    tickets: [
      {
        type: 'دخول عام',
        price: '50 ر.س',
        note: '*مجاناً للأطفال دون 12 عاماً',
      },
    ],
    mapImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDTUJwOUaPQ6raMsF3fluwwmKSu_xyX6zawZuJamMSfHDraU8mxRDrqkmeMbEiCE8CZP3Cop5Dz2NbuI28cxbI5MtkHk5XPfq1Sutoz4Y7XSVziDJo5IelNO6HHYhxpr1LiWgPEZKon3WdIb7LaN063r-toilzB0ClXoJdp6Yy0BI8lIy6166utIqRFzAInmxlEK_Y-J5-vFx_XQyJgclQ0BiVfsFNa386VkmaPSIGqlQhQp_PApCEG6M_CDxnzJOpI6L0QTLwuIA',
    mapLocation: 'حي الطريف، الدرعية',
  },
  
  // مثال: إضافة مكان جديد - مدائن صالح
  '2': {
    id: '2',
    title: 'مدائن صالح',
    region: Region.HEJAZ,
    location: 'العلا، منطقة المدينة المنورة',
    imageUrl: ulaImage,
    heroImageUrl: ulaImage,
    heroSubtitle: 'رحلة عبر الزمن إلى قلب الحضارة النبطية، حيث تحكي الصخور المنحوتة قصص ألفي عام من التاريخ في العلا.',
    quote: 'حيث نحتت الصخور قصص حضارة عظيمة، ووقفت شامخة عبر آلاف السنين.',
    description:
      'مدائن صالح، أو الحجر كما كانت تُعرف قديماً، هي شاهد حي على عظمة الحضارة النبطية. هذه المدينة الأثرية الفريدة تحكي قصة شعب استطاع أن يبني إمبراطورية تجارية عظيمة في قلب الصحراء، تاركاً وراءه إرثاً معمارياً مذهلاً لا يزال يذهل العالم حتى اليوم.',
    timeline: [
      {
        year: '100 ق.م',
        title: 'التأسيس النبطي',
        description: 'تأسست مدائن صالح كمركز تجاري مهم على طريق البخور، تربط شبه الجزيرة العربية ببلاد الشام.',
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuC0C3XiNWq5K2GV8UQO74BcRIywVshCSeBWlgAlz-h5VL5E1nLxfmmog9AKwTv_XGCEeKLuWjWWS0uoJe3g1ygbZwUHtd0zm1xw8h9IzAplzTfELTz6SXOhNg8YFoSs8aiXXjchsftYT4HyI6XPLQo0ujzNXbhMDrRJCRMte5ckZOoUX9Gx9dN2X8W6bcGBg8Z66KSDgiHd_0NSVZMz7nnPfMPpODNNONlmmP2AHHFpZuN_or4eQHApgC8i100fmyik7j8ZBPvm6aNV',
      },
      {
        year: '106 م',
        title: 'الضم الروماني',
        description: 'أصبحت جزءاً من الإمبراطورية الرومانية بعد سقوط المملكة النبطية، لكنها حافظت على هويتها الثقافية.',
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuC0C3XiNWq5K2GV8UQO74BcRIywVshCSeBWlgAlz-h5VL5E1nLxfmmog9AKwTv_XGCEeKLuWjWWS0uoJe3g1ygbZwUHtd0zm1xw8h9IzAplzTfELTz6SXOhNg8YFoSs8aiXXjchsftYT4HyI6XPLQo0ujzNXbhMDrRJCRMte5ckZOoUX9Gx9dN2X8W6bcGBg8Z66KSDgiHd_0NSVZMz7nnPfMPpODNNONlmmP2AHHFpZuN_or4eQHApgC8i100fmyik7j8ZBPvm6aNV',
      },
      {
        year: '2008',
        title: 'تراث اليونسكو',
        description: 'تم تسجيل مدائن صالح كأول موقع تراث عالمي في السعودية من قبل منظمة اليونسكو.',
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuC0C3XiNWq5K2GV8UQO74BcRIywVshCSeBWlgAlz-h5VL5E1nLxfmmog9AKwTv_XGCEeKLuWjWWS0uoJe3g1ygbZwUHtd0zm1xw8h9IzAplzTfELTz6SXOhNg8YFoSs8aiXXjchsftYT4HyI6XPLQo0ujzNXbhMDrRJCRMte5ckZOoUX9Gx9dN2X8W6bcGBg8Z66KSDgiHd_0NSVZMz7nnPfMPpODNNONlmmP2AHHFpZuN_or4eQHApgC8i100fmyik7j8ZBPvm6aNV',
      },
    ],
    nearbyPlaces: [
      {
        id: '1',
        name: 'متحف العلا',
        type: 'museum',
        distance: '15 كم',
        description: 'معرض شامل لتاريخ المنطقة والحضارات القديمة.',
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuC0C3XiNWq5K2GV8UQO74BcRIywVshCSeBWlgAlz-h5VL5E1nLxfmmog9AKwTv_XGCEeKLuWjWWS0uoJe3g1ygbZwUHtd0zm1xw8h9IzAplzTfELTz6SXOhNg8YFoSs8aiXXjchsftYT4HyI6XPLQo0ujzNXbhMDrRJCRMte5ckZOoUX9Gx9dN2X8W6bcGBg8Z66KSDgiHd_0NSVZMz7nnPfMPpODNNONlmmP2AHHFpZuN_or4eQHApgC8i100fmyik7j8ZBPvm6aNV',
        rating: 4.7,
        reviewCount: 245,
      },
      {
        id: '2',
        name: 'مطعم العلا التراثي',
        type: 'restaurant',
        distance: '12 كم',
        description: 'مأكولات محلية أصيلة في أجواء تراثية.',
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuC0C3XiNWq5K2GV8UQO74BcRIywVshCSeBWlgAlz-h5VL5E1nLxfmmog9AKwTv_XGCEeKLuWjWWS0uoJe3g1ygbZwUHtd0zm1xw8h9IzAplzTfELTz6SXOhNg8YFoSs8aiXXjchsftYT4HyI6XPLQo0ujzNXbhMDrRJCRMte5ckZOoUX9Gx9dN2X8W6bcGBg8Z66KSDgiHd_0NSVZMz7nnPfMPpODNNONlmmP2AHHFpZuN_or4eQHApgC8i100fmyik7j8ZBPvm6aNV',
        rating: 4.5,
        reviewCount: 189,
      },
    ],
    workingHours: [
      { day: 'الأحد - الخميس', hours: '8:00 صباحاً - 5:00 مساءً' },
      { day: 'الجمعة - السبت', hours: '9:00 صباحاً - 6:00 مساءً', isHighlighted: true },
    ],
    tickets: [
      {
        type: 'دخول عام',
        price: '75 ر.س',
        note: '*يشمل الجولة الإرشادية',
      },
      {
        type: 'طلاب',
        price: '50 ر.س',
        note: '*بإثبات الهوية الطلابية',
      },
    ],
    mapImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC0C3XiNWq5K2GV8UQO74BcRIywVshCSeBWlgAlz-h5VL5E1nLxfmmog9AKwTv_XGCEeKLuWjWWS0uoJe3g1ygbZwUHtd0zm1xw8h9IzAplzTfELTz6SXOhNg8YFoSs8aiXXjchsftYT4HyI6XPLQo0ujzNXbhMDrRJCRMte5ckZOoUX9Gx9dN2X8W6bcGBg8Z66KSDgiHd_0NSVZMz7nnPfMPpODNNONlmmP2AHHFpZuN_or4eQHApgC8i100fmyik7j8ZBPvm6aNV',
    mapLocation: 'مدائن صالح، العلا',
  },
  '3': {
    id: '3',
    title: 'حي البلد',
    region: Region.HEJAZ,
    location: 'حي البلد، جدة',
    imageUrl: albaladImage,
    heroImageUrl: albaladImage,
    heroSubtitle:
      'قلب جدة التاريخي حيث تختلط رائحة البحر مع مآذن المساجد وواجهات البيوت الخشبية القديمة.',
    quote: 'في أزقة البلد، كل شرفة وكل باب يحكيان فصلاً من حكاية الحجاز.',
    description:
      'حي البلد التاريخي في جدة هو بوابة الحجاز البحرية القديمة، بمنازله العتيقة ذات الرواشين الخشبية الملونة وأسواقه الشعبية التي ازدحمت لعقود بالحجاج والتجار من كل أنحاء العالم. بين أزقته الضيقة ومساجده التاريخية، ما زال الحي ينبض بروح البحر الأحمر وثقافة جدة الأصيلة.',
    timeline: [
      {
        year: 'القرن 7 م',
        title: 'بوابة الحجاز البحرية',
        description: 'جدة تتحول إلى ميناء رئيسي لاستقبال حجاج البحر القادمين إلى مكة المكرمة.',
        imageUrl:
          'https://images.pexels.com/photos/15692814/pexels-photo-15692814.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
      {
        year: '1900',
        title: 'ازدهار البيوت التاريخية',
        description: 'تشييد البيوت المزخرفة بالرواشين الخشبية التي أصبحت أيقونة معمارية للحجاز.',
        imageUrl:
          'https://images.pexels.com/photos/15692806/pexels-photo-15692806.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
      {
        year: '2014',
        title: 'تراث عالمي',
        description: 'تسجيل جدة التاريخية (البلد) في قائمة التراث العالمي لليونسكو.',
        imageUrl:
          'https://images.pexels.com/photos/15692813/pexels-photo-15692813.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
    ],
    nearbyPlaces: [
      {
        id: '1',
        name: 'سوق العلوي',
        type: 'attraction',
        distance: '0.2 كم',
        description: 'أحد أقدم الأسواق الشعبية في جدة، يعرض البضائع التقليدية والهدايا.',
        imageUrl:
          'https://images.pexels.com/photos/3738836/pexels-photo-3738836.jpeg?auto=compress&cs=tinysrgb&w=1200',
        rating: 4.6,
        reviewCount: 320,
      },
      {
        id: '2',
        name: 'مسجد الشافعي',
        type: 'attraction',
        distance: '0.3 كم',
        description: 'من أقدم مساجد جدة بني على الطراز الحجازي التقليدي.',
        imageUrl:
          'https://images.pexels.com/photos/3738834/pexels-photo-3738834.jpeg?auto=compress&cs=tinysrgb&w=1200',
        rating: 4.8,
        reviewCount: 210,
      },
    ],
    workingHours: [
      { day: 'الأحد - الخميس', hours: '9:00 صباحاً - 11:00 مساءً' },
      { day: 'الجمعة', hours: '4:00 مساءً - 11:00 مساءً' },
      { day: 'السبت', hours: '9:00 صباحاً - 11:00 مساءً', isHighlighted: true },
    ],
    tickets: [
      {
        type: 'دخول المنطقة',
        price: 'مجاناً',
        note: '*قد تُطبق رسوم على بعض المتاحف والجولات الخاصة',
      },
    ],
    mapImageUrl: 'https://images.pexels.com/photos/15692809/pexels-photo-15692809.jpeg?auto=compress&cs=tinysrgb&w=1200',
    mapLocation: 'حي البلد، جدة',
  },
  'rijal-alma': {
    id: 'rijal-alma',
    title: 'قرية رجال ألمع',
    region: Region.ASIR,
    location: 'رجال ألمع، عسير',
    imageUrl: rjalalmaImage,
    heroImageUrl: rjalalmaImage,
    heroSubtitle:
      'قرية جبلية تاريخية تتدرج بيوتها الحجرية على سفوح الجبال الخضراء جنوب غرب المملكة.',
    quote: 'في رجال ألمع، الجدران الملوّنة تحكي قصص الجبال والضباب والضيافة الجنوبية.',
    description:
      'تقع قرية رجال ألمع في قلب جبال السروات، وتُعد واحدة من أجمل القرى التراثية في المملكة. تمتاز ببيوتها الحجرية متعددة الطوابق المزينة بالنقوش البيضاء، وبموقعها الذي كان نقطة تجارية مهمة بين تهامة وعسير. اليوم، تحولت القرية إلى متحف مفتوح يعكس تراث المنطقة المعماري والثقافي.',
    timeline: [
      {
        year: 'القرن 10 م',
        title: 'مركز تجاري جبلي',
        description: 'تحولت القرية إلى محطة رئيسية على طرق التجارة بين اليمن والحجاز.',
        imageUrl:
          'https://images.pexels.com/photos/15212982/pexels-photo-15212982.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
      {
        year: '1400 هـ',
        title: 'إحياء التراث',
        description: 'انطلاق مبادرات لترميم البيوت التاريخية وتحويلها إلى متاحف ومعارض تراثية.',
        imageUrl:
          'https://images.pexels.com/photos/15212985/pexels-photo-15212985.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
    ],
    nearbyPlaces: [
      {
        id: '1',
        name: 'متحف رجال ألمع',
        type: 'museum',
        distance: 'داخل القرية',
        description: 'متحف يوثّق تاريخ القرية والأزياء والأسلحة والمقتنيات التراثية.',
        imageUrl:
          'https://images.pexels.com/photos/15212988/pexels-photo-15212988.jpeg?auto=compress&cs=tinysrgb&w=1200',
        rating: 4.7,
        reviewCount: 180,
      },
    ],
    workingHours: [
      { day: 'الأحد - الأربعاء', hours: '9:00 صباحاً - 6:00 مساءً' },
      { day: 'الخميس - السبت', hours: '9:00 صباحاً - 8:00 مساءً', isHighlighted: true },
    ],
    tickets: [
      {
        type: 'دخول عام',
        price: '30 ر.س',
        note: '*مجاناً للأطفال دون 10 أعوام',
      },
    ],
    mapImageUrl:
      'https://images.pexels.com/photos/15212981/pexels-photo-15212981.jpeg?auto=compress&cs=tinysrgb&w=1200',
    mapLocation: 'قرية رجال ألمع، عسير',
  },
  'al-ahsa-oasis': {
    id: 'al-ahsa-oasis',
    title: 'واحة الأحساء',
    region: Region.EASTERN,
    location: 'واحة الأحساء، المنطقة الشرقية',
    imageUrl:
      'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1200',
    heroImageUrl:
      'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1200',
    heroSubtitle:
      'واحة نخيل مترامية الأطراف وعيون ماء طبيعية تشكل واحدة من أقدم التجمعات الزراعية في العالم.',
    quote: 'في ظلال نخيل الأحساء تنسج حكايات الماء والصحراء والتجارة القديمة.',
    description:
      'تُعد واحة الأحساء أكبر واحة نخيل على وجه الأرض وواحدة من أهم مواقع التراث العالمي في المملكة. تمتاز بمئات الآلاف من أشجار النخيل، والعيون الطبيعية، والأسواق الشعبية، والبيوت الطينية التاريخية التي تعكس عمق التراث في المنطقة الشرقية.',
    timeline: [
      {
        year: 'الألفية الأولى قبل الميلاد',
        title: 'مفترق طرق حضارية',
        description: 'الأحساء موقع استراتيجي على طرق التجارة القديمة بين الشرق والغرب.',
        imageUrl:
          'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
      {
        year: '2018',
        title: 'تراث عالمي',
        description: 'تسجيل واحة الأحساء في قائمة التراث العالمي لليونسكو.',
        imageUrl:
          'https://images.pexels.com/photos/1301855/pexels-photo-1301855.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
    ],
    nearbyPlaces: [
      {
        id: '1',
        name: 'سوق القيصرية',
        type: 'attraction',
        distance: '2 كم',
        description: 'سوق تاريخي مغطى يعد من أقدم الأسواق في الخليج العربي.',
        imageUrl:
          'https://images.pexels.com/photos/3738836/pexels-photo-3738836.jpeg?auto=compress&cs=tinysrgb&w=1200',
        rating: 4.6,
        reviewCount: 260,
      },
    ],
    workingHours: [
      { day: 'الأحد - الخميس', hours: '8:00 صباحاً - 6:00 مساءً' },
      { day: 'الجمعة - السبت', hours: '9:00 صباحاً - 7:00 مساءً', isHighlighted: true },
    ],
    tickets: [
      {
        type: 'دخول المواقع العامة',
        price: 'مجاناً',
      },
    ],
    mapImageUrl:
      'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1200',
    mapLocation: 'واحة الأحساء، المنطقة الشرقية',
  },
  
  // يمكن إضافة أماكن أخرى هنا
};

export const getDestinationById = async (id: string, _language: Language = Language.AR): Promise<Destination> => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 300));

  const destination = destinationsData[id];
  if (!destination) {
    throw new Error(`Destination with id ${id} not found`);
  }

  // في المستقبل، هنا سيتم تطبيق الترجمة بناءً على اللغة
  return destination;
};

export const getAllDestinations = async (_language: Language = Language.AR): Promise<Destination[]> => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 300));

  return Object.values(destinationsData);
};
