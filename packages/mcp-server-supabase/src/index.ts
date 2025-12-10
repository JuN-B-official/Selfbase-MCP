import packageJson from '../package.json' with { type: 'json' };

export type { ToolCallCallback } from './mcp-utils/server.js';
export type { SelfbasePlatform } from './platform/index.js';
export {
  createSelfbaseMcpServer,
  type SelfbaseMcpServerOptions,
} from './server.js';
export {
  featureGroupSchema,
  currentFeatureGroupSchema,
  type FeatureGroup,
} from './types.js';
export const version = packageJson.version;
