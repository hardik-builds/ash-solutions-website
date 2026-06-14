import CaseStudyClient from './case-study-client';

export async function generateMetadata({ params }) {
  return {
    title: 'Case Study | ASH Solutions',
    description: 'Read the detailed challenge, solution, and measurable business outcomes of our premium digital platforms.',
  };
}

export default function CaseStudyPage({ params }) {
  // Pass the id parameter directly to the client component
  return <CaseStudyClient id={params.id} />;
}
