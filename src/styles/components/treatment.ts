import { css } from 'styled-components';
import { theme } from 'styles/theme';

const { space } = theme;

export const TreatmentHeading = css`
  margin-bottom: ${space && space[32]};
`;

export const TreatmentText = css`
  max-width: 150ch;
  margin-bottom: ${space && space[32]};
`;

export const TreatmentTopicsTitle = css`
  margin-top: ${space && space[32]};
`;

export const TreatmentTopicsDescription = css`
  max-width: 150ch;
`;

export const TreatmentTopicsList = css`
  max-width: 120ch;
`;

export const TreatmentDivider = css`
  margin: ${space && space[32]} 0;
`;

export const TreatmentLastDivider = css`
  margin: ${space && space[32]} 0 0;
`;
