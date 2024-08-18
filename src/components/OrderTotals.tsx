import React from 'react'

type Props = {}

const OrderTotals = (props: Props) => {
      return (
            <>
                  <div className="space-y-3">
                        <h2 className="font_bold text-2xl">Totales y Propinas</h2>
                        <p>Subtotal a pagar: {''}
                              <span className='font-bold'>$0</span>
                        </p>

                        <p>Propinas: {''}
                              <span className='font-bold'>$0</span>
                        </p>

                        <p>Total a pagar: {''}
                              <span className='font-bold'>$0</span>
                        </p>
                  </div>
            </>
      )
}

export default OrderTotals