async function main() {
  const params = new URLSearchParams({
    company: "tesla",
    start_date: "2026-03-01",
    end_date: "2026-05-05",
    limit: "10",
    offset: "0",
    blacklisted: "wokelo.ai",
  });

  const response = await fetch(
    `https://api.akta.pro/api/v1/company/news/?${params}`,
    {
      headers: {
        "x-api-key": "YOUR_API_KEY",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const payload = await response.json();

  for (const article of payload.data) {
    console.log(article.title);
    console.log(article.published_date, article.publisher);
    console.log(article.primary_tag, "|", article.sentiment);
    console.log(article.ai_summary);
    console.log(article.url);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
