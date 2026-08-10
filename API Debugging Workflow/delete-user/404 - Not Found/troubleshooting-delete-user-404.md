# Troubleshooting Process — Delete User 404 Not Found

> **Note:** This is a simulated portfolio troubleshooting case. All logs and request data are sanitized and created for demonstration purposes.

1. Received a customer ticket reporting that they could not delete a user.

2. Reviewed the application logs.

```log
2026-07-21T10:38:43Z INFO Delete User widget clicked
# Confirmation and user-selection events omitted
2026-07-21T10:42:10Z INFO Delete request prepared: userId=999999
2026-07-21T10:42:14Z INFO "Delete" button submitted
2026-07-21T10:42:15Z INFO Request received: DELETE /api/users/999999
2026-07-21T10:42:16Z ERROR User record not found: userId=999999
2026-07-21T10:42:17Z INFO Response sent: 404 Not Found
```

3. Reviewed the request URL and confirmed that the supplied user ID did not match an existing user record.

```text
DELETE {{baseUrl}}/api/users/999999
```

4. Confirmed that the user record had either already been deleted or that an incorrect user ID was supplied.

5. Created a Jira ticket to document the issue, evidence, investigation, and resolution.
```
