# POST /get-organizations-connection

**Resource:** [Organization](../resources/Organization.md)
**Operation ID:** `GetOrganizationsConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetOrganizationsConnectionRequestBody](../schemas/Get/GetOrganizationsConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[OrganizationConnection](../schemas/Organization/OrganizationConnection.md)

## Security

- **Authorization**
