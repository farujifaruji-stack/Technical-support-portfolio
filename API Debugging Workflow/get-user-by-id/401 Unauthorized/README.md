# Get User by ID — 401 Unauthorized

## Scenario

A `GET /api/users/{{userId}}` request returns `401 Unauthorized` because the request is missing valid authentication credentials.

**Method:** `GET`  
**Endpoint:** `{{baseUrl}}/api/users/{{userId}}`  
**Expected status:** `200 OK`  
**Actual status:** `401 Unauthorized`

## Purpose

Demonstrates investigation and resolution of a Get User by ID request with invalid or missing authentication.

## Request headers

| Header | Value |
|---|---|
| Authorization | `Bearer {{apiToken}}` |
| x-api-key | `{{apiKey}}` |
| Content-Type | `application/json` |

## Path parameter

| Parameter | Description | Example |
|---|---|---|
| `userId` | Unique identifier of the user to retrieve | `200` |

## Expected result

The API returns the requested user record with `200 OK`.

## Actual result

The API returns `401 Unauthorized`.

```json
{
  "success": false,
  "message": "Unauthorized"
}
```

## Root cause

The authorization token or API key was missing, invalid, or expired.

## Resolution

Provide a valid `Authorization` bearer token and `x-api-key`, then resend the request.

## Verification

After updating the authentication credentials, resend the request and verify that the API returns `200 OK` with the user record.

## Postman location

`Get User by ID → 4xx - Client Errors → 401 - Unauthorized - Get User by ID`

## Jira case study

> **Note:** This Jira ticket is a simulated portfolio artifact demonstrating issue documentation, investigation updates, and resolution tracking.

![Get User by ID — 401 Unauthorized](https://raw.githubusercontent.com/farujifaruji-stack/Technical-support-portfolio/main/API%20Debugging%20Workflow/get-user-by-id/401%20Unauthorized/API%20Project%20-%20Get%20User%20BU%20Id%20-%20401%20Unauthorized.png)
