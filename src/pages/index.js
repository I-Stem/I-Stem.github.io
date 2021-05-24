import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Document Accessibility',
    imageUrl: 'img/istem/Accessible_content_illustration.svg',
    description: (
      <>
        <p>
          State-of-the-art AI services to provide high quality accessible
          documents for people with print disabilities (blind, low vision and
          students with certain other learning disabilities)
        </p>

        <h6>✔Support for printed or handwritten content</h6>
        <h6>
          ✔ Advance formatting support (two column layouts, tables, headings
          etc.)
        </h6>
        <h6>✔Support for STEM-based content</h6>
        <h6>✔PDF remediation</h6>
        <h6>✔Download docs, accessible PDF, HTML or MP3 formats</h6>
        <h6>
          ✔Escalation of documents for manual remediation in case of any errors
        </h6>

        <ul className={styles.btnList}>
          <li>
            <a className={styles.tryBtn} href="https://portal.istemai.com">
              Try Now
            </a>
          </li>
          <li>
            <a className={styles.detailsBtn} href="details">
              View Details
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Audio/Video Accessibility',
    imageUrl: 'img/istem/audio_video_captioning_illustration.svg',
    description: (
      <>
        <p>
          High quality AI-powered automated captions and text extraction from
          audio/videos
        </p>
        <h6>
          ✔ Support for domain-specific custom captioning (e.g. a History
          student can train our models on their History textbook for accurate
          identification of non-standard History-specific terminology)
        </h6>
        <h6>✔Text extraction from videos</h6>
        <h6>✔Ability to organize audio/video files using tags</h6>
        <h6>
          ✔ Escalation of video captions or extracted text for manual
          remediation in case of errors
        </h6>

        <ul className={styles.btnList}>
          <li>
            <a className={styles.tryBtn} href="https://portal.istemai.com">
              Try Now
            </a>
          </li>
          <li>
            <a className={styles.detailsBtn} href="details">
              View Details
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

const sponsors = [
  {
    title: 'UNICEF Innovation Fund',
    imageUrl: 'img/istem/unicef-for-every-child-logo.png',
  },
  {
    title: 'Microsoft',
    imageUrl: 'img/istem/microsoft_black.png',
  },
  {
    title: 'United Nations envoy on youth',
    imageUrl: 'img/istem/UN_Envoy_on_youth.png',
  },
  {
    title: 'StartX',
    imageUrl: 'img/istem/startx_logo.png',
  },
];

function Sponsor({imageUrl, title}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--3')}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.sponsorImage} src={imgUrl} alt={title} />
          <br></br>
        </div>
      )}
    </div>
  );
}

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('row col--6', styles.feature)}>
      <div className={clsx('col', styles.featureText)}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {imgUrl && (
        <div className="col text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className={styles.heroProjectTagline}>
            {/* <img
              alt="logo"
              className={styles.heroLogo}
              src={useBaseUrl('/img/istem/istem_logo.png')}
            /> */}
            <span className={styles.heroTitleTextHtml}>
              <br></br>
              <b>{siteConfig.title}</b>
              <br></br>
              <small>{siteConfig.tagline}</small>
              <br></br>
              <div className={styles.buttons}>
                <Link
                  className={clsx('button button--primary button--lg')}
                  to={useBaseUrl('docs/getting-started')}
                >
                  <span className={styles.getStartedBtn}>Getting Started</span>
                </Link>
              </div>
            </span>
          </h1>
        </div>
      </header>

      <main>
        <div
          className={styles.content}
          // style={{width: '70%', marginLeft: '10rem'}}
        >
          <h2>Our Vision</h2>
          <p>
            There are over 1.3 billion people with disabilities around the
            world.
          </p>
          <p>
            Despite legislative measures and assistive technologies, there
            continues to be a big gap in education and employment opportunities
            for people with disabilities.
          </p>
          <p>
            Inaccessibility of study and professional material and lack of
            awareness are primary challenges.
          </p>
          <p>
            Recent advances in technology, however, makes it possible for people
            with disabilities to pursue several careers on an equal basis as
            others.
          </p>
          <p>
            <em>
              At I-Stem, our vision is to empower students and professionals
              with disabilities to realize their potential by enabling equal
              access to information, resources and opportunities.
            </em>
          </p>
        </div>
        <div className={styles.content}>
          <h2>Our Solutions</h2>
          {features && features.length > 0 && (
            <section className={styles.features}>
              <div className="container">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </section>
          )}
        </div>
        <div className={styles.content}>
          <h2>Want to contribute?</h2>
          <p>
            Interested in developing new feature? Found a bug in our app or
            something not working as expected? Want to help us with
            Documentation? Please have a look{' '}
            <Link to={useBaseUrl('docs/getting-started')}>here</Link> to know
            how to get started.
          </p>
        </div>
        <h2 className={styles.content}>Our Supporters</h2>
        <div className={clsx(styles.announcement, styles.announcementDark)}>
          <div className={styles.announcementInner}>
            {sponsors && sponsors.length > 0 && (
              <section className={styles.features}>
                <div className="container">
                  <div className="row">
                    {sponsors.map((props, idx) => (
                      <Sponsor key={idx} {...props} />
                    ))}
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
