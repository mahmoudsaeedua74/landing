const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export const animation = {
  variants: cardVariants,
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false, amount: 0.08 },
};
