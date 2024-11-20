import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';

import { getPrisma } from './prisma';

export const auth = betterAuth({
  database: prismaAdapter(getPrisma, {
    provider: 'postgresql',
  }),

  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.ClientID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    },
  },
});
