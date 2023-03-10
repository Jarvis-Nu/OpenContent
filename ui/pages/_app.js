import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { RecoilRoot } from 'recoil';

const { chains, provider, webSocketProvider } = configureChains(
  [
    polygonMumbai
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'OpenContent Ui',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme({
        accentColor: '#000000',
        accentColorForeground: 'white',
        borderRadius: 'small',
        fontStack: 'system',
        overlayBlur: 'small',
      })}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
