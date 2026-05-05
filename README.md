# Akta News Monitoring API

OpenAPI specification and integration examples for the Akta News Monitoring API by Wokelo AI.

Akta is a structured news API for AI workflows, monitoring products, and business intelligence applications. It returns recent news articles enriched with AI-generated summaries, publisher metadata, entity context, sentiment, geography, categories, and impact signals.

- Website: [akta.wokelo.ai](https://akta.wokelo.ai/)
- API docs: [docs.akta.pro](https://docs.akta.pro/)
- Get API access: [playground.akta.pro](https://playground.akta.pro/)

## API Spec

- OpenAPI YAML: [`openapi/openapi.yaml`](openapi/openapi.yaml)
- OpenAPI JSON: [`openapi/openapi.json`](openapi/openapi.json)

## Base URL

```text
https://api.wokelo.ai
```

## Authentication

All endpoints require bearer authentication:

```http
Authorization: Bearer YOUR_TOKEN
```

Use the token provided for your Akta API account.

## Endpoints

| Method | Path | Status | Description |
| --- | --- | --- | --- |
| `GET` | `/api/enterprise/company/news/` | Current | Fetch news for a company using a company permalink or website URL. Supports publisher, category, date range, limit, and offset filters. |
| `GET` | `/api/enterprise/industry/news/` | Current | Fetch news for an industry topic. Supports geography, date range, limit, offset, and excluded publisher filters. |
| `POST` | `/api/enterprise/newsfeed/news/` | Current | Search the newsfeed using filters such as industry, geography, sentiment, publication date range, breaking-news status, limit, and offset. |
| `POST` | `/api/news/start/` | Deprecated | Start a report-based company news run. |
| `POST` | `/api/news/fetch/` | Deprecated | Fetch news items from a report-based company news run. |

## Response Data

Responses vary by endpoint, but news records may include:

- `title`, `url`, and `published_date`
- `ai_summary`
- `publisher`, `author`, and `source`
- `company_name` or related entity fields
- `countries` or `geo`
- `sentiment`
- `type`, `primary_tag`, and `secondary_tags`
- `newsworthiness_impact`

Paginated responses include `count`, and may also include `total`, `limit`, and `offset`.

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

- `openapi/`: OpenAPI YAML and bundled JSON specifications.
- `examples/`: cURL examples for common integration flows.

## License

Copyright Wokelo AI. All rights reserved.
