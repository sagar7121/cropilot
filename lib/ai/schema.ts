export const AUDIT_SCHEMA_DESCRIPTION = `
Return a JSON object with:

store:
    url
    name

overallScore

summary

opportunities[]

Each opportunity must include:

id
title
category
impact
confidence
effort
priorityScore
evidence[]
recommendation

experiment:
    hypothesis
    primaryMetric
    secondaryMetric
`;