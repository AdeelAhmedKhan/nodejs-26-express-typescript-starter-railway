import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";

const PORT = Number(process.env.PORT ?? 8080);

const app = express();
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.json({
    name: "Node.js 26 Express TypeScript Starter",
    endpoints: [
      { method: "GET", path: "/", description: "List the endpoints" },
      {
        method: "GET",
        path: "/health",
        description: "Service health and uptime",
      },
      {
        method: "GET",
        path: "/echo?message=hi",
        description: "Echo the message query parameter",
      },
    ],
  });
});

app.get("/health", (_req: Request, res: Response) => {
  res.json({
    status: "ok",
    uptimeSeconds: Math.floor(process.uptime()),
  });
});

app.get("/echo", (req: Request, res: Response) => {
  const message = req.query.message;
  if (typeof message !== "string" || message === "") {
    res.status(400).json({ error: "Missing required query parameter: message" });
    return;
  }
  res.json({ message });
});

app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: "Not found" });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`Listening on port ${PORT}`);
});

function shutdown(signal: string): void {
  console.log(`Received ${signal}, shutting down gracefully...`);
  server.close(() => {
    process.exit(0);
  });
}

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
