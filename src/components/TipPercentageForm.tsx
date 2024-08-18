import React from 'react';
import type { Dispatch, SetStateAction } from 'react'
import { tipOptions } from '../data/db'

type TipPercentageFormProps = {
      setTip: Dispatch<SetStateAction<number>>
}

const TipPercentageForm = ({ setTip }: TipPercentageFormProps) => {

      return (
            <div>
                  <h3 className="font-bold text-2xl">Propinas</h3>

                  <form>
                        {tipOptions.map(tip => (
                              <div
                                    className='flex gap-2 p-2'
                                    key={tip.id}
                              >
                                    <input
                                          type='radio'
                                          id={tip.id}
                                          name='tip'
                                          value={tip.value}
                                          onChange={e => setTip(+ e.target.value)}
                                    />
                                    <label htmlFor={tip.id}>{tip.label}</label>
                              </div>
                        ))}
                  </form>
            </div>
      )
}

export default TipPercentageForm