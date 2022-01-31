import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

interface IFAQItem {
  initial: boolean;
}

const FAQItem = (props: IFAQItem) => {
  const { initial } = props;
  const [open, setOpen] = useState(initial);
  return (
    <div className="item">
      <button
        onClick={() => {
          setOpen(!open);
        }}
        type="button"
        className="btn text-white d-flex justify-content-between align-items-center w-100 px-0 py-3"
      >
        <h3 className="mb-0">Lorem wop ipsum</h3>
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
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.p
              variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              transition={{ duration: 0.3 }}
              className="py-3"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Morbi Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Morbi.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQs = () => {
  return (
    <div className="app-container">
      <div className="inux-faqs-container">
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
          <div className="mt-4 mt-md-0 img-con d-md-none">
            <img src="./img/faq.png" alt="faq" />
          </div>
          <div className="accordion-con">
            <FAQItem initial />
            <FAQItem initial={false} />
            <FAQItem initial={false} />
            <FAQItem initial={false} />
          </div>
          <div className="mt-4 mt-md-0 img-con d-none d-md-block">
            <img src="./img/faq.png" alt="faq" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
