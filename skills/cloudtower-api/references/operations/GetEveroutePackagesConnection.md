# POST /get-everoute-packages-connection

**Resource:** [EveroutePackage](../resources/EveroutePackage.md)
**Operation ID:** `GetEveroutePackagesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetEveroutePackagesConnectionRequestBody](../schemas/Get/GetEveroutePackagesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[EveroutePackageConnection](../schemas/Everoute/EveroutePackageConnection.md)

## Security

- **Authorization**
