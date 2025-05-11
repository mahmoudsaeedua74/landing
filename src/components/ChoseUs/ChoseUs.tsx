import React from "react";
import Heading from "../common/Heading";
import map from "../../../public/assets/4. ما يميزنا/1.png";
import one from "../../../public/assets/4. ما يميزنا/2.png";
import two from "../../../public/assets/4. ما يميزنا/map.png";
import forth from "../../../public/assets/4. ما يميزنا/صورة 3.png";
import WhyChooseUsItem from "./WhyChooseUsItem";
import { useTranslations } from "next-intl";
const items = [
  {
    image: map,
    id: 0,
    title: "CreateAndLaunchStore",
    subtitle: "CreateAndLaunchSubtitle",
    description: [
      "CreateAndLaunchDescription1",
      "CreateAndLaunchDescription2",
      "CreateAndLaunchDescription3",
      "CreateAndLaunchDescription4",
    ],
  },
  {
    image: one,
    id: 1,
    title: "StoreDesign",
    subtitle: "StoreDesignSubtitle",
    description: [
      "StoreDesignDescription1",
      "StoreDesignDescription2",
      "StoreDesignDescription3",
      "StoreDesignDescription4",
    ],
  },
  {
    image: forth,
    id: 2,
    title: "Payments",
    subtitle: "PaymentsSubtitle",
    description: [
      "PaymentsDescription1",
      "PaymentsDescription2",
      "PaymentsDescription3",
      "PaymentsDescription4",
    ],
  },
  {
    image: two,
    id: 3,
    title: "Shipping",
    subtitle: "ShippingSubtitle",
    description: [
      "ShippingDescription1",
      "ShippingDescription2",
      "ShippingDescription3",
      "ShippingDescription4",
      "ShippingDescription5",
    ],
  },
];

export default function ChoseUs() {
  const t = useTranslations("ChoseUs");
  return (
    <section className="py-16 contain space-between">
      <Heading title="ChoseUs" icon="dot" />
      <div className=" ">
        {items.map((item) => (
          <WhyChooseUsItem
            key={item.id}
            image={item.image}
            title={t(item.title)}
            subtitle={t(item.subtitle)}
            description={item.description}
            index={item.id}
          />
        ))}
      </div>
    </section>
  );
}
