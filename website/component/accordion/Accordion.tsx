import React, { useState } from 'react';

interface AccordionProps {
  head: string;
  content?: string;
  children: any;
  addclass?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  head,
  content,
  children,
  addclass,
}) => {
  const tabIndex = 0;
  const [showAccordion, setAccordion] = useState(false);

  return (
    <div className='accordion-wrap'>
      <button
        type='button'
        tabIndex={tabIndex}
        className={`accordion-head ${addclass}`}
        aria-expanded={showAccordion ? 'true' : 'false'}
        onClick={() =>
          showAccordion ? setAccordion(false) : setAccordion(true)
        }
      >
        {head}
        {showAccordion ? (
          <i className='acc-up-arrow-triangle' />
        ) : (
          <i className='acc-down-arrow-triangle' />
        )}
      </button>
      {showAccordion && (
        <div>
          <div>{children}</div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
