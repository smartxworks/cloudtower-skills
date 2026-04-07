# POST /get-deploys-connection

**Resource:** [Deploy](../resources/Deploy.md)
**Operation ID:** `GetDeploysConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetDeploysConnectionRequestBody](../schemas/Get/GetDeploysConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[DeployConnection](../schemas/Deploy/DeployConnection.md)

## Security

- **Authorization**
