export default function JobDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>Job Details</h1>
      <p>Job ID: {params.id}</p>
      <p>TODO: Implement job detail view</p>
    </div>
  );
} 