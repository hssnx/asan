export default function HelpRequestDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>Help Request Details</h1>
      <p>Help Request ID: {params.id}</p>
      <p>TODO: Implement help request detail view</p>
    </div>
  );
} 