import React from 'react'
import {Link} from 'react-router-dom'
function PrivacyPolicy() {
    return (
        <div>
            <section className>
                <div className="container">
                <div className="row">
                    <div className="inner-title-dark col-lg-9 col-md-9 col-sm-12 col-xs-12">
                    <div className="section">
                        <h2 style={{textAlign: 'center'}}>Privacy Policy </h2>
                        <p className="text">
                        Linguistics One Limited Website Privacy Policy Linguistics One Limited Ltd. (“Linguistics One Limited ”) is the developer of the Linguistics One Limited ® technology-based learning solutions. We take the privacy of our customers seriously. We are committed to safeguarding your privacy while providing a personalized and valuable service. 
                        </p>
                    </div>
                    <div className="section">
                        <h2 style={{textAlign: 'center'}}><b>Overview </b></h2>
                        <p>
                        This Privacy Policy statement explains the data processing practices of Linguistics One Limited. We are committed to the privacy and security of personal information we receive and process, and for appropriately and promptly addressing requests and instructions regarding personal data, in accordance with applicable legal requirements. In order to better ensure the proper handling of data requests, we have created a Personal Information Request web form to enable us to support requests from individuals seeking information and action with respect to personal data we have collected for those individuals and how we use that information. If you are contacting us to request information or action with respect to personal data we have collected about you, or to exercise your data protection rights, we ask that you please
                        <b>
                            {/* Navbar link*/}<Link  to="/personalinfo" >Click Here</Link>
                        </b>
                        and submit your request(s) through the Personal Information Request web form. 
                        </p> 
                        <p className="text">If you have any other requests concerning your personal information or any questions about these practices, please contact our Privacy Officer by e-mail at privacyofficer@linguistics.one. We encourage you to periodically review this statement as it may change at any time at our sole discretion. </p>
                        <p className="text">
                        Our site may contain links to third party sites, which are not subject to this privacy policy. Linguistics One Limited does not endorse and is not responsible for the privacy practices or content on these sites. We recommend that you read the privacy policy of any such sites that you visit. </p>
                        <p className="text">
                        Information provided by you may be requested from one of our websites under the Linguistics One Limited brand name, or from one of our reputable co-marketing partner sites that represent our brands on their own websites under their company and/or brand name. In the event that you provide us with personal information for the purposes of free registration and you later make a purchase, whether directly from us or facilitated by one of our e-commerce partners, your privacy rights will be protected according to our stated policies and the stated privacy policies of these partners, which will be posted and available for your review at the time of purchase.
                        </p>
                    </div>
                    <div className="section">
                        <h2 style={{textAlign: 'center'}}><b><u>Information Collected</u></b></h2>
                        <p>Personal information is collected by Linguistics One Limited. We collect personally identifiable information about you (your “Data”) through: </p>
                        <ul style={{listStyleType: 'circle'}}>
                        <li>The use of inquiry and registration forms.</li>
                        <li>The purchase process when you buy any of our products or services. </li>
                        <li>The provision of your details to us either online or offline. </li>
                        </ul>
                        <ul style={{listStyleType: 'circle'}}>
                        <p className="text " style={{marginTop: '10px'}}>The elements of your Data that we collect may include: </p>
                        <li>Name</li>
                        <li>Job title </li>
                        <li>Company name</li>
                        <li>Home, shipping and billing addresses, phone and fax number</li>
                        <li>Mobile telephone number</li>
                        <li>E-mail address</li>
                        <li>IP address and browser information</li>
                        <li>Payment details such as credit card information</li>
                        <li>Market research data such as customer usage patterns </li>
                        <li>Video recordings made through the Linguistics platform will be solely the property of Linguistics  One Limited, only used for educational purposes and not shared with any third party.</li>
                        </ul>
                    </div>
                    <div className="section">
                        <h2 style={{textAlign: 'center'}}><b><u>Use and Disclosure of Personal Information</u></b></h2>
                        <ul style={{listStyleType: 'circle'}}>
                        <p className="text " style={{marginTop: '10px'}}>We use your Data for purposes which may include</p>
                        <li>Providing our customers with a personalized service.</li>
                        <li>Processing orders, registrations and inquiries.</li>
                        <li>Conducting market research surveys.</li>
                        <li>Running competitions</li>
                        <li>Measuring interest in and improving our website, products, and services.</li>
                        <li> Providing you with information about products and services we offer. You may stop the delivery of marketing emails by following the instructions accompanying a particular communication or by using our Personal Information Request web form available <a href="{{url('/personal-infomation')}}" style={{fontWeight: 'bold'}}> here.</a></li>
                        <li> Resolving disputes, collecting fees, and troubleshooting problems.</li> 
                        </ul>
                        <p>We use the information you provide when placing an order to complete that order. We do not share this information with outside parties except: </p>
                        <ul style={{listStyleType: 'circle'}}>
                        <li>To the extent necessary to complete that order or to provide you with services by way of our service providers (e.g., payment processing, third-party shipping, business analytics, customer support), or </li>
                        <li>To successors in title to our business, or </li>
                        <li>In accordance with legal and regulatory requirements, or</li>
                        <li>As necessary, in Linguistics One Limited’s sole discretion, to protect the perceived rights, safety and property of Linguistics One Limited, users of our websites, and the public, or</li>
                        <li>With the parent organization, affiliate or subsidiary entities of Linguistics One Limited to manage and control Data as joint users. </li>      
                        </ul>  
                        <p>Other than as set out above, you will be notified when Personal Information about you will be shared with third parties, and you will have an opportunity to choose not to have us share such information. </p>
                        <p className="text">
                        We also use information in aggregate form (so that no individual user is identified): 
                        </p>
                        <ul style={{listStyleType: 'circle'}}>
                        <li>To build up marketing profiles </li>
                        <li>To aid strategic development </li>
                        <li>To audit usage of the site</li>
                        </ul>  
                    </div>
                    <div className="section">
                        <h2 style={{textAlign: 'center'}}><b><u> Use of Cookies and Other Tracking Devices </u></b></h2>
                        <p className="text">
                        We use cookies and other tracking devices, including local shared objects written with Adobe flash technology (flash cookies), to help personalize your use of our sites. A cookie is a small piece of information which is sent to your computer’s hard drive by the web server so that the website can remember who you are. This information may include information relating to your use of our sites, information about your computer such as the computer’s IP address and browser type, demographic data and, if you arrived at our site via a link from a third-party site, the URL of the linking page. We do not use any tracking devices to track your usage of the Internet on other sites not operated by Linguistics One Limited. If you are a registered user, this may include your name and email address for verification purposes. 
                        </p>
                        <ul style={{listStyleType: 'circle'}}>
                        We use information from cookies for purposes which may include:
                        <li>Identifying returning users and registrants</li>
                        <li> Enabling you to move more easily around our site</li>
                        <li> Tracking your use of our site to better develop our sites in accordance with your requirements</li>
                        <li> Building up a demographic profile</li>
                        </ul>
                        <p>
                        If you do not want to help us learn how to improve our site, products, offers and marketing strategy, you may choose to set your Web browser to not accept cookies. Further information on how to prevent cookies from being stored on your computer can be found on 
                        </p>
                        <p>http://www.allaboutcookies.org under the ‘manage cookies’ section. Alternatively, go to the help menu within your Internet browser. Flash cookies may be removed using the latest versions of Google Chrome, Mozilla Firefox, and Microsoft Internet Explorer, which you may upgrade to on these browsers, or you may remove or block flash cookies by going to Adobe’s Website Storage Settings Panel.
                        </p>
                        <p>
                        From time to time we may permit third party companies to set cookies on Linguistics One Limited sites for purposes which may include market research, revenue tracking or to improve functionality of the site.
                        </p>
                    </div>
                    <div className="section">
                        <h2 style={{textAlign: 'center'}}><b><u>Security Policy </u></b></h2>
                        <p className="text">
                        Linguistics One Limited has appropriate measures in place to help ensure that our users’ Data is protected against unauthorized access or use, alteration, unlawful or accidental destruction and accidental loss. Although we make reasonable efforts to protect your Personal Information from loss, misuse, or alteration by third parties, you should be aware that there is always some risk involved in transmitting information over the Internet. There is also some risk that thieves could find a way to thwart our security systems.  
                        </p>
                    </div>
                    <div className="section">
                        <h2 style={{textAlign: 'center'}}><b><u>Transfer of Data</u></b></h2>
                        <p className="text">
                        The Internet is a global environment. Using the Internet to collect and process personal Data necessarily involves the transmission of Data on an international basis. For individuals located in the European Union, we participate in the EU-U.S. and Swiss-U.S. Privacy Shield Framework (the "Framework") as set forth by the U.S. Department of Commerce regarding the collection, use and retention of personal data from the European Union and Switzerland. For more information, visit the U.S Department of Commerce site here: https://www.privacyshield.gov/welcome.
                        </p>
                    </div>
                    <div className="section">
                        <h2 style={{textAlign: 'center'}}><b><u>Access to Data and Contact Info</u></b></h2>
                        <p className="text">
                        You may request a copy or send a correction of the personal information we hold about you by contacting the Privacy Officer at privacyofficer@linguistics.one or writing to:
                        </p>
                        <ul style={{listStyleType: 'circle'}}>
                        <p> Privacy Officer  <br />
                            Linguistics One Limited Ltd.    <br />
                            71-75 Shelton Street   <br />
                            Covent Garden <br />
                            London  <br />
                            WC2H 9JQ  <br />
                        </p>
                        </ul>
                        <p>
                        Where required by applicable law, and notably by GDPR, you have the right to obtain confirmation of the existence of certain Personal Data relating to you, to verify its content, origin, and accuracy, as well as the right to access, review, port, delete, or to block or withdraw consent to the processing of certain Personal Data (without affecting the lawfulness of processing based on consent before its withdrawal), by contacting us as detailed below. In particular, you have the right to object to our use of Personal Data for direct marketing and in certain other situations at any time. Contact us below for more details. Please note that certain Personal Data may be retained as required or permitted by applicable law.
                        </p>
                        <p>
                        If you are an End User receiving access to our services through a Corporate, Governmental, Educational or other Organizational Enterprise Client of Linguistics One Limited and you wish to request access, limit use, limit disclosure or remove your End User Personal Data, please contact the Enterprise Client organization that submitted your personal data to us, and we will support them as needed in responding to your request.  
                        </p>
                        <p>
                        If you are contacting us to request information or action with respect to personal data we have collected about you, or to exercise your data protection rights, please click here and submit your request(s) through our Personal Information Request web form. If you have other questions or requests concerning your personal information, please contact the Privacy Team by email at privacyofficer@linguistics.one. 
                        </p>
                        <p>
                        If you are a European resident with questions regarding your rights in Personal Data under GDPR, please contact the Linguistics One Limited Data Protection Officer email at DPO@linguistics.one. 
                        </p>
                        <p>
                        (a) As noted above, you can choose not to provide Linguistics One Limited with personal information, although it may be needed to register as a member on the Service and to participate in certain features offered through the Service.
                        </p>
                        <p>
                        (b) You can access or update your personal information by using our Personal Information Request web form available  <a href="{{url('/personal-infomation')}}" style={{fontWeight: 'bold'}}> here.</a>            
                        </p>
                        <p>(c) You may stop the delivery of commercial email communications that Linguistics One Limited sends by following the instructions accompanying a particular communication or by using our Personal Information Request web form available<a href="{{url('/personal-infomation')}}" style={{fontWeight: 'bold'}}> here.</a> </p>
                        <p>The Help portion of the toolbar on most browsers will tell you how to prevent your browser from accepting new cookies, how to have the browser notify you when you receive a new cookie, or how to disable cookies altogether. We may charge the allowable fee under applicable law for provision of this information. </p>
                    </div>
                    <div className="section">
                        <h2 style={{textAlign: 'center'}}><b><u>California Consumers</u></b>
                        </h2><h4 style={{textAlign: 'center'}}>Notice to California Consumers. This notice is effective as of January 1, 2020</h4>
                        <p className="text">
                        If you reside in California, we are required to provide additional information to you about how we use and disclose your information, and you may have additional rights with regard to how we use your information. We have included this California-specific information below.   
                        </p>
                        <h4 style={{textAlign: 'center'}}>  CA Personal Information.</h4>
                        <p>
                        Consistent with section 2 of this Website Privacy Policy, we collect certain categories and specific pieces of information about individuals that are considered "Personal Information" in California ("CA Personal Information"), specifically
                        </p>
                        <ul style={{listStyleType: 'circle'}}>
                        <li>Personal and Other Identifiers or Characteristics: such as first name and last name, personal or professional contact information, mailing address, telephone number, e-mail address, unique personal identifier, IP, device, and online activity information, age, date of birth, gender, demographics, username and password to our Websites or services;</li>
                        <li>Commercial Information: such as payment details, credit card information and purchase or transaction history. </li>
                        <li> Sources. We may collect certain categories of CA Personal Information from you and other third parties as described in sections 4 and 5 of this Website Privacy Policy. </li>
                        <li>Use of CA Personal Information. </li>
                        <p>Consistent with sections 3 and 4 of this Website Privacy Policy, we may use CA Personal Information for business or commercial purposes. Please see sections 3 and 4 for more details. </p>
                        <li>California Consumer Rights. </li>
                        <p>
                            o In the preceding twelve months, we may have shared CA Personal Information for business purposes, or we may have “sold” (as defined under CCPA) some categories of CA Personal Information. 
                        </p>
                        <ul style={{listStyleType: 'circle'}}>
                            <li>
                            Access. Request access to your CA Personal Information that we collect, use, disclose, or sell;     
                            </li>
                            <li>
                            Deletion. Request deletion of your CA Personal Information; and      
                            </li>
                            <li>
                            CA Personal Information Sold or Disclosed For Business Purposes. Request information about the CA Personal Information we have "sold" (as defined under CCPA) or disclosed for business purposes within the preceding 12 months. To the extent permitted by applicable law, we may be required to retain some of your CA Personal Information and certain CA Personal Information is strictly necessary in order for us to fulfil the purposes described in this Privacy Policy.      
                            </li>
                        </ul>
                        <p>
                            Exercising California consumer rights. 
                        </p>
                        <p>
                            If you are a California resident and wish to exercise any of these rights, please:
                        </p>
                        <p>(a) submit your request using our California webform available <a href="{{url('/california-info')}}" style={{color: 'blue'}}> here;</a> </p>  
                        <p>(b) log into your account to make any updates or <a href="{{url('/california-info')}}" style={{color: 'blue'}}> submit a request;</a></p>  
                        <p>(c) contact us as described in the Website Privacy Policy section 7 above. </p>  
                        <p>When submitting your request, you may be asked to provide certain information, which may include additional proof of identification, so that we can verify your identity and validate the request. We are not responsible for requests that are not sent or submitted properly, or that do not have complete information. Please note that you are limited by law in the number of requests you may submit per year. We will not discriminate against you by offering you different pricing or products, or by providing you with a different level or quality of products, based solely upon you exercising your rights to your CA Personal Information. </p>
                        <li>Do Not Sell My Personal Information.</li>
                        <p>If we “sell” (as defined by CCPA) your CA Personal Information to a third party, as a California Resident, you have the right to opt-out of the sale of your CA Personal Information. If you wish to exercise this right, please <a href="{{url('/california-info')}}" style={{fontWeight: 'bold', color: 'blue'}}>click here </a>or contact us as described in the Website Privacy Policy section 7 above. To the extent that you elect to designate an authorized agent to make a request on your behalf, they must identify that they are contacting us as agent and will be required to provide appropriate documentation including written signed authorization by you, proof of your identity, and verification of their identity; or a valid, designated power of attorney as required under the California Probate Code. We may require additional proof of authority or may need to contact you directly to validate the request. If you are under the age of 16, we will not sell your CA Personal Information without proper consent.</p>
                        </ul>
                    </div>
                    <div className="section">
                        <h2 style={{textAlign: 'center'}}><b><u>Changes to this Policy</u></b></h2>
                        <p>
                        This policy is effective 1st October 2020. From time to time we may make changes to this privacy policy statement to reflect any changes to our privacy practices in accordance with changes in legislation, best practice, or website enhancements. We will notify you about material changes to this Privacy Policy by sending a notice to the email address you provided to us or by placing a prominent notice on our website.
                        </p>
                        <p>Last reviewed: 1st October 2020</p>
                        <p> Last updated and effective as of 1st October, 2020.</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>

        </div>
    )
}

export default PrivacyPolicy
