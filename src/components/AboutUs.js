import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              History
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>TastyBites</strong> is a revolutionary food app designed
              to enhance your dining experience. We believe that food should be
              a delightful journey, and our app aims to make it easier and more
              enjoyable for food lovers to explore, discover, and savor their
              favorite cuisines.
            </div>
            <div
              style={{
                height: "100px",
                width: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src="/assets/tasty-bites-logo.png"></img>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Contact Us
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong></strong>
              We value your feedback and are here to assist you with any
              questions or concerns you may have. <br />
              Please feel free to reach out to us using the following contact
              information:
              <br />
              <br />
              <strong>
                <u>Customer Support:</u>
              </strong>
              <br />
              If you require assistance or have any inquiries regarding our food
              app, our dedicated customer support team is ready to help.
              <br />
              <br />
              Email: support@tastybites.com
              <br />
              Phone: +1-XXX-XXX-XXXX
              <br />
              <br />
              Operating Hours: Monday to Friday, 9:00 AM - 6:00 PM (EST)
              <br />
              <br />
              App Feedback:
              {/* We highly appreciate your feedback on our app and its features. If you have any suggestions, feature requests, or general comments to improve your experience, please let us know. */}
              <br />
              Email: feedback@tastybites.com
              {/* Partnerships and Business Inquiries:
For partnership opportunities, marketing collaborations, or any business-related inquiries, please reach out to our partnerships team.

Email: partnerships@tastybites.com

Press and Media Inquiries:
Members of the press or media seeking information about TastyBites, interviews, or press releases, please contact our media relations team.

Email: media@tastybites.com */}
              <br />
              <br />
              <b>Social Media</b>
              <br />
              Connect with us on social media for the latest updates, news, and
              promotions.
              <br />
              <br />
              Twitter: @TastyBitesApp
              <br />
              Facebook: /TastyBitesApp
              <br />
              Instagram: @TastyBitesApp
              <br />
              <br />
              We aim to respond to all inquiries promptly, and your satisfaction
              is our priority. Thank you for choosing TastyBites and being part
              of our food-loving community!
              <br />
              Feel free to modify this template to fit the specific needs and
              contact channels of your food app.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Address
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong></strong> <br /> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed consectetur nulla ut nulla consectetur, in
              volutpat elit aliquam. Mauris vulputate, ex sit amet facilisis
              tempor, velit massa accumsan nisl, vitae lobortis velit purus eget
              nunc. Quisque ac elit magna. Sed euismod ligula eu vestibulum
              viverra. Nulla facilisi. Mauris id metus ut est pellentesque
              pellentesque. Maecenas ullamcorper, odio at efficitur rhoncus,
              justo nunc eleifend mi, id ultricies ligula lectus vel sem.
              Vestibulum ante ipsum primis in faucibus orci luct
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
