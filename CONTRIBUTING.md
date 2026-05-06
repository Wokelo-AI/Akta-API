# Contributing

## Updating the API Spec

1. Update `openapi/openapi.yaml`.
2. Run `npm run validate`.
3. Run `npm run bundle` to refresh `openapi/openapi.json`.
4. Keep examples in `examples/` aligned with any endpoint or schema changes.
5. Keep documentation pages in `docs/` aligned with the OpenAPI contract.

## Review

The OpenAPI file should be updated from confirmed API behavior and reviewed before publishing. Public docs should use placeholder credentials such as `YOUR_API_KEY` and must not include real API keys, request logs with credentials, or customer data.
