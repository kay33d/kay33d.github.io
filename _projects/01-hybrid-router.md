---
anchor: hybrid-router
title: Hybrid Router for Token Optimization
when: 2026 · Ongoing
order: 1
tags: [LLM routing, llama.cpp / GGUF, RAG / agents, Docker]
---
An LLM routing system that decides, per query, whether a small local model can answer or whether it needs a remote LLM — cutting token cost without giving up quality on hard queries.

- Grammar-constrained intent classification makes the routing decision reliable and parseable.
- Simple tasks run on a local model served with llama.cpp (GGUF); complex ones go to a remote LLM.
