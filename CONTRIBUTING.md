# Contributing

## Updating the API Spec

1. Update `openapi/openapi.yaml`.
2. Run `npm run validate`.
3. Run `npm run bundle` to refresh `openapi/openapi.json`.
4. Keep examples in `examples/` aligned with any endpoint or schema changes.

## Source of Truth

The OpenAPI file should be updated from confirmed API behavior and reviewed before publishing.
