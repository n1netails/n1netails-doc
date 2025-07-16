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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className={styles.ovrIntro}>
          <a href="/docs/quickstart">
            <div className={styles.ovrIntroText}>
              <div className="mb-2 flex items-center text-base font-medium">
                Developer quickstart
                <div className={styles.pointer}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M9.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 12 9.293 8.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <div className="text-sm text-text-default">Make your first API request in minutes. Learn the basics of the N1netails platform.</div>
              <div className="mt-4 flex items-center text-text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24" className="mr-2">
                  <path fillRule="evenodd" d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm1 5a1 1 0 1 0-2 0v4.586l-2.207 2.207a1 1 0 1 0 1.414 1.414l2.5-2.5A1 1 0 0 0 13 12V7Z" clipRule="evenodd"></path>
                </svg>
                <div className="text-xs">5 min</div>
              </div>
            </div>
          </a>
          <div className={clsx(styles.codeSample, 'dark-mode')}>
            <div className={styles.codeSampleHeader}>
              <div className={styles.codeSampleTitle}></div>
              <div className="exclude-from-copy">
                <button type="button" className="fHePM" data-variant="bare" data-size="sm" data-gutter-size="xs" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1i:" data-state="closed">
                  <span className="y48BD">curl</span>
                  <div className="relative flex items-center gap-2">
                    <svg width="8" height="11" viewBox="0 0 10 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="TPS5h">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.34151 0.747423C4.71854 0.417526 5.28149 0.417526 5.65852 0.747423L9.65852 4.24742C10.0742 4.61111 10.1163 5.24287 9.75259 5.6585C9.38891 6.07414 8.75715 6.11626 8.34151 5.75258L5.00001 2.82877L1.65852 5.75258C1.24288 6.11626 0.61112 6.07414 0.247438 5.6585C-0.116244 5.24287 -0.0741267 4.61111 0.34151 4.24742L4.34151 0.747423ZM0.246065 10.3578C0.608879 9.94139 1.24055 9.89795 1.65695 10.2608L5.00001 13.1737L8.34308 10.2608C8.75948 9.89795 9.39115 9.94139 9.75396 10.3578C10.1168 10.7742 10.0733 11.4058 9.65695 11.7687L5.65695 15.2539C5.28043 15.582 4.7196 15.582 4.34308 15.2539L0.343082 11.7687C-0.0733128 11.4058 -0.116749 10.7742 0.246065 10.3578Z"></path>
                    </svg>
                  </div>
                </button>
              </div>
              <button type="button" className="q1JFq _6Xpck" data-color="secondary" data-variant="bare" data-size="sm" data-gutter-size="xs" data-icon-size="sm" style={{'--scale': 0.96}}>
                <span className="XXtKF">
                  <span className="UHrFQ" data-align="start">
                    <span className="block _2CHFa">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2V5Zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v2ZM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1H5Z" clipRule="evenodd"></path>
                      </svg>
                    </span>
                  </span>
                </span>
              </button>
            </div>
            <div className={clsx(styles.codeSampleBody, styles.codeSampleBodySmall, styles.codeSampleBodyWithHeader)}>
              <div className="code-block">
                <pre className="hljs syntax-highlighter dark-mode code-sample-pre">
                  <code className="language-bash" style={{whiteSpace: 'pre'}}>
                    <span>curl -X POST https://app.n1netails.com/ninetails/alert \</span>
                    <span>  -H "Content-Type: application/json" \</span>
                    <span>  -H "N1ne-Token: YOUR_TOKEN_HERE" \</span>
                    <span>  -d '&#123;</span>
                    <span>    "title": "Database Alert",</span>
                    <span>    "description": "High latency observed",</span>
                    <span>    "details": "The read queries in the US-East cluster have been above 2s for over 5 minutes.",</span>
                    <span>    "timestamp": "2025-07-02T20:00:00Z",</span>
                    <span>    "level": "ERROR",</span>
                    <span>    "type": "SYSTEM_ALERT",</span>
                    <span>    "metadata": &#123;</span>
                    <span>      "region": "us-east-1",</span>
                    <span>      "cluster": "db-primary",</span>
                    <span>      "environment": "production"</span>
                    <span>    &#125;</span>
                    <span>  &#125;'</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
