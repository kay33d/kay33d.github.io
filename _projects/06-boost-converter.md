---
anchor: boost-converter
title: Multi-Level DC-DC Boost Converter
when: 2025 · EEE 316 Power Electronics Lab, BUET · team of 4
order: 6
tags: [power electronics, circuit simulation, IGBT gate drive]
report: assets/reports/boost-converter-report.pdf
---
A three-level boost converter that steps a 13.5 V input up to 45 V, 90 V or 135 V, built to avoid the efficiency and regulation problems a single-stage boost has at high gain.

- A 3524 switching-regulator IC generates the gate pulses; a CD4050 buffer drives the GT30J322 IGBT. A 9 V transformer was repurposed as the inductor.
- Measured 45.1 V, 91.2 V and 137.8 V against 45 / 90 / 135 V targets, with roughly 98% efficiency and stable output under changing load.
