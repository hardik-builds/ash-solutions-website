// app/insights/page.js
import { generateMetadata } from '@/lib/metadata';
import InsightsClient from './insights-client';

export const metadata = generateMetadata('insights');

export default function InsightsPage() {
  return <InsightsClient />;
}
