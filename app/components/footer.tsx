import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const socialLinks = [
    {
      icon: faXTwitter,
      href: "https://twitter.com/bibimbapbubum",
      label: "Twitter"
    },
    {
      icon: faLinkedin,
      href: "https://www.linkedin.com/in/akbar-febry-wahyu-andrian-b27834230/",
      label: "LinkedIn"
    },
    {
      icon: faGithub,
      href: "https://github.com/sohryuu101",
      label: "GitHub"
    },
    {
      icon: faInstagram,
      href: "https://instagram.com/akbar_febrr",
      label: "Instagram"
    }
  ];
  
  export default function Footer() {
    return (
      <footer className="text-center text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-white hover:text-gray-400 transition-colors duration-300"
              >
                <FontAwesomeIcon 
                  icon={social.icon} 
                  className="w-6 h-6"
                />
              </a>
            ))}
          </div>
          <div className="mt-4 text-sm text-white">
            © 2025 pupum. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }