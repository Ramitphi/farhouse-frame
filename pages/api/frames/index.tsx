/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next/pages-router/server";
import { frames } from "./frames";
import Image from "next/image";

const handleRequest = frames(async (ctx) => {
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
      "May 13, 2024, 6:30:00 PM"
    )}/${convertToGoogleTimeFormat("May 13, 2024, 7:30:00 PM")}`,

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
