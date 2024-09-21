import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: "logs.txt" })],
});

const loggerMiddleware = async (req, res, next) => {
  if (req.url.includes("signup") || req.url.includes("signin")) {
    next();
  } else {
    const logData = `req url: ${req.url} req body: ${JSON.stringify(req.body)}`;
    logger.info(logData);
    next();
  }
};

export default loggerMiddleware;
