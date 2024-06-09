import React from "react";

export const Booking = () => {
  return (
    <div>
      <iframe
        src="https://nailssbybryanna.as.me/schedule.php"
        style={{ width: "80vw", height: "800px", border: "0" }}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <script
        src="https://embed.acuityscheduling.com/js/embed.js"
        type="text/javascript"
      ></script>
    </div>
  );
};
