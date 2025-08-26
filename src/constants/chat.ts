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
  'gemini-2.5-pro',
  'gemini-2.5-flash',
  'gemini-2.5-flash-lite',
  'gemini-2.0-flash',
  'gemini-2.0-flash-lite',
  'gemma-3n-e2b-it',
  'gemma-3n-e4b-it',
  'gemma-3-1b-it',
  'gemma-3-4b-it',
  'gemma-2-2b-it',
  'gemma-3-12b-it',
  'gemma-3-27b-it'
];

export const defaultModel = 'gemini-2.5-pro';

export const modelMaxToken = {
  'gemini-2.5-pro': 1048576,
  'gemini-2.5-flash': 1048576,
  'gemini-2.5-flash-lite': 1048576,
  'gemini-2.0-flash': 1048576,
  'gemini-2.0-flash-lite': 1048576,
  'gemma-3n-e2b-it': 8192,
  'gemma-3n-e4b-it': 8192,
  'gemma-3-1b-it': 32768,
  'gemma-3-4b-it': 32768,
  'gemma-2-2b-it': 32768,
  'gemma-3-12b-it': 32768,
  'gemma-3-27b-it': 131072
};

export const modelCost = {
  'gpt-3.5': {
    prompt: { price: 0.0015, unit: 1 },
    completion: { price: 0.002, unit: 1 }
  },
  'gpt-4': {
    prompt: { price: 0.03, unit: 1 },
    completion: { price: 0.06, unit: 1 }
  },
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
