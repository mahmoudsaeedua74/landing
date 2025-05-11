import { StaticImageData } from "next/image";

interface TestimonialItem {
  id: number;
  rating: number;
  name: string;
  text: string;
  title: string;
  avatar: StaticImageData;
}
export interface TestimonialCardProps {
  item: TestimonialItem;
}
