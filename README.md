# FolkWarriors

## Warning

This code is open, but not open source. It is not licensed, which means you cannot use it freely for your own applications. You cannot "base your code on FolkWarriors," nor use our code for anything. At all. This is not permissible under our license terms (which do not exist).

## Currency Setup (Solana)

1. Install the [Solana CLI](https://docs.solana.com/cli/install-solana-cli).
   ```bash
   sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
   ```
2. Confirm Solana is installed:
   ```bash
   solana --version
   ```
3. Configure Solana CLI to use the devnet (test environment):
   ```bash
   solana config set --url https://api.devnet.solana.com
   ```
4. Generate a new Solana wallet:
   ```bash
   solana-keygen new
   ```
5. A keypair file (`id.json`) will be created. Save it securely.
6. Airdrop some SOL tokens to your devnet wallet:
   ```bash
   solana airdrop 2
   ```
   *(This gives you 2 SOL tokens for testing)*

You should now have fake SOL tokens for development and testing!

## Frontend Setup

1. `npm install`
2. Copy the example environment file:
   ```bash
   cp .env.local .env
   ```
3. Build your smart contracts using Anchor:
   ```bash
   anchor build
   ```
4. Deploy the contracts to Solana devnet:
   ```bash
   anchor deploy
   ```
5. Start the frontend development server:
   ```bash
   npm run start:frontend
   ```

For Windows developers experiencing errors follow these steps:
1. Delete build artifacts:
   ```bash
   rm -rf target
   ```
2. Rebuild the contracts:
   ```bash
   anchor build
   ```
3. Redeploy contracts:
   ```bash
   anchor deploy
   ```
4. Restart the frontend:
   ```bash
   npm run start:frontend
   ```

### VSCode Setup

If you're using VSCode, we recommend these extensions: Auto Rename Tag, EditorConfig for VSCode, Eslint, Github Pull Requests, Gitlens, Javascript and Typescript, Live Share, Solidity, Typescript Hero, Vetur

## Environment Variables

There are optional environment variables, most of which have sensible defaults if copied from `.env.local`:

- `VUE_APP_API_URL` - the API URL to use - defaults to prod (which will throw CORS errors on local)
- `ANCHOR_PROVIDER_URL` - the Solana RPC endpoint URL
- `ANCHOR_WALLET` - the path to your Solana wallet keypair file

## Structure

- `programs` contains the Solana smart contracts using Anchor framework
- `frontend` contains the Vue code for the frontend
- `migrations` contains migration files
- `test` contains tests

## Commands

- `npm run start:frontend` - start up a server for the Vue frontend
- `npm run lint` - run lint checking for all modules
- `anchor build` - compile the Anchor-based Solana programs
- `anchor deploy` - deploy the Solana programs for testing

## Errors
- **Browserslist Update:** If prompted, update the Browserslist database:
   ```bash
   npx browserslist@latest --update-db
   ```
- **Lint Parsing Error:**
  - Exclude `server.js` by adding it to `.eslintignore`:
    ```
    server.js
    ```
  - Alternatively, update `.eslintrc.js` to ignore specific rules for `server.js`:
    ```javascript
    module.exports = {
      parserOptions: {
        project: './tsconfig.json',
      },
      overrides: [
        {
          files: ['server.js'],
          parserOptions: {
            project: null
          },
          rules: {
            '@typescript-eslint/no-var-requires': 'off'
          },
        },
      ],
    };
    ```
- **Rebuild Dependencies:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```
- **Reset Build Artifacts:**
   ```bash
   rm -rf target
   ```
- **Retry Pipeline:** Re-run tests after applying fixes:
   ```bash
   npm run lint
   ```

## Tests
- To run tests locally:
   ```bash
   npm run test:local
   ```
   > NOTE: This uses fixtures, not migrations. Keep fixtures updated in `/test/helpers/prepareContracts.js`.

## Config
- All network config is in `app-config.json`
- Setup:
   ```bash
   cd frontend
   npm run setup-app-config
   ```
- Add networks in `app-config.json` and update the `currentTokenPrice` getter.

## Alternative Development Flow with Hardhat

1. Start Hardhat node:
   ```bash
   npx hardhat node
   ```
2. Compile Hardhat artifacts:
   ```bash
   npx hardhat compile
   ```
3. Deploy to Hardhat node:
   ```bash
   export ETH_DEV_RPC_PORT=8545 && npm run deploy --reset
   ```
4. Start frontend with Hardhat:
   ```bash
   export VUE_APP_NETWORK_ID=31337 && npm run start:frontend
   ```

## i18n (Internationalization)
- We use `vue-i18n` for translations. Default language is English.
- To add languages, copy `en.json` in `frontend/src/locales` and rename to the desired ISO code.
- Use `i18n-manager` for easier translations.
