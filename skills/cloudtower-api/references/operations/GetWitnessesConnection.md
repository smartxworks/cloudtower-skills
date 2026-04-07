# POST /get-witnesses-connection

**Resource:** [Witness](../resources/Witness.md)
**Operation ID:** `GetWitnessesConnection`

## Parameters

| Name | In | Type | Required | Description |
|------|------|------|----------|-------------|
| `content-language` | header | ContentLanguage | No |  |
| `external-cloudtower-id` | header | string | No |  |

## Request Body

**Required:** Yes

**Content Types:** `application/json`

**Schema:** [GetWitnessesConnectionRequestBody](../schemas/Get/GetWitnessesConnectionRequestBody.md)

## Responses

| Status | Description |
|--------|-------------|
| 200 |  |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

**Success Response Schema:**

[WitnessConnection](../schemas/Witness/WitnessConnection.md)

## Security

- **Authorization**
