import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  imgSrc: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Discord Webhook Client',
    imgSrc: require('/img/discord-webhook.png').default,
    description: (
      <>
        Quickly integrate N1netails with your Discord server. Get instant notifications and follow the alert tail directly within your communication hub for immediate reaction. <Link to="/docs/n1netails-discord-webhook-client/create-webhook">Learn how to integrate with Discord.</Link>
      </>
    ),
  },
  {
    title: 'Telegram Client',
    // Svg: require('@site/static/img/telegram-client.svg').default,
    imgSrc: require('/img/telegram-client.png').default,
    description: (
      <>
        Receive real-time alerts via Telegram. This lightweight client ensures you're always in the loop, allowing for swift responses to any event by following the alert's origin. <Link to="/docs/n1netails-telegram-client/create-bot">Learn how to set up Telegram alerts.</Link>
      </>
    ),
  },
  {
    title: 'Future Enhancements',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    imgSrc: require('/img/more-to-come.png').default,
    description: (
      <>
        We're continuously enhancing N1netails! Expect advanced alert correlation, smarter tail-following, a comprehensive management interface, and more integrations soon. Stay tuned for powerful new ways to react to your alerts!
      </>
    ),
  },
];

function Feature({title, imgSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureImg} alt={title} style={{width: 100, height: 100}} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
