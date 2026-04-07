# POST /get-iscsi-targets

**Resource:** [IscsiTarget](../resources/IscsiTarget.md)
**Operation ID:** `GetIscsiTargets`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetIscsiTargetsRequestBody](../schemas/Get/GetIscsiTargetsRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [IscsiTarget](../schemas/Iscsi/IscsiTarget.md)

## Security

- **Authorization**
