---
anchor: robotic-arm
title: "Librarian Arm: Semi-Autonomous Book Retrieval Robot"
when: 2024 · EEE 318 Control Systems Lab, BUET · team of 5
order: 8
tags: [Arduino, ESP32-CAM, ArUco, sensors & actuators, mechatronics]
report: assets/reports/librarian-arm-report.pdf
code: https://github.com/Chrollo8/Librarian-Arm
# video: upload to YouTube (Unlisted is fine) and put the link here, e.g.
# video: https://youtu.be/VIDEO_ID
---
A low-cost robot that finds a specific book on a shelf and pulls it out without damaging it.

- An ESP32-CAM spots the target book by its ArUco marker; ultrasonic sensors guide a DC gear motor and linear actuator into position; servos set tilt and grip; an Arduino Mega runs the sequence.
- A force-sensitive resistor stops the clamp before it squeezes too hard. The arm reliably stopped within ±1.5 cm of the target across repeated trials.
- **My part:** led component procurement, built the frame and motor/actuator mounts, integrated the FSR, and worked on full-system testing and calibration.
