# POST /get-everoute-packages

**Resource:** [EveroutePackage](../resources/EveroutePackage.md)
**Operation ID:** `GetEveroutePackages`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetEveroutePackagesRequestBody](../schemas/Get/GetEveroutePackagesRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [EveroutePackage](../schemas/Everoute/EveroutePackage.md)

## Security

- **Authorization**
