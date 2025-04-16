export interface SiteConfiguration {
  title: string;
  titleSeparator: string;
  description: string;

  domain: string;
  siteUrl: string;
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    megaTitle: React.CSSProperties;
    lead: React.CSSProperties;
    bodyLarge: React.CSSProperties;
    bodyLargeBold: React.CSSProperties;
    bodyMedium: React.CSSProperties;
    bodyMediumBold: React.CSSProperties;
    bodySmall: React.CSSProperties;
    bodySmallBold: React.CSSProperties;
    small: React.CSSProperties;
    smallBold: React.CSSProperties;
    micro: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    megaTitle?: React.CSSProperties;
    lead?: React.CSSProperties;
    bodyLarge?: React.CSSProperties;
    bodyLargeBold?: React.CSSProperties;
    bodyMedium?: React.CSSProperties;
    bodyMediumBold?: React.CSSProperties;
    bodySmall?: React.CSSProperties;
    bodySmallBold?: React.CSSProperties;
    small?: React.CSSProperties;
    smallBold?: React.CSSProperties;
    micro?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    megaTitle: true;
    lead: true;
    bodyLarge: true;
    bodyLargeBold: true;
    bodyMedium: true;
    bodyMediumBold: true;
    bodySmall: true;
    bodySmallBold: true;
    small: true;
    smallBold: true;
    micro: true;
  }
}
