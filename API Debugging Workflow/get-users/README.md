# Get Users API

Retrieves a list of user records.

## Endpoint

```http
GET {{baseUrl}}/api/users
```

## Purpose

This endpoint is used to retrieve all available user records.

## Request headers

| Header | Value |
|---|---|
| Authorization | `Bearer {{apiToken}}` |
| x-api-key | `{{apiKey}}` |
| Content-Type | `application/json` |

## Successful response

### `200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com"
    }
  ]
}
```

## Error responses

| Status | Description |
|---|---|
| `401 Unauthorized` | Authentication credentials are missing, invalid, or expired. |
| `429 Too Many Requests` | The API rate limit has been exceeded. |

## Test scenarios

| Scenario | Expected status |
|---|---|
| Retrieve all users | `200 OK` |
| Request without valid authentication | `401 Unauthorized` |
| Exceed the API request limit | `429 Too Many Requests` |

## Postman location

`Get Users`
