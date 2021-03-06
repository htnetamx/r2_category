import * as dotenv from "dotenv";
dotenv.config()

const hostname = process.env.HOSTNAME || "http://localhost:3001/"


export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title:'Category Microservice API',
            version: '1.0.0',
            description: 'Release 2.0 - Category Microservice'
        },
        servers: [
            {
                url: `${hostname}api/v1/`
            }
        ]
    },
    apis: ["./src/server/routes/index/*.ts", "./src/server/routes/category/*.ts"]
}