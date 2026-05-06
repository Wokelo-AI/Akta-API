# Akta Company News API

OpenAPI specification and integration examples for the Akta company news API by Wokelo AI.

Akta provides structured company news monitoring with AI-generated summaries and article metadata.

- Website: [akta.wokelo.ai](https://akta.wokelo.ai/)
- API access: [playground.akta.pro](https://playground.akta.pro/)

## API Spec

- OpenAPI YAML: [`openapi/openapi.yaml`](openapi/openapi.yaml)
- OpenAPI JSON: [`openapi/openapi.json`](openapi/openapi.json)

## Base URL

```text
https://api.akta.pro
```

## Authentication

Requests are authenticated with an API key in the `x-api-key` header:

```http
x-api-key: YOUR_API_KEY
```

## Endpoints

| Method | Path | Status | Description |
| --- | --- | --- | --- |
| `GET` | `/api/v1/company/news/` | Current | Fetch recent news for a company using a company slug or company website URL. Supports `start_date`, `end_date`, `limit`, `offset`, `category`, and `blacklisted`. |

## Response Data

News records may include:

- `title`, `url`, and `published_date`
- `ai_summary`
- `publisher`, `author`, and `source`
- `company_name` and `company_names`
- `countries`
- `sentiment`
- `type`, `primary_tag`, and `secondary_tags`
- `primary_industry` and `secondary_industry`
- `newsworthiness_impact`

Responses include `data` and `count`, and may also include `status`, `total`, `limit`, and `offset`.

## Quick Start

Fetch company news:

```bash
curl --request GET \
  --url 'https://api.akta.pro/api/v1/company/news/?company=wokelo-ai&limit=10' \
  --header 'x-api-key: YOUR_API_KEY'
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
