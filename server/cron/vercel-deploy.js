export default async function handler(req, res) {
  try {
    if (
      req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`
    ) {
      await fetch(
        "https://api.vercel.com/v1/integrations/deploy/prj_zTJWxxF5jzFwcQn9RM9KQiboOnDf/TuYc6Ab18z"
      );
      res.status(200).end("Hello Cron!");
    }
  } catch (error) {
    res.status(500).end(error);
  }
}
