````
# Delete User — 403 Forbidden

## Scenario

A `DELETE /api/users/{{userId}}` request returns `403 Forbidden` because the authenticated user does not have permission to delete user records.

**Method:** `DELETE`  
**Endpoint:** `{{baseUrl}}/api/users/{{userId}}`  
**Expected status:** `204 No Content`  
**Actual status:** `403 Forbidden`

## Purpose

Demonstrates investigation and resolution of an API authorization failure caused by insufficient user permissions.

## Request headers

| Header | Value |
|---|---|
| Authorization | `Bearer {{apiToken}}` |
| x-api-key | `{{apiKey}}` |
| Content-Type | `application/json` |

## Path parameter

| Parameter | Description | Example |
|---|---|---|
| `userId` | Unique identifier of the user to delete | `123456789` |

## Expected result

The API deletes the user record and returns `204 No Content`.

## Actual result

The API returns `403 Forbidden`.

```json
{
  "success": false,
  "message": "Access denied"
}
```

## Root cause

The request was authenticated successfully, but the user account did not have permission to delete user records.

## Resolution

Update the user role to include the required Delete User permission.

## Verification

After updating the user permissions, resend the request and verify that the API returns `204 No Content`.

## Postman location

`Delete User → 4xx - Client Errors → 403 - Forbidden - Delete User`

## Jira case study

> **Note:** This Jira ticket is a simulated portfolio artifact demonstrating issue documentation, investigation updates, and resolution tracking.


````

```md
![Jira ticket — Delete User 403 Forbidden](https://github.com/farujifaruji-stack/Technical-support-portfolio/blob/main/API%20Debugging%20Workflow/delete-user/403%20-%20Forbidden/API%20Project%20-%20Delete%20User%20-%20403%20Forbidden.png?raw=true)
```
