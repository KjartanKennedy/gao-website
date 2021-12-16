import * as React from "react"
import "../styles/footer.css"

import EmailForm from "./emailForm"

const Footer = ({}) => {
  return (
    <footer>
      <div class="footer-content spacing-large">
        <div>
          <h2 class="spacing-small">
            Game Academy
            <br />
            of the Ozarks
          </h2>
          <p class="text-large">
            Guiding Arkansas into the new creative economy
          </p>
        </div>
        <div class="padding-top-large">
          <h3 class="spacing-x-small">Contact</h3>
          <p class="spacing-tiny">
            <strong>Student and class inquiries:</strong>
          </p>
          <p class="spacing-small">
            <a href="mailto:gameacademyozarks@gmail.com">
              {/*students@gameacademyozarks.org*/}gameacademyozarks@gmail.com
            </a>
          </p>
          <p class="spacing-tiny">
            <strong>Press inquiries:</strong>
          </p>
          <p class="spacing-small">
            <a href="mailto:gameacademyozarks@gmail.com">
              {/*press@gameacademyozarks.org*/}gameacademyozarks@gmail.com
            </a>
          </p>
          <p class="spacing-tiny">
            <strong>Support and partnerships:</strong>
          </p>
          <p class="spacing-small">
            <a href="mailto:gameacademyozarks@gmail.com">
              {/*partner@gameacademyozarks.org*/}gameacademyozarks@gmail.com
            </a>
          </p>
        </div>

        <div class="email-list-column">
          <p class="spacing-x-small">
            Want to hear about new classes, workshops, and more? Sign up for our
            emails!
          </p>
          <EmailForm />
        </div>
      </div>

      <div class="copyright">
        <p>©2021 Game Academy of the Ozarks</p>
      </div>
    </footer>
  )
}

export default Footer
