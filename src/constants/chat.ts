import useStore from '@store/store';
import { ChatInterface, ConfigInterface, ModelOptions } from '@type/chat';
import { v4 as uuidv4 } from 'uuid';

const date = new Date();
const dateString =
  date.getFullYear() +
  '-' +
  ('0' + (date.getMonth() + 1)).slice(-2) +
  '-' +
  ('0' + date.getDate()).slice(-2);

// default system message obtained using the following method: https://twitter.com/DeminDimin/status/1619935545144279040
export const _defaultSystemMessage = '';

export const modelOptions: ModelOptions[] = [
  'gemini-1.5-pro',
  'gemini-1.5-flash',
  'gemini-1.5-pro-exp-0827',
  'gemini-1.5-flash-exp-0827',
  'gemini-1.5-pro-002',
  'gemini-1.5-flash-002',
  'gemini-1.5-flash-8b-exp-0924'
];

export const defaultModel = 'gemini-1.5-pro';

export const modelMaxToken = {
  'gemini-1.5-pro-latest': 1000000,
  'gemini-1.5-pro': 2097152,
  'gemini-1.5-flash': 1048576,
  'gemini-1.5-pro-exp-0827': 2097152,
  'gemini-1.5-flash-exp-0827': 1048576
};

export const modelCost = {
  'gemini-1.5-pro-latest': {
    prompt: { price: 0, unit: 0 },
    completion: { price: 0, unit: 0}
  }
};

export const defaultUserMaxToken = 1000000;

export const _defaultChatConfig: ConfigInterface = {
  model: defaultModel,
  max_tokens: defaultUserMaxToken,
  temperature: 1,
  presence_penalty: 0,
  top_p: 1,
  frequency_penalty: 0,
};

export const generateDefaultChat = (
  title?: string,
  folder?: string
): ChatInterface => ({
  id: uuidv4(),
  title: title ? title : 'Новый чат',
  messages:
    useStore.getState().defaultSystemMessage.length > 0
      ? [{ role: 'system', content: useStore.getState().defaultSystemMessage }]
      : [],
  config: { ...useStore.getState().defaultChatConfig },
  titleSet: false,
  folder,
});

export const codeLanguageSubset = [
  'python',
  'javascript',
  'java',
  'go',
  'bash',
  'c',
  'cpp',
  'csharp',
  'css',
  'diff',
  'graphql',
  'json',
  'kotlin',
  'less',
  'lua',
  'makefile',
  'markdown',
  'objectivec',
  'perl',
  'php',
  'php-template',
  'plaintext',
  'python-repl',
  'r',
  'ruby',
  'rust',
  'scss',
  'shell',
  'sql',
  'swift',
  'typescript',
  'vbnet',
  'wasm',
  'xml',
  'yaml',
];
