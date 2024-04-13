## Naming convention

folder name - kebab-case
file name - snake_case
variable name - camelCase
class name - PascalCase
function name - camelCase
interface name - camelCase(having i prefix example - iUserInfo)

## Boilerplate having -

Router setup ✅
config setup ✅
response setup ✅
error setup (static and dynamic as well) ✅
logger setup ✅
Database setup ✅
repository setup
pagination setup ✅
CORS setup

## Response formate

{
statusCode : 200,
message : "",
data : {} || [{}],

    <!--  error -->
    errors : {} || [{}],
    errorCode : "CUSTOM_CODE_2000",
    debugId : "debugUUID",
    timestamp : "InGMT",
    metadata : {
        total : 100,
        page : 2
        perPage : 20,
        previousPage : "",
        nextPage : "",
    }

}

## Running Requirements

Create Env File
E.g For Dev create .env.development

Create your local DB and add the credentials to env.
Run B/E server
Use Npm command (npm run start:dev) to run this on development env

## Seed Data

Additional data already seeded at the time of initial Setup of DB with Sequelize. No Need to run separate Scripts

## Designs

Choose Module Based NestJs Design Setup with All Default Modules in Core Module and created separate Router Module for parent APIs routes.

## Assumptions

Used basic needed data at both DB schema level and APIs request payload and response. for easily understood purposes.
