# Automated Question Builder

## Application Overview

The **Automated Question Builder** allows users to select specific criteria and dynamically generate questions through a user-friendly interface. The frontend is developed using React, while Storybook is used to test and manage UI components in isolation.

## Abstract

The **Automated Question Builder** is a sophisticated web application designed to streamline the process of generating questions based on various criteria such as subject, topic, choices, and difficulty levels. The application integrates cutting-edge technologies like LlamaIndex for AI/ML processing, Chroma for managing embeddings, and CUDA for GPU acceleration. The backend is powered by Flask, interacting seamlessly with a React.js frontend, providing users with a dynamic and interactive platform for question creation. The entire backend can be executed on Google Colab, leveraging cloud-based GPU resources and MongoDB Atlas for persistent storage.

## GenAI Utilization

This application leverages advanced Generative AI (GenAI) models and tools for enhancing the question-building process:

- **LlamaIndex**: Utilized for AI-driven content processing and generating questions based on provided topics.
- **Chroma**: Manages document embeddings to ensure relevant content retrieval.
- **CUDA**: Enables GPU acceleration to optimize AI/ML model performance, particularly in Google Colab.

These tools are integrated into the backend to process input data efficiently, generating precise and contextually accurate questions for users.

### Features

- **Dynamic Question Generation**: Users can select a subject, topic, choice, and difficulty level to generate customized questions.
- **Component-Based Architecture**: The application is built with reusable React components.
- **Storybook Integration**: Storybook is used to isolate, test, and manage components, ensuring high-quality UI development.

### Components

- **SubjectSelector**: Allows users to select a subject from a list of options.
- **TopicSelector**: Enables topic selection based on the chosen subject.
- **ChoiceSelector**: Provides options to select specific types of questions or choices.
- **LevelSelector**: Allows selection of difficulty levels (e.g., Easy, Medium, Hard).
- **QuestionBuilder**: Integrates all selectors and handles the generation of questions based on user input.

### Storybook

Storybook is a powerful tool used for isolating and testing individual components. It allows developers to view components in different states and ensures that each component functions correctly before integration.

#### **Installation and Setup**

1. **Install Storybook**: 
   - Use `npx sb init` to initialize Storybook in your project.

2. **Configuration**: 
   - Create `.stories.js` files for your components to define how they should be displayed and tested within Storybook.

3. **Run Storybook**:
   - Start the Storybook server with `npm run storybook` and visit `http://localhost:6006` to view your components.

## Getting Started

1. **Install Dependencies**:
   - Run `npm install` to install all required dependencies.

2. **Run the Application**:
   - Start the application with `npm start`.

3. **Run Storybook**:
   - Use `npm run storybook` to start the Storybook server and view components in isolation.


## Console Output Details

1. **Action Logs**
- **Description**: Provides real-time logging of user interactions and system events.
- **Purpose**: Helps monitor user behavior, track application usage, and identify issues as they occur.
- **Typical Entries**: User logins, button clicks, page navigations, and API requests.

2. **Error Handling**
- **Description**: Logs detailed error messages along with stack traces for debugging purposes.
- **Purpose**: Offers concise and informative insights into issues, facilitating quick troubleshooting and resolution.
- **Typical Entries**: Syntax errors, runtime exceptions, failed API calls, and missing resources.

3. **Performance Metrics**
- **Description**: Logs various performance-related metrics to optimize application performance.
- **Purpose**: Identifies performance bottlenecks, such as slow API responses or high memory usage, and helps in optimization efforts.
- **Typical Entries**: API response times, memory usage statistics, CPU load, and application throughput.

4. **Security Alerts**
- **Description**: Captures events related to security and access control.
- **Purpose**: Monitors and alerts on suspicious activities and potential security threats, prioritizing them for immediate action.
- **Typical Entries**: Failed login attempts, unauthorized access attempts, and unusual user behavior patterns.
