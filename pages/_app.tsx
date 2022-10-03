import { useState } from 'react';
import type { AppProps } from 'next/app';

import { ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
  DehydratedState,
} from 'react-query';

import theme from '../mui-theme';
import 'scss/reset.scss'; // Обнуляем стили
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'src/scss/index.scss'; //Коренной файл стилей (общий)
// import 'moment/locale/ru';

import { CookiesProvider } from 'react-cookie';

function App({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        preventDuplicate
        hideIconVariant={false}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <CookiesProvider>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />
            </Hydrate>
          </QueryClientProvider>
        </CookiesProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
