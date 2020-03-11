# Cloverleaf React Challenge

## LIVE DEMO AT [HTTPS://CLOVERDISC.WEB.APP](HTTPS://CLOVERDISC.WEB.APP)

Welcome to the Cloverleaf coding challenge!

Your task is to build a React application that allows a user to take the DISC behavioral assessment.
Feel free to use any supplementary libraries/frameworks.

### About DISC
DISC is an assessment that analyzes your personality based on four traits: Decisiveness, Interactivity, Steadiness, and Conscientiousness.

Descriptive words are grouped into sets of four. Review the words in each set and indicate which word in each set is most like you and least like you.

### Requirements
1. Each set of words must have a Most and Least word selected. (grouped words are in [words.json](./words.json))
2. Only one word in each group may be Most, and only one may be Least.
3. POST answers to `/disc/evaluate` (documentation below).
4. Successful request will return results with a 200 response.
5. Display the user's score. Only render the `total` value for each trait (not the `motivated` or `latent` values).

### API
**POST** https://test.cloverleaf.me/api/disc/evaluate

**Security**

Pass an `Authorization` header with your API key value.

**Body**

| Field | Type | Description |
| ----- | ---- | ----------- |
| answers | array | Answer objects |

**Answer Object**

| Field | Type | Description |
| ----- | ---- | ----------- |
| description | string | The DISC descriptive word |
| rank | number | 1 for Most like the user, 4 for Least |

**Response**

| Field | Type | Description |
| ----- | ---- | ----------- |
| success | boolean | Success indicator |
| scores | object | DISC scores |

**Example Request**
(Be sure to include all answers (48 in total) — sending only two will return an error.)
```
curl -X POST \
  https://test.cloverleaf.me/api/disc/evaluate \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
  "answers": [
  { "description": "persuasive", "rank": 1 },
  { "description": "humble", "rank": 4 }
]}'
```

**Example Word Grouping**

Feel free to design the UI to your liking.

You may also see our live version of the DISC assessment on our site. Create an account at https://cloverleaf.cloverleaf.me/apply.

## Next Steps

Commit and push your solution to the GitLab repository.

Notify `matt@cloverleaf.me`.
