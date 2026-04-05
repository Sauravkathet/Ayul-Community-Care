import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Structured translation resources prioritizing English, with functional placeholders for others
const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About Us',
        services: 'Services',
        contact: 'Contact',
      },
      hero: {
        title: 'Empowering Lives Through Compassionate Care',
        subtitle: 'Dedicated NDIS support services in Melbourne, helping you achieve your goals and live independently with dignity and respect.',
        getStarted: 'Get Started',
        contactUs: 'Contact Us',
      },
      common: {
        readMore: 'Read More',
        submit: 'Submit',
        sending: 'Sending...',
        success: 'Success!',
        error: 'Error',
      }
    }
  },
  hi: {
    translation: {
      nav: { home: 'मुख्य पृष्ठ', about: 'हमारे बारे में', services: 'सेवाएं', contact: 'संपर्क करें' },
      hero: { title: 'करुणामय देखभाल के माध्यम से जीवन को सशक्त बनाना', subtitle: 'मेलबर्न में समर्पित NDIS सहायता सेवाएं...', getStarted: 'शुरू करें', contactUs: 'संपर्क करें' },
      common: { readMore: 'और पढ़ें', submit: 'जमा करें', sending: 'भेजा जा रहा है...', success: 'सफलता!', error: 'त्रुटि' }
    }
  },
  zh: {
    translation: {
      nav: { home: '首页', about: '关于我们', services: '服务', contact: '联系我们' },
      hero: { title: '用富有同情心的关怀赋能生命', subtitle: '墨尔本的专业 NDIS 支持服务...', getStarted: '开始', contactUs: '联系我们' },
      common: { readMore: '阅读更多', submit: '提交', sending: '发送中...', success: '成功！', error: '错误' }
    }
  },
  fr: {
    translation: {
      nav: { home: 'Accueil', about: 'À Propos', services: 'Services', contact: 'Contact' },
      hero: { title: 'Autonomiser les Vies par des Soins Compatissants', subtitle: 'Services de soutien NDIS dédiés à Melbourne...', getStarted: 'Commencer', contactUs: 'Nous Contacter' },
      common: { readMore: 'Lire la suite', submit: 'Soumettre', sending: 'Envoi...', success: 'Succès !', error: 'Erreur' }
    }
  },
  es: {
    translation: {
      nav: { home: 'Inicio', about: 'Sobre Nosotros', services: 'Servicios', contact: 'Contacto' },
      hero: { title: 'Empoderando Vidas a través de Cuidados Compasivos', subtitle: 'Servicios dedicados de apoyo NDIS en Melbourne...', getStarted: 'Comenzar', contactUs: 'Contáctanos' },
      common: { readMore: 'Leer Más', submit: 'Enviar', sending: 'Enviando...', success: '¡Éxito!', error: 'Error' }
    }
  },
  ar: {
    translation: {
      nav: { home: 'الرئيسية', about: 'معلومات عنا', services: 'الخدمات', contact: 'اتصل بنا' },
      hero: { title: 'تمكين الحياة من خلال الرعاية الرحيمة', subtitle: 'خدمات دعم NDIS المخصصة في ملبورن...', getStarted: 'البدء', contactUs: 'اتصل بنا' },
      common: { readMore: 'اقرأ المزيد', submit: 'إرسال', sending: 'جاري الإرسال...', success: 'نجاح!', error: 'خطأ' }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
