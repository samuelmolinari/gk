#!/usr/bin/env bash
aws s3 sync ./build s3://$BUCKET/
