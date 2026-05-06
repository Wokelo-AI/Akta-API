# Akta Company News API

Akta is the news API for the agentic era, built around a structured company news feed for AI workflows, agents, products, and enterprise news intelligence.

This repository contains the public OpenAPI specification, documentation, and integration examples for the Akta Company News Monitoring API by Wokelo AI.

- Website: [akta.wokelo.ai](https://akta.wokelo.ai/)
- Playground: [playground.akta.pro](https://playground.akta.pro/)
- Production API: `https://api.akta.pro`

## API Surface

Akta currently exposes one public API endpoint in this repository:

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/api/v1/company/news/` | Fetch recent company news enriched with AI summaries, event categories, publisher metadata, sentiment, company mentions, geography, industry tags, and article text. |

Authentication uses an API key in the `x-api-key` header.

```http
x-api-key: YOUR_API_KEY
```

## Quick Start

```bash
curl -G "https://api.akta.pro/api/v1/company/news/" \
  -H "x-api-key: YOUR_API_KEY" \
  --data-urlencode "company=tesla" \
  --data-urlencode "limit=10"
```

The endpoint returns results synchronously in the HTTP response.

## Supported Filters

| Parameter | Required | Description |
| --- | --- | --- |
| `company` | Yes | Company name, slug, or company URL. Example: `tesla` or `https://www.tesla.com/`. |
| `start_date` | No | Start date for the news timeframe, formatted as `YYYY-MM-DD`. |
| `end_date` | No | End date for the news timeframe, formatted as `YYYY-MM-DD`. |
| `category` | No | Comma-separated list of news categories to include. |
| `limit` | No | Maximum number of articles to return in the current response. Default is `10`; maximum is `1000`. |
| `offset` | No | Number of records to skip before returning results. Use with `limit` for pagination. |
| `blacklisted` | No | Comma-separated publisher domains to exclude from results. |

## Response Data

Successful responses include:

- `status`
- `data`
- `count`
- `total`
- `limit`
- `offset`

Article objects may include:

- `title`, `url`, and `published_date`
- `ai_summary`
- `type`, `primary_tag`, and `secondary_tags`
- `publisher` and `author`
- `company_name` and `company_names`
- `countries`
- `sentiment`
- `newsworthiness_impact`
- `primary_industry` and `secondary_industry`
- `scraped_text`

## Repository Contents

- `openapi/openapi.yaml`: source OpenAPI 3.1 specification.
- `openapi/openapi.json`: bundled JSON OpenAPI specification.
- `docs/`: public documentation pages.
- `examples/`: cURL, Python, and JavaScript examples.

## Local Validation

Install dependencies:

```bash
npm install
```

Validate the OpenAPI spec:

```bash
npm run validate
```

Regenerate the bundled JSON spec:

```bash
npm run bundle
```

## Security

Do not commit API keys, request logs containing credentials, customer data, or `.env` files. Use `YOUR_API_KEY` in public examples.

## License

Copyright Wokelo AI. All rights reserved.
