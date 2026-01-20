---
layout: single
title: "Research Portfolios"
permalink: /research/portfolios/
sidebar:
  nav: "research"
---

These portfolios present my research work in different professional contexts. Each portfolio is tailored for specific audiences and includes a curated selection of projects with relevant CV highlights.

## Available Portfolios

<div class="portfolio-overview-grid">
{% for portfolio in site.data.research_portfolios %}
  <a href="/research/portfolios/{{ portfolio.slug }}/" class="portfolio-overview-card">
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

- **Academic Research** — For academic positions, grant applications, and research collaborations
- **Software Development** — For technical positions, open-source contributions, and industry collaborations

You can link directly to a specific portfolio or download it as a PDF for applications.