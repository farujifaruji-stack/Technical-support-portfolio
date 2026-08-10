# Update User — 409 Conflict

## Scenario

A `PUT /api/users/{{userId}}` request returns `409 Conflict` because the submitted email address already belongs to another user.

**Method:** `PUT`  
**Endpoint:** `{{baseUrl}}/api/users/{{userId}}`  
**Expected status:** `200 OK`  
**Actual status:** `409 Conflict`

## Purpose

Demonstrates investigation and resolution of an Update User request with conflicting user data.

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
  "email": "existing.user@example.com"
}
```

## Expected result

The API updates the user record and returns `200 OK`.

## Actual result

The API returns `409 Conflict`.

```json
{
  "success": false,
  "message": "Email already exists"
}
```

## Root cause

The email address in the request body was already assigned to another user record.

## Resolution

Use a unique email address in the request body.

## Verification

After updating the email address, resend the request and verify that the API returns `200 OK`.

## Postman location

`Update User → 4xx - Client Errors → 409 - Conflict - Update User`

![Update User — 409 Conflict](https://raw.githubusercontent.com/farujifaruji-stack/Technical-support-portfolio/main/API%20Debugging%20Workflow/update-user/409%20Conflict/API%20Project%20-%20Update%20Users%20-%20400%20Bad%20Request.png)

