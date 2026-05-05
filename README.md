# Akta News Monitoring API

OpenAPI specification and integration examples for the Akta News Monitoring API by Wokelo AI.

The API returns recent news articles enriched with AI-generated summaries, publisher metadata, sentiment, geography, categories, and impact signals.

## API Spec

- OpenAPI YAML: [`openapi/openapi.yaml`](openapi/openapi.yaml)
- OpenAPI JSON: [`openapi/openapi.json`](openapi/openapi.json)

## Base URL

```text
https://api.wokelo.ai
```

## Authentication

All endpoints require a JWT bearer token:

```http
Authorization: Bearer YOUR_TOKEN
```

Use the JWT token provided for your Akta API account.

## Endpoints

| Method | Path | Status | Description |
| --- | --- | --- | --- |
| `GET` | `/api/enterprise/company/news/` | Current | Fetch AI-enriched news for a company permalink or company URL. |
| `GET` | `/api/enterprise/industry/news/` | Current | Fetch AI-enriched news for an industry topic. |
| `POST` | `/api/enterprise/newsfeed/news/` | Current | Search the newsfeed using filters such as geography, sentiment, date range, and breaking-news status. |
| `POST` | `/api/news/start/` | Legacy | Start a report-based company news run. |
| `POST` | `/api/news/fetch/` | Legacy | Fetch news items from a legacy report run. |

## Quick Start

Fetch company news:

```bash
curl --request GET \
  --url 'https://api.wokelo.ai/api/enterprise/company/news/?company=tesla&category=PRODUCT%20RELATED&limit=100' \
  --header 'Authorization: Bearer YOUR_TOKEN'
```

Search the newsfeed:

```bash
curl --request POST \
  --url 'https://api.wokelo.ai/api/enterprise/newsfeed/news/' \
  --header 'Authorization: Bearer YOUR_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
    "breaking_news": true,
    "geo": ["USA"],
    "sentiment": "positive",
    "published_date_after": "2026-04-01",
    "published_date_before": "2026-04-30"
  }'
```

## Validate

```bash
npm install
npm run validate
```

Regenerate the bundled JSON spec:

```bash
npm run bundle
```

## Repository Contents

- `openapi/`: canonical OpenAPI artifacts.
- `examples/`: runnable cURL examples for common integration flows.

## License

Copyright Wokelo AI. All rights reserved.
