# GET /resource-changes

**Resource:** [Internal](../resources/Internal.md)
**Operation ID:** `GetResourceChanges`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `action` | query | string | No |  |
| `resource_type` | query | string | No |  |
| `resource_id` | query | string | No |  |
| `start_revision` | query | string | No |  |
| `limit` | query | ResourceChangeLimit | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[ResourceChangeResponse](../schemas/Resource/ResourceChangeResponse.md)

## Security

- **Basic**
