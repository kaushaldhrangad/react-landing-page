import React from "react";
// import "../images/mini-feature-image.png";
import "/images/mini-feature-image.png"
import { motion } from "framer-motion";

const MiniFeature = () => {
  const fadeInUp = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container  py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto my-10  flex flex-wrap">
          <motion.img
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            alt="image"
            className="lg:w-1/2 w-full lg:h-auto object-center rounded"
            src="/images/mini-feature-image.png"
            width={945}
            height={751}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-10 lg:mt-0">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-[#252C3A] text-2xl title-font flex items-center gap-3 font-[600]">
                  <img
                    src="/assets/skyline.png"
                    className="w-[64px] h-[64px]"
                    alt=""
                  />
                  GENERAL BUILDER
                </h2>
                <p className="pl-[4.5rem] text-sm text-[18px] font-[Inter] tracking-wide">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore iusto blanditiis tenetur reprehenderit veritatis.
                  Soluta quae non dolor recusandae esse vitae necessitatibus,
                  dicta facere iusto!
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-5">
                <h2 className="text-[#252C3A] text-2xl title-font flex object-fill items-center gap-3 font-[600]">
                  <img
                    src="/assets/building.png"
                    className="w-[64px] h-[64px]"
                    alt=""
                  />
                  HOUSE EXTENSIONS
                </h2>
                <p className="pl-[4.5rem] text-sm text-[18px] font-[Inter] tracking-wide">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore iusto blanditiis tenetur reprehenderit veritatis.
                  Soluta quae non dolor recusandae esse vitae necessitatibus,
                  dicta facere iusto!
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-5">
                <h2 className="text-[#252C3A] text-2xl title-font flex items-center gap-3 font-[600]">
                  <img
                    src="/assets/wallpaper.png"
                    className="w-[64px] h-[64px]"
                    alt=""
                  />
                  REFURBISHMENT
                </h2>
                <p className="pl-[4.5rem] text-sm text-[18px] font-[Inter] tracking-wide">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore iusto blanditiis tenetur reprehenderit veritatis.
                  Soluta quae non dolor recusandae esse vitae necessitatibus,
                  dicta facere iusto!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniFeature;