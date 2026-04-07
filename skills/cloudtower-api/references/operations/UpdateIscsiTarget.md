# POST /update-iscsi-target

**Resource:** [IscsiTarget](../resources/IscsiTarget.md)
**Operation ID:** `UpdateIscsiTarget`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [IscsiTargetUpdationParams](../schemas/Iscsi/IscsiTargetUpdationParams.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

Array of [WithTask_IscsiTarget_](../schemas/With/WithTask-IscsiTarget.md)

## Security

- **Authorization**
