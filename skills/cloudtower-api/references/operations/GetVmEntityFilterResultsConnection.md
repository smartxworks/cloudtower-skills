# POST /get-vm-entity-filter-results-connection

**Resource:** [VmEntityFilterResult](../resources/VmEntityFilterResult.md)
**Operation ID:** `GetVmEntityFilterResultsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVmEntityFilterResultsConnectionRequestBody](../schemas/Get/GetVmEntityFilterResultsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VmEntityFilterResultConnection](../schemas/Vm/VmEntityFilterResultConnection.md)

## Security

- **Authorization**
