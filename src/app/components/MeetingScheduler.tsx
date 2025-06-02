"use client";

import { motion } from "framer-motion";

export default function MeetingScheduler() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-8 shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-6">Schedule a Meeting</h2>
      <div className="calendly-inline-widget" data-url="https://calendly.com/sanalpkwork/30min" style={{ minWidth: '320px', height: '700px' }}></div>
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
    </motion.div>
  );
}
