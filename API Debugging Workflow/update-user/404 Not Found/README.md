# Update User — 404 Not Found

## Scenario

A `PUT /api/users/{{userId}}` request returns `404 Not Found` because the specified user ID does not exist.

**Method:** `PUT`  
**Endpoint:** `{{baseUrl}}/api/users/{{userId}}`  
**Expected status:** `200 OK`  
**Actual status:** `404 Not Found`

## Purpose

Demonstrates investigation and resolution of an Update User request for a non-existent user record.

## Request headers

| Header | Value |
|---|---|
| Authorization | `Bearer {{apiToken}}` |
| x-api-key | `{{apiKey}}` |
| Content-Type | `application/json` |

## Path parameter

| Parameter | Description | Example |
|---|---|---|
| `userId` | Unique identifier of the user to update | `999999` |

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

Confirm that the user ID is correct and that the user record exists before sending the Update User request.

## Verification

After correcting the user ID, resend the request and verify that the API returns `200 OK`.

## Postman location

`Update User → 4xx - Client Errors → 404 - Not Found - Update User`


![Update User — 404 Not Found](https://raw.githubusercontent.com/farujifaruji-stack/Technical-support-portfolio/main/API%20Debugging%20Workflow/update-user/404%20Not%20Found/API%20Project%20-%20Update%20User%20-%20404%20Not%20Found.png)
