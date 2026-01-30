import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head'; // Added Head import
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          src="./img/n1netails_icon_transparent.png"
          alt="N1netails Logo - Real-Time Alert Management and Monitoring Tools"
          style={{ width: 192, height: 192, marginBottom: 16 }}
        />

        <Heading as="h1" className="hero__title" style={{ fontSize: '2rem', fontWeight: 700 }}>
          React to Alerts in Real Time
        </Heading>
        <p className="hero__subtitle">Don't just receive alerts, follow the tail.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--md"
            to="/docs/intro">
            Explore Documentation
          </Link>
          <Link
            className="button button--secondary button--md"
            to="https://app.n1netails.com/#/register">
            Sign Up
          </Link>
          <Link
            className={clsx('button button--secondary button--md', styles.pumpButton)}
            to="https://pump.fun/coin/2Z6ygm5k6Gm4W9dgeDoc1dDSFpkLWp7wxo95DPszpump">
            <img src="/img/pump-fun-logo.png" className={styles.pumpIcon} />
            Buy on Pump Fun
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "N1netails",
    "url": "https://n1netails.com",
    "logo": "https://n1netails.com/img/n1netails_icon_transparent.png",
    "sameAs": [
      "https://github.com/n1netails",
      "https://discord.gg/ma9CCw7F2x"
    ]
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "N1netails Documentation",
    "url": "https://n1netails.com"
  };

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="N1netails provides powerful alert management and monitoring tools to help you streamline incident response. Integrate with Slack, Teams, Discord, and Telegram for real-time notifications.">
      <Head>
        <script type="application/ld+json">
          {JSON.stringify([organizationSchema, websiteSchema])}
        </script>
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
