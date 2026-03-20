#!/bin/bash
# Push to GitHub using the stored personal access token

if [ -z "$GITHUB_PERSONAL_ACCESS_TOKEN" ]; then
  echo "ERROR: GITHUB_PERSONAL_ACCESS_TOKEN secret is not set."
  exit 1
fi

REMOTE_URL="https://Sauravkathet:${GITHUB_PERSONAL_ACCESS_TOKEN}@github.com/Sauravkathet/Ayul-Community-Care.git"

git config user.name "Ayul Community Care"
git config user.email "admin@ayulcommunitycare.com.au"

echo "Pushing to GitHub..."
git push "$REMOTE_URL" main

if [ $? -eq 0 ]; then
  echo ""
  echo "✓ Successfully pushed to GitHub!"
  echo "  → https://github.com/Sauravkathet/Ayul-Community-Care"
else
  echo ""
  echo "✗ Push failed. Check your token permissions (needs 'repo' scope)."
fi
