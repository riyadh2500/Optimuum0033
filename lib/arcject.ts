import arcjet, { tokenBucket } from "@arcjet/next";

export const aj = arcjet({
  key: process.env.ARCJET_KEY || "ajkey_placeholder_for_build",
  characteristics: ["userId"],
  rules: [
    tokenBucket({
      mode: "LIVE",
      refillRate: 2,
      interval: 10,
      capacity: 20,
    }),
  ],
});
