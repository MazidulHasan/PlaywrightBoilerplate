import { test as base } from '@playwright/test';
import env from '../config/env.config.js';
import fs from 'fs';
import path from 'path';
import { Logger } from '../utils/logger.js';

const logger = new Logger({ level: env.logLevel });

export const test = base.extend({
  envConfig: async ({}, use) => {
    await use(env);
  },
  logger: async ({}, use) => {
    await use(logger);
  }
});

export const expect = test.expect;