/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://neondb_owner:zN1SjaioOL7f@ep-polished-night-a17u7n0x.ap-southeast-1.aws.neon.tech/ai-shorts?sslmode=require',
    }
  };