#!/bin/bash
cd /home/kavia/workspace/code-generation/aryaka-landing-page-redesign-b86c05cb/react_landing_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

