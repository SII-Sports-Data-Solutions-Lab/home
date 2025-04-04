# Sports Innovation Institute Research Project

This project analyzes e-commerce reviews on digital treadmills and exercise bikes. It employs advanced natural language processing techniques including Latent Dirichlet Allocation (LDA) for topic modeling and sentiment analysis to extract actionable insights from customer feedback.

## Table of Contents

- [Sports Innovation Institute Research Project](#sports-innovation-institute-research-project)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Roadmap](#project-roadmap)
  - [Team](#team)
  - [Data \& Methodology](#data--methodology)
  - [License](#license)

## Overview

The project leverages customer review data collected from multiple e-commerce and fitness review platforms. It uses LDA to identify key topics and performs sentiment analysis to understand customer perceptions. The insights generated aim to guide product development, marketing strategies, and further research in digital fitness equipment.

## Features

- **Data Collection and Preprocessing:** Automated data scraping, text cleaning, tokenization, stop word removal, and feature extraction.
- **Topic Modeling:** Identification of main topics using Latent Dirichlet Allocation.
- **Sentiment Analysis:** Evaluation of overall and feature-based sentiments within reviews.
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
- **Dataset Page:** View dataset details and export combined reviews directly (for Electron-based environments) from the Dataset section.
- **Navigation:** The project includes multiple pages (Overview, Team, Dataset, Methodology) accessible via the navigation bar.

## Project Roadmap

The roadmap outlines key project phases:
- **Project Initiation & Data Collection:** Completed.
- **Data Preprocessing:** In progress.
- **LDA Model Development & Analysis:** Not started.

Please refer to the [RoadmapCard](src/components/RoadmapCard.tsx) component for more details.

## Team

Our research team, including experts from the Sports Innovation Institute, collaborates to deliver insights with academic rigor and practical impact. For team profiles, see the [TeamCard](src/components/TeamCard.tsx) component.

## Data & Methodology

- **Dataset Information:** Reviews collected from major e-commerce platforms (e.g., Amazon, Walmart, Best Buy) and specialized fitness review sites.
- **Methodology:** The project utilizes web scraping techniques, data preprocessing, LDA for topic modeling, and sentiment analysis—explained further in the Methodology and Dataset sections.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details. 
