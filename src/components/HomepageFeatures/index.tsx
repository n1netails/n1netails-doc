import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  imgSrc: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Disdord Webhook Client',
    imgSrc: require('/img/discord-webhook.png').default,
    description: (
      <>
        A lightweight Java client for sending Discord webhooks.
      </>
    ),
  },
  {
    title: 'Telegram Client',
    // Svg: require('@site/static/img/telegram-client.svg').default,
    imgSrc: require('/img/telegram-client.png').default,
    description: (
      <>
        A lightweight Java client for sending telegram notifications using telegram bots.
      </>
    ),
  },
  {
    title: 'More to come..',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    imgSrc: require('/img/more-to-come.png').default,
    description: (
      <>
        Currently working on developing N1netails core, N1netails clients and the alert management interface..
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
