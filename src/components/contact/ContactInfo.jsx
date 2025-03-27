import React from 'react';
// import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaTelegram, FaSkype, FaWhatsapp } from 'react-icons/fa';
import ContactInfoItem from './ContactInfoItem';

const ContactInfo = () => {
  const contactDetails = [
    { icon: <FaEnvelope />, title: "Email", content: "sergioj1013@gmail.com" },
    { icon: <FaWhatsapp />, title: "Whatsapp", content: "+34 631 64 57 92" },
    { icon: <FaTelegram />, title: "Telegram", content: "@Bead1215" },
    { icon: <FaSkype />, title: "Skype", content: "live:.cid.f2c12afab1665a2" },
    { icon: <FaMapMarkerAlt />, title: "Location", content: "Villagonzalo-Pedernales, Spain" }
  ];

  return (
    <div className="space-y-8">
      {contactDetails.map((detail, index) => (
        <ContactInfoItem key={index} {...detail} />
      ))}
    </div>
  );
};

export default ContactInfo;