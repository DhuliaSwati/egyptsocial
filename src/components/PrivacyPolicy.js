import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import Footer from "./Footer";
import logo from "../assets/Logo-white.png";

const PrivacyPolicy = () => {
  return (
    <>
      <Header logo={logo} />
      <div className="terms-service">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <div className="terms-content mt-4 mb-5 p-4">
                <h1 className="text-center mb-4">Privacy Policy</h1>
                <p className="version-info text-center mb-4">
                  <strong>Version 2.0</strong><br />
                  Last updated on June 2nd, 2024
                </p>

                <p><strong>Jackpot Limited</strong> (we, us, our) trading as <strong>Social Casino</strong> operates the social offering made available via <a href="http://www.socialcasino.com" target="_blank" rel="noreferrer">www.socialcasino.com</a> and all subdomains, including the Games, Content, features, tools, and services offered there and on our associated social media pages.</p>

                <p>We take our privacy and security obligations in respect of your Personal Information very seriously and are committed to complying with all applicable data privacy laws, including the <strong>General Data Protection Regulation (GDPR)</strong> and other relevant Norwegian data protection laws.</p>

                <p>This Privacy Policy sets out the types of Personal Information that we collect about users of our Platform (Users, you, your), how we use it, who we share it with, how we keep it safe, and how you can control it. Please review this Privacy Policy carefully and send us an email to <a href="mailto:dataprivacy@socialcasino.com">dataprivacy@socialcasino.com</a> if you have any questions.</p>

                <p>This Privacy Policy should be read in conjunction with, and forms a part of, the <strong>Social Casino Terms of Service</strong>. Any capitalized term used in this Privacy Policy that is not defined here has the meaning given to that term in our Terms of Service.</p>

                <p>In this Privacy Policy, the term <strong>Personal Information</strong> means any information about you, whether true or not, that can reasonably be used to identify you or otherwise makes you identifiable.</p>

                <p>We will publish any updates to this Privacy Policy on our website, and those changes shall take effect immediately. If we update this Privacy Policy in a way that impacts your rights or obligations, we will notify you when you next visit our Website, and you will need to accept the updated Privacy Policy. If, at any time, you do not accept any updated Privacy Policy, then you must cease using our Website.</p>

                <h3 className="mt-5 mb-3">The Categories of Personal Information We Collect</h3>

                <p>We may collect the following categories of Personal Information via the Platform:</p>

                <ol>
                  <li><strong>Personal Data</strong>: Your name, age, gender, email address, residential address, phone numbers, and any other information that can be used to directly identify you.</li>
                  <li><strong>Device Data</strong>: Information about the electronic devices you use to access the Platform, such as device identifiers, information about your web browser and operating system, your IP address, and device settings.</li>
                  <li><strong>Usage Data</strong>: Information about how you use the Platform, such as which pages you visit, how often you visit them, how long you stay on them, and how you navigate around the Platform.</li>
                  <li><strong>Transaction Data</strong>: Information you provide when you make a purchase from us, request a redemption, complete verification, or otherwise use our Platform. This includes information about your financial accounts that you use with us, such as the names, phone numbers, addresses, and bank statements associated with them. Please note that we do not keep a record of your full card details.</li>
                  <li><strong>Geolocation Data</strong>: Information about your approximate location provided by an electronic device that you use to access the Platform.</li>
                </ol>

                <p>We may also collect <strong>aggregated data</strong> about you, which is information about all or a limited group of our Users that does not directly or indirectly identify you or any other individual.</p>

                <p>We may also collect <strong>anonymous data</strong> about you, which is information about you that does not directly or indirectly identify you or any other individual.</p>

                <h3 className="mt-5 mb-3">How We Collect Your Personal Information</h3>

                <p>We collect Personal Information about you, such as your Personal Data and Transaction Data, directly from you when you provide it to us. This usually happens when you:</p>
                <ul>
                  <li>Make a purchase from us or redeem a Prize.</li>
                  <li>Send us a message via email or another form of communication.</li>
                  <li>Join or participate in any of the social media pages we control.</li>
                  <li>Register for a User Account with us.</li>
                  <li>Enter a promotion or participate in a survey that we run.</li>
                  <li>Log in to our Website.</li>
                  <li>Play our Games.</li>
                </ul>

                <p>We also collect Personal Information, such as your Device Data, Usage Data, and Geolocation Data, directly from you when you access and use the Platform (<strong>Automated Data</strong>), including:</p>
                <ul>
                  <li>Your electronic device's IP address when you access the Platform.</li>
                  <li>The unique identifiers and characteristics of your electronic device that you use to access the Platform.</li>
                  <li>The unique identifiers of the internet browser on your device that you use to access the Platform.</li>
                  <li>The operating system on your device when you access the Platform.</li>
                  <li>The language settings on your device when you access the Platform.</li>
                  <li>The URLs you use to access the Platform.</li>
                  <li>Information about the actions you take on the Platform.</li>
                  <li>When you visit the Platform.</li>
                  <li>The pages you access on the Platform.</li>
                </ul>

                <p>We also use information from other trusted third-party sources to update, supplement, and verify the correctness of the Personal Information we collect.</p>

                <h3 className="mt-5 mb-3">How We Use the Personal Information We Collect</h3>

                <p>We will use your Personal Information in the following circumstances:</p>
                <ul>
                  <li>To operate the Platform and provide our offerings and services to you.</li>
                  <li>To facilitate the financial transactions you request.</li>
                  <li>To respond to your queries and complaints.</li>
                  <li>In accordance with your consent or as per your request.</li>
                  <li>To satisfy a contractual obligation owed to you.</li>
                  <li>Where it is necessary for our legitimate interests (or those of a third party), provided that your fundamental rights do not override those interests.</li>
                  <li>To comply with our legal or regulatory obligations.</li>
                </ul>

                <p>We disclose your Personal Information to third parties in the following circumstances:</p>
                <ol>
                  <li><strong>To our affiliates</strong>: We may disclose Personal Information to other companies in the <strong>Jackpot Group</strong>, including any Payment Administration Agent for the purpose of processing payments to/from you on our behalf.</li>
                  <li><strong>To host our Website</strong>: Personal Information may be disclosed to our upstream hosting suppliers that host our Website.</li>
                  <li><strong>To provide the services made available via our Website</strong>: We may work with third parties for database management, direct marketing, fraud prevention, technical and customer support.</li>
                  <li><strong>Claims and Complaints Handling</strong>: We may disclose Personal Information to our insurers and lawyers.</li>
                  <li><strong>Marketing Communications</strong>: We may share Personal Information with email, marketing, and newsletter service providers for the purpose of sending newsletters and marketing materials.</li>
                  <li><strong>Professional Advice</strong>: Providing information to our legal, accounting, and financial advisors for advice, representation, and/or debt collection.</li>
                  <li><strong>Business Sale or Merger</strong>: Disclosing Personal Information to the purchaser or merging entity in case of a business asset or share sale, or merger.</li>
                  <li><strong>Financial Crime Prevention</strong>: We use external service providers for document verification and checks related to financial crime prevention.</li>
                  <li><strong>Legal Compliance</strong>: We will cooperate with law enforcement or regulatory investigations, safeguard the Platform against misuse, and ensure compliance with our legal obligations.</li>
                  <li><strong>Publication on the Platform</strong>: With your consent, we may publish your name and image on the Platform for promotional purposes.</li>
                </ol>

                <p>When we share Personal Information with third parties, we will take reasonable measures to ensure that the Personal Information is protected at a standard comparable to our own. We restrict third parties from using the Personal Information for purposes other than those specified by us or required by law.</p>

                <h3 className="mt-5 mb-3">How Long We Retain Your Personal Information</h3>

                <p>We will retain your Personal Information for the minimum period necessary to fulfill the purposes outlined in this Privacy Policy (<strong>Retention Policy</strong>), which will be determined based on:</p>
                <ul>
                  <li>The time required to achieve the intended purposes for which the information was collected.</li>
                  <li>Our legal, regulatory, financial, accounting, and reporting obligations related to the information.</li>
                  <li>Operational requirements related to the information.</li>
                  <li>The need to retain the information for current or anticipated legal claims, investigations, and/or disputes.</li>
                </ul>

                <p>We will take reasonable steps to irretrievably delete or irreversibly anonymize Personal Information in accordance with our Retention Policy.</p>

                <h3 className="mt-5 mb-3">Data Security</h3>

                <p>We take our data privacy obligations very seriously and only process Personal Information in a way that ensures its proper security. This involves safeguarding the Personal Information from unauthorized or unlawful processing and protecting it against accidental loss, destruction, or damage by putting in place appropriate technical and organizational measures.</p>

                <p>Unfortunately, even despite our best efforts, it is not always possible to absolutely secure data transmissions over the Internet. While we implement appropriate measures to keep Personal Information that you transmit via the Platform secure, any transmission of Personal Information is at your own risk. We cannot guarantee that such information will not be intercepted by third parties, and we bear no liability for security breaches in respect of your Personal Information that are beyond our reasonable control.</p>

                <h3 className="mt-5 mb-3">Links to Third Parties</h3>

                <p>The Platform may contain links to websites, plug-ins, and applications operated by third parties (<strong>Third-Party Links</strong>). Clicking on Third-Party Links may enable these third parties to collect or share data about you. We neither control nor endorse these Third-Party Links, and we bear no responsibility for their privacy practices.</p>

                <p>We recommend reviewing the privacy policies of such third parties to understand how they may collect and process your Personal Information. These privacy policies may differ significantly from ours, and we do not control the operations of those websites or apps or how they collect, store, or process data.</p>

                <p>If you use a third-party website or application (e.g., Facebook or Google) to access the Platform, your activities on such third-party websites or apps are subject to the privacy policies of those sites or apps.</p>

                <h3 className="mt-5 mb-3">Your Rights Concerning Your Personal Information</h3>

                <p>By law, you may have certain rights regarding the Personal Information that we collect and store. If you wish to exercise any of these rights, please contact us at <a href="mailto:dataprivacy@socialcasino.com">dataprivacy@socialcasino.com</a>.</p>

                <p>You have the right to:</p>
                <ul>
                  <li>Access the Personal Information we hold about you.</li>
                  <li>Object to the processing of your Personal Information.</li>
                  <li>Revoke any consent provided via this Privacy Policy.</li>
                </ul>

                <h3 className="mt-5 mb-3">Contacting Us</h3>

                <p>If you have any questions about your Personal Information, how we collect or use it, or you wish to exercise your rights in respect of Personal Information, please contact our Privacy Officer via email at <a href="mailto:dataprivacy@socialcasino.com">dataprivacy@socialcasino.com</a>.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;