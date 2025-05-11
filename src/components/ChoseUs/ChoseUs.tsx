import React from "react";
import Heading from "../common/Heading";
import map from "../../../public/assets/4. ما يميزنا/1.png";
import one from "../../../public/assets/4. ما يميزنا/2.png";
import two from "../../../public/assets/4. ما يميزنا/map.png";
import forth from "../../../public/assets/4. ما يميزنا/صورة 3.png";
import WhyChooseUsItem from "./WhyChooseUsItem";
const items = [
  {
    image: map,
    id: 0,
    title: "إنشاء وتدشين المتجر",
    subtitle: "انطلاقتك سهلة حتى بانشغالك",
    description: [
      "لا تحتاج لخبرة سابقة أو أدوات تقنية لبدأ تجارتك مع سوقنا",
      "+1000 خدمة من مركزي خدمات التاجر تشاركك كل ما تحتاجه",
      "خطوات سهلة وسريعة لإنشاء متجرك",
      "تبادل التجارب والخبرات مع آلاف التجار في مجتمع نشط",
    ],
  },
  {
    image: one,
    id: 1,
    title: "تصميم المتجر",
    subtitle: "متجرك على ذوقك",
    description: [
      "نجاحك التجاري يحتاج لمظهر لائق، اختر مظهراً يناسب علامتك",
      "مكتبة متنوعة من السمات الجاهزة القابلة للتخصيص حسب رغبتك",
      "تحكم كامل بتصميم متجرك عن طريق CSS و HTML",
      "خيارات تكامل مع مواقع أخرى مثل Twilight و Sala",
    ],
  },
  {
    image: forth,
    id: 2,
    title: "المدفوعات",
    subtitle: "مدفوعات آمنة، لتجارة مستدامة، وثقة متينة!",
    description: [
      "استفد من نظام سلة المتكامل للمدفوعات الإلكترونية لإدارة مدفوعات متجرك وعملائك",
      "وسائل دفع متنوعة تلبي كافة احتياجات عملائك",
      "تقارير سريع لنظام المدفوعات تتابع يوم بيوم",
      "تحويل المدفوعات بعد 24 ساعة، حماية عالية وأمان لكافة عملائك",
    ],
  },
  {
    image: two,
    id: 3,
    title: " الشحن والتوصيل .",
    subtitle: ".اسطول شحن متكامل  في خدمة منتجاتك",
    description: [
      "؟خيارات  شحن متنوعة تربط متجرك بالعالم ",
      "ربط سهل بدون عقود.",
      "اربط متجرك بأكثر من 100 شركة شحن وتوصيل محليَّة ودوليَّة.",
      "خدمات شحن ولوجستيات مخصَّصة لجميع أنواع المنتجات.",
      "شحن دولي ومحلي يغطي جميع المدن والقرى, والأماكن البعيدة.",
    ],
  },
];
export default function ChoseUs() {
  return (
    <section className="py-16 contain space-y-20">
      <Heading title="لماذا تعد ClickShare هي خيارك المثالي؟" icon="dot" />
      <div className=" ">
        {items.map((item) => (
          <WhyChooseUsItem
            key={item.id}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            index={item.id}
          />
        ))}
      </div>
    </section>
  );
}
