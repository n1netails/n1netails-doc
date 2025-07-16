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
      </div>
    </section>
  );
}
