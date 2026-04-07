# POST /delete-organization

**Resource:** [Organization](../resources/Organization.md)
**Operation ID:** `DeleteOrganization`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [OrganizationDeletionParams](../schemas/Organization/OrganizationDeletionParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_DeleteOrganization_](../schemas/With/WithTask-DeleteOrganization.md)

## Security

- **Authorization**
