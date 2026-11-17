import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Can all stained or discolored banknotes be cleaned?',
      a: 'No, not every banknote is suitable for cleaning. While specialized chemical solutions and ultrasonic machinery can safely dissolve external dyes, spills, and oxidation films, banknotes with damaged substrate paper fibers, torn security threads, or burned areas require physical paper conservation rather than chemical treatment. We always conduct a condition assessment first.'
    },
    {
      q: 'Will your cleaning machines or chemicals damage security features or watermarks?',
      a: 'Our certified SSD automatic chemical solutions and ultrasonic cleaning machines are specifically formulated and calibrated for genuine legal tender paper (cotton-linen blends). They target external foreign coatings while preserving intaglio printing, magnetic ink, iridescent bands, and embedded security watermarks intact.'
    },
    {
      q: 'How can I schedule an in-person meeting in Dubai?',
      a: 'We welcome serious corporate clients and private collectors to meet our technical team in person. Simply submit an appointment request through our Contact page or message us directly via WhatsApp with your preferred date. In-person meetings are held Monday through Saturday in Dubai, where you can inspect machinery and review product specifications.'
    },
    {
      q: 'What is Caluanie Muelear Oxidize used for?',
      a: 'Caluanie Muelear Oxidize is an industrial-grade refining chemical used for the deep breakdown of heavy chemical oxidation, resin coatings, and specialized mineral crystallization. It is supplied in sealed, heavy-duty canisters with certified purity for industrial and laboratory applications.'
    },
    {
      q: 'How are chemical solutions and machinery delivered internationally?',
      a: 'All orders are dispatched in discreet, specialized protective packaging adhering to international air freight and chemical transit protocols. Deliveries include tracking numbers and clear handling documentation. Clients in the UAE can also arrange direct collection or on-site technician delivery.'
    },
    {
      q: 'Do you provide technicians to assist with machine operation?',
      a: 'Yes. For commercial-scale projects or clients purchasing multi-tranche cleaning machines, Dubai Street Baron offers on-site technical assistance. A senior technician can be dispatched to assist with chemical calibration, temperature settings, and staff training.'
    }
  ];

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200 shadow-xs"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 text-sm sm:text-base hover:text-amber-700 transition-colors"
            >
              <span className="pr-4">{faq.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-amber-600 transition-transform duration-300 shrink-0 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
