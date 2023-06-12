import * as cron from "node-cron";

export const scheduleCronJobs = () => {
  cron.schedule("* * * * *", () => {
    console.log(`cron job running`);
  });
};
