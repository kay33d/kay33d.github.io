---
anchor: traffic
title: Smart Traffic Management via SAHI-Enhanced YOLOv8 & ByteTrack
when: 2026 · EEE 402, BUET · with Iswar Ghosh Rony and Md. Abu Sufian Promise
order: 3
tags: [YOLOv8, SAHI, ByteTrack, multi-object tracking, VisDrone, Python]
code: https://github.com/kay33d/smart-traffic-sahi-bytetrack
code_label: Code & paper
---
Traffic monitoring from drone footage. Vehicles in high-resolution aerial frames are tiny, so frames are cut into overlapping tiles (SAHI) before detection, then tracked across frames and scored per region for congestion.

- Pipeline: 640×640 tiles with 25% overlap → YOLOv8m per tile → merge + NMS → two-stage ByteTrack association → per-region density and speed → congestion level.
- SAHI raised detection mAP@0.5 from 0.433 to 0.560 (+29%), and small-object mAP by 48%, over plain YOLOv8m.
- Tracking reached 82.1 MOTA and 79.4 IDF1 with 18 ID switches, ahead of DeepSORT, FairMOT and stock ByteTrack.
