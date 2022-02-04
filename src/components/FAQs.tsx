import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AOS from 'aos';
import { FAQArray } from '../Utils';

interface IFAQItem {
  title: string;
  details: string;
}

const FAQItem = (props: IFAQItem) => {
  const { title, details } = props;
  const [open, setOpen] = useState(false);
  return (
    <div className="item">
      <button
        onClick={() => {
          setOpen(!open);
        }}
        type="button"
        className="btn text-white d-flex justify-content-between align-items-center w-100 px-0 py-3"
      >
        <h3 className="mb-0">{title}</h3>
        <h2 className="mb0">
          {' '}
          {open ? '-' : '+'}
          {' '}
        </h2>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <motion.p
              variants={{ collapsed: { scale: 0.8, opacity: 0.3 }, open: { scale: 1, opacity: 1 } }}
              transition={{ duration: 0.3 }}
              className="py-3"
            >
              {details}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQs = () => {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 800,
      // easing: 'ease-in-sine',
      delay: 50,
    });
    // AOS.refresh();
  }, []);

  return (
    <div className="app-container">
      <div className="inux-faqs-container mt-5">
        <div className="title">
          <h2 className="text-center">
            {' '}
            Frequently
            <strong> Asked Questions</strong>
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Morbi.
          </p>
        </div>

        <div className="faq-flex d-md-flex justify-content-between align-items-center">
          <div className="mt-4 mt-md-0 img-con d-md-none" data-aos="zoom-out">
            <img src="./img/faq.png" alt="faq" />
          </div>
          <div className="accordion-con" data-aos="zoom-in">
            {FAQArray.map((item, i) => (
              <FAQItem details={item.details} title={item.title} key={i} />
            ))}
          </div>
          <div data-aos="zoom-in" className="mt-4 mt-md-0 img-con d-none d-md-block">
            <img src="./img/faq.png" alt="faq" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
