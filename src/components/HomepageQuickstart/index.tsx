import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import CodeBlock from '@theme/CodeBlock';
import styles from './styles.module.css';

const curlRequest = `curl -X POST https://app.n1netails.com/ninetails/alert \\
  -H "Content-Type: application/json" \\
  -H "N1ne-Token: $N1NETAILS_TOKEN" \\
  -d '{
    "title": "Database Alert",
    "description": "High latency observed",
    "details": "The read queries in the US-East cluster have been above 2s for over 5 minutes.",
    "timestamp": "2025-07-02T20:00:00Z",
    "level": "ERROR",
    "type": "SYSTEM_ALERT",
    "metadata": {
      "region": "us-east-1",
      "cluster": "db-primary",
      "environment": "production"
    }
  }'`;

export default function HomepageQuickstart(): ReactNode {
  return (
    <section className={styles.quickstart}>
      <div className="container">
        <div className={styles.quickstartInner}>
          <div className={styles.text}>
            <Heading as="h2">Developer Quickstart</Heading>
            <p>
              Get started with N1netails by sending your first alert. For more details, check out the{' '}
              <Link to="/docs/n1netails/n1netails-post-tail-alert">
                POST Tail Alert documentation
              </Link>.
            </p>
          </div>

          <div className={styles.code}>
            <CodeBlock language="bash" title="Send Your First Tail Alert">
              {curlRequest}
            </CodeBlock>
          </div>
        </div>

        {/* --- Kitsune Mid-Page Section --- */}
        <div className={styles.kitsuneSection}>
          <h2 className="text-4xl font-bold mb-6">
            Awaken the Ninetailed Fox of Alerts
          </h2>

          <p className="text-lg max-w-2xl mx-auto mb-12">
            n1netails delivers alerts with the speed, precision, and intelligence of the mythical kitsune -
            sending notifications to your favorite platforms with minimal setup.
          </p>

          {/* Tail One — image right */}
          <div className={`${styles.kitsuneTail}`}>
            <div className="max-w-xl" style={{ textAlign: 'left' }}>
              <h3 className="text-2xl font-semibold mb-3">Tail One - Instant Delivery</h3>
              <p className="text-lg">
                Alerts move at fox-spirit speed - instantly delivered to Telegram, Slack,
                Discord, Teams, or Email with a single request.
              </p>
            </div>
            <img
              src="/img/quickstart/n1netails-letter.jpg"
              alt="Fox Tail One"
              className={styles.kitsuneImage}
            />
          </div>

          {/* Tail Two — image left */}
          <div className={`${styles.kitsuneTail} ${styles.tailReverse}`}>
            <div className="max-w-xl" style={{ textAlign: 'right' }}>
              <h3 className="text-2xl font-semibold mb-3">Tail Two - Multi-Platform Casting</h3>
              <p className="text-lg">
                One alert, many destinations - broadcast your warning across multiple 
                platforms without re-sending the same payload.
              </p>
            </div>
            <img
              src="/img/quickstart/n1netails-communication.jpg"
              alt="Fox Tail Two"
              className={styles.kitsuneImage}
            />
          </div>

          {/* Tail Three — image right */}
          <div className={`${styles.kitsuneTail}`}>
            <div className="max-w-xl" style={{ textAlign: 'left' }}>
              <h3 className="text-2xl font-semibold mb-3">Tail Three - Minimal Setup</h3>
              <p className="text-lg">
                Generate a token, send a POST request, and the fox does the rest -
                no complex configuration needed.
              </p>
            </div>
            <img
              src="/img/quickstart/n1ne-token-transparent.png"
              alt="Fox Tail Three"
              className={styles.kitsuneImage}
            />
          </div>

          {/* Tail Four — image left */}
          <div className={`${styles.kitsuneTail} ${styles.tailReverse}`}>
            <div className="max-w-xl" style={{ textAlign: 'right' }}>
              <h3 className="text-2xl font-semibold mb-3">Tail Four — Developer-Friendly APIs</h3>
              <p className="text-lg">
                A simple, modern REST API with clean request bodies — perfect for 
                backend services, cron jobs, or embedded tooling.
              </p>
            </div>
            <img
              src="/img/quickstart/fox-reading-transparent.png"
              alt="Fox Tail Four"
              className={styles.kitsuneImage}
            />
          </div>

          {/* Tail Five — image right */}
          {/* <div className={`${styles.kitsuneTail}`}>
            <div className="max-w-xl" style={{ textAlign: 'left' }}>
              <h3 className="text-2xl font-semibold mb-3">Tail Five — Error & Exception Alerts</h3>
              <p className="text-lg">
                Capture errors and uncaught exceptions automatically using 
                n1netails SDKs — your fox watches over your application.
              </p>
            </div>
            <img
              src="https://i.imgur.com/ekKJg5p.jpeg"
              alt="Fox Tail Five"
              className={styles.kitsuneImage}
            />
          </div> */}

          {/* Tail Six — image left */}
          {/* <div className={`${styles.kitsuneTail} ${styles.tailReverse}`}>
            <div className="max-w-xl" style={{ textAlign: 'right' }}>
              <h3 className="text-2xl font-semibold mb-3">Tail Six — Team & Organization Ready</h3>
              <p className="text-lg">
                Assign alerts to multiple team members, manage tokens per 
                organization, and prepare for SSO integrations.
              </p>
            </div>
            <img
              src="https://i.imgur.com/3Vuq1LV.jpeg"
              alt="Fox Tail Six"
              className={styles.kitsuneImage}
            />
          </div> */}

          {/* Tail Seven — image right */}
          {/* <div className={`${styles.kitsuneTail}`}>
            <div className="max-w-xl" style={{ textAlign: 'left' }}>
              <h3 className="text-2xl font-semibold mb-3">Tail Seven — Manual Alerting</h3>
              <p className="text-lg">
                Need to send a one-time alert? Use the dashboard to manually trigger
                notifications without calling the API.
              </p>
            </div>
            <img
              src="https://i.imgur.com/EPr8vJW.jpeg"
              alt="Fox Tail Seven"
              className={styles.kitsuneImage}
            />
          </div> */}

          {/* Tail Eight — image left */}
          {/* <div className={`${styles.kitsuneTail} ${styles.tailReverse}`}>
            <div className="max-w-xl" style={{ textAlign: 'right' }}>
              <h3 className="text-2xl font-semibold mb-3">Tail Eight — Real-Time Delivery Logs</h3>
              <p className="text-lg">
                Track every alert's status, view successes and failures, and
                inspect the full delivery log right inside your dashboard.
              </p>
            </div>
            <img
              src="https://i.imgur.com/6Vzf7CJ.jpeg"
              alt="Fox Tail Eight"
              className={styles.kitsuneImage}
            />
          </div> */}

          {/* Tail Nine — image right */}
          {/* <div className={`${styles.kitsuneTail}`}>
            <div className="max-w-xl" style={{ textAlign: 'left' }}>
              <h3 className="text-2xl font-semibold mb-3">Tail Nine — Self-Hosted Friendly</h3>
              <p className="text-lg">
                n1netails was built for solo developers, teams, and companies that prefer
                full control — with a future-proof architecture that can run on your own servers.
              </p>
            </div>
            <img
              src="https://i.imgur.com/1q4Vxh7.jpeg"
              alt="Fox Tail Nine"
              className={styles.kitsuneImage}
            />
          </div> */}


          {/* CTA */}
          <div className="mt-14 text-center">
            <p className="text-lg mb-4">
              Join the path of the ninetailed fox. Manage notifications and alerts with n1netails.
            </p>

            <Link
              className="button button--secondary button--md"
              style={{ marginLeft: '5px' }}
              to="https://app.n1netails.com/#/register">
              Start Now
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
