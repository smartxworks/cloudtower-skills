# POST /get-vdses-connection

**Resource:** [Vds](../resources/Vds.md)
**Operation ID:** `GetVdsesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetVdsesConnectionRequestBody](../schemas/Get/GetVdsesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[VdsConnection](../schemas/Vds/VdsConnection.md)

## Security

- **Authorization**
