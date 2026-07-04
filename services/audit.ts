export async function generateAudit(url: string) {

  const response = await fetch("/api/audit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate audit");
  }

  return response.json();
}