# Delete User — 404 Not Found

## Scenario

A `DELETE /api/users/{{userId}}` request returns `404 Not Found` because the specified user ID does not exist.

**Method:** `DELETE`  
**Endpoint:** `{{baseUrl}}/api/users/{{userId}}`  
**Expected status:** `204 No Content`  
**Actual status:** `404 Not Found`

## Purpose

Demonstrates investigation and resolution of a Delete User request for a non-existent user record.

## Request headers

| Header | Value |
|---|---|
| Authorization | `Bearer {{apiToken}}` |
| x-api-key | `{{apiKey}}` |
| Content-Type | `application/json` |

## Path parameter

| Parameter | Description | Example |
|---|---|---|
| `userId` | Unique identifier of the user to delete | `999999` |

## Expected result

The API deletes an existing user record and returns `204 No Content`.

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

Confirm that the user ID is correct and that the user record exists before sending the Delete User request.

## Verification

After correcting the user ID, resend the request and verify that the API returns `204 No Content`.

## Postman location

`Delete User → 4xx - Client Errors → 404 - Not Found - Delete User`

## Jira case study

> **Note:** This Jira ticket is a simulated portfolio artifact demonstrating issue documentation, investigation updates, and resolution tracking.

![Jira ticket — Delete User 404 Not Found](https://github.com/farujifaruji-stack/Technical-support-portfolio/blob/main/API%20Debugging%20Workflow/delete-user/404%20-%20Not%20Found/API%20Project%20-%20Delete%20User%20-%20404%20Not%20Found.png?raw=true)
