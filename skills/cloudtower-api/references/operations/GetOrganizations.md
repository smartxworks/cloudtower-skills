# POST /get-organizations

**Resource:** [Organization](../resources/Organization.md)
**Operation ID:** `GetOrganizations`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetOrganizationsRequestBody](../schemas/Get/GetOrganizationsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [Organization](../schemas/Organization/Organization.md)

## Security

- **Authorization**
