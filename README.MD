# Sports Innovation Institute Research Project

This project explores the intersection of customer feedback, data analysis, and digital technologies. It employs advanced natural language processing techniques, data visualization, and machine learning to extract actionable insights from various domains, including sports, fitness, and e-commerce.

## Table of Contents

- [Sports Innovation Institute Research Project](#sports-innovation-institute-research-project)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Projects](#projects)
  - [Project Roadmap](#project-roadmap)
  - [Team](#team)
  - [Data \& Methodology](#data--methodology)
  - [License](#license)

## Overview

The project leverages data collected from multiple sources to identify key patterns and insights. It uses techniques like topic modeling, sentiment analysis, and data visualization to provide meaningful interpretations. The insights generated aim to guide decision-making, strategy development, and further research across various domains.

## Features

- **Data Collection and Preprocessing:** Automated data scraping, text cleaning, tokenization, stop word removal, and feature extraction.
- **Topic Modeling:** Identification of main topics using Latent Dirichlet Allocation.
- **Sentiment Analysis:** Evaluation of overall and feature-based sentiments within data.
- **Direct Database Connection (Electron Only):** In controlled environments, direct PostgreSQL connection is used for data display and CSV export.
- **Interactive UI:** Built with React and Tailwind CSS, featuring dynamic components like project roadmap, team profiles, and dataset information.

## Technologies

- **Frontend:** React, Vite, Tailwind CSS, shadcn/ui components, React Router, Recharts
- **Database:** PostgreSQL (direct connection for Electron apps; for production, use a secure backend)
- **Other Libraries:** pg, react-query, react-transition-group

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. For development, run:
   ```bash
   npm run dev
   ```

## Usage

- **Development:** Open the project in your favorite IDE (e.g., Visual Studio Code). Use the integrated terminal to run the development server.
- **Dataset Page:** View dataset details and export combined data directly (for Electron-based environments) from the Dataset section.
- **Navigation:** The project includes multiple pages (Overview, Team, Dataset, Methodology) accessible via the navigation bar.

## Projects

This repository includes the following sub-projects:

1. **What Stories Do Your Reviews Tell?**
   - A comprehensive analysis of customer reviews using natural language processing and machine learning techniques to uncover patterns and insights.

2. **What’s A Striker Worth?**
   - A smart, data-driven tool that predicts a striker’s market value by analyzing their stats, performance, and physical traits.

3. **NFL Big Data Bowl GuideBook**
   - A guidebook for NFL enthusiasts and analysts, detailing methodologies and insights from the NFL Big Data Bowl.

4. **Unified Review Collection Framework**
   - An open-source framework for collecting and analyzing product reviews from various retailers, featuring modular scrapers and PostgreSQL integration.

5. **Mining the LinkedIn Goldmine: Data Extraction Demystified**
   - A project exploring multiple methods for extracting LinkedIn profile data, including official APIs, web scraping, and third-party tools. Includes a detailed Google Slides presentation.

## Project Roadmap

The roadmap outlines key project phases:
- **Project Initiation & Data Collection:** Completed.
- **Data Preprocessing:** In progress.
- **Model Development & Analysis:** Not started.

Please refer to the [RoadmapCard](src/components/RoadmapCard.tsx) component for more details.

## Team

Our research team collaborates to deliver insights with academic rigor and practical impact. For team profiles, see the [TeamCard](src/components/TeamCard.tsx) component.

## Data & Methodology

- **Dataset Information:** Data collected from various sources, including e-commerce platforms, sports analytics, and social media.
- **Methodology:** The project utilizes web scraping techniques, data preprocessing, topic modeling, and sentiment analysis—explained further in the Methodology and Dataset sections.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
