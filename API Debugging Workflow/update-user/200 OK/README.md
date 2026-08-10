# Update User — 200 OK

## Scenario

A `PUT /api/users/{{userId}}` request successfully updates an existing user.

**Method:** `PUT`  
**Endpoint:** `{{baseUrl}}/api/users/{{userId}}`  
**Expected status:** `200 OK`  
**Actual status:** `200 OK`

## Purpose

Demonstrates a successful Update User request.

## Request headers

| Header | Value |
|---|---|
| Authorization | `Bearer {{apiToken}}` |
| x-api-key | `{{apiKey}}` |
| Content-Type | `application/json` |

## Path parameter

| Parameter | Description | Example |
|---|---|---|
| `userId` | Unique identifier of the user to update | `200` |

## Request body

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

## Expected result

The API updates the user record and returns `200 OK`.

## Actual result

The API returns `200 OK`.

```json
{
  "success": true,
  "message": "User updated successfully",
  "data": {
    "id": 200,
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
}
```

## Verification

Confirm that the response contains the updated user details and returns `200 OK`.

## Postman location

`Update User → 2xx - Success Responses → 200 - OK - Update User`
