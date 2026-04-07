# POST /create-organization

**Resource:** [Organization](../resources/Organization.md)
**Operation ID:** `CreateOrganization`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** Array of [OrganizationCreationParams](../schemas/Organization/OrganizationCreationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_Organization_](../schemas/With/WithTask-Organization.md)

## Security

- **Authorization**
