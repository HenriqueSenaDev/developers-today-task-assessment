### This repository is composed of two projects:

## Frontend SPA application

Techs: TypeScript, React, NextJS, TailwindCSS and ShadcnUI.
Async Server componentes approach.

Required Environment variables:
    "NEXT_PUBLIC_BACKEND_HOST" (your local machine or the backend host)

Execute with commands: 
    cd ./frontend-web
    pnpm dev

## Backend RESTful API

Techs: TypeScript, NestJS.
Clean Code architecture with Vertical Slice architecture folder structured.

Allowed Environment variables:
    "PORT" (port to run the application)

Patterns not implemented because lack of time:
    Repository Acknowledgment
    Properly env variables setup
    Exception handle with succeed/fail pattern
    etc...

Execute with commands: 
    cd ./core-api
    pnpm start:dev
