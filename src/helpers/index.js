export function formatDate(date) {
  const fullDate = new Date(date);

  if (fullDate)
    return fullDate.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
}

export function getHours(date) {
  const fullDate = new Date(date);

  if (fullDate)
    return fullDate.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
}
