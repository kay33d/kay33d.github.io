---
anchor: cold-chain
title: ESP32-Based Wireless Sensor Network for Real-Time Cold Chain Monitoring
when: 2025 · EEE 416 Microprocessors & Embedded Systems Lab, BUET · team of 4
order: 5
tags: [ESP32, ESP-NOW, GSM / GPS, IoT, web dashboard]
report: assets/reports/cold-chain-monitor-report.pdf
code: https://github.com/Chrollo8/ESP32-Based-Wireless-Sensor-Network-for-Real-Time-Logistics-and-Cold-Chain-Monitoring
video: https://drive.google.com/drive/folders/1M_msSI9Zwd7alhYS4FyEzVGud9_3yOo0?usp=sharing
---
An IoT vaccine carrier that watches temperature, humidity, pressure, orientation and location during transport, and sends an SMS and updates a web dashboard the moment conditions leave the safe 2–8 °C range.

- Two controllers: an ESP32-S3 reads the BME280, MPU-6050 and NEO-8M GPS and runs the threshold logic; a TTGO T-Call ESP32 with SIM800L sends GSM alerts. They talk over ESP-NOW.
- Alerts arrive in about 5 seconds; stable through an 8-hour endurance test and a 6-hour real-world run with 100% success; about 7 days on a 10,000 mAh battery.
- **My part:** ESP-NOW link, ESP32-S3 firmware and sensor acquisition, hardware design, system integration, sensor calibration and validation.
