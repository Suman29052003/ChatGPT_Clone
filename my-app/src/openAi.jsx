// let apiKey = "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";
const {Configuration , OpenAIApi} = require ("openai");
const configuration = new Configuration({apikey:"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"})
const openai = new OpenAIApi (configuration);

export async function sendmsg(message) {
  
    const res = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: message,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return res.data.choices[0].text;
  }
