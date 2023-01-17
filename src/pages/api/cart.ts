import type { NextApiRequest, NextApiResponse } from 'next'

interface ResponseData {
  data: Data
  name: string
}

interface Data {
  cart: Cart
}

interface Cart {
  lineItems?: LineItem[]
}

interface LineItem {
  title: string
  category: Category
  specs?: Specs
}

interface Specs {
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({
    data: {
      cart: {
        lineItems: [
          {
            title: 'iPad Pro',
            category: 'TABLET',
            price: '699 Euro',
          }, {
            title: 'MacBook Pro',
            category: 'LAPTOP',
            price: '1299 Euro',
            specs: {
              processor: 'Apple M1',
            },
          },
        ],
      },
    },
  })
}
