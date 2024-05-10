/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next/pages-router/server";
import { frames } from "./frames";
import Image from "next/image";
import { init, validateFramesMessage } from "@airstack/frames";

const handleRequest = frames(async (ctx) => {
  const body = ctx.message;
  init("1cd28db661ccd461cb3663ffb06821cf4");

  const convertToGoogleTimeFormat = (date: string) =>
    new Date(date)
      .toISOString()
      .split("-")
      .join("")
      .split(":")
      .join("")
      .slice(0, 16)
      .concat("Z");

  const params = new URLSearchParams({
    text: "FarHouse Launch",
    dates: `${convertToGoogleTimeFormat(
      "May 13, 2024, 1:00:00 PM"
    )}/${convertToGoogleTimeFormat("May 13, 2024, 1:30:00 PM")}`,

    sf: "true",
    output: "xml",
  }).toString();

  return {
    image: `https://farhouse-frame.vercel.app/spaces.png`,
    buttons: [
      <Button
        action="link"
        target={`https://calendar.google.com/calendar/u/0/r/eventedit?${params}`}
      >
        Add Reminder for Launch
      </Button>,
    ],
  };
});

export default handleRequest;
