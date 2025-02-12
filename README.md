# Delalaw Project

## Overview

This project is a marketplace application built with Next.js, TypeScript, and Tailwind CSS. It includes wallet connection functionality using `thirdweb` and `ethers.js`.

## Features

- Connect and disconnect wallet using MetaMask
- Display wallet address in the navigation bar
- Search functionality
- Responsive design with mobile support

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd marketplace
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## File Structure

- `components/navigation.tsx`: Navigation bar with wallet connection functionality
- `utils/wallet.ts`: Wallet connection and disconnection logic
- `hooks/use-toast.ts`: Custom hook for toast notifications
- `lib/utils.ts`: Utility functions
- `lib/colors.ts`: Color definitions

## Dependencies

- `next`
- `react`
- `thirdweb`
- `ethers`
- `tailwindcss`

## License

This project is licensed under the MIT License.
