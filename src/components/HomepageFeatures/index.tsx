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
    title: 'N1netails',
    imgSrc: require('/img/n1netails_icon_transparent.png').default,
    description: (
      <>
        N1netails is your open-source solution for straightforward application alert monitoring. Move beyond complex SIEM tools or basic logging with a system designed for clarity and actionable insights. N1netails provides customizable alert triggers, real-time notifications, and an intuitive dashboard to visualize application health, empowering you to proactively address issues and improve stability. <Link to="/docs/n1netails/n1netails-info">Discover N1netails and take control of your application monitoring.</Link>
      </>
    ),
  },
  {
    title: 'Kuda',
    imgSrc: require('/img/kuda_transparent.png').default,
    description: (
      <>
        Integrate your Java applications seamlessly with N1netails using Kuda. This lightweight, plug-and-play library allows developers to send detailed, structured alerts directly to the N1netails platform. Simplify your alert instrumentation and ensure critical information from your Java services is captured efficiently. <Link to="/docs/n1netails-kuda/kuda-info">Get started with N1netails Kuda for robust Java application alerting.</Link>
      </>
    ),
  },
  {
    title: 'Discord Webhook Client',
    imgSrc: require('/img/discord_n1netails.png').default,
    description: (
      <>
        Bring N1netails alerts directly into your team's Discord server. Our webhook client enables instant notifications, allowing your team to see and react to alerts within your primary communication hub. Follow the 'alert tail' for rapid context and collaborative incident response. <Link to="/docs/n1netails-discord-webhook-client/create-webhook">Integrate N1netails with Discord for streamlined alert management.</Link>
      </>
    ),
  },
  {
    title: 'Telegram Client',
    // Svg: require('@site/static/img/telegram-client.svg').default,
    imgSrc: require('/img/telegram_n1netails.png').default,
    description: (
      <>
        Stay informed on the go with the N1netails Telegram Client. Receive real-time alert notifications directly on your Telegram app, ensuring you're aware of critical events anytime, anywhere. This lightweight client facilitates swift responses by providing immediate alert details and the ability to trace the issue's origin. <Link to="/docs/n1netails-telegram-client/create-bot">Set up Telegram alerts and never miss a critical event.</Link>
      </>
    ),
  },
  {
    title: 'Future Enhancements',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    imgSrc: require('/img/more-to-come.png').default,
    description: (
      <>
        The N1netails ecosystem is constantly evolving. We are actively working on future enhancements including advanced alert correlation to reduce noise, AI-powered 'smarter' tail-following for deeper insights, a more comprehensive central management interface, and a wider range of integrations with popular services. Stay tuned as we roll out powerful new capabilities to elevate your alert monitoring experience!
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
