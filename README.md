# ChatGPT_Clone

This project is a clone of ChatGPT, developed using React. It is designed to mimic some of the functionalities of the original ChatGPT by OpenAI, allowing users to interact with a chat interface to receive responses from a language model.

## Current Status

As of now, the project is in a development phase and not fully operational. There are known issues that need to be addressed:

- **API Key Issue**: The application requires an OpenAI API key to fetch responses from the GPT model. Currently, the application is unable to connect to the OpenAI API due to missing configuration for the `OPENAI_API_KEY` environment variable. This is a critical issue preventing the application from running as expected.

- **Responsiveness**: The UI is currently not responsive. This means it might not render well on devices with different screen sizes, such as mobile phones and tablets. Improving responsiveness is a priority for future updates to ensure a better user experience across all devices.

## Setting Up the OPENAI_API_KEY Environment Variable

To resolve the API key issue, follow these steps:

1. Obtain an API key from OpenAI by signing up or logging in at [OpenAI](https://openai.com/).

2. Once you have your API key, you need to set it as an environment variable in your development environment. The method to do this can vary based on your operating system:

   - **For Unix/Linux/macOS**: Open your terminal and execute the following command:
     ```bash
     export OPENAI_API_KEY='your_api_key_here'
     ```
     Replace `your_api_key_here` with the actual API key you obtained from OpenAI.

   - **For Windows**: Open Command Prompt and run:
     ```cmd
     set OPENAI_API_KEY=your_api_key_here
     ```
     Again, ensure you replace `your_api_key_here` with your actual API key.

3. After setting the environment variable, you may need to restart your development environment or terminal for the changes to take effect.

## Project Setup

To get the project up and running on your local machine, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies by running:
4. Start the development server with:
5. Your application should now be running on [http://localhost:3000](http://localhost:3000).

## Contributing

Contributions to improve the application are welcome, especially in addressing the current issues related to API connectivity and UI responsiveness. If you have suggestions or improvements, please feel free to fork the repository and submit a pull request.

## License

[MIT](LICENSE.md)


