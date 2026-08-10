# Get User by ID — 404 Not Found

## Scenario

A `GET /api/users/{{userId}}` request returns `404 Not Found` because the specified user ID does not exist.

**Method:** `GET`  
**Endpoint:** `{{baseUrl}}/api/users/{{userId}}`  
**Expected status:** `200 OK`  
**Actual status:** `404 Not Found`

## Purpose

Demonstrates investigation and resolution of a Get User by ID request for a non-existent user record.

## Request headers

| Header | Value |
|---|---|
| Authorization | `Bearer {{apiToken}}` |
| x-api-key | `{{apiKey}}` |
| Content-Type | `application/json` |

## Path parameter

| Parameter | Description | Example |
|---|---|---|
| `userId` | Unique identifier of the user to retrieve | `999999` |

## Expected result

The API returns the requested user record with `200 OK`.

## Actual result

The API returns `404 Not Found`.

```json
{
  "success": false,
  "message": "User not found"
}
```

## Root cause

The request used a user ID that did not match an existing user record.

## Resolution

Confirm that the user ID is correct and that the user record exists before sending the Get User by ID request.

## Verification

After correcting the user ID, resend the request and verify that the API returns `200 OK`.

## Postman location

`Get User by ID → 4xx - Client Errors → 404 - Not Found - Get User by ID`
