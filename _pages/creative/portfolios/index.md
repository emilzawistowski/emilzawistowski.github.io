---
layout: single
title: "Creative Portfolios"
permalink: /creative/portfolios/
sidebar:
  nav: "creative"
---

These portfolios present my creative work in different professional contexts. Each portfolio is tailored for specific audiences and includes a curated selection of projects with relevant experience highlights.

## Available Portfolios

<div class="portfolio-overview-grid">
{% for portfolio in site.data.creative_portfolios %}
  <a href="/creative/portfolios/{{ portfolio.slug }}/" class="portfolio-overview-card">
    <div class="portfolio-overview-card__icon">
      <i class="{{ portfolio.icon }}" aria-hidden="true"></i>
    </div>
    <h3 class="portfolio-overview-card__title">{{ portfolio.title }}</h3>
    <p class="portfolio-overview-card__description">{{ portfolio.description }}</p>
  </a>
{% endfor %}
</div>

## How to Use These Portfolios

Each portfolio is designed to be shared independently:

- **Sound Engineering** — For live sound positions, touring work, and venue technical roles
- **Post-Production** — For film/video post-production, mixing, and sound design work
- **Music** — For bookings, label demos, and artistic collaborations
- **DJ-ing** — For club bookings, festival slots, and DJ agency representation
- **Other** — For podcast production, experimental work, and unique collaborations

You can link directly to a specific portfolio or use it as a professional reference.