import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Person from "../components/person"
import ClassTile from "../components/classTile"
import EmailForm from "../components/emailForm"

import davidFredrick from "../images/team/KjartanKennedy.jpg"
import kjartanKennedy from "../images/team/KjartanKennedy.jpg"
import gregRogers from "../images/team/GregRogers.png"

import unityLogo from "../images/companies/U_Logo_Black_RGB.svg"
import amazonLogo from "../images/companies/Amazon_logo.svg"
import microsoftLogo from "../images/companies/microsoft.svg"
import turn10Logo from "../images/companies/Turn10.png"
import retroLogo from "../images/companies/RetroStudiosLogo.png"
import armatureLogo from "../images/companies/armature.png"
import kitBash3DLogo from "../images/companies/kitbash3d.png"
import tesseractLogo from "../images/companies/Tesseract.svg"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />

      <section class="hero-section spacing-x-large">
        <div class="container">
          <div class="hero-content">
            <p class="coming-soon spacing-x-small">Coming soon —</p>
            <h1 class="spacing-small">
              Learn to make games from local industry professionals
            </h1>
            <p class="spacing-medium">
              Game Academy of the Ozarks is an early stage Northwest Arkansas
              non-profit focused on teaching game development and real-time 3D
              skills to high school students in Northwest Arkansas.
            </p>
            <p class="spacing-small">
              <strong>
                Subscribe to get notified when registration opens in early 2022:
              </strong>
            </p>
            <div>
              <EmailForm />
            </div>
          </div>
        </div>
      </section>
      <section id="methods">
        <div class="container grid-4-by-2">
          <h2 class="grid-title">Professional, project-driven education</h2>

          <div class="grid-content">
            <h3 class="spacing-small">Learn from industry professionals</h3>
            <p>
              Our instructors have worked for and helped students get jobs at
              major tech companies.
            </p>
          </div>
          <div class="grid-content">
            <h3 class="spacing-small">Projects to show off your new skills</h3>
            <p>
              Our project-driven curriculum will have you finishing each course
              with a project to show friends, family, and potential employers.
            </p>
          </div>
          <div class="grid-content">
            <h3 class="spacing-small">Face-to-face instruction</h3>
            <p>
              Sessions are taught face-to-face, giving opportunity for tailored
              instruction.
            </p>
          </div>
          <div class="grid-content">
            <h3 class="spacing-small">Small classes</h3>
            <p>
              With a maximum of 15 students per class, you’ll get the individual
              attention you need to succeed.
            </p>
          </div>
          <div class="grid-content">
            <h3 class="spacing-small">Sessions on evenings and weekends</h3>
            <p>
              Game Academy sessions are taught on evenings and weekends to work
              with your schedule and our instructors’ work schedules.
            </p>
          </div>
          <div class="grid-content">
            <h3 class="spacing-small">
              Currently available to Students aged 15-18
            </h3>
            <p>
              For the time being, registration is limited to create a cohesive
              learning environment. Later we’ll open sessions for adults.
            </p>
          </div>
        </div>
      </section>

      <section id="classes">
        <div class="container classes-grid">
          <div class="grid-title">
            <h2 class="spacing-medium">Classes</h2>
            <p>
              Every class is taught by an active industry professional, ensuring
              that you’re learning skills currently in use by the industry.
            </p>
          </div>

          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <ClassTile
                className="grid-content"
                name={post.frontmatter.title}
                image={post.frontmatter.hero_image}
                price={post.frontmatter.price}
                numSessions={post.frontmatter.numSessions}
              />

              // <li key={post.fields.slug}>
              //   <article
              //     className="post-list-item"
              //     itemScope
              //     itemType="http://schema.org/Article"
              //   >
              //     <header>
              //       <h2>
              //         <Link to={post.fields.slug} itemProp="url">
              //           <span itemProp="headline">{title}</span>
              //         </Link>
              //       </h2>
              //       <small>{post.frontmatter.date}</small>
              //     </header>
              //     <section>
              //       <p
              //         dangerouslySetInnerHTML={{
              //           __html: post.frontmatter.description || post.excerpt,
              //         }}
              //         itemProp="description"
              //       />
              //     </section>
              //   </article>
              // </li>
            )
          })}
        </div>
      </section>

      <section class="no-padding" id="mission">
        <div class="banner" id="mission-banner">
          <div class="container">
            <h2 class="banner-heading large">
              Guiding Arkansas into the new creative economy
            </h2>
          </div>
        </div>

        <div class="section-wrap">
          <div class="container grid-2-3-asymmetric">
            <aside class="">
              <h3 class="spacing-large">
                <span class="emphasis-extreme">600%</span>
                <br />
                <span class="text-large weight-900">
                  faster job demand growth.
                </span>
              </h3>
              <p class="text-large spacing-medium">
                Real-time 3D work involves many skills. Artists, engineers,
                designers, producers, composers, and more are all part of the
                equation. No matter your passion, there’s a role for you.
              </p>
              <p class="text-large text-secondary">
                *According to a{" "}
                <a
                  href="https://www.burning-glass.com/research-project/visualizing-future-3d-skills-workforce/"
                  target="_blank"
                >
                  2019 report by Burning Glass
                </a>
                , job demand for real-time 3D skills has grown over 600% faster
                than the overall job market.
              </p>
            </aside>
            <div>
              <p class="text-large spacing-medium">
                Our mission is to empower Arkansans to build careers in
                innovative industries by providing access to inclusive,
                affordable, and professional instruction in real-time 3D skills,
                and nurturing those careers through a commitment to community.
              </p>
              <p class="text-large spacing-medium">
                At Game Academy of the Ozarks, we envision a flourishing
                real-time 3D industry here in Northwest Arkansas, built for
                everyone, with today’s professionals lighting the way for
                tomorrow’s innovators.
              </p>
              <p class="text-large spacing-medium">
                We are a non-profit school dedicated to making these skills
                available to anyone who wants them, ensuring a diverse,
                equitable, and inclusive industry full of different perspectives
                and backgrounds.
              </p>
              <p class="text-large">
                Want to support our mission? Donate to our scholarship fund or
                become a sponsor by reaching out to us at{" "}
                <a href="mailto:gameacademyozarks@gmail.com">
                  {/* partner@gameacademyozarks.org */}
                  gameacademyozarks@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="team">
        <div class="container grid-2-3-asymmetric">
          <div class="">
            <h2 class="spacing-large">
              Today’s professionals lighting the way
            </h2>
            <div>
              <Person
                name="Dr. David Fredrick"
                image={davidFredrick}
                title="Professor"
                company="University of Arkansas"
                className="spacing-small"
              />
              <Person
                name="Kjartan Kennedy"
                image={kjartanKennedy}
                title="Studio Director"
                company="Causeway Studios"
                className="spacing-small"
              />
              <Person
                name="Greg Rogers"
                image={gregRogers}
                title="Creative Director"
                company="Causeway Studios"
              />
            </div>
          </div>
          <div class="shift-down">
            <p class="spacing-small text-large">
              Our team and instructors are made up of active industry
              professionals. We’ve worked for and helped students get jobs at
              major technology and game companies including:
            </p>
            <div class="company-logo-list spacing-large">
              {/* <StaticImage src="./starting-banner.png" alt="" /> */}

              <img
                src={unityLogo}
                title="Unity Technologies"
                alt="Unity Technologies logo"
              />
              <img src={amazonLogo} title="Amazon" alt="Amazon logo" />
              <img src={microsoftLogo} title="Microsoft" alt="Microsoft logo" />
              <img
                src={retroLogo}
                title="Retro Studios"
                alt="Retro Studios logo"
              />
              <img
                src={turn10Logo}
                title="Turn 10 Studios"
                alt="Turn 10 logo"
              />

              <img
                src={armatureLogo}
                title="Armature Studio"
                alt="Armature logo"
              />
              <img
                src={kitBash3DLogo}
                title="KitBash3D"
                alt="KitBash 3D logo"
              />
              <img
                src={tesseractLogo}
                title="Tesseract Center"
                alt="Tesseract logo"
              />
            </div>
            <p class="text-large">
              Want to join our cause? Whether it’s as an instructor, marketer,
              advisor, mentor, or anything else, we’d love to hear from you!
              Contact us at{" "}
              <a href="mailto:gameacademyozarks@gmail.com">
                {/*team@gameacademyozarks.org*/}gameacademyozarks@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <section class="no-padding hide-overflow" id="contact">
        <div class="banner vertical-padding-x-large" id="starting-banner">
          <div class="container flex-column-center">
            <h2 class="center banner-heading weight-700 spacing-medium">
              In-person classes starting early 2022
            </h2>
            <p class="spacing-small">
              Subscribe to get notified when registration opens:
            </p>
            <EmailForm />
            {/* <button>Register now</button> */}
          </div>
        </div>
      </section>
      <section>
        <div class="container grid-4-by-1">
          <h2 class="grid-title">Have any questions? Get in touch!</h2>
          <div>
            <h3 class="spacing-x-small">Students and course inquiries:</h3>
            <a
              href="mailto:gameacademyozarks@gmail.com"
              class="display-block spacing-medium"
            >
              {/* students@gameacademyozarks.org */}
              gameacademyozarks@gmail.com
            </a>
            <p>
              If you have any questions that haven’t been answered about our
              classes, instructors, or policies, please reach out to us.
            </p>
          </div>
          <div>
            <h3 class="spacing-x-small">Support and partnerships:</h3>
            <a
              href="mailto:gameacademyozarks@gmail.com"
              class="display-block spacing-medium"
            >
              {/* partner@gameacademyozarks.org */}
              gameacademyozarks@gmail.com
            </a>
            <p class="spacing-medium">
              We are always looking for people or companies to support the
              accessibility of our mission by contributing to our scholarship
              fund. We are always looking for people or companies to support the
              accessibility of our mission by contributing to our scholarship
              fund.
            </p>
            <p>
              In addition to scholarships, we also need physical spaces in which
              to teach our classes and passionate people who will join our
              mission to empower the dreams and ambitions of our students. Let
              us know if that’s you.
            </p>
          </div>
          <div>
            <h3 class="spacing-x-small">Press inquiries:</h3>
            <a
              href="mailto:gameacademyozarks@gmail.com"
              class="display-block spacing-medium"
            >
              {/* press@gameacademyozarks.org */}
              gameacademyozarks@gmail.com
            </a>
            {/* <p>
                In addition to reaching out, you can find our presskit here.
              </p> */}
          </div>
        </div>
      </section>
      {/* <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol> */}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          numSessions
          price
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
