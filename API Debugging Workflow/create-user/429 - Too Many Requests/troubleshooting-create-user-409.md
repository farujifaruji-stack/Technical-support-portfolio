# Troubleshooting Process — Create User 409 Conflict

> **Note:** This is a simulated portfolio troubleshooting case. All logs and request data are sanitized and created for demonstration purposes.

1. Received a customer ticket reporting that they could not create a new user.

2. Reviewed the application logs.

```log
2026-07-21T10:38:43Z INFO  Widget is clicked
.
.
.
2026-07-21T10:42:10Z INFO Request payload created
2026-07-21T10:42:14Z INFO "Create" button submitted
2026-07-21T10:42:15Z INFO Request received: POST /api/users
2026-07-21T10:42:16Z INFO Checking for existing user: emailAddress=walaa@test.com
2026-07-21T10:42:17Z ERROR Conflict detected: user already exists
2026-07-21T10:42:17Z INFO Response sent: 409 Conflict
```

3. Reviewed the request body sent to the API and confirmed that the auth token in missing in the header.

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "id": "123456789",
  "phoneNumber": "0501234567",
  "emailAddress": "walaa@test.com",
  "dateOfBirth": "14/01/2000"
}
```

4.Check the impact:
##### To check number of impacted customers:
Look up in logs, filter the results by project (API project in this case), and look for in the search bar for "Widget is clicked AND INFO Create user request payload created AND ERROR Conflict detected: user already exists AND INFO Response sent: 409 Conflict"

##### To check business impact:
Look up in the DB and check if there is any new customers that were added to the DB in the time frame of the issue.
Compare how much new users were added compared to similar hours and days in the past.

5. Created a Jira ticket to document the issue, evidence, investigation, and resolution. No escalation to the development team was needed because the issue was caused by an incomplete request headers.

6. Added Authorization: Bearer wf_api_2026_7f8a9c2d_debugkey to the Headers of the API request.

7. No need to resend the request. Create a Jira to add a clear message for the user.
   
8. Left a comment in the Jira about the fix and close the Jira.
