"use client";

import { StrictMode } from "react";

import { TranslationProvider } from "~i18n/TranslationProvider";
import { StoreProvider } from "~store/provider";
import notistackRef from "~utils/notistackRef";
import { queryClient } from "~utils/queryClient";

import MuiThemeProvider from "./muiThemeProvider/MuiThemeProvider";
import { RootStyleRegistry } from "./styleRegistry";

import { SnackbarProvider } from "notistack";
import type { FC, PropsWithChildren } from "react";
import { QueryClientProvider } from "react-query";
export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <RootStyleRegistry>
      <StrictMode>
        <StoreProvider>
          <MuiThemeProvider>
            <TranslationProvider>
              <SnackbarProvider ref={notistackRef} maxSnack={2}>
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
              </SnackbarProvider>
            </TranslationProvider>
          </MuiThemeProvider>
        </StoreProvider>
      </StrictMode>
    </RootStyleRegistry>
  );
};
