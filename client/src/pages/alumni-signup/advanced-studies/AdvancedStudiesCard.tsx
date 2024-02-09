import React from 'react'
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import { format } from 'date-fns'

type AdvancedStudiesCardType= {
  title: string,
  date: string,
  placeOfTrainingOrInstitution: string,
  reason?: string,
  onDeleteClickHandler: (e: React.FormEvent<HTMLButtonElement>) => void
}

const AdvancedStudiesCard: React.FC<AdvancedStudiesCardType> = ({ title, date, placeOfTrainingOrInstitution, reason, onDeleteClickHandler }) => {
  return (
    <div className='w-full'>
      <Card>
        <CardContent className='flex flex-row items-start mt-4'>
          <div>
            <p className='text-base font-medium'>{title} ({format(date, 'PP')})</p>
            {/* <p className='text-sm' ></p> */}
            <p className='text-sm mt-1' >Institution: {placeOfTrainingOrInstitution}</p>
            { reason && <p className='text-sm' >Reason: {reason}</p> }
          </div>
          <Button className='ml-auto bg-error-300 hover:bg-error-700' onClick={onDeleteClickHandler} size='sm'>
            <Trash2/>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdvancedStudiesCard