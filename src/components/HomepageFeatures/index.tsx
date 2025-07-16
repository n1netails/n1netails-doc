import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import HomepageQuickstart from '@site/src/components/HomepageQuickstart';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  imgSrc: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
   {
    title: 'N1netails',
    imgSrc: require('/img/n1netails_icon_transparent.png').default,
    description: (
      <>
        Your open-source solution for straightforward application alert monitoring.
        <Link to="/docs/n1netails/n1netails-info"> Discover N1netails.</Link>
      </>
    ),
  },
  {
    title: 'Kuda',
    imgSrc: require('/img/kuda_transparent.png').default,
    description: (
      <>
        Integrate your Java applications seamlessly with N1netails using Kuda.
        <Link to="/docs/n1netails-kuda/kuda-info"> Get started with Kuda.</Link>
      </>
    ),
  },
  {
    title: 'Discord Webhook Client',
    imgSrc: require('/img/discord_n1netails.png').default,
    description: (
      <>
        Bring N1netails alerts directly into your team's Discord server.
        <Link to="/docs/n1netails-discord-webhook-client/create-webhook"> Integrate with Discord.</Link>
      </>
    ),
  },
  {
    title: 'Telegram Client',
    // Svg: require('@site/static/img/telegram-client.svg').default,
    imgSrc: require('/img/telegram_n1netails.png').default,
    description: (
      <>
        Stay informed on the go with the N1netails Telegram Client.
        <Link to="/docs/n1netails-telegram-client/create-bot"> Set up Telegram alerts.</Link>
      </>
    ),
  },
  {
    title: 'Future Enhancements',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    imgSrc: require('/img/more-to-come.png').default,
    description: (
      <>
        The N1netails ecosystem is constantly evolving. Stay tuned for new features!
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
        <HomepageQuickstart />
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
