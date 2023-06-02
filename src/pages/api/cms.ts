import type { NextApiRequest, NextApiResponse } from 'next';
import { footerMockData, headerMockData } from '__mocks__';
import { IResponseCms } from 'pages/interfaces';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponseCms>
) {
  res.status(200).json({
    ...headerMockData,
    ...footerMockData
  });
}
