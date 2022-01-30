import React from 'react';
import { socialMediaLinksArray } from '../Utils';
import { ContactUsInput, ContactUsTextArea } from './contact';

interface IContactInfoItem {
  link: string;
  img: string;
  text: string;
}

const ContactInfoItem = (props: IContactInfoItem) => {
  const { link, img, text } = props;

  return (
    <a href={link}>
      <div className="contact-info-item d-flex align-items-center">
        <img src={img} alt="contact" />
        <p className="mb-0">{text}</p>
      </div>
    </a>
  );
};

const Footer = () => {
  return (
    <div className="app-container">
      <div className="inux-footer-container ">
        <div className="title">
          <h3 className="text-center">Lorem ipsum dolor sit amet</h3>
        </div>

        <div className="contact-info-con d-flex justify-content-between align-items-center py-5">
          <ContactInfoItem img="./img/contact_mail.png" text="Loremipsum@dolor.com" link="/" />
          <ContactInfoItem img="./img/contact_phone.png" text="+1  987 65431 22" link="/" />
          <ContactInfoItem img="./img/contact_twitter.png" text="Loremipsum@dolor.com" link="/" />
        </div>

        <div className="contact-us-form">
          <div className="d-flex name-email my-4">
            <ContactUsInput placeholder="Name" type="text" />
            <ContactUsInput placeholder="Email" type="email" />
          </div>
          <div className="my-4">
            <ContactUsTextArea placeholder="Your Message" />
          </div>
          <div className="my-4 d-flex justify-content-center">
            <button type="button" className="btn btn-lg">
              SUBMIT MESSAGE
            </button>
          </div>
        </div>

        <div className="footer-bottom-content">
          <div className="d-flex justify-content-around quick-links-con">
            <div className="logo-con">
              <img src="./img/logo.png" alt="inux" />
              <p>
                There are many variations of pass of Lorem Ipsum available, but the majority have
                suffered
              </p>
            </div>

            <div>
              <h3>Lorem, ipsum.</h3>
              <ul>
                <a href="/">
                  <li>- What is Lorem</li>
                </a>
                <a href="/">
                  <li>- Lorem</li>
                </a>
                <a href="/">
                  <li>- Opum Iosla</li>
                </a>
                <a href="/">
                  <li>- Ipsum Isom</li>
                </a>
              </ul>
            </div>

            <div>
              <h3>Quick Links</h3>
              <ul>
                <a href="/">
                  <li>- What is Lorem</li>
                </a>
                <a href="/">
                  <li>- Lorem</li>
                </a>
                <a href="/">
                  <li>- Opum Iosla</li>
                </a>
                <a href="/">
                  <li>- Ipsum Isom</li>
                </a>
              </ul>
            </div>
          </div>

          <hr />

          <div className="copyrights-con">
            <div className="d-flex justify-content-between first">
              <h4>Copyright @inuxTech all rights reserved.</h4>
              <div className="d-flex terms-and-conditions">
                <a href="/">
                  <h4>Terms Condition </h4>
                </a>
                <a href="/">
                  <h4>Privacy Policy</h4>
                </a>
                <a href="/">
                  <h4>FAQ</h4>
                </a>
              </div>
            </div>
          </div>

          <div className="socila-links-con">
            <div className="d-flex">
              {socialMediaLinksArray.map((item, index) => (
                <a key={index} href={item.url}>
                  <img src={item.img} alt={item.name} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
