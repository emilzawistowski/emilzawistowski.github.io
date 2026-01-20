---
layout: single
title: "Spatial Audio Perception in Virtual Reality"
date: 2024-03-15
type: research
is_big_project: false
featured: true
portfolios:
  - academic
categories:
  - psychoacoustics
  - spatial-audio
  - virtual-reality
tags:
  - experiment
  - python
  - unity
  - hrtf
collaborators:
  - "Dr. Jane Smith"
  - "VR Audio Lab"
image: /assets/images/research/projects/spatial-vr.jpg
github: https://github.com/yourname/spatial-vr-study
---

## Overview

This project investigates how listeners perceive and localize sound sources in virtual reality environments, with particular focus on the accuracy of spatial audio rendering techniques and individual differences in spatial hearing.

## Research Questions

- How accurately can listeners localize virtual sound sources in VR compared to real environments?
- What role do individualized HRTFs play in spatial audio perception accuracy?
- How does visual-auditory congruence affect spatial audio perception in VR?

## Methodology

### Experimental Design
- **Participants:** 40 listeners (20 experienced, 20 naive)
- **Environment:** VR headset with integrated spatial audio (Meta Quest 3)
- **Tasks:** Sound source localization, distance estimation, and externalization judgments
- **Conditions:** Generic HRTF vs. individualized HRTF, with and without visual cues

### Technical Setup
- Custom Unity application for VR environment and audio rendering
- Python pipeline for HRTF measurement and individualization
- Real-time binaural rendering using measured HRTFs
- Automated data collection and analysis pipeline

## Key Findings

- Individualized HRTFs improved localization accuracy by 23% (p < 0.001)
- Visual-auditory congruence significantly improved externalization ratings
- Experienced listeners showed higher accuracy but similar improvement with individualized HRTFs
- Front-back confusions reduced by 45% with individualized HRTFs

## Tools & Technologies

- **VR Platform:** Unity 3D with Meta Quest 3
- **Audio Engine:** Custom binaural renderer in C#
- **Analysis:** Python (NumPy, SciPy, Pandas, Matplotlib)
- **Statistics:** R with lme4 for mixed-effects modeling
- **HRTF Measurement:** Custom measurement rig with Genelec monitors

## Publications

- **Your Name**, Smith, J. (2024). "Spatial Audio Perception in Virtual Reality Environments." *International Conference on Acoustics (ICA 2024)*. [PDF](/assets/files/publications/2024-spatial-vr.pdf)

## Code & Data

- [GitHub Repository](https://github.com/yourname/spatial-vr-study) — Experimental code, analysis scripts, and documentation
- [OSF Project](https://osf.io/xxxxx/) — Complete dataset and supplementary materials

## Impact

This research contributes to understanding individual differences in spatial audio perception and provides evidence for the importance of HRTF individualization in VR applications. Results have been implemented in commercial VR audio middleware.

## Acknowledgments

This work was supported by the Sound and Music Computing Research Grant and conducted at the VR Audio Lab. Special thanks to all participants and the technical team.