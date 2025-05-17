export default function EventDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>Event Details</h1>
      <p>Event ID: {params.id}</p>
      <p>TODO: Implement event detail view</p>
    </div>
  );
} 