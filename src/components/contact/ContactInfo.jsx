import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaTelegram, FaSkype, FaWhatsapp } from 'react-icons/fa';
import { SiMicrosoftteams } from 'react-icons/si';
import ContactInfoItem from './ContactInfoItem';

const ContactInfo = () => {
  const contactDetails = [
    { icon: <FaEnvelope />, title: "Email", content: "sergioj1013@gmail.com" },
    { icon: <FaWhatsapp />, title: "Whatsapp", content: "+34 631 64 57 92" },
    { icon: <FaTelegram />, title: "Telegram", content: "@Bead1215" },
    { icon: <SiMicrosoftteams />, title: "Teams", content: "sergioj1013@gmail.com" },
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