import React from "react";

import type { SnackbarProvider, VariantType } from "notistack";

const notistackRef = React.createRef<SnackbarProvider>();

export const enqueueSnackbar = (type: VariantType, message: string | undefined): void => {
  notistackRef.current?.enqueueSnackbar(message, { variant: type, autoHideDuration: 2000 });
};

export default notistackRef;
