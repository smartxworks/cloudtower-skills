# POST /update-license

**Resource:** [License](../resources/License.md)
**Operation ID:** `UpdateDeploy`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [LicenseUpdationParams](../schemas/License/LicenseUpdationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[WithTask_License_](../schemas/With/WithTask-License.md)

## Security

- **Authorization**
